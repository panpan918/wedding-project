<template>
    <div class="about">
        <tittle></tittle>
        <div class="middle">
            <halo></halo>
            <div class="middle-right">
                <div class="right-a" v-show="bossq">
                </div>
                <div class="right-b" v-show="bossq">
                    <div class="right-b-a"><em>Only boss can enter</em></div>
                    <div class="right-b-b">
                        <div class="right-b-c">
                            <input type="password" placeholder="请输入密码" v-model="bossPass">
                        </div>
                        <div class="right-b-d" @click="enterPage">enter</div>
                    </div>
                </div>
                <div class="right-c" v-if="bossEnter">
                    <div class="right-c-a">
                        <div class="right-c-tittle"><i>员工账号管理</i></div>
                        <div class="right-c-add">
                            <img src="../assets/add.png" @click="addStaff">
                        </div>
                    </div>
                    <div class="right-c-b">
                            <el-table :data="staffList" style="width: 100%" :border="true">
                                <el-table-column label="日期" width="180" align="center">
                                    <template slot-scope="scope">
                                        <i class="el-icon-time"></i>
                                        <span style="margin-left: 10px">{{ scope.row.date }}</span>
                                    </template>
                                </el-table-column>
                                <el-table-column label="姓名" width="180" align="center">
                                    <template slot-scope="scope">
                                        <el-popover trigger="hover" placement="top">
                                            <p>姓名: {{ scope.row.name }}</p>
                                            <p>住址: {{ scope.row.address }}</p>
                                            <div slot="reference" class="name-wrapper">
                                                <el-tag size="medium">{{ scope.row.name }}</el-tag>
                                            </div>
                                        </el-popover>
                                    </template>
                                </el-table-column>
                                <el-table-column label="操作" align="center">
                                    <template slot-scope="scope">
                                        <el-button size="mini" @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
                                        <el-button size="mini" type="danger" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
                                    </template>
                                </el-table-column>
                            </el-table>
                            <div class="staff-page" v-if="stuffPage">
                                <div class="page-a">
                                    <div class="page-a-a">姓名</div>
                                    <input type="text" v-model="stuffName">
                                </div>
                                <div class="page-a">
                                    <div class="page-a-a">职位</div>
                                    <input type="text" v-model="stuffA">
                                </div>
                                <div class="page-a">
                                    <div class="page-a-a">账号</div>
                                    <input type="text" v-model="stuffUser">
                                </div>
                                <div class="page-a">
                                    <div class="page-a-a">密码</div>
                                    <input type="text" v-model="stuffPass">
                                </div>
                                <div class="page-a">
                                    <div class="page-a-a">创建时间</div>
                                    <div class="page-a-b">{{msg}}</div>
                                </div>
                                <div class="page-c" @click="save">保存</div>
                            </div>
                            <div class="staff-page" v-if="stuffPages">
                                <div class="page-a">
                                    <div class="page-a-a">姓名</div>
                                    <input type="text" v-model="stuffNames">
                                </div>
                                <div class="page-a">
                                    <div class="page-a-a">职位</div>
                                    <input type="text" v-model="stuffAs">
                                </div>
                                <div class="page-a">
                                    <div class="page-a-a">账号</div>
                                    <input type="text" v-model="stuffUsers">
                                </div>
                                <div class="page-a">
                                    <div class="page-a-a">密码</div>
                                    <input type="text" v-model="stuffPasss">
                                </div>
                                <div class="page-a">
                                    <div class="page-a-a">创建时间</div>
                                    <div class="page-a-b">{{msgs}}</div>
                                </div>
                                <div class="page-c" @click="addStaffa">添加</div>
                                <div class="page-d" @click="addStaffb">取消</div>
                            </div>
                    </div>
                    
                </div>
                <div class="right-d" v-if="bossEnter">
                    <div class="right-e-a">账号登录记录</div>
                    <div class="right-e-b">
                        <el-table :data="tableData.filter(data => !searchs || data.name.toLowerCase().includes(searchs.toLowerCase()))" style="width: 100%" :border="true" :stripe="true">
                            <el-table-column label="登陆时间" prop="date">
                            </el-table-column>
                            <el-table-column label="登出时间" prop="dateOut">
                            </el-table-column>
                            <el-table-column label="姓名" prop="name">
                            </el-table-column>
                            <el-table-column align="right">
                                <template slot="header" slot-scope="scope">
                                    <el-input v-model="searchs" size="mini" placeholder="输入关键字搜索"/>
                                </template>
                                
                            </el-table-column>
                        </el-table>
                    </div>
                </div>
                <div class="shadow" v-if="bossEnter">
                    <img src="../assets/down.png" @click="shadow">
                    <div class="shadow-a" @click="modify">修改密码</div>
                    <div class="shadow-a-a" v-if="modifyPage">
                        <input type="password" placeholder="请输入新密码" v-model="passBoss">
                        <input type="password" placeholder="再次确认密码" v-model="passBossa">
                        <div class="shadow-a-b" @click="modifyLast">确认</div>
                        <div class="shadow-a-c" @click="modifyLasta">放弃修改</div>
                    </div>
                </div>
            </div>
        </div>
        <div class="nav-bottom"><em>Customer is God</em></div>
    </div>
</template>
<script>
import tittle from '@/components/tittle.vue'
import halo from '@/components/about/halo.vue'
export default {
    data(){
        return{
            bossq:true,
            bossEnter:false,
            bossPass:"",
            stuffPage:false,
            passBoss:"",
            passBossa:"",
            msg:"",
            stuffName:"",
            modifyPage:false,
            stuffA:"",
            stuffUser:"",
            stuffPass:"",
            stuffPages:false,
            stuffNames:"",
            stuffAs:"",
            stuffUsers:"",
            stuffPasss:"",
            msgs:"",
            bossPassword:"123456",
            staffList: [
                {
                    date: '2016-05-02',
                    name: '王小虎',
                    pos:"店长",
                    user:"13525245698",
                    pass:"asd123"
                }, {
                    date: '2018-05-04',
                    name: '王晓琳',
                    pos:"前台",
                    user:"13985645698",
                    pass:"asd123"
                }, {
                    date: '2019-05-01',
                    name: '陈楠',
                    pos:"化妆师",
                    user:"13689645698",
                    pass:"asd123"
                }, {
                    date: '2017-05-03',
                    name: '周嘉怡',
                    pos:"摄影师",
                    user:"13756945698",
                    pass:"asd123"
                }],
                 tableData: [
                    {
                        date: '2016-05-02',
                        name: '王小虎',
                        dateOut:"2016-06-04"
                    }
                ],
                searchs:""
            }
        },
    components:{
        tittle,
        halo
    },
    methods:{
        enterPage:function(){
            if(this.bossPass !== this.bossPassword){
                alert("密码错误");
                this.bossPass = "";
            }else{
                this.bossq = false;
                this.bossEnter = true;
                this.bossPass = "";
            }
        },
        shadow:function(){
            this.bossq = true;
            this.bossEnter = false;
        },
        handleEdit(index, row) {
            this.stuffPage = true;
            this.stuffName = this.staffList[index].name;
            this.stuffA = this.staffList[index].pos;
            this.stuffUser = this.staffList[index].user;
            this.stuffPass = this.staffList[index].pass;
            this.msg = this.staffList[index].date;
        },
        handleDelete(index, row) {
            this.staffList.splice(index,1);
        },
        save:function(){
            for(var i = 0;i<this.staffList.length;i++){
                if(this.stuffName == this.staffList[i].name){
                    this.staffList[i].pos = this.stuffA; 
                    this.staffList[i].user = this.stuffUser; 
                    this.staffList[i].pass = this.stuffPass; 
                }
            }
            this.stuffPage = false;    
        },
        modify:function(){
            this.modifyPage = true;
        },
        modifyLast:function(){
            if(this.passBoss !== this.passBossa){
                alert("密码不一致");
            }else{
                this.bossPassword = this.passBoss;
                this.passBoss = "";
                this.passBossa = "";
                this.modifyPage = false;
            }
        },
        modifyLasta:function(){
            this.passBoss = "";
            this.passBossa = "";
            this.modifyPage = false;
        },
        addStaff:function(){
            this.stuffPages = true;
            var nowTime = new Date();
            this.msgs = nowTime.toLocaleDateString();
        },
        addStaffb:function(){
            this.msgs = "";
            this.stuffNames = "";
            this.stuffAs = "";
            this.stuffUsers = "";
            this.stuffPasss = "";
            this.stuffPages = false;
        },
        addStaffa:function(){
            // var nowTime = new Date();
            // this.msgs = nowTime.toLocaleDateString();
            this.staffList.push({
                date:this.msgs,
                name:this.stuffNames,
                pos:this.stuffAs,
                user:this.stuffUsers,
                pass:this.stuffPasss
            });
            this.msgs = "";
            this.stuffNames = "";
            this.stuffAs = "";
            this.stuffUsers = "";
            this.stuffPasss = "";
            this.stuffPages = false;
        }
    }
}
</script>
<style scoped>
    .about{
        width:100%;
        height:970px;
        background: rgb(240,240,240);
    }
    .middle{
        width:100%;
        height:800px;
        display:flex;
    }
    .middle-right{
        width:100%;
        height:760px;
        margin:20px auto;
        background: rgb(255,255,255);
        display:flex;
    }
    .nav-bottom{
        width:100%;
        height:90px;
        background: rgb(51,163,228);
        /* background: black; */
        color:white;
        font-size:30px;
        line-height:90px;
        text-align: center;
    }
    .right-a{
        width:100%;
        height:760px;
        background: rgb(201, 196, 196);
        filter: blur(20px);
        z-index:9;
    }
    .right-b{
        width:400px;
        height:150px;
        background: rgb(240,240,240);
        margin-left:-1000px;
        margin-top:200px;
        z-index:10;
        padding-top:10px;
        font-family:"楷体";
        box-shadow:0 0 10px 10px rgb(201,196,196) inset;
    }
    .right-b-a{
        width:400px;
        height:40px;
        font-size:30px;
        line-height:40px;
        text-align:center;
        color:yellowgreen;
    }
    .right-b-b{
        width:400px;
        height:40px;
        margin-top:20px;
        font-size:25px;
        /* background: yellowgreen; */
        display:flex;
    }
    .right-b-c{
        width:220px;
        background: yellowgreen;
        height:40px;
        margin-left:30px;
        border-radius:20px;
    }
    .right-b-c>input{
        width:180px;
        display: block;
        height:30px;
        margin:5px auto;
        border:none;
        background: yellowgreen;
        font-size:15px;
    }
    .right-b-d{
        width:80px;
        height:40px;
        background: yellowgreen;
        text-align: center;
        line-height: 40px;
        border-radius:20px;
        margin-left:20px;
        cursor:pointer;
    }
    .right-b-d:hover{
        box-shadow:0 0 5px 5px yellowgreen;
    }
    .right-c{
        width:50%;
        height:700px;
        background: rgb(248,248,248);
        margin:30px 0 0 20px;  
    }
    .right-c-a{
        width:100%;
        height:50px;
        color:yellowgreen;
        font-family:"楷体";
        display: flex;
    }
    .right-c-tittle{
        width:65%;
        height:50px;
        font-size:30px;
        line-height:50px;
        text-align: right;
    }
    .right-c-add{
        width:20%;
        height:50px;
        margin-left:100px;   
    }
    .right-c-add>img{
        width:40px;
        height:40px;
        cursor:pointer;
        margin:5px auto 0;
    }
    .right-c-add>img:hover{
        background:rgb(50,50,50);
        border-radius:10px;
        box-shadow:0 0 5px 5px rgb(50,50,50);
    }
    .right-d{
        width:40%;
        height:700px;
        background: rgb(248,248,248);
        margin:30px 0 0 20px;
    }
    .right-e-a{
        width:100%;
        height:50px;
        font-size:30px;
        line-height:50px;
        text-align: center;
        color:yellowgreen;
        font-family:"楷体";
    }
    .right-c-b{
        width:90%;
        height:620px;
        background: rgba(255,255,255,0.8);
        margin:0 auto;
        overflow-y: auto;
    }
    .staff-page{
        width:500px;
        height:500px;
        background:rgb(50,50,50);
        position:absolute;
        left:500px;
        top:200px;
        z-index:99;
        border-radius:15px;
        overflow: hidden;
        animation-name: staff;
        animation-duration: 1s;
    }
    @keyframes staff{
        from{transform: scale(0.1)}
        to{transform: scale(1)}
    }
    .page-a{
        width:100%;
        height:40px;
        margin-top:30px; 
        display:flex;
    }
    .page-a-a{
        width:30%;
        height:40px;
        font-size:20px;
        text-align: right;
        line-height: 40px;
        color:orange;
    }
    .page-a>input{
        display:block;
        width:40%;
        height:30px;
        border:1px solid blue;
        margin:5px 0 0 5px;
        text-align: center;
        font-size:18px;
    }
    .page-a-b{
        width:40%;
        height:30px;
        border:1px solid blue;
        margin:5px 0 0 5px;
        text-align: center;
        font-size:18px;
        background: rgb(255,255,255);
    }
    .page-c{
        width:90%;
        height:40px;
        margin: 30px auto 0;
        text-align: center;
        background: orange;
        color:white;
        line-height: 40px;
        font-size:22px;
        border-radius:10px;
        cursor: pointer;
    }
    .page-d{
        width:60%;
        height:40px;
        margin: 30px auto 0;
        text-align: center;
        background: rgb(51,163,228);
        color:white;
        line-height: 40px;
        font-size:22px;
        border-radius:10px;
        cursor: pointer;  
    }
    .page-c:hover{
        box-shadow:0 0 5px 5px orange;
    }
    .page-d:hover{
        box-shadow:0 0 5px 5px rgb(51,163,228);
    }
    .right-e-b{
        width:96%;
        height:610px;
        margin:0 auto;
        background: rgba(255,255,255,0.8);
        overflow-y: auto;
    }
    .shadow{
        width:5%;
        height:700px;
        background: rgb(240,240,240);
        margin:30px auto;
        cursor: pointer;
        display:table-cell;
        text-align: center;
        vertical-align: middle;
    }
    .shadow>img{
        width:60px;
        height:60px;
        margin-top:20px;
        align-items: center;
    }
    .shadow>img:hover{
        background: black;
        border-radius:10px;
        box-shadow: 0 0 5px 5px black;
    }
    .shadow-a{
        width:70%;
        height:60px;
        margin:100px auto;
        border-radius:5px;
        font-size: 20px;
        background:rgb(51,163,228);
        color:white;
    }
    .shadow-a:hover{
        background: black;
        box-shadow: 0 0 5px 5px black;
    }
    .shadow-a-a{
        width:300px;
        height:250px;
        background:rgb(50,50,50);
        position:absolute;
        right:150px;
        top:300px;
        z-index:99;
    }
    .shadow-a-a>input{
        display:block;
        width:80%;
        height:40px;
        margin:20px auto;
        font-size:18px;
        color:black;
        text-align: center;
    }
    .shadow-a-b{
        width:80%;
        height:40px;
        font-size:20px;
        background: rgb(255,255,255);
        color:black;
        margin:0 auto;
        line-height: 40px;
    }
    .shadow-a-b:hover{
        box-shadow:0 0 5px 5px rgb(51,163,228);
        background: rgb(51,163,228);
    }
    .shadow-a-c{
        width:60%;
        height:30px;
        font-size:15px;
        background: rgb(255,255,255);
        color:black;
        margin:30px auto;
        line-height: 30px;
    }
    .shadow-a-c:hover{
        box-shadow:0 0 5px 5px rgb(51,163,228);
        background: rgb(51,163,228);
    }


</style>
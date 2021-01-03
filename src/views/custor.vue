<template>
    <div class="about">
            <!-- 最顶部 -->
        <tittle></tittle>
        <div class="middle">
            <halo></halo>
            <div class="middle-right">
                <div class="right-a">
                    <div class="right-a-a">顾客详细信息</div>
                    <div class="right-b">
                        <el-table :data="userList.filter(data => !search || data.username.toLowerCase().includes(search.toLowerCase()))" style="width: 100%" :border="true" :stripe="true">
                            <el-table-column label="姓名" prop="username" width="130" align="center">
                            </el-table-column>
                            <el-table-column label="性别" prop="sex" width="100" align="center">
                            </el-table-column>
                            <el-table-column label="电话" prop="phone" width="180" align="center">
                            </el-table-column>
                            <el-table-column label="类型" prop="types" width="150" align="center">
                            </el-table-column>
                            <el-table-column align="center">
                                <template slot="header" slot-scope="scope">
                                    <el-input v-model="search" size="medium" placeholder="输入姓名搜索"/>
                                </template>
                                <template slot-scope="scope">
                                    <el-button size="mini" type="danger" @click="handleDelete(scope.$index, scope.row)">查看</el-button>
                                </template>
                            </el-table-column>
                        </el-table>      
                    </div> 
                </div>
                <div class="d-a">
                    <div class="d-b">
                        <div class="d-c">姓名 :</div>
                        <div class="d-d">{{usernames}}</div>
                    </div>
                    <div class="d-b">
                        <div class="d-c">性别 :</div>
                        <div class="d-d">{{sexs}}</div>
                    </div>
                    <div class="d-b">
                        <div class="d-c">手机号 :</div>
                        <div class="d-d">{{phones}}</div>
                    </div>
                    <div class="d-b">
                        <div class="d-c">类型 :</div>
                        <div class="d-d">{{typess}}</div>
                    </div>
                    <div class="d-b">
                        <div class="d-c">余额 :</div>
                        <div class="d-d">{{balaces}}</div>
                    </div>
                    <div class="d-b">
                        <div class="d-c">累计消费 :</div>
                        <div class="d-d">{{allBalace}}</div>
                    </div>
                    <div class="d-b">
                        <div class="d-c">创建时间 :</div>
                        <div class="d-d">{{timeOut}}</div>
                    </div>
                    <div class="d-e"></div>
                    <div class="d-f">套餐消费</div>
                    <div class="d-g">金额扣除</div>
                    <div class="d-h">金额充值</div>
                    <div class="d-i">
                        <div class="d-l">信息修改</div>
                        <div class="d-k">删除客户</div>
                    </div>
                </div>
                <div class="custor-a-right">
                    <div class="last-a-a" @click="addCusta">
                        <div class="last-a-b"></div>
                        <div class="last-a-c">添加新客户</div>
                    </div>
                    <div class="custor-total">客户数量 : {{userList.length}}</div>
                    <div class="custor-name">执行人 : {{}}</div>
                    <div class="custor-money">温馨提示<br>300元办理终身会员</div>
                </div>
                <div class="last-b-a" v-if="addCustor">
                    <div class="last-d-a">添加新客户</div>
                    <div class="last-b-b">
                        <div class="last-b-c">姓名</div>
                        <div class="last-b-d">
                            <input type="text" placeholder="请输入姓名" v-model="textName">
                        </div>
                    </div>
                    <div class="last-b-b">
                        <div class="last-b-c">性别</div>
                        <div class="last-b-d">
                            <input type="text" placeholder="请输入性别" v-model="textSex">
                        </div>
                    </div>
                    <div class="last-b-b">
                        <div class="last-b-c">手机号</div>
                        <div class="last-b-d">
                            <input type="text" placeholder="请输入手机号" v-model="textPhone">
                        </div>
                    </div>
                    <div class="last-b-b">
                        <div class="last-b-c">充值金额</div>
                        <div class="last-b-d">
                            <input type="text" placeholder="请输入金额" v-model="textBalace">
                        </div>
                    </div>
                    <div class="last-b-b">
                        <div class="last-b-c">类型</div>
                        <div class="last-b-d">
                            <input type="text" placeholder="请输入种类" v-model="textTypes">
                        </div>
                    </div>
                    <div class="last-d-b">
                        <div class="last-d-e" @click="shat">取消</div>
                        <div class="last-d-f" @click="addCustomer">添加</div>
                    </div>
                </div>
            </div>
        </div>
        <div class="nav-bottom">Customer is God</div>
    </div>    
</template>      
<script>
import tittle from '@/components/tittle.vue'
import halo from '@/components/about/halo.vue'
export default {
    data(){
        return{
            userList:[
                {username:'张四',sex:'男',phone:'13525277887',types:'会员',balace:'862',spend:'5999',times:'2020-06-30'},
                {username:'张非非',sex:'女',phone:'13528987887',types:'普通',balace:'862',spend:'5999',times:'2020-06-30'}
            ],
            usernames:"",
            sexs:"",
            phones:"",
            typess:"",
            balaces:"",
            allBalace:"",
            timeOut:"",
            msg:"会员",
            addCustor:false,
            textName:"",
            textSex:"",
            textPhone:"",
            textBalace:"",
            textTypes:"",
            search:""

        }
    },
    components:{
        tittle,
        halo
    },
    methods:{
        handleDelete(index, row) {
            console.log(this.userList[index].username);
            this.usernames = this.userList[index].username;
            this.sexs = this.userList[index].sex;
            this.phones = this.userList[index].phone;
            this.typess = this.userList[index].types;
            this.balaces = this.userList[index].balace;
            this.allBalace = this.userList[index].spend;
            this.timeOut = this.userList[index].times;
        },
        shat:function(){
            this.addCustor = false;
            this.textName = "";
            this.textSex = "";
            this.textPhone = "";
            this.textBalace = "";
            this.textTypes = "";
        },
        addCustomer:function(){
            var timeo = new Date();
            timeo = timeo.toLocaleDateString();
            this.userList.push({username:this.textName,sex:this.textSex,phone:this.textPhone,types:this.textTypes,balace:this.textBalace,spend:0,times:timeo});
            this.textName = "";
            this.textSex = "";
            this.textPhone = "";
            this.textBalace = "";
            this.textTypes = "";
            this.addCustor = false;
        },
        addCusta:function(){
            this.addCustor = true;
        }
    }
}
</script>  
<style scoped>
     .about{
        width:100%;
        height:970px;
        /* background: rgb(247, 247, 170); */
        background: rgb(240,240,240);
        /* background:rgb(243, 205, 38); */
    }
    .middle{
        width:100%;
        height:800px;
        display:flex;
    }
    .middle-right{
        width:100%;
        height:780px;
        margin:10px 10px;
        background: rgb(255,255,255);
        display:flex;
    }
    .right-a{
        width:55%;
        height:740px;
        margin-top:10px;
        margin-left:10px;
        background: rgb(248, 248, 248); 
        border:1px solid rgb(236, 236, 222);
    }
    .right-a-a{
        width:100%;
        height:30px;
        font-size: 25px;
        text-align: center;
        line-height: 30px;
        margin-top:10px;
    }
    .right-b{
        width:100%;
        height:680px;   
        overflow-y:auto;
        background:rgb(255,255,255);
        margin-top:5px;
    }  
    .d-a{
        width:26%;
        height:740px;
        /* background-image: url('../assets/back1.jpg');
        background-size:400px 660px; */
        background: rgb(248,248,248);
        margin-left:20px;
        margin-top:10px;
    }
    .d-b{
        width:80%;
        height:30px;
        display: flex;
        margin:30px auto;
    }
    .d-c{
        width:30%;
        height:30px;
        line-height: 30px;
        text-align: right;
        font-size:20px;
        color:rgb(51,163,228);
    }
    .d-d{
        width:60%;
        height:30px;
        line-height:30px;
        text-align: center;
        margin-left:10px;
        font-size:17px;
        border-radius:20px;
        background: rgb(51,163,228);
        color:white;
    }
    .d-e{
        width:80%;
        height:3px;
        background: rgb(236, 236, 222);
        margin:20px auto 30px;
    }
    .d-f, .d-g, .d-h{
        height:35px;
        text-align: center;
        line-height: 35px;
        font-size:22px;
        border-radius:0 20px 20px 0;
        color:white;
        margin-top:25px; 
        margin-left:30px;
        cursor:pointer;
    }
    .d-f:hover{
        box-shadow:0 0 10px 10px orange;
    }
    .d-f{
        background: orange;
        width:50%;
    }
    .d-g{
        width:60%;
        background: blue;
    }
    .d-g:hover{
        box-shadow:0 0 10px 10px blue;
    }
    .d-h{
        width:70%;
        background: red;
    }
    .d-h:hover{
         box-shadow:0 0 10px 10px red;
    }
    .d-i{
        width:80%;
        height:35px;
        text-align: center;
        line-height: 35px;
        font-size:22px;
        color:white;
        margin-top:25px;
        margin-left:30px; 
        cursor:pointer;
        border-radius:20px;
        display:flex;
        justify-content: space-between;
    }
    .d-l, .d-k{
        width:48%;
        height:35px;
        background:black;
    }
    .d-k{
        margin-left:10px;
        border-radius:0 20px 20px 0;
    }
    .d-l{
        border-radius:20px 0 0 20px;
    }
    .d-l:hover, .d-k:hover{
        box-shadow:0 0 10px 10px black; 
    }
    .custor-a-right{
        width:15%;
        height:740px;
        background:rgb(240,240,240);
        margin:10px auto;
    }
    .last-a-a{
        width:65%;
        height:140px;
        border-radius:50%;
        background: rgb(51,163,228);
        cursor:pointer;
        margin:70px auto 0;
        animation-name:quan;
        animation-duration:9s;
        animation-iteration-count:infinite;
        animation-timing-function:linear;
        transition-duration:2s;
    }
    @keyframes quan{
        from{transform:rotate(0deg)}
        to{transform:rotate(360deg)}
    }
    .last-a-a:hover{
        box-shadow:0 0 10px 10px black;
        background: black;
    }
    .custor-name{
        width:90%;
        height:40px;
        font-size:23px;
        text-align: center;
        line-height: 40px;
        margin:50px auto 0;
        background:rgb(51,163,228);
        /* background: orange; */
        border-radius:3px;
        color:white;
    }
    .last-a-b{
        width:60%;
        height:80px;
        border-radius:50%;
        background:url('../assets/add2.png');
        background-size:100% 80px;
        background-repeat: no-repeat;
        margin:10px auto;
    }
    .last-a-c{
        width:100%;
        color:white;
        text-align: center;
    }
    .custor-total{
        width:90%;
        height:40px;
        font-size:23px;
        text-align: center;
        line-height: 40px;
        margin:100px auto 0;
        /* background:rgb(51,163,228); */
        background: orange;
        border-radius:3px;
        color:white;  
    }
    .last-b-a{
        width:500px;
        height:600px;
        background: rgb(7,233,203);
        position:absolute;
        left:500px;
        top:150px;
        z-index: 999;
        overflow: hidden;
        animation-name:halow;
        animation-duration: 1s;
        border-radius:0 5% 5% 0;
    }
    @keyframes halow{
        from{width:0;border-radius:0 300% 300% 0}
        to{width:500px;border-radius:0 5% 5% 0}
        
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
    .last-b-b{
        width:440px;
        height:50px;
        margin:30px 0 0 30px;
        display:flex;
        font-family: "楷体";
    }
    .last-b-c{
        width:120px;
        height:39px;
        font-size:25px;
        line-height:39px;
        text-align: center;
        color:black;
        border-bottom:1px solid black;
        margin-top:5px;
    }
    .last-b-d{
        width:220px;
        height:40px;
        background: rgb(233, 227, 227);
        margin:5px 0 0 10px;
        border-radius:20px;
    }
    .last-b-d>input{
        display:block;
        width:180px;
        height:40px;
        border:none;
        background: rgb(233, 227, 227);
        margin-left:20px;
        font-size:20px;
    }
    .last-d-a{
        width:500px;
        height:50px;
        font-size:25px;
        text-align: center;
        line-height: 50px;
        color:black;
        /* background: red; */
        margin-top:20px;
    }
    .last-d-b{
        width:400px;
        height:50px;
        /* background: red; */
        margin:30px 0 0 40px;
        display:flex;
    }
    .last-d-e, .last-d-f{
        height:50px;
        font-size:30px;
        line-height: 50px;
        text-align: center;
        background: rgb(233,227,227);
        cursor:pointer;
    }
    .last-d-e{
        width:120px;
        border-radius:20px 0 0 20px;
    }
    .last-d-f{
        width:260px;
        border-radius:0 20px 20px 0;
        margin-left:20px;
        color:black;
    }
    .last-d-e:hover, .last-d-f:hover{
        background: black;
        color:white;
        box-shadow:0 0 10px 10px black;
    }
    .custor-money{
        width:90%;
        height:80px;
        background: rgb(51,163,228);
        color:white;
        font-size:20px;
        margin:50px auto;
        text-align: center;
        line-height: 40px;
        border-radius:5px;
    }
   
</style>
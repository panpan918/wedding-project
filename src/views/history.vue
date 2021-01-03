<template>
    <div class="about">
            <!-- 最顶部 -->
        <tittle></tittle>
        <div class="middle">
            <halo></halo>
            <div class="middle-right">
                <div class="right-a">
                    <div class="right-a-a">
                        <div class="right-a-b">历史记录查询</div>
                        <div class="right-a-d">
                            <input type="text" placeholder="请输入姓名 / 手机号" v-model="inputext">      
                        </div>
                    </div>    
                    <div class="right-a-c">历史总计: {{msg}}</div>
                </div>
                <div class="right-b">
                    <div class="right-b-b">
                        <el-table :data="histList" style="width: 100%" :stripe="true" :border="true" :show-overflow-tooltip="true" v-if="isOk">
                            <el-table-column prop="date" label="日期">
                            </el-table-column>
                            <el-table-column prop="name" label="姓名">
                            </el-table-column>
                            <el-table-column prop="sex" label="性别">
                            </el-table-column>
                            <el-table-column prop="phone" label="电话">
                            </el-table-column>
                            <el-table-column prop="types" label="类型">
                            </el-table-column>
                            <el-table-column prop="balace" label="金额">
                            </el-table-column>
                            <el-table-column prop="above" label="详情">
                            </el-table-column>
                            <el-table-column prop="balaces" label="余额">
                            </el-table-column>
                        </el-table>
                        <el-table :data="histLists" style="width: 100%" :stripe="true" :border="true" :show-overflow-tooltip="true" v-if="isOkk">
                            <el-table-column prop="date" label="日期">
                            </el-table-column>
                            <el-table-column prop="name" label="姓名">
                            </el-table-column>
                            <el-table-column prop="sex" label="性别">
                            </el-table-column>
                            <el-table-column prop="phone" label="电话">
                            </el-table-column>
                            <el-table-column prop="types" label="类型">
                            </el-table-column>
                            <el-table-column prop="balace" label="金额">
                            </el-table-column>
                            <el-table-column prop="above" label="详情">
                            </el-table-column>
                            <el-table-column prop="balaces" label="余额">
                            </el-table-column>
                        </el-table>
                    </div>
                </div>
            </div>
        </div>
        <div class="nav-bottom">Customer is God</div>
    </div>
</template>
<script>
import tittle from '@/components/tittle.vue'
import halo from "@/components/about/halo.vue"
    export default {
        data(){
            return{
                msg:"",
                isOk:true,
                isOkk:false,
                inputext:"",
                histLists:[],
                histList: [
                {
                    date: '2016-05-02',
                    name: '王小虎',
                    sex:"男",
                    phone:13525278998,
                    types:"消费",
                    balace:"999",
                    above:"套餐消费",
                    balaces:"5600"
                },
                {
                    date: '2016-05-02',
                    name: '王小虎',
                    sex:"男",
                    phone:13525278998,
                    types:"消费",
                    balace:"999",
                    above:"套餐消费",
                    balaces:"5600"
                },
                {
                    date: '2016-05-02',
                    name: '王小虎',
                    sex:"男",
                    phone:13525278998,
                    types:"消费",
                    balace:"999",
                    above:"套餐消费",
                    balaces:"5600"
                },
                {
                    date: '2016-05-02',
                    name: '王晓琳',
                    sex:"男",
                    phone:13525278998,
                    types:"消费",
                    balace:"999",
                    above:"套餐消费",
                    balaces:"5600"
                }
                ]
            }    
        },
        components:{
            halo,
            tittle
        },
        mounted(){
         
        },
        watch:{
            inputext(newText,oldText){
                var cur = this.histList.findIndex(v => v.name == newText);
                if(newText === ""){
                    this.isOk = true;
                    this.isOkk = false;
                    this.histLists = [];
                    this.msg = this.histList.length;
                }else if(cur == -1){
                    this.isOk = false;
                    this.isOkk = true;
                    this.histLists = [];
                    this.msg = this.histLists.length;
                }else{
                    this.isOk = false;
                    this.isOkk = true;
                    for(var i = 0;i<this.histList.length;i++){
                        if(this.histList[i].name == newText){
                            this.histLists.unshift(this.histList[i])
                        }
                    }
                    this.msg = this.histLists.length;
                }
            }
        }
    }
</script>
<style scoped>
     .about{
        width:100%;
        height:970px;
    }
    /* 顶部 */  
    .middle{
        width:100%;
        height:800px;
        display:flex;
    }
    .middle-right{
        width:100%;
        height:800px;
        background: rgb(240,240,240);
    }
    .right-a{
        width:98%;
        height:58px;
        border-bottom:2px solid black; 
        display:flex;
        overflow: hidden;
        background: rgb(255,255,255);    
        margin:0 auto;
        margin-top:10px;
        justify-content: space-between;
    }
    .right-a-a{
        width:40%;
        height:58px;
        display: flex;
        justify-content: space-between;
    }
    .right-a-b{
        width:50%;
        height:58px;
        font-size:30px;
        font-weight: 600;
        line-height:58px;
        text-align: center;
    }
    .right-a-d{
        width:50%;
        height:50px;
        background: rgb(240,240,200);
        border-radius:30px;
        margin-top:4px;
    }
    .right-a-d>input{
        display: block;
        width:80%;
        height:44px;
        margin:3px auto;
        border:none;
        background: rgb(240,240,200);
        color:blue;
        font-size:20px;
    }
    .right-a-c{
        width:25%;
        height:58px;
        text-align: center;
        line-height: 58px;
        font-size:23px;
    }
    .right-b{
        width:98%;
        height:700px;
        background:rgb(255,255,255);
        margin:0 auto;
    }
    .right-b-b{
        width:100%;
        height:700px;
        overflow-y:auto; 
    }
    .right-d-a-a{
        width:1170px;
        height:559px;
        overflow-y: auto;
    }
    .right-b-c{
        width:1170px;
        height:40px;
        display:flex;
        background: rgb(240,240,240);
    }
    .right-c-a, .right-c-b, .right-c-c, .right-c-d, .right-c-e, .right-c-f{
        width:165px;
        height:39px;
        text-align: center;
        line-height:39px;
        font-size:18px;
        font-weight: 600;
        border-right:1px solid rgb(200,200,220);
        border-bottom:1px solid rgb(200,200,220);
    }
    .right-c-a{
        border-left:1px solid rgb(200,200,220);
    }
    .right-c-last{
        width:150px;
        height:39px;
        text-align: center;
        line-height:39px;
        font-size:18px;
        font-weight: 600;
        border-bottom:1px solid rgb(200,200,220);
    }
    .right-d-a{
        width:1160px;
        height:40px;
        display:flex;
        color:rgb(51,163,228);
        background: rgb(247, 247, 170);
    }
    .right-d-a:hover{
        /* box-shadow:0 0 10px 10px rgb(247, 247, 170); */
        background: rgb(240,240,240);
    }
    .right-d-b, .right-d-c, .right-d-d, .right-d-e, .right-d-f, .right-d-g{
        width:165px;
        height:39px;
        text-align: center;
        line-height:39px;
        font-size:15px;
        border-right:1px solid rgb(200,200,220);
        border-bottom:1px solid rgb(200,200,220);
    }
    .right-d-b{
        border-left:1px solid rgb(200,200,220);
    }
    .right-d-last{
        width:160px;
        height:39px;
        text-align: center;
        line-height:39px;
        font-size:15px;
        border-bottom:1px solid rgb(200,200,220);
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
    
</style>    
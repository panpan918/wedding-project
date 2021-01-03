<template>
    <div class="about">
        <!-- 最顶部 -->
      <tittle></tittle>
      <!-- 最顶部结束 -->
      <div class="middle">
        <halo></halo>
        <!-- 套餐详情 -->
        <div class="meal">
                <div class="meal-tittle">套餐详情</div>
                <div class="meal-a">
                    <!-- 套餐描述 -->
                    <div class="meal-middle">
                        <div class="meal-body" v-for="(item,index) in mealList" :key="index">
                            <div class="meal-body-left">
                                <div class="meal-body-a">{{item.msg}}</div>
                                <div class="meal-body-b">售价：{{item.price}}</div>
                                <div class="meal-body-c">会员价：{{item.vipPrice}}</div>
                            </div>
                            <div class="meal-body-right">
                                <div class="meal-body-e" @click="cutOut(item.msg)">删除</div>
                                <div class="meal-body-d" @click="look(item.msg,item.price,item.vipPrice,item.describe)">详情</div>
                                
                            </div>      
                        </div>
                    </div>
                    <!-- 添加套餐区 -->
                    <div class="meal-button"> 
                        <div class="meal-button-right" @click="addMeal">
                            <img src="../assets/add.png">
                        </div>
                        <div class="meal-button-left">添加套餐</div>
                    </div>
                </div>    
        </div>
        
      </div> 
      <!-- 添加按钮弹出页面 -->
      <div v-if="mealPage" class="pageMeal">
        <div class="page-tittle">套餐添加</div>
        <div class="page-tittle-meal">
            <span>套餐名称</span>
            <input type="text" v-model="textA">  
            <span class="page-money">售价</span>
            <input type="text" v-model="textB"> 
            <span class="page-money">会员价</span>
            <input type="text" v-model="textC">   
        </div>  
        <textarea class="page-bottom" placeholder="套餐详情" v-model="textD">
        </textarea>  
        <div class="page-bottom-last">
            <div class="page-button" @click="closeMeal" v-if="mealPages">取消</div>
            <div class="page-button-b" @click="addMeals" v-if="mealPages">完成</div>
            <div class="page-button-c" @click="okMeal" v-if="mealPaged">关闭</div>
        </div>    
      </div> 
      <div class="nav-bottom">Customer is God</div>
    </div>
</template>
<script>
import tittle from '@/components/tittle.vue';
import halo from '@/components/about/halo.vue';
export default {
    data(){
        return{
                mealList:[{msg:"亲子套餐",price:1000,vipPrice:999,describe:"132"},
                        {msg:"全家福套餐",price:899,vipPrice:799,describe:"465"},
                        {msg:"个人写真",price:899,vipPrice:799,describe:""},
                        {msg:"青岛之行",price:899,vipPrice:799,describe:""},
                        {msg:"三亚之旅",price:899,vipPrice:799,describe:""}
                ],
                mealPage:false,
                textA:"",
                textB:"",
                textC:"",
                textD:"",
                mealpages:true,
                mealPaged:false
                
        }
    },
    components:{
        halo,
        tittle
    },
    methods:{
        cutOut:function(f){
           for(var i = 0;i<this.mealList.length;i++){
               if(this.mealList[i].msg === f){
                   this.mealList.splice(i,1);
               }
           }
        },
        addMeal:function(){
            this.mealPage = true;
            this.mealPages = true;
            this.mealPaged = false;
        },
        // 取消--------------------------------------------
        closeMeal:function(){
            this.mealPage = false;      //待解决-----------------------------------------------------
        },
        // 完成--------------------------------------
        addMeals:function(){
            if(this.textA === ""){
                alert("请输入套餐")
                return false;
            }else if(this.textB === ""){
                alert("价格");
                 return false;
            }else if(this.textC === ""){
                 alert("价格");
                 return false;
            }else{                  
                this.mealList.push({msg:this.textA,price:this.textB,vipPrice:this.textC,describe:this.textD});
                this.textA = "";
                this.textB = "";
                this.textC = "";
                this.textD = "";
                this.mealPage = false;
            }

        },
        look:function(a,b,c,d){
            this.textA = a;
            this.textB = b;
            this.textC = c;
            this.textD = d;
            this.mealPage = true;
            this.mealPages = false;
            this.mealPaged = true;
        },
                // 关闭--------------------------------------------------
        okMeal:function(){
            this.textA = "";
            this.textB = "";
            this.textC = "";
            this.textD = "";
            this.mealPage = false;
        }
    }
}
</script>
<style scoped>
    .about{
        width:100%;
        height:970px;
        background: rgb(240, 240, 240);
    }

    /* 顶部 */
  
    /* 顶部结束 */
    /* 套餐部分 */
    .middle{
        width:100%;
        height:800px;
        display:flex;
    }
    .meal{
        width:100%;
        height:700px;
        margin-left:20px;
        margin-right:20px;
    }
    .meal-tittle{
        font-size:30px;
        width:100%;
        height:50px;
        text-align:center;
        border-bottom:2px solid black;
        line-height:50px;   
    }
     .meal-a{
        width:100%;
        height:700px;
        background:rgb(255, 255, 255);
        border-radius:20px;   
    }
    .meal-middle{
        width:100%;
        height:640px;
        margin-top:20px;
        overflow-y:auto;
        padding:20px 30px;
    }
    .meal-body{
        width:100%;
        height:50px;
        background: rgb(248, 240, 240);
        border-radius:10px;
        margin-bottom:5px;
        overflow: hidden;  
        display: flex;
        justify-content: space-between; 
    }
    .meal-body:hover{
        background: rgb(238, 231, 231);
        box-shadow: 0 0 10px 10px rgb(238,231,231);
    }
    .meal-button{
        width:100%;
        height:50px;
        background:  rgb(248, 240, 240);
        margin-top:10px;
        border-radius:0 0 20px 20px;
        display: flex;
        flex-direction:row-reverse;
    }
    .meal-button-left{
        font-size:20px;
        margin-top:10px;
        width:100px;
        height:30px;
        text-align: center;
        color:rgb(51,163,228);
        margin-right:20px;
    }
    .meal-button-right{
        width:34px;
        height:34px;
        border-radius:50%;
        border:2px solid #1296db;
        margin-top:8px;
        cursor:pointer;
        margin-right:80px;
    }
    .meal-button-right:hover{
        box-shadow:0 0 5px 5px #1296db;
    }
    .meal-button-right>img{
        width:30px;
        height:30px;
    }
    /* 单个套餐 */
    .meal-body-left, .meal-body-right{
        display:flex;
        /* background: red; */
    }
    .meal-body-right{
        flex-direction: row-reverse;
    }
    .meal-body-a, .meal-body-b, .meal-body-c, .meal-body-d, .meal-body-e{
        height:30px;
        line-height:30px;
        margin-top:10px;
        font-size:18px;
        background: #FFFFCC;
        border-radius:3px;
        text-align:center;
    }
    .meal-body-a{
        width:250px;
        margin-left:10px;
    }
    .meal-body-b, .meal-body-c{
        width:150px;
        margin-left:20px;
    }
    .meal-body-d, .meal-body-e{
        width:100px;
        cursor: pointer;
    }
    .meal-body-d{
        margin-right:20px;
    }
    .meal-body-e{
        margin-right:30px;
    }
    .meal-body-d:hover, .meal-body-e:hover{
        box-shadow:0 0 5px 5px #FFFFCC;
    }
    .pageMeal{
        width:1250px;
        height:600px;
        background: rgb(38, 245, 210);
        position:absolute;
        top:80px;
        left:100px;
        border-radius:30px;
        padding:20px 10px;
        font-family: "宋体";
        color:black;
        animation-name:hello;
        animation-duration: 1s;
        animation-timing-function:ease-out;
        overflow:hidden;
    }
     .pageMeals{
        width:1250px;
        height:600px;
        background: rgb(38, 245, 210);
        position:absolute;
        top:80px;
        left:100px;
        border-radius:30px;
        padding:20px 10px;
        font-family: "宋体";
        color:black;
        /* animation-name:word; */
        animation-duration: 1s;
        animation-timing-function:linear;
    }
    .page-tittle{
        width:1230px;
        height:40px;
        font-size:30px;
        line-height:40px;        
        text-align:center;
        border-bottom:2px solid black;
    }
    @keyframes word{
        0%{left:100px}
        10%{left:150px}
        100%{left:-1230px}
    }
    @keyframes hello{
        from{transform: scale(0)}
        to{transform: scale(1)}
    }
    .page-tittle-meal{
        width:1230px;
        height:40px;
        font-size:22px;
        margin-top:20px;
    }
    .page-tittle-meal>input{
        margin-left:10px;
    }
    .page-money{
        margin-left:60px;
    }
    .page-bottom{
        width:1100px;
        height:300px;
        border:2px solid black;
        margin-top:30px;
        font-size:22px;
    }
    .page-button, .page-button-b, .page-button-c{
        width:100px;
        height:48px;
        border-radius:10px;
        font-size:25px;
        text-align:center;
        border:1px solid black;
        line-height:50px;
        cursor:pointer;
        margin-top:50px;
        background: rgb(240, 231, 231);
    }
    .page-bottom-last{
        width:1230px;
        height:100px;
        display:flex;
    }
    .page-button{
        margin-left:20px;
    }
    .page-button-b{
        margin-left:870px;
    }
    .page-button:hover, .page-button-b:hover, .page-button-c:hover{
        box-shadow:0 0 10px 10px black;
        background: black;
        color:white;
    }
    .page-button-c{
        margin-left:550px;
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

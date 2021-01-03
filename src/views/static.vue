<template>
    <div class="about">
            <!-- 最顶部 -->
      <tittle></tittle>
      <div class="middle">
        <halo></halo>
        <!-- 收入总计--------------------------------------------------------------------------- -->
        <div class="middle-left">
            <div class="middle-left-tittle">收入总计</div>
            
            <div class="middle-left-body">
                
                <div class="left-body-left">
                    <div class="middle-left-time">今日总计</div>
                    <div class="left-body-a">
                        <div class="body-a-a">充值</div>
                        <div class="body-a-b">$0</div>
                    </div>
                     <div class="pan-body-a">
                        <div class="pan-a-a">消费</div>
                        <div class="pan-a-b">$0</div>
                    </div>
                     <div class="pan-body-a">
                        <div class="pan-a-a">新增客户</div>
                        <div class="pan-a-b">0</div>
                    </div>
                    <div class="pan-body-a">
                        <div class="pan-a-a">新增会员</div>
                        <div class="pan-a-b">0</div>
                    </div>
                    <div class="pan-body-bottom">
                        <div class="pan-bottom-a">今天</div>
                        <div class="pan-bottom-b">前一周</div>
                        <div class="pan-bottom-c">前一月</div>
                        <div class="pan-bottom-d">时间范围</div>
                    </div>
                </div>
                <div class="left-body-right">
                    <div class="left-body-right-a" id="main"></div>    
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

            }
        },
        components:{
            halo,
            tittle
        },
        mounted(){
        this.myCharts();
        this.myChar();
        },
        methods:{
            myCharts(){
                var myChart = this.$echarts.init(document.getElementById('main'));
                // 显示标题，图例和空的坐标轴
                var option={
                    xAxis: {
                        data: ['周一','周二','周三','周四','周五','周六','周日']
                    },
                    yAxis: {},
                    series: [{
                        name: '充值',
                        type: 'line',
                        data: [30,50,100,200,100,500,600]
                    },
                    {
                        name:'消费',
                        type:'line',
                        data:[400,900,800,400,500,600,1000]
                    }
                    ]
                } 
            myChart.setOption(option);
            },
             myChar(){
                var myBook = this.$echarts.init(document.getElementById('mains'));
                // 显示标题，图例和空的坐标轴
                var option={
                    xAxis: {
                        data: ['客户总量','会员客户','普通客户']
                    },
                    yAxis: {
                    },
                    series: [{
                        name: '会员统计',
                        type: 'bar',
                        data: [800,600,200]
                    }
                    ]
                } 
            myBook.setOption(option);
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
        /* overflow: hidden; */
    }
    /* 中间部分------------------------------------------------------------------- */
    .middle{
        width:100%;
        height:800px;
        display:flex;
    }
    .middle-left{
        width:100%;
        height:750px;
        background:rgb(255,255,255);
        margin:20px 30px 0 30px;
        padding:10px;
        overflow: hidden;
    }
    .middle-left-tittle{
        width:100%;
        height:38px;
        border-bottom:2px solid black;
        text-align: center;
        line-height: 38px;
        font-size: 25px;
    }
    .middle-left-body{
        width:100%;
        height:670px;
        margin-top:10px;
        display:flex;
        overflow:auto;
        /* background: red;     */
    }
    .middle-left-time{
        width:300px;
        height:40px;
        font-size:25px;
        line-height: 39px;
        text-align: center;
        color:orange;
        margin-top:10px;
        
    }
    .left-body-left{
        width:25%;
        height:650px;
        background: rgb(248,248,248);
        margin-top:10px;
    }
    .left-body-a{
        width:300px;
        height:60px;
        display:flex;
        font-size:25px;
    }
    .body-a-a{
        width:125px;
        height:60px;
        line-height:60px;
        text-align:right;
        
        margin-left:20px;
    }
    .body-a-b{
        width:125px;
        margin-left:30px;
        height:60px;
        line-height:60px;
        color:rgb(51,163,228);
        font-size:25px;
    }
    .pan-body-a{
        width:300px;
        height:60px;
        display:flex;
        font-size:25px;
        margin-top:10px;
    }
    .pan-a-a{
        width:125px;
        height:60px;
        line-height:60px;
        text-align:right;
        
        margin-left:20px;
    }
    .pan-a-b{
        width:125px;
        margin-left:30px;
        height:60px;
        line-height:60px;
        color:rgb(51,163,228);
        font-size:25px;
    }
    .pan-body-bottom{
        width:300px;
        height:230px;
        /* background: white; */
        display:flex;
        justify-content: space-around;
        flex-wrap: wrap;
    }
    .pan-bottom-a,.pan-bottom-b, .pan-bottom-c{
        width:80px;
        height:30px;
        box-shadow: 0 0 5px 5px orange inset;
        margin-top:50px;
        text-align: center;
        line-height: 30px;
        font-size:20px;
        cursor:pointer;
    }
    .pan-bottom-a:hover, .pan-bottom-b:hover, .pan-bottom-c:hover{
        box-shadow:0 0 10px 10px orange inset;
    }
    .pan-bottom-d{
        width:150px;
        height:40px;
        font-size:30px;
        text-align: center;
        line-height: 40px;
        margin-top:-40px;
    }
    .left-body-right{
        width:72%;
        height:650px;
        display:flex;
        margin-top:10px;
        margin-left:20px;
    }
    .left-body-right-a{
        width:100%;
        height:650px;
        background: rgb(248,248,248);
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
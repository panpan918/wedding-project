<template>
            <!-- 最顶部 -->
        <div class="tittle">
            <div class="tittle-left">
                <div class="tittle-logo"></div>
                <div class="tittle-typeface">
                    <div class='tittle-left-a'>Wedding photography in New Taipei</div>
                    <div class='tittle-left-b'>新台北婚纱摄影客户管理系统</div>
                </div>  
                <div class="tittle-right">
                    <div class="tittle-right-a">安全退出</div>
                    <div class="tittle-right-b">
                        <img src="../assets/down.png">
                    </div>
                </div>
            </div>
        </div>  
</template>     
<style scoped>
     .tittle{
        width:100%;
        height:100px;
        background: rgb(51, 163, 228);
        /* background: black; */
        color:white;
    }
    .tittle-logo, .tittle-typeface, .tittle-right-a, .tittle-right-b{
        float:left;
    }
    .tittle-logo{
        width:60px;
        height:60px;
        background: url('../assets/logo1.png');
        background-size:60px; 
        margin-top:20px;
        margin-left:30px;
    }
    .tittle-left-a{
        font-size:15px;
        width:325px;
        text-align: center;
    }
     .tittle-left-b{
        font-size:25px;
        width:325px;
    }
    .tittle-typeface{
        margin-top:25px;
        margin-left:20px;
    }
    .tittle-right-b{
        width:30px;
        height:30px;
        cursor:pointer;
        margin-left:10px;
        border-radius:50%;
    }
    .tittle-right-b>img{
        width:30px;
        height:30px;
    }
    .tittle-right-b:hover{
        background: white;
    }
    .tittle-right{
        width:200px;
        height:50px;
        position:absolute;
        top:30px;
        right:50px;
    }
    .tittle-right-a{
        font-size:20px;
        margin-left:50px;
    }

</style> 
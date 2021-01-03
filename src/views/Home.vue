<template>
    <div class="home">
      <div class="back">
        <div class="back-tittle">系统登录</div>
        <div class="back-user">
          <input type="text" placeholder="admin">
        </div>
        <div class="back-user">
          <input type="text" placeholder="password">
        </div>
        <div class="back-admin">登录</div>
      </div>
    </div>  
</template>

<script>
// @ is an alias to /src


export default {
  name: 'Home',
  data(){
    return{
     
    }
  },
   methods: {
     
      }
    }

</script>

<style scoped>
  .home{
    padding:0;
    margin:0;
    width:100%;
    height:970px;
    background:rgb(12, 116, 177);
    /* background: rgb(50,50,100); */
    border-top:1px solid black;
  }
  .back{
    width:25%;
    height:400px;
    background:rgb(255,255,255);
    margin:200px auto;
    box-shadow:0 0 2px 2px rgb(255,255,255);
    border-top:1px solid white;
  }
  .back-tittle{
    width:90%;
    height:30px;
    /* text-align: center; */
    line-height: 30px;
    font-size:30px;
    font-family: "微软雅黑";
    font-weight: 600;
    margin:60px auto 0;
  }
  .back-user{
    width:90%;
    height:40px;
    border:1px solid rgb(220,220,220);
    border-radius:3px;
    margin:35px auto;
    box-shadow:0 0 2px 2px rgb(220,220,220);
  }
  .back-user>input{
    display:block;
    width:94%;
    height:39px;
    margin:0 auto;
    border:none;
    font-size:18px;
    line-height: 40px;
    color:black;
  }
  .back-admin{
    width:90%;
    height:40px;
    font-size:20px;
    text-align: center;
    line-height: 40px;
    color:white;
    margin:40px auto;
    background: rgb(51,163,228);
    cursor:pointer;
  }
  .back-admin:hover{
    box-shadow: 0 0 3px 3px rgb(51,163,228);
  }
 
  
</style>
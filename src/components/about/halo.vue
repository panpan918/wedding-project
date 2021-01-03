<template>
    <div>
        <el-row class="tac">
            <el-col :span="12">
                <el-menu default-active="2" class="el-menu-vertical-demo"
                     >
                     <!-- @open="handleOpen" -->
                <el-submenu index="1" class="ab">
                    <template slot="title">
                        <i class="el-icon-location"></i>
                        <span>客户信息</span>
                    </template>
                    <el-menu-item-group >
                        <template slot="title"></template>
                            <el-menu-item index="1-1" @click="bande">全部客户</el-menu-item>
                            <el-menu-item index="1-2" @click="bandf">普通客户</el-menu-item>
                    </el-menu-item-group>
                    <el-menu-item-group>
                        <el-menu-item index="1-3" @click="bandg">会员客户</el-menu-item>
                    </el-menu-item-group>
                    <el-submenu index="1-4">
                        <template slot="title">员工管理</template>
                            <el-menu-item index="1-4-1" @click="banda">员工信息</el-menu-item>
                    </el-submenu>
                </el-submenu>
                    <el-menu-item index="2" @click="bandd">
                        <!-- <router-link to="/about" tag="div"> -->
                            <i class="el-icon-menu"></i>
                            <span >套餐管理</span>  
                            <!-- slot="title" -->
                        <!-- </router-link>                -->
                    </el-menu-item>
                    <el-menu-item index="3" @click="bandb">
                        <!-- <router-link to="/static" tag="div"> -->
                            <i class="el-icon-document"></i>
                            <span>收入统计</span>
                             <!-- slot="title" -->
                        <!-- </router-link> -->
                    </el-menu-item>
                    <el-menu-item index="4" @click="bandc">
                        <!-- <router-link to="/history" tag="div"> -->
                        <i class="el-icon-setting"></i>
                        <span>历史记录</span>
                        <!-- </router-link> -->
                    </el-menu-item>
                </el-menu>
            </el-col>
        </el-row>
    </div>
</template>
<script>
export default {
    methods:{
        // handleOpen(key, keyPath) {
        //     console.log(key, keyPath);
        // },
        banda:function(){
            this.$router.push({path:'/boss'});
        },
        bandb:function(){
            this.$router.push({path:'/static'});
        },
        bandc:function(){
            this.$router.push({path:'/history'});
        },
        bandd:function(){
            this.$router.push({path:'/about'});
        },
        bande:function(){
            this.$router.push({path:'/custor'});
        },
        bandf:function(){
            this.$router.push({path:'/custorb'});
        },
        bandg:function(){
            this.$router.push({path:'/custorc'});
        }
    }
}
</script>
<style scoped>
   
    .tac{
        width:200px;
        height:800px;
        
    }
    .el-menu-vertical-demo{
        width:200px;
        height:800px;
        background: rgb(248, 248, 248);
    }
    /* a{
        color:black;
    } */
    /* .router-link-active{
        color:r;
    } */
</style> 
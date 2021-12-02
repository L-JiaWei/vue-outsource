<template>
  <div class="app-navigation">
      <div class="bg-nav">
          <el-icon :size="60" color="white" class="logo"><apple /></el-icon>
          <div class="btn">
            <el-button round type="primary" class="btn1">Post Project</el-button>
            <el-dropdown
            trigger="click"
            @command="clickDropdown">
                <el-button round type="primary">Account <el-icon><arrow-down /></el-icon></el-button>
                <template #dropdown>
                <el-dropdown-menu>
                    <el-dropdown-item command="my-profile">My Profile</el-dropdown-item>
                    <el-dropdown-item command="payment">Payment</el-dropdown-item>
                    <el-dropdown-item command="my-projects">My Projects</el-dropdown-item>
                    <el-dropdown-item command="sign-out">Sign Out</el-dropdown-item>
                </el-dropdown-menu>
                </template>
            </el-dropdown>
          </div>
          
      </div>
  </div>
</template>

<script setup>
import { ArrowDown,Apple } from "@element-plus/icons";
import { userSignOut } from "../network/dataSource";
import { useStore } from "vuex"
import { useRouter } from "vue-router"
import { ElMessage } from "element-plus";

const store = useStore()
const router = useRouter()
const clickDropdown = (command) => {
    console.log(command)
    if(command === "sign-out"){
        const signOut = async () => {
            const res = await userSignOut({
                email: store.state.email
            })
            console.log(res)
            if(res.data.statusCode === 1){
                ElMessage.success("Log out successfully");
                router.push({ name: "login"})
            }else{
                ElMessage.success("Failed to log out");
            }
        }
    }
}
</script>

<style lang="less">
.app-navigation{
    width: 60%;
    height: auto;
    margin: 0px auto;
    display: flex;
    
    .bg-nav{
        background-image: url(../assets/BgNavigation.png);
        width: 100%;
        height: 100px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        .logo{
            margin: 0 20px;
        }
        .btn{
            margin: 0 20px;
        }
        .btn1{
            margin-right: 10px;
        }
        .el-button{
            background: gray;
            border: gray;  
        }
    }
}
</style>
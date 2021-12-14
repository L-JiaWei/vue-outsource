<template>
    <div class="app-navigation">
        <el-card class="box-card">
            <div class="bg-nav">
                <h2>Outsourcin<br/>platform</h2>
                <div class="btn">
                    <el-button round type="primary" class="btn1">Post Project</el-button>
                    <el-dropdown trigger="click" @command="clickDropdown">
                        <el-button round type="primary">
                            Account
                            <el-icon>
                                <arrow-down />
                            </el-icon>
                        </el-button>
                        <template #dropdown>
                            <el-dropdown-menu>
                                <el-dropdown-item command="homepage">Homepage</el-dropdown-item>
                                <el-dropdown-item command="my-profile">My Profile</el-dropdown-item>
                                <el-dropdown-item command="payment">Payment</el-dropdown-item>
                                <el-dropdown-item command="my-projects">My Projects</el-dropdown-item>
                                <el-dropdown-item command="sign-out">Sign Out</el-dropdown-item>
                            </el-dropdown-menu>
                        </template>
                    </el-dropdown>
                </div>
            </div>
        </el-card>
    </div>
</template>

<script setup>
/////导航栏组件
import { ArrowDown, Apple } from "@element-plus/icons";
import { userSignOut } from "../network/dataSource";
import { useStore } from "vuex"
import { useRouter } from "vue-router"
import { ElMessage } from "element-plus";

const store = useStore()

const router = useRouter()

const clickDropdown = async (command) => {
    console.log(command)
    if (command === "sign-out") {
        const res = await userSignOut({
            email: store.state.email
        })
        console.log(res)
        if (res.data.statusCode === 1) {
            ElMessage.success("Log out successfully");
            localStorage.clear()
            router.push({ name: "LoginIndex" })
        } else {
            ElMessage.success("Failed to log out");
        }
    }
    if(command === "homepage"){
        router.push({name: "Homepage"})
    }
    if(command === "my-profile"){
        router.push({name: "MyProfile"})
    }
}
</script>

<style lang="less">
.app-navigation {
    width: 60%;
    height: auto;
    margin: 0px auto;
    .el-card__body {
        padding: 0px;
    }
    .bg-nav {
        width: 100%;
        height: 100px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        > h2{
            padding-left: 20px;
            color: #409EFF;
            font-family: "Times New Roman",
        }
        .logo {
            margin: 0 20px;
        }
        .btn {
            margin: 0 20px;
        }
        .btn1 {
            margin-right: 10px;
        }
    }
}
</style>
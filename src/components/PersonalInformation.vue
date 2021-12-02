<template>
    <Navigation />
    <div class="app-Information">
        <div class="bg-Inf">
            <div class="ZhanWei"></div>
            <div class="Username">
                <h2>{{ userInfo.userName }}</h2>
            </div>
            <el-button-group>
                <el-button round type="primary" class="btn1">Verify my email</el-button>
                <el-button
                    round
                    type="primary"
                    class="btn1"
                    @click="state.editInfo = true"
                >Edit my profile</el-button>
            </el-button-group>
        </div>
        <div class="pic-Inf">
            <div class="head-portrait">
                <el-upload
                    class="avatar-uploader"
                    action="https://jsonplaceholder.typicode.com/posts/"
                    :show-file-list="false"
                    :on-success="handleAvatarSuccess"
                    thumbnail-mode="true"
                    :before-upload="beforeAvatarUpload"
                >
                    <img v-if="imageUrl" :src="imageUrl" class="avatar" />
                    <el-icon v-else class="avatar-uploader-icon">
                        <avatar />
                    </el-icon>
                </el-upload>
            </div>
            <div class="Textarea">
                <h4>个人简介：</h4>
                <p>{{  userInfo.description }}</p>
            </div>
        </div>
        <div class="PersonInfo">
            <ul>
                <li>
                    <p>Location:{{ userInfo.location }}</p>
                </li>
                <li>
                    <p>Ratings:(？review)</p>
                </li>
                <li>
                    <p>{{ userInfo.salary }} $/Hour</p>
                </li>
                <li>
                    <p>Birthday:{{ userInfo.birthday }}</p>
                </li>
            </ul>
        </div>
    </div>

    <el-dialog v-model="state.editInfo" title="编辑个人信息" width="35%">
        <el-form>
            <el-form-item label>
                <el-input v-model="state.editUserInfo.userName" placeholder="请输入用户名" />
            </el-form-item>

            <el-form-item label>
                <el-input
                    v-model="state.editUserInfo.description"
                    placeholder="请输入个人简介"
                    :autosize="{ minRows: 3, maxRows: 3 }"
                    maxlength="255"
                    type="textarea"
                />
            </el-form-item>
            <el-form-item label>
                <el-input v-model="state.editUserInfo.location" placeholder="请输入所在地" />
            </el-form-item>
            <el-form-item label>
                <el-input v-model="state.editUserInfo.salary" placeholder="请输入时薪" />
            </el-form-item>
            <el-form-item label>
                <el-input v-model="state.editUserInfo.birthday" placeholder="请输入生日（月日年）" />
            </el-form-item>
            <el-form-item label>
                <el-button type="primary" @click="Submit">保存</el-button>
                <el-button type="primary" @click="state.editInfo = false">退出</el-button>
            </el-form-item>
        </el-form>
    </el-dialog>
</template>

<script setup>
import Navigation from './Navigation.vue';
import { Avatar } from '@element-plus/icons'
import { computed, onMounted, reactive, ref } from 'vue'
import { useStore } from 'vuex';
import { userSignUp } from "../network/dataSource";
import { ElMessage } from "element-plus";

const store = useStore()

const state = reactive({
    editInfo: ref(false),
    editUserInfo: {
        email: "",
        new_user: false,
        userName: "",
        description: "",
        location: "",
        salary:"",
        birthday: ""
    }
})

// const userLocalInfo = localStorage.getItem("outUserInfo")

const userInfo = computed(() => store.state.userInfo)

onMounted(()=>{
    // console.log(userLocalInfo != "")
    // if(userLocalInfo != ""){

    // }   
    for(let key in store.state.userInfo){
        state.editUserInfo[key] = store.state.userInfo[key]
    }
    console.log(state.editUserInfo)
})

const Submit = async () => {
    // store.commit("updateUserInfo",state.editUserInfo)
    console.log(state.editUserInfo)
    const res = await userSignUp({
        email: state.editUserInfo.email,
        new_user: state.editUserInfo.new_user,
        username: state.editUserInfo.userName,
        description: state.editUserInfo.description,
        location: state.editUserInfo.location,
        salary: state.editUserInfo.salary,
        birthday: state.editUserInfo.birthday
    })
    console.log(res)
    // if (res.data.statusCode === 1) {
    //     ElMessage.success("User data submitted successfully");
    //     ///后端需重写接口，返回所有的UserInfo，然后前端进行vuex储存（UserInfo），用computed对UserInfo进行数据监听，页面上插值表达式进行渲染
    //     let { username, password, email, description, skillTags, location, salary, birthday } = res.data.Info
    //     store.state.editUserInfo = { username, password, email, description, skillTags, location, salary, birthday }
    //     console.log(editUserInfo)
    // } else {
    //     ElMessage.error("reg has failed");
    // }
}
</script>




<style lang="less">
.app-Information {
    display: flex;
    // justify-content: space-around;
    flex-direction: column;
    width: 60%;
    height: auto;
    margin: 0 auto;
    .bg-Inf {
        background-image: url(../assets/BgInformation.png);
        width: 100%;
        height: 220px;
        display: flex;
        position: relative;
        justify-content: space-between;
        align-items: flex-end;
    }
    .ZhanWei {
        width: 22%;
        height: 200px;
    }
    .Username {
        width: 16%;
        height: auto;
        border-bottom: 2px solid #000;
        margin: 0 0 15px -185px;
    }
    .el-button-group {
        margin: 0 20px 20px 0;
        .el-button {
            background: gray;
            border: gray;
        }
    }
}
.pic-Inf {
    display: flex;
    justify-content: space-between;
    width: 100%;
    height: auto;
    .head-portrait {
        width: 22%;
        height: 200px;
        position: relative;
        top: -101px;
        margin-left: 20px;
        .avatar-uploader .el-upload {
            border: 1px solid gray;
            border-radius: 6px;
            cursor: pointer;
            overflow: hidden;
            width: 100%;
        }
        .avatar-uploader .el-upload:hover {
            border-color: #409eff;
        }
        .avatar-uploader-icon {
            font-size: 165px;
            color: #8c939d;
            width: 165px;
            height: 195px;
            text-align: center;
        }
        .avatar {
            width: 22%;
            height: 195px;
            display: block;
        }
    }
    .Textarea {
        width: 78%;
        height: 93px;
        // position: relative;
        // left: 200px;
        border: 1px solid #000;
        border-radius: 4px;
        // float: right;
        > h4 {
            text-align: left;
            margin: 10px 0 0 10px;
        }
    }
}
.PersonInfo {
    position: relative;
    top: -105px;
    width: 100%;
    height: auto;
    float: left;
    border: solid 1px black;
    > ul {
        text-align: left;
        list-style: none;
    }
}
</style>
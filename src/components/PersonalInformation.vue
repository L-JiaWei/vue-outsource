<template>
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
                    :show-file-list="false"
                    action="https://jsonplaceholder.typicode.com/posts/"
                    with-credentials='false'
                    :on-success="handleAvatarSuccess"
                    thumbnail-mode="true"
                    :before-upload="beforeAvatarUpload"
                >
                    <img v-if="state.imageUrl" :src="state.imageUrl" class="avatar" />
                    <el-icon v-else class="avatar-uploader-icon">
                        <avatar />
                    </el-icon>
                </el-upload>
            </div>
            <div class="Textarea">
                <el-card class="box-card" shadow="never">
                    <h4>个人简介：</h4>
                    <span>{{ userInfo.description }}</span>
                </el-card>
            </div>
        </div>
        <div class="PersonInfo">
            <el-card class="box-card" shadow="never">
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
            </el-card>
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
                    maxlength="35"
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
                <!-- <el-input v-model="state.editUserInfo.birthday" placeholder="请输入生日（月日年）" /> -->
                <el-date-picker
                    v-model="state.editUserInfo.birthday"
                    type="date"
                    placeholder="请输入生日"
                    format="YYYY/MM/DD"
                    value-format="YYYY-MM-DD"
                    @change="kk"
                ></el-date-picker>
            </el-form-item>
            <el-form-item label>
                <el-button type="primary" @click="submit">保存</el-button>
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
    imageUrl: '',
    editInfo: ref(false),
    editUserInfo: {
        email: "",
        new_user: false,
        userName: "",
        description: "",
        location: "",
        salary: "",
        birthday: '',
    }
})

// const userLocalInfo = localStorage.getItem("outUserInfo")

const userInfo = computed(() => store.state.userInfo)

onMounted(() => {
    // console.log(k != "")
    // if(userLocalInfo != ""){

    // }   
    for (let key in store.state.userInfo) {
        state.editUserInfo[key] = store.state.userInfo[key]
    }
    console.log(state.editUserInfo)
})

const handleAvatarSuccess = (res, file) => {
    // console.log(URL.createObjectURL(file.raw))
    state.imageUrl = URL.createObjectURL(file.raw)
    console.log(state.imageUrl)
}

const beforeAvatarUpload = (file) => {
    console.log(file)
    const isJPG = file.type === 'image/jpeg'
    const isLt2M = file.size / 1024 / 1024 < 2

    if (!isJPG) {
        this.$message.error('Avatar picture must be JPG format!')
    }
    if (!isLt2M) {
        this.$message.error('Avatar picture size can not exceed 2MB!')
    }
    return isJPG && isLt2M
}

const submit = async () => {
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
    if (res.data.statusCode === 1) {
        ElMessage.success("User data submitted successfully");
        store.commit("updateUserInfo", state.editUserInfo)
        console.log(store.state.userInfo)
    } else {
        ElMessage.error("reg has failed");
    }
}
</script>




<style lang="less">
.app-Information {
    display: flex;
    flex-direction: column;
    width: 60%;
    height: auto;
    margin: 0 auto -80px auto;
    .bg-Inf {
        background-image: url(../assets/bg2.jpg);
        background-repeat: no-repeat;
        background-size: 100%;
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
        top: -102px;
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
            position: relative;
            top: 17px;
        }
        .avatar {
            width: 100%;
            height: 195px;
            display: block;
        }
    }
    .Textarea {
        width: 78%;
        height: 93px;
        .el-card__body {
            padding: 0px;
            overflow: hidden;
            height: 93px;
            > h4 {
                float: left;
                padding-left: 10px;
            }
            > span {
                text-align: left;
                display: block;
                margin: 20px 10px 2px 0;
            }
        }
    }
}
.PersonInfo {
    position: relative;
    top: -105px;
    width: 100%;
    height: auto;
    .el-card__body {
        > ul {
            text-align: left;
            list-style-type: none;
        }
    }
}
</style>
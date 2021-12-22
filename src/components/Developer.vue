<template>
  <el-container class="app-developer">
    <el-main>
      <div>
        <p class="fontSize">Complete your profile as a developer</p>
        <el-input
          class="textarea"
          v-model="state.textarea"
          placeholder="Self description"
          :autosize="{ minRows: 6, maxRows: 8 }"
          maxlength="255"
          type="textarea"
        />
      </div>
      <el-select class="WidSelect" @change="selectStack" filterable placeholder="选择技术栈">
        <el-option
          v-for="item in OPTIONS"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        ></el-option>
      </el-select>
      <div class="tag-border">
        <el-tag
          v-for="tag in state.tags"
          :key="tag"
          closable
          :disable-transitions="false"
          @close="deleteTag(tag)"
        >{{ tag }}</el-tag>
      </div>
      <div class="box">
        <el-button type="primary">Connect Linkedln</el-button>
      </div>
      <div class="box">
        <p>Location(City,Country)</p>
      </div>
    </el-main>
    <el-footer>
      <el-button-group>
        <el-button type="primary">Submit</el-button>
        <el-button type="primary" @click="submitUserInfo">Save and Complete later</el-button>
      </el-button-group>
    </el-footer>
  </el-container>
</template>

<script setup>
//////开发者组件
import { reactive, ref } from "@vue/reactivity";
import { userSignUp } from "../network/dataSource";
import { ElMessage } from "element-plus";
import { useRouter } from "vue-router";
import { useStore } from "vuex";
import { onMounted } from "@vue/runtime-core";
const store = useStore();
const router = useRouter();

const OPTIONS = [
  {
    value: "Vue",
    label: "Vue",
  },
  {
    value: "Vuex",
    label: "Vuex",
  },
  {
    value: "React",
    label: "React",
  },
  {
    value: "Vue-Router",
    label: "Vue-Router",
  },
  {
    value: "Java Script",
    label: "Java Script",
  },
  {
    value: "Java",
    label: "Java",
  },
];
const state = reactive({
  textarea: '',
  // strText: '',
  strTags: '',
  tags: ([]),
})

const selectStack = (value) => {
  if (state.tags.indexOf(value) === -1) {
    state.tags.push(value);
    console.log(String(state.tags))
    state.strTags = String(state.tags)
  }
};

const deleteTag = (tag) => {
  state.tags.value.splice(state.tags.indexOf(tag), 1);
};

const submitUserInfo = async () => {
  // 目前存在一定问题，之前在signup界面进行注册，username，email，pw，new_user已经写入数据库，这里再写一遍？？
  const res = await userSignUp({
    email: store.state.userInfo.email,
    new_user: false,
    description: state.textarea,
    skillTags: state.strTags,
    location: "",
  });
  console.log(res)
  if (res.data.statusCode === 1) {
    ElMessage.success("User data submitted successfully");
    // let {textarea, strTags} = state
    store.commit("updateUserInfo", {
      // email: store.state.userInfo.email,
      description: state.textarea,
      skillTags: state.strTags,
    })
    console.log(store.state.userInfo)
    router.push({ name: "MyProfile" })
  } else {
    ElMessage.error("User failed to submit information");
    // router.push({ name: "MyProfile" })
  }

};

</script>

<style lang = "less">
.app-developer {
  .textarea {
    width: 400px;
    height: auto;
    margin-bottom: 15px;
  }
  .el-main > .fontSize {
    font-size: 15px;
  }
  .tag-border {
    width: 400px;
    height: 200px;
    border: 1px solid var(--el-border-color-base);
    margin: 10px auto;
  }
  .box {
    width: 400px;
    height: 100px;
    border: 1px solid var(--el-border-color-base);
    margin: 10px auto;
    text-align: left;
  }
  .tag-border .el-select {
    float: left;
  }
  .el-select {
    float: none !important;
  }
  .WidSelect {
    width: 400px;
    height: auto;
  }
  .el-select .el-input {
    display: flex;
    width: 400px;
    height: auto;
  }
  .el-tag {
    float: left;
    margin: 10px 0 0 10px;
    border-radius: 20px;
    width: 140px;
    height: auto;
    font-weight: bold;
    font-size: large;
  }
  .el-button {
    border-radius: 25px;
  }
}
</style>
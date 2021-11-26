<template>
  <el-container>
    <div class="TiT"><h1>Product Title and Logo etc</h1></div>
    <el-header>
      <span class="fontSize">Are you a developer or client</span>
      <guide />
    </el-header>
    <el-main>
      <div>
        <p class="fontSize">Complete your profile as a developer</p>
        <el-input
          @change="settext"
          class="textarea"
          v-model="text"
          placeholder="Self description"
          :autosize="{ minRows: 6, maxRows: 8 }"
          maxlength="255"
          type="textarea"
        />
      </div>
      <el-select
        class="WidSelect"
        @change="searchConfig"
        filterable
        placeholder="选择技术栈"
      >
        <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        >
        </el-option>
      </el-select>
      <div class="tag-border">
        <el-tag
          v-for="tag in tags"
          :key="tag"
          closable
          :disable-transitions="false"
          @close="handleClose(tag)"
        >
          {{ tag }}
        </el-tag>
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
        <el-button type="primary" @click="submit">Submit</el-button>
        <el-button type="primary">Save and Complete later</el-button>
      </el-button-group>
    </el-footer>
  </el-container>
</template>

<script setup>
import { ref } from "@vue/reactivity";
import guide from "../components/guide.vue";
import { request } from "../network/request";
import { useRoute } from "vue-router";
const options = ref([
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
]);
const text = ref("");
const StrText = ref("");
const tags = ref([]);
const route = useRoute();
const settext = () => {
  // console.log(String(text.value))
  const StrText = String(text.value);
};

const searchConfig = (value) => {
  // console.log(value)
  if (tags.value.indexOf(value) === -1) {
    tags.value.push(value);
    // console.log(tags.value.toString())
    const StrTags = tags.value.toString();
  }
};
const handleClose = (tag) => {
  tags.value.splice(tags.value.indexOf(tag), 1);
};
// console.log(route.params.username)
// console.log(route.params.email)
const submit = async () => {
  const i = await request({
    method: "post",
    url: "user/login",
    params: {
      username: route.params.username,
      email: route.params.email,
      description: StrText,
      skillTags: StrTags,
      location: "",
      new_user: false,
    },
  });
};
</script>

<style scoped>
.TiT {
  font-size: 36px;
}
.textarea {
  width: 400px;
  height: auto;
  margin-bottom: 15px;
}
.fontSize {
  font-size: 24px;
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
</style>
<template>
  <Navigation />
  <div class="app-release">
    <el-card>
      <div class="context">
        <div class="one">
          <h4>First step:</h4>
          <h6>Please give your project a name</h6>
          <el-input
            placeholder="Please give your project a name"
            v-model="obj.input1"
          />
        </div>
        <div class="one">
          <h4>Second step:</h4>
          <h6>What did you want?(Multiple choices)</h6>
          <el-cascader
            placeholder="Try searching Guide"
            :options="state.options"
            :props="state.props"
            filterable
          />
        </div>
        <div class="one">
          <h4>Third step:</h4>
          <span class="line">
            <h6>Tell us more about it(input At least 30 words)</h6>
            <el-link type="primary" @click="change">Some examples</el-link>
          </span>
          <el-input
            v-model="obj.textarea"
            :rows="4"
            type="textarea"
            placeholder="please input"
          />
        </div>
        <div class="one">
          <h4>Four step</h4>
          <h6>Looking forward to the development time</h6>
          <div class="lineone">
            <el-input-number v-model="obj.num" :min="0" :max="30" />
            <h4>date</h4>
            <el-input-number v-model="obj.num1" :min="0" :max="12" />
            <h4>month</h4>
          </div>
          <div class="lineone">
            <el-input-number v-model="obj.num2" :min="0" :max="9" />
            <h4>thousand</h4>
            <el-input-number v-model="obj.num3" :min="0" />
            <h4>myriad</h4>
          </div>
        </div>
        <div class="one">
          <h4>Fifth step</h4>
          <el-upload
            class="upload-demo"
            drag
            action="https://jsonplaceholder.typicode.com/posts/"
            multiple
          >
            <el-icon class="el-icon--upload"><upload-filled /></el-icon>
            <div class="el-upload__text">
              Drop file here or <em>click to upload</em>
            </div>
            <template #tip>
              <div class="el-upload__tip">
                jpg/png files with a size less than 500kb
              </div>
            </template>
          </el-upload>
        </div>
        <el-button type="primary" round>next</el-button>
      </div>
    </el-card>
  </div>
</template>

<script setup>
import Navigation from "../components/Navigation.vue";
import { ref, reactive, toRefs, toRef } from "vue";
import { UploadFilled } from "@element-plus/icons-vue";

const state = reactive({
  props: {
    multiple: true,
  },
  options: [
    {
      value: "Android",
      label: "Android",
      children: [
        {
          value: "disciplines",
          label: "Disciplines",
          children: [
            {
              value: "consistency",
              label: "Consistency",
            },
            {
              value: "feedback",
              label: "Feedback",
            },
            {
              value: "efficiency",
              label: "Efficiency",
            },
            {
              value: "controllability",
              label: "Controllability",
            },
          ],
        },
        {
          value: "navigation",
          label: "Navigation",
          children: [
            {
              value: "side nav",
              label: "Side Navigation",
            },
            {
              value: "top nav",
              label: "Top Navigation",
            },
          ],
        },
      ],
    },
    {
      value: "ios",
      label: "ios",
      children: [
        {
          value: "...",
          label: "...",
        },
      ],
    },
    {
      value: "web",
      label: "web",
    },
    {
      value: "WeChat",
      label: "WeChat",
    },
    {
      value: "Server development",
      label: "Server development",
    },
    {
      value: "...",
      label: "...",
    },
  ],
});

const arr = ["Hellow", "Hi", "How do you do", "good morning", "nice"];

const change = () => {
  obj.textarea = arr[obj.i % arr.length]; //循环取余
  obj.i++;
  // console.log(obj.i,arr.length);
};

const obj = reactive({
  textarea: "",
  num: 1,
  num1: 1,
  num2: 1,
  num3: 1,
  i: 0,
  input1: "",
});

</script>

<style lang="less">
.app-release {
  width: 60%;
  margin: auto;
  .context {
    width: 60%;
    margin: auto;
    .one {
      text-align: left;
      .line {
        display: flex;
        justify-content: space-between;
      }
      .lineone {
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
      }
    }
  }
  .el-button {
    margin-top: 20px;
  }
  .el-card {
    margin-top: 5px;
  }
}
</style>

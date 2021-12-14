<template>
  <div class="app-container">
    <div class="container">
      <div>
        <el-radio-group v-model="dat.Projects">
          <el-radio-button @click="toPro" label="Projects" />
          <el-radio-button @click="toDev" label="Developers" />
        </el-radio-group>
        <el-input placeholder="Search" />
      </div>
      <el-card v-if="dat.show">
        <div class="one">
          <div class="top">
            <h2>Filters</h2>
            <el-button type="primary">Apply</el-button>
          </div>
          <h3>project type</h3>
          <el-input placeholder="Search project types" />
          <div>
            <el-checkbox label="IOS App" />
            <el-checkbox label="Android App" />
            <el-checkbox label="Webesite" />
            <el-checkbox label="Desktop app" />
          </div>
        </div>
        <div class="one">
          <h3>Skill tags</h3>
          <el-input placeholder="Search Skill tags" />
          <el-checkbox label="IOS Development" />
          <el-checkbox label="Backend Development" />
          <el-checkbox label="Fronted Development" />
        </div>
        <div class="one">
          <h3>Payment</h3>
          <el-radio-group class="group" v-model="dat.Hourly">
            <el-radio-button label="Hourly" />
            <el-radio-button label="Fixed" />
          </el-radio-group>
          <span class="text">$0 - $80 USD+</span>
          <el-slider v-model="money" range :max="80" />
          <el-input-number v-model="money[0]" :min="1" :max="80" size="mini" />
          <el-input-number v-model="money[1]" :min="1" :max="80" size="mini" />
        </div>
        <div class="one">
          <h3>Client Country</h3>
          <el-select v-model="dat.Country" placeholder="Select">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            />
          </el-select>
        </div>
        <div class="one">
          <h3>Time Range</h3>
          <el-radio-group class="group" v-model="dat.Hours">
            <el-radio-button label="Hours" />
            <el-radio-button label="Days" />
          </el-radio-group>
          <span class="text">time: 0 - 80</span>
          <el-slider v-model="time" range :max="80" />
          <el-input-number v-model="time[0]" :min="1" :max="80" size="mini" />
          <el-input-number v-model="time[1]" :min="1" :max="80" size="mini" />
        </div>
      </el-card>
      <el-card v-else>
        <el-empty description="description" />
      </el-card>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive } from "vue";

const money = ref([19, 37]);

const time = ref([20, 40]);

const dat = reactive({
  Country: "",
  show: true,
  Projects: "Projects",
  Hourly: "Hourly",
  Hours: "Hours",
});

const options = reactive([
  {
    value: "China",
    label: "China",
  },
  {
    value: "America",
    label: "America",
  },
  {
    value: "Russia",
    label: "Russia",
  },
  {
    value: "France",
    label: "France",
  },
]);

const toPro = () => {
  dat.show = true;
};

const toDev = () => {
  dat.show = false;
};
</script>

<style lang="less">
.app-container {
  .container {
    width: 100%;
  }
  .el-card__body {
    padding: 0px;
  }
  .el-input {
    margin-top: 5px;
    margin-bottom: 5px;
  }
  .one {
    width: 280px;
    margin: auto;
    text-align: left;
    line-height: 15px;
  }
  .group {
    display: flex;
    justify-content: center;
    margin-bottom: 15px;
  }
  .top {
    display: flex;
    justify-content: space-between;
  }
  .top .el-button {
    height: 20px;
    margin-top: 10px;
  }
  .el-slider {
    width: 200px;
    margin: 10px auto 20px auto;
  }
  .el-input-number {
    margin-left: 10px;
    margin-bottom: 10px;
  }
  .el-input-number__decrease,
  .el-input-number__increase {
    top: 6px;
  }
  .el-select {
    display: flex;
    justify-content: center;
  }
  .text {
    display: flex;
    justify-content: center;
  }
}
</style>

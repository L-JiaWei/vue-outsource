<template>
  <el-container>
    <el-main>
      <el-button-group class="btn">
        <el-button round  :class="{'active':isactive}" @click="toClient">client</el-button>
        <el-button round  :class="{'active':isact}" @click="toDeveloper">developer</el-button>
      </el-button-group>
    </el-main>
  </el-container>
</template>

<script setup>
import { ref } from "vue"
import { useRouter } from 'vue-router';
const router = useRouter()
let isactive = ref(false)
let isact = ref(true)
const toClient = () => {
  isactive.value=true
  isact.value=false
  router.push({path: "/client"})
}
const toDeveloper = () => {
  isactive.value=false
  isact.value=true
  router.push({path: "/developer"})
}
</script>

<style scoped>
.active{
  color: aliceblue;
  background-color: #409EFF;
}
</style>
<template>
  <div id="foo">
    <el-button type="primary" @click="login">Login in</el-button>
    <el-button type="primary" @click="reg">Sign up</el-button>
    <div class="foot">
      By registering you confirm that you accept that you accept the
      <span>Terms</span> and <span>Conditions and Privacy Policy</span>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import { useRouter } from "vue-router";
export default defineComponent({
  //   components:{
  //     ElButton
  //   },
  setup() {
    const router = useRouter();
    const login = () => {
      router.push({ path: "/" });
    };

    const reg = () => {
      router.push({ path: "/about" });
    };
    return {
      login,
      reg,
    };
  },
});
</script>

<style scoped>
.foot {
  width: 400px;
  margin: auto;
}
.foot {
  font-size: 12px;
  text-align: left;
  margin-top: 20px;
  line-height: 20px;
}
.foot span {
  color: skyblue;
}
.el-button {
  border-radius: 25px;
}
</style>
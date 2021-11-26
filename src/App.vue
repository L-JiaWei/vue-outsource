<template>
  <router-view />
</template>

<script>
import { ElButton } from "element-plus";
import "element-plus/dist/index.css";
import { defineComponent } from "vue";
import { useRouter } from "vue-router";
export default defineComponent({
  components: {
    ElButton,
  },
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

<style lang="less">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>

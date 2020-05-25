<template>
  <div>
    <h1>路易斯组件库</h1>
    <l-form :model="model" :rules="rules">
      <l-form-item label="用户名" prop="name">
        <l-input v-model="model.name" placeholder="please input username"></l-input>
      </l-form-item>
      <l-form-item label="密码">
        <l-input v-model="model.pwd" type="password" placeholder="please input password"></l-input>
      </l-form-item>
      <l-form-item>
        <button @click="test">登录</button>
      </l-form-item>
    </l-form>
    {{model}}
  </div>
</template>

<script>
import LForm from "./Form";
import LFormItem from "./FormItem";
import LInput from "./Input";

export default {
  data() {
    return {
      model: {
        name: "",
        pwd: ""
      },
      rules: {}
    };
  },
  components: {
    LForm,
    LFormItem,
    LInput
  },
  methods: {
    test() {
      this.$notice({
        title: "成功",
        message: "",
        duration: 2000
      });
    }
  }
};
</script>

<style lang="scss" scoped>
</style>
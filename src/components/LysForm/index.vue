<template>
  <div>
    <h2>Form 表单</h2>
    <l-form :model="model" :rules="rules" ref="form">
      <l-form-item label="用户名" prop="name">
        <l-input v-model="model.name" placeholder="请输入用户名"></l-input>
      </l-form-item>
      <l-form-item label="密码" prop='pwd'>
        <l-input v-model="model.pwd" type="password" placeholder="请输入密码"></l-input>
      </l-form-item>
      <l-form-item>
        <l-input></l-input>
      </l-form-item>
      <l-form-item>
        <button @click="test">登录</button>
      </l-form-item>
    </l-form>
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
      rules: { 
        name: [
          { required: true, message: '请输入姓名' },
          { min: 3, max: 5, message: '长度在 3 到 5 个字符' }
        ],
        pwd: [
          { required: true, message: '请输入密码', },
          { pattern: new RegExp('(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[^a-zA-Z0-9]).{8,30}'), message: '密码中必须包含字母、数字、特称字符，至少8个字符，最多30个字符' }
        ]
      }
    };
  },
  components: {
    LForm,
    LFormItem,
    LInput
  },
  methods: {
    test() {
      this.$refs['form'].validate()
      .then(() => {
        this.$notice({
          title: "成功",
          duration: 2000
        });
      })
      .catch(() => {
        this.$notice({
          title: "登录失败",
          type: 'error',
          duration: 2000
        });
      })
      
    }
  }
};
</script>

<style lang="scss" scoped>
</style>
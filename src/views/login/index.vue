<!-- @format -->

<template>
  <div class="container">
    <Card class="card" title="欢迎登录">
      <Form ref="formValidate" :model="formValidate" :rules="ruleValidate">
        <FormItem prop="userName">
          <Input v-model="formValidate.userName" placeholder="请输入用户名" class="input">
            <span slot="prepend">
              <Icon type="ios-person" />
            </span>
          </Input>
        </FormItem>
        <FormItem prop="password">
          <Input v-model="formValidate.password" placeholder="请输入密码" type="password" class="input">
            <span slot="prepend">
              <Icon type="ios-lock" />
            </span>
          </Input>
        </FormItem>        
        <Button type="primary" long class="input" @click="handleSubmit">登录</Button>
        <p class="hint">输入任意用户名和密码即可</p>
      </Form>
    </Card>
  </div>
</template>

<script>
export default {
  name: 'login',
  data() {
    return {
      formValidate: {
        userName: '',
        password: ''
      },
      ruleValidate: {
        userName: [{ required: true, message: '请输入用户名', trigger: 'blur' }],
        password: [{ required: true, message: '请输入密码', trigger: 'blur' }]
      }
    };
  },
  methods: {
    handleSubmit() {
      this.$refs.formValidate.validate(valid => {
        if (valid) {
          this.$router.push({
            name: 'index'
          });
        }
      });
    }
  }
};
</script>

<style scoped>
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
}
.card {
  width: 300px;
}
.input {
  width: 90%;
}
.input:nth-child(2) {
  margin-top: 10px;
}
.input:nth-child(3) {
  margin-top: 10px;
}
.hint {
  width: 90%;
  text-align: center;
  color: #c3c3c3;
  margin-top: 10px;
}
</style>

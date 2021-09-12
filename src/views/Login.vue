<template>
  <div class="container">
    <div class="loginBox">
      <a-form ref="loginFormRef" :rules="rules" :model="formState" class="loginForm">
        <a-form-item name="user">
          <a-input v-model:value="formState.user" placeholder="请输入用户名">
            <template #prefix
              ><UserOutlined style="color: rgba(0, 0, 0, 0.25)"
            /></template>
          </a-input>
        </a-form-item>

        <a-form-item name="password">
          <a-input
            v-model:value="formState.password"
            type="password"
            placeholder="请输入密码"
            v-on:keyup.enter="login"
          >
            <template #prefix
              ><LockOutlined style="color: rgba(0, 0, 0, 0.25)"
            /></template>
          </a-input>
        </a-form-item>
        <a-form-item class="loginBtn">
          <a-button type="primary" style="margin: 10px" @click="login">登录</a-button>
          <a-button type="info" style="margin: 10px" @click="resetForm">取消</a-button>
        </a-form-item>
      </a-form>
    </div>
  </div>
</template>
<script>
import { UserOutlined, LockOutlined } from "@ant-design/icons-vue";
import { defineComponent, reactive } from "vue";
export default defineComponent({
  setup() {
    const formState = reactive({
      user: "",
      password: "",
    });
    const rules = {
      user: [
        { required: true, message: "请输入用户名", trigger: "blur" },
        { min: 4, max: 12, message: "用户名必须在4-12个字符之间", trigger: "blur" },
      ],
      password: [
        { required: true, message: "请输入密码", trigger: "blur" },
        { min: 8, max: 20, message: "密码必须在8-20个字符之间", trigger: "blur" },
      ],
    };
    return {
      formState,
      rules,
    };
  },

  components: {
    UserOutlined,
    LockOutlined,
  },
  methods:{
      resetForm(){
          this.$refs.loginFormRef.resetFields()
      },
      login(){
        //   this.$refs.loginFormRef.validateFields(vaild=>{
        //       if (vaild){
        //           console.log("yes")
        //       }else{
        //           console.log("no")
        //       }
        //   })
        var valid = true
        if (valid){
            window.sessionStorage.setItem("token","1111111")
            this.$router.push('admin')
        }else{
            this.$message.error("输入非法数据，请重新输入")
        }
        
      }
  }
});
</script>

<style scoped>
.container {
  height: 100%;
  background-color: #282c34;
}
.loginBox {
  width: 450px;
  height: 300px;
  background-color: aliceblue;
  position: absolute;
  top: 50%;
  left: 61%;
  transform: translate(-50%, -50%);
  border-radius: 9px;
}
.loginForm {
  width: 100%;
  position: absolute;
  bottom: 10%;
  padding: 0 20px;
  box-sizing: border-box;
}
.loginBtn {
  display: flex;
  justify-content: flex-end;
}
</style>
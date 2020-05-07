<template>
    <div>
      <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="form-box">
        <!-- <el-form  class="form-box" ref="form" :model="form" label-width="80px"> -->
  <el-form-item label="邮箱" class="e-mail" prop="email">
    <el-input type="email" class="e-mail-input" placeholder="请输入正确的邮箱格式" v-model="ruleForm.email"></el-input>
  </el-form-item>
  <el-form-item label="验证码" prop="code">
    <el-input  class="yanzhengma-input" placeholder="请输入验证码" v-model="ruleForm.code"><el-link type="info">发送验证码</el-link>
    </el-input>
  </el-form-item>
  <el-form-item label="昵称">
    <el-col :span="11">
      <el-input class="nicheng-input" placeholder="请输入昵称" v-model="ruleForm.username"></el-input>
    </el-col>
  </el-form-item>
  <el-form-item label="密码" prop="password">
    <el-input class="password-input"  placeholder="至少六位字符、建议数字+字母大小写" v-model="ruleForm.password" show-password></el-input>
  </el-form-item>
  <el-form-item >
    <el-button class="box1-button" type="primary" @click="onSubmit">注册</el-button>
    <!-- <el-button>取消</el-button> -->
  </el-form-item>
  <el-form-item class="box-xuanzedl">
    <el-text class="box1-xuanzedl" type="primary" @click="onSubmit">手机号注册</el-text>
    <el-text class="box2-xuanzedl">|</el-text>
    <el-text class="box3-xuanzedl">直接登录</el-text>
  </el-form-item>
</el-form>        
    </div>
</template>

<script>
  export default {
    data() {
      return {
        ruleForm: {
          email: '',
          code: '',
          password: '',
          desc: ''
        },
         rules: {
          email: [
            { required: true, message: '请输入正确邮箱格式', trigger: 'blur' },
            {pattern:/^([0-9A-Za-z\-_\.]+)@([0-9a-z]+\.[a-z]{2,3}(\.[a-z]{2})?)$/g, message: "请输入正确的邮箱", trigger: "blur"},
            { min: 10, max: 20, message: '长度在 10到 20个字符', trigger: 'blur' }
          ],
          code: [
            { required: true, message: '', trigger: 'change' }
          ],
          password: [
            { type: 'date', required: true, message: '', trigger: 'change' }
          ]
         }
      }
    },
    methods: {
      onSubmit() {
        console.log('submit!');
      }
    }
  }
</script>

<style >
   .form-box{
     width:500px;
     margin:100px auto;
    }
    .e-mail-input{
      width: 300px;
    }
    .yanzhengma-input{
      width: 300px;
    }
    .nicheng-input{
      width: 300px;
    }
    .password-input{
      width: 300px;
    }
    .box1-button{
      width:300px;
    }
    .box-xuanzedl{
      width: 400px;
      margin: auto;
    }
    .box1-xuanzedl{
      margin-right: 20px;
      color:gray;
    }
    .box2-xuanzedl{
      margin-left: 10px;
      margin-right: 10px;
      color:gray;
    }
    .box3-xuanzedl{
      margin-left: 20px;
      color:gray;
    }
</style>
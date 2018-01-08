<template>
	<div class="appLoginWp">
		<AppHeadVue :title='title'></AppHeadVue>
		<div class="content">
      <form id='loginForm' class="inputGroup">
        <mt-field label="账号" placeholder="请输入账号" v-model="username"></mt-field>
        <mt-field label="密码" placeholder="请输入密码" type="password" v-model="password"></mt-field>
      </form>
      <section class="autoLogin">
        <span class="info">自动登录</span>
        <div class="infoSwitch"><mt-switch v-model="switchValue"></mt-switch></div>
      </section>

			<div class="contentPadded">
				<mt-button type="primary">登陆</mt-button>
				<div class="linkArea"><a id='reg'>注册账号</a> <span class="spliter">|</span> <a id='forgetPassword'>忘记密码</a>
				</div>
			</div>
			<div class="mui-content-padded oauth-area">
			</div>
		</div>
	</div>
</template>

<script>
import AppHeadVue from 'appHeadVue'
export default {
  name: 'app',
  data: function() {
    return {
      title: '登录',
      username: '',
      password: '',
      switchValue: ''
    }
  },
  mounted() {
    document.title = this.title
  },
  methods: {},
  components: {
    AppHeadVue
  }
}
</script>
<style type="text/scss" lang="scss" scoped>
@import '../../style/_include/_all';
/*body*/
.appLoginWp {
  .inputGroup{
    padding: px2rem(12) 0;
  }
  .autoLogin {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: px2rem(10);
    background: $white;
    .info {
      font-size: px2rem(16);
      color: $fontColor;
      flex: 2;
    }
    .infoSwitch {
      flex: 8;
      display: flex;
      justify-content: flex-end;
    }
  }
  .content {
    padding-top: px2rem(10);
  }
  .linkArea {
    font-size: px2rem(16);
    color: $fontColor;
  }
}
</style>
<style type="text/scss" lang="scss">
@import '../../style/resetMint';
</style>


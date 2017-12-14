<template>
	<div id="app">
		<!--头部导航-->
		<el-row class="container">
			<el-col :span="24" class="topbar-wrap">
				<el-col :span="10">
					<div class="logo" style="float:left;">
						<router-link to="/"><img src=""></router-link>
					</div>
					<div class="htext">
						<router-link to="/"><span>门户内容管理</span></router-link>
					</div>
				</el-col>
				<el-col :span="14">
					<el-dropdown class="dropdown" trigger="hover">
						<span class="el-dropdown-link userinfo-inner">{{sysUserName}}</i></span>
						<el-dropdown-menu slot="dropdown" class="item">
							<el-dropdown-item @click.native="basic"><i class="icon-user-tie"></i>基本资料</el-dropdown-item>
							<el-dropdown-item  @click.native="uerspwd"><i class="icon-cog"></i>设置</el-dropdown-item>
							<el-dropdown-item @click.native="logout"><i class="icon-reply"></i>退出登录</el-dropdown-item>
						</el-dropdown-menu>
					</el-dropdown>
					<el-dropdown class="news">
						<span class="el-dropdown-link userinfo-inner">消息</i></span>
						<el-dropdown-menu slot="dropdown" class="item">
							<el-dropdown-item ><i class="icon-bubbles4"></i><el-badge :value="200" :max="99" class="item">我的消息</el-badge></el-dropdown-item>
							<el-dropdown-item><i class="icon-bubbles3"></i><el-badge :value="3" class="item">系统消息</el-badge></el-dropdown-item>
						</el-dropdown-menu>
					</el-dropdown>
				</el-col>
			</el-col>
			<!--主内容区-->
			<el-col :span="24" class="main">
				<!--左侧导航-->
				<aside :class="{showSidebar:!collapsed}">
					<!--展开折叠开关-->
					<div class="menu-toggle" @click.prevent="collapse">
						<i class="icon-list2" v-show="!collapsed" ></i>
						<i class="icon-sort-amount-desc" v-show="collapsed" ></i>
					</div>
					<!--导航菜单-->
					<el-menu default-active="0" router :collapse="collapsed" theme="dark" class="el-menu-vertical-demo">
						<template v-for="(item,index) in $router.options.routes" v-if="item.menuShow">
							<el-submenu v-if="!item.leaf" :index="index+''" v-bind:key="index">
								<template slot="title"><i :class="item.iconCls"></i><span slot="title">{{item.name}}</span></template>
								<el-menu-item v-for="term in item.children" :key="term.path" :index="term.path" v-if="term.menuShow" :class="$route.path==term.path?'is-active':''">
									<i :class="term.iconCls"></i><span slot="title">{{term.name}}</span>
								</el-menu-item>
							</el-submenu>
							<el-menu-item  v-bind:key="index" v-else-if="item.leaf&&item.children&&item.children.length" :index="item.children[0].path" :class="$route.path==item.children[0].path?'is-active':''">
								<i :class="item.iconCls"></i><span slot="title">{{item.children[0].name}}</span>
							</el-menu-item>
						</template>
					</el-menu>
				</aside>
				<!--右侧内容区-->
				<section class="content-container">
					<div class="grid-content bg-purple-light">
						<el-col :span="24" class="content-wrapper">
							<transition name="fade" mode="out-in">
								<router-view></router-view>
							</transition>
						</el-col>
					</div>
				</section>
			</el-col>
		</el-row>
	</div>
</template>

<script>
export default {
  name: 'app',
  data: function() {
    return {
      collapsed: false,
      sysUserName: ''
    }
  },
  methods: {
    // 折叠导航栏
    collapse: function() {
      this.collapsed = !this.collapsed
    },
    // 密码修改
    uerspwd: function() {
      var _this = this
      _this.$router.push('/changepwd')
    },
    // 基本资料
    basic: function() {
      var _this = this
      _this.$router.push('/Basic_information')
    },
    // 退出登录
    logout: function() {
      var _this = this
      this.$confirm('确认退出吗?', '提示', {
        // type: 'warning'
      })
        .then(() => {
          sessionStorage.removeItem('usernkname')
          _this.$router.push('/Login')
        })
        .catch(() => {})
    },
    handleOpen(key, keyPath) {
      console.log(key, keyPath)
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath)
    }
  },
  mounted() {
    var user = sessionStorage.getItem('usernkname')
    if (user) {
      user = JSON.parse(user)
      this.sysUserName = user.usernkname || ''
    }
  }
}
</script>
<style>
/*body*/
.container {
  position: absolute !important;
  top: 0px;
  bottom: 0px;
  width: 100%;
}
/*头部*/
.topbar-wrap {
  height: 50px;
  line-height: 50px;
  background: #373d41;
  padding: 0px;
}
/*主内容*/
.main {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  position: absolute;
  top: 50px;
  bottom: 0px;
  overflow: hidden;
}
/*左导航*/
aside {
  min-width: 50px;
  text-align: center;
  background: #333744;
}

::-webkit-scrollbar {
  display: none;
}

.showSidebar {
  overflow-x: hidden;
  overflow-y: auto;
}
/*折叠开关*/
.menu-toggle {
  background: #4a5064;
  text-align: center;
  color: white;
  height: 35px;
  line-height: 35px;
}
.menu-toggle i:hover {
  color: #20a0ff;
  cursor: pointer;
}
/*右内容区*/
.content-container {
  background: #fff;
  flex: 1;
  overflow-y: auto;
  padding: 20px;
  padding-bottom: 1px;
}
.content-wrapper {
  background-color: #fff;
  box-sizing: border-box;
}
/*绿建文字*/

.htext {
  width: 114px;
  float: left;
  text-align: center;
  line-height: 50px;
  height: 50px;
  border-right: 1px solid #2a2f32;
  cursor: pointer;
}

.htext a {
  color: white;
}

.htext:hover {
  background: #2a2f32;
}
/*头部LOGO样式*/

.logo {
  width: 63px;
  height: 50px;
  text-align: center;
  line-height: 60px;
  border-right: 1px solid #2a2f32;
  cursor: pointer;
}

.logo:hover {
  background: #2a2f32;
}

.logo img {
  width: 25px;
  height: 25px;
  margin-top: 12px;
}
/*el-下拉菜单*/

.userinfo-inner {
  color: white;
  cursor: pointer;
}

.dropdown {
  float: right;
  height: 50px;
  line-height: 50px;
  width: 100px;
  text-align: center;
}

.dropdown:hover {
  background: #2a2f32;
}

.news {
  float: right;
  height: 50px;
  line-height: 50px;
  width: 100px;
  text-align: center;
  border-right: 1px solid #2a2f32;
}

.news:hover {
  background: #2a2f32;
}
/* 小角标 */
.item {
  box-sizing: border-box;
}
</style>


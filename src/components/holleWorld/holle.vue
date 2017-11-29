<template>
  <div id="app">
    <MainHeader v-on:goToDetail="goToDetail"></MainHeader>
    <h2>基于vue+webpack的单页面开发-----主页</h2>
  </div>
</template>

<script type="text/ecmascript-6">
import HolleJs from './controllers/holle'
import MainHeader from 'appHeadVue'
export default {
  ...HolleJs,
  components: {MainHeader}
}

</script>
<style type="text/scss" lang="scss">
@import './scss/holle.scss';
</style>

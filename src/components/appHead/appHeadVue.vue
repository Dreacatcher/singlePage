<template>
	<header class='mainHead'>
    <section class="nav">
      <section class="topLeft">
        <a class="topLogo">
          <img src="../../assets/img/logo.jpg" alt="" >
          <span class="icon-home"></span>
        </a>
        <div class="topNav">
          <ul>
            <li class='mainNav' :class="{'active':(num==-1&&!isSubTabContItem)}" @click="defaultTab">
              <span class="topSubNavTt">肾站工作站</span> 
              <span :class="{'icon-chevron-right':(num!=-1)}"></span>
              <span :class="{'icon-chevron-down':num==-1}"></span>
            </li>
            <li class='mainNav' v-if="tabs!=''" 
            @click="showSubItem(tabs)"
            :class="{'active':(num!=-1&&!isSubTabContItem)}">
              <span class="topSubNavTt">{{tabs}}</span> 
              <span :class="{'icon-chevron-right':(isSubTabContItem)}"></span>
              <span :class="{'icon-chevron-down':(!isSubTabContItem)}"></span>
            </li>
          </ul>
        </div>
        <div class="endNav" v-if="subTabContItem!=''">{{subTabContItem}}</div>
      </section>
      <section class="topRight">
        <a href=""><span class="icon-list"></span></a>
        <a href=""><span class="icon-list"></span></a>
        <a href=""><span class="icon-list"></span></a>
      </section>
    </section>
    <section class="navCont" v-show="(num==-1&&!isSubTabContItem)">
      <ul>
        <li
          v-for='(itemCon,index) in tabContents' :key='index' 
          @click="tab(index,itemCon)" :class="{'listActive':index==activeNum}">
          <span class="icon-newspaper"></span>
          <span class="info">{{itemCon}}</span>
        </li>
      </ul>
    </section>
    <section class="navSubCont" v-show="(num!=-1&&!isSubTabContItem)">
      <ul>
        <li :class="{'listActive':index==subTabIndex}"
          v-for='(itemCon,index) in subTabCont' :key='index' 
          @click="subTabFn(index,itemCon)">
          <span class="icon-newspaper"></span>
          <span class="info">{{itemCon}}</span>
        </li>
      </ul>
    </section>
  </header>
</template>


<script>
import AppHeadJs from './controllers/appHead'
export default {
  name: 'main-head',
  ...AppHeadJs
}
</script>


<style type="text/scss" lang="scss">
@import './scss/appHead'
</style>

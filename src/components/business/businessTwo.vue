<template>
  <div class="businesWrak">
    <div class="busQueryListTop">请选择您要查询的公司名称：</div>
    <ul class="hall-list">
      <li v-for="(item,index) in sublists" :key="index" @click="clickJump(index)">
        <span>{{item}}</span>
      </li>
    </ul>
  </div>
</template>
<script type="text/ecmascript-6">
import Storage from 'storage'
import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)
let router = new Router()
export default {
  data() {
    return {
      sublists: []
    }
  },
  components: {},
  methods: {
    clickJump(index) {
      Storage.set('businessListDataNub', index, 40000000)
      router.push(`/businessThree/`)
    }
  },
  watch: {},
  created() {
    let info = Storage.get('businessListData')
    this.sublists = []
    for (let a in info) {
      this.sublists.push(info[a].entname)
    }
  },
  mounted() {
    document.title = '企业信息查询'
  }
}
</script>
<style type="text/scss" lang="scss">
@import '../../style/_include/_all.scss';
.businesWrak {
  .hall-list {
    li {
      &:before {
        width: 0;
      }
      span {
        padding: 0;
      }
    }
  }
}

.busQueryListTop {
  font-size: px2rem(12);
  color: $gray;
  padding-bottom: px2rem(12);
  padding-left: px2rem(10);
}
</style>


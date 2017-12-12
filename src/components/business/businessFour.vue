<template>
  <div class="business businessFour">
    <div class="businessTop" v-for="(item, index) in gdData" :key="index">
      <div class="businessTopWa">
        <span>姓名</span>
        <p>{{item.inv}}</p>
      </div>
      <div class="businessTopWa" v-if="item.lisubconam != ''">
        <span>认缴出资额</span>
        <p>{{item.lisubconam}}万元</p>
      </div>
      <div class="businessTopWa" v-if="item.liacconam != ''">
        <span>实缴出资额</span>
        <p>{{item.liacconam}}万元</p>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
import Storage from 'storage'
export default {
  data() {
    return {
      gdData: []
    }
  },
  created() {
    this.gdData = Storage.get('businessListGdData')
  },
  methods: {},
  mounted() {
    document.title = '股东信息'
  }
}
</script>

<style lang="scss">
@import '../../style/_include/_all.scss';
.businessFour {
  min-height: 100%;
  .businessTop {
    margin: 0 0 px2rem(10) 0;
    padding: px2rem(0) 0 px2rem(0) px2rem(15);
    .businessTopWa {
      &:first-child {
        border-top: none;
      }
    }
  }
}
</style>

<template>
  <div class="businesWrak">
    <ul class="businessQueryList">
      <li>
        <span class="businessQueryL">企业名称</span>
        <span class="businessQueryR">
          <input class="accInt" v-model="businessName" ref="idNubmerRec" @focus="focus(0)" :class="{'prompt-shake prompt-color': businiessJudge }" type="text" placeholder="请输入查询的企业名称">
          <i class="resetX" v-if="resetXShow" @click="resetX"></i>
        </span>
      </li>
    </ul>
    <div class="businessQueryBtn" :class="{'submission':submissionBlock}" @click="btnNext()">
      <BtnVue btnText="查询"></BtnVue>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
import { mapState } from 'vuex'
import { Indicator, Toast } from 'mint-ui'
import Storage from 'storage'
import BtnVue from 'btnVue'
import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)
let router = new Router()
export default {
  data() {
    return {
      submissionBlock: false,
      businessName: '',
      businessRecord: '',
      businiessJudge: false,
      resetXShow: false
    }
  },
  components: {
    BtnVue
  },
  computed: {
    ...mapState({
      businessData: state => state.businessStore.businessData
    })
  },
  watch: {
    businessName: function() {
      if (this.businessName !== '') {
        this.resetXShow = true
      } else {
        this.resetXShow = false
      }
    },
    businessData: function(val, oldVal) {
      if (val != null) {
        if (val.qyxx !== '' && val.code === 200 && val.message === 'OK') {
          Indicator.close()
          this.submissionBlock = false

          Storage.set('businessListData', val.qyxx, 40000000)
          router.push(`/businessTwo/`)
        } else if (val.code === 201) {
          Indicator.close()
          Toast({
            message: '没有查询到该企业的基本信息',
            className: 'willySize',
            duration: 3000
          })
          this.submissionBlock = false
        } else {
          Indicator.close()
          Toast({
            message: '网络错误，请重新查询',
            className: 'willySize',
            duration: 3000
          })
          this.submissionBlock = false
        }
      } else {
        Indicator.close()
        Toast({
          message: '网络错误，请重新查询',
          position: 'middle',
          className: 'willySize',
          duration: 2000
        })
        this.submissionBlock = false
      }
    }
  },
  created() {},
  methods: {
    btnNext() {
      if (this.userIdNumberFn() === true) {
        this.$store.dispatch({
          type: 'getBusinessData',
          ENTNAME: this.businessName
        })
        Indicator.open('查询中...')
        this.submissionBlock = true
      }
    },
    // 验证
    userIdNumberFn() {
      if (this.businessName === '' || this.businessName === '请输入查询的企业名称') {
        this.businiessJudge = true
        this.businessName = '请输入查询的企业名称'
      } else {
        return true
      }
    },
    // input 焦点事件
    focus(dataName) {
      switch (dataName) {
        case 0:
          if (this.businiessJudge === true) {
            this.businessName = this.businessRecord
            this.businiessJudge = false
          }
          break
      }
    },
    // 清空input val
    resetX() {
      this.businessName = ''
      this.businiessJudge = false
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
  width: 100%;
  height: 100%;
  background: $bgColor;
  background-size: 35%;
  padding-top: px2rem(10);
  text-align: left;
  box-sizing: border-box;
}

.businessQueryList {
  width: 100%;
  display: flex;
  li {
    width: 100%;
    background: $white;
    padding: 0 px2rem(10);
    box-sizing: border-box;
    display: flex;
    .businessQueryL {
      flex: 2;
      width: 0;
      height: px2rem(49);
      font-size: px2rem(14);
      color: $lightBlack;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .businessQueryR {
      flex: 8;
      width: 0;
      height: px2rem(49);
      line-height: px2rem(49);
      font-size: px2rem(14);
      position: relative;
      display: flex;
      align-items: center;
      .resetX {
        font-family: 'icomoon' !important;
        position: absolute;
        top: 0;
        right: 0;
        font-size: px2rem(28);
        color: $btnHover;
        &:after {
          content: '\e91a';
        }
      }
      .accInt {
        width: 90%;
        line-height: px2rem(22);
        font-size: px2rem(14);
        color: $lightBlack;
        border: none;
        padding: 0;
        margin: 0;
        position: relative;
      }
    }
  }
}

.businessQueryBtn {
  margin: px2rem(30) px2rem(10) 0 px2rem(10);
  box-sizing: border-box;
}

.mint-indicator-wrapper {
  padding: px2rem(15) !important;
  border-radius: px2rem(5) !important;
  .mint-spinner-snake {
    width: px2rem(32) !important;
    height: px2rem(32) !important;
    border: px2rem(4) solid transparent;
  }
  .mint-indicator-text {
    font-size: px2rem(16) !important;
  }
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
}
</style>

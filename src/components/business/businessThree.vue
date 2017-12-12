<template>
  <div class="business">
    <div class="businessTop">
      <h3 class="businessTopTit">{{entname}}</h3>
      <div class="businessTopWa" v-if="UNISCID != 'null'">
        <span>统一社会信用代码</span>
        <p>{{UNISCID}}</p>
      </div>
      <div class="businessTopWa" v-if="REGNO != 'null'">
        <span>注册号</span>
        <p>{{REGNO}}</p>
      </div>
      <div class="businessTopWa" v-if="LEREP != 'null'">
        <span>法人姓名</span>
        <p>{{LEREP}}</p>
        <i class="seeInfo" @click="gdFn">查看股东信息</i>
      </div>
      <div class="businessTopWa" v-if="REGSTATE != 'null'">
        <span>法人状态</span>
        <p>{{REGSTATE}}</p>
      </div>
      <div class="businessTopWa" v-if="false">
        <span>法人单位类型</span>
        <p>{{ENTTYPE}}</p>
      </div>
      <div class="businessTopWa" v-if="DJJG != 'null'">
        <span>登记机关名称</span>
        <p>{{DJJG}}</p>
      </div>
      <div class="businessTopWa" v-if="DOMDISTRICT != 'null'">
        <span>注册地行政区划</span>
        <p>{{DOMDISTRICT}}</p>
      </div>
      <div class="businessTopWa" v-if="DOM != 'null'">
        <span>注册地址</span>
        <p>{{DOM}}</p>
      </div>
      <div class="businessTopWa" v-if="ESTDATE != 'null'">
        <span>成立时间</span>
        <p>{{ESTDATE}}</p>
      </div>
    </div>
    <div class="businessBot">
      <div class="businessTopWa" v-if="OPSCOTYPE != 'null'">
        <span>营业范围</span>
        <p>{{OPSCOTYPE}}</p>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
import { mapState } from 'vuex'
import { Indicator, Toast } from 'mint-ui'
import Storage from 'storage'
import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)
let router = new Router()
export default {
  data() {
    return {
      entname: '',
      UNISCID: '',
      REGNO: '',
      LEREP: '',
      REGSTATE: '',
      ENTTYPE: '',
      DJJG: '',
      DOMDISTRICT: '',
      DOM: '',
      ESTDATE: '',
      OPSCOTYPE: ''
    }
  },
  computed: {
    ...mapState({
      businessGdData: state => state.businessStore.businessGdData
    })
  },
  created() {
    let businessQyxx = Storage.get('businessListData')
    let Nub = Storage.get('businessListDataNub')

    this.entname = businessQyxx[Nub].entname
    this.UNISCID = businessQyxx[Nub].uniscid
    this.REGNO = businessQyxx[Nub].regno
    this.LEREP = businessQyxx[Nub].lerep
    this.REGSTATE = businessQyxx[Nub].regstate
    this.ENTTYPE = businessQyxx[Nub].enttype
    this.DJJG = businessQyxx[Nub].djjg
    this.DOMDISTRICT = businessQyxx[Nub].domdistrict
    this.DOM = businessQyxx[Nub].dom
    this.ESTDATE = businessQyxx[Nub].estdate.substr(0, 10)
    this.OPSCOTYPE = businessQyxx[Nub].opscotype
  },
  methods: {
    // 查询股东请求
    gdFn() {
      Indicator.open('查询中...')
      this.$store.dispatch({
        type: 'getBusinessGdData',
        ENTNAME: this.entname
      })
    }
  },
  watch: {
    businessGdData: function(val, oldVal) {
      if (val != null) {
        if (val.code === 200 && val.message === 'OK') {
          if (val.qyxx.length === 0) {
            Indicator.close()
            Toast({
              message: '未能查到该企业股东信息',
              className: 'willySize',
              duration: 3000
            })
          } else {
            Indicator.close()
            Storage.set('businessListGdData', val.qyxx, 40000000)
            router.push(`/businessFour/`)
          }
        } else {
          Indicator.close()
          Toast({
            message: '网络错误，请重新查询',
            className: 'willySize',
            duration: 3000
          })
        }
      } else {
        Indicator.close()
        Toast({
          message: '网络错误，请重新查询',
          position: 'middle',
          className: 'willySize',
          duration: 2000
        })
      }
    }
  },
  mounted() {
    document.title = '企业信息查询'
  }
}
</script>

<style lang="scss">
@import '../../style/_include/_all.scss';
.business {
  width: 100%;
  height: auto;
  text-align: left;
  background: #f5f5f5;
  .businessTop {
    width: 100%;
    padding: px2rem(23) 0 px2rem(6) px2rem(15);
    box-sizing: border-box;
    background: #fff;
    .businessTopTit {
      font-size: px2rem(16);
      color: #333;
      padding: 0 0 px2rem(22) 0;
    }
  }
  .businessBot {
    width: 100%;
    margin: px2rem(10) 0;
    background: #fff;
    padding: px2rem(20) px2rem(26) px2rem(10) 0;
    box-sizing: border-box;
    .businessTopWa {
      border: none;
      padding: 0 0 0 px2rem(26);
    }
  }
  .businessTopWa {
    width: 100%;
    padding: px2rem(10);
    border-top: px2rem(1) solid #efefef;
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    box-sizing: border-box;
    position: relative;
    span {
      font-size: px2rem(12);
      color: #999;
      width: 100%;
      display: inline-block;
      padding: 0 0 px2rem(5) 0;
    }
    p {
      font-size: px2rem(14);
      color: #333;
      width: 100%;
      display: inline-block;
    }
  }
  .seeInfo {
    font-size: px2rem(12);
    color: #2870e7;
    position: absolute;
    right: px2rem(10);
    bottom: px2rem(10);
  }
}
</style>

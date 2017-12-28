<template>
	<div id="app">
    <section class="mapwp"> 
      <!--头部导航-->
      <div id="mysubway"></div>
      <div class="inputText">
        <div class="inputTextL">
          <div class="inputTextCont">
            <em>起点：</em>
            <input type="text" placeholder="请输入起点" v-model="inputStart">
          </div>
          <div class="inputTextCont">
            <em>终点：</em>
            <input type="text" placeholder="请输入终点" v-model="inputEnd">
          </div>
        </div>
        <div class="inputTextR">
          <button>搜索</button>
        </div>
      </div>
    </section>
	</div>
</template>

<script>
export default {
  name: 'app',
  data: function() {
    return {
      inputStart: '',
      inputEnd: ''
    }
  },
  mounted() {
    this.initAMap()
  },
  methods: {
    initAMap(lnglat, pointArr, _zoom) {
      console.log(window.subway)
      if (!window.subway) {
        return
      }
      /* eslint-disable no-new */
      var mysubway = window.subway('mysubway', {
        easy: 1,
        adcode: '1100'
      })
      mysubway.event.on('subway.complete', () => {
        this.setAddMarker(mysubway)
      })
    },
    setAddMarker(_mysubway) {
      _mysubway.addMarker('淞虹路')
    },
    setAddStart(_mysubway, _start) {
      _mysubway.addMarker(_start)
    },
    setAddEnd(_mysubway, _end) {
      _mysubway.addMarker(_end)
    },
    setAddress(_mysubway, _start, _end) {
      this.setAddStart(_mysubway, _start)
      this.setAddEnd(_mysubway, _end)
    },
    clearRouteFn(_mysubway) {
      _mysubway.clearRoute()
    }
  }
}
</script>
<style type="text/scss" lang="scss" scoped>
@import '../../style/_include/_all';
/*body*/
.mapwp {
  .inputWp {
    height: px2rem(30);
    input {
      height: px2rem(30);
    }
  }
  .inputText {
    position: absolute;
    bottom: 0;
    left: 0;
    z-index: 999;
    display: flex;
    width: 100%;
    justify-content: center;
    align-items: center;
    align-items: center;
    background: $white;
    .inputTextL {
      flex: 18;
      padding-top: px2rem(12);
      .inputTextCont {
        display: flex;
        justify-content: center;
        align-content: center;
        align-items: center;
        margin-bottom: px2rem(10);
      }
      inputTextCont:last-child{
        margin-bottom: 0;
      }
      em,
      input {
        display: inline-block;
        height: px2rem(30);
        line-height: px2rem(30);
        padding-left: px2rem(10);
        font-size: px2rem(14);
      }
      
      em {
        font-size: px2rem(14);
        flex: 6;
      }
      input {
        flex: 18;
      }
    }
    .inputTextR {
      flex: 6;
      justify-content: center;
      align-items: center;
      height: px2rem(70);
      line-height: px2rem(70);
      margin-top: px2rem(-20);
      margin-left: px2rem(10);
      margin-right: px2rem(10);
      button {
        color: #fff;
        background-color: #409eff;
        border-color: #409eff;
        width: 100%;
        border-radius: px2rem(8);
        height: px2rem(70);
        font-size: px2rem(20);
        border: none;
      }
    }
  }
}
</style>


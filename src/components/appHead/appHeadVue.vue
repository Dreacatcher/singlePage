<template>
	<div class="appHeaderWp">
		<header class="headeBar">
			<span class="back icon-chevron-left"></span>
			<h1 class="title">{{title}}</h1>
       <span class="count-down">倒计时 {{endTime}}</span>
       <span class="count-down">getEndTime 倒计时 {{formatEndTime}}</span>
		</header>
	</div>
</template>

<script>
export default {
  props: {
    title: {
      type: String
    },
    endTime: {
      type: Number
    }
  },
  name: 'app',
  data: () => {
    return {
    }
  },
  computed: {
    formatEndTime() {
      return this.endTime + 10
    }
  },
  mounted() {
  },
  methods: {},
  components: {}
}
</script>
<style type="text/scss" lang="scss" scoped>
@import '../../style/_include/_all';
/*body*/
.appHeaderWp {
	.headeBar {
		display: flex;
		justify-content: center;
		align-items: center;
		box-sizing: border-box;
		font-size: px2rem(12);
		color: $fontColor;
		height: px2rem(45);
		background-color: $subPageColor;
		box-shadow: 0 1px px2rem(6) $shadowColor;
		.back {
			flex: 1;
			font-size: px2rem(22);
		}
		.title {
			flex: 9;
			padding-right: px2rem(20);
			box-sizing: border-box;
			color: $fontColor;
			font-weight: normal;
			overflow: hidden;
			text-overflow: ellipsis;
			white-space: nowrap;
			font-size: px2rem(18);
		}
	}
}
</style>


<template>
  <view style="height: 100%;">
    <mescroll-uni
      ref="mescrollRef"
      @init="mescrollInit"
      @down="downCallback"
      @up="upCallback"
      :down="option.down"
      :up="option.up"
      :fixed="false"
      @scroll="handleScroll"
      >
      <view class="margin-tb-df bg-color-white padding-lg" v-for="item in dataList" :key="item.id">
        <view class="flex patent-list">
          <view class="flex-1 padding-left-lg border-box">
            <view class="text-lg text-one-line-ellipsis patent-list-name">123</view>
            <view class="margin-top-df text-color-grey text-multi-line-ellipsis">商标摘要：</view>
            <view class="margin-top-df text-color-orange text-big">第类</view>
            <view class="flex justify-between text-color-grey">
              <view>商标号：</text></view>
              <text class="text-color-blue"></text>
            </view>
          </view>
        </view>
      </view>
    </mescroll-uni>
  </view>
</template>

<script>
  export default {
    data() {
      return {
        dataList: new Array(7),
        // 下拉上拉配置
        option: {
          mescroll_instance: null,
          down: {
            // 默认开始不执行下拉
            auto: false
          },
          up: {
            // 默认开始不执行上拉
            auto: false,
            // 支持滚动事件监听
            onScroll:true,
            textNoMore: '已经到底了>_<',
            page: {
              num: 1,
              size: 10
            }
          }
        },
      }
    },
    methods: {
      handleScroll(scrollEvent) {
        console.log(scrollEvent.scrollTop)
        const top = scrollEvent.scrollTop
        this.$emit('handleScroll', top)
      },
      // mescroll初始化
      mescrollInit(mescroll) {
        console.log('初始化', mescroll)
        this.option.mescroll_instance = mescroll
      },
      downCallback(mescroll) {
        console.log('下拉', mescroll)
        this.resetData()
        this.searchPatentList('down')
        // 重置下拉组件当前page.num的值
        // mescroll.setPageNum(1)
        // this.option.up.page.num = 1
        // this.data.cert.list = []
        // this.data.cert.check.list = []
        // this.data.allCheck = false
        // this.getCertList('down').then(res => {
        //   mescroll.endSuccess()
        // })
      },
      upCallback(mescroll) {
        console.log('上拉', mescroll)
        this.option.up.page.num = mescroll.num
        this.data.patent.pageParams.page = mescroll.num
        this.searchPatentList('up')
      },
    }
  }
</script>

<style>
</style>

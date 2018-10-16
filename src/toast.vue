<!-- 提示语 -->
<template>
  <div class="showtips" v-if="isShow">
    <div class="show-body" >
      <div class="header">提示</div>  
      <div class="tipcontent" v-html="text"></div>
    </div>
  </div>
</template>


<script>
export default {
  name: 'showTip',
  data() {
    return {
      text: '这是一个提示信息',
      isShow: true,
      duration: 3000
    };
  }
};
</script>

<style scoped>
.showtips {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  overflow: hidden;
  outline: 0;
  -webkit-overflow-scrolling: touch;
  background-color: rgba(0, 0, 0, 0.6);
  z-index: 2018;
}
.show-body {
  border-radius: 5px;
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  right: 0;
  margin: auto;
  width: 240px;
  height: 150px;
  text-align: center;
  border-radius: 5px;
  background: #fff;
}
.header {
  background: #eee;
  height: 30px;
  font-size: 14px;
  line-height: 30px;
  border-radius: 5px 5px 0 0;
}
.tipcontent {
  font-size: 16px;
  line-height: 24px;
  height: 120px;
  width: 240px;
  overflow: hidden;
  vertical-align: middle;
  display: table-cell;
}
</style>

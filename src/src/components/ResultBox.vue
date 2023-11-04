<template>
  <section class="content">
    <!-- 提示信息 -->
    <section class="message" v-show="status === 'error'">{{ message }}</section>
    <!-- loading 加载状态 -->
    <img src="images/loading.gif" class="loading-img" v-show="status === 'loading'" />
    <!-- 显示短连接和二维码 -->
    <section class="clink" v-show="status === 'success'">
      <div class="dc-link">短连接: <a href="javascript:;" class="dc-link-text">http://xxx.xxx/xxx</a></div>
      <div class="dc-qrcode">
        <span>二维码: </span>
        <div id="qrcode"></div>
      </div>
    </section>
  </section>
</template>
<script>
import QRCode from "qrcode"
export default {
  data() {
    return {
      message: "提示信息",
      status: "success", //error loading success
    }
  },
  mounted() {
    this.$bus.$on("sendLongUrl", msg => {
      console.log(msg)
    })
  },
}
</script>
<style scoped>
.content {
  position: relative;
  top: 150px;
  left: 250px;
  width: 800px;
  overflow: hidden;
}
.clink {
  width: 300px;
  height: 200px;
  overflow: hidden;
}
.dc-link {
  color: rgb(207, 89, 89);
  font-size: 30px;
  margin-bottom: 50px;
}
.dc-qrcode {
  height: 200px;
  color: rgb(207, 89, 89);
}

#qrcode {
  width: 200px;
  height: 200px;
}
</style>

<template>
  <section class="input-box">
    <input type="text" class="input" v-model="longUrl" placeholder="请输入长链接地址, 例如:https://xxx.xxx.xxx/xxx" />
    <button class="input-btn" @click="getLink">CLICK</button>
  </section>
</template>
<script>
import validUrl from "valid-url"
export default {
  data() {
    return {
      longUrl: "",
      config: {
        status: false,
        link: "",
        message: "",
      },
    }
  },
  methods: {
    getLink() {
      //1.验证长链接是否合法
      this.config.status = true
      this.config.link = this.longUrl
      this.config.message = ""
      //验证是否为空
      if (!this.longUrl.replace(/\s*/g, "") && this.config.status) {
        this.config.message = "长链接不能为空"
        this.config.status = false
      }
      //验证是否符合规范
      if (!validUrl.is_uri(this.longUrl) && this.config.status) {
        this.config.message = "长链接格式错误"
        this.config.status = false
      }
      //2.把配置信息发送给ResultBox
      this.$bus.$emit("sendLongUrl", this.config)
    },
  },
}
</script>
<style lang="stylus">
.input-box
    position relative
    top 100px
    height 50px
    text-align center

.input
    width: 40%
    height: 100%
    border-radius: 15px
    border: 1px solid #ccc
    padding: 0 10px
    margin-left: 10px
    font-size: 20px
    outline: none
    color: #333

.input-btn
    outline:none
    border:none
    background-color #bfa
    border-radius: 15px
    width: 100px
    height: 100%
    font-size: 20px
    color: #333
    text-align center
    line-height: 50px
    margin-left: 10px
    cursor: pointer
.input-btn:hover
    background-color: #9f8
</style>

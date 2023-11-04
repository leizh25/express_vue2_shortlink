<template>
  <div id="page-box">
    <!-- 标题 -->
    <h3 class="title">短连接生成平台</h3>
    <InputBox></InputBox>
    <!-- 短连接展示盒子 -->
    <ResultBox></ResultBox>
  </div>
</template>

<script>
import InputBox from "./components/InputBox.vue"
import ResultBox from "./components/ResultBox.vue"
export default {
  name: "App",
  components: { InputBox, ResultBox },
}
</script>

<style lang="stylus">
*
  margin 0
  padding 0

html,body
  width 100%
  height 100%

#page-box
  font-family: Avenir, Helvetica, Arial, sans-serif;
  width 100%
  height 100%
  position relative
  background-color #fcd

.title
  width 100%
  height 80px
  line-height 80px
  text-align center
  font-size 55px
  position relative
  top 10%
  letter-spacing 5px
  color #fcd8d5
  text-shadow: 0px 0px 10px #b23131
</style>

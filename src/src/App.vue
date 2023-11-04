<template>
  <div id="page-box">
    <!-- 标题 -->
    <h3 class="title" ref="title">短连接生成平台</h3>
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
  methods: {
    init() {
      const title = this.$refs.title
      let text = ""
      //定义一个颜色
      let fontColors = [
        { fontColor: "#c44032", shadowColor: "#5e1f18" },
        { fontColor: "#c93929", shadowColor: "#874e42" },
        { fontColor: "#c14234", shadowColor: "#832c23" },
        { fontColor: "#cd4f41", shadowColor: "#923228" },
        { fontColor: "#da5d4f", shadowColor: "#ac3e31" },
        { fontColor: "#ea6252", shadowColor: "#bd4537" },
        { fontColor: "#f46655", shadowColor: "#bf4334" },
      ]
      function setColor(fontColors) {
        text = ""
        Array.from(title.innerText).forEach((t, index) => {
          text += `<span style="color:${fontColors[index].fontColor};text-shadow:0 0 9px ${fontColors[index].shadowColor};">${t}</span>`
        })
        title.innerHTML = text
      }
      //循环跑马灯定时器
      setInterval(() => {
        fontColors.unshift(fontColors.pop())
        setColor(fontColors)
      }, 100)
    },
  },
  mounted() {
    this.init()
  },
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

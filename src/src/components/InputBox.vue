<template>
  <section class="input-box">
    <input type="text" class="input" placeholder="请输入长链接地址, 例如:https://xxx.xxx.xxx/xxx" />
    <button class="input-btn">CLICK</button>
  </section>
</template>
<script>
export default {}
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

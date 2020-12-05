<template>
  <div class="header">
    <div class="header-left">
      <span class="iconfont">&#xe6bc;</span>
    </div>
    <div class="header-search">
      <span class="iconfont">
        &#xe723;
        输入城市/景点/游玩主题
      </span>
    </div>
    <div class="header-right">
      北京
      <span class="iconfont">&#xe627;</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomeHeader"
};
</script>

<style   lang='stylus'>
@import '~css/var.styl';

.header {
  width: 100%;
  line-height: 0.88rem;
  background: $bgColor;
  color: $textColor;
  font-size: 0.36rem;
  display: flex;
}

.header-left {
  width: 0.4rem;
  padding: 0 0.2rem;
  text-align: center;
  font-weight: bold;
}

.header-search {
  flex: 1;
  background: $textColor;
  height: 0.6rem;
  margin: 0.11rem 0;
  border-radius: 0.1rem;
  color: #e4e7ea;
  font-size: 0.28rem;
  line-height: 0.6rem;
  padding-left: 0.2rem;
}

.header-right {
  font-size: 0.28rem;
  padding: 0 0.2rem;
}
</style>
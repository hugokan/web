<template>
<div>
  <section class="flex-ycc header-cover">
    <div>
    <div id="carouselExampleSlidesOnly" class="carousel slide" data-ride="carousel">
    <div class="carousel-inner">
    <div class="carousel-item active">
        <img src="/img/cover4.jpg" class="d-block w-100" alt="banner 1">
    </div>
  </div>
</div>
</div>
  </section>
</div>
</template>

<style lang="stylus" scoped>
.header-cover
  position absolute
  top 0
  bottom 0
  left 0
  right 0
  width 100%
  height 100%
  background-size cover
  background-position center
  .cover-title
    .title-img
      height ($coverHeight / 5)
    .title-text
      font-size 2rem
      color $whiteColor
  .cover-text
    margin-top .5rem;
    font-size 1.2rem
    color $whiteColor
</style>

<template lang="html">
  <div class="about" v-loading="loading2" element-loading-text="加载中">
    <div v-if="shows">
      <h2>飞雪语花</h2>
      <a href="https://github.com/alive-my-mind" target="_blank" alt='github'></a>
      <p>福建泉州籍人士，2019年于福建工程学院毕业；</p>
      <p>喜古风，好电竞(英雄联盟、QQ飞车手游)；</p>
      <p>前端工程师。</p>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return {
      shows:false,
      loading2:true
    }
  },
  mounted(){
    setTimeout(()=>{
      this.$store.dispatch('showProgress', 100)
      this.shows = true;
      this.loading2 = false
    },300)
  }
}
</script>

<style scoped>
  .about{
    margin:auto;
  }

  .about a {
    position: relative;
    margin-left:2rem;
    display: inline-block;
    width: 3.2rem;
    height: 3.2rem;
    background: url(../../assets/img/github.png) no-repeat center/cover;
    font-size: 1.6rem;
    vertical-align: -.7rem;
  }
  .about a::after{
    font-family: Kaiti,Yahei,sans-serif;
    display: none;
    position: absolute;
    right: -10rem;
    top: .4rem;
    content:'点我进入github';
  }
  .about a:hover::after{
    display: block;
  }
  .about p{
    font-size: 1.6rem;
    line-height: 1.6em;
  }

  .about p,.about h2{
    margin: .6rem auto;
    font-family: KaiTi,Yahei,sans-serif;
  }
  .about h2{
    display: block;
    font-size: 3rem;
    align-self: center;
    margin-top: 1.6rem;
    font-weight: bolder;
  }
  .about h2:first-child{
    display: inline-block;
  }
  @media screen and (max-width:480px){
    .about p{
      font-size: 1.4rem;
    }
    .about a{
      font-size: 1rem;
    }
    .about h2{
      margin-top: auto;
      font-size: 2.2rem;
    }
  }
</style>

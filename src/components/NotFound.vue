<template lang="html">
    <div class="NotFound">
      <div class="wrap">
        <h1>苦寻良久竟未果~</h1>
        <p>
          <a @click="goHome" href="javascript:;">返回首页</a>
          <i class='el-icon-d-arrow-left'></i>
        </p>
      </div>

    </div>
</template>

<script>
export default {
  methods:{
    goHome(){
      this.$router.replace({path:'/home'});
    }
  }
}
</script>

<style lang="css" scoped>
  h1,p{
    margin:0;
  }
  .NotFound{
    display: flex;
    height: 100%;
    background:url(../assets/img/nofound.jpg) no-repeat center/cover;
    color:#fff;
    padding: 1rem;
  }
  .wrap{
    margin:auto;
    text-align: center;
    font-family: Kaiti,YaHei,sans-serif;
  }
  .wrap h1{
    font-size:5rem;
    font-weight: 500;
  }
  .wrap p{
    margin-top: 4rem;
  }
  .wrap p i{
    font-size: 3rem;
    color: #fff;
    opacity: .7;
  }
  .wrap p a{
    display: inline-block;
    color:#fff;
    text-decoration: none;
    font-size: 2.8rem;
  }
  .wrap p a:hover{
    font-weight: 1200;
    color:rgb(0, 225, 255);
  }
</style>

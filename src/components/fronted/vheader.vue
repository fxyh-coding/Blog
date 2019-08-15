<template lang="html">
  <header>
    <div class="bg"></div>
      <nav  class="header-bg">
        <ul>
          <li><router-link to="/home">首页</router-link></li>
          <li><router-link to="/tags">标签</router-link></li>
          <li><router-link to="/about">关于</router-link></li>
        </ul>
      </nav>
  </header>
</template>

<script>
import { mapState } from 'vuex'
export default {
}
</script>

<style scoped>
  .fade-enter-active,.fade-leave-active{
      transition: all .4s;
  }
  .fade-enter,.fade-leave-active{
    opacity: 0;
  }
  header{
    height: 30rem;
  }
  .bg{
    z-index:-1;
    position: absolute;
    height:30rem;
    width: 100%;
    left:0;
    top:0;
    background:  url('../../assets/img/bgm.jpg') no-repeat center /cover;
    filter: brightness(0.8);
  }
  .header-bg{
    margin-right:2.4rem;
  }
  nav ul{
    display: flex;
    display: -webkit-flex;
    -webkit-justify-content:flex-end;
    justify-content: flex-end;
    margin:0;
    list-style: none;
  }
  nav a {
    font-size:2.2rem;
    display: block;
    padding: 1.5rem 2.1rem;
    color:#eee;
    opacity: 1;
    transition: color 0.5s;
  }
  nav a:hover{
    color:#fff;
  }
  @media screen and (max-width:768px){
    .bg,header{
      height: 24rem;
    }
  }
  @media screen and (max-width:480px){
    header,.bg{
      height: 25rem;
    }
    nav a{
      font-size:1.6rem;
    }
  }
</style>

<template lang="html">
  <div id="app" v-cloak>
      <router-view></router-view>
  </div>
</template>


<script>
// import NProgress from 'nprogress'//页面顶部进度条
// import 'nprogress/nprogress.css'
// NProgress.configure({ showSpinner: false });
import {mapState} from 'vuex'
export default {
  name:'App',
  computed:mapState(['progress']),
}
</script>

<style>
  #app{
    height: 100%;
  }
</style>

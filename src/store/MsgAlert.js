import Vue from 'vue'
export default message=>{
  Vue.prototype.$message({
      message,
      type:'error',
      showClose: true
  })
}

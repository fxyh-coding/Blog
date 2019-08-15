<template>
  <footer>
    <p>Copyrights © 2019 飞雪语花</p>
  </footer>
</template>

<script>
export default {
}
</script>

<style scoped>
  footer{
    height: 10rem;
    text-align: center;
    display: flex;
    display: -webkit-flex;
  }
  footer p{
    font-family: Kaiti,YaHei,sans-serif;
    margin:auto;
    font-size: 1.4rem;
    color: #3d3d3d;
    padding: 1rem 1.5rem;
    font-style:italic;
  }
  @media screen and (max-width:768px){
    footer{
      height: 6rem;
    }
  }
</style>

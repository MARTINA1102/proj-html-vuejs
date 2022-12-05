<template>
  <main>
    <div class="container_img">
      <div class="immagine"><img src="./img/h-2-port-img-1.jpg" alt=""></div>
      <div class="immagine"><img src="./img/h-2-port-img-2.jpg" alt=""></div>
      <div class="immagine"><img src="./img/h-2-port-img-3.jpg" alt=""></div>
      <div class="immagine"><img src="./img/h-2-port-img-4.jpg" alt=""></div>
      <div class="immagine"><img src="./img/h-2-port-img-5.jpg" alt=""></div>
      <div class="immagine"><img src="./img/h-2-port-img-6.jpg" alt=""></div>
    </div>
  </main>
</template>

<script>
export default {
  name: 'MainPage',
};
</script>

<style lang="scss" scoped>
.container_img{
  display: flex;
  flex-wrap: wrap;
}
img{
  width: 100%;
}

</style>

<template>
  <header>
    <div class="nav_bar">
      <img src="./img/logo-sidearea-1.png" alt="">
      <ul class="right_nav">
        <li v-for="ele in arrNav" :key="ele">{{ele}}</li>
        <li>immagine riquadro</li>
      </ul>
    </div>
    <div class="container">
      <div class="testo">
        <h1>Devotion that never <span>ends</span></h1>
        <div>Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet,
         consectetur, adipisci sed quia non numquam eius modi.
        </div>
        <button>READ MORE</button>
      </div>
      <div class="img_composta">
        <img src="./img/h-2-slider-img-15.png" alt="">
        <img src="./img/h-2-slider-img-16.png" alt="">
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: 'HeaderPage',
  data() {
    return {
      arrNav: [
        'HOME',
        'PAGES',
        'PORTFOLIO',
        'BLOG',
        'SHOP',
        'ELEMENTS',
      ],

    };
  },

};
</script>

<style lang="scss" scoped>
.nav_bar{
 display: flex;
 justify-content: space-between;
 padding: 1rem;
}
.nav_bar img{
  width: 200px;
}
.right_nav{
  display: flex;
  gap: 1rem;
  justify-content:space-between;
  align-items: center;
  list-style: none;
}
.container{
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
h1{
  font-size: 5rem;
}
span{
  font-style: italic;
}
.img_composta{
  display: flex;
}
button{
  margin-top: 1rem;
  background-color: white;
  border:2px solid #F5D8CA;
  padding: 1rem;
}
</style>

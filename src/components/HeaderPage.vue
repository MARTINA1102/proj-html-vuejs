<template>
  <header>
    <div class="nav_bar">
      <img src="./img/logo-sidearea-1.png" alt="">
      <ul class="right_nav">
        <li class="elemenu" v-for="ele in arrNav" :key="ele">{{ele}}</li>
        <li class="elemenu"><div class="menu"><img src="./img/svg-1.svg" alt=""></div></li>
      </ul>
    </div>
    <div class="arrow">
        <font-awesome-icon icon="fa-solid fa-circle-chevron-left" class="freccia"/>
        <font-awesome-icon icon="fa-solid fa-circle-chevron-right" class="freccia"/>
    </div>
    <div class="container">
      <div class="testo">
        <h1>Devotion that never <span class="corsivo">ends</span></h1>
        <div class="color-grey descrizione">
          Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet,
          consectetur, adipisci sed quia non numquam eius modi.
        </div>
        <button>READ MORE</button>
      </div>
      <div class="img_composta">
        <div class="relative"><img src="./img/h-2-slider-img-15.png" alt=""></div>
        <div class="img-right"><img src="./img/h-2-slider-img-16.png" alt=""></div>
      </div>
      <div class="img_pos"><img class="foglia-rossal" src="./img/short-slider-rev-1-img-2.png"
        alt=""></div>
      <div class="img_pos"><img class="foglia-rossar" src="./img/short-slider-rev-1-img-6.png"
        alt=""></div>
      <div class="img_pos"><img class="foglia-rosa" src="./img/h-2-slider-img-12.png"
        alt=""></div>
      <div class="img_pos"><img class="foglia-bord" src="./img/h-2-slider-img-14.png"
        alt=""></div>
      <div class="img_pos"><img class="foglia-verde" src="./img/h-2-slider-img-13.png"
        alt=""></div>
      <div class="img_pos"><img class="foglia-fascio" src="./img/h-2-slider-img-17.png"
        alt=""></div>
    </div>
    <div class="points"><font-awesome-icon icon="fa-solid fa-ellipsis" /></div>
  </header>
</template>

<script>
export default {
  name: 'HeaderPage',
  props: {
    arrNav: Array,
  },
};
</script>

<style lang="scss" scoped>
.elemenu:hover{
  padding-bottom:0;
  border-bottom:3px solid #e1c0b0;
}
.descrizione{
  padding: 1rem 0rem;
}
.corsivo{
  font-family: 'Playfair Display', serif;
  font-style: italic;
  font-weight: bold;
}
.nav_bar{
 display: flex;
 justify-content: space-between;
 padding: 1rem;
}
.nav_bar img{
  width: 120px;
}
.menu{
  width: 20px;
  img{
    width: 100%;
  }
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
  margin: 3rem auto;
  display: flex;
  justify-content: space-around;
  align-items: center;
  gap: 1rem;
}
.arrow{
  position:absolute;
  top: 15rem;
  left: 4rem;
  display: flex;
  justify-content: space-between;
  width: 1300px;
  margin: 0 auto;
}
.freccia{
  color: #e1c0b0;
  width: 1.5rem;
  height: 1.5rem;
  border-radius: 50%;
}
.points{
  color: #e1c0b0;
  text-align: center;
  font-size: 3rem;
}
h1{
  font-size: 4rem;
  font-weight: 200;
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
  padding: 1rem 5rem;
}
.testo, .img_composta{
  flex: 0 0 40%;
}
.relative{
  position: relative;
  flex: 0 0 50%;
  img{
    width: 100%;
  }
}
.img-right{
  flex: 0 0 50%;
  img{
    width: 100%;
  }
}
.foglia-rossal{
  position: absolute;
  right: 48rem;
  top: 4rem;
  width: 2rem;
}
.foglia-rossar{
  position: absolute;
  right: 20rem;
  top: 10rem;
  width: 2rem;
}
.foglia-fascio{
  position: absolute;
  right: 16rem;
  bottom: 25rem;
  width: 3rem;
}
.foglia-bord{
  position: absolute;
  right: 23rem;
  top: 4rem;
  width: 2rem;
}
.foglia-rosa{
  position: absolute;
  right: 50rem;
  top: 15rem;
  width: 2rem;
}
.foglia-verde{
  position: absolute;
  right: 50rem;
  bottom: 25rem;
  width: 2rem;
}
.color-grey{
  color: grey;
}

</style>

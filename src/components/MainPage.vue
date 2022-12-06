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
    <div class="working_cont">
      <h1>Working <span>process</span></h1>
      <div class="ico_cont">
        <ul v-for="ico in arrIco" :key="ico.title">
          <li><img :src="ico.img" :alt="ico.text"></li>
          <li><h2>{{ico.title}}</h2></li>
          <li>{{ico.text}}</li>
        </ul>
      </div>
    </div>
    <div class="cont_gen">
      <div class="want_to">
        <h1>Want we work with us? Send us <span>a message</span></h1>
        <div>
          Lorem ipsum dolor sit amet consectetur adipisicing elit, sed do eiusmod tempor
          incididunt ut labore et dolore. Ut enim ad minim veniam, quis nostrud
          exercitation ullamco laboris nisi ut aliquip ex ea commo.
        </div>
        <button>CONTACT</button>
      </div>
    </div>
    <div class="banner_img">
        <ul>
          <li><img class="foto" src="./img/h-2-blog-img-1.jpg" alt="img1"></li>
          <li><h2>This way, loves: a detailed quide throgh new design</h2></li>
          <li>By Emily Fields</li>
        </ul>
        <ul>
          <li><img class="foto" src="./img/h-2-blog-img-2.jpg" alt="img2"></li>
          <li><h2>I try to give people a different way of looking art</h2></li>
          <li>By Emily Fields</li>
        </ul>
        <ul>
          <li><img class="foto" src="./img/h-2-blog-img-3.jpg" alt="img3"></li>
          <li><h2>Introduce Richard Laperrière of those amazing features</h2></li>
          <li>By Emily Fields</li>
        </ul>
    </div>

  </main>
</template>

<script>
export default {
  name: 'MainPage',
  data() {
    return {
      arrIco: [
        {
          img: 'https://www.shutterstock.com/image-vector/idea-vector-icon-isolated-on-260nw-1145918294.jpg',
          title: 'First theres an idea',
          text: 'Lorem ipsum dolor sit, conetu adipisc sed be et ore aliqua pleasure itself',
        },
        {
          img: 'https://e7.pngegg.com/pngimages/92/1003/png-clipart-speech-balloon-text-comic-book-quote-bubble-comics-white.png',
          title: 'Then we talk about',
          text: 'Lorem ipsum dolor sit, conetu adipisc sed be et ore aliqua pleasure itself',
        },
        {
          img: 'https://e7.pngegg.com/pngimages/827/573/png-clipart-computer-icons-cloud-computing-icon-design-cloud-shape-heart-cloud-computing.png',
          title: 'And we think about',
          text: 'Lorem ipsum dolor sit, conetu adipisc sed be et ore aliqua pleasure itself',
        },
        {
          img: 'https://png.pngtree.com/png-clipart/20210312/original/pngtree-black-color-pencil-icon-png-image_6068492.jpg',
          title: 'So we draw along',
          text: 'Lorem ipsum dolor sit, conetu adipisc sed be et ore aliqua pleasure itself',
        },

      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.container_img{
  display: flex;
  flex-wrap: wrap;
  margin-top:5rem;
  margin-bottom: 5rem;
}
.immagine{
  flex: 1 0 33.3%;
  img{
  width: 100%;
  }
}

h1{
  text-align: center;
  font-size: 5rem;
  span{
    font-style: italic;
  }
}
.ico_cont{
  max-width: 1200px;
  margin:5rem auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  ul{
    list-style: none;
    text-align: center;
    li{
      padding: 1rem;
    }
  }
  img{
    background-color: red;
    height: 100px;
    width: 100px;

  }
}
.want_to{
  max-width: 1200px;
  margin:5rem auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  text-align: center;
  div{
    margin: 1rem 0;
  }
}
button{
  margin-top: 1rem;
  background-color: #D8F0E3;
  border:2px solid #D8F0E3;
  padding: 1rem;
}
.cont_gen{
  background-color: #FAF7F1;
  padding: 2rem;
}
.banner_img{
  max-width: 1200px;
  margin: 5rem auto;
  display: flex;
  justify-content: space-around;
  align-items: center;
  gap: 1rem;
  ul{
    list-style: none;
    flex: 0 0 30%;
    li{
      padding-top: .8rem;
      img{
      width: 100%;
      }
    }
  }
}

</style>

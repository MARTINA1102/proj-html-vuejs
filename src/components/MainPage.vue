<template>
  <main>
    <div class="container_img">
      <div class="immagine"><img src="./img/h-2-port-img-1.jpg" alt=""></div>
      <div class="immagine"><img src="./img/h-2-port-img-2.jpg" alt=""></div>
      <div class="immagine"><img src="./img/h-2-port-img-3.jpg" alt=""></div>
      <div class="immagine"><img class="img-4" src="./img/h-2-port-img-4.jpg" alt=""></div>
      <div class="immagine"><img src="./img/h-2-port-img-5.jpg" alt=""></div>
      <div class="immagine"><img src="./img/h-2-port-img-6.jpg" alt=""></div>
      <div class="top-img">
        <h4>Illustration of novels</h4>
        <div><span class="corsivo">Illustration</span></div>
      </div>
    </div>
    <div class="carrello">
      <div><img src="./img/svg-7.svg" alt="" class="cerchio"></div>
      <div><img src="./img/svg-6.svg" alt="" class="spesa"></div>
    </div>
    <div class="freccia-sup"><font-awesome-icon icon="fa-solid fa-arrow-up" /></div>
    <div class="freccia-superiore1"><font-awesome-icon icon="fa-solid fa-arrow-up" /></div>
    <div class="working_cont">
      <h2>Working <span class="corsivo-grass">process</span></h2>
      <div class="ico_cont">
        <ul>
          <li><font-awesome-icon class="icona" icon="fa-regular fa-lightbulb"
            style="color:#BADAC9" /></li>
          <li><h4>First theres an idea</h4></li>
          <li class="color-grey">
            Lorem ipsum dolor sit, conetu adipisc sed be et ore aliqua pleasure itself
          </li>
        </ul>
        <ul>
          <li><font-awesome-icon class="icona" icon="fa-regular fa-comment"
            style="color:#F8D12D"/></li>
          <li><h4>Then we talk about</h4></li>
          <li class="color-grey">
            Lorem ipsum dolor sit, conetu adipisc sed be et ore aliqua pleasure itself
          </li>
        </ul>
        <ul>
          <li><font-awesome-icon class="icona" icon="fa-solid fa-cloud"
            style="color:#80465F"/></li>
          <li><h4>And we think about</h4></li>
          <li class="color-grey">
            Lorem ipsum dolor sit, conetu adipisc sed be et ore aliqua pleasure itself
          </li>
        </ul>
        <ul>
          <li><font-awesome-icon class="icona" icon="fa-solid fa-pencil"
            style="color:#EB6950"/></li>
          <li><h4>So we draw alongt</h4></li>
          <li class="color-grey">
            Lorem ipsum dolor sit, conetu adipisc sed be et ore aliqua pleasure itself
          </li>
        </ul>
      </div>
      <div class="freccia-superiore2"><font-awesome-icon icon="fa-solid fa-arrow-up" /></div>
    </div>
    <div class="cont_gen">
      <div class="want_to">
        <h2>Want we work with us? Send us <span class="corsivo-grass">a message!</span></h2>
        <div class="color-grey">
          Lorem ipsum dolor sit amet consectetur adipisicing elit, sed do eiusmod tempor
          incididunt ut labore et dolore. Ut enim ad minim veniam, quis nostrud
          exercitation ullamco laboris nisi ut aliquip ex ea commo.
        </div>
        <button>CONTACT <font-awesome-icon icon="fa-solid fa-circle" class="hover-btn" /></button>
      </div>
    </div>
    <div class="banner_img">
        <ul>
          <li>
            <div class="calendario">
              <div class="n7 corsivo-grass">07</div>
              <div class="band">MAY'<span>19</span></div>
            </div>
            <div class="img_foto"><img class="foto" src="./img/h-2-blog-img-1.jpg" alt="img1"></div>
          </li>
          <li><h4>This way, loves: a detailed quide throgh new design</h4></li>
          <li><span class="corsivo">By Emily Fields</span></li>
        </ul>
        <ul>
          <li>
            <div class="calendario">
              <div class="n7 corsivo-grass">07</div>
              <div class="band">MAY'<span>19</span></div>
            </div>
            <div class="img_foto"><img class="foto"
              src="./img/h-2-blog-img-2.jpg" alt="img2"></div></li>
          <li><h4>I try to give people a different way of looking art</h4></li>
          <li><span class="corsivo">By Emily Fields</span></li>
        </ul>
        <ul>
          <li>
            <div class="calendario">
              <div class="n7 corsivo-grass">07</div>
              <div class="band">MAY'<span>19</span></div>
            </div>
            <div class="img_foto"><img class="foto"
              src="./img/h-2-blog-img-3.jpg" alt="img3"></div></li>
          <li><h4>Introduce Richard Laperrière of those amazing features</h4></li>
          <li><span class="corsivo">By Emily Fields</span></li>
        </ul>
        <div class="freccia-superiore3"><font-awesome-icon icon="fa-solid fa-arrow-up" /></div>
    </div>

  </main>
</template>

<script>
export default {
  name: 'MainPage',
};
</script>

<style lang="scss" scoped>
.freccia-sup{
  font-size: .8rem;
  position: absolute;
  bottom: -22rem;
  right: 1rem;
  color: white;
  background-color: #BADAC9;
  padding: .5rem;
}
.freccia-superiore1{
  font-size: .8rem;
  position: absolute;
  bottom: -50rem;
  right: 1rem;
  color: white;
  background-color: #BADAC9;
  padding: .5rem;
}
.freccia-superiore2{
  font-size: .8rem;
  position: absolute;
  bottom: -83rem;
  right: 1rem;
  color: white;
  background-color: #BADAC9;
  padding: .5rem;
}
.freccia-superiore3{
  font-size: .8rem;
  position: absolute;
  bottom: -115rem;
  right: 1rem;
  color: white;
  background-color: #BADAC9;
  padding: .5rem;
}
.container_img{
  display: flex;
  flex-wrap: wrap;
  margin-top:5rem;
  margin-bottom: 5rem;
  position: relative;
}
.top-img{
  opacity: 0;
  position:absolute;
  bottom: 15rem;
  background-color: white;
  padding: 1rem;
  }
.top-img:hover{
  opacity: 100;
  background-color: white;
  color: black;
  position:absolute;
  bottom: 15rem;
  background-color: white;
  padding: 1rem;
}
.carrello{
  position: absolute;
  right: 0rem;
  top: 43rem;
  div{
    width: 1.5rem;
  }
  img{
    width: 100%;
    color: white;
  }
}
.cerchio{
  fill: white;
  background-color:#EE2852;
  padding: .2rem;
}
.spesa{
  background-color: white;
  padding: .2rem;
}

.immagine{
  flex: 1 0 33.3%;
  img{
  width: 100%;
  }
}

h2{
  font-weight: 200;
  text-align: center;
  font-size: 3rem;
  span{
    font-style:italic;
  }
}
h4{
  font-weight: 400;
}
.ico_cont{
  max-width: 1100px;
  margin:5rem auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  background-image: url(./img/svg-3.svg);
  background-repeat: no-repeat;
  background-size: 1200px 100px;
  ul{
    list-style: none;
    text-align: center;
    li{
      padding: .5rem;
    }
  }
  img{
    position: absolute;
    top: 0;
    left: 10rem;
    width: 900px;
    z-index: 0;

  }
}
.icona{
  font-size: 3rem;
  background-color: #FAF7F1;
  border-radius: 50%;
  width: 3rem;
  height: 3rem;
  padding: 2rem;
  z-index: 900;
}
.want_to{
  max-width: 1100px;
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
  padding: 1rem 5rem;
  position: relative;
  .hover-btn{
    display: none;
  }
}
button:hover{
  background-color: #e1c0b0;
  border:2px solid #e1c0b0;
  color: white;
  .hover-btn{
    display: block;
    color: #F3D0C7;
    position: absolute;
    right: 2rem;
  }

}
.cont_gen{
  background-color: white;
  background-image: url(./img/background.JPG);
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
  position: relative;
  padding: 2rem;
}
.nuvola{
  position: absolute;
  top:0rem;
  left: -4rem;
  rotate: 180deg;
  width: 25rem;
  height: 2rem;
}
.corsivo{
  font-family: 'Playfair Display', serif;
  font-style: italic;
  font-weight: 100;
}
.corsivo-grass{
  font-family: 'Playfair Display', serif;
  font-style: italic;
  font-weight: bold;
}
.banner_img{
  max-width: 1100px;
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
      position: relative;
      img{
      width: 100%;
      }
      .calendario{
        text-align: center;
        position:absolute;
        top: 0;
        left: .5rem;
        .n7{
          background-color: #c0e1cf;
          padding: .2rem;
          font-size: 1rem;
          width: 3rem;
          height: 2rem;
        }
        .band{
          font-size: .5rem;
          width: 3rem;
          height: 3rem;
          border-bottom: 1.5rem solid transparent;
          border-left: 1.5rem solid #F3D0C7;
          border-right: 1.5rem solid #F3D0C7;
          display: flex;
          justify-content: center;
        }
      }
    }
  }
}
.color-grey{
  color: grey;
}

</style>

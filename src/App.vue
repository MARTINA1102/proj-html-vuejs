<template>
  <div>
    <HeaderPage
    :arrNav="arrNav"
    />
    <MainPage/>
    <FooterPage
    :arrFooter="arrFooter"
    />
  </div>
</template>

<script>
import HeaderPage from './components/HeaderPage.vue';
import MainPage from './components/MainPage.vue';
import FooterPage from './components/FooterPage.vue';

export default {
  components: {
    HeaderPage,
    MainPage,
    FooterPage,
  },
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
      arrFooter: [
        {
          text: "Let's Get Creative",
          mail: 'maree.qode@gmail.com',
          number: '+44645 321 789',
          address: "Avenue d'Auderghem 10",
          city: '1040 Brussels, Belgium',
          text1: 'Stay in touch with us',
        },
      ],
    };
  },
};
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Mulish:ital,wght@0,200;0,300;0,400;0,700;1,700&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@1,400;1,600&display=swap');
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Mulish', sans-serif;
}

</style>

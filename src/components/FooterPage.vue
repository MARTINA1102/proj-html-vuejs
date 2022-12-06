<template>
  <footer>
    <div>
        <ul>
          <li><img src="./img/logo-sidearea-1.png" alt=""></li>
          <li>Let's Get Creative</li>
        </ul>
        <ul>
          <li>maree.qode@gmail.com</li>
          <li>+44645 321 789</li>
        </ul>
        <ul>
          <li>Avenue d'Auderghem 10</li>
          <li>1040 Brussels, Belgium</li>
        </ul>
        <ul>
          <li>Stay in touch with us </li>
          <font-awesome-icon icon="fa-brands fa-twitter" />
        </ul>
    </div>

  </footer>
</template>

<script>
export default {
  name: 'FooterPage',
};
</script>

<style lang="scss" scoped>
footer{
  background-color:#c0e1cf;
  div{
    max-width: 1200px;
    margin: 0 auto;
    padding:3rem 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    ul{
      list-style: none;
      li{
        padding: .5rem 0;
      }
    }
  }
}

</style>

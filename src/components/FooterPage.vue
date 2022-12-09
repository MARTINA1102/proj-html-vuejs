<template>
  <footer>
    <div>
        <ul v-for="ele in arrFooter" :key="ele">
          <li><img src="./img/logo-sidearea-1.png" alt=""></li>
          <li>{{ele.text}}</li>
        </ul>
        <ul v-for="ele in arrFooter" :key="ele">
          <li>{{ele.mail}}</li>
          <li>{{ele.number}}</li>
        </ul>
        <ul v-for="ele in arrFooter" :key="ele">
          <li>{{ele.address}}</li>
          <li>{{ele.city}}</li>
        </ul>
        <ul v-for="ele in arrFooter" :key="ele">
          <li>{{ele.text1}} </li>
          <li>
            <span><font-awesome-icon :icon='ele.twitter'/></span>
            <span><font-awesome-icon :icon='ele.pinterest'/></span>
            <span><font-awesome-icon :icon='ele.facebook'/></span>
            <span><font-awesome-icon :icon='ele.linkedin'/></span>
          </li>
        </ul>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'FooterPage',
  props: {
    arrFooter: Array,
  },
};
</script>

<style lang="scss" scoped>
footer{
  background-color:#c0e1cf;
  div{
    max-width: 1100px;
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
span{
  margin: .5rem;
}
</style>

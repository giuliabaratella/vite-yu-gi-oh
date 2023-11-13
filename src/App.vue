<template>
  <HeaderComponent/>
  <MainComponent/>
</template>

<script>
import axios from 'axios';
import HeaderComponent from './components/HeaderComponent.vue';
import MainComponent from './components/MainComponent.vue';
import {store} from './data/store';
export default {
  components: {
    HeaderComponent,
    MainComponent,
  },
  data() {
    return {
      store,
    }
  },
  methods:{
    getCards(){
      const urlPag1= store.apiUrl + store.pag1;
      // console.log(urlPag1)
      axios.get(urlPag1).then((response)=>{
        // console.log(response.data.data);
        store.cardList = response.data.data;
        console.log(store.cardList)
      })
    }
  },
  created() {
    this.getCards();
  }
    
}
</script>

<style lang="scss" scoped>

</style>
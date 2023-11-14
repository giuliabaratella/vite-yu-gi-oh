<template>
  <HeaderComponent/>
  <SearchComponent/>
  <MainComponent v-if="store.cardList.length >= 20"/>
  <LoadingCards v-else />
</template>

<script>
import axios from 'axios';
import HeaderComponent from './components/HeaderComponent.vue';
import SearchComponent from './components/SearchComponent.vue';
import MainComponent from './components/MainComponent.vue';
import LoadingCards from './components/LoadingCards.vue';
import {store} from './data/store';
export default {
  components: {
    HeaderComponent,
    SearchComponent,
    MainComponent,
    LoadingCards,
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
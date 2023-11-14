<template>
  <HeaderComponent/>
  <SearchComponent @archetypeValue="setParameters"/>
  <MainComponent/>
  <LoadingCards v-if="store.loading"/>
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
      parameters: {
        num: 20,
        offset: 0,
      },
    }
  },
  methods:{
    getCards(){

      axios.get(store.apiUrl, {params: this.parameters}).then((response)=>{
        // console.log(response.data.data);
        store.cardList = response.data.data;
        console.log(store.cardList)
      }).catch((error)=>{
        this.store.error= error.message
      }).finally(()=>store.loading = false)
    },
    setParameters(val){
      console.log(val);
      this.parameters = {
        num:20,
        offset:0,
        archetype: val,
      }
      this.getCards();
    }
  },
  created() {
    this.getCards();
  }
    
}
</script>

<style lang="scss" scoped>

</style>
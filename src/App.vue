<template>
  <HeaderComponent/>
  <SearchComponent @archetypeValue="setParameters"/>
  <MainComponent v-if="!store.loading"/>
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
    getArchetypes(){
      axios.get(store.apiArchetype).then((response)=>{
        // console.log(response.data);
        for (let i=0; i<20; i++){
          store.archetypesList.push(response.data[i]);
          
        }
        console.log(store.archetypesList);
      })
    },
    setParameters(val){
      console.log(val);
      if(val){
        this.parameters.archetype = val;
      }else {
       delete this.parameters.archetype;
      }
      this.getCards()
    }
  },
  created() {
    this.getCards();
    this.getArchetypes();
  }
    
}
</script>

<style lang="scss" scoped>

</style>
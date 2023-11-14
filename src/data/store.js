import {reactive} from 'vue';
export const store= reactive ({
    apiUrl:'https://db.ygoprodeck.com/api/v7/cardinfo.php',
    cardList:[],
    error:'',
    loading:true,
    apiArchetype:'https://db.ygoprodeck.com/api/v7/archetypes.php',
    archetypesList:[],
})
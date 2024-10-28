<template>
 <div class="row">
 <div class="col-2"></div>
 <div class="col-7">
<instagram-card  v-for="card in filteredCards" :key="card.url" :info="card" />


</div>
 <div class="col-3">
  {{store.pojam}}
 </div>
 </div>
</template>

<script>
// @ is an alias to /src
import InstagramCard from '@/components/InstagramCard.vue'
import store from "@/store"

let cards=[]

cards=[
  {url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRj3v9PvjqD_UStzvTLD90pjFWysFU7MDVAtw&s", description:"PANTERICA", time:"few seconds ago"},
    {url:   "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgYfcDiWAuMPU5PNIiOgnEzsndv3uhTXTtPxlGkEdo3ihG07OCXtAZMpaM_fup6UPXLXE&usqp=CAU", description:"Taxi ekipa", time:"few minutes ago"},
  {url:  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgG0KrV1kjxleZJlAcWvnbg7N2Y8V5pMBGXQ&s", description:"Taxi Pantera i DUKA", time:"few hours ago"},

]

export default {
  name: 'HomeView',
 
  data:function (){
    return{
    cards,
    store,
    }
  },
   computed:{
  filteredCards(){
let pojamm=this.store.pojam;
if (pojjam==""){
  return this.cards;
}
return this.cards.filter((card)=> card.description.includes(pojamm))
  },
   },
  components: {
    InstagramCard
  }}

</script>

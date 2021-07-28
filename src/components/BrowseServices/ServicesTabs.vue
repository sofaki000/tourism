<template>
  <div class="q-pa-md container" style="height:700px;margin-top:50px">
    <q-card class="my-card">
      <q-card-section style="height:170px">
                <q-parallax :src="require(`../../assets/${image}.jpg`)" :height="150">
                         <div class="text-h6 text-white " style="width:100%;text-align:center">
                          Make your holidays <span style="color:black">easy and organized</span></div>
                </q-parallax>
      </q-card-section>

<div  class="row" >
      <q-tabs v-model="tab" class="text-blue-8">
        <q-tab class="col-4 phoneTabs mediumTabs" name="Renting">Renting</q-tab>
        <q-tab class="col-4 phoneTabs mediumTabs" name="Contact">Contact</q-tab>
        <q-tab class="col-4 biggerBtn mediumTabs"  name="Transfers">Transfers</q-tab>
      </q-tabs>
</div>
      <q-separator />
 
      <q-tab-panels v-model="tab" animated v-for="serviceInfo in servicesInfoo" :key="serviceInfo.name">
        <q-tab-panel :name="serviceInfo.name">
          <ServicesTabsContent :serviceInfo="serviceInfo"  />
        </q-tab-panel>
      </q-tab-panels>
     
    </q-card>
    </div>
</template>

<script>
import { ref } from 'vue'

import ServicesTabsContent from './ServicesTabsContent.vue';

export default {
   components:{ServicesTabsContent},
    data() {
      return{
        image:"antipaxos-boat",
     tab: ref('Renting'),
     servicesInfoo:
              [{
                                name:"Renting",
                                description: "We are committed to providing our guests with the best service available and we have chosen to cooperate with local car hire companies in Corfu that we have a long working history with. They have a wide selection of cars available to suit all party sizes and very competitive prices. When booking your car please take into consideration the size of the car in relation to the luggage you are carrying. Feel free to contact us for further information.",
                                img:"yellow-car.jpg",
                                action:"See available cars"
                        },{
                                name:"Contact",
                                description:"Meander travel provides a 24 hour, 7 day a week emergency help line so you are never far from assistance whilst on your holiday. You will also be able to keep in contact with the team via our email address and office phone line during office hours.",
                                img:"contact-us.jpg",
                                action:"Book a date"
                        },{
                                name:"Transfers",
                                description:"We can provide you with a choice of transfer options both within Corfu and to our neighboring island of Paxos. Private taxi or minibus can be booked to meet you on arrival at Corfu airport and deliver you to the door of your accommodation or connection point. Speed boat & Hydrofoil transfers are available for transfers to and from Corfu with connecting taxis both in Paxos and Corfu airport as well. Our transfers include a ‘Meet & Greet’ service from the Meander Travel team.",
                                img:"bus.jpg",
                                action:"Book a date"
                        }
      ]
    }
    }
    }
  
</script>

<style scoped>

@media only screen and (max-width: 600px) {
            .phoneTabs{
                height:20px;
                width:80px;
                margin:10px;
      }

      .biggerBtn{
              width:100px;
               height:20px;
                margin:10px;
            }
}



@media only screen and (min-width: 600px) {
            
            .mediumTabs{
              width:200px;
            }
 

}
 .my-card{
         height:700px;
 }
.container{
        width: 100%;
}
 





</style>
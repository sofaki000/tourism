<template>
  <q-page-container style="width:100% ">
    <q-page  style="width:100%;margin:auto">
   
<div class=" fit row no-wrap justify-center items-start content-center">
        <ServiceCard class="col-6" :serviceInfo="serviceInfos[0]" />
        <!-- <h5 class="col-6 smallText">  {{serviceInfos[0].metadescription}}</h5> -->
 </div>
<div class="cards fit row no-wrap justify-end items-start content-center">
        
          <!-- <h5 class="col-6 smallText" > {{serviceInfos[1].metadescription}}</h5> -->
          <ServiceCard class="col-6 "  :serviceInfo="serviceInfos[1]" />
 </div>   

 <div class="cards fit row no-wrap justify-start items-start content-center">
        <ServiceCard class="col-6 " :serviceInfo="serviceInfos[2]" />
          <!-- <h5 class="col-6 smallText"> {{serviceInfos[2].metadescription}}</h5> -->
 </div> 

 <q-btn @click="scrollToTop" class="q-mt-xl" style="margin-left:50px">Back to the top</q-btn>
 </q-page>
  </q-page-container>
</template>


<script>
import ServiceCard from '../components/ServiceCard.vue'

export default {
        components:{
                ServiceCard
        },
         methods:{
                scrollToTop() {
                                window.scrollTo({
                                        top: 0,
                                        left: 0,
                                        behavior: 'smooth'
                                        });
                        }
         }, 
        data(){
                return{
                        serviceInfos:
              [{
                                name:"Renting",
                                metadescription: "We are committed to providing our guests with the best service available and we have chosen to cooperate with local car hire companies in Corfu that we have a long working history with. They have a wide selection of cars available to suit all party sizes and very competitive prices. When booking your car please take into consideration the size of the car in relation to the luggage you are carrying. Feel free to contact us for further information.",
                                img:"yellow-car.jpg",
                                action:"See available cars"
                        },{
                                name:"Contact",
                                metadescription:   "Meander travel provides a 24 hour, 7 day a week emergency help line so you are never far from assistance whilst on your holiday. You will also be able to keep in contact with the team via our email address and office phone line during office hours.",
                                img:"contact-us.jpg",
                                action:"Book a date"
                        },{
                                name:"Transfers",
                                metadescription:"We can provide you with a choice of transfer options both within Corfu and to our neighboring island of Paxos. Private taxi or minibus can be booked to meet you on arrival at Corfu airport and deliver you to the door of your accommodation or connection point. Speed boat & Hydrofoil transfers are available for transfers to and from Corfu with connecting taxis both in Paxos and Corfu airport as well. Our transfers include a ‘Meet & Greet’ service from the Meander Travel team.",
                                img:"bus.jpg",
                                action:"Book a date"
                        }
      ]
                }
        }
}
</script>


<style scoped>

.cards{
margin-top:200px;
margin-right:20px;

}


.smallText{
        font-size:1rem;
        margin:10px;
}
</style>
<template>
  <q-card flat  class="scrollContent blogTeasersContainer">
                        <q-card style="margin-top:40px;" flat>
                        <q-card-section>
                                <div class="text-h6" style="text-align:center">Explore corfu like a local</div>
                        </q-card-section>
              
                        <q-separator />
                        </q-card> 
          
              <q-btn class="buttonToBlog buttonHide" to="Blog"> Visit Blog </q-btn>
        
         
                <div class="row wrap justify-between md-screens" >
                        
                        <div  class="col-sm-3 col-xs-6 browseOnMobile browseOnMedium " v-for="cardInfo in cardInfos" :key="cardInfo.title" >
                                        
                                        <div  style="margin-top:100px" class="browseOnMobile ">
                                        <BlogTeasers class="md-screens-cards" v-scroll="handleScroll" :cardInfo="cardInfo" />

                                      
                               </div>  
                                     
                        </div>
                        
                         
        
  </div>
   
 </q-card>
</template>
<script>
import BlogTeasers from '../components/BlogTeasers.vue'

export default {
        components:{
                BlogTeasers
        },
        data(){
                return{
                        cardInfos:[{
                                title:"Natural Beaty",
                                metaDescription:"Visit beatiful beaches and relax in nature",
                                img:"beatiful-beach.jpg"
                        },{
                                title:"Traditions",
                                metaDescription:"Check out confian traditions",
                                 img:"old-man-reading.jpg"
                        },{
                                title:"Traditionss",
                                metaDescription:"Check out confian traditions ",
                                 img:"plain-beach.jpg"
                        },{
                               title:"Natural Beatyy",
                                metaDescription:"Visit beatiful beaches and relax in nature",
                                 img:"ai-gordis.jpg"
                        },
                        {
                               title:"Natural Beatyyy",
                                metaDescription:"Visit beatiful beaches and relax in nature",
                                 img:"ai-gordis.jpg"
                        },{
                               title:"Natural Beatyyyy",
                                metaDescription:"Visit beatiful beaches and relax in nature",
                                 img:"ai-gordis.jpg"
                        }]
                }
        },
        methods:{
                handleScroll: function(evt, el) {
                //         if (window.scrollY > 400) {
                //                 var list, index;
                //         list = document.getElementsByClassName("box");
                //                 for (index = 0; index < list.length; ++index) {
                //                 list[index].setAttribute("style", "opacity: 1; ");
                              
                //                 }
                //        }
                //         return window.scrollY > 400;
                      }
         }   
        }
</script>

<style scoped>

@media only screen and (max-width: 700px) {
        .browseOnMobile{
                margin-left: 57px;
        }

        .buttonToBlog{
                display:inline-block !important ;
                margin:20px 90px 0 90px;
                width:50%;
        }
}

.buttonHide{
        display:none
}
.md-screens{
        justify-content: start; 
}

.md-screens-cards{
        margin:00px;
}

.browseOnMedium{
        margin:30px;
}

.box {
  opacity: 0;
  color: white; 
  backface-visibility: hidden;
  background: rgba(255, 255, 255, 0.1);
  transition:2s all ease-in ;

}

.blog-container{
        margin:10px;
        width:100%;
        margin-left:0px;
}


.scrollContent::-webkit-scrollbar {
  display: none;
}

/* Hide scrollbar for IE, Edge and Firefox */
.scrollContent {
  -ms-overflow-style: none;  /* IE and Edge */
  scrollbar-width: none;  /* Firefox */
}
 
.blogTeasersContainer{
        width:100%;
        height:700px;
        overflow:scroll;

}

</style>
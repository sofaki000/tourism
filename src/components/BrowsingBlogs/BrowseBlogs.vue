<template>
 <q-card flat  class="scrollContent blogTeasersContainer">
                        <q-card style="margin-top:40px;margin-bottom:40px;" flat>
                        <q-separator style="margin:auto" color="primary" width="20%" />
                        <q-card-section style="margin:20px 0">
                                <div class="text-h6" style="text-align:center">Explore corfu like a local</div>
                        </q-card-section>
                        <q-separator style="margin:auto" color="primary" width="20%" />
                        </q-card> 
        
                <!-- <div class="row wrap justify-between md-screens" >
                        
                        <div  class="col-sm-3 col-xs-6 browseOnMobile browseOnMedium " v-for="blogInfo in BlogInfos" :key="blogInfo.title" >
                                        <div  style="margin-top:100px" class="browseOnMobile">
                                        <BlogTeasers class="md-screens-cards" v-scroll="handleScroll" :blogInfo="blogInfo" />
              
                        </div>  
                                     
                        </div>
                   
  </div>   -->  
                         

 <div class="q-pa-md" style="width:100%;margin-bottom:40px">
    <q-carousel
      v-model="slide"
      transition-prev="slide-right"
      transition-next="slide-left"
      swipeable
      animated
      control-color="primary"
      navigation
      padding
      arrows
      height="300px"
      class="bg-grey-1 shadow-2 rounded-borders"
    >

      <q-carousel-slide :name="1" class="column no-wrap">
        <div class="row fit justify-start items-center q-gutter-xs q-col-gutter no-wrap">
         <BlogSlides :blogInfos="blogInfos[0]" />
         <BlogSlides class="dissapearOnMobile" :blogInfos="blogInfos[1]" />
        </div>
      </q-carousel-slide>


      <q-carousel-slide :name="2" class="column no-wrap">
        <div class="row fit justify-start items-center q-gutter-xs q-col-gutter no-wrap">
          <!-- <q-img  @click="goToPage(`${blogInfos[2].urlTitle}`)" class="rounded-borders col-6 full-height" :src="require(`../../assets/${blogInfos[2].img}`)" >
           <blog-teasers :blogInfo="blogInfos[2]" />
          </q-img> -->
          <BlogSlides :blogInfos="blogInfos[2]" />
          <BlogSlides  class="dissapearOnMobile" :blogInfos="blogInfos[3]" />
        </div>
      </q-carousel-slide>
      <q-carousel-slide :name="3" class="column no-wrap">
        <div class="row fit justify-start items-center q-gutter-xs q-col-gutter no-wrap">
          <BlogSlides :blogInfos="blogInfos[4]" />
          <BlogSlides  class="dissapearOnMobile" :blogInfos="blogInfos[5]" />
        </div>
      </q-carousel-slide>
      <q-carousel-slide :name="4" class="column no-wrap">
        <div class="row fit justify-start items-center q-gutter-xs q-col-gutter no-wrap">
         <BlogSlides :blogInfos="blogInfos[0]" />
         <BlogSlides  class="dissapearOnMobile" :blogInfos="blogInfos[1]" />
        </div>
      </q-carousel-slide>
    </q-carousel>
  </div>

  <the-button :routerLink="'Blog'" class="buttonToBlog buttonToBlogMediumScreens" style="color:black;">Visit Blog</the-button>
  </q-card> 
</template>
<script>
import TheButton from '../TheButton.vue'
import BlogSlides from './BlogSlides.vue'
import { ref } from 'vue'

export default {
        components:{
                TheButton,BlogSlides
        }, 
        setup () {
          return{
            slide: ref(1)
          }
           
        },
        data(){
                return{
                        blogInfos:[{
                                urlTitle:"naturalBeaty",
                                title:"Natural Beaty",
                                metaDescription:"Visit beatiful beaches and relax in nature",
                                img:"beatiful-beach.jpg"
                        },{
                                 urlTitle:"natural",
                                title:"Traditions",
                                metaDescription:"Check out confian traditions",
                                 img:"old-man-reading.jpg"
                        },{     
                                 urlTitle:"natural",
                                title:"Traditionss",
                                metaDescription:"Check out confian traditions ",
                                 img:"plain-beach.jpg"
                        },{     
                                 urlTitle:"natural",
                               title:"Natural Beatyy",
                                metaDescription:"Visit beatiful beaches and relax in nature",
                                 img:"ai-gordis.jpg"
                        },
                        {       
                                 urlTitle:"natural",
                               title:"Natural Beatyyy",
                                metaDescription:"Visit beatiful beaches and relax in nature",
                                 img:"ai-gordis.jpg"
                        },{     
                                 urlTitle:"natural",
                               title:"Natural Beatyyyy",
                                metaDescription:"Visit beatiful beaches and relax in nature",
                                 img:"ai-gordis.jpg"
                        }]
                }
        },
        methods:{
                handleScroll: function(evt, el) {
                        if (window.scrollY > 300) {
                                var list, index;
                        list = document.getElementsByClassName("box");
                                for (index = 0; index < list.length; ++index) {
                                list[index].setAttribute("style", "opacity: 1; ");
                              
                                }
                       }
                        return window.scrollY > 300;
                      },
                goToPage(url){
                        console.log(url)
                        this.$router.push({ path: url})
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
                margin:20px 90px 0 90px;
                width:50%;
        }

        .dissapearOnMobile{
                display:none
        }
}


@media only screen and (min-width: 700px) {
   .buttonToBlogMediumScreens{
           display:flex;
                margin: auto;
                width:50%;
        }

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
        height:650px;
        overflow:scroll;
        padding-bottom: 10px;

}

</style>
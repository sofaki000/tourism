<template>
  <div class="q-pa-md">
  <h6>Featured Blog posts</h6>
    <q-carousel
      v-model="slide"
      transition-prev="scale"
      transition-next="scale"
      swipeable
      animated
      control-color="white"
      navigation
      padding
      arrows
      height="350px"
      class="bg-primary text-white shadow-1 rounded-borders"
>
      <q-carousel-slide  @click="goToPage(`${featuredPosts[0].urlTitle}`)" name="style" class=
      "column no-wrap flex-center" :img-src="require(`../../assets/${featuredPosts[0].img}`)"> 
        <div class="custom-caption text-center q-mt-xl">
          <!-- <div class="text-h2">{{ featuredPosts[0].title }} <br /></div>
          <div class="text-subtitle1">  {{ featuredPosts[0].metaDescription }}</div>
             <q-btn style="background: transparent; color: white;margin-top:60px " class="text-white absolute-center text-weight-regular" label="Read More" />
       <the-button :routerLink="featuredPosts[0].urlTitle"> Read More</the-button>
        </div> -->
              <FeaturedBlogSlide :featuredBlogPost="featuredPosts[0]" />
        </div>
      </q-carousel-slide>
      <q-carousel-slide name="tv"
              @click="goToPage(`${featuredPosts[1].urlTitle}`)"  
              class="column no-wrap flex-center"
              :img-src="require(`../../assets/${featuredPosts[1].img}`)">
        
       <div class="custom-caption text-center q-mt-xl">
              <FeaturedBlogSlide :featuredBlogPost="featuredPosts[1]" />
        </div>

      </q-carousel-slide>
      <q-carousel-slide   @click="goToPage(`${featuredPosts[2].urlTitle}`)" 
                          name="layers" class="column no-wrap flex-center"  
                          :img-src="require(`../../assets/${featuredPosts[2].img}`)">
  
          <div class="custom-caption text-center q-mt-xl">
                <FeaturedBlogSlide :featuredBlogPost="featuredPosts[2]" />
        </div>
      </q-carousel-slide>
     
    </q-carousel>
  </div>
</template>


<script>
import { ref } from 'vue'
import FeaturedBlogSlide from './FeaturedBlogSlide.vue'

export default {
        components:{FeaturedBlogSlide},
        props:['featuredPosts'],
        setup () {
          return {
            slide: ref('style') 
            }
        },
          methods:{
                goToPage(url){
                        this.$router.push({ path: url})
                } 
         }
}
</script>
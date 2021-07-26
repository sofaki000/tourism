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
      height="300px"
      class="bg-primary text-white shadow-1 rounded-borders"
>
      <q-carousel-slide name="style" class=
      "column no-wrap flex-center" :img-src="require(`../assets/${featuredPosts[0].img}`)"> 
        <div class="custom-caption text-center q-mt-md">
          <div class="text-h2">{{ featuredPosts[0].title }} <br /></div>
          <div class="text-subtitle1">  {{ featuredPosts[0].metaDescription }}</div>
             <q-btn style="background: transparent; color: white;margin-top:60px " class="text-white absolute-center text-weight-regular" label="Read More" />
       
        </div>
      </q-carousel-slide>
      <q-carousel-slide name="tv" class="column no-wrap flex-center" :img-src="require(`../assets/${featuredPosts[1].img}`)">
        
        <div class="custom-caption text-center q-mt-md">
          <div class="text-h2">{{ featuredPosts[1].title }} <br /></div>
          <div class="text-subtitle1">  {{ featuredPosts[1].metaDescription }}</div>
               <q-btn style="background: transparent; color: white;margin-top:60px " class="text-white absolute-center text-weight-regular" label="Read More" />
       
        </div>

      </q-carousel-slide>
      <q-carousel-slide name="layers" class="column no-wrap flex-center"  :img-src="require(`../assets/${featuredPosts[2].img}`)">
  
         <div class="custom-caption text-center q-mt-md">
          <div class="text-h2">{{ featuredPosts[2].title }} <br /></div>
          <div class="text-subtitle1">  {{ featuredPosts[2].metaDescription }}</div>
            <q-btn style="background: transparent; color: white;margin-top:60px " class="text-white absolute-center text-weight-regular" label="Read More" />
       
        </div>
      </q-carousel-slide>
     
    </q-carousel>
  </div>
</template>


<script>
import { ref } from 'vue'

export default {
          props:['featuredPosts'],
  setup () {
    return {
      slide: ref('style'),
      lorem: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque voluptatem totam, architecto cupiditate officia rerum, error dignissimos praesentium libero ab nemo.'
    }
  }
}
</script>
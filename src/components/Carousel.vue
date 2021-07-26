<template>

  <q-page style="width:100%;height:600px">

     <div style="width:100%;height:100%;position:relative;bottom:17%" > 
       
          <q-carousel
          height="100%"
            animated
            v-model="slide"
            infinite
            :autoplay="autoplay"
            transition-prev="slide-right"
            transition-next="slide-left"
            @mouseenter="autoplay = false"
            @mouseleave="autoplay = true"
          >
   
        <q-carousel-slide :name="1" img-src="../assets/ai-gordis-boats.jpg" >
          
          <h2 class="text-white absolute-center text-weight-regular revealSlowly" >
            Corfu
          </h2>
          <h5 class="revealSlowly description titleSmall text-white absolute-center text-weight-regular" style="margin-top:55px" >
            Discover the beatiful island of Corfu</h5>
             <q-btn style="background: transparent; color: white;margin-top:105px" class="revealSlower description titleSmall text-white absolute-center text-weight-regular" label="See travelling plans" />
            </q-carousel-slide> 
     
      
        
        <q-carousel-slide :name="2" img-src="../assets/frourio.jpg" style="height:100%">
          <h2
            class="revealSlowly titleSmall text-white absolute-center text-weight-regular	"
          >
            The emerald
          </h2>
           <h5 class="revealSlowly description titleSmall text-white absolute-center text-weight-regular" style="margin-top:55px" >
            Discover the beatiful island of Corfu</h5>
            <q-btn style="background: transparent; color: white;margin-top:105px" class="revealSlower description titleSmall text-white absolute-center text-weight-regular" label="See travelling plans" />
          
            </q-carousel-slide> 
        <q-carousel-slide :name="3" img-src="../assets/ai-gordis.jpg">
          <h2 class="mobileBigText revealSlowly titleSmall text-white absolute-center text-weight-regular	">
            Beatiful beaches
          </h2>
            <h5 class="revealSlowly description titleSmall text-white absolute-center text-weight-regular" style="margin-top:55px" >
            Discover the beatiful island of Corfu</h5>
           <q-btn style="background: transparent; color: white;margin-top:105px" class="revealSlower description titleSmall text-white absolute-center text-weight-regular" label="See travelling plans" />
          
          
          </q-carousel-slide>
        <q-carousel-slide :name="4" img-src="../assets/ai-gordis-boats.jpg">
          <h2
            class="mobileBigText revealSlowly titleSmall text-white absolute-center text-weight-regular	"
          >
            Relaxing places
          </h2>
             <h5 class="revealSlowly description titleSmall text-white absolute-center text-weight-regular" style="margin-top:55px" >
            Discover the beatiful island of Corfu</h5>
         </q-carousel-slide> 
      </q-carousel>
    </div>
  </q-page>
</template>
<script>

export default {
  data() {
    return {
      slide: 1,
      autoplay: true,
         show: false
    };
  }
};

</script>
<style scoped>
@media only screen and (max-width: 600px) {
  .h2 {
    font-size: 35px;
    margin: auto;
  }

  .mobileBigText{
     font-size: 35px;
    margin: auto;
  }
}


</style>
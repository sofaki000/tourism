<template>
         <div class="centeringTextOnMobile">
          <h2 class="mobileBigText text-white absolute-center text-weight-regular revealSlowly">
            Corfu
          </h2>
          <h5 class="mobileDescription revealSlowly description titleSmall text-white absolute-center text-weight-regular" style="margin-top:55px;" >
           The island of memories</h5>
             <!-- <q-btn style="background: transparent; color: white;margin-top:105px" class="revealSlower description titleSmall text-white absolute-center text-weight-regular" label="See travelling plans" />
            -->
           <the-button style="margin-top:105px"  class="revealSlower description titleSmall text-white absolute-center text-weight-regular" :routerLink="'Blog'" >See travelling plans</the-button>
             </div>
</template>


<script>
import TheButton from '../TheButton.vue'

export default {
components:{TheButton}
}
</script>

<style scoped>
@media only screen and (max-width: 700px) {
  .h2 {
    font-size: 35px;
    margin: auto;
  }
.biggerImage{
  width:800px;
  margin:auto;
  text-align:center
}
  .mobileBigText{
     font-size: 35px;
  }

  .carouselContainerXs{
    width:700px;
      height:600px;
      margin:auto;
  }

  .mobileDescription{
    font-size:20px
  }

  .centeringTextOnMobile{
    position:relative;
    margin:auto;
    right:60px;
    bottom:30px;
  }
}

@media only screen and (min-width: 700px) {

.h2 {
    font-size: 35px;
    margin: auto;
  }
.biggerImage{
  width:1000px;
  margin:auto;
  text-align:center
}
  .mobileBigText{
     font-size: 60px;
  }

  .carouselContainerXs{
    width:1000px;
      height:600px;
      margin:auto;
  }

  .mobileDescription{
    font-size:20px
  }

  .centeringTextOnMobile{
    position:relative;
    margin:auto;
    bottom:30px;
  }


}


@media only screen and (min-width: 700px) {
  .h2 {
    font-size: 35px;
    margin: auto;
  }
.biggerImage{
  width:1000px;
  margin:auto;
  text-align:center
}
  .mobileBigText{
     font-size: 70px;
  }

  .carouselContainerXs{
    width:1000px;
      height:600px;
      margin:auto;
  }

  .mobileDescription{
    font-size:20px
  }

  .centeringTextOnMobile{
    position:relative;
    margin:auto;
    bottom:30px;
  }
}



@media only screen and (min-width:1000px) {

.biggerImage{
  width:100%;
}

.carouselContainerMd{
 width:450px;
  height:600px;
  margin:auto;
}
}

@media only screen and (min-width: 1500px) {
.biggerImage{
  width:1500px;
  margin:auto;
}
.carouselContainerXl{
  width:2400px;
  height:600px;
  margin:auto;
}
}


</style>

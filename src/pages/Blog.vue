<template>

<div style="margin:auto">
 
<div style="margin-top:10px; ">
        <q-separator class="justify-center" style="max-width:20%;margin:auto" />
        <h5 style="text-align:center;padding:20px">Corfu Blog</h5>
        <q-separator class="justify-center" style="max-width:20%;margin:auto" />
        <h6  style="text-align:center;font-weight:200">Everything worth reading </h6>
</div>

<div class="fit row wrap justify-center items-center content-center" >
<div v-for="cardInfo in cardInfos" :key="cardInfo.title" class="blog-container">
<BlogCard class="box col-4 revealSlowly" :cardInfo="cardInfo" />
</div>
</div>
<q-btn @click="scrollToTop" class="q-mt-xl" style="margin-left:50px">Back to the top</q-btn>
 
</div>
</template>

<script>
import BlogCard from '../components/BlogCard.vue'
export default {
        components:{
                BlogCard 
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
                      cardInfos:[{
                                urlTitle:"naturalBeaty",
                                title:"Natural Beaty",
                                metaDescription:"Visit beatiful beaches and relax in nature",
                                img:"plain-beach.jpg"
                        },{
                                 urlTitle:"tretons",
                                title:"Traditions",
                                metaDescription:"Check out confian traditions",
                                 img:"old-man-reading.jpg"
                        },{
                                 urlTitle:"natteerty",
                                title:"Traditionss",
                                metaDescription:"Check out confian traditions ",
                                 img:"plain-beach.jpg"
                        },{
                                 urlTitle:"natuerrety",
                               title:"Natural Beatyy",
                                metaDescription:"Visit beatiful beaches and relax in nature",
                                 img:"ai-gordis.jpg"
                        },
                        {
                                 urlTitle:"natuerteBeaty",
                               title:"Natural Beatyyy",
                                metaDescription:"Visit beatiful beaches and relax in nature",
                                 img:"ai-gordis.jpg"
                        },{
                                 urlTitle:"natutereaty",
                               title:"Natural Beatyyyy",
                                metaDescription:"Visit beatiful beaches and relax in nature",
                                 img:"ai-gordis.jpg"
                        }]
                }
        }
  }             
        
</script>


<style scoped>
.blog-container{
        margin:30px;
}

.box {
  border: 1px solid rgba(255, 255, 255, 0.5);
  padding: 8px 20px;
  line-height: 1.3em;
  opacity: 0;
  color: white;
  margin: 0 auto;
  margin-top: 30px;
  perspective: 1000px;
  backface-visibility: hidden;
  background: rgba(255, 255, 255, 0.1);
  transition: 1s all cubic-bezier(0.39, 0.575, 0.565, 1);

}
</style>
<template>
        
   <q-card @click="goToPage(`${blogInfo.urlTitle}`)" class="my-card">
      <q-img  style="height:240px;width:100%" fit="fill" :src="require(`../../assets/${blogInfo.img}`)">
        <div class="absolute-bottom">
          <div class="text-h6">{{blogInfo.title}}</div>
          <div class="text-subtitle2">{{blogInfo.metaDescription}}</div>
        </div>
      </q-img>

      <q-card-actions>
        <the-button flat style="color:black" :routerLink="specificBlog">Read More</the-button>
      </q-card-actions>
    </q-card>
</template>

<script>
import TheButton from '../TheButton.vue'

export default {
  components: { TheButton },
        props:['blogInfo'],
        computed:{
           specificBlog(){
            return '/Blog/'+ this.blogInfo.urlTitle
          }
        },
        methods:{
                goToPage(url){
                        console.log(url)
                        this.$router.push({ path: "Blog/"+url})
                } 
         }
}
</script>


<style scoped>
.my-card{
        width: 300px;
        height:300px;
}

.my-card:hover {
    transform: scale(1.02); 
}

</style>
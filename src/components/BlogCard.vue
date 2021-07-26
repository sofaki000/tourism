<template>
        
   <q-card dark class="my-card">
      <q-img  style="height:240px;width:100%" fit="fill" :src="require(`../assets/${cardInfo.img}`)">
        <div class="absolute-bottom">
          <div class="text-h6">{{cardInfo.title}}</div>
          <div class="text-subtitle2">{{cardInfo.metaDescription}}</div>
        </div>
      </q-img>

      <q-card-actions>
        <q-btn color="black" :to="specificBlog" flat>Read more</q-btn>
      </q-card-actions>
    </q-card>
</template>

<script>

export default {
        props:['cardInfo'],
        computed:{
           specificBlog(){
            return '/Blog/'+ this.cardInfo.urlTitle
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
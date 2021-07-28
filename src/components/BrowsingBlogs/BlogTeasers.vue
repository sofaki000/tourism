<template>
        <div style="width:100%">
                <div class="text-h6">{{blogInfo.title}}</div>
                <div class="text-subtitle2" style="padding-bottom:4px">{{blogInfo.metaDescription}}</div>
                <the-button style="color:white;" :routerLink="blogInfo.urlTitle">Read more</the-button>
                </div>
   <!-- <q-card class="my-card" >
      <q-img style="height:150px;" :src="require(`../../assets/${blogInfo.img}`)" >
        <div>
          <div class="text-h6">{{blogInfo.title}}</div>
          <div class="text-subtitle2">{{blogInfo.metaDescription}}</div>
        </div>
      </q-img>

      <q-card-actions> -->
         <!-- <q-btn outline style="color:black;" color="black">Read More </q-btn> -->
         <!-- <the-button style="color:black;" :routerLink="blogInfo.urlTitle">Read more</the-button>
      </q-card-actions>
    </q-card> --> 
  
</template>

<script>
import TheButton from '../TheButton.vue'
export default{
  components: { TheButton },
        props:['blogInfo']
}
</script>


<style scoped>
.my-card{
        width: 200px;
        height: 100px;
        margin:40px; 
        
}

.my-card:hover {
    transform: scale(1.06); 
}

</style>
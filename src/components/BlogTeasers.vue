<template>
        
   <q-card class="my-card" >
      <q-img style="height:150px;" :src="require(`../assets/${cardInfo.img}`)" >
        <div>
          <div class="text-h6">{{cardInfo.title}}</div>
          <div class="text-subtitle2">{{cardInfo.metaDescription}}</div>
        </div>
      </q-img>

      <q-card-actions>
         <q-btn outline style="color:black;" color="black">Read More </q-btn>
      </q-card-actions>
    </q-card>
</template>

<script>

export default{
        props:['cardInfo']
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
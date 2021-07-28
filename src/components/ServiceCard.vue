<template>
         <!-- <q-card class="my-card xs-card" dark>
      <q-img  style="height:250px;"  :src="require(`../assets/${serviceInfo.img}`)">
        <div class="absolute-bottom">
          <div class="text-h6">{{serviceInfo.name}}</div>
          <div class="text-subtitle2">{{serviceInfo.metaDescription}}</div>
        </div>
      </q-img>

      <q-card-actions>
        <q-btn flat>{{serviceInfo.action}}</q-btn>
      </q-card-actions>
    </q-card> -->
    <q-card class="my-card" @click="goToServices" >
      <q-card-section horizontal >
        <q-img
         style="height:350px;"  
          class="col-5"
          :src="require(`../assets/${serviceInfo.img}`)"
        />

        <q-card-section class="scrollContent" style="height:350px;overflow:scroll" >
       <h6>  {{ serviceInfo.name}} </h6>
         {{serviceInfo.metadescription}}
       
        </q-card-section>
      </q-card-section>

      <q-separator />

      <q-card-actions>
        <q-btn flat round icon="event" />
        <q-btn flat>
          {{serviceInfo.action}}
        </q-btn>
      
      </q-card-actions>
    </q-card>
</template>

<script>
export default{
        props:['serviceInfo'],
        methods:{
          goToServices(){
            this.$router.push({
              path:'Services'
            })
          }
        }
}
</script>

<style scoped>
.my-card{
        margin:auto;
        width: 80%;
        height:400px;
}

.my-card:hover {
    transform: scale(1.02); 
}


@media only screen and (max-width: 600px) {
  .xs-card {
    margin:auto;
         width: 200px;
        height:200px;
    }
}

.scrollContent::-webkit-scrollbar {
  display: none;
}

/* Hide scrollbar for IE, Edge and Firefox */
.scrollContent {
  -ms-overflow-style: none;  /* IE and Edge */
  scrollbar-width: none;  /* Firefox */
}
 

</style>

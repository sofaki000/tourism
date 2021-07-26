<template>
   <q-card flat style="height:100%">
      <q-card-section style="height:400px;overflow:scroll" class="scrollContent" horizontal>
        <q-img
          class="col-5 imgHeight"
         :src="require(`../assets/${serviceInfo.img}`)"
        />

        <q-card-section>
          {{ serviceInfo.description }}
         
        </q-card-section>
      </q-card-section>

      <q-separator />

      <q-card-actions align="right" >
 
        <q-btn flat color="primary">
           {{ serviceInfo.action }}
        </q-btn>
      </q-card-actions>
    </q-card>
</template>

<script>

 export default {
        props:['serviceInfo']

}
</script>
    
    <style scoped>
    .imgHeight{
            max-height:300px
    }

    </style>
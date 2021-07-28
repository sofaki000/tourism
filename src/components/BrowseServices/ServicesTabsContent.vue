<template>
   <q-card flat style="height:100%;margin-top:10px">
      <q-card-section style="height:400px;overflow:scroll" class="scrollContent" horizontal>
        <q-img
          class="col-5 imgHeight"
         :src="require(`../../assets/${serviceInfo.img}`)"
        />

        <q-card-section>
          {{ serviceInfo.description }}
         
        </q-card-section>
      </q-card-section>

      <q-separator />

      <q-card-actions align="right" >
        <the-button :routerLink="'Services'" flat color="primary">   {{ serviceInfo.action }}</the-button>
      </q-card-actions>
    </q-card>
</template>

<script>
import TheButton from '../TheButton.vue'

 export default {
  components: { TheButton },
        props:['serviceInfo']

}
</script>
    
    <style scoped>
    .imgHeight{
            max-height:300px
    }

    </style>
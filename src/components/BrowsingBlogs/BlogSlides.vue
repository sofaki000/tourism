 <template>
  <q-img @click="goToPage(`${blogInfos.urlTitle}`)"
        class="rounded-borders col-6 col-xs-12 col-sm-6 col-md-6 full-height"
        :src="require(`../../assets/${blogInfos.img}`)">
                <blog-teasers :blogInfo="blogInfos" />
  </q-img>
</template>


<script>
import BlogTeasers from './BlogTeasers.vue'

export default{
        components:{ BlogTeasers}, 
        props:['blogInfos'],
        methods:{
                goToPage(url){
                        console.log("Blog slides", url)
                        const pathStr="/Blog/";
                        const finalUrl= pathStr.concat(url)
                        this.$router.push({ path: finalUrl})
                } 
         }
}
</script>

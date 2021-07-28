<template>
  <q-page class="flex flex-center">
     <Carousel />

    <BrowseBlogs />

    <ServicesTabs />
    <TheFooter />
  </q-page>
</template>

<script>
import Carousel from 'src/components/Carousel.vue';
import BrowseBlogs from 'src/components/BrowsingBlogs/BrowseBlogs.vue';
import ServicesTabs from 'src/components/BrowseServices/ServicesTabs.vue';
import TheFooter from 'src/components/TheFooter.vue';
export default{
  components: { Carousel,BrowseBlogs,ServicesTabs,TheFooter },
  name: 'PageIndex'
}
</script>

<template>
<div>
<div class="text-h2">{{ featuredBlogPost.title }} <br /></div>
<div class="text-subtitle1 buttonMarginMobile buttonMargin" style="margin-bottom:25px">  {{ featuredBlogPost.metaDescription }}</div>
             <!-- <q-btn style="background: transparent; color: white;margin-top:60px " class="text-white absolute-center text-weight-regular" label="Read More" /> -->
       <the-button :routerLink="featuredBlogPost.urlTitle"> Read More</the-button>
        </div>
</template>

<script>
import TheButton from '../TheButton.vue'

export default{
        props:['featuredBlogPost'],
        components:{ TheButton}
}
</script>

<style scoped>

@media only screen and (max-width: 600px) {
        .buttonMarginMobile{
                margin-bottom:3px;
        }
}

@media only screen and (min-width: 600px) {
        .buttonMargin{
                margin-bottom:30px;
        }
}
</style>

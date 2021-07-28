<template>
  <q-layout view="hhh LpR lFr"> 
<q-page-container>
    <q-header reveal elevated class="bg-primary text-white" height-hint="98">
      <q-toolbar>
        <q-toolbar-title>
          <q-avatar>
            <img fit="none"
            ratio="16/9"
             src="../assets/logo.jpg">
          </q-avatar>
          Corfu Meander Travel
        </q-toolbar-title>

        <q-btn class="mobile-show" dense flat round icon="menu" @click="toggleRightDrawer" />
      </q-toolbar>

      <q-tabs align="left" class="mobile-menu">
        <q-route-tab  exact no-caps to="/" label="Home" />
        <q-route-tab   exact no-caps to="/Blog" label="Blog" />
        <q-route-tab   exact no-caps to="/Services" label="Services" />
         <q-route-tab   exact no-caps to="/Contact" label="Contact Us" />
      </q-tabs>
    </q-header>

    <q-drawer  v-model="rightDrawerOpen" side="right" class="mobile-show">
      <q-list bordered  class="mobile-show" >
      <q-btn  style = "position:relative; left:80%; top:%;" flat @click="toggleRightDrawer" icon="close" />

      <q-item clickable v-ripple to="/Index">
        <q-item-section avatar>
          <q-avatar color="white"  text-color="black" icon="mdi-home" />
        </q-item-section>

        <q-item-section>Home</q-item-section>
      </q-item>

 <q-item clickable v-ripple to="/Blog">
        <q-item-section avatar>
          <q-avatar  text-color="black" color="white" icon="mdi-server" />
        </q-item-section>

        <q-item-section>Blog</q-item-section>
      </q-item>

      <q-item clickable v-ripple to="/Services">
        <q-item-section avatar>
          <q-avatar  color="white" text-color="black" icon="mdi-toolbox-outline" />
        </q-item-section>

        <q-item-section>Services</q-item-section>
      </q-item>

      
      <q-item clickable v-ripple to="/Contact">
        <q-item-section avatar>
          <q-avatar  color="white" text-color="black" icon="mdi-email-multiple-outline " />
        </q-item-section>

        <q-item-section>Contact Us</q-item-section>
      </q-item>
</q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>

    <q-footer elevated class="bg-white text-white" style="width:100%">
      <q-toolbar>
    <q-btn  @click="facebook" size="sm" padding="xs" round class="btn" color="primary" icon="mdi-facebook " />
    <q-btn @click="linkedin" size="sm"  padding="xs" round class="btn" color="primary" icon="mdi-linkedin " />
    <q-btn  @click="instagram"  size="sm"  padding="xs"  round class="btn" color="primary" icon="mdi-instagram" />
    <q-btn @click="scrollToTop" size="sm" round icon="keyboard_arrow_up" color="primary" class="pageScroller"  />
       

      </q-toolbar>
    </q-footer>

</q-page-container>
  </q-layout>
</template>

<script>
import { ref } from 'vue'

export default {
  setup () {
    const rightDrawerOpen = ref(false)

    return {
      rightDrawerOpen,
      toggleRightDrawer () {
        rightDrawerOpen.value = !rightDrawerOpen.value
      }
    }
  },
  methods:{
       scrollToTop() {
                                  window.scrollTo({
                                        top: 0,
                                        left: 0,
                                        behavior: 'smooth'
                                        });
                        },
    facebook(){
		//	window.open('https://www.facebook.com/dialog/share?app_id='+this.facebookAppID+'&display=popup&href='+encodeURIComponent(this.url)+'&quote='+encodeURIComponent(this.message));
			window.open('https://www.facebook.com/')
      this.showDialog=false;
			this.resolve();
		},
		linkedin(){
		//	window.open('https://www.linkedin.com/sharing/share-offsite/?url='+encodeURIComponent(this.url)+'&message='+encodeURIComponent(this.message));
		window.open('https://gr.linkedin.com/')
    this.showDialog=false;
			this.resolve();
		},
    instagram(){
      window.open('https://www.instagram.com/')
          this.showDialog=false;
			this.resolve();
    }
  }
}
</script>

<style scoped>

@media (max-width: 480px) {
  .mobile-menu{
    width:1px !important;
    display:none;
  }
}
@media (min-width: 480px) {
.mobile-show{
  display:none;
}
}

.btn{
  margin:0 5px;
}




.pageScroller{
  position:absolute;
  right:20px;
}



</style>
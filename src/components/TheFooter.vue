<template>

        <div class="container row justify-start align-start">
    <ul class="col-3 footerCol">
                Information
             
  <div class="listItems">
                 <q-btn class="row content-start btn" no-caps unelevated to="Blog" padding="0 10px 0 0" flat><span class="item">Blog</span></q-btn>
                  <q-btn  class="row  content-start btn" no-caps unelevated to="Blog" padding="0px" flat><span class="item">Blog</span></q-btn>
                  <q-btn  class="row  content-start btn" no-caps unelevated to="Blog" padding="0 10px 0 0" flat><span class="item">Blog</span></q-btn>
                  <q-btn class="row  content-start btn" no-caps  unelevated to="Blog" padding="0 10px 0 0" flat><span class="item">Blog</span></q-btn>
                </div>
         </ul>
 
             <ul class="col-3 footerCol">
                Support

        <div class="listItems">
                <q-btn class="row content-start btn" no-caps unelevated to="Services" padding="0 10px 0 0" flat><span class="item">Services</span></q-btn>
                  <q-btn  class="row  content-start btn" no-caps unelevated to="Contact" padding="0 10px 0 0" flat><span class="item">Contact us</span></q-btn>
                  <q-btn  class="row  content-start btn" no-caps unelevated to="Services" padding="0 10px 0 0" flat><span class="item">Blog</span></q-btn>
                  <q-btn class="row  content-start btn" no-caps  unelevated to="Services" padding="0 10px 0 0" flat><span class="item">Blog</span></q-btn>
                
                </div>
            </ul>
        </div>
</template>

<style scoped>
.container{
        min-height:400px;
        background-color:rgb(245, 248, 255);
        width:100%;
        margin-top:100px;
        margin-bottom:0px
}

.footerCol{
        margin-left:20px;
        font-weight:500;
        margin-top:50px;
        height:100%;
        margin-bottom:70px;
}

.listItems{
        margin-top:30px;
}

.btn{
        margin-top:10px;
      
}

.item{
          font-weight: 300;
          font-size:0.8rem
}
</style>
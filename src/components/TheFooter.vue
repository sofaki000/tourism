<template>
<div style="margin-top:100px;height:600px;width:100%;position:relative;top:50px">
<div class="container row justify-start align-start">
    <ul class="col-md-2  col-xs-4 col-sm-4 footerCol">
                Information
             
                <div class="listItems">
                 <q-btn class="row content-start btn" no-caps unelevated to="Blog" padding="0 10px 0 0" flat><span class="item">Blog</span></q-btn>
                  <q-btn  class="row  content-start btn mobileBigBtn" no-caps unelevated to="Blog" padding="0px" flat><span class="item">Terms and Conditions</span></q-btn>
                </div>
         </ul>
 
             <ul class="col-md-2  col-xs-4 footerCol">
                Support

                <div class="listItems">
                        <q-btn class="row content-start btn" no-caps unelevated to="Services" padding="0 10px 0 0" flat><span class="item">Services</span></q-btn>
                        <q-btn  class="row  content-start btn" no-caps unelevated to="Contact" padding="0 10px 0 0" flat><span class="item">Contact</span></q-btn>
                </div>
            </ul>

         <ul class="col-md-2  col-xs-4 col-sm-4 footerCol">
                Physical Address

                <div class="listItems">
                        <q-btn class="row content-start btn" no-caps unelevated to="Services" padding="0 10px 0 0" flat><span class="item">The address</span></q-btn>
                        <q-btn  class="row  content-start btn" no-caps unelevated to="Contact" padding="0 10px 0 0" flat><span class="item">Corfu</span></q-btn>
                </div>
            </ul>

             <ul class="col-md-2 col-xs-4 col-sm-4 footerCol mobileTitle">
                Mail Address

                <div class="listItems">
                        <q-btn class="row content-start btn mobileBigBtnEmail" no-caps unelevated to="Services" padding="0 10px 0 0" flat><span class="item">ouremail@gmail.com</span></q-btn>
                        <q-btn  class="row  content-start btn" no-caps unelevated to="Contact" padding="0 10px 0 0" flat><span class="item">Corfu</span></q-btn>
                </div>
            </ul>
        </div>
</div>
</template>

<style scoped>
.container{
        min-height:400px;
        background-color:rgb(245, 248, 255);
        width:100%;
        margin-top:100px;
        margin-bottom:0px;
        position:absolute;
        bottom:0%;
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
      white-space: nowrap;
}

.item{
          font-weight: 300;
          font-size:0.8rem
}


@media only screen and (max-width: 450px) {
/* 
.mobileTitle{
        margin-top:50px
} */
.mobileBigBtn{
        margin-left:30px;
}

.mobileBigBtnEmail{
        margin-left:35px;
}
}
</style>
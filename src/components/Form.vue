<template>

  <div class="q-pa-md" style="max-width: 400px;margin:auto">
<div style="margin-top:10px;margin-bottom:2px ">
        <q-separator  color="primary"  class="justify-center" style="max-width:20%;margin:auto" />
        <h5 style="text-align:center;padding:2px">Get in touch</h5>
        <q-separator color="primary" class="justify-center" style="max-width:20%;margin:auto" />
</div>
    <q-form  @submit="onSubmit" @reset="onReset" class="q-gutter-md" style="margin-top:60px">
      <q-input
        filled
        v-model="firstName"
        label="First name *"
        hint="Type your first name"
        lazy-rules
        :rules="[ val => val && val.length > 0 || 'Please type something']"
      />

      <q-input
        filled 
        v-model="lastName"
        label="Last Name"
        lazy-rules
        :rules="[
          val => val !== null && val !== '' || 'Please type your last name' 
        ]"
      />
  <q-input
        filled 
        v-model="email"
        label="Email"
        lazy-rules
        :rules="[
          val => val !== null && val !== '' || 'Please type your email' 
        ]"
      />

        <!-- <q-input
                v-model="contactContent"
                label="Contact Form"
                outlined 
                lazy-rules
                :rules="[
                val => val !== null && val !== '' || 'Please type something' 
                ]"
      /> -->
      <textarea 
            name="message"
            v-model="contactContent"
            cols="44" rows="5"
            style="padding:20px;"
            placeholder="Write your message here">
          </textarea>
          

      <div>
        <q-btn label="Submit" type="submit" color="primary"/>
        <q-btn label="Reset" type="reset" color="primary" flat class="q-ml-sm" />
      </div>
    </q-form>

   <!-- <Recaptcha /> -->

  </div>
</template>

<script> 
import emailjs from 'emailjs-com';
 import Recaptcha from './Recaptcha.vue';


export default {
        components: { Recaptcha },
data(){
       return {
               siteKey:'6LfSTr0bAAAAACfbW8emr7bULoJPb4sCf3bi2wCa',
               secretKey:'6LfSTr0bAAAAABGEI0gkbb0P20nCTmc8Hd4GFZ7-',
                name:'',
                message:'',
                contactContent:'',
                email:'',
                lastName:'',
                firstName:'',
                serviceId:'service_fdmrp4d',
                userKey:'user_cKxu8aBuKilbA2UBSyw5x',
                templateId:'template_0slaqyn'  
       }
},
methods:{
         onSubmit(e){
                 console.log(this.firstName, this.email , this.contactContent)
         
                        try {
                                emailjs.sendForm(this.serviceId, this.templateId, e.target,
                                this.userKey, {
                                name: this.firstName,
                                email: this.email,
                                message: this.contactContent
                                })

                        } catch(error) {
                                console.log({error})
                        }
                        // Reset form field
                        this.name = ''
                        this.email = ''
                        this.message = ''
                        }, onReset () {
                        name.value = null
                        age.value = null
                        accept.value = false
                }
}
}
    
  
        //   $q.notify({
        //     color: 'green-4',
        //     textColor: 'white',
        //     icon: 'cloud_done',
        //     message: 'Submitted'
        //   })
        
//       },

</script>


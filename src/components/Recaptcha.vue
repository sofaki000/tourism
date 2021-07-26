<template>
  <form :model="form" @submit.prevent="submit" ref="contactForm">
    <!-- <div class="form-group row">
      <label></label>
      <div class="col-sm-10">
        <input v-model="sophie"  >
      </div>
    </div>
    <div class="form-group row">
    
    </div>
    <div class="form-group row">
      <label for="robot" class="col-sm-2 col-form-label"></label>
      <div class="col-sm-10">
        <vue-recaptcha ref="recaptcha"
          @verify="onVerify" sitekey="/*/*/*/*/*/">
        </vue-recaptcha>
      </div>
    </div>
    <button type="submit" class="btn btn-primary mb-2">Send</button>.  -->
  </form>
</template>

<script>
// import VueRecaptcha from 'vue-recaptcha';
export default {
  data() {
    return {
      sophie: "",
      form: {
        robot: false,
      },
    };
  },
  methods: {
    submit: function () {
      if (this.form.robot) {
        console.log("ROBOTTTTT");
      }
    },
    onVerify: function (response) {
      if (response) this.form.robot = true;
    },
  },
  // components: {
  //   'vue-recaptcha': VueRecaptcha
  // }
};
</script>

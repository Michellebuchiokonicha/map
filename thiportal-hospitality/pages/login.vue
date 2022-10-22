<template>
  <div>
      <v-row align-center justify="center" class="card_row" fill-height>
        <v-card class="side_card"></v-card>
        <v-col cols="12" sm="8" md="6"  class="right_card">
          <v-card class="elevation-0 mt-5 card_right" flat>
            <v-card-title class="font-weight-black">Welcome back <span class="spa"> . {{formdata.firstname}}  </span>
              </v-card-title>
            <v-card-subtitle>Login to continue</v-card-subtitle>
            <v-spacer />
            <v-card-text>
              <v-form ref="loginform">
                <v-text-field
                  outlined
                  label="Email"
                  type="text"
                  ref="email"
                  v-model="login_form.email"
                  name="email"
                  :rules="[rules.required,rules.email]"
                />

                <v-text-field
                  outlined
                  ref="password"
                  label="Password"
                  v-model="login_form.password"
                  name="password"
                  :append-icon="show_pass ? 'mdi-eye-outline' : 'mdi-eye-off-outline'"
                  @click:append="() => (show_pass = !show_pass)"
                  :type="show_pass ? 'text' : 'password'"
                  :rules="[rules.required, rules.passwordCounter]"
                />
              </v-form>
              <div class="forgot-div">
                <nuxt-link :to="{name:'forgot'}" class="a-link" color="link">Forgot Password ?</nuxt-link>
              </div>
              <div style="margin-top:20px">
                <action-button type="submit" height="48px" text="Sign In"
                  :block="true"
                  color="primary"
                  :action="login"></action-button>
              </div>

            </v-card-text>
             <v-card-actions class="justify-center">

                 <p>Don't have Account? <NuxtLink to="/"><span  class="a-link"> Sign up</span></NuxtLink></p>
                  <!-- <nuxt-link :to="{name:'courses'}"><span  class="a-link"> Sign up</span></nuxt-link></p> -->
              </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
  </div>
</template>
<script>
import general_mixin from "@/mixins/general_mixin";
import ActionButton from '@/components/ActionButton.vue';
export default {
    // middleware:[ 'verify'],
    name:"login",
  components: { ActionButton },
  mixins: [general_mixin],
  head() {
    return {
      title: 'Login'
    }
  },
  data() {
    return {

      show_pass: false,
      login_form: {
        email: "",
        password: "",
        course_id: "",
      },


      theme:false,

    }
  },
  computed: {
    formdata() {
      let t = this.$store.state.portal.profile;
      return t;
    },
    courseS(){
        let t = this.$store.state.portal.courses
        return t
      },
      courseId(){
        let t = this.$store.state.portal.course_id
       let r =  this.login_form.course_id
          r =  t

        return r
      },
    showtheme(){
      if(this.theme){
        return $vuetify.theme.themes.light
      }
      return $vuetify.theme.themes.dark
    }
  },
  mounted(){
    this.login_form.course_id  = this.$store.state.portal.course_id;
  },
  methods: {
    toggle(){
      return this.theme != this.theme;
    },
    goForgot() {
      this.$router.push({
        name: "forgot"
      });
    },
    async login() {
      if (this.$refs.loginform.validate()) {
               try{
               let response =  await this.$auth.loginWith('local', { data: this.login_form});
               let data = response.data;
               let token = data.data.token;
              this.$auth.setUserToken(token).then(() => { })
              this.loading=false
              if(data){
                  this.$router.replace("/profiling");

                 this.$apptoast.success('Successfully authenticated');
                //  console.log(this.login_form.course_id, 'yes')
                }else{
                 this.loading=false
               }
              }catch(err){
                 this.loading=false
                 console.log(err.response);
                let e = err.response.data;
                this.$apptoast.error(e.message)
            }


       } else {
         return;
       }
    }
  }
};
</script>
<style scoped>
  .spa{
    color: #c71f40;
  }
 .side_card{
    background-image: url("/image/thi-image.jpg");
    background-size: cover;
    background-color: #8f70a4;
    background-blend-mode: multiply;
    background-repeat: no-repeat;
    background:#2d3e63;
    height: 97vh;
    width: 50%;
    overflow: hidden;
  }
  .right_card{
     background-color: #fff;
    height: 97vh;
    width: 50%;
    align-items: center;
    justify-content: center;
    display: flex;
    flex-direction: row;
    overflow: hidden;
  }
  .card_right{
    box-shadow: 3px 6px 6px 10px rgb(255, 255, 255) !important;
    width: 80%;
  }
  .card_row{
    display: flex;
    overflow: hidden;
  }
  .new{
    overflow: hidden;
  }
  @media (min-width: 220px) and (max-width: 640px) {
      .side_card{
        display: none;
      }
      .card_right{
        width: 80%;
      }
    }
     @media (min-width: 641px) and (max-width: 768px) {
      .side_card{
        display: none;
      }
      .card_right{
        width: 80%;
      }
     }
     @media (min-width: 769px) and (max-width: 1020px) {
       .side_card{
        display: none;
      }
      .card_right{
        width: 80%;
      }
     }
     @media (min-width: 1021px) and (max-width: 1200px) {
      .card_right{
        width: 80%;
      }
     }
</style>

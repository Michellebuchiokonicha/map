<template>
    <div>
                <v-row
          align-center
          justify="center"
          fill-height
          class="card_row"
        >
        <v-card class="side_card"></v-card>
          <v-col
            cols="12"
            sm="8"
            md="6"
            class="right_card"
          >
            <v-card class="elevation-0 justify-center card_right" >
               <v-card-title class="font-weight-black">
                Forgot Password
                </v-card-title>
                  <v-card-subtitle>
                    Enter your email
                    </v-card-subtitle>
                <v-spacer />
              <v-card-text>
                <v-form ref="forgotform" v-if="!show_change_password_form">
                  <v-text-field outlined
                    label="Email"
                    type="text"
                    ref="email"
                     v-model="forgot_form.email" name="email"
                     :rules="[rules.required,rules.email]"
                  />
                    <div style="margin-top:5px">
                        <action-button type="submit" height="48px" text="Send Me Link" :loading="loading" :disabled="loading"
                        :block="true"
                        color="primary"
                        :action="forgotPassword"></action-button>
                        <!-- <v-btn style="color:#fff !important;" height="48" type="submit" :loading="apiloading" :disabled="apiloading" block color="secondary" @click.prevent="forgotPassword()">Send Me Link</v-btn> -->
                    </div>
                </v-form>
                  <!-- <v-form ref="change_pass_form" v-if="show_change_password_form">
                      <v-text-field outlined disabled
                                    label="Email"
                                    type="text"
                                    ref="email"
                                    v-model="change_password_form.email" name="email"
                                    :rules="[rules.required,rules.email]"
                      />
                      <v-text-field outlined
                                    label="Code"
                                    type="text"
                                    ref="code"
                                    v-model="change_password_form.code" name="email"
                                    :rules="[rules.required]"
                      />
                      <v-text-field
                              outlined
                              ref="password"
                              label="Password"
                              v-model="change_password_form.password"
                              name="password"
                              :append-icon="show_pass ? 'mdi-eye-outline' : 'mdi-eye-off-outline'"
                              @click:append="() => (show_pass = !show_pass)"
                              :type="show_pass ? 'text' : 'password'"
                              :rules="[rules.required]"
                      />
                        <action-button type="submit" height="48px" text="Change password"
                        :block="true"
                        color="primary"
                        :action="changePassword"></action-button>
                  </v-form> -->
              </v-card-text>
              <v-card-actions class="justify-center">
                  <v-btn text color="secondary" style="text-transform: capitalize" @click="retry()"> <span style="font-size:15px">Retry</span></v-btn>
                  <v-spacer></v-spacer>
                  <nuxt-link to="/login" class="a-link" color="primary">Back to Login</nuxt-link>
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
    </div>
</template>
<script>
import form_mixin from '@/mixins/form_mixin'
import general_mixin from '@/mixins/general_mixin'
import ActionButton from '../components/ActionButton.vue'
export default {
  components: { ActionButton },
    auth:'guest',
     name:"forgot",
    mixins:[form_mixin,general_mixin],
    data(){
        return{
            show_pass:false,
            forgot_form:{
                email:'',
            },
            change_password_form:{
                email:'',
                code:'',
                password:''
            },
            show_change_password_form:false,

        }
    },

    methods: {
    forgotPassword(){
            if(!this.$refs.forgotform.validate()){
                return;
            }
            this.loading=true;
            this.change_password_form.email = this.forgot_form.email;
            this.$store.dispatch("app/forgotPasswordAction",this.forgot_form).then((res)=>{
                this.loading=false;
                console.log(res);
                this.show_change_password_form = false;
                this.$apptoast.success('An Email has been sent to' +this.forgot_form.email)
                 this.appLoading(false);
                 this.$router.replace('/login')
            }).catch((e)=>{
                 console.log(e.response.data.data)
                 this.loading=false;
                this.show_change_password_form = false;
                let err = e.response.data;
                 this.$apptoast.error(err.message)
            })

        },
        changePassword(){
            if(!this.$refs.change_pass_form.validate()){
                return;
            }
              this.appLoading(true);
            this.$store.dispatch('app/changePasswordByForgotAction',this.change_password_form).then((res)=>{
                     this.appLoading(false);
                this.show_change_password_form = false;
                this.forgot_form={}
                this.change_password_form={}
                   this.$apptoast.success('Password changed successfully')
                this.$router.replace('/login');
            }).catch((e)=>{
                 this.appLoading(false);
                this.show_change_password_form = true;
                 let err = e.response.data.data;
                 console.log(err);
                  this.$apptoast.error(err)
            })
        },
        retry(){
            this.show_change_password_form=false;
        }
    },
    // created(){
    //   this.$nuxt.emit("auth_page_title",{title: 'Forgot password',sub: 'Enter your emil to reset'});
    // }

}
</script>
<style scoped>
    .elevation-0 justify-center{
      padding-top: 100px;
    }

     .side_card{
    background-image: url("/image/thi-image.jpg");
    background-size: cover;
    background-color: #8f70a4;
    background-blend-mode: multiply;
    background-repeat: no-repeat;
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
    width: 60%;
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

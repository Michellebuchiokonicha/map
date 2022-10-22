<template>
  <div  class="new">
    <!-- <v-container color="initial"> -->
      <v-row align-center justify="center" fill-height class="card_row">
        <v-card class="side_card"></v-card>
        <v-col cols="12" sm="8" md="6" class="right_card">
          <v-card class="elevation-0 mt-5 card_right" flat>

            <v-card-title class=" font-weight-black  gran"><v-spacer/>Create your account  <span class="spa">
                 <!-- {{ formdata.course.course_name }} -->
                </span><v-spacer/>
            </v-card-title>
            <v-spacer />
            <v-card-text>
              <v-form ref="loginform">
                <v-text-field
                  outlined
                  label="First Name"
                  type="text"
                  ref="firstName"
                  v-model="login_form.firstname"
                  name="firstName"
                  :rules="[rules.required]"
                />
                <v-text-field
                  outlined
                  label="Last name"
                  type="text"
                  ref="lastName"
                  v-model="login_form.lastname"
                  name="lastName"
                  :rules="[rules.required]"
                />
                  <!-- <v-row>
                      <v-col cols="4" md="4" v-model="country_code">
                           <v-select

                         :items=" [
'+376','+971','+93','+1268','+1264','+355','+374','+599','+244','+672','+54','+1684','+43','+61','+297','+994','+387','+1246','+880','+32','+226','+359','+973','+257','+229','+590','1441','+673','591','+55', '+1242','+975','+267','+375', '+501','+1','+61',
'+243','+236','+242','+41','+225', '+682','+56','+237','+86','+57','+506','+53', '+238','+61','+357','+420','+49','+253', '+45','+1767','+1809','+213','+593','+372','+20', '+291','+34','+251','+358','+679','+500','+691',
'+298', '+33', '+241','+44','+1473','+995','+233', '+350','+299','+220', '+224','+240', '+30','+502', '+1671','+245', '+592','+852','+504', '+385','+509','+36','+62', '+353', '+972','+44','+91','+964','+98','+354','+39', '+1876','+962','+81','+254','+996','+855','+686','+269','+1869','+850','+82','+965','+1345','+7','+856','+961','+1758', '+423','+94','+231','+266','+370',
'+352','+371','+218','+212','+377','+373','+382', '+1599','+261','+692', '+389','+223','+95','+976','+853', '+1670','+222','+1664', '+356','+230' ,'+960','+265','+52','+60','+258','+264','+687','+227','+234','+505','+31','+47','+977','+674','+683','+64','+968','+507','+51','+689','+675', '+63', '+92', '+48','+508','+870', '+1','+351','+680', '+595','+974','+40','+381','+7','+966','+677', '+248','+249','+46','+65','+290', '+386','+421',
'+232','+378','+221','+252','+597', '+239', '+963','+503', '+1649','+268','+235', '+228','+66','+992', '+690','+670', '+993','+216','+676','+90','+1868','+688','+886','+255', '+380','+256', '+1','+598', '+998', '+39', '+1784','+58','+1284','+1340','+84','+678','+681','+685','+381','+967','+262', '+27', '+260','+263',
] "
                         label="+234"
                         outlined
                         :rules="[rules.required]"
                    ></v-select>
                      </v-col>

                      <v-col cols="8" md="8">
                           <v-text-field
                                outlined
                                label="Enter Phone Number"
                                type="number"
                                ref="phone"
                                
                                v-model="login_form.phoneno"
                                name="phone"
                                :rules="[rules.required, rules.phoneCounter]"
                                />
                      </v-col>
                  </v-row> -->

                <VuePhoneNumberInput :preferred-countries="['NG', 'US', 'DE']" no-validator-state default-country-code="NG"
                v-model="login_form.phone" class="phone-code" />
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
                  :rules="[rules.required, rules.passwordCounter, rules.passwordValid]"
                />
              </v-form>
              <!-- <div class="forgot-div">
                <router-link :to="{name:'forgot'}" class="a-link" color="link">Forgot Password ?</router-link>
              </div> -->
              <div style="margin-top:20px">
                 <action-button type="submit"  height="48px" text="Sign Up"
                  :block="true"
                  color="primary"
                  :action="register"></action-button>
                <!-- <v-btn style="color:#fff !important;" height="48"
                  type="submit"
                  block
                  color="secondary"
                  @click.prevent="register()"
                >Sign Up</v-btn> -->
              </div>

            </v-card-text>
             <v-card-actions class="justify-center">
                 <p>Already have an account?<router-link :to="{name:'login'}"><span  class="a-link"> Sign in</span></router-link></p>
              </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    <!-- </v-container> -->
  </div>
</template>
<script>
// import { loadingMixin } from "../../../mixins/Loading";
import axios from "axios";
// import { formMixin } from "../../mixins/form";
// import VuePhoneNumberInput from "vue-phone-number-input";
import VuePhoneNumberInput from 'vue-phone-number-input';
import 'vue-phone-number-input/dist/vue-phone-number-input.css';
import general_mixin from "@/mixins/general_mixin";

export default {
   auth:'guest',
    name:"register",
  mixins: [general_mixin],
  components: { VuePhoneNumberInput},
  // middleware:['is_loggedin'],
  data() {
    return {

      loading:false,
      show_pass: false,
      login_form: {
         firstname:"",
         lastname:"",
        email: "",
        password: "",
        course_id: "",
        course_name: "",
        phone:"",
      },


      theme:false,


     title: 'Country_Codes',
     countries: [],
     country: {},
     show_country: false
    };
  },
  computed: {
    formdata() {
      let t = this.$store.state.portal.profile;
      return t;
    },
    // this.login_form.course_id  = this.$store.state.portal.profile.courses.id;

    CourseNameForm: {
          get() {
            let r = this.$store.state.portal.profile.course_name
            this.login_form.course_name=r;
            return r
          },
          set(val) {
            this.login_form.course_name = val;
            let t = {key: 'login_form.course_name', value:val}
            this.$store.commit("portal/setProfileKey", t)
          }
        },
     courseS(){
        let t = this.$store.state.portal.profile.courses
        return t
      },
      courseId(){
        let t = this.$store.state.portal.profile.course_id
       let r =  this.login_form.course_id
          r =  t

        return r
      },
      courseName(){
        let t = this.$store.state.portal.profile.course_name
       let r =  this.login_form.course_name
          r =  t

        return r
      },

    showtheme(){
      if(this.theme){
        return $vuetify.theme.themes.light
      }
      return $vuetify.theme.themes.dark
    },

  },
  methods: {
    editedStep(step) {
        if(step === 1){
            this.goNextStep(step, '/profiling')
            this.updateEditedStep(true);
        }else if(step === 2){
            this.goNextStep(step,'/profiling/education');
          this.updateEditedStep(true)

        }else return;
    },

    onUpdate(payload) {
      this.results = payload;
    },
    // Payload:{ "countryCode": "NG", "isValid": false },


    toggle(){
      return this.theme != this.theme;
    },

    fetchCountCodes: function() {
      let url = 'https://restcountries.eu/rest/v2/all';
      axios.get(url).then(res=>{
        console.log(res.data)
      })
    },

    async register() {
      console.log(this.login_form)
      // if (this.validateForm(this.login_form)) {
      if (this.$refs.loginform.validate()) {
        // this.$router.replace("/verify")
          // this.$router.replace("/verify")

        //   const isEmpty = Object.keys(this.educs).length === 0;
        // if(isEmpty){
        //   this.$swal('Please add at least one education!');
        //   return false;
        // }
        // this.$store.commit('portal/GET_PROFILE',profile);
           try{
            // this.loading=true;
          //     this.appLoading(true);
          // let response = await this.$auth.loginWith('local', {data: this.login_form})
          let response = await this.$store.dispatch("app/register",this.login_form);
           let data = response
          this.loading=false
          if(data) {
            this.$router.push("/verify")
            this.$auth.strategy.token.set(response.token)
            this.$auth.setUser(response.user)
            // this.$router.replace("/verify")

            // this.$router.replace("/verify")
            this.$apptoast.success('Successfully authenticated');
            // this.$router.replace("/verify")

          }
          //    const r = await this.$store.dispatch("app/register",this.login_form);
          //    if(r){
          //      console.log(r)
          //       this.appLoading(false);
          //      this.$auth.strategy.token.set(r.token)
          //      this.$auth.setUser(r.user);
            else{
              this.loading=false
          //      this.appLoading(false);
            }
          }catch(err){
            this.loading=false
          //       this.appLoading(false);
                 console.log(err.response);
                 let e = err.response.data;
               this.$apptoast.error(e.message)
           }
      } else {
        return;
      }
    },
    fetchData(){
          this.$store.dispatch('portal/setGetProfileKey');
          this.$store.dispatch('portal/getCourses');
        }
  },
  mounted(){
    this.fetchCountCodes()
     this.login_form.course_id  = this.$store.state.portal.profile.course_id;
     this.login_form.course_name = this.$store.state.portal.profile.course_name;
  },
  created(){
    this.fetchData();
  }
};
</script>
<style scoped>
  .v-btn__content {
    color:#fff !important;
    text-transform: capitalize !important;
  }
  .a-link{
    color:#000000;
    text-decoration: none;
  }
  .side_card{
    background-image: url("/image/thi-image.jpg");
    background-size: cover;
    background-color: #8f70a4;
    background-blend-mode: multiply;
    background-repeat: no-repeat;
    height: 97vh;
    width: 50%;
    /* overflow: hidden; */
  }
  .right_card{
     background-color: #fff;
    height: 97vh;
    /* background-color: rgb(230, 230, 230); */
    width: 50%;
    align-items: center;
    justify-content: center;
    display: flex;
    flex-direction: row;
    /* overflow: hidden; */
  }
  .card_right{
    box-shadow: 3px 6px 6px 10px rgb(255, 255, 255) !important;
    width: 60%;
    /* height: 70%; */
  }
  .card_row{
    display: flex;
    /* overflow: hidden; */


  }
  .new{
    /* overflow: hidden; */
  }
  @media (min-width: 220px) and (max-width: 640px) {
      .side_card{
        display: none;
      }
      .card_right{
        width: 90%;
      }
      .phone-code{
    width: 100%;
    margin-top: 5px;
  }
    }
     @media (min-width: 641px) and (max-width: 768px) {
      .side_card{
        display: none;
      }
      .card_right{
        width: 90%;
      }
       .phone-code{
    width: 100%;
    margin-top: 5px;
  }
     }
     @media (min-width: 769px) and (max-width: 1020px) {
       .side_card{
        display: none;
      }
      .card_right{
        width: 90%;
      }
       .phone-code{
    width: 100%;
  }
     }
     @media (min-width: 1021px) and (max-width: 1200px) {
      .card_right{
        width: 90%;
      }
       .phone-code{
    width: 100%;
  }
     }
     #app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  background-color: #8f70a4;
  height: 10px;
  }
  .phone-code{
    margin-bottom: 30px;
  }
  .spa{
    color: #c71f40;
  }
  .gran{
    text-align: center ;
  }
   .font-weight-black{
    text-align: center;
    /* background: red; */
  } 

</style>




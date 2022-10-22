<template>
  <div>
      <v-card outlined class="pa-8 givme_mb">
       <v-form ref="referenceform" >
        <!-- <div class="letter deserve">{{this.$store.state.portal.profile.referee}}</div> -->
        <v-row> 
           <!-- {{this.referee_form}}  -->
               <div class="require deserve">You are required to submit one referee. An individual who knows you in a professional
                capacity. If you are an undergraduate or have less than two years of work experience,
                your letter should be from a current or previous  work collegue, or an Academic supervisor or Lecturer
                from a professional institution or work environment.
                You may NOT ask for a referee from family members or other personal relations.
                We only accept one letter. 
                The name and email address of  your referee is requested in your online application.
               </div>
               <v-col cols="12" md="4" class="name">
                <div class="deserve">Reference name</div>
                <v-text-field v-model="referee_form.referee_name"
                    outlined 
                    label="Enter Your Text"
                    :rules="[rules.required]"
                    class="essays"
                ></v-text-field>
              </v-col>
              <v-col cols="12" md="4" class="name">
                <div class="deserve">Email</div>
                <v-text-field v-model="referee_form.referee_email"
                    outlined
                    label="Enter Email"
                    :rules="[rules.required, rules.email]"
                    class="essays"
                ></v-text-field>
              </v-col> 
                       <!-- <v-col cols="12" md="4"  class="name">
                        <div class="deserve">Number</div> -->
                          <!-- <VuePhoneNumberInput 
                   v-model="referee_form.referee_phone" 
                   v-on:country-changed="countryChanged"  :preferred-countries="['NG']" no-validator-state default-country-code="NG" class="phone-code" />  -->
                      <!-- </v-col> -->
              <v-col cols="12" md="4" class="name">
                <div class="deserve">Organization</div>
                <v-text-field v-model="referee_form.referee_organization"
                    outlined
                   
                    label="Enter  Organization"
                    :rules="[rules.required]"
                    class="essays"
                ></v-text-field>
              </v-col> 
               <v-col cols="12" md="4" class="name">
                <div class="deserve">Profession</div>
                <v-text-field v-model="referee_form.referee_profession"
                    outlined
                   
                    label="Profession"
                    :rules="[rules.required]"
                    class="essays" 
                ></v-text-field>
              </v-col>
              <v-col cols="12" md="4" class="name" >
                <div class="deserve">How long has the referee known you?</div>
                <v-select
                 v-model="referee_form.relationship_year"
                    :items="['1 year','2 years','3 years', 'More than 3 years']"
                    label="select"
                    outlined
                    :rules="[rules.required]"
                    class="essays"
                    ></v-select>
            </v-col> 
            <v-col cols="12" md="4" class="name">
                <div class="detail deserve">Upload your reference letter (Letter should come with a letterhead)</div>
                  <div class="file"><v-file-input outlined
                  accept="application/pdf,"
                  type="file" 
                  id="myFile" 
                  @change="handleChange"
                  v-model="referee_letter"
                  name="filename"></v-file-input>
                 </div>
            </v-col>
            <!-- <div  v-for="(ref) in referee " :key="ref.id" class="refItem">
        <div>{{ref.referee_name}}</div>
        <div>Yes</div>
      </div> -->
        </v-row>
      </v-form>
      </v-card>
  </div>
</template>
<script>
import general_mixin from '@/mixins/general_mixin'
import form_mixin from '@/mixins/form_mixin'
import VuePhoneNumberInput from 'vue-phone-number-input';
import 'vue-phone-number-input/dist/vue-phone-number-input.css';
  export default {
    mixins:[general_mixin,form_mixin],
     components: { VuePhoneNumberInput},
     middleware:['review'],
      // middleware:[ 'auth'],

        layout:'form',
        name:"refereee",
      data(){
        return{
          referee_form:{
              id:"",
              referee_name:"",
              referee_email:"",
              relationship_year:"",
              referee_phone:"",
              referee_organization:"",
              referee_profession:"",
               course_id: "",
               email: '',
               firstname: '',
              //  referee_letter:'',
              // step: 1,
          },
          referee_letter:"",

        }
      },
      watch:{
        '$store.state.portal.profile.step':function(){
          console.log('step changes 1')
          // this.prefillForm()
        }
      },
      computed:{

        // referee:{
        //   get(){
        //       let t = this.$store.state.portal.profile.referee;
        //       return t;
        //     },
        //   set(){

        //   }
        // },
        // countryCode: {
        //   get() {
        //     let r = this.$store.state.portal.country_code;
        //     this.country_code=r;
        //     return r
        //   },
        //   set(val) {
        //     this.country_code = val;
        //     let r = {key: 'country_code', value:val}
        //     this.$store.commit("portal/setProfileKey", t)
        //   }
        // },
        //   refereeName: {
        //   get() {
        //     let r = this.$store.state.portal.profile.referee.referee_name;
        //     this.referee_form.referee_name=r;
        //     return r
        //   },
          // set(val) {
          //   this.referee_form.referee_name = val;
          //   let t = {key: 'referee_name', value:val}
          //   this.$store.commit("portal/ADD_REFEREE", t)   
          // } 
        // },
        //  refereeEmail: {
        //   get() {
        //     let profile = this.$store.state.portal.profile;
        //     if(profile.referee){
        //       let y = profile.referee.referee_email
        //       this.referee_form.referee_email=y;
        //       return y
        //     }else{
        //       this.referee_form.referee_email=""
        //     }
           
        //   },
        //   set(val) {
        //     this.referee_form.referee_email = val;
        //     let t = {key: 'referee_email', value:val}
        //     this.$store.commit("portal/ADD_REFEREE", t)
        //   }
        // },
        // relationshipYear: {
        //   get() {
        //     let profile = this.$store.state.portal.profile;
        //     if(profile.referee){
        //       let y = profile.referee.relationship_year;
        //       this.referee_form.relationship_year=y;
        //       return y
        //     }else{
        //       this.referee_form.relationship_year=""
        //     }
        //   },
        //   set(val) {
        //     this.referee_form.relationship_year = val;
        //     let t = {key: 'relationship_year', value:val}
        //     this.$store.commit("portal/ADD_REFEREE", t) 
        //   }
        // },
        // refereePhone: {
        //   get() {
        //     let r = this.$store.state.portal.profile.referee.referee_phone;
        //     this.referee_form.referee_phone=r;
        //     return r
        //   },
        //   set(val) {
        //     this.referee_form.referee_phone = val;
        //     let t = {key: 'referee_phone', value:val}
        //     this.$store.commit("portal/ADD_REFEREE", t)   
        //   }
        // },
        //  refereeOrganization: {
        //   get() {
        //     let r = this.$store.state.portal.profile.referee.referee_organization;
        //     this.referee_form.referee_organization=r;
        //     return r
        //   },
        //   set(val) {
        //     this.referee_form.referee_organization = val;
        //     let t = {key: 'referee_organization', value:val}
        //     this.$store.commit("portal/ADD_REFEREE", t)
        //   }
        // },
        //  refereeProfession: {
        //   get() {
        //     let r = this.$store.state.portal.profile.referee.referee_profession;
        //     this.referee_form.referee_profession=r;
        //     return r
        //   },
        //   set(val) {
        //     this.referee_form.referee_profession = val;
        //     let t = {key: 'referee_profession', value:val}
        //     this.$store.commit("portal/ADD_REFEREE", t)
        //   }
        // },
        //  refereeLetter: {
        //   get() {
        //     let r = this.$store.state.portal.referee_letter;
        //     this.referee_letter=r;
        //     return r
        //   },
        //   set(val) {
        //     this.referee_letter = val;
        //     let t = {key: 'referee_letter', value:val}
        //     this.$store.commit("portal/setProfileKey", t)
            
        //   }
        // },
      },
      methods:{
        async handleChange (e) {
      const file = e;
      if(!file) return;
      const readData = (f) =>
      new Promise((resolve) => {
        const reader = new FileReader();
        reader.onloadend = () => resolve(reader.result);
        reader.readAsDataURL(f);
      });
      const data = await readData(file);
      this.previewFiles = data;
    },
         countryChanged(country) {
      this.countryCode = country.dialCode
    },
        async submitForm(){
          if(!this.$refs.referenceform.validate()){
            return;
          }
           this.appLoading(true);
              // this.loading=true;
          // this.$store.commit("portal/ADD_REFEREE", this.referee_form);
           this.$store.commit("portal/SET_PROFILE_STEP", 5);
      
           const referee_list = {...this.referee_form}
            this.$store.dispatch("portal/setUploadAction", this.referee_letter)
          this.$store.dispatch("portal/getProfileAction")
          let submit_data = { title: "referee", value: this.referee_form };

           this.$store
        .dispatch("portal/setProfileAction", submit_data)
        .then((res) => {
          this.loading = false;
          this.goNextStep(8, "/profiling/essay");
          this.$router.push("/profiling/essay");
          this.updateEditedStep(false);
          this.referee_form= {
              id:"",
              referee_name:"",
              referee_email:"",
              relationship_year:"",
              referee_phone:"",
              referee_organization:"",
              referee_profession:"",
               course_id: "",
               email: '',
               firstname: '',
              // step: 1,
          }



      //      this.$store.dispatch("portal/getProfileAction")
      //      this.$store.dispatch("portal/getProfileAction")
      //      let res = await this.$store.dispatch("portal/setProfileAction", submit_data);
      //      if (res) {
      //       this.loading=false;
      //       this.goNextStep(6, '/profiling/essay');
      //        this.$router.push('/profiling/essay')
      //       this.updateEditedStep(false)
      //     } else {
      //   this.loading = false;
      // }
          
           }).catch(err=>{
             this.loading=false;
          })
        },
        prefillForm(){
          this.$store.dispatch("portal/setUploadAction")
      //     let r = this.$store.state.auth.user;
      // console.log(r.data);
      // // console.log(this.$store.dispatch("portal/setProfile", r.data))
      // // this.$store.commit('portal/setProfile',r.data);
      // // this.$store.dispatch("portal/setProfile", r.data);
      // // this.$store.commit("portal/SET_PROFILE_FROM_API", r.data);
      // this.$store.dispatch("portal/getProfileAction")
      // this.$store.commit("portal/SET_PROFILE_FROM_API", r.data);
        },
         fetchData(){
          this.$store.dispatch("portal/getProfileAction");
          this.$store.dispatch("portal/setUploadAction", this.referee_letter)
          // this.$store.dispatch("portal/getProfileAction", this.referee_form)
          // //  this.$store.dispatch('portal/setProfile');
          // //  this.$store.dispatch('portal/getCourses');
          // //  this.$store.dispatch('portal/setProfileKey');
         },
      },
      created(){
          this.prefillForm();
          this.fetchData();
         this.$store.commit("portal/GO_TO_STEP", 5);
      },
      mounted(){
        
          this.$nuxt.$on("submit_reference_form",(param)=>{
          if(param){
            if(this.$refs.referenceform){
                  this.submitForm();
            }
          }
        })
        //  this.referee_form = this.$store.state.portal.profile.referee;
    //  this.referee_form.referee_name = this.$store.state.portal.profile.referee.referee_name;
    //   this.referee_form.referee_email = this.$store.state.portal.profile.referee.referee_email;
    //  this.referee_form.relationship_year = this.$store.state.portal.profile.referee.relationship_year;
    //    this.referee_form.referee_organization = this.$store.state.portal.profile.referee.referee_organization;
    //    this.referee_form.referee_phone = this.$store.state.portal.profile.referee.referee_phone;
    //    this.referee_form.referee_profession = this.$store.state.portal.profile.referee.referee_profession;
    this.referee_form = this.$store.state.portal.profile.referee
      },
      unmounted() {
      // this.$refs.referenceform.reset();
      // state.profile.refere
      // then use whatever you have there to prefill the form
    },

  }
</script>

<style lang="scss" scoped>
.essays{
  width: 100%;
  padding-top: 10px;
}
.words{
  margin: 0 auto;
  padding-left: 800px;
  line-height: 0px;
  padding-top: 0px;
  color: gray;
}
.next{
    display: flex;
    justify-content: space-around;
    gap: 650px;

     .save{
        display: flex;
        gap: 10px;
        .exit{
        background-color: rgb(220, 210, 210);
        width: 100px;
        margin: auto;
        border: 1px solid transparent;
        width: 110px;
        height: 25px;
        border-radius: 2px;
        margin: auto;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
    }
    .back{
        background-color: rgb(220, 210, 210);
        border: 1px solid transparent;
        width: 70px;
        height: 25px;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 2px;
        margin: auto;
        cursor: pointer;
    }
    }

    .near{
    background-color: rgb(200, 200, 237);
    border: 1px solid transparent;
    width: 70px;
    height: 25px;
    border-radius: 2px;
    display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
    
} 
}
.letter{
    line-height: 100px;
    font-size: 24px;
    font-weight: 700;
}
.name{
    padding-top: 40px;
    width: 100%;
}
.deserve{
    font-weight: 500;
    padding-top: 10px;
  }
  .desrow{
    font-weight: 500;
    padding-top: 45px;
    display: flex;
  }
  .require{
    line-height: 30px;
  }
  .phone-code{
  margin-top: 20px;
}
@media (min-width: 220px) and (max-width: 640px) {
  .phone-code{
    width: 100%;
    margin-top: 5px;
  }
  .name{
    padding-top: 5px;
  }
}
@media (min-width: 641px) and (max-width: 768px) {
   .phone-code{
    width: 100%;
    margin-top: 5px;
  }
  .name{
    padding-top: 1px;
  }
}
@media (min-width: 769px) and (max-width: 1024px) {
   .phone-code{
    width: 100%;
  }
}
</style>

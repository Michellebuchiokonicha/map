<template>
  <div >

      <v-card outlined class="pa-8 givme_mb" >

        <div class="text-center">
            <v-btn
          color="primary"
          dark
          @click="addEducation"
        >
          Add Education
        </v-btn>
          <modal :name="modalName" :fullscreen="false" width="600" title="Education" overflow="scroll">
            <template v-slot:content >
              <div  >
                 <v-form  ref="educationform" v-model="form" >
                     <v-text-field
                    v-model="nameEduc"
                    label="Enter Name of School"
                    
                    outlined
                    clearable
                     :rules="[rules.required]"
                ></v-text-field>

                 <v-text-field 
                    v-model="studyEduc"
                    label="Enter Course Studied"
                    
                    outlined
                    clearable
                     :rules="[rules.required]"
                ></v-text-field>

                 <v-text-field
                    v-model="degreeEduc"
                    label="Level of Education Attained"
                    
                    outlined
                    clearable
                     :rules="[rules.required]"
                ></v-text-field>
               
                  <!-- <country-select/> -->
                   <!-- <region-select v-model="region" :country="country" :region="region" />
                   <country-select /> -->
              
                
                    <v-select v-model="countryEduc"
                     :items=" [
                      'Afghanistan','Aland Islands','Albania','Algeria','American Samoa','Andorra','Angola','Anguilla','Antarctica','Antigua and Barbuda','Argentina','Armenia','Aruba','Australia','Austria','Azerbaijan',
                      'Bahamas','Bahrain','Bangladesh','Barbados','Belarus','Belgium','Belize','Benin','Bermuda','Bhutan' ,'Bolivia','Bonaire, Saint Eustatius and Saba','Bosnia and Herzegovina','Botswana','Bouvet Island','Brazil','British Indian Ocean Territory','British Virgin Islands','Brunei','Bulgaria',
'Burkina Faso','Burundi','Cambodia','Cameroon','Canada','Cape Verde','Cayman Islands','Central African Republic','Chad','Chile','China','Christmas Island','Cocos Islands','Colombia','Comoros','Cook Islands','Costa Rica','Croatia',
'Cuba','Curacao','Cyprus','Czech Republic','Democratic Republic of the Congo','Denmark','Djibouti','Dominica','Dominican Republic','East Timor','Ecuador','Egypt','El Salvador','Equatorial Guinea','Eritrea','Estonia',
'Ethiopia','Falkland Islands','Faroe Islands','Fiji','Finland','France','French Guiana','French Polynesia','French Southern Territories','Gabon','Gambia','Georgia','Germany','Ghana','Gibraltar','Greece','Greenland','Grenada',
'Guadeloupe','Guam' ,'Guatemala' ,'Guernsey','Guinea','Guinea-Bissau','Guyana','Haiti','Heard Island and McDonald Islands','Honduras','Hong Kong','Hungary','Iceland','India','Indonesia','Iran','Iraq','Ireland','Isle of Man',
'Israel','Italy','Ivory Coast','Jamaica','Japan','Jersey','Jordan' ,'Kazakhstan','Kenya','Kiribati','Kosovo','Kuwait','Kyrgyzstan','Laos','Latvia','Lebanon','Lesotho' ,'Liberia','Libya','Liechtenstein','Lithuania','Luxembourg','Macao',
'Macedonia','Madagascar','Malawi','Malaysia','Maldives','Mali','Malta','Marshall Islands','Martinique','Mauritania','Mauritius','Mayotte','Mexico','Micronesia','Moldova','Monaco','Mongolia','Montenegro','Montserrat','Morocco',
'Mozambique','Myanmar','Namibia','Nauru' ,'Nepal','Netherlands','New Caledonia','New Zealand','Nicaragua','Niger','Nigeria','Niue','Norfolk Island','North Korea','Northern Mariana Islands','Norway' ,'Oman', 'Pakistan','Palau','Palestinian Territory','Panama','Papua New Guinea','Paraguay','Peru' ,'Philippines','Pitcairn' ,'Poland','Portugal','Puerto Rico',
'Qatar','Republic of the Congo','Reunion','Romania','Russia','Rwanda' ,'Saint Barthelemy','Saint Helena','Saint Kitts and Nevis','Saint Lucia','Saint Martin','Saint Pierre and Miquelon','Saint Vincent and the Grenadines','Samoa','San Marino',
'Sao Tome and Principe','Saudi Arabia','Senegal' ,'Serbia','Seychelles','Sierra Leone','Singapore','Sint Maarten' ,'Slovakia','Slovenia','Solomon Islands','Somalia','South Africa' ,'South Georgia and the South Sandwich Islands','South Korea' ,
'South Sudan','Spain' ,'Sri Lanka' ,'Sudan','Suriname','Svalbard and Jan Mayen','Swaziland' ,'Sweden' ,'Switzerland','Syria','Taiwan' ,'Tajikistan' ,'Tanzania' ,'Thailand' ,'Togo' ,'Tokelau' ,'Tonga' ,'Trinidad and Tobago','Tunisia' ,
'Turkey','Turkmenistan','Turks and Caicos Islands','Tuvalu' ,'U.S. Virgin Islands','Uganda','Ukraine','United Arab Emirates','United Kingdom','United States','United States Minor Outlying Islands','Uruguay' ,'Uzbekistan',
'Vanuatu' ,'Vatican','Venezuela','Vietnam','Wallis and Futuna','Western Sahara','Yemen' ,'Zambia','Zimbabwe' ,
                     ]"
                    label="Enter Country of School"
                    outlined
                    clearable 
                     :rules="[rules.required]"
                ></v-select>

                 <!-- <vue-country-code 
                class="countryCode" 
                   v-model="countryEduc"
                  >
          </vue-country-code> -->
                 <v-text-field v-model="stateEduc"
                     label="Enter State of School"
                    outlined
                    clearable
                     :rules="[rules.required]"
                ></v-text-field>

                <template>
  <!-- <div class="hello">
    <h1>hi</h1>
    <div>
      <country-select
        class="form-control"
        v-model="country"
        :country="country"
        topCountry="US"
      />
      <region-select v-model="region" :country="country" :region="region" />
    </div>
  </div> -->
</template>
                 <v-text-field v-model="fromEduc"
                    label=" Attended From DD/MM/YYYY"
                    outlined
                    clearable
                    for="start"
                    id="fromEduc"
                    type="date" name="begin" 
                   placeholder="dd-mm-yyyy" value=""
                  min="1977-01-01" max="2024-12-31"
                     :rules="[rules.required]"
                ></v-text-field>
                 <v-text-field v-model="tillEduc"
                    label=" Attended Till DD/MM/YYYY"
                    outlined
                    clearable
                    for="end"
                    id="tillEduc"
                    type="date" name="end" 
                    placeholder="dd-mm-yyyy" value=""
                   min="1997-01-01" max="2050-12-31"
                     :rules="[rules.required,fromDate]"
                ></v-text-field>

                 <v-btn
          class="addButton"
            color="#fff"
            type="button"
            text
            @click.prevent="addEdu()"
          >
            Add new
          </v-btn>
               </v-form>
              </div>
            </template>
          </modal>
   
  </div>
        
        <v-form  v-for="(educ, index) in $store.state.portal.profile.educs " :educ="educ" v-model="educ_total" :key="index" class="eduItem">
              <div class="wrapper-preview">
                  <div class="top-border-text">
                    {{index + 1}}
                    </div>
              
               <v-btn   @click.prevent="deleteEduc(index)"  class="top-btn" depressed dark > <v-icon size="25">mdi-delete</v-icon></v-btn>
               <v-btn  @click.prevent="editEduc(educ)" class="top-btn" depressed dark > <v-icon size="25">mdi-pencil</v-icon></v-btn>
              <div class="text-box" id="textBox">
                  <div class="text-content">
                      <div class="title">School Name</div>
                      <div class="text">{{educ.name}}</div>
                  </div>
                   <div class="text-content">
                      <div class="title">Course Studied</div>
                      <div class="text">{{educ.study}}</div>
                  </div>
                  <div class="text-content">
                      <div class="title">Level of Education Attained</div>
                      <div class="text">{{educ.degree}}</div>
                  </div>
                  <div class="text-content">
                      <div class="title">School State</div>
                      <div class="text">{{educ.state}}</div>
                  </div>
                  <div class="text-content">
                      <div class="title">Attended From</div>
                      <div class="text">{{educ.attendedFrom}}</div>
                  </div>
                  <div class="text-content">
                      <div class="title">Attended Till</div>
                      <div class="text">{{educ.attendedTill}}</div>
                  </div>
              </div>
          </div>
           <!-- <v-form ref="educationform" v-model="form" >
                     <v-text-field
                    v-model="educ.name"
                    label="Enter Name of School"
                    
                    outlined
                    clearable
                     :rules="[rules.required]"
                ></v-text-field> -->

                 <!-- <v-text-field 
                    v-model="studyEduc"
                    label="Enter Course Studied"
                    
                    outlined
                    clearable
                     :rules="[rules.required]"
                ></v-text-field>

                 <v-text-field
                    v-model="degreeEduc"
                    label="Level of Education Attained"
                    
                    outlined
                    clearable
                     :rules="[rules.required]"
                ></v-text-field> -->
               
                  <!-- <country-select/> -->
                   <!-- <region-select v-model="region" :country="country" :region="region" />
                   <country-select /> -->
              
                
                    <!-- <v-select v-model="educ.country"
                     :items=" [
                      'Afghanistan','Aland Islands','Albania','Algeria','American Samoa','Andorra','Angola','Anguilla','Antarctica','Antigua and Barbuda','Argentina','Armenia','Aruba','Australia','Austria','Azerbaijan',
                      'Bahamas','Bahrain','Bangladesh','Barbados','Belarus','Belgium','Belize','Benin','Bermuda','Bhutan' ,'Bolivia','Bonaire, Saint Eustatius and Saba','Bosnia and Herzegovina','Botswana','Bouvet Island','Brazil','British Indian Ocean Territory','British Virgin Islands','Brunei','Bulgaria',
'Burkina Faso','Burundi','Cambodia','Cameroon','Canada','Cape Verde','Cayman Islands','Central African Republic','Chad','Chile','China','Christmas Island','Cocos Islands','Colombia','Comoros','Cook Islands','Costa Rica','Croatia',
'Cuba','Curacao','Cyprus','Czech Republic','Democratic Republic of the Congo','Denmark','Djibouti','Dominica','Dominican Republic','East Timor','Ecuador','Egypt','El Salvador','Equatorial Guinea','Eritrea','Estonia',
'Ethiopia','Falkland Islands','Faroe Islands','Fiji','Finland','France','French Guiana','French Polynesia','French Southern Territories','Gabon','Gambia','Georgia','Germany','Ghana','Gibraltar','Greece','Greenland','Grenada',
'Guadeloupe','Guam' ,'Guatemala' ,'Guernsey','Guinea','Guinea-Bissau','Guyana','Haiti','Heard Island and McDonald Islands','Honduras','Hong Kong','Hungary','Iceland','India','Indonesia','Iran','Iraq','Ireland','Isle of Man',
'Israel','Italy','Ivory Coast','Jamaica','Japan','Jersey','Jordan' ,'Kazakhstan','Kenya','Kiribati','Kosovo','Kuwait','Kyrgyzstan','Laos','Latvia','Lebanon','Lesotho' ,'Liberia','Libya','Liechtenstein','Lithuania','Luxembourg','Macao',
'Macedonia','Madagascar','Malawi','Malaysia','Maldives','Mali','Malta','Marshall Islands','Martinique','Mauritania','Mauritius','Mayotte','Mexico','Micronesia','Moldova','Monaco','Mongolia','Montenegro','Montserrat','Morocco',
'Mozambique','Myanmar','Namibia','Nauru' ,'Nepal','Netherlands','New Caledonia','New Zealand','Nicaragua','Niger','Nigeria','Niue','Norfolk Island','North Korea','Northern Mariana Islands','Norway' ,'Oman', 'Pakistan','Palau','Palestinian Territory','Panama','Papua New Guinea','Paraguay','Peru' ,'Philippines','Pitcairn' ,'Poland','Portugal','Puerto Rico',
'Qatar','Republic of the Congo','Reunion','Romania','Russia','Rwanda' ,'Saint Barthelemy','Saint Helena','Saint Kitts and Nevis','Saint Lucia','Saint Martin','Saint Pierre and Miquelon','Saint Vincent and the Grenadines','Samoa','San Marino',
'Sao Tome and Principe','Saudi Arabia','Senegal' ,'Serbia','Seychelles','Sierra Leone','Singapore','Sint Maarten' ,'Slovakia','Slovenia','Solomon Islands','Somalia','South Africa' ,'South Georgia and the South Sandwich Islands','South Korea' ,
'South Sudan','Spain' ,'Sri Lanka' ,'Sudan','Suriname','Svalbard and Jan Mayen','Swaziland' ,'Sweden' ,'Switzerland','Syria','Taiwan' ,'Tajikistan' ,'Tanzania' ,'Thailand' ,'Togo' ,'Tokelau' ,'Tonga' ,'Trinidad and Tobago','Tunisia' ,
'Turkey','Turkmenistan','Turks and Caicos Islands','Tuvalu' ,'U.S. Virgin Islands','Uganda','Ukraine','United Arab Emirates','United Kingdom','United States','United States Minor Outlying Islands','Uruguay' ,'Uzbekistan',
'Vanuatu' ,'Vatican','Venezuela','Vietnam','Wallis and Futuna','Western Sahara','Yemen' ,'Zambia','Zimbabwe' ,
                     ]"
                    label="Enter Country of School"
                    outlined -->
                    <!-- clearable 
                     :rules="[rules.required]"
                ></v-select> -->

                 <!-- <vue-country-code 
                class="countryCode" 
                   v-model="countryEduc"
                  >
          </vue-country-code> -->
                 <!-- <v-text-field v-model="educ.state"
                     label="Enter State of School"
                    outlined
                    clearable
                     :rules="[rules.required]"
                ></v-text-field>

                <template> -->
  <!-- <div class="hello">
    <h1>hi</h1>
    <div>
      <country-select
        class="form-control"
        v-model="country"
        :country="country"
        topCountry="US"
      />
      <region-select v-model="region" :country="country" :region="region" />
    </div>
  </div> -->
<!-- </template>
                 <v-text-field v-model="educ.attendedFrom"
                    label=" Attended From DD/MM/YYYY"
                    outlined
                    clearable
                    for="start"
                    id="fromEduc"
                    type="date" name="begin" 
                   placeholder="dd-mm-yyyy" value=""
                  min="1977-01-01" max="2024-12-31"
                     :rules="[rules.required]"
                ></v-text-field> -->
                 <!-- <v-text-field v-model="educ.attendedTill"
                    label=" Attended Till DD/MM/YYYY"
                    outlined
                    clearable
                    for="end"
                    id="tillEduc"
                    type="date" name="end" 
                    placeholder="dd-mm-yyyy" value=""
                   min="1997-01-01" max="2050-12-31"
                     :rules="[rules.required,fromDate]"
                ></v-text-field> -->

                 <!-- <v-btn
          class="addButton"
            color="#fff"
            type="button"
            text
           
          >
            Add new
          </v-btn> -->
               <!-- </v-form> -->
          <!-- <v-row class="save">
          <div class="data">
            <div class="val">
              <div class="dat">Name
                <div class="valData">{{educ.name}}</div>
              </div>
              <div class="count">Country
                <div class="valData">{{educ.country}}</div>
              </div>
              <div class="state">State
                <div class="valData">{{educ.state}}</div>
              </div>
              <div class="from">Attended From
                <div class="valData">{{educ.attendedFrom}}</div>
              </div>
              <div class="till">Attended Till
                <div class="valData">{{educ.attendedTill}}</div>
              </div>
            </div>
           <div class="editEduc">
            <v-btn @click.prevent="deleteEduc(index)" class="del" color="primary">Delete Education<span class="mdi mdi-delete"></span></v-btn>
            <v-btn @click.prevent="editEduc(index)" class="change" color="primary">Edit Education<span class="mdi mdi-content-save-edit"></span></v-btn>
           
            </div>

          </div>
        </v-row> -->
        </v-form>
      </v-card>
  </div>
</template>

<script>
import general_mixin from '@/mixins/general_mixin'
import form_mixin from '@/mixins/form_mixin'
// import Modal from '../../components/Modal.vue'
import VueCountryCode from "vue-country-code-select";
import VueCountryRegionSelect from "vue-country-region-select";

  export default {
  components: { 
    // Modal, 
    VueCountryCode, VueCountryRegionSelect
  // vueCountryRegionSelect
   },
  // components: {vueCountryRegionSelect},
    fullscreen:{type:Boolean,default:false},
    mixins:[general_mixin,form_mixin],
        name:"education",
        name: 'force',
        layout:'form',
        props: ['educ'],
      data(){
        return{
          // country: '',
          // region: '',

          // title: 'List of countries',
          // countries: [],
          // country: {},
          // show_country: false,

          showModal:false,
          modalName:"education",
          modalForce: 'force',
          form: '',
          name_educ: '',
          country_educ: '',
          state_educ: '',
          from_educ: '',
          till_educ: '',
          // editing: false,
          editedEduc: null,
          educs: [],
          educ_total: [],
          dialog: false,
          form: false,
          formrules:{
             from_date:function(value){
            let till_date = this.tillEduc;
            if(value > till_date){
            return false;
               
            }   
            },
           tillDate(){
              var fromDate = document.getElementById('fromEduc');
        var tillDate = document.getElementById('tillEduc');

        if(fromDate > tillDate){
          alert('end date must be greater than start date')
          return false 
        }
           },
           textBox(){
            if(this.educs === 0){
              return false;
            }
           },
          }  
        }

      },
      computed:{
        educs(){
         let t =this.$store.state.portal.profile.educs;
         return t;
          
        },
        nameEduc: {
          get() {
            let r = this.$store.state.portal.profile.name_educ;
            this.name_educ=r;
            return r
          },
          set(val) {
            this.name_educ = val;
            let t = {key: 'name_educ', value:val}
            this.$store.commit("portal/setProfileKey", t) 
          }
        },
         studyEduc: {
          get() {
            let r = this.$store.state.portal.profile.study_educ;
            this.study_educ=r;
            return r
          },
          set(val) {
            this.study_educ = val;
            let t = {key: 'study_educ', value:val}
            this.$store.commit("portal/setProfileKey", t) 
          }
        },
         degreeEduc: {
          get() {
            let r = this.$store.state.portal.profile.degree_educ;
            this.degree_educ=r;
            return r
          },
          set(val) {
            this.degree_educ = val;
            let t = {key: 'degree_educ', value:val}
            this.$store.commit("portal/setProfileKey", t) 
          }
        },

        countryEduc: {
          get() {
            let r = this.$store.state.portal.profile.country_educ;
            this.country_educ=r;
            return r
          },
          set(val) {
            this.country_educ = val;
            let t = {key: 'country_educ', value:val}
            this.$store.commit("portal/setProfileKey", t)
            
          }
        },
        stateEduc: {
          get() {
            let r = this.$store.state.portal.profile.state_educ;
            this.state_educ=r;
            return r
          },
          set(val) {
            this.state_educ = val;
            let t = {key: 'state_educ', value:val}
            this.$store.commit("portal/setProfileKey", t)
            
          }
        },
        fromEduc: {
          get() {
            let r = this.$store.state.portal.profile.from_educ;
            this.from_educ=r;
            return r
          },
          set(val) {
            this.from_educ = val;
            let t = {key: 'from_educ', value:val}
            this.$store.commit("portal/setProfileKey", t)
            
          }
        },
        tillEduc: {
          get() {
            let r = this.$store.state.portal.profile.till_educ;
            this.till_educ=r;
            return r
          },
          set(val) {
            this.till_educ = val;
            let t = {key: 'till_educ', value:val}
            this.$store.commit("portal/setProfileKey", t)
            
          }
        },
        // educTotal: {
        //   get() {
        //     let r = this.$store.state.portal.profile.educ_total;
        //     this.educ_total=r;
        //     return r
        //   },
        //   set(val) {
        //     this.educ_total = val;
        //     let t = {key: 'educ_total', value:val}
        //     this.$store.commit("portal/setProfileKey", t)
        //   }
        // },
        datData(){
        let t =  this.$store.state.portal.profile;
        return t;
      },
         fromDate(){
            let from_date = this.fromEduc;
            let till_date = this.tillEduc;
            if(from_date > till_date){
              return  'end date must be greater than start date' + false
         } 
         },
           
      },

      
      methods:{
         onSelect({name, iso2, dialCode}) {
       console.log(name, iso2, dialCode);
     },


        addEducation(){
          this.$nuxt.$emit(this.modalName,true)
        },
        
        addEdu(){

          this.showModal=false;
           if(!this.$refs.educationform.validate()){
            return;
           }

          if(this.name_educ.length === 0) return;
          if(this.study_educ.length === 0) return;
          if(this.degree_educ.length === 0) return;
          if(this.country_educ.length === 0) return;
          if(this.state_educ.length === 0) return;
          if(this.from_educ.length === 0) return;
          if(this.till_educ.length === 0) return;
          this.$nuxt.$emit(this.modalName,false)
            
        // if(this.editedEduc === null){
        //   this.educs.push({
        //   name: this.name_educ,
        //   country: this.country_educ,
        //   state: this.state_educ,
        //   attendedFrom: this.from_educ,
        //   attendedTill: this.till_educ,
        //  });

        this.$store.commit('portal/ADD_EDUC', this.name_educ,this.degree_educ,this.study_educ,this.country_educ,
        this.state_educ, this.from_educ, this.till_educ);
         
        //  } else{
        //   this.educs[this.editedEduc].name =this.name_educ;
        //   this.educs[this.editedEduc].country =this.country_educ;
        //   this.educs[this.editedEduc].state =this.state_educ;
        //   this.educs[this.editedEduc].attendedFrom =this.from_educ;
        //   this.educs[this.editedEduc].attendedTill =this.till_educ;

        //    this.editedEduc = null;
        //    let p = {index:this.editedEduc,data:this.educs[this.editedEduc]}
        //     this.$store.commit('portal/EDIT_EDUC',p)
        //  }

         this.name_educ = '';
         this.study_educ = '';
         this.degree_educ = '';
         this.country_educ = '';
         this.state_educ = '';
         this.from_educ = '';
         this.till_educ = '';
         this.$nuxt.$emit(this.modalName,false)

        this.form = false


        // this.$store.commit('includedEducs', this.educTotal)
        },
        deleteEduc(index){
          this.$store.commit('portal/DELETE_EDUC', this.nameEduc);
          // this.educs.splice(index, 1);
          this.$nuxt.$emit(this.modalName,false)
        },
        alldelEduc(index){
          var textIn = this.educs[index] > 1
          if(!textIn){
            return 'nonono'
          }
        },
        editEduc(educ){
          
          
          // educ.editing = true
          
          // edit.editing = true
          this.$store.commit('portal/EDIT_EDUC', this.name_educ)
          // this.name_educ = this.educs[index].name;
          // this.country_educ = this.educs[index].country;
          // this.state_educ = this.educs[index].state;
          // this.from_educ = this.educs[index].attendedFrom;
          // this.till_educ = this.educs[index].attendedTill;

          //  this.$store.state.portal.profile.name_educ =  this.$store.state.portal.profile.educs.name

          // this.editedEduc = index;

          // this.showModal=true;

          // if(this.name_educ.length === 0) return;
          // if(this.country_educ.length === 0) return;
          // if(this.state_educ.length === 0) return;
          // if(this.from_educ.length === 0) return;
          // if(this.till_educ.length === 0) return;
           this.$nuxt.$emit(this.modalName,true)

        },
        // addedEdu(educ){
        //   educ.editing = false
        // },
            prefillForm(){
          let r = this.$store.state.auth.user;
          this.mapIncomingDataToForm(this.form, r);
        },
        submitForm(){

        const isEmpty = Object.keys(this.$store.state.portal.profile.educs).length === 0;
        if(isEmpty){
          this.$swal('Please add at least one education!');
      
          return false;
        }
          // let t = {key: 'educs', value:this.educs}
          // this.$store.commit("portal/setProfileKey", t)
         this.goNextStep(3,'/profiling/workExperience');
         this.updateEditedStep(false)
      },
     

           
    },
    created(){
        this.prefillForm();
       
         this.$store.commit("portal/GO_TO_STEP", 2);
    },
    mounted(){
      //  this.educs = this.$store.state.portal.profile.educs;
        this.$nuxt.$on('submit_education_form',(param)=>{
        if(param){
           this.submitForm();
          // if(this.$refs.educationform){
            
          // }

        }
      })
    },
     unmounted() {
      this.$refs.educationform.reset();
    },  
  }
</script>

<style lang="scss" scoped>
.details{
  font-size: 20px;
  font-weight: 600;
  line-height: 80px;
  color: rgb(225, 81, 81);
}
.detail{
  line-height: 50px;
}
.tab{
  width: 900px;
  margin: auto;
  border-collapse: collapse;
  border-radius: 55px;
 table:hover{
  border: 1px solid rgb(234, 144, 144);
 }
  table, th, td{
    border: 4px solid rgb(234, 144, 144);
    border-radius: 20px;
    
    color: gray;
    border-collapse: collapse;
    width: fit-content;
    font-family: sans-serif;
  }
   td:hover{
    border: 1px solid rgb(234, 144, 144);
  }
  table:hover{
    border: 1px solid rgb(234, 144, 144);
  }
  th:hover{
    border: 1px solid rgb(234, 144, 144);
  }
  th{
    height: 30px;
    font-weight: 300;
    font-size: 16px;
  }
  td{
    height: 100px;
    margin: auto;
    text-align: center;
    font-weight: 600;
    font-size: 17px;
    color: rgb(37, 35, 35);
  }
}
.deserve{
    line-height: 30px;
    padding-bottom: 20px;
    padding-top: 10px;
    font-weight: 500;
  }
  .data{
    align-content: center;
  justify-content: center;
  text-align: center;
  align-items: center;
  }
.save{
  border: 2px solid transparent;
  box-shadow: 2px 1px 5px 5px rgb(255, 220, 220);
  border-radius: 10px;
  width: 100%;
  height: 30rem;
  line-height: 20px;
  padding: 30px;
  padding-top: 50px;
  margin: auto;
  justify-content: center;
  display: flex;
  flex-wrap: wrap;
  
}

.eduItem{
  margin-bottom: 10px;
  margin-top: 50px;
}
  
.val{
  padding: 10px;
  color: black;
  flex-direction: row;
  display: flex;
  gap: 50px;
  align-content: center;
  justify-content: center;
  text-align: center;
  align-items: center;
  margin: 0 auto;

  

  .valData{
    font-size: 24px;
    font-weight: 700;
  }

  .till{
  flex: 1;
  width: 6.5rem;
}
.from{
  flex: 1;
  width: 6.5rem;
}
.state{
  flex: 1;
  width: 6.5rem;
  
}
.count{
  flex: 1;
  width: 6.5rem;
}
.dat{
  flex: 1;
  width: 6.5rem;

}
}


.buttonNew{
  background: #c71f40;
  padding: 20px;
  line-height: 20px;
  border-radius: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
    box-shadow: 2px 1px 5px 5px #e0e7fa;
  margin-bottom: 40px;
  margin-top: 20px;
  cursor: pointer;
};
.buttonNew:hover{
  box-shadow: 2px 1px 5px 5px #abbce4;
}
.editEduc{
  display: flex;
  padding-left: 20px;
  margin-top: 80px;
  gap: 20px;
  justify-content: center;
  align-items: center;
}
.addButton{
  background-color: #c71f40;
  // color: #fff;
}
.del{
  background-color: #c71f40;
  box-shadow: 2px 1px 5px 5px #e2e6f4;
  cursor: pointer;
}
.change{
  background: #c71f40;
  box-shadow: 2px 1px 5px 5px #e2e6f4;
  cursor: pointer;
}
.change:hover{
  box-shadow: 2px 1px 5px 5px #abbce4;
}
.del:hover{
  box-shadow: 2px 1px 5px 5px #abbce4;
}
.text-center{
  margin: auto;
  margin-bottom: 40px;
}
.modalForce{
  // background-color: red;
  font-weight: 100;
  font-size: 10px;
}
.forceBtn{
  // background-color: #c71f40;
  color: #c71f40;
  padding-top: 0px;
  align-items: center;
  display: flex;
  justify-content: center;
  text-align: center;
  margin: auto;
  display: flex;
  font-weight: 700;
  font-size: 24px;
  cursor: pointer;
}
.forceBtn:hover{
  color: #18174c;
}
.forceForm{
  // background-color: #e8e7fa;
  background-image: linear-gradient(180deg, #eeedf9, #f9edef);
  // height: 200px;
  // height: 200px;
}
.forceForm:hover{
  background-color: #232265;
    background-image: linear-gradient(180deg, #fbe6e9, #e8e7fa);

}
.forceDiv{
  background-color: #fbe6e9;
}
.forceTemplate{
  background-color: #fbe6e9; 
}
.text{
  width: 100%;
  height: 90%;
}
.countryCode{
  width: 506px;
  height: 55px;
  margin-bottom: 25px;
  border: 1px solid black;
  border-radius: 5px;
  box-shadow: none;
}

element.style {
    display: grid;
}
.swal2-container.swal2-center>.swal2-popup {
  background: #232265;
}
@media (min-width: 220px) and (max-width: 640px) {
  .countryCode{
    width: 100%;
  }
}
@media (min-width: 641px) and (max-width: 768px) {
   .countryCode{
    width: 100%;
  }
}
@media (min-width: 769px) and (max-width: 1024px) {
   .countryCode{
    width: 100%;
  }
}

</style>

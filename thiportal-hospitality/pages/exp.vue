<template>
  <div>
    <v-card outlined color="#0a1c44" striped class="pa-8 givme_mb">
       <div class="work">Work Experience</div>
    <div>
      <v-card v-model="work_card" outlined class="pa-8 givme_mb second_card" id="work-card">
       <v-form ref="experienceform" class="card-form">
        <v-row>

            <v-col cols="12" md="12" color="#fff">
             <v-text-field
                    v-model="work_company"
                    label="Name of Company"
                    color="#fff"
                    outlined
                    clearable
                     :rules="[rules.required]"
                ></v-text-field>
            </v-col>
            <v-col cols="12" md="12" >
             <v-text-field
                    v-model="work_title"
                    label="Job Title"
                    outlined
                    clearable
                     :rules="[rules.required]"
                ></v-text-field>
            </v-col>
            <v-col cols="12" md="12" >
             <v-textarea
                    v-model="work_description"
                    label="Job Description"
                    
                    outlined
                    clearable
                     :rules="[rules.required]"
                ></v-textarea>
            </v-col>
            <v-container fluid>
    <v-checkbox @click.prevent="currentWork()" v-model="checkbox">
      <template v-slot:label >
        I currently work here
      </template>
    </v-checkbox>
  </v-container>
            <v-col>
              <v-text-field v-model="work_start"
                    label=" Attended From MM/YYYY"
                    outlined
                    clearable
                    for="start"
                    id="work-start"
                    type="date" name="begin" 
                   placeholder="dd-mm-yyyy" value=""
                  min="1977-01-01" max="2024-12-31"
                     :rules="[rules.required]"
                ></v-text-field>
            </v-col>
            <v-col id="work-end">
              <v-text-field v-model="work_end"
                    label=" Attended Till MM/YYYY"
                    outlined
                    clearable
                    for="end"
                    type="date" name="end" 
                    placeholder="dd-mm-yyyy" value=""
                   min="1997-01-01" max="2050-12-31"
                    :rules="[rules.required, fromDate]"
                ></v-text-field>
            </v-col>
          
             <v-col>
              <v-btn
          
            type="button"
            class="savExp"
            color="#fff"
            text
             @click.prevent="saveExperience()"
          >
            Save
          </v-btn></v-col>
        </v-row>

      </v-form>
      </v-card>
    <v-btn
          class="addButton"
            type="button"
            text
             @click.prevent="addExperience()"
          >
            Add more experiences
          </v-btn>
    </div>
         <v-card  v-for="(expr, index) in exprs " :key="index" v-model="work_card" outlined class="pa-8 givme_mb third_card second_card" id="work-card">
           <v-form class="experience1" id="form-card">
              <div class="wrapper-preview">
                  <!-- <div class="top-border-text">
                    {{index + 1}}
                  </div> -->
              
                  <div class="textBoard" id="textBox">
                  <div class="text-content">
                      <div class="title">Name of Company</div>
                      <div class="text">{{expr.company}}</div>
                  </div>
                  <div class="text-content">
                      <div class="title">Job Title</div>
                      <div class="text">{{expr.title}}</div>
                  </div>
                  <div class="text-content">
                      <div class="title">Job Description</div>
                      <div class="text">{{expr.description}}</div>
                  </div>
                  <div class="text-content">
                      <div class="title">Start Date</div>
                      <div class="text">{{expr.start}}</div>
                  </div>
                  <div class="text-content">
                      <div class="title">End Date</div>
                      <div class="text">{{expr.end}}</div>
                  </div>
                  
              </div>
              <v-btn  @click.prevent="deleteExperience(index)"  class="top-btn" depressed dark > <v-icon size="25" color="#0a1c44">mdi-delete</v-icon></v-btn>
               <v-btn  @click.prevent="editExperience(index)" class="top-btn" depressed dark > <v-icon size="25" color="#0a1c44">mdi-pencil</v-icon></v-btn>

          </div>
        </v-form>
      </v-card>
   </v-card>
  </div>
</template>

<script>
import general_mixin from '@/mixins/general_mixin'
import form_mixin from '@/mixins/form_mixin'
  export default {
    mixins:[general_mixin,form_mixin],
        layout:'form',
        name:"experience",
      data(){
        return{
          work_card: false,
          work_company: null,
          work_title: '',
          work_description: '',
          work_start: '',
          work_end: '',
          exprs:[],
          editedExperience: null,
          factors: '',
          excel:'',
        }
      },
      computed:{
        fromDate(){
            let work_start = this.work_start;
            let work_end = this.work_end;
            if(work_start > work_end){
              return  'end date must be greater than start date' + false
         } 
         },
        // currentWork(){
        //  var x = document.getElementById("myDIV");
        //     if (x.style.display === "none") {
        //      x.style.display = "block";
        //      } else {
        //      x.style.display = "none";
        //     }
        //  },

        showEquityValue(){
            if(this.form.have_equity==1){
                return true;
            }
            return false

        },
        monthly_income:{
          get(){
            return this.formatCurrency(this.form.monthly_net_pay);
          },
          set(v){
            this.form.monthly_net_pay = this.clearCommas(v);
          }
        },
        total_pay:{
          get(){
            return this.formatCurrency(this.form.total_annual_pay);
          },
          set(v){
            this.form.total_annual_pay = this.clearCommas(v);
          }
        },
        down_payment:{
          get(){
            return this.formatCurrency(this.form.down_payment);
          },
          set(v){
            this.form.down_payment = this.clearCommas(v);
          }
        },
        expenses:{
          get(){
            return this.formatCurrency(this.form.monthly_expenses);
          },
          set(v){
            this.form.monthly_expenses = this.clearCommas(v);
          }
        }
      },
      methods:{
        saveExperience(){
           if(this.work_company.length === 0) return;
          if(this.work_title.length === 0) return;
          if(this.work_description.length === 0) return;
          if(this.work_start.length === 0) return;
          if(this.work_end.length === 0) return;


           if(this.editedExperience === null){
          this.exprs.push({
          company: this.work_company,
          title: this.work_title,
          description: this.work_description,
          start: this.work_start,
          end: this.work_end,
         });
         } else{
          this.exprs[this.editedExperience].company =this.work_company;
          this.exprs[this.editedExperience].title =this.work_title;
          this.exprs[this.editedExperience].description =this.work_description;
          this.exprs[this.editedExperience].start =this.work_start;
          this.exprs[this.editedExperience].end =this.work_end;

          this.editedExperience = null;
         }

         this.work_company = null;
         this.work_title = '';
         this.work_description = '';
         this.work_start = '';
         this.work_end = '';

         document.getElementById('work-card').style.display = 'none'

        },

        deleteExperience(index){
          this.exprs.splice(index, 1);
        },
        editExperience(index){
          document.getElementById('form-card').scrollIntoView({behavior:'smooth'})
          this.work_company = this.exprs[index].company;
          this.work_title = this.exprs[index].title;
          this.work_description = this.exprs[index].description;
          this.work_start = this.exprs[index].start;
          this.work_end = this.exprs[index].end;

          this.editedExperience = index;

          if(this.work_company.length === 0) return;
          if(this.work_title.length === 0) return;
          if(this.work_description.length === 0) return;
          if(this.work_start.length === 0) return;
          if(this.work_end.length === 0) return;


          document.getElementById('work-card').style.display = 'flex'
        },
        addExperience(){
          document.getElementById('work-card').style.display = 'flex'
          // this.work_card == true;
          this.work_company = '';
         this.work_title = '';
         this.work_description = '';
         this.work_start = '';
         this.work_end = '';
        },

        currentWork(){
         var end = document.getElementById("work-end");
            if (end.style.display === "none") {
             end.style.display = "block";
             } else {
             end.style.display = "none";
            }
            return end
        //  this.currs.splice(index, 1);
        // document.getElementById('work-end').splice(1)
        //  this.work_end = false
         },

        prefillForm(){
          let r = this.$store.state.auth.user;
          this.mapIncomingDataToForm(this.form, r);
        },
        submitForm(){
          if(!this.$refs.experienceform.validate()){
            return;
          }
          //  this.appLoading(true);
            this.goNextStep(4,'/profiling/awards');
          // this.$store.dispatch("profile/calculateessayAction",this.form).then((res)=>{
          //   this.goNextStep(4);
          //    this.appLoading(false);
          //   this.$router.push('/request');
          // this.$router.push('/profiling/awards')
          //     //  this.goNextFormStep('profiling/essay');
          // }).catch(err=>{
          //    this.appLoading(false);
          // });
        }
      },
      created(){
        this.prefillForm();
         this.$store.commit("portal/GO_TO_STEP", 3);

      },
      mounted(){
          this.$nuxt.$on("submit_experience_form",(param)=>{
          if(param){
            if(this.$refs.experienceform){
                  this.submitForm();
            }

          }
        })
      },
      unmounted() {
      this.$refs.experienceform.reset();
    },

  }
</script>

<style lang="scss" scoped>
.essays{
  width: 100%;
  padding-top: 40px;
}
.words{
  margin: 0 auto;
  padding-left: 800px;
  line-height: 0px;
  padding-top: 0px;
  color: gray;
}
.deserve{
    line-height: 30px;
    padding-bottom: 20px;
    padding-top: 10px;
    font-weight: 500;
  }
  .work{
    color: #fff;
    text-align: center;
    font-weight: 700;
    font-size: 26px;
    line-height: 100px;
  }
  .addButton{
     color: #fff;
    text-align: center;
    align-content: center;
    align-items: center;
    justify-content: center;
    margin: auto;
    margin-bottom: 50px;
    display: flex;
    text-transform: capitalize;
    border: 1px solid transparent;
    background-color: #c71f40;
    box-shadow: 2px 1px 5px 5px #1e2e53;
    font-weight: 400;
    margin-top: -80px;
    font-size: 16px;
  }
  .second_card{
    background-color: #b0c9ff;
    box-shadow:2px 1px 5px 5px #312828;
    // border: 4px solid #312828;
  }
  .card-row{
    background-color: #fff;
  }
  
.textBoard{
  display: flex;
  flex-direction: column;
  gap: 30px;
  border: 4px solid transparent;
  margin-right: 50px;
  flex-wrap: wrap;
}
.experience1{
  border: 1px solid transparent;
  border-radius: 5px;
 margin-top: 50px;
 box-shadow: 2px 1px 5px 5px #86a0d8;
}
.wrapper-preview{
  border: 1px solid transparent;
  padding-top: 50px;
}
.text{
  // border: 1px solid #9bb1e1;
   box-shadow: 2px 1px 5px 5px #a3bef8;
  width: 50em;
  color: #0a1c44;
  font-size: 20px;
  font-weight: 400;
  height: 90%;
  align-items: center;
  justify-content: center;
  margin: auto;
  line-height: 25px;
  padding: 10px;
   flex-wrap: wrap;
}
.title{
   flex-wrap: wrap;
   height: 90%;
}
.savExp{
  background-color: #c71f40;
  box-shadow: 2px 1px 5px 5px #9dbaf7;
  margin-top: 5%;
  margin-left: 50%;
}

</style>

























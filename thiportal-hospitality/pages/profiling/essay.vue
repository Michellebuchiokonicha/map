<template>
  <div>
    <v-card outlined class="pa-8 givme_mb">
      <v-form ref="essayform">
        <v-row>
          <!-- {{this.essay_form}} -->
          <v-col cols="12" md="12">
          
            <div class="proof deserve">
              Please provide your personal statement in not more than 300 words. 
              This is an opportunity to convey a well-rounded picture of
              yourself as an individual. Include important leadership
              achievfements in academics, extracurricular activities, and
              professional experience.
            </div>
            <v-textarea
              counter
              label="Text"
              outlined
              v-model="personalStatementR"
              :rules="[rules.required]"
             
            ></v-textarea>
          </v-col>
          <v-col cols="12" md="12">
            <div class="deserve">
              Discuss the factors that influenced your decision in choosing The
              Hospitality Institute(THI) inorder to further your personal and
              professional/entrepreneurial goals. Please be as specific as
              possible in describing how THI will help you to accomplish these
              goals.
            </div>
            <v-textarea
                counter
              
              v-model="decisionFactor"
              label="Text"
              outlined
              :rules="[rules.required, 
              // rules.wordString
              ]"

            ></v-textarea>
          </v-col>
          <v-col cols="12" md="12">
            <div class="deserve">
              THI's values are excellence, innovation and sustainability. Tell
              us how and when you have embodied one or more of these values to
              effect positive change.
            </div>

            <v-textarea
              counter
              v-model="thiExcel"
              label="Text"
              outlined
              :rules="[rules.required,
              //  rules.wordString
               ]"
            
            ></v-textarea>
          </v-col>
        </v-row>
      </v-form>
    </v-card>
  </div>
</template>

<script>
import general_mixin from "@/mixins/general_mixin";
import form_mixin from "@/mixins/form_mixin";
export default {
  mixins: [general_mixin, form_mixin],
    middleware:['review'],
  //  middleware:[ 'auth'],
  layout: "form",
  name: "essay",
  data() {
    return {
      essay_form: {
        scholarship_reason: "",
        firstname: "",
        lastname: "",
        email: "",
        decision_factor: "",
        thi_factor: "",
        personal_statement: "",
        firstname: "",
        lastname: "",
        step: "",
        course_id: "",
        // course_id: 1,
        // email: 'mimi@gmail.com',
        // firstname: 'mimi',
        // award_received: "",
        // step: 1,
      },
      // additional_factors: '',
      // additional_excel: '',
      // additional_biography: '',
      // step: '',
    };
  },
  watch: {
    "$store.state.portal.profile.step": function () {
      console.log("step changes 1");
      // this.prefillForm();
    },
  },
  computed: {
    awardReason: {
      get() {
        let r = this.$store.state.portal.profile.scholarship_reason;
        this.essay_form.scholarship_reason = r;
        return r;
      },
      set(val) {
        this.essay_form.scholarship_reason = val;
        let t = { key: "scholarship_reason", value: val };
        this.$store.commit("portal/setProfileKey", t);
      },
    },
    firstname: {
      get() {
        let r = this.$store.state.portal.profile.firstname;
        this.essay_form.firstname = r;
        return r;
      },
      set(val) {
        this.essay_form.firstname = val;
        let t = { key: "firstname", value: val };
        this.$store.commit("portal/setProfileKey", t);
      },
    },
    lastname: {
      get() {
        let r = this.$store.state.portal.profile.lastname;
        this.essay_form.lastname = r;
        return r;
      },
      set(val) {
        this.essay_form.lastname = val;
        let t = { key: "lastname", value: val };
        this.$store.commit("portal/setProfileKey", t);
      },
    },
    step: {
      get() {
        let r = this.$store.state.portal.profile.step;
        this.essay_form.step = r;
        return r;
      },
      set(val) {
        this.essay_form.step = val;
        let t = { key: "step", value: val };
        this.$store.commit("portal/setProfileKey", t);
      },
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
    // personalStatement: {
    //   get() {
    //     let r = this.$store.state.portal.profile.personal_statement;
    //     this.essay_form.personal_statement = r;
    //     return r;
    //   },
    //   set(val) {
    //     this.essay_form.personal_statement = val;
    //     let t = { key: "personal_statement", value: val };
    //     this.$store.commit("portal/setProfileKey", t);
    //   },
    // },
    personalStatementR: {
      get() {
        let r = this.$store.state.portal.profile.personal_statement;
        this.essay_form.personal_statement = r;
        return r;
      },
      set(val) {
        this.essay_form.personal_statement = val;
        let t = { key: "personal_statement", value: val };
        this.$store.commit("portal/setProfileKey", t);
      },
    },
    decisionFactor: {
      get() {
        let r = this.$store.state.portal.profile.decision_factor;
        this.essay_form.decision_factor = r;
        return r;
      },
      set(val) {
        this.essay_form.decision_factor = val;
        let t = { key: "decision_factor", value:  val };
        this.$store.commit("portal/setProfileKey", t);
      },
    },
    thiExcel: {
      get() {
        let r = this.$store.state.portal.profile.thi_factor;
        this.essay_form.thi_factor = r;
        return r;
      },
      set(val) {
        this.essay_form.thi_factor = val;
        let t = { key: "thi_factor", value: val };
        this.$store.commit("portal/setProfileKey", t);
      },
    },
    //       step: {
    //   get() {
    //     let r = this.$store.state.portal.profile.step;
    //     this.personal_form.step = r;
    //     return r
    //   },
    //   set(val) {
    //     this.personal_form.step = val;
    //     let t = {key: 'personal_form.step', value:val}
    //     this.$store.commit("portal/setProfileKey", t)
    //   }
    //  },
  },
  methods: {
    submitForm() {
      if (!this.$refs.essayform.validate()) {
        return;
      }
       let r = this.$store.state.auth.user;
       console.log(r)
      // this.loading = true;
      // let t = this.essay_form;
      // this.$store.commit("portal/ADD_ESSAY", t);
      // this.$store.dispatch("portal/getProfileAction")
      
      this.$store.commit("portal/SET_PROFILE_STEP", 6);
      console.log(this.essay_form)
       this.$store.dispatch("portal/getProfileAction", r.data)
      this.$store
        .dispatch("portal/setProfileAction", this.essay_form)
        .then((res) => {
          this.loading = false;
          console.log(r)
          this.goNextStep(7, "profiling/additionalInfo");
          this.$router.push("/profiling/additionalInfo");
          this.updateEditedStep(false);
        })
        .catch((err) => {
          this.loading = false;
        });
    },
    fetchData() {
      let r = this.$store.state.auth.user;
      this.$store.dispatch('portal/getCourses');
      this.$store.dispatch("portal/getProfileAction",r.data)
      //  this.$store.dispatch("portal/setUploadAction", this.essay_form)
      //  this.$store.dispatch("portal/getProfileAction",this.essay_form);
    },
    prefillForm() {

      let r = this.$store.state.auth.user;
      console.log(r)
      this.$store.dispatch("portal/getProfileAction")
        // this.$store.dispatch("portal/setUploadAction")
        this.$store.commit("portal/SET_PROFILE_FROM_API", r.data);
    },
  },
  created() {
    this.prefillForm();
    this.$store.commit("portal/GO_TO_STEP", 6);
     this.fetchData();
  },
  mounted() {
     this.essay_form.course_id  = this.$store.state.portal.profile.course_id;
     this.essay_form.course_name = this.$store.state.portal.profile.course_name;
     this.essay_form.lastname  = this.$store.state.portal.profile.lastname;
     this.essay_form.email  = this.$store.state.portal.profile.email;
     this.essay_form.firstname  = this.$store.state.portal.profile.firstname;
     this.essay_form.step  = this.$store.state.portal.profile.step;
    // this.course_id = this.$store.state.portal.course_id;
    // this.step = this.$store.state.portal.profile.step;
    this.$nuxt.$on("submit_essay_form", (param) => {
      if (param) {
        //  if (this.$refs.essayform) {
        this.submitForm();
        //  }
      }
    });
  },
  unmounted() {
    //  this.$refs.essayform.reset();
  },
};
</script>

<style lang="scss" scoped>
.essays {
  width: 100%;
  padding-top: 40px;
}
.words {
  margin: 0 auto;
  padding-left: 800px;
  line-height: 0px;
  padding-top: 0px;
  color: gray;
}
.deserve {
  line-height: 30px;
  padding-bottom: 20px;
  padding-top: 10px;
  font-weight: 500;
}
.next {
  display: flex;
  justify-content: space-around;
  gap: 650px;
}
.save {
  display: flex;
  gap: 10px;
}
.exit {
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
.back {
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

.near {
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
</style>

<template>
  <div>
    <v-card outlined class="pa-8 givme_mb">
      <v-form ref="additionalform">
        <v-row>


          <!-- {{this.additional_form}} -->
          <v-col cols="12" md="12">
            <label for="yes_no_radio" class="detail deserve"
              >Have you been diagnosed with any physical, learning or other
              disability?
            </label>
            <div class="yes_no">
              <p>
                Yes
                <input
                  type="radio"
                  name="yes_no"
                  label="Yes"
                  for="yes"
                  @click="toggleChoice"
                  value="1"
                  v-model="additional_form.has_health_issue"
                  checked
                />
              </p>
              <p id="none">
                No
                <input
                  type="radio"
                  value="0"
                  label="No"
                  for="no"
                  name="yes_no"
                  @click="toggleChoice"
                  v-model="additional_form.has_health_issue"
                />
              </p>
            </div> 
          </v-col>
          <v-col cols="12" md="12" id="no" v-if="healthIsActive">
            <div class="deserve">
              Please provide any additional information about the above
            </div>
            <v-text-field
              v-model="additional_form.additional_health"
              label="Additional Info"
              outlined

            ></v-text-field>
          </v-col>
          <v-col cols="12" md="6">
            <div class="deserve">Father's Name</div>
            <v-text-field
              label="Father's Name"
              outlined
              v-model="additional_form.additional_father"

              :rules="[rules.required]"
            ></v-text-field>
          </v-col>
          <v-col cols="12" md="6">
            <div class="deserve">Father's highest level of education</div>
            <v-text-field
              label="Highest level of education"
              outlined
              v-model="additional_form.additional_flevel"

              :rules="[rules.required]"
            ></v-text-field>
          </v-col>
          <v-col cols="12" md="6">
            <div class="deserve">Mother's Name</div>
            <v-text-field
              label="Mother's Name"
              outlined
              v-model="additional_form.additional_mother"

              :rules="[rules.required]"
            ></v-text-field>
          </v-col>
          <v-col cols="12" md="6">
            <div class="deserve">Mother's highest level of education</div>
            <v-text-field
              label="Highest level of education"
              outlined
              v-model="additional_form.additional_mlevel"

              :rules="[rules.required]"
            ></v-text-field>
          </v-col>
          <v-col cols="12" md="6">
            <div class="deserve">
              Are you the first person to attend a higher institution in your
              family?
            </div>
            <v-select
              :items="['Yes', 'No']"
              label="select"
              v-model="additional_form.additional_higher"
              outlined
              :rules="[rules.required]"
            ></v-select>
          </v-col>

          <v-col cols="12" md="6">
            <div class="deserve">
              How did you first learn about THI program?
            </div>
            <v-select class="deserve"
              :items="[
                'LinkedIn',
                'Twitter',
                'Referral',
                'A friend',
                'Word of mouth',
              ]"
              label="select"
              v-model="additional_form.additional_learn"
              outlined
              :rules="[rules.required]"
            ></v-select>
          </v-col>

          <v-col cols="12" md="12">
            <div class="deserve">
              Which other Hospitality institutions or course have you applied
              to/ undergone?
            </div>
            <v-text-field
              label="List the hospitality schools"
              outlined
              v-model="additional_form.additional_institution"

              :rules="[rules.required]"
            ></v-text-field>
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
  // middleware:['is_loggedin', 'auth'],
  layout: "form",
  name: "additional",
  data() {
    return {
      additional_form: {
        id: "",
        has_health_issue: null,
        additional_health: "",
        additional_biography: "",
        additional_learn: "",
        additional_institution: "",
        additional_higher: "",
        additional_father: "",
        additional_flevel: "",
        additional_mother: "",
        additional_mlevel: "",
        additional_factors: "",
        additional_excel: "",

        course_id: "",
        email: '',
        firstname: '',
        lastname: "",
        step: 7,
      },
      // additional_checkN: null,
      // additional_inf: '',
      // additional_biography: '',
      // additional_learn: '',
      // additional_institution: '',
      // additional_factors: '',
      // additional_excel: '',
    };
  },
  watch: {
    "$store.state.profile.step": function () {
      console.log("step chnages 2");
      // this.prefillForm();
    },
  },
  computed: {
    healthIsActive() {
      let r = this.additional_form.has_health_issue;
      if (r== 1) {
        return true;
      }
      return false;
    },
    // additionalFather: {
    //   get() {
    //     let r = this.$store.state.portal.profile.additional_info.additional_father;
    //     this.additional_form.additional_father = r;
    //     return r;
    //   },
    //   set(val) {
    //     this.additional_form.additional_father = val;
    //     let t = { key: "additional_father", value: val };
    //     this.$store.commit("portal/ADD_ADDITIONAL", t);
    //   },
    // },
    // additionalMother: {
    //   get() {
    //     let r = this.$store.state.portal.profile.additional_info.additional_mother;
    //     this.additional_form.additional_mother = r;
    //     return r;
    //   },
    //   set(val) {
    //     this.additional_form.additional_mother = val;
    //     let t = { key: "additional_mother", value: val };
    //     this.$store.commit("portal/ADD_ADDITIONAL", t);
    //   },
    // },
    // additionalHigher: {
    //   get() {
    //     let r = this.$store.state.portal.profile.additional_info.additional_higher;
    //     this.additional_form.additional_higher = r;
    //     return r;
    //   },
    //   set(val) {
    //     this.additional_form.additional_higher = val;
    //     let t = { key: "additional_higher", value: val };
    //     this.$store.commit("portal/ADD_ADDITIONAL", t);
    //   },
    // },
    // additionalHealth: {
    //   get() {
    //     let r = this.$store.state.portal.profile.additional_info.additional_health;
    //     this.additional_form.additional_health = r;
    //     return r;
    //   },
    //   set(val) {
    //     this.additional_form.additional_health = val;
    //     let t = { key: "additional_health", value: val };
    //     this.$store.commit("portal/ADD_ADDITIONAL", t);
    //   },
    // },
    // additionalFLevel: {
    //   get() {
    //     let r = this.$store.state.portal.profile.additional_info.additional_flevel;
    //     this.additional_form.additional_flevel = r;
    //     return r;
    //   },
    //   set(val) {
    //     this.additional_form.additional_flevel = val;
    //     let t = { key: "additional_flevel", value: val };
    //     this.$store.commit("portal/ADD_ADDITIONAL", t);
    //   },
    // },
    // additionalMLevel: {
    //   get() {
    //     let r = this.$store.state.portal.profile.additional_info.additional_mlevel;
    //     this.additional_form.additional_mlevel = r;
    //     return r;
    //   },
    //   set(val) {
    //     this.additional_form.additional_mlevel = val;
    //     let t = { key: "additional_mlevel", value: val };
    //     this.$store.commit("portal/ADD_ADDITIONAL", t);
    //   },
    // },
    // additionalLearn: {
    //   get() {
    //     let r = this.$store.state.portal.profile.additional_info.additional_learn;
    //     this.additional_form.additional_learn = r;
    //     return r;
    //   },
    //   set(val) {
    //     this.additional_form.additional_learn = val;
    //     let t = { key: "additional_learn", value: val };
    //     this.$store.commit("portal/ADD_ADDITIONAL", t);
    //   },
    // },
    // additionalInstitution: {
    //   get() {
    //     let r = this.$store.state.portal.profile.additional_info.additional_institution;
    //     this.additional_form.additional_institution = r;
    //     return r;
    //   },
    //   set(val) {
    //     this.additional_form.additional_institution = val;
    //     let t = { key: "additional_institution", value: val };
    //     this.$store.commit("portal/ADD_ADDITIONAL", t);
    //   },
    // },
    // hasHealthIssue: {
    //   get() {
    //     let r = this.$store.state.portal.profile.additional_info.has_health_issue;
    //     this.additional_form.has_health_issue = r;
    //     return r;
    //   },
    //   set(val) {
    //     this.additional_form.has_health_issue = val;
    //     let t = { key: "has_health_issue", value: val };
    //     this.$store.commit("portal/ADD_ADDITIONAL", t);
    //   },
    // },
  },
  methods: {
    toggleChoice(){
       if(this.additional_form.has_health_issue==1){
        this.additional_form.has_health_issue =0;
       }else{
        this.additional_form.has_health_issue=1;
       }
    },
   async submitForm() {
      console.log("yes girl, you go");
      if (!this.$refs.additionalform.validate()) {
        return;
      }
      this.appLoading(true);
      // this.loading = true;
      let t = this.additional_form;
      this.$store.commit("portal/SET_PROFILE_STEP", 7);
      // this.$store.dispatch("portal/getProfileAction")
          let submit_data = { title: "additional_info", value: this.additional_form };
      this.$store
        .dispatch("portal/setProfileAction", submit_data)
        .then((res) => {
          this.loading = false;
          this.goNextStep(8, "/profiling/profile");
          this.$router.push("/profiling/profile");
          this.updateEditedStep(false);

          additional_form= {
        id: "",
        has_health_issue: null,
        additional_health: "",
        additional_biography: "",
        additional_learn: "",
        additional_institution: "",
        additional_higher: "",
        additional_father: "",
        additional_flevel: "",
        additional_mother: "",
        additional_mlevel: "",
        additional_factors: "",
        additional_excel: "",
      }
        })
        .catch((err) => {
          this.loading = false;
        });
    },
    noDis() {
      let none = document.getElementById("none");
      document.getElementById("none").style.display = "none";
    },
    fetchData() {
      this.$store.dispatch("portal/getProfileAction")
      // this.$store.dispatch("portal/setUploadAction", this.additional_form)

      // this.$store.dispatch("portal/setProfileAction");
      // this.$store.dispatch("portal/getCourses");
    },
    prefillForm() {
      // let r = this.$store.state.auth.user;
      // let f = this.$store.state.profile.additional_info;
      //  this.additional_form=f;
      // console.log(r.data);
      // console.log(this.$store.dispatch("portal/setProfile", r.data))
      // this.$store.commit('portal/setProfile',r.data);
      // this.$store.dispatch("portal/setProfile", r.data);
      // this.$store.commit("portal/SET_PROFILE_FROM_API", r.data);
      // this.$store.dispatch("portal/getProfileAction")
      // this.$store.commit("portal/SET_PROFILE_FROM_API", r.data);
    },
  },
  created() {
    this.prefillForm();
    this.fetchData();
    this.$store.commit("portal/GO_TO_STEP", 7);
  },
  mounted() {
    //  this.additional_form = this.$store.state.portal.profile.additional_info
    // this.additional_form.has_health_issue  = this.$store.state.portal.profile.has_health_issue;
    //  this.additional_form.additional_health = this.$store.state.portal.profile.additional_health;
    //  this.additional_form.additional_father  = this.$store.state.portal.profile.additional_info.additional_father;
    //  this.additional_form.additional_mother  = this.$store.state.portal.profile.additional_mother;
    //  this.additional_form.additional_flevel  = this.$store.state.portal.profile.additional_mlevel;
    //  this.additional_form.additional_institution  = this.$store.state.portal.profile.additional_institution;
    //  this.additional_form.additional_higher  = this.$store.state.portal.profile.additional_higher;
    //  this.additional_form.additional_learn  = this.$store.state.portal.profile.additional_learn;

    this.$nuxt.$on("submit_additional_form", (param) => {
      if (param) {
          this.submitForm();
        // }
      }
    });
    this.additional_form = this.$store.state.portal.profile.additional_info

  },
  unmounted() {
    // this.$refs.additionalform.reset();
  },
};
</script>

<style lang="scss" scoped>
.details {
  font-size: 24px;
  font-weight: 700;
  line-height: 70px;
}
.detail {
  line-height: 50px;
}
.tab {
  width: 900px;
  margin: auto;
  border: 1px solid gray;
  table,
  th,
  td {
    border: 1px solid gray;
    width: 70px;
    color: gray;
    border-collapse: collapse;
  }
}
caption {
  font-size: 24px;
  font-weight: 700;
  line-height: 70px;
  width: max-content;
}
.yes_no {
  display: flex;
  flex-direction: column;
  padding-left: 40px;
  padding-top: 20px;
}
.deserve {
  line-height: 30px;
  padding-bottom: 30px;
  padding-top: 20px;
  font-weight: 500;
}
.proof {
  line-height: 30px;
  font-weight: 500;
  padding-top: 20px;
  padding-bottom: 30px;
}
.next {
  display: flex;
  justify-content: space-around;
  gap: 650px;
  .save {
    display: flex;
    gap: 10px;
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
}
.mint {
  margin-top: 31px;
}
</style>


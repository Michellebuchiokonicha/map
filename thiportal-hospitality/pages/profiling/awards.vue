<template>
  <div>
    <v-card outlined class="pa-8 givme_mb">
      <v-form ref="awardform" lazy-validation>
         <!-- {{this.award_form}}  -->
        <v-row class="award_row">
          <v-col cols="12" md="7">
            <div class="detail deserve">Which awards have you received?(Seperate each with a comma ,)</div>
            <v-text-field
              v-model="awardsReceived"
              label="Click enter to add more awards"
              outlined
              clearable
            ></v-text-field>
            <v-row> </v-row>
          </v-col>
          <v-col cols="12" md="7">
            
           


            <div class="detail deserve">
              Do you require scholarship support?
            </div>
            <v-select
              v-model="awardsScholarship"
              :items="yesNoOption"
              item-value="value"
              item-text="text"
              label="Select"
              outlined
              :rules="[rules.required]"
            ></v-select>
          </v-col>
          <v-col cols="12" md="7"  v-if="showScholarshipReason">
            <div class="deserve">
              Please tell us why you deserve your requested scholarship towards
              THI scholars program ? Include how you can plan to maximize the
              investment for yourself and THI.
            </div>
            <v-textarea
              counter
              label="Enter your Text"
              v-model="awardReason"
              outlined
              :rules="[rules.required]"
            ></v-textarea>
          </v-col>
          <v-col cols="12" md="7">
            <div class="detail deserve">
              Upload resume - If applicable (2 pages maximum)
            </div>
            <div class="file">
              <v-file-input
                accept="application/pdf"
                type="file"
                id="myFile"
                v-model="awardsResume"
                @change="handleChange"
                name="filename"
              ></v-file-input>
            </div>
            <!-- <div
              class="child-img"  v-bind:src="resume"
              :style="{ background: 'url(' + previewFiles + ')' }"
            ></div> -->
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
  layout: "form",
  data() {
    return {
      award_form: {
        id: "",
        award_received: "",
        want_scholarship: "",
        scholarship_reason: "",
        resume: "",
        course_id: "",
        yesNoOption: "",
        email: 'mimi@gmail.com',
        firstname: 'mimi',
        // step: 1,
      },

      // award_received: "",
      // want_scholarship: "",
      // scholarship_reason: "",
      // resume: "",
      // video: '',
      // option: '',
    };
  },
  watch: {
    "$store.state.profile.step": function () {
      console.log("step chnages 4");
      // this.prefillForm();
    },
  },
  computed: {
    formdata() {
      let t = this.$store.state.portal.profile;
      return t;
    },
    showScholarshipReason() {
      if (this.awardsScholarship == 1) {
        return true;
      }
      return false;
    },
    yesNoOption:{
      get() {
        let r = this.$store.state.portal.profile.yesNoOption;
        this.award_form.yesNoOption = r;
        return r;
      },
      set(val) {
        this.award_form.yesNoOption = val;
        let t = { key: "yesNoOption", value: val };
        this.$store.commit("portal/setProfileKey", t);
      },
    },
    awardsReceived: {
      get() {
        let r = this.$store.state.portal.profile.award_received;
        this.award_form.award_received = r;
        return r;
      },
      set(val) {
        this.award_form.award_received = val;
        let t = { key: "award_received", value: val };
        this.$store.commit("portal/setProfileKey", t);
      },
    },
    awardsScholarship: {
      get() {
        let r = this.$store.state.portal.profile.want_scholarship;
        this.award_form.want_scholarship = r;
        return r;
      },
      set(val) {
        this.award_form.want_scholarship = val;
        let t = { key: "want_scholarship", value: val };
        this.$store.commit("portal/setProfileKey", t);
      },
    },
    awardReason: {
      get() {
        let r = this.$store.state.portal.profile.scholarship_reason;
        this.award_form.scholarship_reason = r;
        return r;
      },
      set(val) {
        this.award_form.scholarship_reason = val;
        let t = { key: "scholarship_reason", value: val };
        this.$store.commit("portal/setProfileKey", t);
      },
    },
    awardsResume: {
      get() {
        let r = this.$store.state.portal.profile.resume;
        this.award_form.resume = r;
        return r;
      },
      set(val) {
        this.award_form.resume = val;
        let t = { key: "resume", value: val };
        this.$store.commit("portal/setProfileKey", t);
      },
    },
    awardsVideo: {
      get() {
        let r = this.$store.state.portal.profile.video;
        this.award_form.video = r;
        return r;
      },
      set(val) {
        this.award_form.video = val;
        let t = { key: "video", value:val };
        this.$store.commit("portal/setProfileKey", t);
      },
    },
  },
  methods: {
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
    submitForm() {
      console.log("cup");
      if (!this.$refs.awardform.validate()) {
        return;
      }
      // this.loading = true;
      this.$store.commit("portal/SET_PROFILE_STEP", 4);
      this.$store.dispatch("portal/getProfileAction")
      this.$store.dispatch("portal/setUploadAction", this.award_form)
      this.$store
        .dispatch("portal/setProfileAction", this.award_form)
        .then((res) => {
          this.loading = false;
          this.goNextStep(5, "/profiling/letterofReference");
          this.$router.push("/profiling/letterOfReference");
          this.updateEditedStep(false);
        })
        .catch((err) => {
          this.loading = false;
        });
    },
    prefillForm() {
      let r = this.$store.state.auth.user;
      this.$store.dispatch("portal/getProfileAction")
        this.$store.dispatch("portal/setUploadAction")
        this.$store.commit("portal/SET_PROFILE_FROM_API", r.data);
    },
    fetchData() {
       this.$store.dispatch("portal/getProfileAction");
       this.$store.dispatch("portal/setUploadAction", this.award_form)
      //  this.$store.dispatch("portal/getProfileAction",this.award_form);
    },
    awardReceived() {
      // if(!this.$refs.awardform.validate()){
      //     return;
      //    }
      //  this.$store.commit('portal/ADD_AWARD', this.awards_received)
      if (this.awards_received === 0) return;
      this.awards.push({ awardee: this.awards_received });

      this.awards_received = "";
    },
  },
  created() {
    this.prefillForm();
    this.$store.commit("portal/GO_TO_STEP", 4);
     this.fetchData();
  },
  mounted() {
    this.$nuxt.$on("submit_award_form", (param) => {
      if (param) {
        if (this.$refs.awardform) {
          this.submitForm();
        }
      }
    });
  },
  unmounted() {
    this.$refs.awardform.reset();
  },
};
</script>

<style lang="scss" scoped>
.details {
  font-size: 24px;
  font-weight: 700;
  line-height: 70px;
}
.awardee {
  background: rgb(225, 81, 81);
  border-radius: 40px;
  box-shadow: 2px 1px 5px 5px rgb(249, 243, 243);
  text-align: center;
  margin-top: 20px;
  margin-bottom: 20px;
  margin: auto;
  width: 200px;
  height: 40px;
  border: 1px solid transparent;
}
.awarder {
  margin-top: 5px;
  margin-bottom: 5px;
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
.file {
  border: 1px solid gray;
  width: 500px;
  height: 50px;
  border-radius: 5px;
}
#myFile {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 2%;
  margin-left: 2%;
}
.deserve {
  line-height: 30px;
  padding-bottom: 15px;
  font-weight: 500;
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

.award_row {
  justify-content: center;
  align-items: center;
}
.resum {
  justify-content: center;
  align-items: center;
  margin-left: 70px;
}
@media (min-width: 220px) and (max-width: 640px) {
  .resum {
    width: 100%;
    margin: auto;
  }
  #myFile {
    width: 100%;
  }
  .file {
    width: 100%;
    margin: auto;
  }
}
@media (min-width: 641px) and (max-width: 768px) {
  .resum {
    width: 100%;
    margin: auto;
  }
  #myFile {
    width: 100%;
  }
  .file {
    width: 100%;
    margin: auto;
  }
}
@media (min-width: 769px) and (max-width: 1024px) {
  .resum {
    width: 100%;
    margin: auto;
  }
  #myFile {
    width: 100%;
  }
  .file {
    width: 100%;
    margin: auto;
  }
}
</style>

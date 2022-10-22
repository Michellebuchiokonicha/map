<template>
  <div>
    <v-card
      outlined
      class="givme_mb"
      :class="$vuetify.breakpoint.mdAndUp ? 'pa-8' : 'pa-3'"
    >
     <!-- {{this.personal_form}} -->
      <v-form ref="profileform" lazy-validation>
        <v-row align-center justify="center" fill-height> 
          <v-col cols="12" md="4">
            <template>
              <v-text-field
                disabled
                label="First Name"
                class="redus"
                type="text"
                v-model="firstname"
                outlined
                :rules="[rules.required]"
              ></v-text-field>
            </template>
          </v-col>
          <v-col cols="12" md="4" class="redu">
            <template>
              <v-text-field
                label="Middle Name"
                type="text"
                v-model="middlename"
                outlined
              ></v-text-field>
            </template>
          </v-col>
          <v-col cols="12" md="4" class="redu">
            <v-text-field
              disabled
              v-model="lastname"
              label="Last Name"
              outlined
              clearable
              :rules="[rules.required]"
            ></v-text-field>
          </v-col>
          <v-col cols="12" md="4" class="redu miny">
            <v-select
              v-model="gender"
              :items="['Male', 'Female', 'Prefer not to say']"
              label="Gender"
              outlined
              :rules="[rules.required]"
            ></v-select>
          </v-col>
          <v-col cols="12" md="4" class="redu miny">
            <v-text-field
              outlined
              type="date"
              v-model="dob"
              label="Date of Birth"
              :rules="[rules.required]"
            ></v-text-field>
          </v-col>
          <v-col cols="12" md="4" class="codes redu">
            <div>Phone number</div>
            <VuePhoneNumberInput
            
              :preferred-countries="['NG']"
              no-validator-state
              default-country-code="NG"
              v-on:country-changed="countryChanged"
              v-model="phoneR"
              class="input-tel_input phone-code"
            />
          </v-col>
          <v-col cols="12" md="4" class="redu miny">
            <v-text-field
              disabled
              outlined
              label="Email"
              type="text"
              ref="email"
              v-model="email"
              name="email"
              :rules="[rules.required, rules.email]"
            />
          </v-col>
          <v-col cols="12" md="4" class="redu miny">
          
            <!-- <v-file-input 
              outlined
              
              accept="image/*"
              id="upload"
              v-model="passport"
              label="Passport Photo"
              :rules="[rules.required]"
              @change="handleChange"
            >
            </v-file-input> -->
            <div class="file">
              <v-file-input
                outlined
                accept="image/*"
                type="file"
                id="myFile"
                v-model="passport"
                name="filename"
                @change="handleChange"
              ></v-file-input>
            </div>
            
            <!-- <div class="file"><v-file-input
              outlined
                  accept="image/*"
                  type="file" @change="handleChange"
                  id="myFle" 
                  v-model="passport"
                  :rules="[rules.required]"
                  @change="handleChange"
                 
                  name="fileame"></v-file-input> -->

                  <!-- <v-file-input
                  accept="image/*"
               type="file"
                id="myFile"
                v-model="passport"
                name="filename"
              ></v-file-input> -->
                 <!-- </div> -->
          </v-col>
          <!-- <v-file-input 
              outlined
              
              accept="image/*"
              id="upload"
              v-model="r"
              label="Passport Photo"
              :rules="[rules.required]"
              @change="handleChange"
            >
            </v-file-input> -->
          <!-- <div class="file"><v-file-input
                  accept="image/*"
                  type="file" 
                  id="myFile" 
                  v-model="personal_form.passport"
                  name="filename"></v-file-input>
                 </div> -->

          <v-col cols="12" md="4">
          
            <v-img
              class="child-img"  v-bind:src="passport"
              :style="{ backgroundImage: 'url(' + previewFiles + ')' }"
            ></v-img>
            <!-- <img class="child-img" :src="passport" /> -->
            <!-- <v-img
              class="child-img"
              :style="{ 'backgroundImage': `url(${personal_form.passport})`}"
            ></v-img> -->
          </v-col>
        </v-row>
      </v-form>
    </v-card>
  </div>
</template>

<script>
import general_mixin from "@/mixins/general_mixin";
import form_mixin from "@/mixins/form_mixin";
import VuePhoneNumberInput from "vue-phone-number-input";
import "vue-phone-number-input/dist/vue-phone-number-input.css";
import VuePhoneCountryCode from "vue-phone-country-code";
import "vue-phone-country-code/dist/vue-phone-country-code.css";
import moment from "moment";
export default {
   middleware:['review'],
    // middleware:['auth'],
  mixins: [general_mixin, form_mixin],
  components: { VuePhoneNumberInput, VuePhoneCountryCode },
  layout: "form",
  name: "personal",
  data() {
    return {
      phone: null,
      country: null,
      areaCodes: null,
      dialCode: "31",
      iso2: "NL",
      image_form: "",
      personal_form: {
        firstname: "user",
        lastname: "",
        middlename: "",
        gender: "",
        referee_letter: "",
        dob: "",
        alt_phone: "",
        alternate_contact: "",
        phone: "",
        secondary_email: "",
        email: "email@test.com",
        image_form: "",
        course_id: "",
        step: 1,
        passport: "",
        course_id: 1,
        previewFiles: "",

      },
      course_id: 2,
      // passport: "",
      previewFiles: '',
    };
  },
  watch: {
    "$store.state.portal.profile.step": function () {
      console.log("step changes 1");
      // this.prefillForm();
    },
  },
  computed: {
    personalData() {
      let t = this.$store.state.portal.profile;
      return t;
    },
    previewImage() {
      if (!this.personal_form.passport_photo) return;
      return URL.createObjectURL(this.personal_form.passport_photo);
    },
    courseS() {
      let t = this.$store.state.portal.profile.courseS;
      console.log(t);
      return t;
    },
    refereeLetter: {
          get() {
            let r = this.$store.state.portal.profile.referee_letter;
            this.personal_form.referee_letter=r;
            return r
          },
          set(val) {
            this.personal_form.referee_letter = val;
            let t = {key: 'referee_letter', value:val}
            this.$store.commit("portal/setProfileKey", t)
            
          }
        },
    passport: {
      get() {
        let r = this.$store.state.portal.profile.passport;
        this.personal_form.passport = r;
        return r;
      },
      set(val) {
        this.personal_form.passport = val;
        let t = { key: "passport", value: val };
        this.$store.commit("portal/setProfileKey", t);
      },
    },
    step: {
      get() {
        let r = this.$store.state.portal.profile.step;
        this.personal_form.step = r;
        return r; 
      },
      set(val) {
        this.personal_form.step = val;
        let t = { key: "personal_form.step", value: val };
        this.$store.commit("portal/setProfileKey", t);
      },
    },
    countryCode: {
      get() {
        let r = this.$store.state.portal.profile.country_code;
        this.country_code = r;
        return r;
      },
      set(val) {
        this.country_code = val;
        let t = { key: "country_code", value: val };
        this.$store.commit("portal/setProfileKey", t);
      },
    },
    courseId() {
      let t = this.$store.state.portal.profile.course_id;
      console.log(t);
      return t;
    },
    firstname: {
      get() {
        let r = this.$store.state.portal.profile.firstname;
        this.personal_form.firstname = r;
        return r;
      },
      set(val) {
        this.personal_form.firstname = val;
        let t = { key: "firstname", value: val };
        this.$store.commit("portal/setProfileKey", t);
      },
    },
    lastname: {
      get() {
        let r = this.$store.state.portal.profile.lastname;
        this.personal_form.lastname = r;
        return r;
      },
      set(val) {
        this.personal_form.lastname = val;
        let t = { key: "lastname", value: val };
        this.$store.commit("portal/setProfileKey", t);
      },
    },
    middlename: {
      get() {
        let r = this.$store.state.portal.profile.middlename;
        this.personal_form.middlename = r;
        return r;
      },
      set(val) {
        this.personal_form.middlename = val;
        let t = { key: "middlename", value: val };
        this.$store.commit("portal/setProfileKey", t);
        // console.log(this.middlename);
      },
    },
    gender: {
      get() {
        let r = this.$store.state.portal.profile.gender;
        this.personal_form.gender = r;
        return r;
      },
      set(val) {
        this.personal_form.gender = val;
        let t = { key: "gender", value: val };
        this.$store.commit("portal/setProfileKey", t);
      },
    },
    dob: {
      get() {
        let r = this.$store.state.portal.profile.dob;
        this.personal_form.dob = r;
        return r;
      },
      set(val) {
        this.personal_form.dob = val;
        let t = { key: "dob", value: val };
        this.$store.commit("portal/setProfileKey", t);
      },
    },
    alternate_contact: {
      get() {
        let r = this.$store.state.portal.profile.alternate_contact;
        this.personal_form.alternate_contact = r;
        return r;
      },
      set(val) {
        this.personal_form.alternate_contact = val;
        let t = { key: "alternate_contact", value: val };
        this.$store.commit("portal/setProfileKey", t);
      },
    },
    phoneR: {
      get() {
        let r = this.$store.state.portal.profile.phone;
        this.personal_form.phone = r;
        return r;
      },
      set(val) {
        this.personal_form.phone = val;
        let t = { key: "phone", value: val };
        this.$store.commit("portal/setProfileKey", t);
      },
    },
    altphone: {
      get() {
        let r = this.$store.state.portal.profile.altphone;
        this.personal_form.altphone = r;
        return r;
      },
      set(val) {
        this.personal_form.altphone = val;
        let t = { key: "altphone", value: val };
        this.$store.commit("portal/setProfileKey", t);
      },
    },
    secondaryEmail: {
      get() {
        let r = this.$store.state.portal.profile.secondary_email;
        this.personal_form.secondary_email = r;
        return r;
      },
      set(val) {
        this.personal_form.secondary_email = val;
        let t = { key: "secondary_email", value: val };
        this.$store.commit("portal/setProfileKey", t);
      },
    },
    email: {
      get() {
        let r = this.$store.state.portal.profile.email;
        this.personal_form.email = r;
        return r;
      },
      set(val) {
        this.personal_form.email = val;
        let t = { key: "email", value: val };
        this.$store.commit("portal/setProfileKey", t);
      },
    },
    midN: {
      get() {
        let r = this.$store.state.portal.profile.course_id;
        this.personal_form.course_id = r;
        return r;
      },
      set(val) {
        this.personal_form.course_id = val;
        let t = { key: "course_id", value: val };
        this.$store.commit("portal/setProfileKey", t);
        console.log(this.course_id);
        return;
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
    
    inputChanged(e) {
      let t = e.target.files[0];
      this.previewImage = URL.createObjectURL(t);
    }, 
    removeImage(index) {
      this.previewImage = "";
    },
    countryChanged(country) {
      this.country = country.dialCode;
    },
    submit() {
      console.log(this.phone);
      console.log(this.country);
    },
    countryChanged(country) {
      this.country = country.dialCode;
    },
    submitProfileForm() {
      if (!this.$refs.profileform.validate()) {
        return;
      }
      this.updateEditedStep(false);
      console.log(this.personal_form);
      let r = this.$store.state.portal.profile;
      // this.loading = true;

      this.$store.commit("portal/SET_PROFILE_STEP", 1);
      this.$store.dispatch("portal/getProfileAction")
      this.$store.dispatch("portal/getFileAction")
      this.$store.dispatch("portal/setUploadAction",this.personal_form)
      
      this.$store
        .dispatch("portal/setProfileAction", this.personal_form)
        .then((res) => {
          this.loading = false;
           this.goNextStep(2, "/profiling/education");
          this.$router.push("/profiling/education");
          // this.updateEditedStep(false);
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
       this.$store.dispatch("portal/setUploadAction", this.personal_form)
      //  this.$store.dispatch("portal/getProfileAction",this.personal_form);
    },
    },
  created() {
    this.prefillForm();
    this.$store.commit("portal/GO_TO_STEP", 1);
    this.fetchData();
  },
  mounted() {
    //  this.personal_form.step = this.$store.state.portal.profile.step;
    this.$nuxt.$on("submit_personal_form", (param) => {
      if (param) {
        if (this.$refs.profileform) {
          this.submitProfileForm();
        }
      }
    });
  },
  unmounted() {
    this.$refs.profileform.reset();
  },
};
</script>

<style lang="scss" scoped>
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
.phone-code {
  margin-top: 10px;
}
.v-text-field_slot {
  background: #c71f40;
}
.child-img {
  background-size: cover;
  width: 150px;
  height: 150px;
  background-position: center;
  border: 4px solid #c4c1c1;
  border-radius: 5%;
  box-shadow: 2px 1px solid#c71f40;
}
.miny {
  margin-top: 20px;
}
</style>

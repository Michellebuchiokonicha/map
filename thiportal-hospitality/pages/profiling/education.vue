<template>
  <div>
    <v-card outlined class="pa-8 givme_mb">
      <div class="text-center">
        <v-btn color="primary" dark @click="addEducation">
          Add Education
        </v-btn>
        <modal
          :name="modalName"
          :fullscreen="false"
          width="600"
          title="Education"
          overflow="scroll"
        >
          <template v-slot:content>
            <div>
              <v-form ref="educationform">
                <v-text-field
                  v-model="education_form.school_name"
                  label="Enter Name of School"
                  outlined
                  clearable
                  :rules="[rules.required]"
                ></v-text-field>

                <v-text-field
                  v-model="education_form.course_of_study"
                  label="Enter Course Studied(if applicable)"
                  outlined
                  clearable
                ></v-text-field>

                <v-select
                  v-model="education_form.education_level"
                  :items="[
                    'Secondary School Certificate ','Bachelors','Master', 'Doctorate'
                  ]"
                  label="Level of Education Attained"
                  outlined
                  clearable
                  :rules="[rules.required]" 
                ></v-select>

                <v-select
                  v-model="education_form.school_country"
                  :items="[
                    'Afghanistan',
                    'Aland Islands',
                    'Albania',
                    'Algeria',
                    'American Samoa',
                    'Andorra',
                    'Angola',
                    'Anguilla',
                    'Antarctica',
                    'Antigua and Barbuda',
                    'Argentina',
                    'Armenia',
                    'Aruba',
                    'Australia',
                    'Austria',
                    'Azerbaijan',
                    'Bahamas',
                    'Bahrain',
                    'Bangladesh',
                    'Barbados',
                    'Belarus',
                    'Belgium',
                    'Belize',
                    'Benin',
                    'Bermuda',
                    'Bhutan',
                    'Bolivia',
                    'Bonaire, Saint Eustatius and Saba',
                    'Bosnia and Herzegovina',
                    'Botswana',
                    'Bouvet Island',
                    'Brazil',
                    'British Indian Ocean Territory',
                    'British Virgin Islands',
                    'Brunei',
                    'Bulgaria',
                    'Burkina Faso',
                    'Burundi',
                    'Cambodia',
                    'Cameroon',
                    'Canada',
                    'Cape Verde',
                    'Cayman Islands',
                    'Central African Republic',
                    'Chad',
                    'Chile',
                    'China',
                    'Christmas Island',
                    'Cocos Islands',
                    'Colombia',
                    'Comoros',
                    'Cook Islands',
                    'Costa Rica',
                    'Croatia',
                    'Cuba',
                    'Curacao',
                    'Cyprus',
                    'Czech Republic',
                    'Democratic Republic of the Congo',
                    'Denmark',
                    'Djibouti',
                    'Dominica',
                    'Dominican Republic',
                    'East Timor',
                    'Ecuador',
                    'Egypt',
                    'El Salvador',
                    'Equatorial Guinea',
                    'Eritrea',
                    'Estonia',
                    'Ethiopia',
                    'Falkland Islands',
                    'Faroe Islands',
                    'Fiji',
                    'Finland',
                    'France',
                    'French Guiana',
                    'French Polynesia',
                    'French Southern Territories',
                    'Gabon',
                    'Gambia',
                    'Georgia',
                    'Germany',
                    'Ghana',
                    'Gibraltar',
                    'Greece',
                    'Greenland',
                    'Grenada',
                    'Guadeloupe',
                    'Guam',
                    'Guatemala',
                    'Guernsey',
                    'Guinea',
                    'Guinea-Bissau',
                    'Guyana',
                    'Haiti',
                    'Heard Island and McDonald Islands',
                    'Honduras',
                    'Hong Kong',
                    'Hungary',
                    'Iceland',
                    'India',
                    'Indonesia',
                    'Iran',
                    'Iraq',
                    'Ireland',
                    'Isle of Man',
                    'Israel',
                    'Italy',
                    'Ivory Coast',
                    'Jamaica',
                    'Japan',
                    'Jersey',
                    'Jordan',
                    'Kazakhstan',
                    'Kenya',
                    'Kiribati',
                    'Kosovo',
                    'Kuwait',
                    'Kyrgyzstan',
                    'Laos',
                    'Latvia',
                    'Lebanon',
                    'Lesotho',
                    'Liberia',
                    'Libya',
                    'Liechtenstein',
                    'Lithuania',
                    'Luxembourg',
                    'Macao',
                    'Macedonia',
                    'Madagascar',
                    'Malawi',
                    'Malaysia',
                    'Maldives',
                    'Mali',
                    'Malta',
                    'Marshall Islands',
                    'Martinique',
                    'Mauritania',
                    'Mauritius',
                    'Mayotte',
                    'Mexico',
                    'Micronesia',
                    'Moldova',
                    'Monaco',
                    'Mongolia',
                    'Montenegro',
                    'Montserrat',
                    'Morocco',
                    'Mozambique',
                    'Myanmar',
                    'Namibia',
                    'Nauru',
                    'Nepal',
                    'Netherlands',
                    'New Caledonia',
                    'New Zealand',
                    'Nicaragua',
                    'Niger',
                    'Nigeria',
                    'Niue',
                    'Norfolk Island',
                    'North Korea',
                    'Northern Mariana Islands',
                    'Norway',
                    'Oman',
                    'Pakistan',
                    'Palau',
                    'Palestinian Territory',
                    'Panama',
                    'Papua New Guinea',
                    'Paraguay',
                    'Peru',
                    'Philippines',
                    'Pitcairn',
                    'Poland',
                    'Portugal',
                    'Puerto Rico',
                    'Qatar',
                    'Republic of the Congo',
                    'Reunion',
                    'Romania',
                    'Russia',
                    'Rwanda',
                    'Saint Barthelemy',
                    'Saint Helena',
                    'Saint Kitts and Nevis',
                    'Saint Lucia',
                    'Saint Martin',
                    'Saint Pierre and Miquelon',
                    'Saint Vincent and the Grenadines',
                    'Samoa',
                    'San Marino',
                    'Sao Tome and Principe',
                    'Saudi Arabia',
                    'Senegal',
                    'Serbia',
                    'Seychelles',
                    'Sierra Leone',
                    'Singapore',
                    'Sint Maarten',
                    'Slovakia',
                    'Slovenia',
                    'Solomon Islands',
                    'Somalia',
                    'South Africa',
                    'South Georgia and the South Sandwich Islands',
                    'South Korea',
                    'South Sudan',
                    'Spain',
                    'Sri Lanka',
                    'Sudan',
                    'Suriname',
                    'Svalbard and Jan Mayen',
                    'Swaziland',
                    'Sweden',
                    'Switzerland',
                    'Syria',
                    'Taiwan',
                    'Tajikistan',
                    'Tanzania',
                    'Thailand',
                    'Togo',
                    'Tokelau',
                    'Tonga',
                    'Trinidad and Tobago',
                    'Tunisia',
                    'Turkey',
                    'Turkmenistan',
                    'Turks and Caicos Islands',
                    'Tuvalu',
                    'U.S. Virgin Islands',
                    'Uganda',
                    'Ukraine',
                    'United Arab Emirates',
                    'United Kingdom',
                    'United States',
                    'United States Minor Outlying Islands',
                    'Uruguay',
                    'Uzbekistan',
                    'Vanuatu',
                    'Vatican',
                    'Venezuela',
                    'Vietnam',
                    'Wallis and Futuna',
                    'Western Sahara',
                    'Yemen',
                    'Zambia',
                    'Zimbabwe',
                  ]"
                  label="Enter Country of School"
                  outlined
                  clearable
                  :rules="[rules.required]"
                ></v-select>
                <v-text-field
                  v-model="education_form.school_city"
                  label="Enter State of School"
                  outlined
                  clearable
                  :rules="[rules.required]"
                ></v-text-field>

                <template> </template>
                <v-text-field
                  v-model="education_form.start_date"
                  label=" Attended From DD/MM/YYYY"
                  outlined
                  clearable
                  for="start"
                  id="fromEduc"
                  type="date"
                  name="begin"
                  placeholder="dd-mm-yyyy"
                  value=""
                  min="1977-01-01"
                  max="2024-12-31"
                  :rules="[rules.required]"
                ></v-text-field>
                <v-text-field
                  v-model="education_form.end_date"
                  label=" Attended Till DD/MM/YYYY"
                  outlined
                  clearable
                  for="end"
                  id="tillEduc"
                  type="date"
                  name="end"
                  placeholder="dd-mm-yyyy"
                  value=""
                  min="1997-01-01"
                  max="2050-12-31"
                  :rules="[rules.required, fromDate]"
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
      <div class="editEducation">
        <modal
        :name="editEducation"
        :fullscreen="false"
        :width="600"
        title="Education"
        overflow="scroll">
        <template v-slot:content>
          <div>
            <v-form>
              <v-text-field
              v-model.lazy = "editedForm.school_name"
              label="Enter Name of School"
              outlined
              clearable
              :rules="[rules.required]"
              ></v-text-field>
              <v-text-field
              v-model.lazy="editedForm.course_of_study"
              label="Enter Course studied(if applicable)"
              outlined
              clearable
              ></v-text-field>
              <v-select
              v-model.lazy="editedForm.education_level"
              :items="[
                    'Secondary School Certificate ','Bachelors','Master', 'Doctorate'
                  ]"
                  label="Level of Education Attained"
                  outlined
                  clearable
                  :rules="[rules.required]"
                ></v-select>
                <v-select
                v-model.lazy="editedForm.school_country"
                  :items="[
                    'Afghanistan',
                    'Aland Islands',
                    'Albania',
                    'Algeria',
                    'American Samoa',
                    'Andorra',
                    'Angola',
                    'Anguilla',
                    'Antarctica',
                    'Antigua and Barbuda',
                    'Argentina',
                    'Armenia',
                    'Aruba',
                    'Australia',
                    'Austria',
                    'Azerbaijan',
                    'Bahamas',
                    'Bahrain',
                    'Bangladesh',
                    'Barbados',
                    'Belarus',
                    'Belgium',
                    'Belize',
                    'Benin',
                    'Bermuda',
                    'Bhutan',
                    'Bolivia',
                    'Bonaire, Saint Eustatius and Saba',
                    'Bosnia and Herzegovina',
                    'Botswana',
                    'Bouvet Island',
                    'Brazil',
                    'British Indian Ocean Territory',
                    'British Virgin Islands',
                    'Brunei',
                    'Bulgaria',
                    'Burkina Faso',
                    'Burundi',
                    'Cambodia',
                    'Cameroon',
                    'Canada',
                    'Cape Verde',
                    'Cayman Islands',
                    'Central African Republic',
                    'Chad',
                    'Chile',
                    'China',
                    'Christmas Island',
                    'Cocos Islands',
                    'Colombia',
                    'Comoros',
                    'Cook Islands',
                    'Costa Rica',
                    'Croatia',
                    'Cuba',
                    'Curacao',
                    'Cyprus',
                    'Czech Republic',
                    'Democratic Republic of the Congo',
                    'Denmark',
                    'Djibouti',
                    'Dominica',
                    'Dominican Republic',
                    'East Timor',
                    'Ecuador',
                    'Egypt',
                    'El Salvador',
                    'Equatorial Guinea',
                    'Eritrea',
                    'Estonia',
                    'Ethiopia',
                    'Falkland Islands',
                    'Faroe Islands',
                    'Fiji',
                    'Finland',
                    'France',
                    'French Guiana',
                    'French Polynesia',
                    'French Southern Territories',
                    'Gabon',
                    'Gambia',
                    'Georgia',
                    'Germany',
                    'Ghana',
                    'Gibraltar',
                    'Greece',
                    'Greenland',
                    'Grenada',
                    'Guadeloupe',
                    'Guam',
                    'Guatemala',
                    'Guernsey',
                    'Guinea',
                    'Guinea-Bissau',
                    'Guyana',
                    'Haiti',
                    'Heard Island and McDonald Islands',
                    'Honduras',
                    'Hong Kong',
                    'Hungary',
                    'Iceland',
                    'India',
                    'Indonesia',
                    'Iran',
                    'Iraq',
                    'Ireland',
                    'Isle of Man',
                    'Israel',
                    'Italy',
                    'Ivory Coast',
                    'Jamaica',
                    'Japan',
                    'Jersey',
                    'Jordan',
                    'Kazakhstan',
                    'Kenya',
                    'Kiribati',
                    'Kosovo',
                    'Kuwait',
                    'Kyrgyzstan',
                    'Laos',
                    'Latvia',
                    'Lebanon',
                    'Lesotho',
                    'Liberia',
                    'Libya',
                    'Liechtenstein',
                    'Lithuania',
                    'Luxembourg',
                    'Macao',
                    'Macedonia',
                    'Madagascar',
                    'Malawi',
                    'Malaysia',
                    'Maldives',
                    'Mali',
                    'Malta',
                    'Marshall Islands',
                    'Martinique',
                    'Mauritania',
                    'Mauritius',
                    'Mayotte',
                    'Mexico',
                    'Micronesia',
                    'Moldova',
                    'Monaco',
                    'Mongolia',
                    'Montenegro',
                    'Montserrat',
                    'Morocco',
                    'Mozambique',
                    'Myanmar',
                    'Namibia',
                    'Nauru',
                    'Nepal',
                    'Netherlands',
                    'New Caledonia',
                    'New Zealand',
                    'Nicaragua',
                    'Niger',
                    'Nigeria',
                    'Niue',
                    'Norfolk Island',
                    'North Korea',
                    'Northern Mariana Islands',
                    'Norway',
                    'Oman',
                    'Pakistan',
                    'Palau',
                    'Palestinian Territory',
                    'Panama',
                    'Papua New Guinea',
                    'Paraguay',
                    'Peru',
                    'Philippines',
                    'Pitcairn',
                    'Poland',
                    'Portugal',
                    'Puerto Rico',
                    'Qatar',
                    'Republic of the Congo',
                    'Reunion',
                    'Romania',
                    'Russia',
                    'Rwanda',
                    'Saint Barthelemy',
                    'Saint Helena',
                    'Saint Kitts and Nevis',
                    'Saint Lucia',
                    'Saint Martin',
                    'Saint Pierre and Miquelon',
                    'Saint Vincent and the Grenadines',
                    'Samoa',
                    'San Marino',
                    'Sao Tome and Principe',
                    'Saudi Arabia',
                    'Senegal',
                    'Serbia',
                    'Seychelles',
                    'Sierra Leone',
                    'Singapore',
                    'Sint Maarten',
                    'Slovakia',
                    'Slovenia',
                    'Solomon Islands',
                    'Somalia',
                    'South Africa',
                    'South Georgia and the South Sandwich Islands',
                    'South Korea',
                    'South Sudan',
                    'Spain',
                    'Sri Lanka',
                    'Sudan',
                    'Suriname',
                    'Svalbard and Jan Mayen',
                    'Swaziland',
                    'Sweden',
                    'Switzerland',
                    'Syria',
                    'Taiwan',
                    'Tajikistan',
                    'Tanzania',
                    'Thailand',
                    'Togo',
                    'Tokelau',
                    'Tonga',
                    'Trinidad and Tobago',
                    'Tunisia',
                    'Turkey',
                    'Turkmenistan',
                    'Turks and Caicos Islands',
                    'Tuvalu',
                    'U.S. Virgin Islands',
                    'Uganda',
                    'Ukraine',
                    'United Arab Emirates',
                    'United Kingdom',
                    'United States',
                    'United States Minor Outlying Islands',
                    'Uruguay',
                    'Uzbekistan',
                    'Vanuatu',
                    'Vatican',
                    'Venezuela',
                    'Vietnam',
                    'Wallis and Futuna',
                    'Western Sahara',
                    'Yemen',
                    'Zambia',
                    'Zimbabwe',
                  ]"
                  label="Enter Country of School"
                  outlined
                  clearable
                  :rules="[rules.required]"
                ></v-select>
                <v-text-field
                v-model.lazy="editedForm.school_city"
                  label="Enter State of School"
                  outlined
                  clearable
                  :rules="[rules.required]"
                ></v-text-field>
                <v-text-field
                v-model.lazy="editedForm.start_date"
                  label=" Attended From DD/MM/YYYY"
                  outlined
                  clearable
                  for="start"
                  id="fromEduc"
                  type="date"
                  name="begin"
                  placeholder="dd-mm-yyyy"
                  value=""
                  min="1977-01-01"
                  max="2024-12-31"
                  :rules="[rules.required]"
                ></v-text-field>
                <v-text-field
                v-model.lazy="editedForm.end_date"
                  label=" Attended Till DD/MM/YYYY"
                  outlined
                  clearable
                  for="end"
                  id="tillEduc"
                  type="date"
                  name="end"
                  placeholder="dd-mm-yyyy"
                  value=""
                  min="1997-01-01"
                  max="2050-12-31"
                  :rules="[rules.required, fromDate]"
                ></v-text-field>
                <v-btn
                class="addButton"
                color="#fff"
                type="button"
                text
                @click.prevent="updateEducation()"
                >
                Update
              </v-btn>
            </v-form>
          </div>
        </template>
      </modal>
      </div>

      <div v-for="(educ, index) in education" :key="educ.id" class="eduItem">
        <div class="wrapper-preview">
          <div class="top-border-text">
            {{ index + 1 }}
          </div>

          <v-btn
            @click.prevent="deleteEduc(index)"
            class="top-btn"
            depressed
            dark
            ><v-icon size="25">mdi-delete</v-icon></v-btn
          >
          <v-btn @click.prevent="editEduc(educ)" class="top-btn" depressed dark
            ><v-icon size="25">mdi-pencil</v-icon></v-btn
          >
          <div class="text-box" id="textBox">
            <v-col>
              <div class="text-content">
                <div class="title">School Name</div>
                <div class="text">{{ educ.school_name }}</div> 
              </div>
              <div class="text-content">
                <div class="title">Name of Country</div>
                <div class="text">{{ educ.school_country }}</div> 
              </div>
            </v-col>
            <v-col>
              <div class="text-content">
                <div class="title">Course Studied</div>
                <div class="text">{{ educ.course_of_study }}</div>
              </div>
              <div class="text-content">
                <div class="title">Education Attained</div>
                <div class="text">{{ educ.education_level }}</div>
              </div>
            </v-col>
            <v-col>
              <div class="text-content">
                <div class="title">School State</div>
                <div class="text">{{ educ.school_city }}</div>
              </div>
              <div class="text-content">
                <div class="title">Attended From</div>
                <div class="text">{{ educ.start_date }}</div>
              </div>
            </v-col>
            <v-col>
              <div class="text-content">
                <div class="title">Attended Till</div>
                <div class="text">{{ educ.end_date }}</div>
              </div>
            </v-col>
          </div>
        </div>
      </div>
    </v-card>
  </div>
</template>

<script>
import general_mixin from "@/mixins/general_mixin";
import form_mixin from "@/mixins/form_mixin";
import Modal from "../../components/Modal.vue";
import VueCountryCode from "vue-country-code-select";
import VueCountryRegionSelect from "vue-country-region-select";
export default {
  components: { Modal, VueCountryCode, VueCountryRegionSelect },
  fullscreen: { type: Boolean, default: false },
  mixins: [general_mixin, form_mixin],
     middleware:['review'],
  // middleware:['is_loggedin', 'auth'],
  name: "education",
  name: "force",
  layout: "form",
  props: ["educ"],
  data() {
    return {
      education_form: {
        id: "",
        school_name: "",
        school_country: "",
        course_of_study: "",
        education_level: "",
        school_city: "",
        start_date: "",
        end_date: "",
      },
      editEducation: "editEducation",
      selected_education:{},
      show_edit: false,
      editedEduc: null,
      showModal: false,
      modalName: "education",
      modalForce: "force",
      form: "",
      editedIndex: -1,
      editedForm: {
        id: "",
        school_name: "",
        school_country: "",
        course_of_study: "",
        education_level: "",
        school_city: "",
        start_date: "",
        end_date: "",
      },
      editedEduc: null,
      formrules: {
        from_date: function (value) {
          let till_date = this.tillEduc;
          if (value > till_date) {
            return false;
          }
        },
        tillDate() {
          var fromDate = document.getElementById("fromEduc");
          var tillDate = document.getElementById("tillEduc");
          if (fromDate > tillDate) {
            alert("end date must be greater than start date");
            return false;
          }
        },
        textBox() {
          if (this.education === 0) {
            return false;
          }
        },
      },
    };
  },
  watch: {
    "$store.state.portal.profile.step": function () {
      console.log("step changes 1");
    },
  },
  computed: {
    education() {
      return this.$store.state.portal.education;
    },



    // editedEduc: {
    //   get() {
    //     let r = this.$store.state.portal.editedEduc;
    //     this.editedEduc = r;
    //     return r;
    //   },
    //   set(val) {
    //     this.editedEduc = val;
    //     let t = { key: "editedEduc", value: val };
    //     this.$store.commit("portal/setProfileKey", t);
    //   },
    // },
    // schoolName: {
    //   get() {
    //     let r = this.$store.state.portal.profile.school_name;
    //     this.education_form.school_name = r;
    //     return r;
    //   },
    //   set(val) {
    //     this.education_form.school_name = val;
    //     let t = { key: "school_name", value: val };
    //     this.$store.commit("portal/setProfileKey", t);
    //   },
    // },
    // schoolCountry: {
    //   get() {
    //     let r = this.$store.state.portal.profile.school_country;
    //     this.education_form.school_country = r;
    //     return r;
    //   },
    //   set(val) {
    //     this.education_form.school_country = val;
    //     let t = { key: "school_country", value: val };
    //     this.$store.commit("portal/setProfileKey", t);
    //   },
    // },
    // courseStudy: {
    //   get() {
    //     let r = this.$store.state.portal.profile.course_of_study;
    //     this.education_form.course_of_study = r;
    //     return r;
    //   },
    //   set(val) {
    //     this.education_form.course_of_study = val;
    //     let t = { key: "course_of_study", value: val };
    //     this.$store.commit("portal/setProfileKey", t);
    //   },
    // },
    // educationLevel: {
    //   get() {
    //     let r = this.$store.state.portal.profile.education_level;
    //     this.education_form.education_level = r;
    //     return r;
    //   },
    //   set(val) {
    //     this.education_form.education_level = val;
    //     let t = { key: "education_level", value: val };
    //     this.$store.commit("portal/setProfileKey", t);
    //   },
    // },
    // schoolCity: {
    //   get() {
    //     let r = this.$store.state.portal.profile.school_city;
    //     this.education_form.school_city = r;
    //     return r;
    //   },
    //   set(val) {
    //     this.education_form.school_city = val;
    //     let t = { key: "school_city", value: val };
    //     this.$store.commit("portal/setProfileKey", t);
    //   },
    // },
    // startDate: {
    //   get() {
    //     let r = this.$store.state.portal.profile.start_date;
    //     this.education_form.start_date = r;
    //     return r;
    //   },
    //   set(val) {
    //     this.education_form.start_date = val;
    //     let t = { key: "start_date", value: val };
    //     this.$store.commit("portal/setProfileKey", t);
    //   },
    // },
    // endDate: {
    //   get() {
    //     let r = this.$store.state.portal.profile.end_date;
    //     this.till_educ = r;
    //     return r;
    //   },
    //   set(val) {
    //     this.education_form.end_date= val;
    //     let t = { key: "end_date", value: val };
    //     this.$store.commit("portal/setProfileKey", t);
    //   },
    // },
    datData() {
      let t = this.$store.state.portal.profile;
      return t;
    },
    fromDate() {
      let from_date = this.startDate;
      let till_date = this.endDate;
      if (from_date > till_date) {
        return "end date must be greater than start date" + false;
      }
    },
  },
  methods: {
    onSelect({ name, iso2, dialCode }) {
      console.log(name, iso2, dialCode);
    },
    addEducation() {
      this.$nuxt.$emit(this.modalName, true);
    },
    addEdu() {
      this.showModal = false;
      // this.show_edit=false;
      if (!this.$refs.educationform.validate()) {
        return;
      }
      
      let t = this.education_form;
      if (!this.show_edit) {
        this.education_form.id = (Math.random() + 1).toString(36).substring(7);
        let t = this.education_form;
        // let r = this.$store.state.auth.user;
         this.$store.commit("portal/ADD_EDUCATION", t);
    //  this.$store.commit("portal/SET_PROFILE_FROM_API", r.data);
      }else { 
        let t = this.education_form;
        // let r = this.$store.state.portal.profile;
        // this.$store.commit("portal/SET_PROFILE_FROM_API");
      this.$store.commit("portal/EDIT_EDUCATION", t);
      
       this.show_edit = true;
      }
      this.$nuxt.$emit(this.modalName, false);
      this.education_form = {

        id: "",
        school_name: "",
        school_country: "",
        course_of_study: "",
        education_level: "",
        school_city: "",
        start_date: "",
        end_date: "",
      };
      this.show_edit=false
      this.$refs.educationform.reset();
      return;
    },
    deleteEduc(index) {
       this.$store.commit("portal/DELETE_EDUCATION", index);    
      // this.education.splice(index, 1);
      this.$nuxt.$emit(this.modalName, false);
    },
    alldelEduc(index) {
      var textIn = this.education[index] > 1;
      if (!textIn) {
        return "nonono";
      }
    },
    updateEducation(){
      this.$store.commit("portal/EDIT_EDUCATION", this.editedForm)
      this.$nuxt.$emit(this.editEducation, false)
    },
    editEduc(educ) {
    
      // let r = this.$store.state.auth.user;
      this.show_edit=true;
      
      // console.log(educ);
      this.editedIndex = this.education.indexOf(educ);
      this.editedForm = Object.assign({}, educ)
      console.log(educ);

      // this.education_form.school_name = educ.school_name;
      // this.education_form.school_country = educ.school_country;
      // this.education_form.school_city = educ.school_city;
      // this.education_form.course_of_study = educ.course_of_study;
      // this.education_form.start_date = educ.start_date;
      // this.education_form.end_date = educ.end_date;
      // this.education_form.education_level = educ.education_level;
    


      // this.education_form = selected_education;
      //  this.$store.commit("portal/EDIT_EDUCATION", educ);
      //  this.$store.dispatch("portal/editProfileAction")
    //  this.$store.commit("portal/SET_PROFILE_FROM_API", r.data);
      // this.$store.dispatch("portal/editProfileAction", educ);
      // this.education = educ.education;
    //   this.education.forEach(p =>{
    //   if(p.index == educ.index){
    //     p =educ
    //   }
    // })
      // this.schoolName = educ.school_name;
      //  this.schoolCountry = educ.school_country;
      //  this.courseStudy = educ.course_of_study;
      //  this.educationLevel = educ.education_level;
      //  this.schoolCity = educ.school_city;
      //  this.startDate = educ.start_date;
      //  this.endDate = educ.end_date;
      //  this.$store.commit("portal/SET_EDUCATION_FROM_API", r.data);
      
      //  this.editedEduc = educ;
       this.showModal = true;
      this.$nuxt.$emit(this.editEducation, true);
    },
    prefillForm() {
      let r = this.$store.state.auth.user;
      let t= this.$store.state.portal.profile.education
      console.log(r.data);
      this.$store.commit("portal/SET_PROFILE_FROM_API", r.data);
      this.$store.dispatch("portal/getProfileAction")
      // this.$store.commit("portal/SET_PROFILE_FROM_API", t.data);
      // this.$store.dispatch("portal/setProfile", r.data);
      // this.$store.dispatch("portal/getEducation");
    
    },
    fetchData() {
      this.$store.dispatch("portal/getProfileAction")
      
    },
    async submitForm() {
      const isEmpty =
        Object.keys(this.$store.state.portal.education).length === 0;
      if (isEmpty) {
        this.$swal("Please add at least one education!");
        return false;
      }
      // this.loading = true;
      let education = await this.$store.state.portal.education;
      this.$store.commit("portal/SET_PROFILE_STEP", 2);
      let submit_data = {title:'education',value:education}
      this.$store.dispatch("portal/getProfileAction")
      let res = await this.$store.dispatch("portal/setProfileAction", submit_data);
      if (res) {
        this.loading = false;
        this.goNextStep(3, "/profiling/workExperience");
        this.$router.push("/profiling/workExperience");
        this.updateEditedStep(false);
      } else {
        this.loading = false;
      }
    },
  },
  created() {
    this.$store.commit("portal/GO_TO_STEP", 2);
    this.prefillForm();
     this.fetchData();
  },
  mounted() {
    this.$nuxt.$on("submit_education_form", (param) => {
      if (param) {
        this.submitForm();
        
      }
    });
  },
  unmounted() {
    this.$refs.educationform.reset();
  },
};
</script>

<style lang="scss" scoped>
.details {
  font-size: 20px;
  font-weight: 600;
  line-height: 80px;
  color: rgb(225, 81, 81);
}
.detail {
  line-height: 50px;
}
.tab {
  width: 900px;
  margin: auto;
  border-collapse: collapse;
  border-radius: 55px;
  table:hover {
    border: 1px solid rgb(234, 144, 144);
  }
  table,
  th,
  td {
    border: 4px solid rgb(234, 144, 144);
    border-radius: 20px;
    color: gray;
    border-collapse: collapse;
    width: fit-content;
    font-family: sans-serif;
  }
  td:hover {
    border: 1px solid rgb(234, 144, 144);
  }
  table:hover {
    border: 1px solid rgb(234, 144, 144);
  }
  th:hover {
    border: 1px solid rgb(234, 144, 144);
  }
  th {
    height: 30px;
    font-weight: 300;
    font-size: 16px;
  }
  td {
    height: 100px;
    margin: auto;
    text-align: center;
    font-weight: 600;
    font-size: 17px;
    color: rgb(37, 35, 35);
  }
}
.deserve {
  line-height: 30px;
  padding-bottom: 20px;
  padding-top: 10px;
  font-weight: 500;
}
.data {
  align-content: center;
  justify-content: center;
  text-align: center;
  align-items: center;
}
.save {
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
.eduItem {
  margin-bottom: 10px;
  align-items: flex-start;
  align-content: flex-start;
  text-align: left;
  margin-top: 50px;
}
.val {
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
  .valData {
    font-size: 24px;
    font-weight: 700;
  }
  .till {
    flex: 1;
    width: 6.5rem;
  }
  .from {
    flex: 1;
    width: 6.5rem;
  }
  .state {
    flex: 1;
    width: 6.5rem;
  }
  .count {
    flex: 1;
    width: 6.5rem;
  }
  .dat {
    flex: 1;
    width: 6.5rem;
  }
}
.buttonNew {
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
}
.buttonNew:hover {
  box-shadow: 2px 1px 5px 5px #abbce4;
}
.editEduc {
  display: flex;
  padding-left: 20px;
  margin-top: 80px;
  gap: 20px;
  justify-content: center;
  align-items: center;
}
.addButton {
  background-color: #c71f40;
  // color: #fff;
}
.del {
  background-color: #c71f40;
  box-shadow: 2px 1px 5px 5px #e2e6f4;
  cursor: pointer;
}
.change {
  background: #c71f40;
  box-shadow: 2px 1px 5px 5px #e2e6f4;
  cursor: pointer;
}
.change:hover {
  box-shadow: 2px 1px 5px 5px #abbce4;
}
.del:hover {
  box-shadow: 2px 1px 5px 5px #abbce4;
}
.text-center {
  margin: auto;
  margin-bottom: 40px;
}
.modalForce {
  font-weight: 100;
  font-size: 10px;
}
.forceBtn {
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
.forceBtn:hover {
  color: #18174c;
}
.forceForm {
  background-image: linear-gradient(180deg, #eeedf9, #f9edef);
}
.forceForm:hover {
  background-color: #232265;
  background-image: linear-gradient(180deg, #fbe6e9, #e8e7fa);
}
.forceDiv {
  background-color: #fbe6e9;
}
.forceTemplate {
  background-color: #fbe6e9;
}
.text {
  width: 100%;
  height: 90%;
}
.countryCode {
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
.swal2-container.swal2-center > .swal2-popup {
  background: #232265;
}
@media (min-width: 220px) and (max-width: 640px) {
  .countryCode {
    width: 100%;
  }
}
@media (min-width: 641px) and (max-width: 768px) {
  .countryCode {
    width: 100%;
  }
}
@media (min-width: 769px) and (max-width: 1024px) {
  .countryCode {
    width: 100%;
  }
}
</style>


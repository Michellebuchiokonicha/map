<template>
  <div>
    <v-container id="appprint">
      <v-card elevation="0" class="negative" onload="codeAddress();">
        <mortgage-form-title left="" right="" class="no-print">
          <template v-slot:action>
            <v-btn text @click="printPreview" class="no-print">
              <v-icon size="30">mdi-printer</v-icon> &nbsp; Print</v-btn
            >
          </template>
        </mortgage-form-title>

        <v-card-text>
          <div class="wrapper-preview">
            <div class="top-border-text">Personal Profile</div>
            <v-btn @click="editedStep(1)" class="top-btn" depressed dark>
              <v-icon size="25">mdi-pencil</v-icon></v-btn
            >
            <div class="text-box">
              <!-- <div class="text-content"> -->
                <!-- <h6>Passport Photo</h6> -->
                <!-- <div
                  class="title child-img"
                  :style="{ backgroundImage: 'url(' + previewImage + ')' }"
                ></div> -->
                <!-- <div class="text">Passport</div> -->
              <!-- </div> -->
              <div class="text-content">
                <div class="title">{{ formdata.firstname }}</div>
                <div class="text">First Name</div>
              </div>
              <div class="text-content">
                <div class="title">{{ formdata.middlename }}</div>
                <div class="text">Middle Name</div>
              </div>
              <div class="text-content">
                <div class="title">{{ formdata.lastname }}</div>
                <div class="text">Last Name</div>
              </div>
              <div class="text-content">
                <div class="title">{{ formdata.gender }}</div>
                <div class="text">Gender</div>
              </div>
              <div class="text-content">
                <div class="title">{{ formdata.dob }}</div>
                <div class="text">Date of Birth</div>
              </div>

              <div class="text-content">
                <div class="title">{{ formdata.phone }}</div>
                <div class="text">Phone Number</div>
              </div>

              <!-- <div class="text-content">
                <div class="title">{{ formdata.altphone }}</div>
                <div class="text">Alternate Contact Number</div>
              </div> -->
              <div class="text-content">
                <div class="title">{{ formdata.email }}</div>
                <div class="text">Email</div>
              </div>
              <!-- <div class="text-content">
                <div class="title">{{ formdata.secondary_email }}</div>
                <div class="text">Secondary Email</div>
              </div> -->
            </div>
          </div>
          <div class="wrapper-preview">
            <div class="top-border-text">Education</div>
            <v-btn @click="editedStep(2)" class="top-btn" depressed dark>
              <v-icon size="25">mdi-pencil</v-icon></v-btn
            >
            <div
              class="text-box"
              v-for="(educ, index) in formdata.education"
              :key="index"
            >
            <div class="text-content">
                <div class="title">{{ educ.school_name }}</div>
                <div class="text">Name of School</div>
              </div>
              <div class="text-content">
                <div class="title">{{ educ.course_of_study }}</div>
                <div class="text">Course Studied</div>
              </div>
              <div class="text-content">
                <div class="title">{{ educ.education_level}}</div>
                <div class="text">Level of education</div>
              </div>

              <div class="text-content">
                <div class="title">{{ educ.school_country }}</div>
                <div class="text">Country of School</div>
              </div>
              <div class="text-content">
                <div class="title">{{ educ.school_city }}</div>
                <div class="text">State of School</div>
              </div>
              <div class="text-content">
                <div class="title">{{ educ.start_date }}</div>
                <div class="text">Attended From</div>
              </div>

              <div class="text-content">
                <div class="title">{{ educ.end_date }}</div>
                <div class="text">Attended Till</div>
              </div>
            </div>
          </div>
          <div class="wrapper-preview">
            <div class="top-border-text">Work Experience</div>
            <v-btn @click="editedStep(3)" class="top-btn" depressed dark>
              <v-icon size="25">mdi-pencil</v-icon></v-btn >
            <div
              class="text-box"
              v-for="(expr, index) in formdata.work_experience"
              :key="index"
            >
              <div class="text-content">
                <div class="title">{{ expr.work_company }}</div>
                <div class="text">Name of Company</div>
              </div>

              <div class="text-content">
                <div class="title">{{ expr.work_title }}</div>
                <div class="text">Job Title</div>
              </div>
              <div class="text-content">
                <div class="title">{{ expr.work_description }}</div>
                <div class="text">Job Description</div>
              </div>
              <div class="text-content">
                <div class="title">{{ expr.work_start }}</div>
                <div class="text">Year Started</div>
              </div>
              <div class="text-content" v-if="!expr.is_current_work">
                <div class="title">{{ expr.work_end }}</div>
                <div class="text">Year Ended</div>
              </div>
              <div class="text-content" v-if="expr.is_current_work">
                <div class="text">Current
              </div>
            </div>
          </div>
        </div>

          <div class="wrapper-preview mg-bottom">
            <div class="top-border-text">Awards and Honors</div>
            <v-btn @click="editedStep(4)" class="top-btn" depressed dark>
              <v-icon size="25">mdi-pencil</v-icon></v-btn
            >

            <div class="text-box">
              <div class="text-content">
                <div class="title">{{ formdata.award_received }}</div>
                <div class="text">Which awards have you received?</div>
              </div>
              <div class="text-content">
                <div class="title">{{ formdata.want_scholarship }}</div>
                <div class="text">Do you require scholarship support?</div>
              </div>
              
              <!-- <div class="text-content">
                                                <div class="title">{{formdata.awards_investment}}</div>
                                                <div class="text">Please tell us why you deserve your requested scholarship towards TLHI scholars program ?</div>
                                            </div> -->
              <!-- <div class="text-content">
                                                <v-file-input class="title">{{formdata.awards_resume}}</v-file-input>
                                                <div class="text">Upload resume(2 pages maximum)</div>
                                            </div>
                                            <div class="text-content">
                                                <v-file-input class="title">{{formdata.awards_video}}</v-file-input>
                                                <div class="text">Short Introduction Video</div>
                                            </div> -->
            </div>
          </div>

          <div class="wrapper-preview mg-bottom">
            <div class="top-border-text">Letter of Reference</div>
            <v-btn @click="editedStep(5)" class="top-btn" depressed dark>
              <v-icon size="25">mdi-pencil</v-icon></v-btn
            >

            <div class="text-box">
              <div class="text-content">
                <div class="title">Edit to view</div>
                <!-- <div class="title">{{ formdata.referee.referee_name }}</div> -->
                <div class="text">referee Name</div>
              </div>

              <div class="text-content">
                <div class="title">Edit to view</div>
                <!-- <div class="title">{{ formdata.referee.referee_email }}</div> -->
                <div class="text">Email</div>
              </div>
              <div class="text-content">
                <div class="title">Edit to view</div>
                <!-- <div class="title">{{ formdata.referee.referee_phone }}</div> -->
                <div class="text">Phone Number</div>
              </div>
              <div class="text-content">
                <div class="title">Edit to view</div>
                <!-- <div class="title">{{ formdata.referee.referee_organization }}</div> -->
                <div class="text">Organization</div>
              </div>
              <!-- <div class="text-content">
                <div class="title">{{ formdata.referee.referee_profession }}</div>
                <div class="text">Designation</div>
              </div>
              <div class="text-content">
                <div class="title">{{ formdata.referee.relationship_year }}</div>
                <div class="text">Relationship Duration</div>
              </div> -->

            </div>
          </div>
          <div class="wrapper-preview mg-bottom">
            <div class="top-border-text">Essay</div>
            <v-btn @click="editedStep(6)" class="top-btn" depressed dark>
              <v-icon size="25">mdi-pencil</v-icon></v-btn
            >
            <div class="text-box">
              <div class="text-content">
                <div class="title">{{formdata.personal_statement}}</div>
               <div class="text">Please provide your biography?</div>
              </div>
              <div class="text-content">
                <div class="title">{{formdata.thi_excel}}</div>
               <div class="text">THI Values</div>
              </div>
              <div class="text-content">
                <div class="title">{{formdata.decision_factor}}</div>
               <div class="text">Influential factors</div>
              </div>
              <div class="text-content">
                <!-- <div class="title">{{formdata.additional_factors}}</div>  -->
                <div class="title">Edit to view</div>
                <div class="text">Personal Statement</div>
              </div>
              <div class="text-content">
                <!-- <div class="title">{{formdata.additional_factors}}</div>  -->
                <div class="title">Edit to view</div>
                <div class="text">
                  Disscus the factors that influenced your decision
                </div>
              </div>
              <div class="text-content">
                <!-- <div class="title">{{formdata.additional_excel}}</div>  -->
                <div class="title">Edit to view</div>
                <div class="text">THI values</div>
              </div>

              <!-- <div class="text-content">
                                                  <div class="title">{{formdata.additional_factors}}</div>
                                                  <div class="text">Factors that influenced your decision in choosing The Hospitality School(THI)</div>
                                              </div> -->
              <!-- <div class="text-content">
                                                   <div class="title">{{formdata.additional_excel}}</div>
                                                  <div class="text">TLHI's values are excellence, innovation and sustainability</div>
                                              </div> -->
            </div>
          </div>

          <div class="wrapper-preview mg-bottom">
            <div class="top-border-text">Additional Information</div>
            <v-btn @click="editedStep(7)" class="top-btn" depressed dark>
              <v-icon size="25">mdi-pencil</v-icon></v-btn
            >
            <div class="text-box">
              <div class="text-content">
                <div class="title">Edit to view</div>
                <!-- <div class="title">{{ formdata.additional_info.has_health_issue }}</div> -->
                <div  class="text">
                  Have you been diagnosed with any physical, learning or other
                  disability?
                </div>
              </div>
              <div class="text-content">
                <div class="title">Edit to view</div>
                <!-- <div class="title">{{ formdata.additional_info.additional_health }}</div> -->
                <div class="text">
                  Please provide any additional information about the
                  above(optional)
                </div>
              </div>
              <!-- <div class="text-content">
                <div class="title">{{ formdata.additional_info.additional_father }}</div>
                <div class="text">
                  Father's name
                </div>
              </div> -->
              <!-- <div class="text-content">
                <div class="title">{{ formdata.additional_info.additional_flevel }}</div>
                <div class="text">Father's highest level of education</div>
              </div> -->
              <div class="text-content">
                <div class="title">Edit to view</div>
                <!-- <div class="title">{{ formdata.additional_info.additional_mother }}</div> -->
                <div class="text">Mother's name</div>
              </div>
              <div class="text-content">
                <div class="title">Edit to view</div>
                <div class="text">Mother's highest level of education</div>
              </div>
              
              <div class="text-content">
                <div class="title">Edit to view</div>
                <div class="text">How did you first learn about THI</div>
              </div>
              <div class="text-content">
                <div class="title">Edit to view</div>
                <div class="text">
                  Which other institutions have you applied to?
                </div>
              </div>
            </div>
          </div> 
          
        </v-card-text>
      </v-card>
    </v-container>
  </div>
</template>

<script>
import MortgageFormTitle from "./MortgageFormTitle.vue";
import general_mixin from "@/mixins/general_mixin";
import form_mixin from "@/mixins/form_mixin";

export default {
  mixins: [general_mixin, form_mixin],
  components: { MortgageFormTitle },
  data() {
    return {};
  },
  computed: {
    formdata() {
      let t = this.$store.state.portal.profile;
      return t;
    },

    previewImage() {
      if (!this.formdata.image_form) return;
      // return URL.createObjectURL(this.formdata.image_form);
    },
  },
  methods: {
    showWarning() {
      // Use sweetalert2
      //       this.$swal(
      //         {
      //   title: 'Are you sure?',
      //   text: "You won't be able to revert this!",Fv-fo
      //   icon: 'warning',
      //   showCancelButton: true,
      //   confirmButtonColor: '#0a1c44',
      //   cancelButtonColor: '#c71f40',
      //   confirmButtonText: 'Yes,  Submit!'
      // }).then((result) => {
      //   if (result.isConfirmed) {
      //     Swal.fire(
      //       'Submitted Successfully!',
      //       'Your file has been su.',
      //       'success'
      //     )
      //   }
      // }
      //       );
    },

    editedStep(step) {
      if (step === 1) {
        this.goNextStep(step, "/profiling");
        this.updateEditedStep(true);
      } else if (step === 2) {
        this.goNextStep(step, "/profiling/education");
        this.updateEditedStep(true);
      } else if (step === 3) {
        this.goNextStep(step, "/profiling/workExperience");
        this.updateEditedStep(true);
      } else if (step === 4) {
        this.goNextStep(step, "/profiling/awards");
        this.updateEditedStep(true);
      } else if (step === 5) {
        this.goNextStep(step, "/profiling/letterofreference");
        this.updateEditedStep(true);
      } else if (step === 6) {
        this.goNextStep(step, "/profiling/essay");
        this.updateEditedStep(true);
      } else if (step === 7) {
        this.goNextStep(step, "/profiling/additionalInfo");
        this.updateEditedStep(true);
      } else return;
    },

    printPreview() {
      console.log("about to print");
      const prtHtml = document.getElementById("appprint").innerHTML;

      // Get all stylesheets HTML
      let stylesHtml = "";
      for (const node of [
        ...document.querySelectorAll('link[rel="stylesheet"], style'),
      ]) {
        stylesHtml += node.outerHTML;
      }

      // Open the print window
      const WinPrint = window.open(
        "",
        "",
        "left=0,top=0,width=800,height=900,toolbar=0,scrollbars=0,status=0"
      );

      WinPrint.document.write(`<!DOCTYPE html>
              <html>
                <head>
                  ${stylesHtml}
                </head>
                <body>
                  ${prtHtml}
                </body>
              </html>`);

      WinPrint.document.close();
      WinPrint.focus();
      WinPrint.print();
      WinPrint.close();
    },
  },
  mounted() {
    this.showWarning();
  },
  created() {
    //    this.$store.dispatch("mortgage/getCurrentMortgageStatusAction")
  },
};
</script>

<style lang="scss">
.text {
  color: rgb(33, 27, 27);
}
.title {
  width: 100%;
}
.child-img {
  background-size: cover;
  // background-repeat: no-repeat;
  width: 150px;
  margin: auto;
  //  margin: 20px;
  margin-bottom: 30px;
  margin-top: 30px;
  height: 150px;
  background-position: center;
  border: 4px solid #c4c1c1;
  border-radius: 5%;
  box-shadow: 2px 1px solid#c71f40;
  
}
</style>

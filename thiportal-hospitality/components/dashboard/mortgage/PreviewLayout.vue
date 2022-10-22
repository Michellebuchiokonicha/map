<template>
  <div>
    {{user_mortgage}}
       <v-container id="appprint" >
                            <v-card elevation="0" class="negative">
                              <mortgage-form-title left="" right=""  class="no-print">
                                  <template v-slot:action>
                                      <v-btn text @click="printPreview" class="no-print"> <v-icon size="30">mdi-printer</v-icon> &nbsp; Print</v-btn>
                                  </template>
                                </mortgage-form-title>

                                <v-card-text>

                                    <div class="wrapper-preview">
                                        <div class="top-border-text">
                                            Personal Profile
                                        </div>
                                        <div class="text-box">
                                            <div class="text-content">
                                                <div class="title">{{formdata.firstname}}</div>
                                                <div class="text">First Name</div>
                                            </div>
                                            <div class="text-content">
                                                <div class="title">{{formdata.middlename}}</div>
                                                <div class="text">Middle Name</div>
                                            </div>
                                            <div class="text-content">
                                                <div class="title">{{formdata.lastname}}</div>
                                                <div class="text">Last Name</div>
                                            </div>
                                            <div class="text-content">
                                                <div class="title">{{formdata.gender}}</div>
                                                <div class="text">Gender</div>
                                            </div>
                                            <div class="text-content">
                                                <div class="title">{{formdata.dob}}</div>
                                                <div class="text">Date of Birth</div>
                                            </div>
                                           
                                            <div class="text-content">
                                                <div class="title">{{formdata.phone}}</div>
                                                <div class="text">Phone Number</div>
                                            </div>
                                            
                                            <div class="text-content">
                                                <div class="title">{{formdata.altphone}}</div>
                                                <div class="text">Alternate Contact Number</div>
                                            </div>
                                            <div class="text-content">
                                                <div class="title">{{formdata.email}}</div>
                                                <div class="text">Email</div>
                                            </div>
                                            <div class="text-content">
                                                <div class="title">{{formdata.secondary_email}}</div>
                                                <div class="text">Secondary Email</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="wrapper-preview">
                                        <div class="top-border-text">
                                           Education
                                        </div>
                                        <v-btn @click="editedStep(2)"  class="top-btn" depressed dark > <v-icon size="25">mdi-pencil</v-icon></v-btn>
                                        <div class="text-box"  v-for="(educ, index) in formdata.educs " :educ="educ" :key="index">
                                            <div class="text-content">
                                                <div class="title">{{educ.name}}</div>
                                                <div class="text">Name of Secondary School</div>
                                            </div>

                                            <div class="text-content">
                                                <div class="title">{{educ.country}}</div>
                                                <div class="text">Country of Secondary School</div>
                                            </div>
                                            <div class="text-content">
                                                <div class="title">{{educ.state}}</div>
                                                <div class="text">State of Secondary School</div>
                                            </div>
                                            <div class="text-content">
                                                <div class="title">{{educ.attendedFrom}}</div>
                                                <div class="text">Attended From</div>
                                            </div>
                                            <div class="text-content">
                                                <div class="title">{{educ.attendedTill}}</div>
                                                <div class="text">Attended Till</div>
                                            </div>
                                        </div>
                                    </div>
                                      <div class="wrapper-preview">
                                        <div class="top-border-text" >
                                           Work Experience
                                        </div>
                                        <v-btn @click="editedStep(3)" class="top-btn" depressed dark > <v-icon size="25">mdi-pencil</v-icon></v-btn>
                                        <div class="text-box" v-for="(expr, index) in formdata.exprs " :expr="expr" :key="index">
                                            <div class="text-content">
                                                <div class="title">{{expr.name}}</div>
                                                <div class="text">Name of Company</div>
                                            </div>

                                            <div class="text-content">
                                                <div class="title">{{expr.title}}</div>
                                                <div class="text">Job Title</div>
                                            </div>
                                            <div class="text-content">
                                                <div class="title">{{expr.description}}</div>
                                                <div class="text">Job Description</div>
                                            </div>
                                            <div class="text-content">
                                                <div class="title">{{expr.attendedFrom}}</div>
                                                <div class="text">Year Started</div>
                                            </div>
                                            <div class="text-content">
                                                <div class="title">{{expr.attendedTill}}</div>
                                                <div class="text">Year Ended</div>
                                            </div>
                                        </div>
                                    </div>
                                <div class="wrapper-preview mg-bottom">
                                        <div class="top-border-text">
                                            Awards and Honors
                                        </div>
                                        <div class="text-box">
                                           <div class="text-content">
                                                <div class="title">{{formdata.awards_scholarship}}</div>
                                                <div class="text">Do you require scholarship support?</div>
                                            </div>
                                            <div class="text-content">
                                                <div class="title">{{formdata.awards_investment}}</div>
                                                <div class="text">Please tell us why you deserve your requested scholarship towards TLHI scholars program ?</div>
                                            </div>
                                          

                                        </div>
                                </div>

                                <div class="wrapper-preview mg-bottom">
                                        <div class="top-border-text">
                                            Referee
                                        </div>
                                         <div class="text-box">
                                            <div class="text-content">
                                                <div class="title">{{formdata.reference_name}}</div>
                                                <div class="text">Reference Name</div>
                                            </div>
                                            
                                            <div class="text-content">
                                                <div class="title">{{formdata.reference_email}}</div>
                                                <div class="text">Email</div>
                                            </div>
                                            <div class="text-content">
                                                <div class="title">{{formdata.reference_phone}}</div>
                                                <div class="text">Phone Number</div>
                                            </div>
                                            <div class="text-content">
                                                <div class="title">{{formdata.reference_org}}</div>
                                                <div class="text">Organization</div>
                                            </div>
                                            <div class="text-content">
                                                <div class="title">{{formdata.reference_desig}}</div>
                                                <div class="text">Designation</div>
                                            </div>
                                            <div class="text-content">
                                                <div class="title">{{formdata.reference_ref}}</div>
                                                <div class="text">How Long has the  referee known you?</div>
                                            </div>
                                        </div>
                                  
                              
                                </div>

                                <div class="wrapper-preview mg-bottom">
                                        <div class="top-border-text">
                                            Additional Information
                                        </div>
                                        <div class="text-box">
                                            <div class="text-content">
                                                <div class="title">{{formdata.additional_check}}</div>
                                                <div :yesNo="mimim" class="text">Have you been diagnosed with any physical, learning or other disability?</div>
                                            </div>
                                            <div class="text-content">
                                                <div class="title">{{formdata.additional_info}}</div>
                                                <div class="text">Please provide any additional information about the above(optional)</div>
                                            </div>
                                            <div class="text-content">
                                                <div class="title">{{formdata.additional_biography}}</div>
                                                <div class="text">How did you first learn about TLHI program?</div>
                                            </div>
                                            <div class="text-content">
                                                <div class="text">Which other institutions have you applied to?</div>
                                            </div>
                        
                                            
                                        </div>
                                </div>


                                </v-card-text>
                                    </v-card>
                        </v-container>
  </div>
</template>

<script>
import MortgageFormTitle from './MortgageFormTitle.vue';
import general_mixin from '@/mixins/general_mixin'

  export default {
    mixins:[general_mixin],
  components: { MortgageFormTitle },
    data(){
      return{
      }
    },
    computed:{
      formdata(){
        let t =  this.$store.state.portal.profile;
        return t;
      }
    },
    methods:{
      printPreview(){
        console.log("about to print")
        const prtHtml = document.getElementById('appprint').innerHTML;

              let stylesHtml = '';
              for (const node of [...document.querySelectorAll('link[rel="stylesheet"], style')]) {
                stylesHtml += node.outerHTML;
              }

              const WinPrint = window.open('', '', 'left=0,top=0,width=800,height=900,toolbar=0,scrollbars=0,status=0');

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
      }
    },
    created(){
    }
  }
</script>


<style lang="scss" >
 
 .text{
   color: rgb(33, 27, 27) ;
 }
</style>


<template>
  <div>
    <v-container>
       <div class="form-parent">
      <mortgage-form-title left="Mortgage" :right="determineRight">
              <template v-slot:action>
                    <v-progress-linear class="progress"
                    v-model="stepPercent"
                    color="accent"
                    height="15"
                  >
              </v-progress-linear>

              </template>
      </mortgage-form-title>
    </div>
     <nuxt-child/>
    </v-container>


     <bottom-navigation :width="$vuetify.breakpoint.smAndDown?'8rem':'12rem'" :showBlock="false" :showPrevious="mortgagestep>1?true:false" :previousAction="previousAction" :nextAction="nextAction"
            :continueText="mortgagestep<mortgageTotalStep?'Continue':'Submit'" />
  </div>
</template>

<script>
import BottomNavigation from '@/components/navigation/BottomNavigation.vue'
  import general_mixin from '@/mixins/general_mixin'
import form_mixin from '@/mixins/form_mixin'
const personal="/dashboard/mortgage/personal"
  export default {
    layout:'dashboard',
    mixins:[general_mixin,form_mixin],
    components: { BottomNavigation },
    data(){
      return{
        percent:20,
        form_type: ['Personal Profile','Education','Work Experience','Awards and Honors','Letter of Reference','Additional Information', 'Preview']
      }
    },
    computed:{
        layout(){
      return this.$route.path || personal;

    },
      determineRight(){

        return this.form_type[this.mortgagestep-1];
      },
      stepPercent(){
        switch(this.mortgagestep){
          case 1:return this.percent;
          case 2:case 3:case 4: case 5: case 6: case 7: return this.percent+20;
        }
      }
    },
    methods:{
      previousAction(){
          this.goMortgageBackStep();
            //  switch(this.step){
            //   case 1:
            //           this.$router.push('/profiling')
            //     break;
            //   case 2:
            //     this.$router.push('/profiling')
            //     break;
            //   case 3:
            //    this.$router.push('/profiling/employment')
            //     break;
            //   case 4:
            //   this.$router.push('/profiling/affordability')
            //     break;
            // }
        },
        nextAction(){
            switch(this.step){
              case 1:
                this.$nuxt.$emit('submit_personal_form',true);
                break;
              case 2:
                this.$nuxt.$emit('submit_education_form',true);
                break;
              case 3:
                this.$nuxt.$emit('submit_experience_form',true);
                break;
              case 4:
                this.$nuxt.$emit('submit_awards_modal',true);
                break;
                case 5:
                this.$nuxt.$emit('submit_reference_modal',true);
                break;
                case 6:
                this.$nuxt.$emit('submit_additional_modal',true);
                break;
                case 7:
                this.$nuxt.$emit('submit_profile_modal',true);
                break;
            }


        },
    }
  }
</script>

<style lang="scss" scoped>
  .form-parent{
    padding:2rem;
    background-color: #fff;
    min-height: 30rem;
  }
     .progress{
    width:70%;
  }
</style>

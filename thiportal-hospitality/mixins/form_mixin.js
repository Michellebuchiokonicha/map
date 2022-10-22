export default{
  data(){
    return{
        formStep: ['profiling', 'profiling/education', 'profiling/workExperience', 'profiling/awards', 'profiling/letterofReference', 'profiling/essay', 'profiling/additionalInfo', 'profiling/profile', 'request']
    }
  },
    computed:{
      stepEdited(){
        return this.$store.state.portal.step_is_edited;
      },
      // savedData(){
      //   return this.$store.state.portal.saved_data;
      // },
      step:{
        get(){
          return this.$store.state.portal.formStep;
        },
        set(v){
          this.$store.commit("portal/GO_TO_STEP",v);
        }
      },
      totalStep(){
        return this.$store.state.portal.totalStep;
      },
      mortgagestep:{
        get(){
          return this.$store.state.mortgage.mortgage_step;
        },
        set(v){
          this.$store.commit("mortgage/GO_TO_STEP",v);
        }
      },
      mortgageTotalStep(){
        return this.$store.state.mortgage.mortgageTotalStep;
      },
      min() {
          if (this.resultType != '%') {
            return this.min_range;
          } else {
            return this.min_range + ' ' + this.resultType;
          }
        },
        max() {
          if (this.resultType != '%') {
            return !isNaN(this.max_range) && this.max_range > 0 ? this.max_range : 20;
          } else {
            return this.max_range + ' ' + this.resultType;
          }
        },
    },
    methods:{
          // goNextFormStep(route){
          //   let r = this.formStep.indexOf(route);
          //   let next = r+1;
          //   // this.goNextStep(next);
          //   this.$router.push(this.formStep[next]);
          // },
          // goBcakFormStep(route){
          //   let r = this.formStep.indexOf(route);
          //   let next = r - 1;
          //   console.log('step num: ', r);
          //   this.$router.push(this.formStep[next]);
          // },
          goNextRoute(route){
            this.$store.router.push(route);
          },
          goNextStep(step,route){
            console.log(step);
            console.log(route);
            if(this.stepEdited){
              this.$store.commit("portal/GO_TO_STEP", 8);
               this.$router.push('/profiling/profile');
            }else{
              this.$store.commit("portal/GO_TO_STEP", step);
              this.$router.push(route);
            }
           
          },
          goBackStep(){
            // console.log("going back");
            this.$store.commit("portal/GO_BACK_STEP",-1);
            this.$router.go(-1);
          },
          goMortgageNextStep(step) {
             this.$store.commit("mortgage/GO_TO_STEP", step);
           },
          goMortgageBackStep(){
            this.$store.commit("mortgage/GO_BACK_STEP",-1);
            this.$router.go(-1);
          },
          updateEditedStep(s){
            this.$store.commit("portal/STEP_IS_EDITED",s);
            // this.$router.go(-1);
          },
          // savedData(s){
          //   this.$store.commit("portal/SAVED_DATA",s);
          // },
          mapIncomingDataToForm(form, data) {
            // console.log(data);
            // let ob = Object.entries(data);
            // for (const [key, value] of ob) {
            //   if (key in form) {
            //     form[key] = value
            //   }
            //   //    form[key] = value;
            // }

          },


    }
}

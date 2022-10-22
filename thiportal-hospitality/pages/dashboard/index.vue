<template >
<div class="contain">
  <v-container>
     <v-row class="form-row">
          <v-col class="col-12" md="4">
            <v-card class="applyForm">
              <div class="apply">
                <div>Application Form</div>
                <div>In progress</div>
              </div>
              <v-progress-linear
              v-model="skill"
                 color="#c71f40"
              height="15"
            value="70"
    > 
        <strong>{{ Math.ceil(knowledge)}}%</strong>
    </v-progress-linear>
            </v-card>
            </v-col>
            <v-col class="col-12" md="4">
               <v-card class="applyForm">
                <div class="apply">
                  <div>Interview I</div>
                   <div>Not Started</div>
                </div>
            </v-card>
            </v-col>
           <v-col class="col-12" md="4">
            <v-card class="applyForm">
              <div class="apply">
                 <div>Interview II</div>
              <div>Not Started</div>
              </div>
            </v-card>
           </v-col>
           <v-col class="col-12" md="4">
            <v-card class="applyForm">
              <div class="apply">
                 <div>Overall Application Status</div>
              <div>Under Review</div>
              </div>
             <v-progress-circular
                :rotate="180"
                :size="100"
                :width="15"
                :value="value"
                color="#c71f40"
              >
                {{ value }}
              </v-progress-circular>
            </v-card>
           </v-col>
           <v-col class="col-12" md="4">
            <v-card class="applyForm">
              <div class="apply">
                 <div>Admission</div>
              <div>Accepted</div>
              </div>
            </v-card>
           </v-col>
            <v-col class="col-12" md="4">
            <v-card class="applyForm">
              <div class="apply">
                 <div>Other Details</div>
              <div>Available</div>
              </div>
            </v-card>
           </v-col>
        </v-row>
   
</v-container>
</div>

</template>

<script>
import CountCard from '@/components/dashboard/CountCard.vue'
import CounterCard from '@/components/dashboard/CounterCard.vue'
import general_mixin from '@/mixins/general_mixin'
import Donut from '@/components/dashboard/Donut.vue'
import ApplicationStatus from '@/components/dashboard/ApplicationStatus.vue'
import AffordabilityCard from '@/components/dashboard/AffordabilityCard.vue'
import MortgageCard from '@/components/dashboard/MortgageCard.vue'
import DocumentUpload from '@/components/dashboard/DocumentUpload.vue'
import PropertyRequestCard from '@/components/dashboard/PropertyRequestCard.vue'
import { mapState } from 'vuex'
export default {
  components: { CountCard,CounterCard,Donut,ApplicationStatus,
    AffordabilityCard,MortgageCard,DocumentUpload,PropertyRequestCard
     },
  mixins:[general_mixin],
  layout:'dashboard',
  data(){
    return{
      mortgage_status:{},

      interval: {},
        value: 0,

        skill: 20,
      knowledge: 33,
      power: 78,
    }
  },
      beforeDestroy () {
      clearInterval(this.interval)
      },
      mounted () {
      this.interval = setInterval(() => {
        if (this.value === 100) {
          return (this.value = 50)
        }
        // if(this.value === 50){
        //   return(this.value = 0)
        // }
        // if(this.value === 0){
        //   return(this.value = 100)
        // }
        this.value += 10
      }, 2000)
    },
  computed:{

      mortgage_status_data(){
        let m =  this.$store.state.mortgage.mortgage_status;
        this.mortgage_status = m;
        }
      },

}
</script>

<style lang="scss" scoped>

.content{
    width: 100%;
    margin:0 auto;
    // background: #f2f2f2;
    padding:0 0rem;
}
.contain{
  background-color: rgb(255, 250, 250);
  height: 100%;
}
.apply{
  height: 8rem;
  margin: 0 auto;
  display: flex;
  justify-content: space-around;
  // background-color: rgb(255, 252, 252);
  // background-color: rgb(250, 228, 228);
  // background-color: rgb(253, 238, 238);
   border: 4px solid rgb(255, 252, 252);
  // border: 4px solid rgb(255, 242, 242);
  line-height: 80px;
}
.applyForm{
  //  background-color: rgb(253, 238, 238);
  // border: 4px solid rgb(253, 234, 234);
  background-color: #fff;
  border: 4px solid rgb(255, 252, 252);
  // border: 4px solid rgb(255, 242, 242);
}
.form-row{
  margin-top: 40px;
}
.v-progress-circular {
  margin: 1rem;
  margin: auto;
  align-content: center;
  justify-content: center;
  display: flex;
}
.v-progress-linear{
  width: 300px;
  border-radius: 5px;
  margin: 40px;
}
</style>

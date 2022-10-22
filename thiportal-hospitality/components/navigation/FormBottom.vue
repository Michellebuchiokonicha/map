<template>
    <div >
        <div class="form-bottom d-flex justify-space-between">
            <action-button text="Previous" :outlined="true" type="button"  color="primary"
            v-if="showPrevious" :width="width" height="45px" class="left-btn" :action="previousAction"></action-button>
            <action-button :text="btnText" color="primary" type="button" :block="showBlock"
             :width="width" height="45px" class="right-btn ml-auto"  :action="nextAction"></action-button>

            <!-- <div class="btn-div" > -->
                <!-- <v-btn outlined max-width="120" class="left-btn" height="45" @click="previousAction()" v-if="showPrevious">
                Previous
            </v-btn> -->
            <!-- <v-btn max-width="120" class="right-btn" height="45" color="secondary"  @click="nextAction()">
                Save and Continue
            </v-btn> -->
            <!-- </div> -->

        </div>
    </div>
</template>
<script>
import ActionButton from '@/components/ActionButton.vue';
import formMixin from '../../mixins/form_mixin';

export default {
  components: { ActionButton },
  mixins:[formMixin],
    name:"FormButtom",
    props:{
        showPrevious:{required:true},
        showBlock:{type:Boolean,default:false},
        previousAction:{type:Function},
        nextAction:{type:Function},
        width:{type:String,default:"40%"}
    },
    data(){
        return{
            sheet:false
        }
    },
    computed:{
        btnText(){
        //   if(this.step.length === 0) return;
        //   if(this.step.length === 0) return;
        //   if(this.step.length === 0) return;
        //   if(this.step.length === 0) return;
        //   if(this.step.length === 0) return;

        //   this.$router.push({
        //     personal:this.step[pers]
        //  });
            // console.log(this.step)
            if(this.step >= this.totalStep){
                return 'Submit'
            }
            return 'Save/Continue'
        },

    },
    methods:{
        goToForm(link){
            this.$router.push({name:link});
        }
    },
    // created(){
    //     this.previousAction();
    //     this.nextAction();
    // }
}
</script>
<style scoped>
.form-bottom{
    background-color: #fff;
    width:100%;
    /* position: absolute;
    bottom:0;
    left:0; */
    /* height: 80px; */
    /* box-shadow: 0px 0 10px rgba(0, 0, 0, 0.1); */
    /* z-index: 100; */
     /* display: flex;
    justify-content: space-between; */

    /* padding:15px 40px; */

    /* margin-left:256px; */
}
.btn-div{
    width: 100%;

    /* display: flex; */
    /* justify-content: space-between; */
}
#app .right-btn{
    color:#fff  !important;
}
.right-btn{
    float: right;
}
.left-btn{
    float:left;
    color: #c71f40;
}
.v-btn--outlined {
    color: #c71f40;
    border: thin solid #c71f40;
  }
  .v-application .primary--text{
    color: #c71f40;
  }
  @media (min-width: 220px) and (max-width: 640px) {
    .right-btn{
      width: 90%;
    }

   }
@media (min-width: 641px) and (max-width: 768px) {

}
@media (min-width: 769px) and (max-width: 1024px) {

}
</style>

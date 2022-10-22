<template>
  <div>
      <v-bottom-sheet hide-overlay elevation="1" :attach="true"
            v-model="sheet"
            persistent
            :retain-focus="false"
            :no-click-animation="true"
          >
      <v-sheet        class="text-center py-5"
        height="100px"
      >
        <v-container>
             <div class="form-bottom d-flex justify-space-between">


            <action-button text="Previous" :outlined="true" type="button"  color="primary"
            v-if="showPrevious" :width="width" height="45px" class="left-btn" :action="previousAction"></action-button>
            <action-button :text="continueText" type="button" :block="showBlock"
             :width="width" height="45px" class="right-btn ml-auto" :action="nextAction"></action-button>

        </div>
        </v-container>

      </v-sheet>
       </v-bottom-sheet>
  </div>
</template>

<script>
import ActionButton from '../ActionButton.vue'
  export default {
  components: {  ActionButton },
     props:{
        showPrevious:{required:true},
        showBlock:{type:Boolean,default:false},
        previousAction:{type:Function},
        nextAction:{type:Function},
        width:{type:String,default:"40%"},
        continueText:{type:String,default:'Save and Continue'}
    },
      data(){
        return{
            sheet:true
        }
      }
  }
</script>

<style lang="scss" scoped>
  .v-dialog__content {
     z-index: 1 !important;
     padding-left: 256px;
    }
    @media (max-width:1000px){
       .v-dialog__content {
     z-index: 6 !important;
     padding-left: 0 !important;
    }
    }

    .form-bottom{
    background-color: #fff;
    width:100%;
}
.btn-div{
    width: 100%;
}
#app .right-btn{
    color:#fff im !important;
}
.right-btn{
    float: right;
}
.left-btn{
    float:left;
    color: red;
}
.v-btn--outlined {
    color: red;
    border: thin solid red;
  }
  .v-application .primary--text{
    color: red;
    caret-color: red;
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

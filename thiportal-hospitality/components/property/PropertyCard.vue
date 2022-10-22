<template>
    <div>
         <div class="home-card">
                        <div class="card-image" :style="{ backgroundImage: 'url('+property.property_cover_image + ')' }">
                        </div>
                    <div class="card-content">
                    <div class="top-div">
                        <div class="left-content">
                        <div class="bold-text cash">₦ {{formatCurrency(property.property_price)}}</div>
                        <div class="card-title-location-wrapper">
                           <span class="property-card-title">Epe Lagos, Nigeria</span>
                            <div class="light-text location">
                            <v-icon color="#0D4566">mdi-map-marker-outline</v-icon>
                            {{property.city.name}}, {{property.state.name}}, Nigeria
                        </div>
                        </div>
                        </div>
                        <div class="right-content">
                        <div class="light-text finance" v-if="property.property_status">{{property.property_status.name}}</div>
                        </div>
                    </div>
                    <div class="middle-div">
                        <div class="left-icon-content">
                        <a href=""> <div class="icon-box"> <v-icon color="#0D4566">mdi-bed-king-outline</v-icon> <div class="light-text">{{property.property_bedrooms}} Beds</div> </div> </a>
                        <a href=""> <div class="icon-box"> <v-icon color="#0D4566">mdi-shower</v-icon> <div class="light-text">{{property.property_bathrooms}} Baths</div> </div> </a>
                        <a href=""> <div class="icon-box"> <v-icon color="#0D4566">mdi-home-city-outline</v-icon> <div class="light-text">{{property.property_size}} sqft</div> </div> </a>
                        </div>
                        <div class="right-content">
                          <action-button :outlined="false" class="detail-btn" type="button"  color="primary" height="37px" width="8rem" text="See details" :block="false" :action="showDetail"/>
                        </div>
                    </div>
                    <div class="bottom-div">
                        <div class="left-content">
                        <div class="fade-text buy">Buy on Mortgage</div>
                        <div class="bold-text bottom-cash">₦ {{formatCurrency(property.estimated_repayment.monthly_payment)}} <span class="fade-text">/ Month</span></div>
                        </div>
                        <div class="right-content">
                        <div class="fade-text pay">Payback Over</div>
                        <div class="bold-text bottom-cash">{{property.estimated_repayment.tenure}}  <span class="fade-text">/ Years</span></div>
                        </div>
                    </div>
                    <div class="action-btn">
                      <action-button :outlined="true" type="button"  color="primary" height="40px" width="8rem" text="Choose" :block="true" :action="selectProperty"/>
                      <!-- <action-button height="30px" width="8rem" text="Select" :block="false"/> -->
                    </div>
                    </div>
                </div>
    </div>
</template>

<script>
import ActionButton from '../ActionButton.vue'
import general_mixin from '@/mixins/general_mixin'
    export default {
      mixins:[general_mixin],
  components: { ActionButton },
        name:"PropertyCard",
        props:{
          property:{type:Object,required:true}
        },
        methods:{
          showDetail(){
            console.log("show propery detail");
             let d = {status:true,property:this.property,prefill:true}
            this.$nuxt.$emit("property-detail",d)
          },
          selectProperty(){
            this.$store.commit("property/SELECTED_PROPERTY",this.property)
            let d = {status:true,property:this.property,prefill:true}
            this.$nuxt.$emit("selected_property",d);

          }
        }
    }
</script>

<style scoped lang="scss">

 .fold{
      width:100%;
      margin:0 auto;
      display: flex;
      align-items: center;
      justify-content: space-between;
      flex-wrap: wrap;
      margin-top: -6rem;
      margin-bottom: 7rem;
  }
.home-card{
    width:19rem;
    min-height: auto;
    margin:0.85rem auto;
}
 .card-content{
      min-height: auto;
      width: 100%;
      border-radius: 10px;
      border-top-left-radius: 0px;
      border-top-right-radius: 0px;
      background: #fff;
      box-shadow: 0 8px 9px 0 rgba(0, 0, 0, 0.05);
      padding: 0.8rem 0.65rem;
      padding-top:1rem;
      margin-top:0rem;
  }

.card-image{
    height:15rem;
    width: 100%;
    // background: url(https://cdn.vuetifyjs.com/images/cards/cooking.png);
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    border-top-right-radius:10px;
    border-top-left-radius: 10px;
    /* clip-path: polygon(50% 0%, 100% 38%, 100% 100%, 0 100%, 0% 38%);
    clip-path: polygon(50% 22%, 100% 38%, 100% 100%, 0 100%, 0% 38%); */
  }
  .bold-text{
    font-size: 1rem;
    font-weight: 700;
    line-height: 10px;
    letter-spacing: 0px;
    text-align: left;
    color: $property_card_color;
    width: 100%;
  }
  .light-text{
    font-size: 0.6875rem;
    font-weight: 400;
    line-height: 3px;
    letter-spacing: 0px;
    text-align: left;
    color: $property_card_color;
    cursor: pointer;
    white-space:nowrap;
  }
  .fade-text{
    font-size:0.75rem;
    font-weight: 400;
    line-height: 3px;
    letter-spacing: 0px;
    text-align: left;
    color: $property_card_color;
    margin-bottom: 1rem;
    cursor: pointer;
  }
  .mortgage-text{
    font-size: 12px;
    font-weight: 400;
    line-height: 3px;
    letter-spacing: 0px;
    text-align: right;
    color:$property_card_alt_color;
    margin-top: 1rem;
    margin-right: -2rem;
  }
  .detail-btn{
    height: 37.28px!important;
    width: 105.64px!important;
    border-radius: 5px;
    background: $property_card_color!important;
    text-transform: capitalize;
    font-family: Poppins;
    font-size: 0.7rem!important;
    font-weight: 600;
    line-height: 24px;
    letter-spacing: 0em;
    text-align: center;
    color: #F8F8F8;

  }
  .middle-div a{
      text-decoration: none;
      margin-right:1rem;
      margin-top: 0rem;
  }
  .middle-div{
      margin:1.5rem 0;
  }
  .top-div,.middle-div,.bottom-div{
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .top-div{
      margin-top:1.5rem;
  }
  .left-content,.right-content{
    display: flex;
    align-items: center;
    justify-content:flex-start;
    flex-direction: column;
  }
  .left-icon-content{
      display:flex;
      align-items: center;
      justify-content: space-between;
  }
  .bold-text.cash{
      margin-bottom: 1rem;
  }
  .light-text.location{
      margin-left: -0.45rem;
      display: flex;
      align-items: center;
      justify-content: space-between;
  }
  .card-title-location-wrapper{
    height:1.5625rem;
    margin-top: 0.65rem;
    margin-bottom: 1rem;
  }
  .property-card-title{
    font-size: 0.8125rem;
    font-weight: 700;
    line-height: 10px;
    letter-spacing: 0px;
    text-align: left;
    color: $property_card_color;
    width: 100%;
    display: block;
    margin-bottom: 0.45rem;
  }
  .icon-box .v-icon{
     margin-bottom: 0.75rem;
  }
  .fade-text.buy{
      margin-top: 1rem;
      margin-left:-2rem;
      margin-bottom: 1.2rem;
  }
  .light-text.finance{
      margin-top: -2.8rem;
      white-space:pre-wrap;
      line-height: 1rem;
      color:$property_card_alt_color;
  }
  .fade-text.pay{
      margin-top:0.65rem;
  }
  .action-btn{
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top:1.5rem;
    width:100%;
  }
</style>

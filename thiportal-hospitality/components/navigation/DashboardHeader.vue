<template>
  <div class="board">
     <v-navigation-drawer   v-model="drawer"  app left class="no-print">

            <!-- add logo with margin-bottom of 5 -->
          <div class="logo my-5"><v-img src="/logo/new_logo.png"></v-img></div>
          <v-divider class="divide"></v-divider>
           <!-- <side-nav-profile /> -->
             <v-list dense class="mt-5 list">
                    <nav-list   v-for="(item,i) in app_menu" :key="i"
                        :data=" { icon: item.icon, text: item.text,link:item.link,children:item.children, prepend_icon:item.prepend_icon,heading:item.heading }"

                        :hasChildren=item.hasChildren :show_heading="item.show_heading" />
              </v-list>
               <div class="pa-2 text-center owner_div mb-8">
                        <v-list>
                            <v-list-item>
                                <v-list-item-content>
                                    <v-list-item-title class=" first" color="secondary" style="font-size:10px">Support. Report . Terms of Use</v-list-item-title>
                                    <v-list-item-subtitle class="second"  color="#c71f40">
                                        <span>&copy; The Hospitality School | All Right reserve</span>
                                    </v-list-item-subtitle>
                                </v-list-item-content>
                            </v-list-item>
                        </v-list>
                    </div>
        </v-navigation-drawer>
    <v-app-bar app color="white" class="no-print" elevation="1">
      <v-app-bar-nav-icon @click="drawer = !drawer" v-if="$vuetify.breakpoint.smAndDown"></v-app-bar-nav-icon>
        <v-spacer></v-spacer>
        <side-nav-profile :menu= "user_menu"/>
    </v-app-bar>
  </div>
</template>

<script>
import NavList from './NavList.vue'
import SideNavProfile from './SideNavProfile.vue'
  export default {
  components: { NavList, SideNavProfile },
       data(){
            return{
                drawer:null,
                app_menu: [
                   {icon:'mdi-view-dashboard', text:'Dashboard',link:'/dashboard'},
                   {icon:'mdi-lan-connect', text:'All Application Form(s)',link:'/dashboard/application'},
                   {icon:'mdi-face-recognition', text:'My Profile',link:'/dashboard/preview'},
                   {icon:'mdi-jquery', text:'My Queries',link:'/dashboard/queries'},
                   {icon:'mdi-logout', text:'Logout',link:'/login'},

               ],
               user_menu:[
                 {icon:"mdi-account-outline",title:'Profile',link:''},
                 {icon:"mdi-logout",title:'Logout',link:'logout'},
               ]
            }
        },
       
  }
</script>

<style lang="scss" scoped>
  .logo{
    width:120px;
    height: 40px;
    margin-left: 1rem;
    margin-top: 1rem;
  }
  .board{
    background-color: #fff;
  }
  .no-print{
    background-color: #fff;
  }
   .owner_div{
        position: absolute;
        width: 224px;
        height: 33px;
        margin:5px auto;
        bottom: 0;
    }
    .owner_div .first{
        color: #0a1c44;
        font-size: 10px;
        line-height: 13px;
    }
    .owner_div .second{
        font-size: 10px;
        line-height: 13px;
        color:rgba(0, 0, 0, 0.47);
    }
    .divide{
      background: #fff;
    }
    .list{
      color: #fff;
    }
</style>

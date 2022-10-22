<template>
  <v-app>
    <v-navigation-drawer
      v-if="$vuetify.breakpoint.smAndDown"
      v-model="drawer"
      app
    >
      <v-container>
        <div class="d-flex justify-center flex-row">
          <v-img
            @click="goHome"
            src="@/assets/new_logo.png"
            class="cursor"
            max-height="80"
            max-width="150" b
          ></v-img>
        </div>

        <!-- <div class="nav-list"> -->
          <!-- <div class="thih" v-if="!authStatus"> -->

          <!-- <div class="nav-list"> -->
          <!-- <side-nav :data=" { icon: item.icon, text:item.text,link:item.link,show:item.show }" v-for="(item,i) in menu" :key="i">
        </side-nav> -->
          <!-- <v-btn :regClick="regClick" @click="goToPage('/login')"
                  class="ma-2 auth_btn" color="primary" style="color:#fff !important;"
                >
                 Logout
                </v-btn> -->
          <!-- <v-tabs> -->
            <!-- <v-tab >
            <a href="http://thi-ng.org/">Home</a>
          </v-tab> -->
            <!-- <v-tab>
          <a href="http://thi-ng.org/" >Courses</a>
          </v-tab> -->
            <!-- <v-tab> -->
              <!-- <a href="http://thi-ng.org/"
                >Go back to website <span class="mdi mdi-arrow-right"></span
              ></a> -->
            <!-- </v-tab> -->
          <!-- </v-tabs> -->
          <!-- </div> -->
          <!-- <a class="thi" href="http://thi-ng.org/">
                 Go website <span class="mdi mdi-arrow-right"></span>
                </a> -->
          <!-- </div> -->
          <!-- <side-nav :data=" { icon: item.icon, text:item.text,link:item.link,show:item.show }" v-for="(item,i) in menu" :key="i">
        </side-nav> -->
          <!-- <v-btn @click="goToPage('/login')"
                  class="ma-2 auth_btn"
                  outlined
                  color="primary"
                >
                  :Login
                </v-btn> -->
          <!-- <v-btn @click="goToPage('/login')"
                  class="ma-2 auth_btn" color="transparent" style="color:#fff !important;"
                >
                  Logout
                </v-btn> -->
        <!-- </div> -->
      </v-container>

      <!--  -->
    </v-navigation-drawer>
    <v-app-bar elevation="1" app color="white">
      <v-container>
        <div class="d-flex justify-center" v-if="$vuetify.breakpoint.smAndDown">
          <nuxt-link to="/">
            <v-toolbar-title>
              <v-img
                src="/logo/new_logo.png"
                max-height="80"
                max-width="150"
                class="log"
              ></v-img>
            </v-toolbar-title>
          </nuxt-link>
          <v-spacer v-show="$vuetify.breakpoint.smAndDown"></v-spacer>
          <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
        </div>
        <div class="d-flex justify-center" v-if="$vuetify.breakpoint.mdAndUp">
          <nuxt-link to="/">
            <v-toolbar-title>
              <v-img
                src="/logo/new_logo.png"
                max-height="80"
                max-width="150"
                class="log"
              ></v-img>
            </v-toolbar-title>
          </nuxt-link>
          <v-spacer></v-spacer>
          <div v-if="!authStatus">
            <!-- <v-btn @click="goToPage('/login')"
                  class="ma-2 auth_btn"
                  outlined
                  color="primary"
                >
                  Login
                </v-btn> -->
            <template>
              <v-tabs v-model="tabs" align-with-title>
                <!-- <v-tab >
            <a href="http://thi-ng.org/">Home</a>
          </v-tab> -->
                <!-- <v-tab>
          <a href="http://thi-ng.org/" >Courses</a>
          </v-tab> -->
                <!-- <v-tab>
                  <a class="ti" href="http://thi-ng.org/"
                    >Go back to website <span class="mdi mdi-arrow-right"></span
                  ></a>
                </v-tab> -->

                <!-- <a class="thi" href="http://thi-ng.org/">
                 Go website <span class="mdi mdi-arrow-right"></span>
                </a> -->
                <!-- <v-tab @click="goToPage('/courses')">
            Programs
          </v-tab> -->
                <!-- <v-tab @click="goToPage('/courses')">
            Admission
          </v-tab>
           <v-tab @click="goToPage('/courses')">
            Contact us
          </v-tab> -->
                <v-tabs-slider color="pink"></v-tabs-slider>
              </v-tabs>
            </template>
          </div>
          <!-- <Avatar v-if="authStatus" @click="user_menu_action"  :menu="user_menu" /> -->

          <div 
          >
            <v-btn
            @click="user_menu_action"  :menu="user_menu"
              class="ma-2 auth_btn"
              id="login"
              outlined
              color="primary"
            >
            <a href="http://thi-ng.org/"
                >Go Home 
                <!-- <span class="mdi mdi-arrow-right"></span> -->
            </a>
            </v-btn>
            <v-btn
            @click="logout"
              class="ma-2 auth_btn"
              color="primary"
              style="color: #fff !important"
              id="register"
            >
              Logout
            </v-btn>
            <!-- <v-btn @click="goToPage('/login')"
                  class="ma-2 auth_btn" color="primary" style="color:#fff !important;" id="very"
                >
                 {{verifyDe}}
                </v-btn> -->
          </div>
          <!-- <v-tab>
              <a href="http://thi-ng.org/"
                >Go back to website <span class="mdi mdi-arrow-right"></span
              ></a>
            </v-tab> -->
        </div>
      </v-container>
    </v-app-bar>
    <v-main>
      <nuxt />
    </v-main>
    <!-- <Footer/> -->
  </v-app>
</template>

<script>
import Footer from "../components/Footer.vue";
import generalMixin from "@/mixins/general_mixin";
export default {
  mixins: [generalMixin],
  //  middleware: ["is_loggedin"],
  components: { Footer },
  data() {
    return {
      drawer: null,
      user_menu: [
        //  { icon: "mdi-arrow-right", title: "Go to home page", URL: "http://thi-ng.org" },
        { icon: "mdi-logout", title: "Logout", link: 'login' },
      ],
    };
  },
  computed: {
    isLoggedIn() {
      let l = this.$store.state.app.isLoggedIn;
      return l;
    },
  },
  methods: {
    logout(){
         this.$auth.logout()
         this.$router.push('/login');
      },
      user_menu_action(link){
        // if(link=='login'){
          this.$auth.logout()
          // this.$store.dispatch("logout").then(()=>{
            //  this.$router.replace('/login');
          // // })

        // }else{ 
          // this.$router.push(link);
        // }
      },
    goHome() {
      this.$router.push("/");
    },
    goToPage(link) {
      this.$router.push(link);
    },
    userMenu(){
      this.logout()
    }
  },
  created() {
    this.$vuetify.theme.dark = false;
    this.$vuetify.theme.light = true;
  },
};
</script>
<style>
.v-btn_content {
  color: #fff;
}
.white {
  background-color: #fff !important;
}
.theme--light.v-app-bar.v-toolbar.v-sheet {
  background-color: #fff !important;
}
.log {
  margin-top: 0.5rem;
}
.left-btn {
  float: left;
  color: #c71f40;
}
.v-navigation-drawer__content {
  background-color: rgb(253, 238, 238);
}
.v-btn--outlined {
  color: #c71f40;
  border: thin solid #c71f40;
}
.v-application .primary--text {
  color: #c71f40;
  caret-color: #c71f40;
}
.text-content .title {
  font-size: 14px !important;
  font-weight: 700;
}
a {
  text-decoration: none;
  text-decoration-color: none;
}
</style>

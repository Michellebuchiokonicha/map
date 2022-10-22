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
              max-width="150"
            ></v-img>
          </div>
  
          <div class="nav-list">
            <!-- <side-nav :data=" { icon: item.icon, text:item.text,link:item.link,show:item.show }" v-for="(item,i) in menu" :key="i">
          </side-nav> -->
            <v-btn
              @click="goToPage('/login')"
              class="ma-2 auth_btn"
              outlined
              color="primary"
            >
              Login
            </v-btn>
            <!-- <v-btn
              :regClick="regClick"
              @click="goToPage('/')"
              class="ma-2 auth_btn"
              color="primary"
              style="color: #fff !important"
            >
              Register
            </v-btn> -->
          </div>
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
  
            <div 
            v-if="!authStatus"
            >
              <v-btn
                @click="goToPage('/login')"
                class="ma-2 auth_btn"
                id="login"
                outlined
                color="primary"
              >
                {{ verifyNo }}
              </v-btn>
              <v-btn
                @click="goToPage('/')"
                class="ma-2 auth_btn"
                color="primary"
                style="color: #fff !important"
                id="register"
              >
                {{ verifyDe }}
              </v-btn>
              <!-- <v-btn @click="goToPage('/login')"
                    class="ma-2 auth_btn" color="primary" style="color:#fff !important;" id="very"
                  >
                   {{verifyDe}}
                  </v-btn> -->
            </div>
            <!-- <Avatar v-if="authStatus" :menu="user_menu" @click="user_menu_action" /> -->
            <v-btn
                 v-if="authStatus" :menu="user_menu" 
                @click="user_menu_action" 
                class="ma-2 auth_btn"
                id="login"
                outlined
                color="primary"
              >
                Logout
              </v-btn>
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
    components: { Footer },
    data() {
      return {
        drawer: null,
        user_menu: [
          // { icon: "mdi-account-outline", title: "Dashboard", link: "/dashboard" },
          { icon: "mdi-logout", title: "Logout", link: "/login" },
        ],
      };
    },
    computed: {
      isLoggedIn() {
        let l = this.$store.state.app.isLoggedIn;
        return l;
      },
      verifyDe() {
        // let reg = document.getElementById('register')
        // let log = document.getElementById('login')
        // let very = document.getElementById('very')
        if (this.$route.path == "/verify") {
          return "Logout";
        } else return "Register";
      },
      verifyNo() {
        if (this.$route.path == "/verify") {
          return;
        } else return "Login";
      },
    },
    methods: {
      user_menu_action(){
            this.$auth.logout()  
            this.$router.push("/login"); 
        },
      goHome() {
        this.$router.push("/");
      },
      goToPage(link) {
        this.$router.push(link);
      },
      regClick() {},
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
  .swal2-container.swal2-center > .swal2-popup {
    font-family: sans-serif;
    font-size: 14px;
    color: rgb(62, 61, 61);
  }
  </style>
  
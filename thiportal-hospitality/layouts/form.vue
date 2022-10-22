<template>
  <div>
    <client-only>
      <v-app>
        <v-navigation-drawer
          v-if="$vuetify.breakpoint.smAndDown"
          v-model="drawer"
          app
        >
          <v-container>
            <div class="d-flex justify-center flex-row" v-if="!authStatus">
              <v-img
                @click="goHome"
                src="/logo/new_logo.png"
                class="cursor"
                max-height="80"
                max-width="150"
              ></v-img>
            </div>

            <div class="nav-list">
              <!-- <side-nav :data=" { icon: item.icon, text:item.text,link:item.link,show:item.show }" v-for="(item,i) in menu" :key="i">
        </side-nav> -->
              <!-- <v-btn v-if="!authStatus" @click="goToPage('/login')"
                  class="ma-2 auth_btn"
                  outlined
                  color="primary"
                >
                  Login
          </v-btn>
          <v-btn v-if="!authStatus" @click="goToPage('/courses')"
                  class="ma-2 auth_btn" color="primary" style="color:#fff !important;"
                >
                  Register
          </v-btn> -->
              <name-avatar :menu="user_menu" @click="user_menu_action"/>
              <side-nav-profile />
            </div>
          </v-container>

          <!--  -->
        </v-navigation-drawer>
        <v-app-bar elevation="1" app color="white">
          <v-container>
            <div
              class="d-flex justify-center"
              v-if="$vuetify.breakpoint.smAndDown"
            >
              <v-toolbar-title>
                <nuxt-link to="/">
                  <v-img
                    src="/logo/new_logo.png"
                    max-height="80"
                    max-width="150"
                    class="log"
                  ></v-img>
                </nuxt-link>
              </v-toolbar-title>
              <v-spacer v-show="$vuetify.breakpoint.smAndDown"></v-spacer>
              <v-app-bar-nav-icon
                @click="drawer = !drawer"
              ></v-app-bar-nav-icon>
            </div>
            <div
              class="d-flex justify-center"
              v-if="$vuetify.breakpoint.mdAndUp"
            >
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
              <!-- <div v-if="!authStatus">
                  <v-btn @click="goToPage('/login')"
                    class="ma-2 auth_btn"
                    outlined
                    color="primary"
                  >
                    Login
                  </v-btn>
                  <v-btn @click="goToPage('/register')"
                    class="ma-2 auth_btn" color="primary" style="color:#fff !important;"
                  >
                    Register
                  </v-btn>
            </div> -->
              <!-- <Avatar v-if="authStatus"/> -->

              <div class="text-center"></div>

              <name-avatar :menu="user_menu" @click="user_menu_action"/>
            </div>
          </v-container>
        </v-app-bar>
        <v-main>
          <v-container>
            <v-row justify="center" class="mb-5 rog">
              <v-col cols="12" md="10" offset-md="0">
                <!-- <FinanceSummary /> -->
                <div class="my-5 prog">
                  <ul id="progressbar">
                    <li id="essay" class="step">
                      <div
                        :class="[
                          step == 1
                            ? 'active-circle'
                            : step > 1
                            ? 'active-circle'
                            : 'circle',
                        ]"
                      >
                        <!-- {{step>1?'✓':'1'}} -->
                        <!-- <img src="../static/image/profile.png" alt="Personal Profile" class="iconsF"> -->

                        <span class="mdi mdi-account-box"></span>
                      </div>
                      <h4
                        :class="[
                          step == 2
                            ? 'active-text'
                            : step > 1
                            ? 'active-text'
                            : 'inactive-text',
                        ]"
                      >
                        Personal Profile
                      </h4>
                    </li>
                    <li id="eligibility" class="step">
                      <div
                        :class="[
                          step == 2
                            ? 'active-circle'
                            : step > 2
                            ? 'active-circle'
                            : 'circle',
                        ]"
                      >
                        <!-- {{step>2?'✓':'2'}} -->
                        <!-- <img src="../static/image/graduated.png" alt="Education and Experience" class="iconsF"> -->

                        <span class="mdi mdi-cast-education"></span>
                      </div>
                      <h4
                        :class="[
                          step == 2
                            ? 'active-text'
                            : step > 2
                            ? 'active-text'
                            : 'inactive-text',
                        ]"
                      >
                        Education
                      </h4>
                    </li>
                    <li id="profile" class="step">
                      <div
                        :class="[
                          step == 3
                            ? 'active-circle'
                            : step > 3
                            ? 'active-circle'
                            : 'circle',
                        ]"
                      >
                        <!-- {{step>3?'✓':'3'}} -->
                        <!-- <img src="../static/image/essay.png" alt="Essays and Documents" class="iconsF"> -->
                        <span class="mdi mdi-tools"></span>
                      </div>
                      <h4
                        :class="[
                          step == 3
                            ? 'active-text'
                            : step > 3
                            ? 'active-text'
                            : 'inactive-text',
                        ]"
                      >
                        Work Experience
                      </h4>
                    </li>
                    <li id="awards " class="step">
                      <div
                        :class="[
                          step == 4
                            ? 'active-circle'
                            : step > 4
                            ? 'active-circle'
                            : 'circle',
                        ]"
                      >
                        <!-- {{step>4?'✓':'4'}} -->
                        <!-- <img src="../static/image/badge.png" alt="Essays and Documents" class="iconsF"> -->
                        <span class="mdi mdi-trophy-award"></span>
                      </div>
                      <h4
                        :class="[
                          step == 4
                            ? 'active-text'
                            : step > 4
                            ? 'active-text'
                            : 'inactive-text',
                        ]"
                      >
                        Awards and Honors
                      </h4>
                    </li>
                    <li id="awards" class="step">
                      <div
                        :class="[
                          step == 5
                            ? 'active-circle'
                            : step > 5
                            ? 'active-circle'
                            : 'circle',
                        ]"
                      >
                        <!-- {{step>5?'✓':'5'}} -->
                        <!-- <img src="../static/image/recommendation.png" alt="Essays and Documents" class="iconsF"> -->
                        <span class="mdi mdi-email-newsletter"></span>
                      </div>
                      <h4
                        :class="[
                          step == 5
                            ? 'active-text'
                            : step > 5
                            ? 'active-text'
                            : 'inactive-text',
                        ]"
                      >
                        Referee
                      </h4>
                    </li>
                    <li id="awards" class="step">
                      <div
                        :class="[
                          step == 6
                            ? 'active-circle'
                            : step > 6
                            ? 'active-circle'
                            : 'circle',
                        ]"
                      >
                        <!-- {{step>5?'✓':'5'}} -->
                        <!-- <img src="../static/image/recommendation.png" alt="Essays and Documents" class="iconsF"> -->
                        <span class="mdi mdi-book-open-outline"></span>
                      </div>
                      <h4
                        :class="[
                          step == 6
                            ? 'active-text'
                            : step > 6
                            ? 'active-text'
                            : 'inactive-text',
                        ]"
                      >
                        Essay
                      </h4>
                    </li>
                    <li id="awards" class="step">
                      <div
                        :class="[
                          step == 7
                            ? 'active-circle'
                            : step > 7
                            ? 'active-circle'
                            : 'circle',
                        ]"
                      >
                        <!-- {{step>5?'✓':'5'}} -->
                        <!-- <img src="../static/image/recommendation.png" alt="Essays and Documents" class="iconsF"> -->
                        <span class="mdi mdi-text-recognition"></span>
                      </div>
                      <h4
                        :class="[
                          step == 7
                            ? 'active-text'
                            : step > 7
                            ? 'active-text'
                            : 'inactive-text',
                        ]"
                      >
                        Additional Information
                      </h4>
                    </li>
                    <li id="request" class="step">
                      <div :class="[step == 8 ? 'active-circle' : 'circle']">
                        <!-- <img src="../static/image/information.png" alt="Awards and Honors" class="awards"> -->
                        <span class="mdi mdi-information"></span>
                      </div>
                      <h4
                        :class="[step == 8 ? 'active-text' : 'inactive-text']"
                      >
                        Preview
                      </h4>
                    </li>
                  </ul>
                  <v-row>
                    <div class="respStep">{{ respStep }}</div>
                    <div class="respS">{{ respS }}</div>
                  </v-row>
                  <client-only>
                    <nuxt />
                  </client-only>
                </div>
              </v-col>
            </v-row>
          </v-container>

          <v-bottom-sheet
            hide-overlay
            elevation="0"
            v-model="sheet"
            persistent
            :retain-focus="false"
            :no-click-animation="true"
          >
            <v-sheet class="text-center py-5" height="100px">
              <v-container>
                <form-bottom
                  class=""
                  :width="$vuetify.breakpoint.smAndDown ? '8rem' : '12rem'"
                  :showBlock="false"
                  :loading="loading"
                  :disabled="loading"
                  :showPrevious="step > 1 ? true : false"
                  :previousAction="previousAction"
                  :nextAction="nextAction"
                />
              </v-container>
            </v-sheet>
          </v-bottom-sheet>
          <!-- <bottom-navigation :width="$vuetify.breakpoint.smAndDown?'8rem':'12rem'" :showBlock="false" :showPrevious="step>1?true:false" :previousAction="previousAction" :nextAction="nextAction"
            :continueText="step<totalStep?'Continue':'Submit'" /> -->
        </v-main>
      </v-app>
    </client-only>
  </div>
</template>

<script>
import generalMixin from "@/mixins/general_mixin";
import form_mixin from "@/mixins/form_mixin";
import FormBottom from "../components/navigation/FormBottom.vue";
import BottomNavigation from "../components/navigation/BottomNavigation.vue";
import SideNavProfile from "../components/navigation/SideNavProfile.vue";
import NameAvatar from "../components/NameAvatar.vue";
export default {
  components: { FormBottom, BottomNavigation, SideNavProfile, NameAvatar },
  // middleware:['verify','app_guest', 'review', 'auth'],

  // auth:true,
  mixins: [generalMixin, form_mixin],
  data() {
    return {
      drawer: null,
      sheet: true,
      user_summary: {
        loanable_amount: 20000000,
        monthly_repayment: 500000,
        loan_tenure: 10,
      },
      user_menu: [
        //  {icon:"mdi-account-outline",title:'Dashboard',link:'/dashboard'},
        { icon: "mdi-logout", title: "Logout", link: "login" },
      ],
    };
  },
  computed: {
    respStep() {
      if (this.$route.path == "/profiling/") {
        return "1 of 8" + " ";
      } else if (this.$route.path == "/profiling/education") {
        return "2 of 8" + " ";
      } else if (this.$route.path == "/profiling/workExperience") {
        return "3 of 8" + " ";
      } else if (this.$route.path == "/profiling/awards") {
        return "4 of 8" + "   ";
      } else if (this.$route.path == "/profiling/letterofReference") {
        return "5 of 8" + "  ";
      } else if (this.$route.path == "/profiling/essay") {
        return "6 of 8" + "  ";
      } else if (this.$route.path == "/profiling/additionalInfo") {
        return "7 of 8" + "  ";
      } else if (this.$route.path == "/profiling/profile") {
        return "8 of 8" + "  ";
      } else return "welcome";
      // isLoggedIn(){
      //   let l = this.$store.state.auth_module.isLoggedIn;
      //   return l;
      // }
    },
    respS() {
      if (this.$route.path == "/profiling/") {
        return " Personal Profile";
      } else if (this.$route.path == "/profiling/education") {
        return " Education";
      } else if (this.$route.path == "/profiling/workExperience") {
        return "Work Experience";
      } else if (this.$route.path == "/profiling/awards") {
        return " Awards";
      } else if (this.$route.path == "/profiling/letterofReference") {
        return " Referee";
      } else if (this.$route.path == "/profiling/essay") {
        return "   Essay";
      } else if (this.$route.path == "/profiling/additionalInfo") {
        return "   Additional Information";
      } else if (this.$route.path == "/profiling/profile") {
        return "   Profile";
      } else return "welcome";
      // isLoggedIn(){
      //   let l = this.$store.state.auth_module.isLoggedIn;
      //   return l;
      // }
    },
  },
  methods: {
    user_menu_action(){
          this.$auth.logout()   
      },
    goHome() {
      this.$router.push("/");
    },
    previousAction() {
      this.goBackStep();
      //  switch(this.step){
      //   case 1:
      //           this.$router.push('/profiling')
      //     break;
      //   case 2:
      //     this.$router.push('/profiling')
      //     break;
      //   case 3:
      //    this.$router.push('/profiling/education')
      //     break;
      //   case 4:
      //   this.$router.push('/profiling/essay')
      //     break;
      // }
    },
    nextAction() {
      console.log(this.step);
      switch (this.step) {
        case 1:
          this.$nuxt.$emit("submit_personal_form", true);
          break;
        case 2:
          console.log("education main");
          this.$nuxt.$emit("submit_education_form", true);
          break;
        case 3:
          this.$nuxt.$emit("submit_experience_form", true);
          break;
        case 4:
          this.$nuxt.$emit("submit_award_form", true);
          break;
        case 5:
          // console.log("am ta 5")
          this.$nuxt.$emit("submit_reference_form", true);
          break;
        case 6:
          console.log("am ta 6");
          this.$nuxt.$emit("submit_essay_form", true);
          break;
        case 7:
          console.log("am ta 6");
          this.$nuxt.$emit("submit_additional_form", true);
          break;
        case 8:
          // console.log("am ta 5")
          this.$nuxt.$emit("submit_profile_form", true);

          break;
      }
    },
    goToPage(link) {
      this.$router.push(link);
    },
  },
  created() {
    this.$vuetify.theme.dark = false;
    this.$vuetify.theme.light = true;
    //  this.$store.dispatch("general/getAllStatesAction");
    // this.$store.dispatch("general/getAllFinanceOptionAction");
    // this.$store.dispatch("general/getAllPropertyTypeAction");
    // // this.$store.dispatch("profile/getProfileAction");
    // this.$store.dispatch("profile/prefillPersonalFormAction",this.user);
  },
  mounted() {},
};
</script>
<style lang="scss">
.white {
  background-color: #fff !important;
}
.theme--light.v-app-bar.v-toolbar.v-sheet {
  background-color: #fff !important;
}
.givme_mb {
  margin-bottom: 10rem;
}

/* Step progress bar */
/* progressbar */
#progressbar {
  display: flex;
  justify-content: center;
  margin-bottom: 30px;
  overflow: hidden;
  // color: lightgrey;
  width: 100%;

  @media (min-width: 220px) and (max-width: 640px) {
    display: none;
  }
  @media (min-width: 641px) and (max-width: 768px) {
    display: none;
  }
  @media (min-width: 769px) and (max-width: 1024px) {
  }
}
#progressbar li {
  list-style: none;
  width: 25%;
}
.respStep {
  display: none;
  margin-bottom: 40px;
  margin-top: -15px;
  border: 1px solid transparent;
  border-radius: 10px;
  // background: #c71f40;
  // width: 100px;
  font-weight: 500;
  font-size: 20px;
  align-items: center;
  text-align: center;
  color: rgb(147, 143, 143);
  text-shadow: 2px 2px 4px rgb(201, 195, 195);
  // box-shadow: 2px 1px 5px 5px #fc9baf;

  @media (min-width: 220px) and (max-width: 640px) {
    display: block;
  }
  @media (min-width: 641px) and (max-width: 768px) {
    display: block;
  }
  @media (min-width: 769px) and (max-width: 1024px) {
    display: none;
  }
}
.respS {
  display: none;
  margin-bottom: 40px;
  margin-top: -12px;
  margin-left: 5px;
  border: 1px solid transparent;
  border-radius: 10px;
  // background: #c71f40;
  // width: 100px;
  font-weight: 300;
  font-size: 16px;
  align-items: center;
  text-align: center;
  color: rgb(147, 143, 143);
  text-shadow: 2px 2px 4px rgb(201, 195, 195);
  // box-shadow: 2px 1px 5px 5px #fc9baf;

  @media (min-width: 220px) and (max-width: 640px) {
    display: block;
  }
  @media (min-width: 641px) and (max-width: 768px) {
    display: block;
  }
  @media (min-width: 769px) and (max-width: 1024px) {
    display: none;
  }
}
.step {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
  // margin: 0 auto 5px auto;
  .circle {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background: #bdbdbd;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 2;
    @include app-font(normal, 800, 18px, 28px);
    color: #6e7191;
  }
  h4 {
    margin-top: 10px;
  }
  .inactive-text {
    @include app-font(normal, 500, 0.8rem, 1rem);
    color: #a0a3bd;
    letter-spacing: 0.02em;
    text-align: center;
  }
  .active-text {
    @include app-font(normal, 800, 0.8rem, 1rem);
    color: #0a1c44;
    letter-spacing: 0.02em;
    text-align: center;
  }
  .active-circle {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 2;
    @include app-font(normal, 800, 18px, 28px);
    color: #fff;
    background: #c71f40;
  }
}

.step::after {
  content: "";
  width: 100%;
  height: 2px;
  background: #a0a3bd;
  position: absolute;
  right: -50%;
  top: 20px;
  z-index: 0;
}
#request::after {
  content: none;
}
.awards {
  width: 20px;
  height: 20px;
  filter: grayscale(100%);
}
.iconsF {
  width: 20px;
  height: 20px;
  filter: grayscale(100%);
}
.log {
  margin: 0.5rem;
}
.welcome {
  margin: auto;
}
.menu {
  display: flex;
}
.logout {
  margin: auto;
  text-align: center;
  font-size: 18px;
  font-weight: 500;
  box-shadow: 5px 5px 5px #f5cbd4;
  border: 4px solid #fcf8f9;
  border-radius: 50px;
  cursor: pointer;
}
.v-btn--outlined {
  color: #c71f40;
  border: thin solid #c71f40;
}
.v-application .primary--text {
  color: #c71f40;
  caret-color: #c71f40;
}

@media (min-width: 220px) and (max-width: 640px) {
}
@media (min-width: 641px) and (max-width: 768px) {
}
@media (min-width: 769px) and (max-width: 1024px) {
}
</style>

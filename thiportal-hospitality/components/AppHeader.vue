<template>
  <div>
       <v-app-bar elevation="1"
      app
      color="white"

    >
    <v-container>
      <div class="d-flex justify-center" v-if="$vuetify.breakpoint.smAndDown">
             <v-toolbar-title ><v-img src="/logo/new_logo.png" max-height="80" max-width="150"></v-img></v-toolbar-title>
      <v-spacer v-show="$vuetify.breakpoint.smAndDown"></v-spacer>
       <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
      </div>
      <div class="d-flex justify-center"  v-if="$vuetify.breakpoint.mdAndUp">
          <v-toolbar-title ><v-img src="/logo/new_logo.png" max-height="80" max-width="150"></v-img></v-toolbar-title>
          <v-spacer></v-spacer>
          <div v-if="!isLoggedIn">
                 <v-btn @click="goToPage('/login')"
                  class="ma-2 auth_btn"
                  outlined
                  color="secondary"
                >
                  Login
                </v-btn>
                 <v-btn @click="goToPage('/')"
                  class="ma-2 auth_btn" color="secondary" style="color:#fff !important;"
                >
                  Register
                </v-btn>
          </div>
          <profile-avatar v-if="isLoggedIn"></profile-avatar>

      </div>


    </v-container>


    </v-app-bar>
  </div>
</template>

<script>
  export default {
      methods:{
          goToPage(link){
      this.$router.push(link);
    }
      }
  }
</script>

<style lang="scss" scoped>

</style>

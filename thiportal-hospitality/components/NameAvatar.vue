<template>
  <v-menu offset-y>
    <template v-slot:activator="{ on, attrs }">
      <v-btn text color="primary" size="40" v-bind="attrs" v-on="on"
        >
        <span class=" ">Hello {{formdata.firstname}}</span>
         <v-icon>mdi-chevron-down</v-icon>
      </v-btn>
    </template>
    <v-list>
      <v-list>
        <v-list-item
          v-for="(item, i) in menu"
          :key="i"
          @click="user_menu_action(item.link)"
        >
          <v-list-item-title
            ><v-icon>{{ item.icon }}</v-icon>
            {{ item.title }}</v-list-item-title
          >
        </v-list-item>
      </v-list>
    </v-list>
  </v-menu>
  <!-- <v-menu bottom origin="center center" transition="scale-transition" class="profile_icon">
          <template v-slot:activator="{ on }">
            {{user.name}}
            <v-btn icon v-on="on" outlined class="mr-5 ml-5" >
            <v-icon size="30">mdi-account</v-icon>
            </v-btn>
          </template>

          <v-list>
            <v-list-item
              v-for="(item, i) in user_menu"
              :key="i"
              @click="user_menu_action(item.link)"
            >
              <v-list-item-title ><v-icon >{{item.icon}}</v-icon> {{ item.title }}</v-list-item-title>
            </v-list-item>
          </v-list>
    </v-menu> -->
</template>
<script>
import general_mixin from "@/mixins/general_mixin";
export default {
  name: "Avatar",
  mixins: [general_mixin],
  props: {
    menu: { type: Array },
  },
  data() {
    return {
      firstname: "",
    };
  },
  computed: {
    // firstname: {
    //   get() {
    //     let r = this.$store.state.portal.profile.firstname;
    //     this.personal_form.firstname = r;
    //     return r;
    //   },
    //   set(val) {
    //     this.personal_form.firstname = val;
    //     let t = { key: "firstname", value: val };
    //     this.$store.commit("portal/setProfileKey", t);
    //   },
    // },
    formdata() {
      let t = this.$store.state.portal.profile;
      return t;
    },
  },
  methods: {
    user_menu_action(link) {
      this.$router.replace("/login");
      this.$auth.logout();
      console.log(link);
      // if (link == "login") {
      // this.$auth.logout();
      //   // this.$store.dispatch("logout").then(()=>{
      //   // this.$router.replace("/login");
      //   // // })
      // } else {
      //   this.$router.push(link);
      // }
    },
  },
};
</script>

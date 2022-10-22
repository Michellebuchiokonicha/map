<template>
  <div>
    <div class="selectP">Select your prefered course</div>
    <v-row class="rw">
      <v-card
        v-for="(course, id) in courses"
        :key="id"
        :loading="loading"
        class="mx-auto my-12"
        max-width="374"
      >
      
        <template slot="progress">
          <v-progress-linear
            color="deep-purple"
            height="10"
            indeterminate
          ></v-progress-linear>
        </template>

        <img height="250" width="100%" :src="course.course_image" />

        <v-card-title class="title">{{ course.course_name }}</v-card-title>

        <v-card-text class="txt">
          <div class="my-4 text-subtitle-1">
            <span class="spanB">.</span> Advanced Certificate
          </div>
          <div class="my-4 text-subtitle-1">
            <span class="spanB">.</span> Intermediate Certificate
          </div>
          <div class="my-4 text-subtitle-1">
            <span class="spanB">.</span> Advanced Certificate
          </div>
        </v-card-text>

        <v-divider class="mx-4"></v-divider>

        <v-card-actions>
          <v-btn
            @click="courseApply(course.id)"
            class="apply"
            height="50"
            color="#fff !important"
            text
            >Apply
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-row>
  </div>
</template>
<script>
export default {
  // middleware:['is_loggedin'],
  name: "Courses",
  layout: "defaultCourse",
  data() {
    return {
      course: "cat",
      loading: false,
      selection: 3,
      selection2: 0,
      selection3: 1,
      selection4: 2,
      name_course: "",
    };
  },
  methods: {
    async courseApply(course_id) {
      this.$store.commit("portal/COURSE_ID", course_id);
      console.log(course_id, 'yes yes');
      this.$router.replace("/courses");
      return course_id;
    },

    editedStep(step) {
      if (step === 1) {
        this.goNextStep(step, "/profiling");
        this.updateEditedStep(true);
      } else if (step === 2) {
        this.goNextStep(step, "/profiling/education");
        this.updateEditedStep(true);
      }
    },

    ceStep() {
      alert("mimimi");
    },
    pickStep(step) {
      if (step === 1) {
        this.name = "mimi";
      } else if (step === 2) {
        this.name = "monks";
      }
    },
    chooseStep(step) {
      if (step === 1) {
        this.goNextStep(step, "/");
        ("Hotel");
        this.updateEditedStep(true);
        return "Hotel";
      } else if (step === 2) {
        ("Culinary");
        this.updateEditedStep(true);
        return "Room Division";
      } else if (step === 3) {
        ("Room Division");
        this.updateEditedStep(true);
        return "Culinary";
      } else if (step === 4) {
        ("Food and Administration");
        this.updateEditedStep(true);
        return "Food and Administration";
      }
      this.updateEditedStep(false);
    },

    retry() {
      this.$store.dispatch("resendCodeAction").then((res) => {
        let m = res.data.data;
        toast.success(m);
      });
    },
    async verifyMycode() {
      if (!this.$refs.verify_form.validate()) {
        return;
      }
      this.$router.push("/courses");
    },
    reserve() {
      this.loading = true;
      setTimeout(() => (this.loading = false), 2000);
    },
    fetchData() {
      this.$store.dispatch("portal/getCourses");
    },
    fetchPassport(){
          this.$store.dispatch("product/passportPhoto", this.product_form);
          }
    },
    created(){

      this.fetchData();
      this.fetchProduct();
  },
  computed: {
    saveCourseId: {
      get() {
        let r = this.$store.state.portal.profile.courses.id;
        this.courses = r;
        return r;
      },
      set(val) {
        this.courses = val;
        let t = { key: "courses", value: val };
        this.$store.commit("portal/setProfileKey", t);
      },
    },
    courses() {
      return this.$store.state.portal.profile.courses;
    },

    courseStep() {
      alert("yeyssss");
    },
    nameCourse: {
      get() {
        let r = this.$store.state.portal.profile.name;
        this.name = r;
        return r;
      },
      set(val) {
        this.name = val;
        let t = { key: "name", value: val };
        this.$store.commit("portal/setProfileKey", t);
      },
    },
    coursedata() {
      let t = this.$store.state.portal.profile;
      return t;
    },
    apply() {
      let hotel = document.getElementById("hotel");
      let room = document.getElementById("room");
      let culinary = document.getElementById("culinary");
      let food = document.getElementById("food");

      if (hotel) {
        return "Hotel";
      } else if (room) {
        return "Room Division";
      } else if (culinary) {
        return "Culinary";
      } else if (food) {
        return "Food and Beverage Services";
      }
    },
  },
  created() {
    this.fetchData();
  },
};
</script>
<style lang="scss" scoped>
.tool {
  align-items: center;
  justify-content: end;
  margin-left: 170px;
}
.showcase {
  gap: 50px;
  margin: 0 auto;
  padding: 50px;
  padding-left: 100px;
}
.details {
  flex: 1;
  width: 50%;
}
.detail {
  flex: 1;
}
a {
  color: #fff;
  text-decoration: none;
  box-shadow: 2px 1px 5px 5px solid #c71f40;
}
.spanB {
  font-size: 50px;
  font-weight: 900;
}
.title {
  background: #fffafb;
  border-radius: #c71f40;
  text-shadow: 2px 1px 5px 5px solid black;
}
.apply {
  background: #c71f40;
  align-items: center;
  justify-content: center;
  align-content: center;
  margin: auto;
  margin-bottom: 20px;
  width: 100px;
}
router-link {
  color: #fff;
  text-decoration: none;
}
.txt {
  height: 185px;
}
.selectP {
  font-size: 24px;
  font-weight: 500;
  text-align: center;
  position: sticky;
  color: rgb(127, 126, 126);
  padding-top: 20px;
  position: -webkit-sticky;
  position: sticky;
  cursor: all-scroll;
  font-family: "Roboto", sans-serif;
}
.routet {
  color: white;
}
</style>

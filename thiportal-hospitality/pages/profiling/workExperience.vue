<template>
  <div>
    <v-card outlined class="pa-8 givme_mb">
      <div class="text-center">
        <v-btn color="primary" dark @click="addexperience">
          Add Experience
        </v-btn>
        <modal
          :name="modalName"
          :fullscreen="false"
          width="600"
          title="Experience (If applicable)"
         
        >
          <template v-slot:content>
            <div>
              <v-form ref="experienceform">
                <v-text-field
                  v-model="work_form.work_company"
                  label="Company Name"
                  outlined
                  clearable
                  :rules="[rules.required]"
                ></v-text-field>
                <v-text-field
                  v-model="work_form.work_title"
                  label="Job Title"
                  outlined
                  clearable
                  :rules="[rules.required]"
                ></v-text-field>
                <v-text-field
                  v-model="work_form.work_description"
                  label="Job Description"
                  outlined
                  clearable
                  :rules="[rules.required]"
                ></v-text-field>
                <v-checkbox
                  v-model="work_form.is_current_work"
                  @change="current"
                >
                  <template v-slot:label @click="current">
                    I currently work here
                  </template>
                </v-checkbox>
                <v-text-field
                  v-model="work_form.work_start"
                  label=" Start Date"
                  outlined
                  clearable
                  for="start"
                  id="work-start"
                  type="date"
                  name="begin"
                  placeholder="dd-mm-yyyy"
                  value=""
                  min="1977-01-01"
                  max="2024-12-31"
                  :rules="[rules.required]"
                ></v-text-field>
                <v-text-field
                  v-model="work_form.work_end"
                  v-if="!toggleCurrentWork"
                  label=" End Date"
                  outlined
                  clearable
                  for="end"
                  id="work-end"
                  type="date"
                  name="end"
                  placeholder="dd-mm-yyyy"
                  value=""
                  min="1997-01-01"
                  max="2050-12-31"
                  :rules="[rules.required, fromDate]"
                ></v-text-field>

                <v-btn
                  class="addButton"
                  color="#fff"
                  type="button"
                  text
                  @click.prevent="addexp()"
                >
                  Done
                </v-btn>
              </v-form>
            </div>
          </template>
        </modal>
      </div>
      
      <div class="editExperience">
        <modal
      :name="editExperience"
      :fullscreen="false"
      width="600"
      title="Experience (If applicable)"
      >
      <template v-slot:content>
        <div>
          <v-form ref="experienceform">
            <v-text-field
            v-model="editedForm.work_company"
            label="Company Name"
            outlined
            clearable
            :rules="[rules.required]"
            ></v-text-field>
            <v-text-field
            v-model="editedForm.work_title"
            label="Job Title"
                  outlined
                  clearable
                  :rules="[rules.required]"
                ></v-text-field>
                <v-text-field
                  v-model="editedForm.work_description"
                  label="Job Description"
                  outlined
                  clearable
                  :rules="[rules.required]"
                ></v-text-field>
                <v-checkbox
                  v-model="editedForm.is_current_work"
                  @change="current"
                >
                <template v-slot:label @click="current">
                    I currently work here
                  </template>
                </v-checkbox>
                <v-text-field
                  v-model="editedForm.work_start"
                  label=" Start Date"
                  outlined
                  clearable
                  for="start"
                  id="work-start"
                  type="date"
                  name="begin"
                  placeholder="dd-mm-yyyy"
                  value=""
                  min="1977-01-01"
                  max="2024-12-31"
                  :rules="[rules.required]"
                ></v-text-field>
                <v-text-field
                  v-model="editedForm.work_end"
                  v-if="!toggleCurrentWork"
                  label=" End Date"
                  outlined
                  clearable
                  for="end"
                  id="work-end"
                  type="date"
                  name="end"
                  placeholder="dd-mm-yyyy"
                  value=""
                  min="1997-01-01"
                  max="2050-12-31"
                  :rules="[rules.required, fromDate]"
                ></v-text-field>
                <v-btn
                  class="addButton"
                  color="#fff"
                  type="button"
                  text
                  @click.prevent="editexperience()"
                >
                  Update
                </v-btn>
          </v-form>
        </div>
      </template>
    </modal>
      </div>
     <div
        v-for="(expr, index) in workExperience"
        :key="index"
        class="eduItem"
      >
        <div class="wrapper-preview">
          <div class="top-border-text">
            {{ index + 1 }}
          </div>

          <v-btn
            @click.prevent="deleteExp(index)"
            class="top-btn"
            depressed
            dark
          >
            <v-icon size="25">mdi-delete</v-icon></v-btn
          >
          <v-btn @click.prevent="editExp(expr)" class="top-btn" depressed dark>
            <v-icon size="25">mdi-pencil</v-icon></v-btn
          >
          <div class="text-box" id="textBox">
            <div class="text-content">
              <div class="title">Company Name</div>
              <div class="text">{{ expr.work_company }}</div>
            </div>
            <div class="text-content">
              <div class="title">Job Title</div>
              <div class="text">{{ expr.work_title }}</div>
            </div>
            <div class="text-content">
              <div class="title">Job Description</div>
              <div class="text">{{ expr.work_description }}</div>
            </div>
            <div class="text-content">
              <div class="title">Start Date</div>
              <div class="text">{{ expr.work_start }}</div>
            </div>
            <div class="text-content" v-if="is_current_work">
              <div class="title">End Date</div>
              <div class="text">{{ expr.work_end }}</div>
            </div>
            <div class="text-content" v-if="!is_current_work">
              <div class="title">Till date</div>
            </div>
          </div>
        </div>
      </div>
    </v-card>
  </div>
</template>

<script>
import general_mixin from "@/mixins/general_mixin";
import form_mixin from "@/mixins/form_mixin";
import Modal from "../../components/Modal.vue";
export default {
  components: { Modal },
  mixins: [general_mixin, form_mixin],
   middleware:['review'],
  layout: "form",
  data() {
    return {
      fullscreen: { type: Boolean, default: false },
      selected_experience:{},
      show_edit: false,
      
      modalName: "experience",
      editedExp: null,

      modalForce: "force",
      showModal: false,
      editExperience: "editExperience",
      work_form: {
        work_company: "",
        work_title: "",
        work_description: "",
        work_start: "",
        work_end: "",
        is_current_work: false,
      },
      
      editedIndex: -1,
      editedForm:{
        work_company: "",
        work_title: "",
        work_description: "",
        work_start: "",
        work_end: "",
        is_current_work: false,
      },
        editedExp: null,
      formrules: {
        from_date: function (value) {
          let till_date = this.work_form.work_end;
          if (value > till_date) {
            return false;
          }
        },
       },
        tillDate() {
          var fromDate = document.getElementById("work-start");
          var tillDate = document.getElementById("work-end");
          if (fromDate > tillDate) {
            alert("end date must be greater than start date");
            return false;
          }
        },
        textBox() {
          if (this.work_experience === 0) {
            return false;
          }
        },
    };
  },
  watch: {
    "$store.state.portal.profile.step": function () {
      console.log("step changes 1");
      //  this.prefillForm();
    },
  },
  computed: {
    workExperience: {
      get() {
        let t = this.$store.state.portal.work_experience;
        return t;
      },
    },
    toggleCurrentWork() {
      return (this.work_form.is_current_work = !this.work_form.is_current_work);
    },

    fromDate() {
      let from_date = this.work_start;
      let till_date = this.work_end;
      if (from_date > till_date) {
        return "end date must be greater than start date" + false;
      }
    },
  },
  methods: {
    current() {
      this.work_form.is_current_work = !this.work_form.is_current_work;
    },
    addexperience() {
      this.$nuxt.$emit(this.modalName, true);
    },
    addexp() {
      this.showModal = false;
      
      // this.$nuxt.$emit(this.modalName, false);
      if (!this.$refs.experienceform.validate()) {
        return;
      }
      
      let t = this.work_form;
      if (!this.show_edit) {
        this.work_form.id = (Math.random() + 1).toString(36).substring(7);

      let t = this.work_form;
      this.$store.commit("portal/ADD_EXPERIENCE", t);
      }else{
      let t = this.work_form;
      this.$store.commit("portal/EDIT_EXPERIENCE", t);
      this.show_edit = true;

    }
    this.$nuxt.$emit(this.modalName, false);

      this.work_form = {
        id: "",
        work_company: "",
        work_description: "",
        work_title: "",
        work_start: "",
        work_end: "",
        is_current_work: false,
      };
      this.show_edit=false
      this.$refs.experienceform.reset();
      return;
    },
    deleteExp(index) {
       this.$store.commit("portal/DELETE_EXPERIENCE", index);
      this.$nuxt.$emit(this.modalName, false);
    },
    alldelExp(index) {
      var textIn = this.exprs[index] > 1;
      if (!textIn) {
        return "nonono";
      }
    },
    editexperience(){
      this.$store.commit("portal/EDIT_EXPERIENCE", this.editedForm);
      this.$nuxt.$emit(this.editExperience, false);
    },
    editExp(expr) {
      this.editedIndex = this.workExperience.indexOf(expr);
      this.editedForm = Object.assign({}, expr);
      this.$nuxt.$emit(this.editExperience, true);

      // this.work_form.work_company = expr.work_company;
      // this.work_form.work_description = expr.work_description;
      // this.work_form.work_title = expr.work_title;
      // this.work_form.work_start = expr.work_start;
      // this.work_form.work_end = expr.work_end;
      
      
      //  this.workCompany = expr.name;
      //  this.workTitle = expr.DELETEftitle;
      //  this.workDescription = expr.description;
      //  this.workStart = expr.attendedFrom;
      //  this.workEnd = expr.attendedTill;
      // this.work_form = {
      //   id: "",
      //   work_company: expr.work_company,
      //   work_description: expr.work_description,
      //   work_title: expr.work_title,
      //   work_start: expr.work_start,
      //   work_end: expr.work_end,
      // };
      // this.editedExp = expr;
      // this.showModal = true;
      // this.$nuxt.$emit(this.modalName, true);
    },
    currentWork() {
      var end = document.getElementById("work-end");
      if (end.style.display === "none") {
        end.style.display = "block";
      } else {
        end.style.display = "none";
      }
      return end;
    },
    prefillForm() {
      let r = this.$store.state.auth.user;
      let t= this.$store.state.portal.profile.work_experience
      console.log(r.data);
      this.$store.commit("portal/SET_PROFILE_FROM_API", r.data);
      this.$store.dispatch("portal/getProfileAction")
      // this.$store.commit("portal/SET_PROFILE_FROM_API", t.data);
      // this.$store.dispatch("portal/setProfile", r.data);
    },
    fetchData() {
      this.$store.dispatch("portal/getProfileAction")
      // this.$store.dispatch("portal/setProfile");
      // this.$store.dispatch("portal/getCourses");
    },
    async submitForm() {
      // this.loading = true;
      let work_experience = await this.$store.state.portal.work_experience;
      this.$store.commit("portal/SET_PROFILE_STEP", 3);
      let submit_data = { title: "work_experience", value: work_experience };
      this.$store.dispatch("portal/getProfileAction")
      let res = await this.$store.dispatch(
        "portal/setProfileAction",
        submit_data
      );
      if (res) {
        this.loading = false;
        this.goNextStep(4, "/profiling/awards");
        this.$router.push("/profiling/awards");
        this.updateEditedStep(false);
      } else {
        this.loading = false;
      }
    },
  },
  created() {
    this.$store.commit("portal/GO_TO_STEP", 3);
    this.prefillForm();
    this.fetchData();
  },
  mounted() {
    this.$nuxt.$on("submit_experience_form", (param) => {
      if (param) {
        this.submitForm();
      }
    });
  },
  unmounted() {
    this.$refs.experienceform.reset();
  },
};
</script>

<style lang="scss" scoped>
.details {
  font-size: 20px;
  font-weight: 600;
  line-height: 80px;
  color: rgb(225, 81, 81);
}
.detail {
  line-height: 50px;
}
.tab {
  width: 900px;
  margin: auto;
  border-collapse: collapse;
  border-radius: 55px;
  table:hover {
    border: 1px solid rgb(234, 144, 144);
  }
  table,
  th,
  td {
    border: 4px solid rgb(234, 144, 144);
    border-radius: 20px;
    color: gray;
    border-collapse: collapse;
    width: fit-content;
    font-family: sans-serif;
  }
  td:hover {
    border: 1px solid rgb(234, 144, 144);
  }
  table:hover {
    border: 1px solid rgb(234, 144, 144);
  }
  th:hover {
    border: 1px solid rgb(234, 144, 144);
  }
  th {
    height: 30px;
    font-weight: 300;
    font-size: 16px;
  }
  td {
    height: 100px;
    margin: auto;
    text-align: center;
    font-weight: 600;
    font-size: 17px;
    color: rgb(37, 35, 35);
  }
}
.deserve {
  line-height: 30px;
  padding-bottom: 20px;
  padding-top: 10px;
  font-weight: 500;
}
.data {
  align-content: center;
  justify-content: center;
  text-align: center;
  align-items: center;
}
.save {
  border: 2px solid transparent;
  box-shadow: 2px 1px 5px 5px rgb(255, 220, 220);
  border-radius: 10px;
  width: 100%;
  height: 30rem;
  line-height: 20px;
  padding: 30px;
  padding-top: 50px;
  margin: auto;
  justify-content: center;
  display: flex;
  flex-wrap: wrap;
}
.eduItem {
  margin-bottom: 10px;
  margin-top: 50px;
}
.val {
  padding: 10px;
  color: black;
  flex-direction: row;
  display: flex;
  gap: 50px;
  align-content: center;
  justify-content: center;
  text-align: center;
  align-items: center;
  margin: 0 auto;
  .valData {
    font-size: 24px;
    font-weight: 700;
  }
  .till {
    flex: 1;
    width: 6.5rem;
  }
  .from {
    flex: 1;
    width: 6.5rem;
  }
  .state {
    flex: 1;
    width: 6.5rem;
  }
  .count {
    flex: 1;
    width: 6.5rem;
  }
  .dat {
    flex: 1;
    width: 6.5rem;
  }
}
.buttonNew {
  background: #c71f40;
  padding: 20px;
  line-height: 20px;
  border-radius: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 2px 1px 5px 5px #e0e7fa;
  margin-bottom: 40px;
  margin-top: 20px;
  cursor: pointer;
}
.buttonNew:hover {
  box-shadow: 2px 1px 5px 5px #abbce4;
}
.editExp {
  display: flex;
  padding-left: 20px;
  margin-top: 80px;
  gap: 20px;
  justify-content: center;
  align-items: center;
}
.addButton {
  background-color: #c71f40;
  // color: #fff;
}
.del {
  background-color: #c71f40;
  box-shadow: 2px 1px 5px 5px #e2e6f4;
  cursor: pointer;
}
.change {
  background: #c71f40;
  box-shadow: 2px 1px 5px 5px #e2e6f4;
  cursor: pointer;
}
.change:hover {
  box-shadow: 2px 1px 5px 5px #abbce4;
}
.del:hover {
  box-shadow: 2px 1px 5px 5px #abbce4;
}
.text-center {
  margin: auto;
  margin-bottom: 40px;
}
.modalForce {
  font-weight: 100;
  font-size: 10px;
}
.forceBtn {
  color: #c71f40;
  padding-top: 0px;
  align-items: center;
  display: flex;
  justify-content: center;
  text-align: center;
  margin: auto;
  display: flex;
  font-weight: 700;
  font-size: 24px;
  cursor: pointer;
}
.forceBtn:hover {
  color: #18174c;
}
.forceForm {
  background-image: linear-gradient(180deg, #eeedf9, #f9edef);
}
.forceForm:hover {
  background-color: #232265;
  background-image: linear-gradient(180deg, #fbe6e9, #e8e7fa);
}
.forceDiv {
  background-color: #fbe6e9;
}
.forceTemplate {
  background-color: #fbe6e9;
}
.text {
  width: 100%;
  height: 90%;
}
</style>
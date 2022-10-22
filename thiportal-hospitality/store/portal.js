import api, { portalApis } from '../services/api'
export const state = () => ({

  education:[],
  //  index:0,
  educ: "",
  school_name: "",
  editedEduc: null,
  show_edit: false,
  work_experience:[],
  editedExp:null,
  profile: {
     course_id: "",
        checkbox: false,
        firstname:"",
        lastname:"",
        middlename:"",
        gender:"",
        dob: "",
        phone:"",
        passport: null,
        altphone: "",
        alt_phone: "",
        secondary_email:"",
        email:"",
        email_verified_at: "",
        // want_scholarship: null,
        // scholarship_reason: null,
        step: 1,
        id: "",
        image_form: "",

        courses:[],

        course_name: "",
        step: 1,
        education: [],
        
        id: "",
        school_name: "",
        school_country: "",
        course_of_study: "",
        education_level: "",
        school_city: "",
        start_date: "",
        end_date: "",

        work_company: "",
        work_title: "",
        work_description: "",
        work_start: "",
        work_end: "",

        resume: null,
        video: null,

        referee:{
            id: "",
            referee_name: "",
            referee_email: "",
            relationship_year: "",
            referee_phone: "",
            referee_organization: "",
            referee_profession: "",
      },
      referee_letter:"",

      thi_factor:"",
      decision_factor:"",
      personal_statement:"",
      additional_info: {
        id: "",
        has_health_issue: null,
        additional_health: "",
        additional_biography: "",
        additional_learn: "",
        additional_institution: "",
        additional_father: "",
        additional_flevel: "",
        additional_higher: "",
        additional_mother: "",
        additional_mlevel: "",
        additional_factors: "",
        additional_excel: "",
      },
      is_completed:0,
        editing: '',
        name: '',
        is_verified: 0,
        last_login_at: "",
        last_login_ip: "",
        slug: "",
        created_at: "",
        updated_at: "",

              school_name: "",


              id: "",
              award_received: "",
              want_scholarship: "",
              scholarship_reason: "",
              resume: "",
              video: "",
              yesNoption:"",

          work_company: '',
          work_title: '',
          work_description: '',
          work_start: '',
          work_end: '',
          editedExp: null,
          work_experience:[],

          // reference_name: '',
          // reference_email: '',
          // reference_code: '',
          // reference_phone: '',
          // reference_org: '',
          // reference_desig: '',
          // reference_ref: '',
          application_no: "",


                country_code: '',
                areaCodes: null,
                dialCode: "31",
                iso2: "NL",
                name: "",
                priority: 0
   },

   formStep: 1,
   step:1,
   totalStep: 8,
   step_is_edited:false,
   step_chosen:false,
   saved_data: ''
})
export const mutations = {
  GO_TO_STEP(state, payload) {
      state.formStep = payload;
  },
  SET_PROFILE_STEP(state,payload){
    state.profile.step = payload
    if(payload==state.totalStep){
      state.profile.is_completed = 1;
    }
  },
  EDITING_EDUCATION(state,payload){
    state.school_name = payload.school_name;
  },
  EDIT_EDUCATION(state,payload){
   state.education = state.education.map(e => e.id !==payload.id ? e :payload)
  
  },
  EDIT_EXPERIENCE(state,payload){
    state.work_experience = state.work_experience.map(e => e.id !==payload.id ? e :payload)
    // let editItem=  state.work_experience.splice(payload, 1, i);
    // return editItem
  },
  ADD_EDUCATION(state,payload){
    state.education = state.education || []
    state.education.push(payload)

  },
  ADD_EXPERIENCE(state,payload){
    state.work_experience = state.work_experience || [];
    state.work_experience.push(payload)
  },
  ADD_REFEREE(state,payload){
    state.profile.referee = payload
   
  },
  ADD_ADDITIONAL(state,payload){
    state.profile.additional_info = payload
  },
  ADD_EDUCATION_TO_PROFILE(state,payload){
    state.profile.education = payload;
  },
  ADD_WORK_EXPERIENCE_TO_PROFILE(state,payload){
    state.profile.work_experience = payload;
  },
  SET_PROFILE_FROM_API(state,payload){
    state.profile = payload;
    state.education = payload.education;
    state.work_experience = payload.work_experience;
    console.log(state.profile.course_id)
  },
  SET_PASSPORT(state,payload){
    payload =state.profile.passport
    let formData = new FormData();
    formData.append('passport', payload)
   console.log(formData)
  },

  SET_EDUCATION_FROM_API(state,payload){
    state.profile.education = payload.education;

  },
  DELETE_EDUCATION(state, payload){
    console.log('delete')
         state.education.splice(payload, 1);
        // state.education = state.education.filter((educ) => educ.payload !=payload);
  },
  DELETE_EXPERIENCE(state, payload){
    state.work_experience.splice(payload, 1);
   // state.work_experience.splice(payload.index, 1);
 
 },
  IS_COMPLETED(state, payload){
    state.profile.is_completed = payload
  },
  //==============================
  ALL_COURSES(state, payload){
    state.profile.courses= payload
   },
   GET_EDUCATION(state, payload){
    state.profile= payload
   },
    COURSE_ID(state,payload){
      state.profile.course_id = payload;
    },

  EMAIL(state, payload){
    state.profile.email = payload
  },
  COURSE_NAME(state, payload){
    state.profile.course_name = payload;
  },
  GET_PROFILE(state,payload){
    state.profile = payload
    state.profile.courses = payload
    state.profile.email = payload
  },
  REGISTER(state, payload) {
    state.auth.name = payload.name;
    state.auth.email = payload.email;
    state.auth.password = payload.password;
   },
  REGISTER_SUCCESS(state, payload) {
  state.status = {};
  },
  REGISTER_FAILURE(state, error) {
  state.status = {};
  },
  UPDATE_USER(state, payload) {
    state.profile.step = payload
},
UPDATE_PROFILE(state, payload) {
  state.profile = payload
},

  FORM_STEP(state, payload) {
      if (state.formStep < state.totalStep) {
        state.formStep = payload
      }
    },
  GO_TO_STEP(state, payload) {
      state.formStep = payload;
  },
  GO_BACK_STEP(state,payload){
      if(state.formStep>1){
        state.formStep--;
      }
  },
  STEP_IS_EDITED(state, payload){
    state.step_is_edited = payload;
  },
  STEP_CHOSEN(state, payload){
    state.step_chosen = payload;
  },
  SAVED_DATA(state, payload){
    state.saved_data = payload;
  },
  setProfileKey(state,payload){
    state.profile[payload.key] = payload.value;
    // console.log(state.profile)
  },
setProfile(state,payload){
  let ob = Object.entries(payload);
 for (const [key, value] of ob) {
   if (key in state.profile) {
     state.profile[key] = value
   }
 }
},

ADD_EDUC(state, educ){
console.log(educ, 'cap')

  // state.profile.education = [{name: educ, country: educ}, ...state.profile.education]
  state.profile.education.push({ name: state.profile.name_educ,
    country:state.profile.country_educ, state:state.profile.state_educ, study:state.profile.study_educ,
    degree:state.profile.degree_educ,attendedFrom: state.profile.from_educ, attendedTill: state.profile.till_educ});
  if(state.profile.editedEduc === null){

} else{
  // state.profile.education[state.profile.editedEduc].name =state.profile.name_educ;
  // state.profile.education[state.profile.editedEduc].country =state.profile.country_educ;
  // state.profile.education[state.profile.editedEduc].study =state.profile.study_educ;
  // state.profile.education[state.profile.editedEduc].degree =state.profile.degree_educ;
  // state.profile.education[state.profile.editedEduc].state =state.profile.state_educ;
  // state.profile.education[state.profile.editedEduc].attendedFrom =state.profile.from_educ;
  // state.profile.education[state.profile.editedEduc].attendedTill =state.profile.till_educ;

  educ.name = state.profile.name_educ
  educ.country = state.profile.country_educ
  educ.state = state.profile.state_educ
  educ.study = state.profile.study_educ
  educ.attendedFrom = state.profile.from_educ
  educ.attendedTill = state.profile.till_educ
  // state.profile.editedEduc = null;
 }

 state.profile.name_educ = '';
 state.profile.country_educ = '';
 state.profile.state_educ = '';
 state.profile.from_educ = '';
 state.profile.till_educ = '';
 state.profile.study_educ = '';
 state.profile.degree_educ = '';

 state.profile.form = false
// this.$store.commit('includedEducs', this.educTotal)
},

ADD_EXP(state, expr){
  // state.profile.education = [{name: educ, country: educ}, ...state.profile.education]
  if(state.editedExp === null){
  state.work_experience.push({ name: state.profile.work_company,
  title:state.work_title, description: state.work_description,
  attendedFrom: state.work_start, attendedTill: state.work_end});
} else{
  // state.profile.work_experience[state.profile.editedExp].name =state.profile.work_company;
  // state.profile.work_experience[state.profile.editedExp].title =state.profile.work_title;
  // state.profile.work_experience[state.profile.editedExp].description =state.profile.work_description;
  // state.profile.work_experience[state.profile.editedExp].attendedFrom =state.profile.work_start;
  // state.profile.work_experience[state.profile.editedExp].attendedTill =state.profile.work_end;

  // state.profile.editedExp = null;

  expr.name = state.work_company
  expr.title = state.work_title
  expr.description = state.work_description
  expr.attendedFrom = state.work_start
  expr.attendedTill = state.work_end
  state.editedExp = null;
  // state.profile.checkbox = true;
 }

 state.profile.work_company = '';
 state.profile.work_title = '';
 state.profile.work_description = '';
 state.profile.work_start = '';
 state.profile.work_end = '';
 state.profile.checkbox = false;

 state.profile.form = false
},
}

export const actions = {

  async register({commit}, form) {
    let res = await portalApis.register(this.$axios,form)
    let p = res.data
    commit("REGISTER", p)
    return res;
  },
  async getCourses({commit}){
    let res = await portalApis.getAllCourses(this.$axios)

    let p = res.data
    commit('ALL_COURSES', p);
    return res
  },
  async getFileAction({commit},  formData){
    let res = await portalApis.getProfile(this.$axios, formData)
    let p = res.data
    // commit("setProfile",p);
     commit("SET_PROFILE_FROM_API",p);
    //  commit("GET_PROFILE", p);
      return res;
  },
  async getEducation({commit}){
    let res = await portalApis.getProfile(this.$axios)

    let p = res.data
    commit('GET_EDUCATION', p)
  },
  // async getProfile({commit}){
  //   let res = await portalApis.getProfile(this.$axios)
  //   let p = res.data
  //   commit('GET_PROFILE',p)
  //   return res;
  // },
  // async getProfile({commit}, ref){
  //   let res = await portalApis.getProfile(this.$axios, ref)
  //   let p = res.data
  //   commit("GET_PROFILE",p);
  //     return res;
  // },
  async setUploadAction({commit}, payload){
    let form = state.profile;
     let formData = new FormData();
     for(let [key,value] of Object.entries(payload)){
      formData.append(key,value);
     }
     console.log(formData)
    // return;
    let res = await portalApis.updateProfile(this.$axios,formData,form)
    let p = res.data
    console.log(p);
    commit("SET_PROFILE_FROM_API",p);
      return res;
  },

  async setProfileAction({commit,state}, param){
    let title = param.title;
    let value = param.value;
    if(title=="education"){
       await commit("ADD_EDUCATION_TO_PROFILE",value);
    }else if (title=='work_experience'){
      await commit("ADD_WORK_EXPERIENCE_TO_PROFILE",value);
    }
     else if(title=='referee'){
        await commit("ADD_REFEREE",value);
     }
     else if(title=='additional_info'){
        await commit("ADD_ADDITIONAL", value);
      }
      let form = state.profile;
    //  let formData = new FormData(state.profile);
    //   formData.append('passport', state.passport)
    // // formData.append(key, value)
    //  console.log(formData)
    // return;
    let res = await portalApis.updateProfile(this.$axios,form)
    let p = res.data
    console.log(p);
    // return;
    commit("SET_PROFILE_FROM_API",p);
      return res;
  },
  async editProfileAction({commit,state}, param){
    let form = state.profile;
    await commit ("EDIT_EDUCATION", param)
  },

  async getProfileAction({commit}, param){
    let res = await portalApis.getProfile(this.$axios)
    let p = res.data
    // commit("setProfile",p);
     commit("SET_PROFILE_FROM_API",p);
    //  commit("GET_PROFILE", p);
      return res;
  },
//   async getProfileAction({ commit}) {
//     let res = await this.$axios.$get(api.updateProfile());
//     let p = res.data;
//     commit("GET_PROFILE", p);
//     return p;

// },

  async setProfileKey({commit,state}, param){
    let form = state.profile;
    console.log(form);
    let p = res.data
    commit("setProfilekey",p);
      return res;
  },

  async setGetProfileKey({commit,state}, param){
    let form = state.profile;
    console.log(form);
    // return;
    let res = await portalApis.getProfile(this.$axios)
    let p = res.data
    commit("setProfilekey",p);
      return res;
  },
  async changePass({commit}, ref){
    let res = await portalApis.changePassword(this.$axios)
    let p = res.data
    commit("CHANGE_PASSWORD",p);
      return res;
  },
  async forgotPass({commit}, ref){
    let res = await portalApis.forgotPassword(this.$axios,ref)
    let p = res.data
    commit("FORGOT_PASSWORD", p);
  },

    // async getProfileAction({ commit}) {
    //     let res = await this.$axios.$get(api.updateProfile());
    //     let p = res.data;
    //     commit("GET_PROFILE", p);
    //     return p;

    // },
    async formStepAction({
      commit
    }, step) {
      commit("FORM_STEP", step);

    },

}
export const getters = {
  counterSquared(state){
    return state.counter * state.counter
},
}
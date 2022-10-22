import moment from "moment";
export default{

  data(){
    return{
      yesNoOption: [{
        text: 'Yes',
        value: 1
      }, {
        text: 'No',
        value: '0'
      }],
       rules: {
           required: value => !!value || "Required.",
           passwordCounter: value => value.length >= 6 || "Password cannot be less than 6 characters",
           phoneCounter: value => {
            const phony = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
            return phony.test(value) || "Invalid Phone number.";
           },
           wordString: value => {
            if(value !== "" || value !==  null){
                const wordStr = value.split(' ');
                if(wordStr.filter(word => word !== '').length > 300){
                  return 'words must be a maximum of 300'
                }
            }

           },
           counter: value => value.length <= 20 || "Max 20 characters",
           pin:  value  => (value && value.length==6)|| 'Enter six digit sent to your mail',
           email: value => {
             const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
             return pattern.test(value) || "Invalid e-mail address.";
           },
           passwordValid: value => {
            const valid = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;
            return valid.test(value) || "Password must include letters, numbers and special characters"
           },
           words: value => !value || value.length < 300 && value.length > 10 || 'Words must be at least 300',
           file:value => !value || value.size < 100000 || 'file size should be greater than 1 MB!',
           fileR:value => !value || value.size < 100000 || 'file size should be greater than 1 MB!',

           from_date:function(value){
            let from_date = new Date(value);
            let till_date = this.tillEduc;
            if(from_date > till_date){
              'Date must be less than the finish date'
            }
           },
           word_string:function(value){
            if(value != "" || value !=  null){
              let wordStr = value.split(' ');
            if(wordStr.filter(word => word !== ' ').length > 300){
              'words must be a maximum 300'
            }
            }

           },

           till_date:function(value){
            let from_date = new Date(value);
            let till_date = this.tillEduc;
            if(from_date > till_date){
              till_date = !till_date
               alert('end date must be greater than start date')
               return false
            }
           },
           TillDate(){
            // let from_date = new Date(value);
            // let till_date = this.tillEduc;
            // if(from_date > till_date) 'Date must be less than'
              var fromDate = document.getElementById('fromEduc');
        var tillDate = document.getElementById('tillEduc');

        if(fromDate > tillDate){
          alert('end date must be greater than start date')
          return false

          // return !fromDate
        }
           },

           before_date:function(value){
              let today = new Date();0
              let given_date = new Date(value);
              if(given_date > today){
                return 'Date can\'t be greater than today'
              }
           },
           after_date:function(value){
             let today = new Date();
             let given_date = new Date(value);
            if (given_date < today ) {
                 return 'Date cannot be below today'
              }

           },
           phone:function(value){
              return value.match(/\d/g).length === 11 || 'invalid phone number';
           },
           main_phone:function(value){
             let formats = "(999)9999-9999|999-9999-9999|99999999999";
             let r = RegExp("^(" +
               formats
               .replace(/([\(\)])/g, "\\$1")
               .replace(/9/g, "\\d") +
               ")$");
               return r.test(value) || "Invalid phone number";
           }
      },
      pagination: {
        links: '',
        total: '',
        count: '',
        path: '',
        currentPage: ''
      },
    }

  },
  computed: {
        loading(){
          let l = this.$store.state.app.isLoading;
          return l;
        },
       property_types() {
         return this.$store.state.general.property_types;
       },
       allStates() {
         let s = this.$store.state.general.states;
         return s;
       },
       allCities() {
         let s = this.$store.state.general.cities;
         return s;
       },
      ranks() {
            let s = this.$store.state.general.ranks;
            return s;
        },
      financeOptions() {
             return this.$store.state.general.finance_options
      },
      user(){
        let u = this.$store.state.auth.user;
        return u;
      },
      authStatus(){
          let u = this.$store.state.auth.loggedIn;
          return u;
      },
      getUserInitial() {
          // let u = this.$store.state.auth.user;
          // if(u !=null){
          //   return u.firstname.charAt(0) + u.lastname.charAt(0);
          // }
          return '';
        }
      },

    methods:{
     checkValueExist(v) {
       if (v) {
         return v;
       }
       return '-'
     },
      appLoading(status){
        this.$store.commit("app/IS_LOADING",status);
      },
       activateModal(event_name, value) {
         this.$nuxt.$emit(event_name, value)
       },
    capitalizeFirst(s) {
        if (typeof s !== "string") return "";
        return s.toLowerCase();
      },
      clearCommas(value) {
        return parseFloat(value.replace(/,/g, ''));
      },
      formatCurrency(value) {
        const formatted = Number(value).toLocaleString("en");
        if (formatted === '0') return value;
        else if (formatted === 'NaN') return '';
        return formatted;
      },
      fillPagination(data) {
        this.pagination.links = data.links;
        this.pagination.total = data.total
        this.pagination.count = data.to;
        this.pagination.path = data.path;
        this.pagination.currentPage = data.current_page
      },
      // apis calls
       stateChange(state_id) {
         this.$store.dispatch("general/getAllCitiesAction", state_id)
       },
      fetchCities(state_id) {
        this.appLoading(true)
        this.$store.dispatch("general/getAllCitiesAction", state_id).then((res) => {
          this.appLoading(false)
        });
      },
      mapPropertyTypeId(type){
        let t = this.property_types;
        let id ='';
        for(let i=0; i<= t.length;i++){
          let n = t[i];
           if (n.name == type) {
             id = n.id;
             break;
           }
        }
        return id;

      },
      compare(dateTimeA, dateTimeB) {
         var momentA = moment(dateTimeA, "DD/MM/YYYY");
         var momentB = moment(dateTimeB, "DD/MM/YYYY");
         if (momentA > momentB) return 1;
         else if (momentA < momentB) return -1;
         else return 0;
       }
    }
}

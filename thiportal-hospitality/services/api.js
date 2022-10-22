const portalApis = {
  register:(axios) =>{
    return axios.$post("/auth/register")
  },
  updateProfile:(axios, param)=>{
    return axios.$post('/update-profile',param)
  },
  getProfile:(axios)=>{
    return axios.$get('/profile')
  },
  deleteProfile:(axios, param)=>{
    return axios.$delete('/update-profile',param)
  },
  getAllCourses:(axios)=>{
    return axios.$get('/course/all')
  },
  changePassword:(axios,param)=>{
    return axios.$post('/change-password',param)
  },
  logOut:(axios,param)=>{
    return axios.$get('/logout')
  },
}
export {portalApis}

export default {

  register() {
    return "auth/register";
  },
  login() {
    return "auth/login";
  },
  forgotPassword() {
    return 'auth/forgot-password'
  },
  resendVerification() {
    return '/resend-verify-mail'
  },
  changePassowrdByForgot() {
    return '/change-password'
  },
  verifyAccount() {
    return '/verify-account-code'
  },
  getProfileInfo() {
    return 'auth/profile'
  },



  verifyUserEmail() {
    return 'verify-account-code'
  },
  resendCode() {
    return 'user/resend-code'
  },
  getUserProfile() {
    return "/profile"
  },
  updateProfileInfo() {
    return '/profile'
  },
  updateProfile() {
    return '/update-profile'
  },
  propertyBelowPrice(price) {
    return "general/property-below-price/" + price
  },
  propertiesSuggestion() {
    return "general/properties-suggestion"
  },
  allStates() {
    return "general/all-states"
  },
  allCitiesInState(state_id) {
    return "general/all-cities/" + state_id
  },
  allPaymentOption() {
    return "general/finance-option"
  },
  allPropertyTypes() {
    return "general/all-general-properties-types"
  },
  policeRanks() {
    return "general/ranks"
  },

  saveUserRequest() {
    return "user/property-request"
  },
  //dashboard
  userMortgageStatus() {
    return "user/get-user-current-mortgage"
  },
  userMortgageList() {
    return "user/user-mortgage-status"
  },
  userMortgageDetail(slug) {
    return "user/user-mortgage-detail/" + slug
  },
  userDocumentCount() {
    return "user/document-count"
  },
  userPropertyRequest() {
    return "user/get-user-request"
    // return "user/user-property-request"
  },
  userFileList() {
    return "user/user-files"
  },
  userUploadFile() {
    return "user/user-upload-file"

  },
  userUploadFileFromClient() {
    return "user/user-upload-file-client"

  },
  userDeleteFile(id) {
    return "user/user-delete-file/" + id
  },
  getUserRequest() {
    return "user/get-user-request";
  },
  userApplyForMortgage() {
    return "user/apply-mortgage";
  },
  userAgreeToMortgage() {
    return "user/agree-to-terms";
  }
}

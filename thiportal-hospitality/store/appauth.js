import api from '../services/api'
export const state=()=>({
  
});
export const mutations = {
    
}
export const actions = {

   async getUserProfileAction({commit}){
    let res = await api.getUserProfile();
        return res;
    },


}
export const getters = {
    userid: state => state.user.id,
    userIsVerified: state => state.user.is_verified,
    isLoggedIn:state=>state.isLoggedIn,
    accessToken:state=>state.accessToken
}

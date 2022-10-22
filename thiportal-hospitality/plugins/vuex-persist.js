// import VuexPersistence from 'vuex-persist'

// export default ({
//   store
// }) => {
//   new VuexPersistence({
//     storage: window.localStorage
//     /* your options */
//   }).plugin(store);
// }


import createpersistedState from 'vuex-persistedstate';
// import VuexPersistence from 'vuex-persist'
import * as cookies from 'js-cookie'
import cookie from 'cookie'

// export default ({
//   store,
//   req,
//   isDev
// }) => {
//   createPersistedState({
//     key: 'thi',
//     paths: [],
//     storage: {
//       getItem(key) {
//         return process.client ? Cookies.getJSON(key) : cookie.parse(req.headers.cookie || '')[key]
//       },
//       // 1 hour cookie expiration
//       setItem(key, value) {
//         return Cookies.set(key, value, {
//           expires: 0.02, // in days
//           secure: !isDev
//         })
//       },
//       removeItem(key) {
//         return Cookies.remove(key)
//       }
//     }
//   })(store)
// }
// const vuexLocal = new VuexPersistence({
//   storage: window.sessionStorage
// })
// export default ({ store}) => {
//   new VuexPersistence({
    // key: 'vuex', // The key to store the state on in the storage provider.
  //   storage: window.sessionStorage // or window.sessionStorage or localForage
  // }).plugin(store);
// }

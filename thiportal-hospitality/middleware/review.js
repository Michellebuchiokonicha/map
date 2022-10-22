export default function ({
  redirect,
  store
}) {
  // const user = store.state.auth.user;
  // const isLoggedIn = store.state.auth.loggedIn;
  // const isAuthenticated = store.state.auth.loggedIn;

  const isCompleted = store.state.portal.profile;
  const steps = store.state.portal.profile;


  if(isCompleted.is_completed === 1){
       redirect({
         name: 'review'
       })
  }
}
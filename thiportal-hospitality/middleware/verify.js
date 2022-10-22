export default function ({
  redirect,
  store
}) {
  const user = store.state.auth.user.data;
  console.log(user);
  // const isLoggedIn = store.state.auth.loggedIn;
  if (user.is_verified != 1) {
    console.log('not verified');
    redirect({
      name: 'verify'
    })
  } else redirect({name: 'login'})
}

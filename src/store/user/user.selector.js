export const selectCurrentUser = (state) => {
  console.log(state.user.currentUser);
  return state.user.currentUser;
};

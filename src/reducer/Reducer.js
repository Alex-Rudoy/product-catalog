export function Reducer(draft, action) {
  switch (action.type) {
    case "showLoginModal":
      draft.isLoginModalOpen = true;
      draft.isRegisterModalOpen = false;
      return;
    case "showRegisterModal":
      draft.isRegisterModalOpen = true;
      draft.isLoginModalOpen = false;
      return;
    default:
      return;
  }
}

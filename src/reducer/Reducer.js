export function Reducer(draft, action) {
  switch (action.type) {
    case "showLoginModal":
      draft.isAuthModalOpen = true;
      draft.modalTab = "login";
      return;
    case "showRegisterModal":
      draft.isAuthModalOpen = true;
      draft.modalTab = "register";
      return;
    case "closeAuthModal":
      draft.isAuthModalOpen = false;
      return;
    case "toggleSettingsPopup":
      draft.isSettingsPopupOpen = !draft.isSettingsPopupOpen;
      return;
    case "closeSettingsPopup":
      draft.isSettingsPopupOpen = false;
      return;
    case "login":
      draft.user.username = action.username;
      draft.user.token = action.token;
      draft.isAuthModalOpen = false;
      draft.loggedIn = true;
      return;
    case "logout":
      draft.loggedIn = false;
      draft.user.username = "";
      draft.user.token = "";
      return;
    default:
      return;
  }
}

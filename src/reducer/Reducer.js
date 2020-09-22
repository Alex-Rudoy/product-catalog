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
    case "toggleSettingsPopup":
      draft.isSettingsPopupOpen = !draft.isSettingsPopupOpen;
      return;
    case "closeAllModals":
      draft.isRegisterModalOpen = false;
      draft.isLoginModalOpen = false;
      draft.isSettingsPopupOpen = false;
      return;
    default:
      return;
  }
}

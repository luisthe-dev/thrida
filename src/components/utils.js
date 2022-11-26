export const switchTheme = (themeId) => {
  localStorage.setItem("themeMode", themeId);
  window.location.reload();
};

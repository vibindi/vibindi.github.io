function scrollToTop () {
  document.body.scrollTop = 0; 
  document.documentElement.scrollTop = 0;
  history.replaceState('', document.title, window.location.origin + window.location.pathname + window.location.search);
}
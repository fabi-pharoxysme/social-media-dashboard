let checkbox = document.getElementById('checkbox');

if(window.matchMedia('prefers-color-scheme: dark'.matches)){
    checkbox.setAttribute('checked', true)
};

checkbox.addEventListener('change', function (event){
  if(this.checked){
       document.body.classList.add('dark-mode-on')
       document.body.classList.remove('dark-mode-off')
  } else {
    document.body.classList.remove('dark-mode-on')
    document.body.classList.add('dark-mode-off')
  }
});
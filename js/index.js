function changeTab(event, tabId) {
    var tablinks = document.getElementsByClassName('tab-link');
    for (var i = 0; i < tablinks.length; i++) {
      tablinks[i].classList.remove('active');
    }
  

    var tabs = document.getElementsByClassName('tab');
    for (var i = 0; i < tabs.length; i++) {
      tabs[i].classList.remove('active');
    }

    event.target.classList.add('active');
    document.getElementById(tabId).classList.add('active');
  }
  
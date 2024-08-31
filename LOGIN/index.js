function onSignIn(googleUser) {
  var profile = googleUser.getBasicProfile();
  $("#name").text(profile.getName());
  $("#email").text(profile.getEmail());
  $("#image").attr('src', profile.getImageUrl());
  $(".data").css("display", "block");
  $(".g-signin2").css("display", "none");
}

function signOut() {
  var auth2 = gapi.auth2.getAuthInstance();
  auth2.signOut().then(function () {
      alert("You have been successfully signed out");
      $(".g-signin2").css("display", "block");
      $(".data").css("display", "none");
  });
}

document.getElementById('toggle-theme').addEventListener('click', function() {
  const body = document.body;
  const themeButton = document.getElementById('toggle-theme');
  
  if (body.classList.contains('dark-theme')) {
      body.classList.remove('dark-theme');
      body.classList.add('light-theme');
      themeButton.textContent = 'Switch to Dark Theme';
  } else {
      body.classList.remove('light-theme');
      body.classList.add('dark-theme');
      themeButton.textContent = 'Switch to Light Theme';
  }
});

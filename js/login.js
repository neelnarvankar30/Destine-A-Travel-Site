function signUp_btn() {
        document.getElementById("signIn-container").style.display = "none";
        document.getElementById("signUp-container").style.display = "block";
        $('.signUp-btn-container').removeClass("non-active");
        $('.signUp-btn-container').addClass("active");
        $('.signIn-btn-container').removeClass("active");
        $('.signIn-btn-container').addClass("non-active");
        $('.welcome-text span').text('Hey Welcome to Destine');
        $('.welcome-descp span').text($(".welcome-descp span").text().replace("login", "sign up"));
      }

function signIn_btn() {
        document.getElementById("signUp-container").style.display = "none";
        document.getElementById("signIn-container").style.display = "block";
        $('.signIn-btn-container').removeClass("non-active");
        $('.signIn-btn-container').addClass("active");
        $('.signUp-btn-container').removeClass("active");
        $('.signUp-btn-container').addClass("non-active");
        $('.welcome-text span').text('Welcome Back!');
        $('.welcome-descp span').text($(".welcome-descp span").text().replace("sign up", "login"));
      }
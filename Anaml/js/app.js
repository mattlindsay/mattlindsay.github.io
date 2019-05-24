// App JS

// Animation Controller

var anim = lottie.loadAnimation({
    container: document.getElementById('lottie'),
    renderer: 'svg',
    loop: true,
    autoplay: true,
    //autoloadSegments: false,
    path: 'data.json'
})

anim.addEventListener('DOMLoaded',function(event){anim.playSegments([[0,89],[90,209]], true);})


// Form Validation Controller

function myFunction() {
      // Get the checkbox
      var checkBox = document.getElementById("formCheck");
      // Get the output text
      var text = document.getElementById("Errortext");

      // If the checkbox is not checked, display the output text
      if (checkBox.checked == true){
        text.style.display = "none";
      } else {
        text.style.display = "block";
      }
    }
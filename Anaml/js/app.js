// App JS

var anim = lottie.loadAnimation({
    container: document.getElementById('lottie'),
    renderer: 'svg',
    loop: true,
    autoplay: true,
    //autoloadSegments: false,
    path: 'data.json'
})

anim.addEventListener('DOMLoaded',function(event){anim.playSegments([[0,89],[90,209]], true);})

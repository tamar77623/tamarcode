let a1 = document.getElementById('a1');
let a2 = document.getElementById('a2');
let a3 = document.getElementById('a3');
let a4 = document.getElementById("a4")
let aboutme = document.getElementById('aboutme');
let socials = document.getElementById('socials');
let myproject = document.getElementById("myproject")
a1.onclick = function(){
    window.open("https://www.youtube.com/@tamarcode")
}
a2.onclick = function(){
    socials.style.display = 'none';
    aboutme.style.display = 'block';
    myproject.style.display = 'none';
}
a3.onclick = function(){
    aboutme.style.display = 'none';
    socials.style.display = 'none';
    myproject.style.display = 'block';
}
a4.onclick = function(){
    aboutme.style.display = 'none';
    socials.style.display = 'grid';
    myproject.style.display = 'none'
}
let btn1 = document.getElementById('btn1');
let btn2 = document.getElementById('btn2');
let btn3 = document.getElementById('btn3');
let btn4 = document.getElementById('btn4')
btn1.onclick = function(){
    window.open("https://www.youtube.com/@tamarcode");
}
btn2.onclick = function(){
    window.open("https://www.linkedin.com/in/tamar-hathiam-801a13338/?isSelfProfile=true");
}
btn3.onclick = function(){
    window.open("https://github.com/tamar77623");
}
btn4.onclick = function(){
    window.open("https://api.whatsapp.com/send/?phone=9647833555193&text&type=phone_number&app_absent=0")
}
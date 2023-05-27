var swiper = new Swiper(".mySwiper", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    grabCursor:true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });
var tl= gsap.timeline();
tl
.from("#section1 h1",{
  opacity:0,
  ease:Expo.easeInOut,
  duration:1
})
.from("#i1",{
  y:50,
  opacity:0,
  ease:Expo.easeInOut,
  duration:2
},"-=.5")
.from("#i2",{
  x:50,
  opacity:0,
  ease:Expo.easeInOut,
  duration:2
},"-=2")
.from("#i3",{
  y:-50,
  opacity:0,
  ease:Expo.easeInOut,
  duration:2
},"-=2");

gsap.from("#section2 h1,#section2 h3",{
  y:50,
  stagger:.3,
  opacity:0,
  ease:Expo.easeInOut,
  duration:1,
  scrollTrigger:{
    trigger:"#section2",
    start:"top 50%",
 }
})
gsap.from("#section3 img,#section3 #txt3,#txt3 h3,#txt3 #btm3",{
  y:50,
  stagger:.3,
  opacity:0,
  ease:Expo.easeInOut,
  duration:1,
  scrollTrigger:{
    trigger:"#section3",
    start:"top 50%",
 }
})
gsap.from("#section4,#section4 #brands",{
  y:50,
  stagger:.3,
  opacity:0,
  ease:Expo.easeInOut,
  duration:1,
  scrollTrigger:{
    trigger:"#section4",
    start:"top 50%",
 }
})
gsap.from("#section5,#section5 #img5",{
  y:50,
  stagger:.3,
  opacity:0,
  ease:Expo.easeInOut,
  duration:.5,
  scrollTrigger:{
    trigger:"#section5",
    start:"top 50%",
 }
})
gsap.from("#section5 #btm5",{
  y:50,
  stagger:.3,
  opacity:0,
  ease:Expo.easeInOut,
  duration:.5,
  scrollTrigger:{
    trigger:"#section5 #btm5",
    start:"top 70%",
 }
})
gsap.from("#section6",{
  y:50,
  stagger:.3,
  opacity:0,
  ease:Expo.easeInOut,
  duration:1,
  scrollTrigger:{
    trigger:"#section6",
    start:"top 50%",
 }
})
gsap.from("#section7 .blck,.blck a,.blck h2,#section7 #bcmprtnr",{
  y:50,
  stagger:.1,
  opacity:0,
  ease:Expo.easeInOut,
  duration:.5,
  scrollTrigger:{
    trigger:"#section7",
    start:"top 30%",
 }
})
document.querySelector('a:nth-child(1)').addEventListener('mouseover',function(){
  gsap.to("#nav_hvr,.nav_elem",{
    opacity:1,
    ease:Expo.easeInOut,
    duration:1,
  })
  document.querySelector('#nav_hvr').style.display="flex";
})
document.querySelector('#nav_hvr').addEventListener('mouseleave',function(){
  gsap.to("#nav_hvr,.nav_elem",{
    opacity:0,
    ease:Expo.easeInOut,
    duration:1,
  })
  document.querySelector('#nav_hvr').style.display="none";
})
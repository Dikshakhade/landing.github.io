gsap.registerPlugin(ScrollTrigger);
let logo=document.querySelector(".nav-logo");
let nav=document.getElementById("nav-bar");
    //Logo Animation
gsap.fromTo(logo,{
        translateX: '0vh',
        translateY: '0vw',
        backgroundColor:'white',
        scale:1,
    },
    {
        translateX: '-41vw',
        translateY: '-7.3vh',
        backgroundColor:'white',
        scale: 0.4,
        scrollTrigger: {
            trigger: logo,
            start: '2% top',
            end: '185% 31%',
            scrub: 0.3,
            //markers:true,
            toggleActions: 'restart restart restart complete',
        },   
    })
    //Navigation Appear
    const times_6_array = gsap.utils.toArray('.times-6')
    times_6_array.forEach(times_6=>{
    gsap.to(times_6,
        {
            // autoAplha: 1,
            opacity: 1,
            duration: 0.5,
            scrollTrigger:
            {
                trigger: times_6,
                start: '270% top',
                end:'200000% 100%',
                // endTrigger:'.end',
                toggleClass: 'times-6-show',
                toggleActions: 'restart restart restart restart',
                //markers:true,
            },
    })  
   })

//vision mission
let t1=gsap.timeline(
    {
        scrollTrigger:{
            trigger:".dark-bg",
            start:"10% 9.5%",
            end:"150% bottom",
            pin:true,
            //pinSpacing:false,
            scrub:true,
            ease:'none',
            //duration:2,
            //toggleActions:'restart complete restart reverse',
            //markers: true,
        }
    }
   )

t1.fromTo('.img-right',
{
    translateX:'100%',
},
{
    translateX:'0%',
})

.fromTo(".vision",
{
    translateX:"-100%",
    opacity:0
},{
    translateX:'0%',
    opacity:1
},1)

.fromTo(".mission",
{
    translateX:"-100%",
    opacity:0
},
{
    translateX:'0%',
    opacity:1,
    //duration:1,
},2)

//checkout gallery 
var checkout_tl = gsap.timeline({
        scrollTrigger:{
        trigger:'.dark-bg',
        start:'40% 15%',
        end:'300% bottom',
        pin:true,
       // pinSpacing:false,
        //toggleActions:'restart complete restart complete',
        scrub:true,
        // markers:true,
    }
})

checkout_tl.fromTo(".checkout-container",
{
    translateX:'-100vw',
    opacity:0
},
{
    translateX:'0vw',
    opacity:1,
},0)
.fromTo('.checkout',
{
    translateX:'-100vw',
},
{
    translateX:'0vw',
},1)
.fromTo('.icon',
{
    translateX:'-100vw',
},
{
    translateX:'0vw',
},2)
.fromTo('.icon',
{
    translateX:'0vw',
},
{
    translateX:'80vw',
},3)
.fromTo('.icon-under',{
    scaleX:0,
},{
    scaleX:1,
},3)
.fromTo('.ScrollDown',{
    opacity:0,
},{
    opacity:1,
},4)

.fromTo('#arrow',
{
    rotation: 0,
},
{
    rotation: 90,
},6)
.fromTo('.ScrollDown',{
    translateX: '0vw',    
},{
    translateX: '30vw',    
    color: '#1333b4'
},5)
.fromTo('.checkout',
{
    
},
{
    color:'#1333b4',
},5)

//the image slider 
let container=document.querySelector('.carousel-container');
var con=container.getBoundingClientRect().width;
let img_length=document.querySelector('.img-slider');
let image=gsap.utils.toArray('.img-slider');
var ghost_t2=gsap.timeline();

var ani=ghost_t2.to(image,{
    xPercent: -100 * (image.length - 1),
    scrollTrigger:{
        trigger:'.dark-bg',
        start:'70% 20%',
        end: '450% bottom',
        pin:true,
        scrub:0.5,
    }
})

// ani.fromTo(".box1",{rotate:0},{rotate:360})
// ani.to(".box1", {
//     rotate:360,
//     duration: 2,
//     ease: "elastic",
//     scrollTrigger: {
//       trigger: ".box1",
//       containerAnimation:ani,
//       start: "left 30%",
//       scrub:1,
//       pin:true,
//       
//     }
// });    



// // for changing viewport 
// const arrow=document.getElementById('arrow');
// const cancel=document.getElementById('cancel');
// let con=document.querySelector('.checkout-container');
// let ghost=document.querySelector('.ghost');

// function view()
// {  
//     document.body.classList.add('over');
//     con.style.transform='translateX(-100%)';
//     con.style.transition='transform 1000 ease';
//     ghost.classList.add('ghost-show');
 
// }
// arrow.addEventListener('click',view);
// // var ghost_t2=gsap.timeline();
// // ghost_t2.to(image,{
// //     xPercent: -85 * (image.length - 1),
// //     scrollTrigger:{
// //         trigger:'.carousel-container',
// //         start:'0% top',
// //         end:'4000% right',
// //         pin:'.ghost',
// //         pinSpacing:false,
// //         markers:true,
// //         scrub:true,
 
// //      }
// // })

// cancel.addEventListener('click',()=>{

//     con.style.transform='translateX(0%)';
//     document.body.classList.remove('over');
//     ghost.classList.remove('ghost-show');

// })


//this is for courses div
var courses_t1=gsap.timeline({
    
    scrollTrigger:{
        trigger:'.main-wrapper1',
        start:"0% 10%",
        end:"1000% 40%",
        
        pin:true,
        ease:"power.in",
        // toggleActions:"restart pause restart complete",
        scrub:0.5,
    }
})
var wrap_div=document.querySelectorAll(".courses")


courses_t1.fromTo('.wrap1',
    {   opacity:0,
        translateY:'500',
    },
    {   opacity:1,
        translateY:'0'
    })

courses_t1.fromTo('.wrap5',
{   opacity:0,
    translateY:'500',
},
{   opacity:1,
    translateY:'0'
},1)

courses_t1.fromTo('.wrap2',
    {   
        opacity:0,
        translateY:'500',
    },
    {
        translateY:'0',
        opacity:1
},2)
courses_t1.fromTo('.wrap3',
    {   
        opacity:0,
        translateX:'500',

    },
    {   
        translateX:'0',
        opacity:1
    },2)
courses_t1.fromTo('.wrap6',
    {
        translateY:'500',
        opacity:0,
    },
    {
        opacity:1,
        translateY:'0'
},3)
courses_t1.fromTo('.wrap4',
    {   
        opacity:0,
        translateX:'-500',

    },
    {  
        translateX:'0',
        opacity:1
    },3)

// const offered = document.getElementById('offered_id')
// const wrap1 = document.getElementById('offered')
// wrap1.addEventListener('mouseover',()=>{
//     offered.style.display = 'block';
// })
// wrap1.addEventListener('mouseout',()=>{
//     offered.style.display = 'none';
// })
//stairs animation
var stairs_t1=gsap.timeline({
    // duration:10,
    scrollTrigger:{
        trigger:'.main-wrapper3',
        start:"5% 10%",
        end:"400% 40%",
        // markers:true,
        pin:true,
        // ease:"sine",
        // toggleActions:"restart pause restart complete",
        scrub:0.6
    }
})
stairs_t1.fromTo('.admission',{
    translateX:'-1000',
    opacity:0
},{
    translateX:'0',
    opacity:1
},0)
stairs_t1.fromTo('.placement',{
    translateX:'-1000',
    opacity:0
},{
    translateX:'-500',
    opacity:0.5
},1)
stairs_t1.fromTo('.placement',{
    translateX:'-500',
    opacity:0.5
},{
    translateX:'0',
    opacity:1
},2)
stairs_t1.fromTo('.campus',{
    translateX:'-1000',
    opacity:0
},{
    translateX:'-500',
    opacity:0.5
},3)
stairs_t1.fromTo('.campus',{
    translateX:'-500',
    opacity:0.5
},{
    translateX:'0',
    opacity:1
},4)
stairs_t1.fromTo('.delay4',{
    translateX:'0%',
    opacity:0
},{
    translateX:'50%',
    opacity:0
},5)
stairs_t1.fromTo('.delay4',{
    translateX:'50%',
    opacity:0
},{
    translateX:'5100%',
    opacity:0
},5)

//Menu-toggle
const btn_burger = document.getElementById("btn");
const btn_close  = document.getElementById("btn-close");
const menu = document.getElementById('menu1');
var toggle1 = false;

btn_burger.addEventListener('click', ()=>{
    toggle1=!toggle1;
    menu.classList.toggle('show',toggle1);
    if(toggle1== true){
        btn_close.style.position = 'fixed';
        console.log(toggle1);
    }
})

btn_close.addEventListener('click',()=>{
    toggle1=!toggle1;
    menu.classList.toggle('show',toggle1);
    if(toggle1== false){
        btn_close.style.position = 'absolute';
        console.log(toggle1);
    }
});
//DROP-DOWN-MENU
const item1 = document.getElementById('item1');
const item2 = document.getElementById('item2');
const item3 = document.getElementById('item3');
const item4 = document.getElementById('item4');
const item5 = document.getElementById('item5');
const item6 = document.getElementById('item6');
const item7 = document.getElementById('item7');
const item8 = document.getElementById('item8');
const item9 = document.getElementById('item9');
const item10 = document.getElementById('item10');
const item11 = document.getElementById('item11');
const item12 = document.getElementById('item12');
const item13 = document.getElementById('item13');

const division1 = document.getElementById('division1');
const division2 = document.getElementById('division2');
const division3 = document.getElementById('division3');
const division4 = document.getElementById('division4');
const division5 = document.getElementById('division5');
const division6 = document.getElementById('division6');
const division7 = document.getElementById('division7');
const division8 = document.getElementById('division8');
const division9 = document.getElementById('division9');
const division10 = document.getElementById('division10');
const division11 = document.getElementById('division11');
const division12 = document.getElementById('division12');
const division13 = document.getElementById('division13');

const sub_menu1 = document.getElementById('submenu1');
const sub_menu2 = document.getElementById('submenu2');
const sub_menu3 = document.getElementById('submenu3');
const sub_menu4 = document.getElementById('submenu4');
const sub_menu5 = document.getElementById('submenu5');
const sub_menu6 = document.getElementById('submenu6');
const sub_menu7 = document.getElementById('submenu7');
const sub_menu8 = document.getElementById('submenu8');
const sub_menu9 = document.getElementById('submenu9');
const sub_menu10= document.getElementById('submenu10');
const sub_menu11= document.getElementById('submenu11');
const sub_menu12= document.getElementById('submenu12');
const sub_menu13= document.getElementById('submenu13');


var Flag1 = false;
var Flag2 = false;
var Flag3  = false;
var Flag4  = false;
var Flag5  = false;
var Flag6  = false;
var Flag7  = false;
var Flag8  = false;
var Flag9  = false;
var Flag10 = false;
var Flag11 = false;
var Flag12 = false;
var Flag13 = false;

const item_list = [item1,item2,item3,item4,item5,item6,item7,item8,item9,item10,item11,item12,item13];

const division_list = [division1 ,division2 ,division3 ,division4 ,division5 ,division6 ,division7 ,division8 ,division9 ,division10,division11,division12,division13];

const flag_list = [Flag1 ,Flag2 , Flag3 ,Flag4 ,Flag5 ,Flag6 ,Flag7 ,Flag8 ,Flag9 ,Flag10,Flag11,Flag12,Flag13];

const sub_menu_items = [sub_menu1,sub_menu2,sub_menu3,sub_menu4,sub_menu5,sub_menu6,sub_menu7,sub_menu8,sub_menu9,sub_menu10,sub_menu11,sub_menu12,sub_menu13];

item_list.forEach(ev => 
{
 ev.addEventListener('click', BoxCreate);   
});

function BoxCreate(ev){
    var num = ev.target.dataset.id ;
    flag_list[num]=!flag_list[num];
    division_list[num] = document.getElementById(`division${num}`).classList;
    item_list[num]= document.getElementById(`item${num}`).classList;
  if(flag_list[num] == true){
    division_list[num].add('add');
    item_list[num].add('item_add');
    setTimeout(()=>{
      sub_menu_items[num-1].classList.add('sub-menu-timer');
    },700)
  }
  else{
    sub_menu_items[num-1].classList.remove('sub-menu-timer');
    setTimeout(()=>{
      division_list[num].add('add_out');
    },300)
    setTimeout(()=>{
        division_list[num].remove('add','add_out')
        item_list[num].remove('item_add') 
    },1000);
   }
}


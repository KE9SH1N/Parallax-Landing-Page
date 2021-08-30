

let text = document.getElementById('text');
let bird1 = document.getElementById('bird1');
let bird2 = document.getElementById('bird2');
let btn = document.getElementById('btn');
let forest = document.getElementById('forest');
let rocks = document.getElementById('rocks');
let water = document.getElementById('water');
let header = document.getElementById('header');

window.addEventListener('scroll', function(){
    let value = this.window.scrollY;

    // text.style.top = value * 0 + '%';
    text.style.top = 38 + value * -.5 + '%';
    
    bird1.style.top=value * -1.5 +'px';
    bird1.style.left=value * 2 +'px';
    bird2.style.top=value * -1.5 +'px';
    bird2.style.left=value * -5 +'px';

    btn.style.marginTop =  value * 1.5 + 'px';

    rocks.style.top = value * -0.12 + 'px';
    forest.style.top = value * 0.25 + 'px';
})


$(document).ready(function(){
    let nav_offset_top = $('.header').height() + 50;
    
    function navbarFixed(){
        if($('.header').length){
            $(window).scroll(function(){
                let scroll = $(window).scrollTop();
                if(scroll>=nav_offset_top){
                    $('.header').addClass('navbar_fixed');
    
                }else{
                    $('.header').removeClass('navbar_fixed');
                }
            })
        }
    }
    
    
    navbarFixed();
    
    });


    btn.addEventListener("click", ()=>{

        let el = document.getElementById(btn.getAttribute("data-link"));
        el.scrollIntoView({behavior:"smooth",block:"start"});
    })
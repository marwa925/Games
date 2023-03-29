import { gameD } from "./details.module.js";
import { api } from "./games.module.js";

$(document).ready(function(){

$(".layer").fadeOut(1000)
let copy=new api();
copy.getGames("mmorpg");

$(".nav-link").click(function(){
    $(this).addClass("active");
    $(".nav-link").not(this).removeClass("active");
})
let divTop= $(".navbar").offset().top;
$(window).scroll(function(){
    let scrollTop= $(window).scrollTop();
    if(scrollTop > divTop){
        $(".navbar").removeClass("translate-middle-y");
    }else{
        $(".navbar").addClass("translate-middle-y");
    }
})
$(".navbar-toggler").click(function(){
    $(".navbar").removeClass("translate-middle-y");
})
})

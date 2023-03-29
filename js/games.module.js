import { ui } from "./ui.module.js";

export class api{
    constructor(){
        // this.mmorpg=document.getElementById("mmorpg")
        // this.shooter=document.getElementById("shooter")
        // this.sailing=document.getElementById("sailing")
        // this.permadeath=document.getElementById("permadeath")
        // this.superhero=document.getElementById("superhero")
        // this.pixel=document.getElementById("pixel")
        this.links= document.querySelectorAll(".nav-link");
        this.res=[];
        this.loop();
    }
     loop(){
        for(let i=0 ; i<this.links.length; i++){
            this.links[i].addEventListener("click",(e)=>{
                let id=e.target.getAttribute("id");
                this.getGames(id);
                
            })
        }
       
    }

    async getGames(categ){
        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': '7e3917de4bmshcf9900d8a043583p108959jsncc7247880bdb',
                'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
            }
        };
        let httpreq= await fetch(`https://free-to-play-games-database.p.rapidapi.com/api/games?category=${categ}`, options)
        this.res= await httpreq.json();
        let result= this.res;
        console.log(this.res)
        // return this.res;
        // this.display();
        new ui(result);
    
    }
    
    
    
}
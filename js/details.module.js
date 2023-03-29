import { uiDet } from "./ui.module.js";

export class gameD{
    constructor(element){
        this.getDetails(element)
        
        this.detail=[];
        // this.getItems();
    }
    // getItems(){
        
    //     for(let i=0; i< this.div.length;i++){
            
    //         this.div[i].addEventListener("click",function(e){
    //             this.id= this.getAttribute("id");
                
                
    //         })
            
    //     }
        
      
    // }

    async getDetails(id){
        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': '7e3917de4bmshcf9900d8a043583p108959jsncc7247880bdb',
                'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
            }
        };
        let apiRequest= await fetch(`https://free-to-play-games-database.p.rapidapi.com/api/game?id=${id}`,options);
        this.detail= await apiRequest.json();
        console.log(this.detail);
        new uiDet(this.detail);
    }
}





import { gameD } from "./details.module.js";
import { api } from "./games.module.js";



export class ui{
    constructor(data){
        this.display(data);
    }
     display(res){
        let temp=``
        for(let i=0;i<res.length;i++){
            
            temp+=`<div class="col-md-3 p-2 d-flex align-items-stretch" >
            <div class="items border border-1 border-dark p-3 pb-0 bg-transparent overflow-hidden " id="${res[i].id}">
              <div class="" >
                <img src="${res[i].thumbnail}" class="rounded-top w-100" alt="...">
                <div class="card-title d-flex justify-content-between py-3 align-items-center">
                  <h6 class=" ">"${res[i].title?.split(" ").slice(0,2).join(" ")}"</h6>
                  <span class="p-2 rounded">Free</span>
                </div>
                <p class="parag text-muted text-center p-1">"${res[i].short_description?.split(" ").slice(0,10).join(" ")}"</p>
                <hr>
                <div class="d-flex justify-content-between mb-0 pb-0">
                  <p class=" text-white bg-dark p-1 rounded-2">"${res[i].genre}"</p>
                  <p class=" text-white bg-dark p-1 rounded-2">"${res[i].platform}"</p>
                </div>
                
              </div>
            </div>
          </div>`
          
        }
        document.getElementById("inner").innerHTML=temp;
        let elements=document.querySelectorAll(".items");
        for(let i=0; i<elements.length;i++){
            elements[i].addEventListener("click",function(e){
                let id=this.getAttribute("id");
                $(".content").fadeOut(100,()=>{
                    
                    $(".layer").fadeIn(800,function(){
                        $(document).ready(function(){
                            $(".layer").fadeOut(1000,function(){
                                
                                $(".details").fadeIn(500);
                            })
                            
                        })
                    })
                    
                    
                })
                console.log(id)
                new gameD(id);
            })
        }
        
    }
}
export class uiDet{
    constructor(ele){
        this.imgD= document.getElementById("imgD");
        this.title=document.getElementById("title");
        this.Category=document.getElementById("Category");
        this.Platform=document.getElementById("Platform");
        this.Status=document.getElementById("Status");
        this.description=document.getElementById("description");
        this.close=document.getElementById("close");
        this.btn=document.getElementById("btn");
        this.displayD(ele)
    }
    displayD(data){
        this.imgD.setAttribute("src",data.thumbnail);
        this.title.innerHTML= data.title;
        this.Category.innerHTML=data.genre;
        this.Platform.innerHTML=data.platform;
        this.Status.innerHTML=data.status;
        this.description.innerHTML=data.description;
        this.close.addEventListener("click",()=>{
            $(".details").fadeOut(0,()=>{
                $(".content").fadeIn(500)
            })
        })
        this.btn.addEventListener("click",()=>{
            this.btn.setAttribute("href",data.game_url)
        })

    }
}

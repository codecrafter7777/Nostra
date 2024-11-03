
var offerBar = document.querySelector(".offer")

document.getElementById("offer-close").addEventListener("click",

function(){
    offerBar.style.display="none"
}
)

var sideNavMenu=document.getElementById("side-navbar-activate")
var sidenavbar = document.querySelector(".side-navbar")
sideNavMenu.addEventListener("click",function(){
    sidenavbar.style.marginLeft="0px"
})

document.getElementById("side-navbar-close").addEventListener("click",()=>{
    document.querySelector(".side-navbar").style.marginLeft = "-60%"
})



var sliderleftbutton = document.getElementById("slider-left")
var sliderrightbutton = document.getElementById("slider-right")
var sliderimage= document.querySelector(".slider-images")
var slidermargin = 0

sliderleftbutton.addEventListener("click",function(){
    slidermargin=slidermargin+100

    if(slidermargin>200)
    {
        slidermargin=0
        sliderimage.style.marginLeft=0;
    }
    else{
        sliderimage.style.marginLeft="-"+slidermargin+"vw";
    }
})

sliderrightbutton.addEventListener("click",function(){
    slidermargin=slidermargin+100

    if(slidermargin>200)
    {
        slidermargin=0
        sliderimage.style.marginLeft=0;
    }
    else{
        sliderimage.style.marginLeft="-"+slidermargin+"vw";
    }
})


var like=document.querySelectorAll(".like")

like.forEach((btn)=>{
    btn.addEventListener("click",function(e){
        
        
        if(e.target.src.indexOf("blackheart")>0)
        {
            
            e.target.src="redheart.png"
        }
        else{
            e.target.src="blackheart.png"
        }
    })
})

//search input 

        var productContainer = document.querySelector("products-container");
        var search = document.getElementById("search");
        var productList = productContainer.querySelectorAll("div");

        search.addEventListener("keyup", function (event) {
            var enteredValue = event.target.value.toUpperCase();

            for (var count = 0; count < productList.length; count++) {
                var productName = productList[count].querySelector("h1").textContent;

                if (productName.toUpperCase().indexOf(enteredValue) < 0) {
                    productList[count].style.display = "none";
                } else {
                    productList[count].style.display = "block";
                }
            }
        });


var countries = ["google","facebook","twitter","instagram","yahoo","gmail","duckduckgo"];
var link = ["https://www.google.com","https://www.facebook.com","https://www.twitter.com","https://www.instagram.com","https://www.yahoo.com","https://www.gmail.com","https://www.duckduckgo.com"]

var searchbox= document.querySelector(".searchbox")
searchbox.addEventListener("input",update)


var menus=document.querySelector(".searchmenu")
function update(e){
    menus.innerHTML="";
    for(var i=0;i<countries.length;i++)
    {
        var cont=countries[i];
        var contlink=link[i];
        if(cont.includes(e.target.value))
        {
            var item="<a class='dropdown-item' href='"+contlink+"'>"+cont+"</a>"
            menus.innerHTML+=item
        }
    }
}

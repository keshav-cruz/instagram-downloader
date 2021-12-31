document.body.addEventListener('click', loadNames, true);

var ans=[];
var names;

async function loadNames() {  
var a = document.getElementsByClassName("zV_Nj")[0].getAttribute("href");
a = a.replace('liked_by/','');
a="https://www.instagram.com"+a+"?__a=1";
console.log(a);
const response = await fetch(a);
const names = await response.json();

if(names["graphql"]["shortcode_media"]["__typename"]=="GraphSidecar"){
    
    var numbers=names["graphql"]["shortcode_media"]["edge_sidecar_to_children"]["edges"]; 

    // Calculating the number of photos for multi photos
    for (var i=0; i < numbers.length; i++){
        var j=0;
            ans[i] = names["graphql"]["shortcode_media"]["edge_sidecar_to_children"]["edges"][""+i+""]["node"]["display_url"];

            document.getElementsByClassName("    coreSpriteRightChevron  ")[0].addEventListener("click", nextPic);

            document.getElementsByClassName("   coreSpriteLeftChevron   ")[0].addEventListener("click", prevPic);
            function nextPic(){
                // logic to change the download button for next pic
                j++;
                document.getElementById("nikhil").setAttribute('href',""+ans[j]+"&dl=1");
                console.log("hey i am j="+j);
            };
    };
    var check=document.getElementById("nikhil");

    if(!check){
        var para = document.createElement("a");
        para.setAttribute('href',""+ans[0]+"&dl=1");
        para.setAttribute('id',"nikhil");

        var node = document.createTextNode("Download Photo");
        para.appendChild(node);
        var element = document.getElementsByClassName("qvG_g")[0];
        element.appendChild(para);
    }
    // j=0;
}
document.getElementsByClassName("    coreSpriteRightChevron  ")[0].addEventListener("click", function() {
    console.log("I'm in onClick Function");
})

loadNames();    
var j=0;
// document.getElementsByClassName("    coreSpriteRightChevron  ")[0].addEventListener("click", nextPic);

// document.getElementsByClassName("   coreSpriteLeftChevron   ")[0].addEventListener("click", prevPic);
// function nextPic(){
//     // logic to change the download button for next pic
//     j++;
//     document.getElementById("nikhil").setAttribute('href',""+ans[j]+"&dl=1");
//     console.log("hey i am j="+j);
// };
function prevPic(){
    // this will work for previous pic
}
} 
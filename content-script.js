

    var x = document.getElementsByClassName("_6q-tv");
         x[0].innerHTML = "Hello World!";
         y=x[0].src
        y=y+"&dl=1";
    
         z= document.getElementsByClassName("QGPIr");
//     z[0].innerHTML="<a href="+y+" >click me</a>";
// let li = document.createElement('span');
// li.setAttribute('class','keshav');
// li.textContent="<a href="+y+">Download DP</a>"
// z.insertBefore(li, z.firstElementChild.nextSibling);

// const pa = document.createElement("button");
// const no = document.createTextNode("Download DP");
// pa.appendChild(no)

const para = document.createElement("a");
para.setAttribute('href',y);
para.setAttribute('class',"flatu");
para.setAttribute('id',"faltu")
const node = document.createTextNode("Download now");
para.appendChild(node);
const element = document.getElementsByClassName("QGPIr")[0];
element.appendChild(para);


   
   
   
// var mmm=window.location.href;
// console.log(mmm)

var mmm="";


document.body.addEventListener('click', xyz, true);
    function xyz(){
        if(window.location.href!=mmm){
            // console.log("window changed");
            mmm=window.location.href;
        //  setTimeout(loadNames, 3000); 
        loadNames();  
            
            
        }
    }
    
    loadNames();
    
   

                                                    // var xx="";
                                                    // var myInt = setInterval(reloadon,3000);
                                                    // document.addEventListener('DOMContentLoaded',function reloadon(){
                        //  code for DP
                // var x = document.getElementsByClassName("_6q-tv");
                //     x[0].innerHTML = "Hello World!";
                //     y=x[0].src
                //     y=y+"&dl=1";
    
                                                            //  z= document.getElementsByClassName("QGPIr");
                                                    //     z[0].innerHTML="<a href="+y+" >click me</a>";
                                                    // let li = document.createElement('span');
                                                    // li.setAttribute('class','keshav');
                                                    // li.textContent="<a href="+y+">Download DP</a>"
                                                    // z.insertBefore(li, z.firstElementChild.nextSibling);
                                                    // const pa = document.createElement("button");
                                                    // const no = document.createTextNode("Download DP");
                                                    // pa.appendChild(no)

                                                    // if(m!==xx){
                                                        // clearInterval(myInt);

                    // var para = document.createElement("a");
                    // para.setAttribute('href',y);

                    // var node = document.createTextNode("Download DP");
                    // para.appendChild(node);
                    // var element = document.getElementsByClassName("QGPIr")[0];
                    // element.appendChild(para);

                    //  code for DP
                                                                // var xx=y; 
                                                                // }
                                                                
                                                                // }, false);


                                                        // single picture when page is reloaded

                                        // var x = document.getElementsByClassName("FFVAD");
                                        //     y=x[0].src
                                        //     y=y+"&dl=1";


                                        // var para = document.createElement("a");
                                        //     para.setAttribute('href',y);

                                        //     var node = document.createTextNode("Download Photo");
                                        //     para.appendChild(node);
                                        //     var element = document.getElementsByClassName("qvG_g")[0];
                                        //     element.appendChild(para);

                                                      //  END hereeeeeeeeeeeeeeeeee

    var ans=[];
    var names;

    async function loadNames() {  
       
    
    // var a = document.getElementsByClassName("zV_Nj")[0];
    //     if(a){
    //     a = a.getAttribute("href");
    //     a = a.replace('liked_by/','');
    //     a="https://www.instagram.com"+a+"?__a=1";
    // console.log(mmm.search("/p/"));
    //     console.log(a);
    if(mmm.search("/p/")!=-1){
        
        var a=mmm+"?__a=1";
        console.log(a+"andar aa gyi");
        


        // var xx =document.getElementsByClassName("  _6CZji   ")[0];
        // var att = document.createAttribute("onclick");
        //     att.value = "run()";
        //     xx.setAttributeNode(att);
           




        
            const response = await fetch(a);
            const names = await response.json();
            console.log(names)
        
            
            
            if(names["graphql"]["shortcode_media"]["__typename"]=="GraphSidecar"){
                
                var numbers=names["graphql"]["shortcode_media"]["edge_sidecar_to_children"]["edges"];
                for (var i=0; i < numbers.length; i++){
            
                    
                     ans[i] = names["graphql"]["shortcode_media"]["edge_sidecar_to_children"]["edges"][""+i+""]["node"]["display_url"];
                     
                     
                   
                };  

                var check=document.getElementById("nikhil");
                var check1=document.getElementsByClassName("_9AhH0")[0];
                if(!check){
                    // var para = document.createElement("a");
                    //                 para.setAttribute('href',""+ans[j]+"&dl=1");
                    //                 para.setAttribute('id',"nikhil");
                    
                    //                 var node = document.createTextNode("Download Photo");
                    //                 para.appendChild(node);
                    //                 var element = document.getElementsByClassName("qvG_g")[0]; 
                       
                    //     element.appendChild(para);


                var para = document.createElement("button");
                        para.setAttribute('onclick','window.location.href="'+ans[0]+'&dl=1";');
                        para.setAttribute('id',"nikhil");
                        para.setAttribute('class','button-54');
        
                        var node = document.createTextNode("Download Photo");              
                        para.appendChild(node);
                        var element = document.getElementsByClassName("qvG_g")[0]; 
                       
                        element.appendChild(para);

                        if(names["graphql"]["shortcode_media"]["edge_sidecar_to_children"]["edges"]["0"]["node"]["video_url"]){  // document.getElementsByClassName("PyenC")[0]
                            var fin = names["graphql"]["shortcode_media"]["edge_sidecar_to_children"]["edges"]["0"]["node"]["video_url"];
                                      console.log(fin);
                                      var para = document.createElement("button");
                                            para.setAttribute('onclick','window.location.href="'+fin+'&dl=1";');
                                            para.setAttribute('id',"keshav");
                                            para.setAttribute('class','button-54');
                                       var node = document.createTextNode("Download Video");
                                          para.appendChild(node);
                                      var element = document.getElementsByClassName("qvG_g")[0];
                                          element.appendChild(para);
                        }

                }
                // j=0;

                var j=0;
                var yy=0;
                if(document.getElementsByClassName("    coreSpriteRightChevron  ")[0]){
                document.getElementsByClassName("    coreSpriteRightChevron  ")[0].addEventListener("click", fwd);

                function fwd(){
                    j++; 
                    yy++;
                    if(yy==2){
                        okji();
                    } 
                    apnd();
                    console.log("i m fwd"+j);
                }
                function okji(){
                    
                    document.getElementsByClassName("   coreSpriteLeftChevron   ")[0].addEventListener("click", function oo(){j--; apnd(); console.log("i m back"+j);});}
                

                                        // function morepics(){
                                                
            
                                        // j++;
                                        
                                    //   console.log("i am in forward"+j);
                                // var para = document.createElement("a");
                                //     para.setAttribute('href',""+ans[j]+"&dl=1");
                                //     para.setAttribute('id',"nikhil");
                    
                                //     var node = document.createTextNode("Download Photo");
                                //     para.appendChild(node);
                                
        // console.log("hey i am j="+j);
                                // var para = document.createElement("button");
                                // para.setAttribute('onclick','window.location.href="'+ans[j]+'&dl=1";');
                                // para.setAttribute('id',"nikhil");

                                // var node = document.createTextNode("Download Photo");
                                // para.appendChild(node);
                                // var element = document.getElementsByClassName("qvG_g")[0]; 
                                // var element = document.getElementById("okok"+j).getElementsByClassName("_9AhH0")[0];
                                function apnd(){
                                
                                document.getElementById("nikhil").setAttribute('onclick','window.location.href="'+ans[j]+'&dl=1";');

                        if(names["graphql"]["shortcode_media"]["edge_sidecar_to_children"]["edges"][""+j+""]["node"]["video_url"]){  // document.getElementsByClassName("PyenC")[0]
                            
                           var fin = names["graphql"]["shortcode_media"]["edge_sidecar_to_children"]["edges"][""+j+""]["node"]["video_url"];
                                     console.log(fin);
                                     if(document.getElementById("keshav")){
                                        document.getElementById("keshav").setAttribute('onclick','window.location.href="'+fin+'&dl=1";');
                                    }else{
                                     var para = document.createElement("button");
                                           para.setAttribute('onclick','window.location.href="'+fin+'&dl=1";');
                                           para.setAttribute('id',"keshav");
                                           para.setAttribute('class','button-54');
                                      var node = document.createTextNode("Download Video");
                                         para.appendChild(node);
                                     var element = document.getElementsByClassName("qvG_g")[0];
                                         element.appendChild(para);
                                    }

                                }
                                else{
                                    if(document.getElementById("keshav")){
                                        console.log("ayaaa tha bhai")
                                        document.getElementById("keshav").remove();
                                    }

                                }

                            }
                                // console.log("hey i am j="+j);
                              
                                
                                    // };
                                    
                                    
                                    
                                    // element.appendChild(para);
                                }

                                    
            }
               
                    
                        
            
            else if(document.getElementsByClassName("PyenC")[0]){
                // console.log("ok");
                var fin=names["graphql"]["shortcode_media"]["video_url"];
                console.log(fin);

                   var para = document.createElement("button");
                        para.setAttribute('onclick','window.location.href="'+fin+'&dl=1";');
                        para.setAttribute('class','button-54');
        
                        var node = document.createTextNode("Download Video");
                        para.appendChild(node);
                        var element = document.getElementsByClassName("qvG_g")[0];
                        element.appendChild(para);

            }   //
            else if(document.getElementsByClassName("eLAPa kPFhm")[0] || document.getElementsByClassName("eLAPa vF75o")[0] ){
                // console.log("ok");
                var fin=names["graphql"]["shortcode_media"]["display_url"];
                console.log(fin);

                   var para = document.createElement("button");
                        para.setAttribute('onclick','window.location.href="'+fin+'&dl=1";');
                        para.setAttribute('class','button-54');

                        var node = document.createTextNode("Download Photo");
                        para.appendChild(node);
                        var element = document.getElementsByClassName("qvG_g")[0];
                        element.appendChild(para);
                                        

            }
                    

            }
            else if(document.getElementsByClassName("QGPIr")[0] || document.getElementsByClassName("be6sR")[0]){
                if(!document.getElementById("notnow")){
                if(document.getElementsByClassName("be6sR")[0]){
                    var x = document.getElementsByClassName("be6sR");
                    x[0].innerHTML = "Hello World!";
                    y=x[0].src
                }
                else{
                var x = document.getElementsByClassName("_6q-tv");
                    x[0].innerHTML = "Hello World!";
                    y=x[0].src
                }
                    // y=y+"&dl=1";
                var para = document.createElement("button");
                para.setAttribute('onclick','window.location.href="'+y+'&dl=1";');
                para.setAttribute('class','button-54');
                para.setAttribute('id','notnow');

                var node = document.createTextNode("Download DP");
                para.appendChild(node);
                var element = document.getElementsByClassName("QGPIr")[0];
                element.appendChild(para);
            }

            }
           
            // else if(names["graphql"]["shortcode_media"]["__typename"]=="GraphImage"){
            //                             var x = document.getElementsByClassName("FFVAD");
            //                                 y=x[0].src
            //                                 y=y+"&dl=1";


            //                             var para = document.createElement("a");
            //                                 para.setAttribute('href',y);

            //                                 var node = document.createTextNode("Download Photo");
            //                                 para.appendChild(node);
            //                                 var element = document.getElementsByClassName("qvG_g")[0];
            //                                 element.appendChild(para);

            }
            // else if(names["graphql"]["shortcode_media"]["__typename"]=="GraphVideo"){

            //        var fin=names["graphql"]["shortcode_media"]["video_url"];

            //        var para = document.createElement("a");
            //             para.setAttribute('href',""+fin+"&dl=1");
        
            //             var node = document.createTextNode("Download Video");
            //             para.appendChild(node);
            //             var element = document.getElementsByClassName("qvG_g")[0];
            //             element.appendChild(para);
                   
            // }
            // else if(document.getElementsByClassName("QGPIr")[0]){
            //     var x = document.getElementsByClassName("_6q-tv");
            //         x[0].innerHTML = "Hello World!";
            //         y=x[0].src
            //         y=y+"&dl=1";
            //     var para = document.createElement("a");
            //     para.setAttribute('href',y);

            //     var node = document.createTextNode("Download DP");
            //     para.appendChild(node);
            //     var element = document.getElementsByClassName("QGPIr")[0];
            //     element.appendChild(para);


            // }

          
<<<<<<< HEAD
          }
          document.getElementsByClassName("    coreSpriteRightChevron  ")[0].addEventListener("click", function() {
              console.log("I'm in onClick Function");
          })
          loadNames();
=======
        // }
          
        //   loadNames();
>>>>>>> 09e976d5744244275459118460be7a67f18e4dab
          

          

        //   setTimeout(function(){ var xx=document.getElementsByClassName(  _6CZji   ).setAttribute('onclick',loadNames); }, 5000);

        // var j=0;
        // if(document.getElementsByClassName("    coreSpriteRightChevron  ")[0]){
        // document.getElementsByClassName("    coreSpriteRightChevron  ")[0].addEventListener("click", morepics);
        //                         function morepics(){
    
        //                         j++;
        //                 // var para = document.createElement("a");
        //                 //     para.setAttribute('href',""+ans[j]+"&dl=1");
        //                 //     para.setAttribute('id',"nikhil");
            
        //                 //     var node = document.createTextNode("Download Photo");
        //                 //     para.appendChild(node);
        //                     // var ele = 
        //                     document.getElementById("nikhil").setAttribute('href',""+ans[j]+"&dl=1");
        //                     console.log("hey i am j="+j);
        //                     //         ele.
        //                     // element.appendChild(para);  
        //                     };
        //                 }
                    

    
        function strt(){
            if(document.getElementsByClassName("   coreSpriteLeftChevron   ")[0]){
                document.getElementsByClassName("   coreSpriteLeftChevron   ")[0].addEventListener("click", prevo);
                function prevo(){
                            

                    j--;
                    console.log("here j is "+j)
                    document.getElementById("nikhil").setAttribute('onclick','window.location.href="'+ans[j]+'&dl=1";');

    if(names["graphql"]["shortcode_media"]["edge_sidecar_to_children"]["edges"][""+j+""]["node"]["video_url"]){  // document.getElementsByClassName("PyenC")[0]
        
       var fin = names["graphql"]["shortcode_media"]["edge_sidecar_to_children"]["edges"][""+j+""]["node"]["video_url"];
                 console.log(fin);
                 if(document.getElementById("keshav")){
                    document.getElementById("keshav").setAttribute('onclick','window.location.href="'+fin+'&dl=1";');
                }else{
                 var para = document.createElement("button");
                       para.setAttribute('onclick','window.location.href="'+fin+'&dl=1";');
                       para.setAttribute('id',"keshav");
                  var node = document.createTextNode("Download Video");
                     para.appendChild(node);
                 var element = document.getElementsByClassName("qvG_g")[0];
                     element.appendChild(para);
                }

            }
            else{
                if(document.getElementById("keshav")){
                    console.log("ayaaa tha bhai")
                    document.getElementById("keshav").remove();
                }

            }
        }
                
                
}}







   
   
   
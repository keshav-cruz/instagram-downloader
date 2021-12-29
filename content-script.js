document.body.addEventListener('click', loadNames, true);

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

    var a = document.getElementsByClassName("zV_Nj")[0].getAttribute("href");
        a = a.replace('liked_by/','');
        a="https://www.instagram.com"+a+"?__a=1";
        console.log(a);


        // var xx =document.getElementsByClassName("  _6CZji   ")[0];
        // var att = document.createAttribute("onclick");
        //     att.value = "run()";
        //     xx.setAttributeNode(att);
           




        
            const response = await fetch(a);
            const names = await response.json();
            
            
            if(names["graphql"]["shortcode_media"]["__typename"]=="GraphSidecar"){
                
                var numbers=names["graphql"]["shortcode_media"]["edge_sidecar_to_children"]["edges"];
                for (var i=0; i < numbers.length; i++){
            
            
                     ans[i] = names["graphql"]["shortcode_media"]["edge_sidecar_to_children"]["edges"][""+i+""]["node"]["display_url"];
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
            else if(names["graphql"]["shortcode_media"]["__typename"]=="GraphImage"){
                                        var x = document.getElementsByClassName("FFVAD");
                                            y=x[0].src
                                            y=y+"&dl=1";


                                        var para = document.createElement("a");
                                            para.setAttribute('href',y);

                                            var node = document.createTextNode("Download Photo");
                                            para.appendChild(node);
                                            var element = document.getElementsByClassName("qvG_g")[0];
                                            element.appendChild(para);

            }
            else if(names["graphql"]["shortcode_media"]["__typename"]=="GraphVideo"){

                   var fin=names["graphql"]["shortcode_media"]["video_url"];

                   var para = document.createElement("a");
                        para.setAttribute('href',""+fin+"&dl=1");
        
                        var node = document.createTextNode("Download Video");
                        para.appendChild(node);
                        var element = document.getElementsByClassName("qvG_g")[0];
                        element.appendChild(para);
                   
            }
            // else if(names.length>1){
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

          
          }
          
          loadNames();
          

          

        //   setTimeout(function(){ var xx=document.getElementsByClassName(  _6CZji   ).setAttribute('onclick',loadNames); }, 5000);

    

    
    var j=0;
    document.getElementsByClassName("    coreSpriteRightChevron  ")[0].addEventListener("click", morepics);
                            function morepics(){

                            j++;
                    // var para = document.createElement("a");
                    //     para.setAttribute('href',""+ans[j]+"&dl=1");
                    //     para.setAttribute('id',"nikhil");
        
                    //     var node = document.createTextNode("Download Photo");
                    //     para.appendChild(node);
                        // var ele = 
                        document.getElementById("nikhil").setAttribute('href',""+ans[j]+"&dl=1");
                        console.log("hey i am j="+j);
                        //         ele.
                        // element.appendChild(para);  
                        };
    







   
   
   
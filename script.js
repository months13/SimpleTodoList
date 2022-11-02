let addButton = document.getElementsByClassName("addbutton");
let thirdArea = document.getElementsByClassName("third");
let Xbutton = document.getElementsByClassName("Xbutton");
let body = document.getElementsByClassName("background");

let cancelButton = document.getElementsByClassName("cancel");
let registerButton = document.getElementsByClassName("register");

let todoInput = document.getElementsByClassName("todoinput");
let priorityValue = document.getElementsByClassName("prioritydropdown")
let startDay = document.getElementsByClassName("startday");
let endDay = document.getElementsByClassName("endday");
let startTime = document.getElementsByClassName("starttime");
let endTime = document.getElementsByClassName("endtime");

let fifthArea = document.getElementsByClassName("fifth");
let modifyButton = document.getElementsByClassName("modify");
let modifyDeleteButton = document.getElementsByClassName("modifydelete");
let modifyCancelButton = document.getElementsByClassName("modifycancel");

let modifyInput = document.getElementsByClassName("modifyinput");
let modifyDropdown = document.getElementsByClassName("modifydropdown");
let modifyStartday = document.getElementsByClassName("modifystartday");
let modifyEndday = document.getElementsByClassName("modifyendday");
let modifyStarttime = document.getElementsByClassName("modifystarttime");
let modifyEndtime = document.getElementsByClassName("modifyendtime")

let howSort = document.getElementsByClassName("dropdownbutton");

let cnt = 0;

let beforeInput;
let beforeDropdown;
let beforeStartday;
let beforeEndday;
let beforeStarttime;
let beforeEndtime;

let afterInput;
let afterDropdown;
let afterStartday;
let afterEndday;
let afterStarttime;
let afterEndtime;

addButton[0].addEventListener("click", function(){    
    thirdArea[0].style.display = 'block';       
    body[0].style.backgroundColor = "#808080";
    // addButton[0].style.backgroundColor = "#808080";         
});

Xbutton[0].addEventListener("click", function(){
    thirdArea[0].style.display = 'none';
    body[0].style.backgroundColor = "#fff";                    
})

cancelButton[0].addEventListener("click", function(){
    thirdArea[0].style.display = 'none';
    body[0].style.backgroundColor = "#fff"; 
})

registerButton[0].addEventListener("click", function(){  
    
    let f1 = document.getElementsByClassName("todoinput");
    let f2 = document.getElementsByClassName("prioritydropdown")
    let f3 = document.getElementsByClassName("startday");
    let f4 = document.getElementsByClassName("endday");
    let f5 = document.getElementsByClassName("starttime");
    let f6 = document.getElementsByClassName("endtime");

    if(f1[0].value == ""){
        alert("일정을 입력해 주세요.");
        thirdArea[0].style.display = 'none';
        body[0].style.backgroundColor = "#fff";
        return;
    }

    let start = f3[0].selectedIndex;
    let fin = f4[0].selectedIndex;
    
    if(start > fin){
        alert("요일 범위를 올바르게 입력해주세요.")
        thirdArea[0].style.display = 'none';
        body[0].style.backgroundColor = "#fff";
        return;
    }

    let starttime = f5[0].value;
    let endtime = f6[0].value;
    
    let start1 = starttime.split(":");
    let fin1 = endtime.split(":");

    let startHour = start1[0];
    let startMin = start1[1];

    let finHour = fin1[0];
    let finMin = fin1[1];

    if(startHour == finHour){
        if(startMin > finMin){
            alert("시간 범위를 올바르게 입력해 주세요.")            
            thirdArea[0].style.display = 'none';
            body[0].style.backgroundColor = "#fff";
            return;
        }else if(startMin == finMin){
            alert("시간 범위를 올바르게 입력해 주세요.")            
            thirdArea[0].style.display = 'none';
            body[0].style.backgroundColor = "#fff";
            return;
        }        
    }else if(startHour > finHour){
        alert("시간 범위를 올바르게 입력해 주세요.")        
        thirdArea[0].style.display = 'none';
        body[0].style.backgroundColor = "#fff";
        return;
    }
    
    let value = f2[0].value;
    
    let addTarget;    

    for(let i = start; i<fin+1; i++){          
        let plan = document.createElement("div");

        if(value == 'sang'){        
            plan.setAttribute('class', 'redbox');
        }

        if(value == 'jung'){
            plan.setAttribute('class', 'yellowbox');
        }

        if(value == 'ha'){
            plan.setAttribute('class', 'greenbox');
        }
        

        let ulAdd = document.createElement('ul');
        let liAdd1 = document.createElement('li');

        liAdd1.setAttribute('class', 'txt');

        liAdd1.textContent = todoInput[0].value;

        ulAdd.appendChild(liAdd1);

        let liAdd2 = document.createElement('li');
        liAdd2.setAttribute('class', 'txt');

        liAdd2.textContent = "시간 : " + starttime + "~" + endtime;

        ulAdd.appendChild(liAdd2);

        plan.appendChild(ulAdd);

        plan.setAttribute("startday", start);        
        plan.setAttribute("endday", fin);

        plan.addEventListener("click", function(){
            fifthArea[0].style.display = 'block';       
            body[0].style.backgroundColor = "#808080";
    
            modifyInput[0].setAttribute("disabled", true);
            modifyDropdown[0].setAttribute("disabled", true);
            modifyStartday[0].setAttribute("disabled", true);
            modifyEndday[0].setAttribute("disabled", true);
            modifyStarttime[0].setAttribute("disabled", true);
            modifyEndtime[0].setAttribute("disabled", true);   
            
            let a1 = liAdd1.textContent
            let a2 = value;
            let a3 = start+1;
            let a4 = fin+1;
            let a5 = starttime;
            let a6 = endtime;

            // let a1 = document.getElementsByClassName("todoinput")[0].value;
            // let a2 = document.getElementsByClassName("prioritydropdown")[0].value;
            // let a3 = document.getElementsByClassName("startday")[0].selectedIndex;
            // let a4 = document.getElementsByClassName("endday")[0].selectedIndex;
            // let a5 = document.getElementsByClassName("starttime")[0].value;
            // let a6 = document.getElementsByClassName("endtime")[0].value;
    
            // modifyInput[0].value = todoInput[0].value;
            // modifyDropdown[0].value = priorityValue[0].value;
            // modifyStartday[0].value = startDay[0].value;
            // modifyEndday[0].value = endDay[0].value;
            // modifyStarttime[0].value = startTime[0].value;
            // modifyEndtime[0].value = endTime[0].value;   
    
            modifyInput[0].value = a1;
            modifyDropdown[0].value = a2;
            modifyStartday[0].value = a3;
            modifyEndday[0].value = a4;
            modifyStarttime[0].value = a5;
            modifyEndtime[0].value = a6;
    
    
            modifyButton[0].textContent = "수정";
        });

        // plan.addEventListener("click", function(){
        //     fifthArea[0].style.display = 'block';       
        //     body[0].style.backgroundColor = "#808080";

        //     modifyInput[0].setAttribute("disabled", true);
        //     modifyDropdown[0].setAttribute("disabled", true);
        //     modifyStartday[0].setAttribute("disabled", true);
        //     modifyEndday[0].setAttribute("disabled", true);
        //     modifyStarttime[0].setAttribute("disabled", true);
        //     modifyEndtime[0].setAttribute("disabled", true);

        //     modifyInput[0].value = todoInput[0].value;
        //     modifyDropdown[0].value = priorityValue[0].value;
        //     modifyStartday[0].value = startDay[0].value;
        //     modifyEndday[0].value = endDay[0].value;
        //     modifyStarttime[0].value = starttime;
        //     modifyEndtime[0].value = endtime;   

        //     modifyButton[0].textContent = "수정";                        
        // })

        if(i == 0){        
            addTarget = document.querySelector("td.zero > div");                        
        }
        if(i == 1){            
            addTarget = document.querySelector("td.one > div");                    
        }
        if(i == 2){            
            addTarget = document.querySelector("td.two > div");                        
        }
        if(i == 3){            
            addTarget = document.querySelector("td.three > div");                        
        }
        if(i == 4){            
            addTarget = document.querySelector("td.four > div");                        
        }
        if(i == 5){            
            addTarget = document.querySelector("td.five > div");                        
        }
        if(i == 6){            
            addTarget = document.querySelector("td.six > div");                        
        }

        addTarget.append(plan);
    }
                    
    thirdArea[0].style.display = 'none';
    body[0].style.backgroundColor = "#fff"; 

})

modifyCancelButton[0].addEventListener("click", function(){
    fifthArea[0].style.display = 'none';
    body[0].style.backgroundColor = "#fff";
    cnt = 0;   
})


modifyButton[0].addEventListener("click", function(){

    if(cnt == 1){        
        
        // alert(afterInput);

        modifyButton[0].textContent = "수정";
        cnt = 0;

        if(modifyInput[0].value == ""){
            alert("일정을 입력해 주세요.");
            fifthArea[0].style.display = 'none';
            body[0].style.backgroundColor = "#fff";
            return;
        }
    
        let start = modifyStartday[0].selectedIndex;
        let fin = modifyEndday[0].selectedIndex;
        
        if(start > fin){
            alert("요일 범위를 올바르게 입력해주세요.")
            fifthArea[0].style.display = 'none';
            body[0].style.backgroundColor = "#fff";
            return;
        }
    
        let starttime = modifyStarttime[0].value;
        let endtime = modifyEndtime[0].value;
        
        let start1 = starttime.split(":");
        let fin1 = endtime.split(":");
    
        let startHour = start1[0];
        let startMin = start1[1];
    
        let finHour = fin1[0];
        let finMin = fin1[1];
    
        if(startHour == finHour){
            if(startMin > finMin){
                alert("시간 범위를 올바르게 입력해 주세요.")                
                fifthArea[0].style.display = 'none';
                body[0].style.backgroundColor = "#fff";
                return;
            }else if(startMin == finMin){
                alert("시간 범위를 올바르게 입력해 주세요.")                
                fifthArea[0].style.display = 'none';
                body[0].style.backgroundColor = "#fff";
                return;
            }        
        }else if(startHour > finHour){
            alert("시간 범위를 올바르게 입력해 주세요.")            
            fifthArea[0].style.display = 'none';
            body[0].style.backgroundColor = "#fff";
            return;
        }

        // afterInput = modifyInput[0].value;
        // afterDropdown = modifyDropdown[0].value;
        // afterStartday = modifyStartday[0].selectedIndex;
        // afterEndday = modifyEndday[0].selectedIndex;
        // afterStarttime = modifyStarttime[0].value;
        // afterEndtime = modifyEndtime[0].value;

        if(beforeDropdown == 'sang'){
            let arr = document.querySelectorAll("div.redbox");

            let c1 = document.getElementsByClassName("modifyinput");
            let c2 = document.getElementsByClassName("modifydropdown");
            let c3 = document.getElementsByClassName("modifystartday");
            let c4 = document.getElementsByClassName("modifyendday");
            let c5 = document.getElementsByClassName("modifystarttime");
            let c6 = document.getElementsByClassName("modifyendtime");

            // afterInput = c1[0].value;
            // afterDropdown = c2[0].value;
            // afterStartday = c3[0].selectedIndex;
            // afterEndday = c4[0].selectedIndex;
            // afterStarttime = c5[0].value;
            // afterEndtime = c6[0].value;            

            let timeCompare = "시간 : " + beforeStarttime + "~" + beforeEndtime;
            let timeAdjust = "시간 : " + c5[0].value + "~" + c6[0].value;         
            
            let cnt2 = 0;

            for(let i=0; i<arr.length; i++){                                
                                
                if(arr[i].firstChild.firstChild.textContent == beforeInput && 
                    arr[i].firstChild.lastChild.textContent == timeCompare &&
                    arr[i].getAttribute("startday") == beforeStartday &&
                    arr[i].getAttribute("endday") == beforeEndday){                    
                    
                    cnt2++;

                    // alert('z');

                    // startDayCompare = (arr[i].getAttribute("startday")) // 여기부터 !!                    

                    arr[i].firstChild.firstChild.textContent = c1[0].value;
                    arr[i].firstChild.lastChild.textContent = timeAdjust;
                    arr[i].removeAttribute("class");                                                                    
                                        
                    let colorValue;

                    if(c2[0].value == "sang"){
                        colorValue = "redbox";
                    }

                    if(c2[0].value == 'jung'){
                        colorValue = "yellowbox";
                    }

                    if(c2[0].value == 'ha'){
                        colorValue = "greenbox";
                    }

                    arr[i].setAttribute("class", colorValue);

                    arr[i].setAttribute("startday", c3[0].selectedIndex);
                    arr[i].setAttribute("endday", c4[0].selectedIndex);

                    // 여기서 이어서 하면 됨.
                    // arr[i] 에다가 addEventListenr 그리고 removeListenre                                    

                    arr[i].addEventListener("click", function(){

                        fifthArea[0].style.display = 'block';       
                        body[0].style.backgroundColor = "#808080";

                        modifyInput[0].setAttribute("disabled", true);
                        modifyDropdown[0].setAttribute("disabled", true);
                        modifyStartday[0].setAttribute("disabled", true);
                        modifyEndday[0].setAttribute("disabled", true);
                        modifyStarttime[0].setAttribute("disabled", true);
                        modifyEndtime[0].setAttribute("disabled", true);


                        // modifyInput[0].value = c1[0].value;                        
                        // modifyDropdown[0].value = c2[0].value;
                        // modifyStartday[0].value = c3[0].selectedIndex + 1;
                        // modifyEndday[0].value = c4[0].selectedIndex + 1;                        
                        // modifyStarttime[0].value = c5[0].value;
                        // modifyEndtime[0].value = c6[0].value; 
                        
                        modifyInput[0].value = arr[i].firstChild.firstChild.textContent;
                        if(arr[i].getAttribute("class") == "redbox"){
                            modifyDropdown[0].value = "sang";
                        }else if(arr[i].getAttribute("class") == "yellowbox"){
                            modifyDropdown[0].value = "jung";
                        }else if(arr[i].getAttribute("class") == "greenbox"){
                            modifyDropdown[0].value = "ha";
                        }                        
                        // modifyStartday[0].value = arr[i].getAttribute("startday") + 1 + "";
                        let qwer1 = arr[i].getAttribute("startday");
                        qwer1 = parseInt(qwer1);
                        qwer1 = qwer1 + 1;
                        qwer1 = qwer1.toString(); // 타입 내가 생각하는거랑 다르게 적용됨.
                        let qwer2 = arr[i].getAttribute("endday");
                        qwer2 = parseInt(qwer2);
                        qwer2 = qwer2 + 1;
                        qwer2 = qwer2.toString();

                        modifyStartday[0].value = qwer1 ;                        
                        modifyEndday[0].value = qwer2 ;  

                        let asdf = arr[i].firstChild.lastChild.textContent;

                        asdf = asdf.substring(5);

                        let asdfArr = asdf.split("~");

                        modifyStarttime[0].value = asdfArr[0];
                        modifyEndtime[0].value = asdfArr[1];
                                                

                        modifyButton[0].textContent = "수정";
                    });

                    let s1 = parseInt(beforeStartday);
                    let e1 = parseInt(beforeEndday); 

                    let s2 = c3[0].selectedIndex;
                    let e2 = c4[0].selectedIndex;  


                    // 추가 ㄱㄱ~

                    if(cnt2 == 1){                                                                                    

                        for(let k = s2; k<e2 + 1; k++){
                            if(k >= s1 && k <= e1) continue;    
                            
                            let z1 = document.getElementsByClassName("modifyinput");
                            let z2 = document.getElementsByClassName("modifydropdown");
                            let z3 = document.getElementsByClassName("modifystartday");
                            let z4 = document.getElementsByClassName("modifyendday");
                            let z5 = document.getElementsByClassName("modifystarttime");
                            let z6 = document.getElementsByClassName("modifyendtime");
                            
                            // 새로 만들어서 추가하기
                            // 왜 새로 만들어야되는지는 나도 모름 새로 안만들면 한번만 적용됨..

                            let toAdd = document.createElement("div");

                            toAdd.setAttribute("class", colorValue);                        
                            toAdd.setAttribute("startday", z3[0].selectedIndex);
                            toAdd.setAttribute("endday", z4[0].selectedIndex);

                            let ZulAdd = document.createElement('ul');
                            let ZliAdd1 = document.createElement('li');
                    
                            ZliAdd1.setAttribute('class', 'txt');
                    
                            ZliAdd1.textContent = z1[0].value;
                    
                            ZulAdd.appendChild(ZliAdd1);
                    
                            let ZliAdd2 = document.createElement('li');
                            ZliAdd2.setAttribute('class', 'txt');
                    
                            ZliAdd2.textContent = "시간 : " + z5[0].value + "~" + z6[0].value;
                    
                            ZulAdd.appendChild(ZliAdd2);
                    
                            toAdd.appendChild(ZulAdd);

                            toAdd.addEventListener("click", function(){
                                fifthArea[0].style.display = 'block';       
                                body[0].style.backgroundColor = "#808080";
        
                                modifyInput[0].setAttribute("disabled", true);
                                modifyDropdown[0].setAttribute("disabled", true);
                                modifyStartday[0].setAttribute("disabled", true);
                                modifyEndday[0].setAttribute("disabled", true);
                                modifyStarttime[0].setAttribute("disabled", true);
                                modifyEndtime[0].setAttribute("disabled", true);    

                                modifyInput[0].value = ZliAdd1.textContent;

                                if(toAdd.getAttribute("class") == "redbox"){
                                    modifyDropdown[0].value = "sang";
                                }else if(toAdd.getAttribute("class") == "yellowbox"){
                                    modifyDropdown[0].value = "jung";
                                }else if(toAdd.getAnimations("class") == "greenbox"){
                                    modifyDropdown[0].value = "ha";
                                }                                

                                // let qwer1 = arr[i].getAttribute("startday");
                                // qwer1 = parseInt(qwer1);
                                // qwer1 = qwer1 + 1;
                                // qwer1 = qwer1.toString(); // 타입 내가 생각하는거랑 다르게 적용됨.
                                // let qwer2 = arr[i].getAttribute("endday");
                                // qwer2 = parseInt(qwer2);
                                // qwer2 = qwer2 + 1;
                                // qwer2 = qwer2.toString();
        
                                // modifyStartday[0].value = qwer1 ;                        
                                // modifyEndday[0].value = qwer2 ;  

                                let qwe1 = toAdd.getAttribute("startday");
                                qwe1 = parseInt(qwe1);
                                qwe1 = qwe1 + 1;
                                qwe1 = qwe1.toString();
                                let qwe2 = toAdd.getAttribute("endday");
                                qwe2 = parseInt(qwe2);
                                qwe2 = qwe2 + 1;
                                qwe2 = qwe2.toString();

                                modifyStartday[0].value = qwe1;
                                modifyEndday[0].value = qwe2;

                                let asd = ZliAdd2.textContent;
                                asd = asd.substring(5);
                                let asdArr = asd.split("~");

                                modifyStarttime[0].value = asdArr[0];
                                modifyEndtime[0].value = asdArr[1];
        
        
                                modifyButton[0].textContent = "수정";
                            });
                            

                            // toAdd에다가 이벤트리스너 추가해주기

                            // arr[i].addEventListener("click", function(){

                            //     fifthArea[0].style.display = 'block';       
                            //     body[0].style.backgroundColor = "#808080";
        
                            //     modifyInput[0].setAttribute("disabled", true);
                            //     modifyDropdown[0].setAttribute("disabled", true);
                            //     modifyStartday[0].setAttribute("disabled", true);
                            //     modifyEndday[0].setAttribute("disabled", true);
                            //     modifyStarttime[0].setAttribute("disabled", true);
                            //     modifyEndtime[0].setAttribute("disabled", true);
        
        
                            //     // modifyInput[0].value = c1[0].value;                        
                            //     // modifyDropdown[0].value = c2[0].value;
                            //     // modifyStartday[0].value = c3[0].selectedIndex + 1;
                            //     // modifyEndday[0].value = c4[0].selectedIndex + 1;                        
                            //     // modifyStarttime[0].value = c5[0].value;
                            //     // modifyEndtime[0].value = c6[0].value; 
                                
                            //     modifyInput[0].value = arr[i].firstChild.firstChild.textContent;
                            //     if(arr[i].getAttribute("class") == "redbox"){
                            //         modifyDropdown[0].value = "sang";
                            //     }else if(arr[i].getAttribute("class") == "yellowbox"){
                            //         modifyDropdown[0].value = "jung";
                            //     }else if(arr[i].getAttribute("class") == "greenbox"){
                            //         modifyDropdown[0].value = "ha";
                            //     }                        
                            //     // modifyStartday[0].value = arr[i].getAttribute("startday") + 1 + "";
                            //     let qwer1 = arr[i].getAttribute("startday");
                            //     qwer1 = parseInt(qwer1);
                            //     qwer1 = qwer1 + 1;
                            //     qwer1 = qwer1.toString(); // 타입 내가 생각하는거랑 다르게 적용됨.
                            //     let qwer2 = arr[i].getAttribute("endday");
                            //     qwer2 = parseInt(qwer2);
                            //     qwer2 = qwer2 + 1;
                            //     qwer2 = qwer2.toString();
        
                            //     modifyStartday[0].value = qwer1 ;                        
                            //     modifyEndday[0].value = qwer2 ;  
        
                            //     let asdf = arr[i].firstChild.lastChild.textContent;
        
                            //     asdf = asdf.substring(5);
        
                            //     let asdfArr = asdf.split("~");
        
                            //     modifyStarttime[0].value = asdfArr[0];
                            //     modifyEndtime[0].value = asdfArr[1];
                                                        
        
                            //     modifyButton[0].textContent = "수정";
                            // });
        
                            let addTarget2;
    
                            if(k == 0){
                                addTarget2 = document.querySelector("td." + "zero" + " > div");
                            }
    
                            if(k == 1){
                                addTarget2 = document.querySelector("td." + "one" + " > div");
                            }
    
                            if(k == 2){
                                addTarget2 = document.querySelector("td." + "two" + " > div");
                            }
    
                            if(k == 3){
                                addTarget2 = document.querySelector("td." + "three" + " > div");
                            }
    
                            if(k == 4){
                                addTarget2 = document.querySelector("td." + "four" + " > div");
                            }
    
                            if(k == 5){
                                addTarget2 = document.querySelector("td." + "five" + " > div");
                            }
                            
                            if(k == 6){
                                addTarget2 = document.querySelector("td." + "six" + " > div");
                            }           
                            
                            addTarget2.append(toAdd);
    
                        }
                    } //                    


                    // 제거하고 새로 갱신하는 부분 작성.

                    // let s1 = parseInt(beforeStartday);
                    // let e1 = parseInt(beforeEndday);
                    // let s2 = afterStartday;
                    // let e2 = afterEndday;                    

                    // alert(arr[i].parentElement.parentElement.getAttribute('class'));

                    for(let j = s1; j<e1 + 1; j++){
                        if(j >= s2 && j <= e2){                            
                            continue;
                        } 

                        if(j == 0){
                            if(arr[i].parentElement.parentElement.getAttribute('class') == 'zero'){
                                arr[i].remove();
                                break;
                            }
                        }

                        if(j == 1){
                            if(arr[i].parentElement.parentElement.getAttribute('class') == 'one'){
                                arr[i].remove();
                                break;
                            }
                        }

                        if(j == 2){
                            if(arr[i].parentElement.parentElement.getAttribute('class') == 'two'){
                                arr[i].remove();
                                break;
                            }
                        }

                        if(j == 3){
                            if(arr[i].parentElement.parentElement.getAttribute('class') == 'three'){
                                arr[i].remove();
                                break;
                            }
                        }

                        if(j == 4){
                            if(arr[i].parentElement.parentElement.getAttribute('class') == 'four'){
                                arr[i].remove();
                                break;
                            }
                        }

                        if(j == 5){
                            if(arr[i].parentElement.parentElement.getAttribute('class') == 'five'){
                                arr[i].remove();
                                break;
                            }
                        }

                        if(j == 6){
                            if(arr[i].parentElement.parentElement.getAttribute('class') == 'six'){
                                arr[i].remove();
                                break;
                            }
                        }
                    }                   //                                         
                    
                    
                }    
            }

            fifthArea[0].style.display = 'none';
            body[0].style.backgroundColor = "#fff";
            return;
        }//

        if(beforeDropdown == 'jung'){
            let arr = document.querySelectorAll("div.yellowbox");

            let c1 = document.getElementsByClassName("modifyinput");
            let c2 = document.getElementsByClassName("modifydropdown");
            let c3 = document.getElementsByClassName("modifystartday");
            let c4 = document.getElementsByClassName("modifyendday");
            let c5 = document.getElementsByClassName("modifystarttime");
            let c6 = document.getElementsByClassName("modifyendtime");

            // afterInput = c1[0].value;
            // afterDropdown = c2[0].value;
            // afterStartday = c3[0].selectedIndex;
            // afterEndday = c4[0].selectedIndex;
            // afterStarttime = c5[0].value;
            // afterEndtime = c6[0].value;            

            let timeCompare = "시간 : " + beforeStarttime + "~" + beforeEndtime;
            let timeAdjust = "시간 : " + c5[0].value + "~" + c6[0].value;         
            
            let cnt2 = 0;

            for(let i=0; i<arr.length; i++){                                
                                
                if(arr[i].firstChild.firstChild.textContent == beforeInput && 
                    arr[i].firstChild.lastChild.textContent == timeCompare &&
                    arr[i].getAttribute("startday") == beforeStartday &&
                    arr[i].getAttribute("endday") == beforeEndday){                    
                    
                    cnt2++;

                    // alert('z');

                    // startDayCompare = (arr[i].getAttribute("startday")) // 여기부터 !!                    

                    arr[i].firstChild.firstChild.textContent = c1[0].value;
                    arr[i].firstChild.lastChild.textContent = timeAdjust;
                    arr[i].removeAttribute("class");                                                                    
                                        
                    let colorValue;

                    if(c2[0].value == "sang"){
                        colorValue = "redbox";
                    }

                    if(c2[0].value == 'jung'){
                        colorValue = "yellowbox";
                    }

                    if(c2[0].value == 'ha'){
                        colorValue = "greenbox";
                    }

                    arr[i].setAttribute("class", colorValue);

                    arr[i].setAttribute("startday", c3[0].selectedIndex);
                    arr[i].setAttribute("endday", c4[0].selectedIndex);

                    // 여기서 이어서 하면 됨.
                    // arr[i] 에다가 addEventListenr 그리고 removeListenre                                    

                    arr[i].addEventListener("click", function(){

                        fifthArea[0].style.display = 'block';       
                        body[0].style.backgroundColor = "#808080";

                        modifyInput[0].setAttribute("disabled", true);
                        modifyDropdown[0].setAttribute("disabled", true);
                        modifyStartday[0].setAttribute("disabled", true);
                        modifyEndday[0].setAttribute("disabled", true);
                        modifyStarttime[0].setAttribute("disabled", true);
                        modifyEndtime[0].setAttribute("disabled", true);


                        // modifyInput[0].value = c1[0].value;                        
                        // modifyDropdown[0].value = c2[0].value;
                        // modifyStartday[0].value = c3[0].selectedIndex + 1;
                        // modifyEndday[0].value = c4[0].selectedIndex + 1;                        
                        // modifyStarttime[0].value = c5[0].value;
                        // modifyEndtime[0].value = c6[0].value; 
                        
                        modifyInput[0].value = arr[i].firstChild.firstChild.textContent;
                        if(arr[i].getAttribute("class") == "redbox"){
                            modifyDropdown[0].value = "sang";
                        }else if(arr[i].getAttribute("class") == "yellowbox"){
                            modifyDropdown[0].value = "jung";
                        }else if(arr[i].getAttribute("class") == "greenbox"){
                            modifyDropdown[0].value = "ha";
                        }                        
                        // modifyStartday[0].value = arr[i].getAttribute("startday") + 1 + "";
                        let qwer1 = arr[i].getAttribute("startday");
                        qwer1 = parseInt(qwer1);
                        qwer1 = qwer1 + 1;
                        qwer1 = qwer1.toString(); // 타입 내가 생각하는거랑 다르게 적용됨.
                        let qwer2 = arr[i].getAttribute("endday");
                        qwer2 = parseInt(qwer2);
                        qwer2 = qwer2 + 1;
                        qwer2 = qwer2.toString();

                        modifyStartday[0].value = qwer1 ;                        
                        modifyEndday[0].value = qwer2 ;  

                        let asdf = arr[i].firstChild.lastChild.textContent;

                        asdf = asdf.substring(5);

                        let asdfArr = asdf.split("~");

                        modifyStarttime[0].value = asdfArr[0];
                        modifyEndtime[0].value = asdfArr[1];
                                                

                        modifyButton[0].textContent = "수정";
                    });

                    let s1 = parseInt(beforeStartday);
                    let e1 = parseInt(beforeEndday); 

                    let s2 = c3[0].selectedIndex;
                    let e2 = c4[0].selectedIndex;  


                    // 추가 ㄱㄱ~

                    if(cnt2 == 1){                                                                                    

                        for(let k = s2; k<e2 + 1; k++){
                            if(k >= s1 && k <= e1) continue;    
                            
                            let z1 = document.getElementsByClassName("modifyinput");
                            let z2 = document.getElementsByClassName("modifydropdown");
                            let z3 = document.getElementsByClassName("modifystartday");
                            let z4 = document.getElementsByClassName("modifyendday");
                            let z5 = document.getElementsByClassName("modifystarttime");
                            let z6 = document.getElementsByClassName("modifyendtime");
                            
                            // 새로 만들어서 추가하기
                            // 왜 새로 만들어야되는지는 나도 모름 새로 안만들면 한번만 적용됨..

                            let toAdd = document.createElement("div");

                            toAdd.setAttribute("class", colorValue);                        
                            toAdd.setAttribute("startday", z3[0].selectedIndex);
                            toAdd.setAttribute("endday", z4[0].selectedIndex);

                            let ZulAdd = document.createElement('ul');
                            let ZliAdd1 = document.createElement('li');
                    
                            ZliAdd1.setAttribute('class', 'txt');
                    
                            ZliAdd1.textContent = z1[0].value;
                    
                            ZulAdd.appendChild(ZliAdd1);
                    
                            let ZliAdd2 = document.createElement('li');
                            ZliAdd2.setAttribute('class', 'txt');
                    
                            ZliAdd2.textContent = "시간 : " + z5[0].value + "~" + z6[0].value;
                    
                            ZulAdd.appendChild(ZliAdd2);
                    
                            toAdd.appendChild(ZulAdd);

                            toAdd.addEventListener("click", function(){
                                fifthArea[0].style.display = 'block';       
                                body[0].style.backgroundColor = "#808080";
        
                                modifyInput[0].setAttribute("disabled", true);
                                modifyDropdown[0].setAttribute("disabled", true);
                                modifyStartday[0].setAttribute("disabled", true);
                                modifyEndday[0].setAttribute("disabled", true);
                                modifyStarttime[0].setAttribute("disabled", true);
                                modifyEndtime[0].setAttribute("disabled", true);    

                                modifyInput[0].value = ZliAdd1.textContent;

                                if(toAdd.getAttribute("class") == "redbox"){
                                    modifyDropdown[0].value = "sang";
                                }else if(toAdd.getAttribute("class") == "yellowbox"){
                                    modifyDropdown[0].value = "jung";
                                }else if(toAdd.getAnimations("class") == "greenbox"){
                                    modifyDropdown[0].value = "ha";
                                }                                

                                // let qwer1 = arr[i].getAttribute("startday");
                                // qwer1 = parseInt(qwer1);
                                // qwer1 = qwer1 + 1;
                                // qwer1 = qwer1.toString(); // 타입 내가 생각하는거랑 다르게 적용됨.
                                // let qwer2 = arr[i].getAttribute("endday");
                                // qwer2 = parseInt(qwer2);
                                // qwer2 = qwer2 + 1;
                                // qwer2 = qwer2.toString();
        
                                // modifyStartday[0].value = qwer1 ;                        
                                // modifyEndday[0].value = qwer2 ;  

                                let qwe1 = toAdd.getAttribute("startday");
                                qwe1 = parseInt(qwe1);
                                qwe1 = qwe1 + 1;
                                qwe1 = qwe1.toString();
                                let qwe2 = toAdd.getAttribute("endday");
                                qwe2 = parseInt(qwe2);
                                qwe2 = qwe2 + 1;
                                qwe2 = qwe2.toString();

                                modifyStartday[0].value = qwe1;
                                modifyEndday[0].value = qwe2;

                                let asd = ZliAdd2.textContent;
                                asd = asd.substring(5);
                                let asdArr = asd.split("~");

                                modifyStarttime[0].value = asdArr[0];
                                modifyEndtime[0].value = asdArr[1];
        
        
                                modifyButton[0].textContent = "수정";
                            });
                            

                            // toAdd에다가 이벤트리스너 추가해주기

                            // arr[i].addEventListener("click", function(){

                            //     fifthArea[0].style.display = 'block';       
                            //     body[0].style.backgroundColor = "#808080";
        
                            //     modifyInput[0].setAttribute("disabled", true);
                            //     modifyDropdown[0].setAttribute("disabled", true);
                            //     modifyStartday[0].setAttribute("disabled", true);
                            //     modifyEndday[0].setAttribute("disabled", true);
                            //     modifyStarttime[0].setAttribute("disabled", true);
                            //     modifyEndtime[0].setAttribute("disabled", true);
        
        
                            //     // modifyInput[0].value = c1[0].value;                        
                            //     // modifyDropdown[0].value = c2[0].value;
                            //     // modifyStartday[0].value = c3[0].selectedIndex + 1;
                            //     // modifyEndday[0].value = c4[0].selectedIndex + 1;                        
                            //     // modifyStarttime[0].value = c5[0].value;
                            //     // modifyEndtime[0].value = c6[0].value; 
                                
                            //     modifyInput[0].value = arr[i].firstChild.firstChild.textContent;
                            //     if(arr[i].getAttribute("class") == "redbox"){
                            //         modifyDropdown[0].value = "sang";
                            //     }else if(arr[i].getAttribute("class") == "yellowbox"){
                            //         modifyDropdown[0].value = "jung";
                            //     }else if(arr[i].getAttribute("class") == "greenbox"){
                            //         modifyDropdown[0].value = "ha";
                            //     }                        
                            //     // modifyStartday[0].value = arr[i].getAttribute("startday") + 1 + "";
                            //     let qwer1 = arr[i].getAttribute("startday");
                            //     qwer1 = parseInt(qwer1);
                            //     qwer1 = qwer1 + 1;
                            //     qwer1 = qwer1.toString(); // 타입 내가 생각하는거랑 다르게 적용됨.
                            //     let qwer2 = arr[i].getAttribute("endday");
                            //     qwer2 = parseInt(qwer2);
                            //     qwer2 = qwer2 + 1;
                            //     qwer2 = qwer2.toString();
        
                            //     modifyStartday[0].value = qwer1 ;                        
                            //     modifyEndday[0].value = qwer2 ;  
        
                            //     let asdf = arr[i].firstChild.lastChild.textContent;
        
                            //     asdf = asdf.substring(5);
        
                            //     let asdfArr = asdf.split("~");
        
                            //     modifyStarttime[0].value = asdfArr[0];
                            //     modifyEndtime[0].value = asdfArr[1];
                                                        
        
                            //     modifyButton[0].textContent = "수정";
                            // });
        
                            let addTarget2;
    
                            if(k == 0){
                                addTarget2 = document.querySelector("td." + "zero" + " > div");
                            }
    
                            if(k == 1){
                                addTarget2 = document.querySelector("td." + "one" + " > div");
                            }
    
                            if(k == 2){
                                addTarget2 = document.querySelector("td." + "two" + " > div");
                            }
    
                            if(k == 3){
                                addTarget2 = document.querySelector("td." + "three" + " > div");
                            }
    
                            if(k == 4){
                                addTarget2 = document.querySelector("td." + "four" + " > div");
                            }
    
                            if(k == 5){
                                addTarget2 = document.querySelector("td." + "five" + " > div");
                            }
                            
                            if(k == 6){
                                addTarget2 = document.querySelector("td." + "six" + " > div");
                            }           
                            
                            addTarget2.append(toAdd);
    
                        }
                    } //                    


                    // 제거하고 새로 갱신하는 부분 작성.

                    // let s1 = parseInt(beforeStartday);
                    // let e1 = parseInt(beforeEndday);
                    // let s2 = afterStartday;
                    // let e2 = afterEndday;                    

                    // alert(arr[i].parentElement.parentElement.getAttribute('class'));

                    for(let j = s1; j<e1 + 1; j++){
                        if(j >= s2 && j <= e2){                            
                            continue;
                        } 

                        if(j == 0){
                            if(arr[i].parentElement.parentElement.getAttribute('class') == 'zero'){
                                arr[i].remove();
                                break;
                            }
                        }

                        if(j == 1){
                            if(arr[i].parentElement.parentElement.getAttribute('class') == 'one'){
                                arr[i].remove();
                                break;
                            }
                        }

                        if(j == 2){
                            if(arr[i].parentElement.parentElement.getAttribute('class') == 'two'){
                                arr[i].remove();
                                break;
                            }
                        }

                        if(j == 3){
                            if(arr[i].parentElement.parentElement.getAttribute('class') == 'three'){
                                arr[i].remove();
                                break;
                            }
                        }

                        if(j == 4){
                            if(arr[i].parentElement.parentElement.getAttribute('class') == 'four'){
                                arr[i].remove();
                                break;
                            }
                        }

                        if(j == 5){
                            if(arr[i].parentElement.parentElement.getAttribute('class') == 'five'){
                                arr[i].remove();
                                break;
                            }
                        }

                        if(j == 6){
                            if(arr[i].parentElement.parentElement.getAttribute('class') == 'six'){
                                arr[i].remove();
                                break;
                            }
                        }
                    }                   //                                         
                    
                    
                }    
            }

            fifthArea[0].style.display = 'none';
            body[0].style.backgroundColor = "#fff";
            return;
        }//

        if(beforeDropdown == 'ha'){
            let arr = document.querySelectorAll("div.greenbox");

            let c1 = document.getElementsByClassName("modifyinput");
            let c2 = document.getElementsByClassName("modifydropdown");
            let c3 = document.getElementsByClassName("modifystartday");
            let c4 = document.getElementsByClassName("modifyendday");
            let c5 = document.getElementsByClassName("modifystarttime");
            let c6 = document.getElementsByClassName("modifyendtime");

            // afterInput = c1[0].value;
            // afterDropdown = c2[0].value;
            // afterStartday = c3[0].selectedIndex;
            // afterEndday = c4[0].selectedIndex;
            // afterStarttime = c5[0].value;
            // afterEndtime = c6[0].value;            

            let timeCompare = "시간 : " + beforeStarttime + "~" + beforeEndtime;
            let timeAdjust = "시간 : " + c5[0].value + "~" + c6[0].value;         
            
            let cnt2 = 0;

            for(let i=0; i<arr.length; i++){                                
                                
                if(arr[i].firstChild.firstChild.textContent == beforeInput && 
                    arr[i].firstChild.lastChild.textContent == timeCompare &&
                    arr[i].getAttribute("startday") == beforeStartday &&
                    arr[i].getAttribute("endday") == beforeEndday){                    
                    
                    cnt2++;

                    // alert('z');

                    // startDayCompare = (arr[i].getAttribute("startday")) // 여기부터 !!                    

                    arr[i].firstChild.firstChild.textContent = c1[0].value;
                    arr[i].firstChild.lastChild.textContent = timeAdjust;
                    arr[i].removeAttribute("class");                                                                    
                                        
                    let colorValue;

                    if(c2[0].value == "sang"){
                        colorValue = "redbox";
                    }

                    if(c2[0].value == 'jung'){
                        colorValue = "yellowbox";
                    }

                    if(c2[0].value == 'ha'){
                        colorValue = "greenbox";
                    }

                    arr[i].setAttribute("class", colorValue);

                    arr[i].setAttribute("startday", c3[0].selectedIndex);
                    arr[i].setAttribute("endday", c4[0].selectedIndex);

                    // 여기서 이어서 하면 됨.
                    // arr[i] 에다가 addEventListenr 그리고 removeListenre                                    

                    arr[i].addEventListener("click", function(){

                        fifthArea[0].style.display = 'block';       
                        body[0].style.backgroundColor = "#808080";

                        modifyInput[0].setAttribute("disabled", true);
                        modifyDropdown[0].setAttribute("disabled", true);
                        modifyStartday[0].setAttribute("disabled", true);
                        modifyEndday[0].setAttribute("disabled", true);
                        modifyStarttime[0].setAttribute("disabled", true);
                        modifyEndtime[0].setAttribute("disabled", true);


                        // modifyInput[0].value = c1[0].value;                        
                        // modifyDropdown[0].value = c2[0].value;
                        // modifyStartday[0].value = c3[0].selectedIndex + 1;
                        // modifyEndday[0].value = c4[0].selectedIndex + 1;                        
                        // modifyStarttime[0].value = c5[0].value;
                        // modifyEndtime[0].value = c6[0].value; 
                        
                        modifyInput[0].value = arr[i].firstChild.firstChild.textContent;
                        if(arr[i].getAttribute("class") == "redbox"){
                            modifyDropdown[0].value = "sang";
                        }else if(arr[i].getAttribute("class") == "yellowbox"){
                            modifyDropdown[0].value = "jung";
                        }else if(arr[i].getAttribute("class") == "greenbox"){
                            modifyDropdown[0].value = "ha";
                        }                        
                        // modifyStartday[0].value = arr[i].getAttribute("startday") + 1 + "";
                        let qwer1 = arr[i].getAttribute("startday");
                        qwer1 = parseInt(qwer1);
                        qwer1 = qwer1 + 1;
                        qwer1 = qwer1.toString(); // 타입 내가 생각하는거랑 다르게 적용됨.
                        let qwer2 = arr[i].getAttribute("endday");
                        qwer2 = parseInt(qwer2);
                        qwer2 = qwer2 + 1;
                        qwer2 = qwer2.toString();

                        modifyStartday[0].value = qwer1 ;                        
                        modifyEndday[0].value = qwer2 ;  

                        let asdf = arr[i].firstChild.lastChild.textContent;

                        asdf = asdf.substring(5);

                        let asdfArr = asdf.split("~");

                        modifyStarttime[0].value = asdfArr[0];
                        modifyEndtime[0].value = asdfArr[1];
                                                

                        modifyButton[0].textContent = "수정";
                    });

                    let s1 = parseInt(beforeStartday);
                    let e1 = parseInt(beforeEndday); 

                    let s2 = c3[0].selectedIndex;
                    let e2 = c4[0].selectedIndex;  


                    // 추가 ㄱㄱ~

                    if(cnt2 == 1){                                                                                    

                        for(let k = s2; k<e2 + 1; k++){
                            if(k >= s1 && k <= e1) continue;    
                            
                            let z1 = document.getElementsByClassName("modifyinput");
                            let z2 = document.getElementsByClassName("modifydropdown");
                            let z3 = document.getElementsByClassName("modifystartday");
                            let z4 = document.getElementsByClassName("modifyendday");
                            let z5 = document.getElementsByClassName("modifystarttime");
                            let z6 = document.getElementsByClassName("modifyendtime");
                            
                            // 새로 만들어서 추가하기
                            // 왜 새로 만들어야되는지는 나도 모름 새로 안만들면 한번만 적용됨..

                            let toAdd = document.createElement("div");

                            toAdd.setAttribute("class", colorValue);                        
                            toAdd.setAttribute("startday", z3[0].selectedIndex);
                            toAdd.setAttribute("endday", z4[0].selectedIndex);

                            let ZulAdd = document.createElement('ul');
                            let ZliAdd1 = document.createElement('li');
                    
                            ZliAdd1.setAttribute('class', 'txt');
                    
                            ZliAdd1.textContent = z1[0].value;
                    
                            ZulAdd.appendChild(ZliAdd1);
                    
                            let ZliAdd2 = document.createElement('li');
                            ZliAdd2.setAttribute('class', 'txt');
                    
                            ZliAdd2.textContent = "시간 : " + z5[0].value + "~" + z6[0].value;
                    
                            ZulAdd.appendChild(ZliAdd2);
                    
                            toAdd.appendChild(ZulAdd);

                            toAdd.addEventListener("click", function(){
                                fifthArea[0].style.display = 'block';       
                                body[0].style.backgroundColor = "#808080";
        
                                modifyInput[0].setAttribute("disabled", true);
                                modifyDropdown[0].setAttribute("disabled", true);
                                modifyStartday[0].setAttribute("disabled", true);
                                modifyEndday[0].setAttribute("disabled", true);
                                modifyStarttime[0].setAttribute("disabled", true);
                                modifyEndtime[0].setAttribute("disabled", true);    

                                modifyInput[0].value = ZliAdd1.textContent;

                                if(toAdd.getAttribute("class") == "redbox"){
                                    modifyDropdown[0].value = "sang";
                                }else if(toAdd.getAttribute("class") == "yellowbox"){
                                    modifyDropdown[0].value = "jung";
                                }else if(toAdd.getAnimations("class") == "greenbox"){
                                    modifyDropdown[0].value = "ha";
                                }                                

                                // let qwer1 = arr[i].getAttribute("startday");
                                // qwer1 = parseInt(qwer1);
                                // qwer1 = qwer1 + 1;
                                // qwer1 = qwer1.toString(); // 타입 내가 생각하는거랑 다르게 적용됨.
                                // let qwer2 = arr[i].getAttribute("endday");
                                // qwer2 = parseInt(qwer2);
                                // qwer2 = qwer2 + 1;
                                // qwer2 = qwer2.toString();
        
                                // modifyStartday[0].value = qwer1 ;                        
                                // modifyEndday[0].value = qwer2 ;  

                                let qwe1 = toAdd.getAttribute("startday");
                                qwe1 = parseInt(qwe1);
                                qwe1 = qwe1 + 1;
                                qwe1 = qwe1.toString();
                                let qwe2 = toAdd.getAttribute("endday");
                                qwe2 = parseInt(qwe2);
                                qwe2 = qwe2 + 1;
                                qwe2 = qwe2.toString();

                                modifyStartday[0].value = qwe1;
                                modifyEndday[0].value = qwe2;

                                let asd = ZliAdd2.textContent;
                                asd = asd.substring(5);
                                let asdArr = asd.split("~");

                                modifyStarttime[0].value = asdArr[0];
                                modifyEndtime[0].value = asdArr[1];
        
        
                                modifyButton[0].textContent = "수정";
                            });
                            

                            // toAdd에다가 이벤트리스너 추가해주기

                            // arr[i].addEventListener("click", function(){

                            //     fifthArea[0].style.display = 'block';       
                            //     body[0].style.backgroundColor = "#808080";
        
                            //     modifyInput[0].setAttribute("disabled", true);
                            //     modifyDropdown[0].setAttribute("disabled", true);
                            //     modifyStartday[0].setAttribute("disabled", true);
                            //     modifyEndday[0].setAttribute("disabled", true);
                            //     modifyStarttime[0].setAttribute("disabled", true);
                            //     modifyEndtime[0].setAttribute("disabled", true);
        
        
                            //     // modifyInput[0].value = c1[0].value;                        
                            //     // modifyDropdown[0].value = c2[0].value;
                            //     // modifyStartday[0].value = c3[0].selectedIndex + 1;
                            //     // modifyEndday[0].value = c4[0].selectedIndex + 1;                        
                            //     // modifyStarttime[0].value = c5[0].value;
                            //     // modifyEndtime[0].value = c6[0].value; 
                                
                            //     modifyInput[0].value = arr[i].firstChild.firstChild.textContent;
                            //     if(arr[i].getAttribute("class") == "redbox"){
                            //         modifyDropdown[0].value = "sang";
                            //     }else if(arr[i].getAttribute("class") == "yellowbox"){
                            //         modifyDropdown[0].value = "jung";
                            //     }else if(arr[i].getAttribute("class") == "greenbox"){
                            //         modifyDropdown[0].value = "ha";
                            //     }                        
                            //     // modifyStartday[0].value = arr[i].getAttribute("startday") + 1 + "";
                            //     let qwer1 = arr[i].getAttribute("startday");
                            //     qwer1 = parseInt(qwer1);
                            //     qwer1 = qwer1 + 1;
                            //     qwer1 = qwer1.toString(); // 타입 내가 생각하는거랑 다르게 적용됨.
                            //     let qwer2 = arr[i].getAttribute("endday");
                            //     qwer2 = parseInt(qwer2);
                            //     qwer2 = qwer2 + 1;
                            //     qwer2 = qwer2.toString();
        
                            //     modifyStartday[0].value = qwer1 ;                        
                            //     modifyEndday[0].value = qwer2 ;  
        
                            //     let asdf = arr[i].firstChild.lastChild.textContent;
        
                            //     asdf = asdf.substring(5);
        
                            //     let asdfArr = asdf.split("~");
        
                            //     modifyStarttime[0].value = asdfArr[0];
                            //     modifyEndtime[0].value = asdfArr[1];
                                                        
        
                            //     modifyButton[0].textContent = "수정";
                            // });
        
                            let addTarget2;
    
                            if(k == 0){
                                addTarget2 = document.querySelector("td." + "zero" + " > div");
                            }
    
                            if(k == 1){
                                addTarget2 = document.querySelector("td." + "one" + " > div");
                            }
    
                            if(k == 2){
                                addTarget2 = document.querySelector("td." + "two" + " > div");
                            }
    
                            if(k == 3){
                                addTarget2 = document.querySelector("td." + "three" + " > div");
                            }
    
                            if(k == 4){
                                addTarget2 = document.querySelector("td." + "four" + " > div");
                            }
    
                            if(k == 5){
                                addTarget2 = document.querySelector("td." + "five" + " > div");
                            }
                            
                            if(k == 6){
                                addTarget2 = document.querySelector("td." + "six" + " > div");
                            }           
                            
                            addTarget2.append(toAdd);
    
                        }
                    } //                    


                    // 제거하고 새로 갱신하는 부분 작성.

                    // let s1 = parseInt(beforeStartday);
                    // let e1 = parseInt(beforeEndday);
                    // let s2 = afterStartday;
                    // let e2 = afterEndday;                    

                    // alert(arr[i].parentElement.parentElement.getAttribute('class'));

                    for(let j = s1; j<e1 + 1; j++){
                        if(j >= s2 && j <= e2){                            
                            continue;
                        } 

                        if(j == 0){
                            if(arr[i].parentElement.parentElement.getAttribute('class') == 'zero'){
                                arr[i].remove();
                                break;
                            }
                        }

                        if(j == 1){
                            if(arr[i].parentElement.parentElement.getAttribute('class') == 'one'){
                                arr[i].remove();
                                break;
                            }
                        }

                        if(j == 2){
                            if(arr[i].parentElement.parentElement.getAttribute('class') == 'two'){
                                arr[i].remove();
                                break;
                            }
                        }

                        if(j == 3){
                            if(arr[i].parentElement.parentElement.getAttribute('class') == 'three'){
                                arr[i].remove();
                                break;
                            }
                        }

                        if(j == 4){
                            if(arr[i].parentElement.parentElement.getAttribute('class') == 'four'){
                                arr[i].remove();
                                break;
                            }
                        }

                        if(j == 5){
                            if(arr[i].parentElement.parentElement.getAttribute('class') == 'five'){
                                arr[i].remove();
                                break;
                            }
                        }

                        if(j == 6){
                            if(arr[i].parentElement.parentElement.getAttribute('class') == 'six'){
                                arr[i].remove();
                                break;
                            }
                        }
                    }                   //                                         
                    
                    
                }    
            }

            fifthArea[0].style.display = 'none';
            body[0].style.backgroundColor = "#fff";
            return;
        }//
    }

    if(cnt == 0){
        modifyInput[0].removeAttribute("disabled");
        modifyDropdown[0].removeAttribute("disabled");
        modifyStartday[0].removeAttribute("disabled");
        modifyEndday[0].removeAttribute("disabled");
        modifyStarttime[0].removeAttribute("disabled");
        modifyEndtime[0].removeAttribute("disabled");

        modifyButton[0].textContent = "수정완료";    
        
        let a1 = document.getElementsByClassName("modifyinput");
        let a2 = document.getElementsByClassName("modifydropdown");
        let a3 = document.getElementsByClassName("modifystartday");
        let a4 = document.getElementsByClassName("modifyendday");
        let a5 = document.getElementsByClassName("modifystarttime");
        let a6 = document.getElementsByClassName("modifyendtime");        

        // if(beforeInput == undefined) 
        beforeInput = a1[0].value;
        // if(beforeDropdown == undefined) 
        beforeDropdown = a2[0].value;
        // if(beforeStartday == undefined) 
        beforeStartday = a3[0].selectedIndex;
        // if(beforeEndday == undefined) 
        beforeEndday = a4[0].selectedIndex;
        // if(beforeStarttime == undefined) 
        beforeStarttime = a5[0].value;
        // if(beforeEndtime == undefined) 
        beforeEndtime = a6[0].value;

        cnt++;


        return;
    }      

})

modifyDeleteButton[0].addEventListener("click", function(){

    let v1 = document.getElementsByClassName("modifyinput");
    let v2 = document.getElementsByClassName("modifydropdown");
    let v3 = document.getElementsByClassName("modifystartday");
    let v4 = document.getElementsByClassName("modifyendday");
    let v5 = document.getElementsByClassName("modifystarttime");
    let v6 = document.getElementsByClassName("modifyendtime");

    if(v2[0].value == "sang"){
        let arr1 = document.querySelectorAll("div.redbox");        
        let timeCompare1 = "시간 : " + v5[0].value + "~" + v6[0].value;

        for(let i = 0; i<arr1.length; i++){
            // alert(arr1[i].firstChild.firstChild.textContent);
            // alert(v1[0].value);

            // alert(arr1[i].firstChild.lastChild.textContent);
            // alert(timeCompare1);

            // alert(arr1[i].getAttribute("startday"));
            // alert(v3[0].value);
            if(arr1[i].firstChild.firstChild.textContent == v1[0].value && 
                arr1[i].firstChild.lastChild.textContent == timeCompare1 &&
                arr1[i].getAttribute("startday") == v3[0].selectedIndex &&
                arr1[i].getAttribute("endday") == v4[0].selectedIndex){

                //

                // alert("zz")
                arr1[i].remove();
                
            }
        }

        fifthArea[0].style.display = 'none';
        body[0].style.backgroundColor = "#fff";
        return;
    }

    if(v2[0].value == "jung"){
        let arr1 = document.querySelectorAll("div.yellowbox");        
        let timeCompare1 = "시간 : " + v5[0].value + "~" + v6[0].value;

        for(let i = 0; i<arr1.length; i++){
            // alert(arr1[i].firstChild.firstChild.textContent);
            // alert(v1[0].value);

            // alert(arr1[i].firstChild.lastChild.textContent);
            // alert(timeCompare1);

            // alert(arr1[i].getAttribute("startday"));
            // alert(v3[0].value);
            if(arr1[i].firstChild.firstChild.textContent == v1[0].value && 
                arr1[i].firstChild.lastChild.textContent == timeCompare1 &&
                arr1[i].getAttribute("startday") == v3[0].selectedIndex &&
                arr1[i].getAttribute("endday") == v4[0].selectedIndex){

                //

                // alert("zz")
                arr1[i].remove();
                
            }
        }
        
        fifthArea[0].style.display = 'none';
        body[0].style.backgroundColor = "#fff";
        return;
    }

    if(v2[0].value == "ha"){
        let arr1 = document.querySelectorAll("div.greenbox");        
        let timeCompare1 = "시간 : " + v5[0].value + "~" + v6[0].value;

        for(let i = 0; i<arr1.length; i++){
            // alert(arr1[i].firstChild.firstChild.textContent);
            // alert(v1[0].value);

            // alert(arr1[i].firstChild.lastChild.textContent);
            // alert(timeCompare1);

            // alert(arr1[i].getAttribute("startday"));
            // alert(v3[0].value);
            if(arr1[i].firstChild.firstChild.textContent == v1[0].value && 
                arr1[i].firstChild.lastChild.textContent == timeCompare1 &&
                arr1[i].getAttribute("startday") == v3[0].selectedIndex &&
                arr1[i].getAttribute("endday") == v4[0].selectedIndex){

                //

                // alert("zz")
                arr1[i].remove();
                
            }
        }
        
        fifthArea[0].style.display = 'none';
        body[0].style.backgroundColor = "#fff";
        return;
    }
    
});

howSort[0].addEventListener("change", function(){
    let result = howSort[0].value;    

    if(result == "priority"){
        
        for(let zz = 0; zz<7; zz++){

            let SunBoxOrigin;

            if(zz == 0){
                SunBoxOrigin = document.querySelector("td.zero > div");
            }

            if(zz == 1){
                SunBoxOrigin = document.querySelector("td.one > div");
            }

            if(zz == 2){
                SunBoxOrigin = document.querySelector("td.two > div");
            }

            if(zz == 3){
                SunBoxOrigin = document.querySelector("td.three > div");
            }

            if(zz == 4){
                SunBoxOrigin = document.querySelector("td.four > div");
            }

            if(zz == 5){
                SunBoxOrigin = document.querySelector("td.five > div");
            }

            if(zz == 6){
                SunBoxOrigin = document.querySelector("td.six > div");
            }

            let SunBox = SunBoxOrigin.children;        
            let SunBoxArray = Array.prototype.slice.call(SunBox);
    
            SunBoxArray.sort(function(a,b){
                let str1 = a.getAttribute("class");
                let str2 = b.getAttribute("class");
                
                if(str1 == "redbox"){
                    return -1;
                }else if(str1 == "yellowbox"){
                    if(str2 == "redbox"){
                        return 1;
                    }else{
                        return -1;
                    }
                }else{
                    return 1;
                }            
            });
    
            // 박스 내부의 모든 요소를 지우자.
            while(SunBoxOrigin.firstChild){
                SunBoxOrigin.firstChild.remove();
            }
            
            // 정렬한 순서대로 다시 추가해주자.
            for(let c = 0; c<SunBoxArray.length; c++){
                SunBoxOrigin.append(SunBoxArray[c]);
            }

        }    
        
        return;
    }

    if(result == "time"){

        for(let zz = 0; zz<7; zz++){

            let SunBoxOrigin;

            if(zz == 0){
                SunBoxOrigin = document.querySelector("td.zero > div");
            }

            if(zz == 1){
                SunBoxOrigin = document.querySelector("td.one > div");
            }

            if(zz == 2){
                SunBoxOrigin = document.querySelector("td.two > div");
            }

            if(zz == 3){
                SunBoxOrigin = document.querySelector("td.three > div");
            }

            if(zz == 4){
                SunBoxOrigin = document.querySelector("td.four > div");
            }

            if(zz == 5){
                SunBoxOrigin = document.querySelector("td.five > div");
            }

            if(zz == 6){
                SunBoxOrigin = document.querySelector("td.six > div");
            }

            let SunBox = SunBoxOrigin.children;        
            let SunBoxArray = Array.prototype.slice.call(SunBox);
    
            SunBoxArray.sort(function(a,b){
                // let str2 = b.getAttribute("class");

                // let asdf = arr[i].firstChild.lastChild.textContent;

                // asdf = asdf.substring(5);

                // let asdfArr = asdf.split("~");

                // modifyStarttime[0].value = asdfArr[0];
                // modifyEndtime[0].value = asdfArr[1];

                let time1 = a.lastChild.textContent;                
                let zxcv = time1.indexOf(":");
                time1 = time1.substring(zxcv+1);
                let time1Arr = time1.split("~");
                let starttime1 = time1Arr[0];
                let starttime1Arr = starttime1.split(":");

                let compare1 = parseInt(starttime1Arr[0]);
                let compare2 = parseInt(starttime1Arr[1]);

                let CompareTime1 = compare1 * 60 + compare2;
                
                // console.log(time1);
                // console.log(CompareTime1);

                ////
                
                let time11 = b.lastChild.textContent;
                let zxcv2 = time11.indexOf(":");
                time11 = time11.substring(zxcv2+1);             
                let time1Arr11 = time11.split("~");
                let starttime11 = time1Arr11[0];
                let starttimeArr111 = starttime11.split(":");

                let compare11 = parseInt(starttimeArr111[0]);
                let compare22 = parseInt(starttimeArr111[1]);

                let CompareTime2 = compare11 * 60 + compare22;

                // console.log(time11);
                // console.log(CompareTime2);

                if(CompareTime1 > CompareTime2) {
                    return 1;
                }else{
                    return -1;
                }

            });
    
    
            // 박스 내부의 모든 요소를 지우자.
            while(SunBoxOrigin.firstChild){
                SunBoxOrigin.firstChild.remove();
            }
            
            // 정렬한 순서대로 다시 추가해주자.
            for(let c = 0; c<SunBoxArray.length; c++){
                SunBoxOrigin.append(SunBoxArray[c]);
            }

        }            
        
        return;
    }

    if(result == "name"){

        for(let zz = 0; zz<7; zz++){

            let SunBoxOrigin;

            if(zz == 0){
                SunBoxOrigin = document.querySelector("td.zero > div");
            }

            if(zz == 1){
                SunBoxOrigin = document.querySelector("td.one > div");
            }

            if(zz == 2){
                SunBoxOrigin = document.querySelector("td.two > div");
            }

            if(zz == 3){
                SunBoxOrigin = document.querySelector("td.three > div");
            }

            if(zz == 4){
                SunBoxOrigin = document.querySelector("td.four > div");
            }

            if(zz == 5){
                SunBoxOrigin = document.querySelector("td.five > div");
            }

            if(zz == 6){
                SunBoxOrigin = document.querySelector("td.six > div");
            }

            let SunBox = SunBoxOrigin.children;        
            let SunBoxArray = Array.prototype.slice.call(SunBox);
    
            SunBoxArray.sort(function(a,b){
                let val1 = a.lastChild.textContent;
                let val2 = b.lastChild.textContent;

                if(val1 > val2){
                    return 1;
                }else{
                    return -1;
                }                

            });
    
    
            // 박스 내부의 모든 요소를 지우자.
            while(SunBoxOrigin.firstChild){
                SunBoxOrigin.firstChild.remove();
            }
            
            // 정렬한 순서대로 다시 추가해주자.
            for(let c = 0; c<SunBoxArray.length; c++){
                SunBoxOrigin.append(SunBoxArray[c]);
            }

        }     
        
        return;
    }
})
/*
    <div class="content">
        <input type="checkbox">
        <p>123</p>
        <div class="del"></div>
    </div>
    */

    let input=document.querySelector("input");
    let con=document.querySelector(".con");
    let con1=document.querySelector(".con1");

    let num1=document.querySelector("#num1");
    let num2=document.querySelector("#num2");

    let arr1,arr2;
    arr1=localStorage.arr1?localStorage.arr1.split(","):[];
    arr2=localStorage.arr2?localStorage.arr2.split(","):[];


    function UpDate(){
        localStorage.arr1=arr1.join(",");
        localStorage.arr2=arr2.join(",");

        con.innerHTML="";
        con1.innerHTML="";

        num1.innerHTML=arr1.length;
        num2.innerHTML=arr2.length;
        arr1.forEach((item,index)=>{
            let content=document.createElement("div");
            content.className="content";
            let input=document.createElement("input");
            input.setAttribute("type","checkbox");
            input.onclick=function(){
                arr1.splice(index,1);
                arr2.unshift(item);
                UpDate();
            };
            let p=document.createElement("p");
            p.innerHTML=item;

            p.onclick=function () {
                let input=document.createElement("input");
                input.style="width:100px;outline:none;border:none";
                let text1=p.innerHTML;
                input.value=text1;
                input.value="";
                p.innerHTML=input.value;
                p.appendChild(input);
                input.focus();
                input.onblur=function(){
                    arr1.splice(index,1,input.value);
                    UpDate();
                };
            };
            let del=document.createElement("div");
            del.className="del";

            del.onclick=function () {
                arr1.splice(index,1);
                UpDate();
            };
            content.appendChild(input);
            content.appendChild(p);
            content.appendChild(del);
            con.appendChild(content);

        });
        arr2.forEach((item,index)=>{
            let content=document.createElement("div");
            content.className="content";
            content.style.opacity="0.6";
            let input=document.createElement("input");
            input.setAttribute("type","checkbox");
            input.setAttribute("checked","checked");

            input.onclick=function(){
                arr1.unshift(item);
                arr2.splice(index,1);
                UpDate();
            };
            let p=document.createElement("p");
            p.innerHTML=item;

            p.onclick=function () {
                let input=document.createElement("input");
                input.style="width:100px;outline:none;border:none";
                let text1=p.innerHTML;
                input.value=text1;
                input.value="";
                p.innerHTML=input.value;
                p.appendChild(input);
                input.focus();
                input.onblur=function(){
                    arr2.splice(index,1,input.value);
                    UpDate();
                };
            };
            let del=document.createElement("div");
            del.className="del";

            del.onclick=function () {
                arr1.splice(index,1);
                UpDate();
            };
            content.appendChild(input);
            content.appendChild(p);
            content.appendChild(del);
            con1.appendChild(content);

        });

        input.onkeydown=function (e) {                         //onkeydown
            // console.log(e.keyCode);
            if(e.keyCode==13&&this.value!=""){                 //keyCode
                arr1.unshift(this.value);
                this.value="";
                UpDate();
            }
        };

    }

    UpDate();

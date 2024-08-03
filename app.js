# JavaScript code for adding logic

document.querySelector("#prank").addEventListener("click", () => {
    removeButton();
});

function removeButton() {
    let t=0;
    setInterval(()=>{
        t-=10;
        document.querySelector("#prank").style.transform=`translateX(${t}vh)`;
    }, 100)
    setTimeout(()=>{
        const p=document.createElement("p");
        p.innerText="Oh no! Looks like that button did not like being clicked. You may try attempting this question:";
        p.classList.add("rem5");
        document.querySelector("body").appendChild(p);
        document.querySelector("#prank").remove();
        document.querySelector(".to_rem").remove();
        setTimeout(()=>{
        addQuestions();
    }, 1500)
    }, 1500)
}

function addQuestions(){
    const question=document.createElement("p");
    const but1=document.createElement("button");
    const but2=document.createElement("button");
    question.innerText="Are you stupid?";
    but1.innerText="Yes";
    but2.innerText="No";
    document.querySelector("body").appendChild(question);
    document.querySelector("body").appendChild(but1);
    document.querySelector("body").appendChild(but2);
    but2.classList.add("rotate");
    document.querySelector(".rotate").addEventListener("mouseover", ()=>{
        
        setInterval(()=>{
            let sign=Math.floor(Math.random()*2)+1;
            const maxX=window.innerWidth/2;
            let x=Math.floor(Math.random()*maxX);
            let y=Math.floor(Math.random()*90)+7;
            if(sign==1)
            document.querySelector(".rotate") .style.transform=`translate(${x}px, ${-y}vh)`;
            else
            document.querySelector(".rotate") .style.transform=`translate(${-x}px, ${-y}vh)`;           
        }, 200)
        

        setTimeout(()=>{
            document.querySelector(".rem2").remove();
            document.querySelector(".rem3").remove();
            document.querySelector("#rem4").remove();
            document.querySelector(".rem5").remove();
            question.innerHTML="<p>Nah! You better admit that you are stupid&#129322;</p>"
            document.querySelector("#mike").src="/cheems.jpg"
            document.querySelector("#mike").style.width="80%";
        }, 2500)
    });

    but1.addEventListener("click", ()=>{
        window.location.href = '/goodbye.html';
    })
    
}

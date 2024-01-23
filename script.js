const submit = document.querySelector("#submit")
const reset = document.querySelector("#reset")
const randomColorBtn = document.querySelector("#random-color")

submit.addEventListener("click",()=>{
    const color = document.querySelector("#color-selector")
    const size = document.querySelector("#size-selector")
    const containerR = document.querySelector(".container-right")
    if(containerR){
        containerR.remove();
    }
    const containerRight = document.createElement("div");
    containerRight.classList.add("container-right");

    const container = document.querySelector(".container");

    const sq = size.value;
    console.log(sq);
    const blockColor = color.value;
    console.log(blockColor)

    for(var i = 0; i<sq; i++){
        const row = document.createElement("div");
        row.classList.add("row")
        for(var j=0;j<sq; j++){
            const div = document.createElement("div");
            div.classList.add("no-highlight");
            div.style.width = (window.innerHeight*0.75)/sq+"px";
            div.style.height = (window.innerHeight*0.65)/sq+"px";
            
            //Event Listener
            div.addEventListener("dragover",()=>{
                div.classList.add("highlight");
                div.classList.remove("no-highlight")
            })

            row.appendChild(div);
        }
        containerRight.appendChild(row)
    }
    container.appendChild(containerRight)
})

reset.addEventListener("click",()=>{
    const selected = document.querySelectorAll(".highlight")
    selected.forEach((div)=>{
        div.classList.remove("highlight");
        div.classList.add("no-highlight")
    });
})

// How to change css class property values??
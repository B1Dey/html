const btn = document.getElementsByTagName("button");

  console.log(btn)  
for (let i =0; i < btn.length; i++ ){
    btn[i].addEventListener("click", addtocart)
}

function addtocart(){
    const paragraph = document.createElement("div")
    const textnode = document.createTextNode(this.parentElement.getElementsByTagName("p")[0].innerText);
    const textnode2 = this.parentElement.getElementsByTagName("img")[0].getAttribute("src");
    const image = document.createElement("img");
    image.setAttribute("src", textnode2)
    console.log(image)
    paragraph.appendChild(image).width="70"
    paragraph.appendChild(textnode)

    

  document.querySelector(".innercart").appendChild(paragraph)
    
}

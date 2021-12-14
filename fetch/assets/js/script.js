let row = document.querySelector(".row");

fetch("https://jsonplaceholder.typicode.com/photos").then((res)=>res.json()).then((res)=>{
    res.forEach((data, index) => {
        if (index<=11) {
            console.log(data);
            let card = document.createElement("div");
            let image = document.createElement("img");
            let cardBody = document.createElement("div");
            let title = document.createElement("p");
            card.style.width = "18rem";
            card.className = "card"
            image.className = "card-img-top"
            cardBody.className = "card-body"
            title.className = "card-text"
            image.srcset = `${data.url}`
            title.innerText = `${data.title}`
            cardBody.append(title)
            card.append(cardBody, image)
            row.append(card)
            
        }

    });

})
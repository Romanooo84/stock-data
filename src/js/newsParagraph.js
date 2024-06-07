export const newParagraph=(data)=>{
    let paragraph = document.querySelector("#news")
    const markup=data.map((article)=>
      `<div class='newsCotainer'>  
        <div class='newsDiv'>
          <h2>${article.title}</h2>
          <p>${article.date}</p>
          <div class='div-afterp'>
            <p>${article.content}</p>
          </div>
        </div>
      </div>`)
    .join("");
    paragraph.insertAdjacentHTML("beforeend", markup);
}
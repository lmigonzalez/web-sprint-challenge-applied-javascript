import axios from "axios";

const Card = (article) => {
  // TASK 5
  // ---------------------
  // Implement this function, which should return the markup you see below.
  // It takes as its only argument an "article" object with `headline`, `authorPhoto` and `authorName` properties.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup exactly!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  // Add a listener for click events so that when a user clicks on a card, the headline of the article is logged to the console.
  //
  // <div class="card">
  //   <div class="headline">{ headline }</div>
  //   <div class="author">
  //     <div class="img-container">
  //       <img src={ authorPhoto }>
  //     </div>
  //     <span>By { authorName }</span>
  //   </div>
  // </div>
  //

  const mainDiv = document.createElement('div');
  const headlineDiv = document.createElement('div');
  const authorDiv = document.createElement('div');
  const imgDiv = document.createElement('div');
  const img = document.createElement('img');
  const span = document.createElement('span');

  mainDiv.classList.add('card');
  headlineDiv.classList.add('headline');
  authorDiv.classList.add('author');
  imgDiv.classList.add('img-container')

  headlineDiv.textContent = article.headline;
  img.src = article.authorPhoto;
  span.textContent = article.authorName;

  imgDiv.appendChild(img);

  authorDiv.appendChild(imgDiv);
  authorDiv.appendChild(span);

  mainDiv.appendChild(headlineDiv);
  mainDiv.appendChild(authorDiv);

  mainDiv.addEventListener('click', showHeadLine)

  function showHeadLine(e){
    console.log(headlineDiv.innerHTML)
  }

  return mainDiv


}

const cardAppender = (selector) => {
  // TASK 6
  // ---------------------
  // Implement this function that takes a css selector as its only argument.
  // It should obtain articles from this endpoint: `http://localhost:5000/api/articles` (test it in Postman/HTTPie!).
  // However, the articles do not come organized in a single, neat array. Inspect the response closely!
  // Create a card from each and every article object in the response, using the Card component.
  // Append each card to the element in the DOM that matches the selector passed to the function.
  //

  axios.get('http://localhost:5000/api/articles')
  .then(res=>{
    const articlesArray = res.data.articles
    // console.log(articlesArray)

    articlesArray.bootstrap.forEach(element => {
      document.querySelector(selector).appendChild(Card(element))
     
    });
    
    articlesArray.javascript.forEach(element => {
      document.querySelector(selector).appendChild(Card(element))
     
    });

    articlesArray.jquery.forEach(element => {
      document.querySelector(selector).appendChild(Card(element))
      
    });

    articlesArray.node.forEach(element => {
      document.querySelector(selector).appendChild(Card(element))
     
    });

    articlesArray.technology.forEach(element => {
      document.querySelector(selector).appendChild(Card(element))
     
    });
     

    })



    
    

    
  
  .catch(err=>{
    console.error(err)
  })
}

export { Card, cardAppender }

const Header = (title, date, temp) => {
  // TASK 1
  // ---------------------
  // Implement this function taking `title`, `date` and `temp` as its 3 args and returning the markup below.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup exactly!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  //
  //  <div class="header">
  //    <span class="date">{ date }</span>
  //    <h1>{ title }</h1>
  //    <span class="temp">{ temp }</span>
  //  </div>
  //

  const elementDiv = document.createElement('div');
  const elementSpan = document.createElement('span');
  const elementH1 = document.createElement('h1');
  const elementSpan2 = document.createElement('span');

  elementDiv.classList.add('header');
  elementSpan.classList.add('date');
  elementSpan2.classList.add('temp');

  elementSpan.textContent = date;
  elementH1.textContent = title;
  elementSpan2.textContent = temp;

  elementDiv.appendChild(elementSpan);
  elementDiv.appendChild(elementH1);
  elementDiv.appendChild(elementSpan2);

  return elementDiv

}

// console.log(Header('Web Developer', 'Feb 11', '70'))

const headerAppender = (selector) => {
  // TASK 2
  // ---------------------
  // Implement this function taking a css selector as its only argument.
  // It should create a header using the Header component above, passing arguments of your choosing.
  // It should append the header to the element in the DOM that matches the given selector.
  //
  const classSelector = document.querySelector(selector)
  
  classSelector.appendChild(Header('Web Developer', 'Feb 11', '70'))
 
}

export { Header, headerAppender }

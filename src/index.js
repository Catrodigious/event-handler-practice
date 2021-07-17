import "./styles.css";

/*
  Find the article in which the button that was clicked belongs.
  If the text on the button that was clicked is a 'V' then set the display property of the article's body to 'none'. Also set the text on the button to '>'.
  If the text on the button that was clicked is not a 'V' then set the display property of the article's body to 'block'. Also set the text on the button to 'V'.

  Hint: To write this function, you may need a method to find a node that matches a provided selector string. As a learning how to learn exercise, do a Google search on something like "MDN js find parent of child element". Read the method's documentation and use it to write the function.
*/

function eventHandler(evt){
  evt.preventDefault();
  if (evt.target.innerText === ">"){
    evt.target.innerText = "V";
    // article_head --> article --> article_body --> style change
    evt.target.parentElement.parentElement.nextElementSibling.style.display = "block";
  }else if (evt.target.innerText === "V"){
    evt.target.innerText = ">";
    evt.target.parentElement.parentElement.nextElementSibling.style.display = "none";
  }
}

function expandArticleBody() {
  const articleButtons = document.querySelectorAll('.expand_button');
  Array.from(articleButtons).map((button)=>{
    button.addEventListener("click", eventHandler);
  })
}

/*
  Find the article in which the button that was clicked belongs.
  If the text on the button is '+' then add the .highlight class to the article and set the text on the button to '-'.
  If the text on the button is not '+' then remove the .highlight class from the article and set the text on the button to '+'.
*/
function highlightHandler(evt){
  evt.preventDefault();
  if (evt.target.innerText === "+"){
    // article_controls --> article --> add highlight class
    evt.target.parentElement.parentElement.classList.add('highlight');
    evt.target.innerText = "-";
  }else if (evt.target.innerText === "-"){
    evt.target.parentElement.parentElement.classList.remove('highlight');
    evt.target.innerText = "+";
  }
}

function highlightArticle() {
  const highlightButtons = document.querySelectorAll('.highlightBtn');
  Array.from(highlightButtons).map((hb)=>{
    hb.addEventListener("click", highlightHandler);
  })
}

function main() {
  expandArticleBody();
  highlightArticle();
}

main();

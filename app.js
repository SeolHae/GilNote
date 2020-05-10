const search_wrapper = document.querySelector(".search-wrapper");
const input = search_wrapper.querySelector("input");
const h1 = search_wrapper.querySelector("h1");
const memo = document.getElementsByClassName("memo-area");

const CLICKED_CN = "clicked";

function change_color() {
    h1.classList.toggle(CLICKED_CN);
}

function search(event) {
    if (event.keyCode === 13) {
        const current_value = input.value;
        input.value = "";
        console.log(current_value);
        filter(current_value);
    }
}

function handleColorClick(i) {

}
  
function init() {
    h1.addEventListener("mouseover", change_color);
    h1.addEventListener("mouseout", change_color);
    input.addEventListener("keyup", search);
    
    for(var i = 0; i < memo.length; i++) {
        memo[i].addEventListener("click", function(){
            console.log(i);
            });
    }
}

init();


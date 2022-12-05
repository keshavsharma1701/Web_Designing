window.addEventListener('load', bindEvents);

function bindEvents(){
    // Register the Events
    document.getElementById('plus').addEventListener('click', plus);
    document.getElementById('minus').addEventListener('click', minus);
}
var counter = 0;
const plus = ()=> document.querySelector('#output').innerText = ++counter;
const minus = ()=> document.querySelector('#output').innerText = --counter;
// function plus(){
//     counter++;
//     document.getElementById('output').innerText = counter;
// }
// function minus(){
//     counter--;
//     document.getElementById('output').innerText = counter;
// }
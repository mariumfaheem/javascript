let divElem = document.createElement("div");
let val = localStorage.getItem("text");
if (val == null) {
    let txt = document.createTextNode('This is my element click toedit it:')
}
else {

}
divElem.className = "elm"
divElem.setAttribute('id', 'elm')

divElem.setAttribute('style', 'border:2px solid black,width:154px')
divElem.appendChild(txt)
let container = document.querySelector(".container")
let first = document.getElementById("myfirst")

container.insertBefore(divElem, first)

divElem.appendChild(txt)

divElem.addEventListener("click", function (e) {
    let noTextArea = document.getElementsByClassName('textarea').length
    if (noTextArea == 0) {
        let html = elm.innerHTML
        divElem.innerHTML = ` <textarea class="form-control textarea" id="textarea" rows="3">${html}</textarea>`;

    }
    //listen for blur enent on text area
    let textarea = document.getElementById('textarea')
    textarea.addEventListener('blur', function () {
        elm.innerHTML = textarea.value
    })


});



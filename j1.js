//let cont=document.querySelector('.no')
//cont=document.querySelector('.container')
//child node text comment wagera ko bhi leta h so we will use children
//console.log(cont.childNodes)
//console.log(cont.children)
//let nodeName=cont.childNodes[1].nodeName;
//console.log(nodeName)

let cont1=document.querySelector('.container')
//console.log(cont1.children[0].children[0].children)
//to access first child of any query selector wagera
/*console.log(cont1.firstChild)  //yeh phela element dega ab wo kuch bhi hoskta h text wagera bhi
console.log(cont1.firstElementChild) //yeh hamesha phela element dega 
console.log(cont1.lastChild)
console.log(cont1.lastElementChild)
console.log(cont1.childElementCount) //cout of culd element
*/
console.log(cont1.firstElementChild.parentNode)
console.log(cont1.firstElementChild.nextElementSibling)
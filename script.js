// console.log(document)
// console.log(document.getElementsByClassName("plus"))
// console.log(document.querySelector("#total"))
// console.log(document.getElementById("total"))
// console.log(document.getElementsByTagName("img"))
const btnAddTag=document.getElementsByClassName("plus");
const checkTag=document.getElementsByClassName("check")
// console.log(checkTag)
// console.log(btnAddTag)
for (var i=0;i<btnAddTag.length;i++){
    btnAddTag[i].addEventListener("click",add)
    checkTag[i].addEventListener("click",total)
};
function add(event){
// console.log(event)
var btnAdd=event.target;
// console.log(btnAdd)
var divElt=btnAdd.parentElement;
// console.log(divElt)
var quentityTag=divElt.querySelector("p");
// console.log(quentity)
var quentity=Number(quentityTag.innerHTML);
// console.log(typeof(quentity))
quentity++;
// console.log(quentity)
quentityTag.innerHTML=quentity;
var trElt=divElt.parentElement.parentElement
// console.log(trElt)
var unitePrice=Number(trElt.querySelector(".unitPrice").innerHTML)
// console.log(typeof(unitePrice))
var priceTag=trElt.querySelector(".price")
// console.log(priceTag)
var price =Number(priceTag.innerHTML)

price=quentity*unitePrice
// console.log(price)
priceTag.innerHTML=price
};
// this total function
function total(event){
    var checkTag=event.target
    // console.log(checkTag)
 var priceValue=Number(checkTag.parentElement.parentElement.querySelector(".price").innerHTML)
//  console.log(priceValue)
var totalTag=document.querySelector("#total")
// console.log(totalTag)
var totalValue=Number(totalTag.innerHTML)

var  btnPlus=checkTag.parentElement.parentElement.querySelector(".plus")
console.log(btnPlus)
var btnMinus=checkTag.parentElement.parentElement.querySelector(".minus")
console.log(btnMinus)



if(checkTag.checked===true){
    totalValue+=priceValue
    btnPlus.setAttribute("disabled",true)
}
else{
    totalValue-=priceValue
    btnPlus.removeAttribute("disabled")
}
totalTag.innerHTML=totalValue



}
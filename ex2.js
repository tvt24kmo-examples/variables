//callback esimerkki

setTimeout(doSomething,2000);

function doSomething(){
    console.log("Demonstrating the callbacks");
}
console.log("The application is started"); 

//usein callback funktiot kirjoitetaan ns. anonyymeinä
//eli ilman nimeä

setTimeout(function(){
    console.log("Demonstrating the callbacks");
},2000);

console.log("The application is started"); 

//voidaan käyttää myös ns. nuolifunktiota

setTimeout(() => {
    console.log("Demonstrating the callbacks");
},2000);

console.log("The application is started"); 
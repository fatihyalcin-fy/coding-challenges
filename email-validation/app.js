/* const eMail = document.getElementById("email");
const buttonCheck = document.querySelector(".button");
const result = document.querySelector(".result")

buttonCheck.addEventListener("click", ()=>{
    if(eMail.value.includes("@") == false) {
        result.innerHTML += " Please insert valid e-mail address."
    }

    else if(eMail.value[-3] == "." || eMail);

}); */

//üç sayı ortalaması alma

/* let number1 = prompt("İlk sayı: ");
let number2 = prompt("İlk sayı: ");
let number3 = prompt("İlk sayı: ");

let result = (Number(number1) + Number(number2) + Number(number3)) / 3

console.log(result); */

//üçgenin cinsini veren fonksiyon

let birinciKenar = parseInt(prompt("Birinci kenarın uzunluğunu giriniz: "))
let ikinciKenar = parseInt(prompt("İkinci kenarın uzunluğunu giriniz: "))
let ucuncuKenar = parseInt(prompt("Üçüncü kenarın uzunluğunu giriniz: "))


if((birinciKenar == ikinciKenar) && (birinciKenar == ucuncuKenar)){
    alert("Eşkenar");
}else if(birinciKenar != ikinciKenar && birinciKenar != ucuncuKenar && ikinciKenar != ucuncuKenar){
    alert("Çeşitkenar");
}else{
    alert("İkiz kenar");
}
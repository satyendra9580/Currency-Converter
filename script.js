const base_url="https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/eur/jpy.json";

const dropdown=document.querySelector(".drop-down select");

for(currency in countryList){
    console.log(currency);
}
// for(let select of dropdown){
//     for(curcode in countryList){
//         let newOption=document.createElement("option");
//         newOption.innerText=curcode;
//         newOption.value=curcode;
//         select.append(newOption);
//     }
// }

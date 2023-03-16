// const data = fetch("https://catfact.ninja/fact")
//         .then((res) => {
//             return res.json();
//         }).then((data) => {
//             console.log(data.fact);
//         })

async function getCatFact(){
    const res = await fetch("https://catfact.ninja/fact");
    const data = await res.json();
    return data.fact;
}

const bt = document.querySelector("button");
const h = document.querySelector("h1");

bt.addEventListener("click" ,async () => {
    //let gf =  await getCatFact();
   h.innerText = await getCatFact();
})
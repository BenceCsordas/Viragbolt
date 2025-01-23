const urlflowers = "https://viragbolt-backend.onrender.com/api/flowers"
const urlcategories = "https://viragbolt-backend.onrender.com/api/categories"
let products = []
function loadCategories(e){
    e.preventDefault()
    console.log(e.target.tagName);
    getData(urlcategories, renderCateg)
    getData(urlflowers, renderFlowers)
}

function renderCateg(data){
    document.querySelector(".lcategories").innerHTML = ""
    console.log(data);
    data.forEach((x)=>{
        document.querySelector(".lcategories").innerHTML += `
        <button type="button" class="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 ">${x.nev}</button>
        `
    })
}


function filterFlowers(e){
    console.log(e.target.textContent);
    const categ = e.target.textContent
    const filteredData = products.filter((x)=>x.kategoria_nev == categ)
    console.log(filteredData)
    loadProducts(filteredData)
    

}

function renderFlowers(data){
    products = data


    console.log(data);

}

function loadProducts(data){
    document.querySelector(".filteredProducts").innerHTML = ""
    data.forEach((x)=>{
        document.querySelector(".filteredProducts").innerHTML += `

                         <div class="card flex flex-col w-full max-w-sm mx-auto rounded-3xl shadow-xl" style="width: 400px;">
                            <img id="card-image" src="${x.kepUrl}" alt="" class="w-full rounded-t-3xl" style="">
                            <div class="card-content flex-1 p-5 bg-white rounded-b-3xl text-center dark:bg-neutral-700">
                                <h3 class="text-xl font-semibold text-gray-900 mb-2.5" id="title" style="color: rgb(255, 255, 255);">${x.nev}</h3>
                                <p class="text-base font-normal text-gray-700 mb-5" id="text" style="color: rgb(214, 214, 214);">${x.ar}Ft, ${x.keszlet} db</p>
                                <div class="flex items-center gap-5" id="button-div"><button popovertarget="mypopover-${x.id}" id="button-1" class="w-full py-2.5 text-center rounded-xl text-white bg-indigo-600 hover:bg-indigo-700 text-base font-semibold transition-all duration-300">Leírás</button></div>
                            </div>
                        </div>

                        <div id="mypopover-${x.id}" class="popover_container text-white bg-slate-600" popover>
        
            
                                <h3 class="font-bold">Név: ${x.nev}</h3>
                                <img class="popover_img" src="${x.kepUrl}" alt="">
                                <p>${x.leiras}</p>
        
                         </div>

        `
    })

}
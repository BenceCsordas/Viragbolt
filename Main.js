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
    document.querySelector(".searchbar").innerHTML = `
    <div class="flex items-center max-w-sm mx-auto mb-1">   
            <label for="simple-search" class="sr-only">Search</label>
            <div class="relative w-full">
                
                <input type="text" id="searched" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Termék keresése..." required />
            </div>
            <button type="submit" onclick="Search()" class="p-2.5 ms-2 text-sm font-medium text-white bg-blue-700 rounded-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                <svg id="nagyito" class="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>    
                </svg>
                <span class="sr-only">Search</span>
            </button>
        </div>
    `
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

function Search(){

    const searched = document.getElementById("searched").value
    console.log(searched);
    console.log(products);
    
    const filteredData = products.filter((x)=>{
        if(x.nev.toLowerCase() == searched.toLowerCase() || x.nev.toLowerCase().includes(searched.toLowerCase()) || x.leiras.toLowerCase() == searched.toLowerCase() ||x.leiras.toLowerCase().includes(searched.toLowerCase())){
            return x
        }
        
    })
    console.log(filteredData);
    
    loadProducts(filteredData)

    
    
    

}
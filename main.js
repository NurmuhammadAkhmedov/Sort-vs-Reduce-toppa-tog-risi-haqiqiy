import pokemons from "./pokemons.js";

let productList = document.querySelector(".product_list");
const formElement = document.querySelector("#form");
const nameInput = document.querySelector("#name");
const pokemonSelect = document.querySelector("#pokemon");
const sortedElement = document.querySelector("#sorted");
const searchBtn = document.querySelector("#search");



// generate products to Products list
function showProduct(arr) {
    productList.innerHTML = arr.map(item =>`
        <li class="product_item">
                <div class="tartib">${item.num}</div>

                <h2 class="name">${item.name}</h2>

                <img src="${item.img}" alt="" class="product_img">

                <div class="tip">${item.type.join(" ")}</div>

                <h3 class="count">
                    Candy count: ${item.candy_count}
                </h3>

                <h3 class="weight">${item.weight}</h3>

                <h3 class="fire">${item.weaknesses.join(" ")}</h3>

                <div class="time">${item.spawn_time}</div>
            </li>
        `)
}

showProduct(pokemons)
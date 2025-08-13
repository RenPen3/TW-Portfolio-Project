import { cards } from "/js/cards.js";

const conHTML = cards.map(function (card) {
  return ` <div class="overflow-hidden border-1 border-white hover:border-1 hover:border-black duration-700 ease-in-out rounded-md hover:shadow-lg">
            <a href="#" class="bg-zinc-400">
              <img
                class="hover:scale-104 duration-700 ease-in-out z-0 object-cover w-full h-120"
                src="${card.image}"
                alt="image 1"
              />
            </a>
            <div class="p-5 bg-zinc-100">
              <h3 class="text-xl font-bold">${card.title}</h3>
              <h4 class="text-md font-600 mb-2">
                ${card.subTitle}
              </h4>
            </div>
          </div>`;
});

document.getElementById("con").innerHTML = conHTML.join("");

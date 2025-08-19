import { cards } from "/js/cards.js";

const conHTML = cards
  .map(function (card) {
    return ` <div class="overflow-hidden border-1 border-white hover:border-1 hover:border-black duration-700 ease-in-out rounded-md hover:shadow-lg">
            <a href="${card.linkURL}" class="bg-zinc-400 z-1" target="_blank">
              <img
                class="block hover:scale-104 duration-700 ease-in-out z-0 object-cover w-full h-120"
                src="${card.image}"
                alt="image 1"
              />
            </a>
            <div class="p-5 bg-zinc-100 z-5 text-left">
              <h3 class="text-2xl font-black">${card.title}</h3>
              <h4 class="text-md font-bold mb-2 text-zinc-500">
                ${card.subTitle}
              </h4>
                <p class="font-400 text-zinc-500">${card.description}</p>
            </div>
          </div>`;
  })
  .join("");

document.getElementById("con").innerHTML = conHTML;

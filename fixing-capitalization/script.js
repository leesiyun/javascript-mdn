const list = document.querySelector(".output ul");
list.innerHTML = "";
const cities = ["lonDon", "ManCHESTer", "BiRmiNGHAM", "liVERpoOL"];

for (var i = 0; i < cities.length; i++) {
  const input = cities[i];
  const lower = input.toLowerCase();
  const firstLetter = lower.slice(0, 1);
  const capitalized = lower.replace(firstLetter, firstLetter.toUpperCase());
  var result = capitalized;
  const listItem = document.createElement("li");
  listItem.textContent = result;
  list.appendChild(listItem);
}

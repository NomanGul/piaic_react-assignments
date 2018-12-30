/* Combining .filter() and .map()
 *
 * Using the musicData array, .filter, and .map():
 *   - filter the athleteData array down to just the athletes that earn
 *     more than 10,000,000 euros
 *   - on the array returned from .filter(), call .map()
 *   - use .map() to return a string for each item in the array in the
 *     following format: "<athlete> is a great football player"
 *   - store the array returned form .map() in a new "popular" variable
 *
 * Note:
 *   - do not delete the athleteData variable
 *   - do not alter any of the athleteData content
 */

const athleteData = [
  { athlete: "Lionel Messi", team: "Barcelona", income: 40000000 },
  { athlete: "Cristiano Ronaldo", team: "Juventus", income: 30000000 },
  { athlete: "Neymar", team: "Paris Saint-Germain", income: 36800000 },
  { athlete: "Eden Hazard", team: "Chelsea", income: 10400000 },
  { athlete: "Mohamed Salah", team: "Liverpool", income: 4680000 },
  {
    athlete: "Kylian Mbappé",
    team: "Paris Saint-Germain: An American Musical",
    income: 17500000
  },
  { athlete: "Luka Modrić", team: "Real Madrid", income: 9360000 },
  { athlete: "Harry Kane", team: "Tottenham Hotspurs", income: 17600000 },
  { athlete: "Kevin De Bruyne", team: "Manchester City", income: 5980000 },
  { athlete: "Paul Pogba", team: "Manchester United", income: 15080000 }
];

const filteredData = athleteData.filter(data => {
  return data.income > 10000000;
});

const popular = filteredData.map(data => {
  return `<li>${data.athlete} is a great football player</li>`;
});

console.log(popular);

const getUl = document.querySelector(".listOfAtheletes");
getUl.innerHTML = popular;

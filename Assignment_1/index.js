/* Using .map()
 *
 * Using the athleteData array and .map():
 *   - return a string for each item in the array in the following format
 *     <athlete> in <team> earned <income> euros
 *   - store the returned data in a new athleteIncomeStrings variable
 *
 * Note:
 *   - do not delete the athleteData variable
 *   - do not alter any of the athleteData content
 *   - do not format the income number, leave it as a long string of digits
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

const athleteIncomeStrings = athleteData.map(data => {
  return `<li>${data.athlete} in ${data.team} earned ${data.income} euros</li>`;
});

// console.log(athleteIncomeStrings);

const getUl = document.querySelector(".listOfAtheletes");
getUl.innerHTML = athleteIncomeStrings;

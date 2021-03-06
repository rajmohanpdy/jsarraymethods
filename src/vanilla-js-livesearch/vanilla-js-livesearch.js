const data = [
  { name: "Ryan", country: "Saint Lucia" },
  // { name: "Malcolm", country: "Portugal" },
  // { name: "Dalton", country: "Brazil" },
  // { name: "Imelda", country: "Chad" },
  // { name: "Aubrey", country: "Bulgaria" },
  // { name: "Brittany", country: "Guatemala" },
  // { name: "Jelani", country: "El Salvador" },
  // { name: "Merritt", country: "Honduras" },
  // { name: "Shannon", country: "Zambia" },
  // { name: "Leroy", country: "Cyprus" },
  // { name: "Abel", country: "Greenland" },
  // { name: "Demetria", country: "Trinidad and Tobago" },
  // { name: "Kelly", country: "Jordan" },
  // { name: "Beverly", country: "Korea, South" },
  // { name: "Yasir", country: "Brunei" },
  // { name: "Addison", country: "New Caledonia" },
  // { name: "Coby", country: "Guatemala" },
  // { name: "Rowan", country: "Lesotho" },
  // { name: "Kasimir", country: "United Arab Emirates" },
  // { name: "Karly", country: "Bermuda" },
  // { name: "Damian", country: "Trinidad and Tobago" },
  // { name: "Bevis", country: "New Caledonia" },
  // { name: "Colin", country: "Chile" },
  // { name: "Kenneth", country: "Indonesia" },
  // { name: "Chester", country: "Falkland Islands" },
  // { name: "Elvis", country: "Christmas Island" },
  // { name: "Diana", country: "El Salvador" },
  // { name: "Maya", country: "Tokelau" },
  // { name: "Katell", country: "Svalbard and Jan Mayen Islands" },
  // { name: "Ori", country: "Japan" },
  // { name: "Ria", country: "Sweden" },
  // { name: "Seth", country: "Indonesia" },
  // { name: "Rooney", country: "Iran" },
  // { name: "Ronan", country: "Fiji" },
  // { name: "Herrod", country: "American Samoa" },
  // { name: "Chanda", country: "Niger" },
  // { name: "Imani", country: "Croatia" },
  // { name: "Zachery", country: "Ghana" },
  // { name: "Suki", country: "Austria" },
  // { name: "Rachel", country: "Liechtenstein" },
  // { name: "Leslie", country: "Korea, North" },
  // { name: "Chastity", country: "Sudan" },
  // { name: "Sydney", country: "Malaysia" },
  // { name: "Ahmed", country: "Saint Pierre and Miquelon" },
  // { name: "Quail", country: "Puerto Rico" },
  // { name: "Ima", country: "Paraguay" },
  // { name: "Harrison", country: "Armenia" },
  // { name: "Meredith", country: "Venezuela" },
  // { name: "Orson", country: "Ecuador" },
  // { name: "Rudyard", country: "Burundi" },
  // { name: "Lillian", country: "Somalia" },
  // { name: "Jessica", country: "Cyprus" },
  // { name: "Beck", country: "Mozambique" },
  // { name: "Lev", country: "Sudan" },
  // { name: "Edan", country: "Latvia" },
  // { name: "Naomi", country: "Rwanda" },
  // { name: "Quentin", country: "Fiji" },
  // { name: "Kelly", country: "Viet Nam" },
  // { name: "Delilah", country: "Madagascar" },
  // { name: "Porter", country: "Benin" },
  // { name: "Slade", country: "China" },
  // { name: "Yuli", country: "Grenada" },
  // { name: "Larissa", country: "Samoa" },
  // { name: "Hermione", country: "French Polynesia" },
  // { name: "Jeremy", country: "Botswana" },
  // { name: "Garrison", country: "Argentina" },
  // { name: "Alexis", country: "Switzerland" },
  // { name: "Riley", country: "Malawi" },
  // { name: "Jermaine", country: "Bulgaria" },
  // { name: "Wylie", country: "Central African Republic" },
  // { name: "Jenette", country: "Oman" },
  // { name: "Angelica", country: "Laos" },
  // { name: "Noel", country: "Guatemala" },
  // { name: "Melyssa", country: "Peru" },
  // { name: "Raven", country: "Anguilla" },
  // { name: "Nissim", country: "Chad" },
  // { name: "Timothy", country: "Macedonia" },
  // { name: "Leroy", country: "Eritrea" },
  // { name: "Veda", country: "Lesotho" },
  // { name: "Neil", country: "Guam" },
  // { name: "Sasha", country: "Samoa" },
  // { name: "Karly", country: "China" },
  // { name: "Kasimir", country: "Jamaica" },
  // { name: "Zachery", country: "Sudan" },
  // { name: "Zia", country: "Iceland" },
  // { name: "Cassandra", country: "Singapore" },
  // { name: "Zeus", country: "Serbia" },
  // { name: "Rachel", country: "Armenia" },
  // { name: "Drake", country: "India" },
  // { name: "Janna", country: "Peru" },
  // { name: "Daphne", country: "Mayotte" },
  // { name: "Ahmed", country: "Moldova" },
  // { name: "Yael", country: "Sao Tome and Principe" },
  // { name: "Charity", country: "Estonia" },
  // { name: "Chase", country: "Ethiopia" },
  // { name: "Jessamine", country: "Curaçao" },
  // { name: "Edward", country: "Morocco" },
  // { name: "Jack", country: "Kuwait" },
  // { name: "Gregory", country: "Zimbabwe" },
  // { name: "Hiroko", country: "Kenya" },
];

const search = document.getElementById("search");
const results = document.getElementById("results");
let search_term = "";

const showList = () => {
  results.innerHTML = "";
  data
    .filter((item) => {
      return (
        item.country.toLowerCase().includes(search_term) ||
        item.name.toLowerCase().includes(search_term)
      );
    })
    .forEach((e) => {
      const li = document.createElement("li");
      li.innerHTML = `<i>Name:</i> ${e.name}  || <i>Country:</i> ${e.country}`;
      results.appendChild(li);
    });
};

//Instead of the forEach loop you could use a map function, so that you don't need the results closure.

/*const showList = () => {
  results.innerHTML = "";

  const newElements = data
  .filter((item) => {
    return (
      item.country.toLowerCase().includes(search_term) ||
      item.name.toLowerCase().includes(search_term)
    );
  })
  .map((e) => {
    const li = document.createElement("li");
    li.innerHTML = `<i>Name:</i> ${e.name}  || <i>Country:</i> ${e.country}`;
     return li;
  });
results.append(...newElements);
};*/

showList();

search.addEventListener("input", (event) => {
  search_term = event.target.value.toLowerCase();
  showList();
});

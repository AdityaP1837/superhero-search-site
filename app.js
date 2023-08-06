//! Variables

let powerstatsOption = document.getElementById("tab-1");
let biographyOption = document.getElementById("tab-2");
let appearanceOption = document.getElementById("tab-3");
let connectionsOption = document.getElementById("tab-4");

let powerstatsTab = document.querySelector(".powerstats");
let biographyTab = document.querySelector(".biography");
let appearanceTab = document.querySelector(".appearance");
let connectionsTab = document.querySelector(".connections");

let searchBox = document.querySelector(".searchbar");
let searchBar = document.getElementById("searchbox");
let searchResult = document.querySelector(".searched-result");

let imageBox = document.querySelector(".img-box>img");
let nameTitle = document.querySelector(".title>h2");
let searchIcon = document.getElementById("icon");

//! Toggling options btn and tabs

window.addEventListener("load", () => {
	powerstatsOption.classList.add("active-tab");
	biographyOption.classList.remove("active-tab");
	appearanceOption.classList.remove("active-tab");
	connectionsOption.classList.remove("active-tab");

	powerstatsTab.style.display = "block";
	biographyTab.style.display = "none";
	appearanceTab.style.display = "none";
	connectionsTab.style.display = "none";
});

powerstatsOption.addEventListener("click", () => {
	if (!powerstatsOption.classList.contains("active-tab")) {
		powerstatsOption.classList.add("active-tab");
		biographyOption.classList.remove("active-tab");
		appearanceOption.classList.remove("active-tab");
		connectionsOption.classList.remove("active-tab");

		powerstatsTab.style.display = "block";
		biographyTab.style.display = "none";
		appearanceTab.style.display = "none";
		connectionsTab.style.display = "none";
	}
});

biographyOption.addEventListener("click", () => {
	if (!biographyOption.classList.contains("active-tab")) {
		biographyOption.classList.add("active-tab");
		powerstatsOption.classList.remove("active-tab");
		appearanceOption.classList.remove("active-tab");
		connectionsOption.classList.remove("active-tab");

		biographyTab.style.display = "block";
		powerstatsTab.style.display = "none";
		appearanceTab.style.display = "none";
		connectionsTab.style.display = "none";
	}
});

appearanceOption.addEventListener("click", () => {
	if (!appearanceOption.classList.contains("active-tab")) {
		appearanceOption.classList.add("active-tab");
		powerstatsOption.classList.remove("active-tab");
		biographyOption.classList.remove("active-tab");
		connectionsOption.classList.remove("active-tab");

		appearanceTab.style.display = "block";
		biographyTab.style.display = "none";
		powerstatsTab.style.display = "none";
		connectionsTab.style.display = "none";
	}
});

connectionsOption.addEventListener("click", () => {
	if (!connectionsOption.classList.contains("active-tab")) {
		connectionsOption.classList.add("active-tab");
		powerstatsOption.classList.remove("active-tab");
		appearanceOption.classList.remove("active-tab");
		biographyOption.classList.remove("active-tab");

		connectionsTab.style.display = "block";
		biographyTab.style.display = "none";
		appearanceTab.style.display = "none";
		powerstatsTab.style.display = "none";
	}
});

//! Reading Data from json file

const fileData = fetch("./superhero_data.json")
	.then((response) => response.json())
	.then((data) => {
		return data;
	});

//! Adding Data to box

const dataAdder = (query) => {
	fileData.then((data) => {
		let result = data.find((item) => item._id == query);
		dataToHtml(result);
	});

	const dataToHtml = (arrayData) => {
		let image = arrayData.image;
		let title = arrayData.name;
		let powerstatsText = `<div class="powerstats-rows">
        <h4>Intelligence</h4>
        <h4>${arrayData.powerstats.intelligence}</h4>
    </div>
    <div class="powerstats-rows">
        <h4>Strength</h4>
        <h4>${arrayData.powerstats.strength}</h4>
    </div>
    <div class="powerstats-rows">
        <h4>Speed</h4>
        <h4>${arrayData.powerstats.speed}</h4>
    </div>
    <div class="powerstats-rows">
        <h4>Durability</h4>
        <h4>${arrayData.powerstats.durability}</h4>
    </div>
    <div class="powerstats-rows">
        <h4>Power</h4>
        <h4>${arrayData.powerstats.power}</h4>
    </div>
    <div class="powerstats-rows">
        <h4>Combat</h4>
        <h4>${arrayData.powerstats.combat}</h4>
    </div>`;
		let biographyText = `<ul class="biography-rows">
        <li>
            <h4>Full Name</h4>
            <h4>${arrayData.biography["full-name"]}</h4>
        </li>
        <li>
            <h4>Alter Egos</h4>
            <h4>${arrayData.biography["alter-egos"]}</h4>
        </li>
        <li>
            <h4>Aliases</h4>
            <h4 class="extra">${arrayData.biography.aliases}</h4>
        </li>
        <li>
            <h4>Place of Birth</h4>
            <h4>${arrayData.biography["place-of-birth"]}</h4>
        </li>
        <li>
            <h4>First Appearance</h4>
            <h4>${arrayData.biography["first-appearance"]}</h4>
        </li>
        <li>
            <h4>Publisher</h4>
            <h4>${arrayData.biography.publisher}</h4>
        </li>
    </ul>`;
		let appearanceText = `<ul class="appearance-rows">
        <li>
            <h4>Gender</h4>
            <h4>${arrayData.appearance.gender}</h4>
        </li>
        <li>
            <h4>Race</h4>
            <h4>${arrayData.appearance.race}</h4>
        </li>
        <li>
            <h4>Height</h4>
            <h4>${arrayData.appearance.height[0]}</h4>
        </li>
        <li>
            <h4>Weight</h4>
            <h4>${arrayData.appearance.weight[1]}</h4>
        </li>
        <li>
            <h4>Eye Color</h4>
            <h4>${arrayData.appearance["eye-color"]}</h4>
        </li>
        <li>
            <h4>Hair Color</h4>
            <h4>${arrayData.appearance["hair-color"]}</h4>
        </li>
    </ul>`;
		let connectionsText = `<div class="connections-rows">
        <h4>Group Affiliation</h4>
        <h4>${arrayData.connections["group-affiliation"]}</h4>
    </div>
    <div class="connections-rows">
        <h4>Relatives</h4>
        <h4>${arrayData.connections.relatives}</h4>
    </div>`;

		//! Adding Data
		imageBox.src = image;
		nameTitle.textContent = title;
		powerstatsTab.innerHTML = powerstatsText;
		biographyTab.innerHTML = biographyText;
		appearanceTab.innerHTML = appearanceText;
		connectionsTab.innerHTML = connectionsText;
	};
};

dataAdder(201);

//! Getting Search Query

searchBar.addEventListener("focusin", () => {
	searchBox.style.borderRadius = "10px 10px 0 0";
	searchResult.style.display = "block";
});

document.addEventListener("click", (e) => {
	if (e.target == searchResult || e.target == searchBar) {
		return "";
	} else {
		searchBox.style.borderRadius = "10px";
		searchResult.style.display = "none";
	}
});

searchBar.addEventListener("input", (e) => {
	let a = e.target.value;
	let searchText = "";
    if(a.length >= 0){
        fileData.then((data) => {
            let result = data.filter((item) => item.name.includes(a));
            dataToResult(result);
        });
    }

	let dataToResult = (data) => {
		data.forEach((item) => {
			let t = `<li data-name='${item._id}'>
            <img src="${item.image}" alt="">
            <h4>${item.name} (<span>${item.biography["full-name"]}</span>)</h4>
        </li>`;
			searchText += t;
		});

		if (data.length === 0) {
			searchResult.childNodes[1].innerHTML =
				"<h3 id='empty-result'>No Results were found</h3>";
		} else {
			searchResult.childNodes[1].innerHTML = searchText;
			let allLiTags = searchResult.childNodes[1].querySelectorAll("li");
			allLiTags.forEach((tag) => {
				tag.addEventListener("click", (e) => {
					let target = e.target.dataset.name;
                    dataAdder(target);
				});
			});
		}
	};
});


let countObjects;
let clothingTypes = [
    "Hoofddeksel",
    "Bovenkleding",
    "Onderkleding",
    "Schoenen",
    "Accessoires",
];
document.addEventListener("DOMContentLoaded", function () {
    // Fetch de JSON-bestanden
    fetch("data.json")
        .then((response) => response.json())
        .then((data) => {
            if (document.URL.includes("nieuw-kledingstuk.html")) {
                const newClothesType =
                    document.getElementById("newClothesType");
                const newTypes = [
                    ...new Set(data.kleding.map((item) => item.type)),
                ];
                newTypes.forEach((type) => {
                    const option = document.createElement("option");
                    option.text = type;
                    newClothesType.add(option);
                });

                const newClothesCategory =
                    document.getElementById("newClothesCategory");
                const newCategory = [
                    ...new Set(data.kleding.map((item) => item.categorie)),
                ];

                newCategory.forEach((category) => {
                    const option = document.createElement("option");
                    option.text = category;
                    newClothesCategory.add(option);
                });

                const newClothesColor =
                    document.getElementById("newClothesColor");
                data.soortenKleuren.forEach((kleur) => {
                    const option = document.createElement("option");
                    option.text = kleur.naam;
                    newClothesColor.add(option);
                });

            } else if (document.URL.includes("overzicht.html")) {
                var container = document.querySelector(".link-container");

                // Functie om kaarten te genereren voor de gegeven kledingstukken
                function generateCards(data) {
                    // Loop door elk object in de array
                    data.forEach((item) => {
                        // Maak een nieuwe div aan voor de kaart
                        var card = document.createElement("div");
                        card.classList.add("card");
                        card.classList.add(item.categorie);

                        // Vul de kaart met de gegevens van het object
                        card.innerHTML = `
                            <h3>${item.type}</h3>
                            <p><strong>Merk:</strong> ${item.merk}</p>
                            <p><strong>Kleur:</strong> ${item.kleur}</p>
                            <p><strong>Kenmerk:</strong> ${item.kenmerk}</p>
                        `;

                        // Voeg de kaart toe aan de container
                        container.appendChild(card);
                    });
                }

                // Controleer of er objecten in de localStorage zijn opgeslagen
                if (localStorage.getItem("nieuw_kledingstuk")) {
                    // Haal de opgeslagen objecten op en converteer ze naar JSON
                    var localStorageData = JSON.parse(
                        localStorage.getItem("nieuw_kledingstuk")
                    );

                    // Voeg de objecten uit localStorage samen met de objecten uit JSON
                    var combinedData = data.kleding.concat(localStorageData);

                    // Genereer kaarten voor de gecombineerde gegevens
                    generateCards(combinedData);
                } else {
                    // Genereer kaarten alleen voor de gegevens uit JSON
                    generateCards(data.kleding);
                }
            } else if (document.URL.includes("resultaten.html")) {
                const urlParams = new URLSearchParams(window.location.search);
                const chosenColor = urlParams.get("noPrefColor");
                const chosenType = urlParams.get("noPrefType");

                // Haal de opgeslagen objecten uit de localStorage
                const storageItems = localStorage.getItem("Nieuw_kledingstuk");
                const objects = JSON.parse(storageItems);

                console.log(data.kleding);

                // Voeg de objecten uit de localStorage samen met de objecten uit de data array
                const gecombineerdeObjecten = data.kleding.concat(objects);

                const resultaten = data.kleding.filter(
                    (item) =>
                        item.kleur !== chosenColor && item.type !== chosenType
                );

                const resultatenContainer = document.getElementById("results-container");
                resultaten.forEach((item) => {
                    const card = document.createElement("div");
                    card.classList.add("card");

                    card.innerHTML = `
                        <h3>${item.type}</h3>
                        <p><strong>Merk:</strong> ${item.merk}</p>
                        <p><strong>Kleur:</strong> ${item.kleur}</p>
                        <p><strong>Kenmerk:</strong> ${item.kenmerk}</p>
                    `;
                    resultatenContainer.appendChild(card);
                });
            } else if (document.URL.includes("samenstellen.html")) {
                clothingTypes.forEach((clothingType) => {
                    const resultatenContainer = document.getElementById("compile-container");
                    const clothingObjects = data.kleding.filter((object) => object.categorie === clothingType);

                    console.log(clothingObjects);

                    if (document.URL.includes(`samenstellen.html?${clothingType.toLowerCase()}`)) {
                        clothingObjects.forEach((clothing) => {
                            const card = document.createElement("div");
                            card.classList.add("card");

                            card.innerHTML = `
                                <h3>${clothing.type}</h3>
                                <p><strong>Merk:</strong> ${clothing.merk}</p>
                                <p><strong>Kleur:</strong> ${clothing.kleur}</p>
                                <p><strong>Kenmerk:</strong> ${clothing.kenmerk}</p>
                                <button class="product-btn" id="product-${clothing.id}">Kies deze</button>
                            `;
                            resultatenContainer.appendChild(card);

                            const button = card.querySelector(`#product-${clothing.id}`);

                            button.addEventListener("click", () => {
                                localStorage.setItem(
                                    clothingType,
                                    JSON.stringify(clothing),
                                );
                                var soundEffect = new Audio('plop.mp3');
                                soundEffect.play();

                                setTimeout(() => {
                                    window.location.href = "kledingkiezen.html";
                                }, 200);
                            });
                        });
                    }
                });
            } else if (document.URL.includes("kledingkiezen.html")) {
                let results = '';
                const resultaatOverzicht = document.getElementById("resultaatOverzicht");
                const overviewResults = document.createElement("div");
                const saveOutfitContainer = document.getElementById("saveOutfit");

                clothingTypes.forEach(clothingType => {
                    const localStorageValues = localStorage.getItem(clothingType);
                    const lsParsed = JSON.parse(localStorageValues);
                    if (lsParsed) {
                        const buttonId = `${clothingType}-btn`; // Button ID opslaan in een constante
                        console.log(buttonId); // Log de constante buttonId
                        results += `<li>${clothingType}: ${lsParsed.type}, kleur: ${lsParsed.kleur}, kenmerken: ${lsParsed.kenmerk} <button id="${buttonId}" class="delete-btn" data-clothing="${clothingType}">Verwijder item</button></li>`;
                    }
                });
                
                // Event listener toevoegen aan het document en reageren op klikken op knoppen met de class 'delete-btn'
                const hoofddekselsLS = localStorage.getItem("Hoofddeksel");
                const bovenkledingLS = localStorage.getItem("Bovenkleding");
                const onderkledingLS = localStorage.getItem("Onderkleding");
                const schoenenLS = localStorage.getItem("Schoenen");
                const accessoiresLS = localStorage.getItem("Accessoires");

                if(hoofddekselsLS || bovenkledingLS || onderkledingLS || schoenenLS || accessoiresLS != null) {
                    document.addEventListener('click', (event) => {
                        if (event.target.classList.contains('delete-btn')) {
                            const clothingTypeToDelete = event.target.getAttribute('data-clothing');
                            console.log(clothingTypeToDelete);
                            localStorage.removeItem(clothingTypeToDelete);
                            event.target.parentNode.remove();
    
                            const container = document.getElementById('resultaatOverzicht');
                            const saveOutfitBtn = document.getElementById('saveOutfit');
                            // container.remove();
                            // saveOutfitBtn.remove();
                            var soundEffect = new Audio('correct.mp3');
                            soundEffect.play();
                        }
                    });
                }



                    
                if(results != '') {
                    resultaatOverzicht.innerHTML = `<p>Overzicht geselecteerde kleding:</p><ul>${results}</ul>`;
                    resultaatOverzicht.appendChild(overviewResults);
                    saveOutfitContainer.innerHTML = '<button class="saveOutfitBtn">Outfit opslaan</button>';
                }

                const saveOutfitBtn = document.querySelector('.saveOutfitBtn');
                saveOutfitBtn.addEventListener("click", function() {
                    const isEmpty = clothingTypes.filter(clothingType => {
                        if (!localStorage.getItem(clothingType)) {
                            return true;
                        }
                    })

                    if (isEmpty.length > 5) {
                        var soundEffect = new Audio('error.mp3');
                        soundEffect.play();
                        alert('Selecteer minimaal 1 kledingstuk');   
                    } else {
                        var soundEffect = new Audio('correct.mp3');
                        soundEffect.play();
                        alert('Outfit is succesvol opgeslagen');
                        let localStorageValues;
                        const allChoices = clothingTypes.map(clothingType => {
                            localStorageValues = localStorage.getItem(clothingType);
                            if (localStorageValues) {
                                return localStorageValues;
                            }
                        });

                        localStorage.setItem(
                            "SavedOutfit", JSON.stringify(allChoices)
                        );
                    }
                });
            } else if (document.URL.includes("opgeslagen.html")) {
                const container = document.getElementById('saved-container');
                const localStorageValues = localStorage.getItem("SavedOutfit");

                if(localStorageValues) {
                    const outfitCounter = 1;
                    const outfitTitle = document.createElement('p');
                    outfitTitle.textContent = `Outfit ${outfitCounter}`;
                    container.appendChild(outfitTitle);
                    
                    const outfitList = document.createElement('ul');
                    outfitList.classList.add('savedOutfitItem');

                    const delBtn = document.createElement('button');
                    delBtn.textContent = 'Verwijder outfit';

                    delBtn.addEventListener('click', function() {
                        localStorage.removeItem('SavedOutfit');
                        location.reload();
                    });
                    
                    const lsParsed = JSON.parse(localStorageValues);
                    lsParsed.forEach(element => {
                        // Controleer of het element null is
                        if (element !== null) {
                            const objectData = JSON.parse(element);
                            const listItem = document.createElement('li');
                            listItem.textContent = `${objectData.categorie}: ${objectData.type}, kleur: ${objectData.kleur}, kenmerken: ${objectData.kenmerk}`;
                            outfitList.appendChild(listItem);
                        }
                    });
                    
                    container.appendChild(outfitList);
                    container.appendChild(delBtn);
                } else {
                    container.textContent = 'Er zijn nog geen opgeslagen outfits';
                }


            } else if (document.URL.includes("willekeurige-outfit.html")) {
                const container = document.getElementById('outfit-container');
                const genOutfitBtn = document.getElementById('genOutfitBtn');

                function selectRandomItem(array) {
                    return array[Math.floor(Math.random() * array.length)];
                  }

                  // Functie om een willekeurige outfit samen te stellen
                function generateRandomOutfit() {
                    const hoofddeksels = data.kleding.filter(item => item.categorie === 'Hoofddeksel');
                    const bovenkleding = data.kleding.filter(item => item.categorie === 'Bovenkleding');
                    const onderkleding = data.kleding.filter(item => item.categorie === 'Onderkleding');
                    const schoenen = data.kleding.filter(item => item.categorie === 'Schoenen');
                    const accessoires = data.kleding.filter(item => item.categorie === 'Accessoires');
                
                    const randomHoofddeksel = selectRandomItem(hoofddeksels);
                    const randomBovenkleding = selectRandomItem(bovenkleding);
                    const randomOnderkleding = selectRandomItem(onderkleding);
                    const randomSchoenen = selectRandomItem(schoenen);
                    const randomAccessoire = selectRandomItem(accessoires);

                    // Bouw de HTML voor de gegenereerde outfit
                    const outfitHTML = `
                    <h2>Gegenereerde Outfit</h2>
                    <ul>
                        <li><strong>Hoofddeksel:</strong> ${randomHoofddeksel.type.toString()}, ${randomHoofddeksel.kenmerk.toString()}</li>
                        <li><strong>Bovenkleding:</strong> ${randomBovenkleding.type.toString()}, ${randomBovenkleding.kenmerk.toString()}</li>
                        <li><strong>Onderkleding:</strong> ${randomOnderkleding.type.toString()}, ${randomOnderkleding.kenmerk.toString()}</li>
                        <li><strong>Schoeisel:</strong> ${randomSchoenen.type.toString()}, ${randomSchoenen.kenmerk.toString()}</li>
                        <li><strong>Accessoire:</strong> ${randomAccessoire.type.toString()}, ${randomAccessoire.kenmerk.toString()}</li>
                    </ul>
                    `;

                    container.innerHTML = outfitHTML;
                }

                genOutfitBtn.addEventListener('click', generateRandomOutfit);
            }

            // Submit voor het toevoegen van nieuwe kleding
            const newClothesForm = document.getElementById("newClothesForm");
            if (newClothesForm) {
                newClothesForm.addEventListener("submit", (event) => {
                    event.preventDefault();
                    saveNewClothes();
                });
            }
        })
        .catch((error) => console.log(error));
});

let counterId = 13;

function saveNewClothes() {
    // Haal gegevens op uit het formulier
    const id = counterId;
    const categorie = document.getElementById("newClothesCategory").value;
    const type = document.getElementById("newClothesType").value;
    const kleur = document.getElementById("newClothesColor").value;
    const merk = document.getElementById("newClothesBrand").value;
    const kenmerk = document.getElementById("newClothesFeature").value;

    // Maak een object met de gegevens
    const kledingstuk = {
        id: id,
        categorie: categorie,
        type: type,
        merk: merk,
        kleur: kleur,
        kenmerk: kenmerk,
    };

    // Converteer object naar een JSON-string
    const kledingstukJSON = JSON.stringify(kledingstuk);

    // Sla gegevens op in de lokale opslag
    localStorage.setItem("Nieuw_kledingstuk" + counterId, kledingstukJSON);

    // Eventueel feedback geven aan de gebruiker
    alert("Kledingstuk succesvol opgeslagen!");
    var soundEffect = new Audio('correct.mp3');
    soundEffect.play();
    counterId++;
}

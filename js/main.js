// Milestone 1
// Partendo dalla seguente struttura dati , mostriamo in pagina tutte le icone disponibili come da layout.
// Milestone 2
// Coloriamo le icone per tipo
// Milestone 3
// Creiamo una select con i tipi di icone e usiamola per filtrare le icone
// Ripetete quanto fatto questa mattina insieme, la registrazione della mattinata sarà importante nel caso vi bloccaste nell'esecuzione delle varie Milestone.
// L'array di oggetti lo trovate in General nel caso ne aveste bisogno.
const icons = [
    {
      name: 'cat',
      prefix: 'fa-',
      type: 'animal',
      family: 'fas',
    },
    {
      name: 'crow',
      prefix: 'fa-',
      type: 'animal',
      family: 'fas',
    },
    {
      name: 'dog',
      prefix: 'fa-',
      type: 'animal',
      family: 'fas',
    },
    {
      name: 'dove',
      prefix: 'fa-',
      type: 'animal',
      family: 'fas',
    },
    {
      name: 'dragon',
      prefix: 'fa-',
      type: 'animal',
      family: 'fas',
    },
    {
      name: 'horse',
      prefix: 'fa-',
      type: 'animal',
      family: 'fas',
    },
    {
      name: 'hippo',
      prefix: 'fa-',
      type: 'animal',
      family: 'fas',
    },
    {
      name: 'fish',
      prefix: 'fa-',
      type: 'animal',
      family: 'fas',
    },
    {
      name: 'carrot',
      prefix: 'fa-',
      type: 'vegetable',
      family: 'fas',
    },
    {
      name: 'apple-alt',
      prefix: 'fa-',
      type: 'vegetable',
      family: 'fas',
    },
    {
      name: 'lemon',
      prefix: 'fa-',
      type: 'vegetable',
      family: 'fas',
    },
    {
      name: 'pepper-hot',
      prefix: 'fa-',
      type: 'vegetable',
      family: 'fas',
    },
    {
      name: 'user-astronaut',
      prefix: 'fa-',
      type: 'user',
      family: 'fas',
    },
    {
      name: 'user-graduate',
      prefix: 'fa-',
      type: 'user',
      family: 'fas',
    },
    {
      name: 'user-ninja',
      prefix: 'fa-',
      type: 'user',
      family: 'fas',
    },
    {
      name: 'user-secret',
      prefix: 'fa-',
      type: 'user',
      family: 'fas',
    },
];

const iconsContainer = document.getElementById('icons');
color(icons);
stamp(icons,iconsContainer);

// function// function// function// function

function stamp(array,txtHtml) {
    txtHtml.innerHTML = "";
    array.forEach((element) => {
        const {family,prefix,name,color} = element;
        txtHtml.innerHTML += 
    `
        <div class="box" id="box">
            <div class="animal">
                <ul>
                    <li><i class="${family} ${prefix + name}" style="color:${color}"></i></li>
                    <li>${name.toUpperCase()}</li>
                </ul>
            </div>
        </div>
    `;
});
}

function color(array) {
    const colors = ["orange","blue","purple"];
    array.forEach((element) => {
        if (element.type === "animal") {
            element.color = colors[0];
        }
        else if (element.type === "vegetable") {
            element.color = colors[1];
        }else {
            element.color = colors[2];
        }
    })
    return array
};

// function  {}




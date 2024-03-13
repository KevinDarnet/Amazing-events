const cartas = [];

function getData() {
  cartas.push(...info.events);
  console.log(cartas);
  mainInicio();
}
getData();

//Funcion que inicia mi programa y contiene otras otras funciones...
function mainInicio() {
  let inputBuscador = document.querySelector("#searchInput");
  inputBuscador.addEventListener("keyup", buscar);
  //Funcion de buscador
  function buscar(event) {
    let val = event.target.value;
    textSearch = val;
    let data = [];
    if (checkboxSelected.length > 0) {
      checkboxSelected.map((categoria) => {
        data.push(
          ...cartas.filter(
            (carta) =>
              carta.name.toLowerCase().includes(val.toLowerCase()) &&
              carta.category == categoria
          )
        );
      });
    } else {
      if (textSearch == undefined && checkboxSelected.length === 0) {
        data.push(...cartas);
      } else {
        data.push(
          ...cartas.filter((carta) =>
            carta.name.toLowerCase().includes(val.toLowerCase())
          )
        );
      }
    }
    displayCard(data);
  }

  //Funcion que imprime la card en home
  function displayCard(listaDeCartas) {
    let desplegar = [];

    if (listaDeCartas == undefined) {
      desplegar.push(...cartas);
    } else {
      desplegar.push(...listaDeCartas);
    }

    let html = "";
    desplegar.map((carta) => {
      html += `<div class="card" style="width: 18rem;">
      <img src="${carta.image}" class="card-img-top" alt="...">
      <div class="card-body d-flex justify-content-center flex-column align-items-center ">
          <h5 class="card-title">${carta.name}</h5>
          <h5 class="card-title">$${carta.price} USD</h5>
          <a href="./pages/details.html?id=${carta.id}" class="btn btn-secondary">See more</a>
      </div>
  </div>`;
    });

    document.querySelector("#cards").innerHTML = html;
  }
  displayCard(cartas);

  //Funciones para filtro con checkbox
  let checkboxSelected = [];
  let textSearch = "";

  //Tomo las categorias del data js y compruebo que no hayan categorías repetidas
  function checkBoxCategoria() {
    let categorias = cartas.map((carta) => carta.category);
    let categoriasSinRepetir = new Set(categorias);
    let categoriasActual = [...categoriasSinRepetir];
    console.log(categoriasActual);
    createCheckbox(categoriasActual);
  }
  checkBoxCategoria();

  //Funcion que crea los checkboxs e imprime en html
  function createCheckbox(listaCategorias) {
    let inputCheckbox = "";
    listaCategorias.forEach((categoria) => {
      inputCheckbox += `
      <label class="material-checkbox">
        <input type="checkbox" class="material-checkbox checkBox p-1 inputCheckBox" value="${categoria}"/>
        <span class="checkmark"></span>
        ${categoria}
      </label> `;
    });
    document.querySelector("#modal-body").innerHTML = inputCheckbox;
  }
  //...
  let inputsCheckBox = document.querySelectorAll(".inputCheckBox");

  //Funcion que escucha el click de los checkboxes y pushea a checkboxSelected
  function captureCheckBox() {
    inputsCheckBox.forEach((check) => {
      check.addEventListener("click", () => {
        if (check.checked == true) {
          checkboxSelected.push(check.value);
          console.log(checkboxSelected);
          dataCheck();
        } else {
          checkboxSelected = checkboxSelected.filter(
            (otroCheck) => otroCheck != check.value
          );
          dataCheck();
        }
      });
    });
  }
  captureCheckBox();

  function dataCheck() {
    let data = [];

    if (checkboxSelected.length > 0) {
      checkboxSelected.map((category) => {
        if (textSearch != undefined) {
          data.push(
            ...cartas.filter(
              (carta) =>
                carta.category == category &&
                carta.name.toLowerCase().includes(textSearch.toLowerCase())
            )
          );
        } else if (textSearch == undefined && checkboxSelected.length === 0) {
          {
            data.push(...cartas);
          }
        } else {
          data.push(...cartas.filter((carta) => carta.category == category));
        }
      });
    } else {
      data.push(
        ...cartas.filter((carta) =>
          carta.name.toLowerCase().includes(textSearch.toLowerCase())
        )
      );
    }
    displayCard(data);
  }
} //FIN DE PROGRAMA mainInicio

// Get the button:
let mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

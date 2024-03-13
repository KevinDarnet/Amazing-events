const cartas = [];
function getData() {
  cartas.push(...info.events);
  console.log(cartas);
}
getData();

//Funcion donde se imprime la card de detalle
function mainDetalle() {
  console.log(location);

  var idCarta = location.search.split("?id=").join("");
  console.log(idCarta);

  var carta = cartas.filter((carta) => carta.id == idCarta)[0];
  console.log(carta);

  var estructuraCarta = `
  <div class="d-flex justify-content-center p-3">
    <div class="card-detail d-flex flex-column justify-content-center align-itmes-center" style="width: 70%;">
      <img src="${carta.image}" class="card-img-top" alt="...">
      <div class="card-body d-flex justify-content-center flex-column align-items-center ">
      <h3 class="card-title">${carta.name}</h5>
      <div/>
      <div class="card-body d-flex justify-content-center flex-column align-items-center ">
         <div class="p-3">
            <h5 class="card-title">- Price: ${carta.price} USD</h5>
            <h5 class="card-title">- Assistance: ${
              carta.assistance
                ? carta.assistance
                : "There is no, it is a future event"
            }</h5>
            <h5 class="card-title">- Capacity: ${carta.capacity}</h5>
          <div>
          <div class="p-3">
            <h5 class="card-title">${carta.description}</h5>
          </div>
      </div>
      
    </div>
    
 </div>
 <div class="d-flex justify-content-center p-3" >
 <a href="../index.html" class="btn btn-secondary ">Back to home</a>
 </div>
`;
  document.querySelector("#card-details").innerHTML = estructuraCarta;
}
mainDetalle();

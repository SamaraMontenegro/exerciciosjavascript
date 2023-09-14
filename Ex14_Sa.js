/*Questão 14: Implemente um algoritmo que possibilita que você adicione os 5 filmes ou seriados que você mais 
gostou de assistir. Esse código deve impedir que registros sejam informados em duplicidade.*/

const filmeseSeriesFavoritos = [];
function adicionarFilmesouSeries(filme) {
  if (!filmeseSeriesFavoritos.includes(filme)) {
    filmeseSeriesFavoritos.push(filme);
    console.log(`"${filme}" foi adicionado à lista de favoritos.`);
} else {
    console.log(`"${filme}" já está na lista de favoritos.`);
}
}
adicionarFilmesouSeries("John Wick");
adicionarFilmesouSeries("Game of Thrones");
adicionarFilmesouSeries("Game of Thrones"); 
adicionarFilmesouSeries("Sherlock Holmes");
adicionarFilmesouSeries("Suits");
adicionarFilmesouSeries("The Big Bangs Theory");

resultado = filmeseSeriesFavoritos;
console.log(resultado);
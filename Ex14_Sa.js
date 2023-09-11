/*Questão 14: Implemente um algoritmo que possibilita que você adicione os 5 filmes ou seriados que você mais 
gostou de assistir. Esse código deve impedir que registros sejam informados em duplicidade.*/

const SerieseFilmes = ["TheBigBangsTheory", "GameofThrones", "Suits", "John Wick", "Sherlock Holmes", "GameofThrones" ];
SerieseFilmes.sort();
console.log(SerieseFilmes);

const SerieseFilmesSemDuplicidade = SerieseFilmes.filter((valor, indice, self) => {
    return self.indexOf(valor) === indice;
  });
  console.log(SerieseFilmesSemDuplicidade);
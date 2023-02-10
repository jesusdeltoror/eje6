let lista = [
    "tomate",
    "jamon",
    "mortadela",
    "mango",
    "milanesa"
]

lista.push("Aceite de Girasol");
lista.pop();
console.log(lista);

let listaPeliculas = [
    {
        titulo: "Matrix",
        director: "Wachowski",
        fecha: new Date("May 21, 1999")
    },
    {
        titulo: "Idiocracy",
        director: "Mike Judge",
        fecha: new Date("September 1, 2006")
    },
    {
        titulo: "Logan",
        director: "James Mangold",
        fecha: new Date("February 17, 2017")
    },
];

let newMovie = listaPeliculas.filter(element=>element.fecha>new Date("January 1, 2010"));
console.log(newMovie);

let listaDirectores = listaPeliculas.map(element => element.director);
console.log(listaDirectores);

let listaTitulos = listaPeliculas.map(element => element.titulo);
console.log(listaTitulos);

let listaConcat = listaDirectores.concat(listaTitulos);
console.log(listaConcat);

let listaPropagacion = [...listaDirectores, ...listaTitulos];
console.log(listaPropagacion);
const lista1 = ["Maçã", "Banana", "Leite", "Ovos"];
const lista2 = ["Banana", "Ovos", "Arroz", "Feijão"];

// Combine as duas listas
const listaTotal = lista1.concat(lista2);

// Inicialize uma nova lista para armazenar elementos únicos
const listaComprasUnica = [];

// Itere sobre a lista combinada
for (let i = 0; i < listaTotal.length; i++) {
    // Adicione à nova lista apenas se ainda não estiver presente
    if (listaComprasUnica.indexOf(listaTotal[i]) === -1) {
        listaComprasUnica.push(listaTotal[i]);
    }
}

console.log(listaComprasUnica)
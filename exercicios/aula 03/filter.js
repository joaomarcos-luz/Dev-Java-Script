const usuariosIdade = [
    { idade: 25 },
    { idade: 30 },
    { idade: 22 },
    { idade: 19 },
  ];

  let idade = 25
  const listaIdade = usuariosIdade.filter(i => i.idade < idade)
  console.log(listaIdade)
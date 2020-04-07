var kittens = ["Milo", "Otis", "Garfield"]


function destructivelyAppendKitten(Milo, Otis, Garfield) {
  kittens.push('Ralph')
}
kittens();

function destructivelyAppendKitten(Milo, Otis, Garfield) {
  kittens.unshift('Ralph')
}
kittens();

var kittens = ["Milo", "Otis", "Garfield"]


function destructivelyAppendKitten(Milo, Otis, Garfield) {
  kittens.push('Ralph')
}
kittens();

function destructivelyPrependKitten(Milo, Otis, Garfield) {
  kittens.unshift('Bob')
}
kittens();

function destructivelyRemoveLastKitten(Milo, Otis, Garfield) {
  kittens.pop();
}
kittens();

function destructivelyRemoveFirstKitten(Milo, Otis, Garfield) {
  kittens.shift();
}
kittens();

function appendKitten(Milo, Otis, Garfield) {
  return [...kittens, 'Broom']
}
kittens();

function prependKitten(Milo, Otis, Garfield) {
  return ['Garfield', ...Kittens]
}
kittens();
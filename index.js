const app = "I don't do much."

kittens = ['Milo', 'Otis', 'Garfield'];

function destructivelyAppendKitten(name){

  kittens = ['Milo', 'Otis', 'Garfield'];

  kittens.push(name)
  return kittens
}

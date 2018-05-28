const app = "I don't do much."

kittens = ['Milo', 'Otis', 'Garfield'];

function destructivelyAppendKitten(name){

  kittens = ['Milo', 'Otis', 'Garfield'];
  kittens.push(name)
  return kittens
}

function destructivelyPrependKitten(name){
  kittens = ['Milo', 'Otis', 'Garfield'];
  kittens.unshift(name)
  return kittens
}

function destructivelyRemoveLastKitten(){
  kittens = ['Milo', 'Otis', 'Garfield'];
  kittens.pop()
  return kittens
}

function destructivelyRemoveFirstKitten(){
  kittens = ['Milo', 'Otis', 'Garfield'];
  kittens.shift()
  return kittens
}

function appendKitten(name){
  kittens = ['Milo', 'Otis', 'Garfield'];
  let newKittens = [ name, ...kittens]
  return newKittens
}

function prependKitten(name){
  kittens = ['Milo', 'Otis', 'Garfield'];
  let newKitties = kittens.unshift(name)
  return newKitties
}

function removeLastKitten(){
  kittens = ['Milo', 'Otis', 'Garfield'];
  let newKit = kitties.pop()
  return newKit
}

function removeFirstKitten(){
  kittens = ['Milo', 'Otis', 'Garfield'];
  let newKittie = kittens.shift()
  return newKittie
}

// Write your solution here!
const drivers = ["Milo", "Otis", "Garfield"]

function destructivelyAppendDriver(name){
  drivers.push(name)
}
function destructivelyPrependDriver(name){
  drivers.unshift(name)
}

function destructivelyRemoveLastDriver(){
  drivers.pop()
}

function destructivelyRemoveFirstDriver(){
  drivers.shift()
}
function appendDriver(name){
return [...drivers, name]
}


function prependDriver(name){
  return [name, ...drivers]
}
function removeLastDriver(){
  const newArr=[ ...drivers]
  newArr.pop()
  return newArr
}

function removeFirstDriver(){
  const newArr=[ ...drivers]
  newArr.shift()
  return newArr
}

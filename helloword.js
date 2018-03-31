'use strict';

console.log('Hello, world.');
//
function animal(name){
  this.name = name;
}
animal.prototype.voice = function () {
  console.log('一个动物')
}
let animal_instance = new animal('动物')
function dog(name, subobject){
  animal.call(this, name)
  this.subobject = subobject;
}
dog.prototype = Object.create(animal.prototype)
dog.prototype.constructor = dog
dog.prototype.voice = function(){
  console.log('this is a dog')
}
dog.prototype.walk = function() {
  console.log('dog is walking')
}
let dogxx = new dog('abc','xxx')
dogxx.voice()
dogxx.walk()

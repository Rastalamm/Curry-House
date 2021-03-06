var curry = require('./curry');

function calculate (num1) {
  return function (op1){

    switch(op1){

      case '+' :
      case 'add' :
        return function (num2){
          return num1 + num2;
        };

      case '-':
      case 'subtract':
        return function (num2){
          return num1 - num2;
        };

      case '*':
      case 'multiply':
        return function (num2){
          return num1 * num2;
        };

      case '/':
      case 'divide':
        return function (num2){
          return num1 / num2;
        };

      case '%':
      case 'modulo':
        return function (num2){
          return num1 % num2;
        };

      case '^':
      case 'power of':
        return function (num2){
          return Math.pow(num1, num2);
        };
    }
  };
}

function random (start) {
  return {
    to : function (end){
      return Math.floor(Math.random() * (end - start) + start);
    },
    toInclude : function (end){
      end = end + 1;
      return Math.floor(Math.random() * (end - start) + start);
    }
  };
}

function concat(str1, str2){
  return str1.concat(str2);
}

var prependGreeting = curry(concat, 'Hello ');

function add (arg1, arg2, arg3) {
  return arg1 + arg2 + arg3;
}

var add4and5 = curry(add, 4, 5);

function calculator(operation){

  return function (op2, op1){

    switch (operation){

      case '+' :
      case 'add' :
       // return function (){
          return op1 + op2;
       // };

      case '-':
      case 'subtract':
     //   return function (){
          return op1 - op2;
     //   };

      case '*':
      case 'multiply':
      //  return function (){
          return op1 * op2;
      //  };

      case '/':
      case 'divide':
      //  return function (){
          return op1 / op2;
      //  };

      case '%':
      case 'modulo':
     //   return function (){
          return op1 % op2;
       // };

      case '^':
      case 'power of':
      //  return function (){
          return Math.pow(op1, op2);
      //  };
    }
  }
}

var add5 = null;
var sub5 = null;
var multiply5 = null;
var divide5 = null;
var mod5 = null;
var pow3 = null;

module.exports = {
  calculate : calculate,
  random : random,
  prependGreeting : prependGreeting,
  add4and5 : add4and5,
  calculator : calculator,
  add5 : add5,
  sub5 : sub5,
  multiply5 : multiply5,
  divide5 : divide5,
  mod5 : mod5,
  pow3 : pow3
};
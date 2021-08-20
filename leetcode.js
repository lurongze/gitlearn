// 手写源码

function myInstanceOf(left, right) {
  if (typeof left !== "object" || left === null) {
    return false;
  }
  let proto = Object.getPrototypeOf(left);
  while (true) {
    if (!proto) {
      return false;
    }
    if (proto === right.prototype) {
      return true;
    }
    proto = Object.getPrototypeOf(proto);
  }
}

function newInstanceOf(left, right){
  if(typeof left !== 'object' || left === null){
    return false;
  }
  let proto = Object.getPrototypeOf(left);

  while(true){
    if(!proto){
      return false;
    }
    if(proto === right.prototype){
      return true;
    }
    proto = Object.getPrototypeOf(proto);
  }


}

function myCreate(obj) {
  function F() {}

  F.prototype = obj;

  return new F();
}

function myNew() {
  let fn = Array.prototype.shift.call(arguments);
  if (typeof fn !== "function") {
    throw `${fn} is not a function`;
  }
  let obj = Object.create(fn.prototype);
  let res = fn.apply(obj, arguments);
  return typeof res === "object" || typeof res === "function" ? res : obj;
}

Function.prototype.myApply = function () {
  let newThis = arguments[0] || window;
  newThis.fn = this;
  const res = newThis.fn(...arguments[1]);
  delete newThis.fn;
  return res;
};

Function.prototype.myCall = function () {
  let newThis = arguments[0] || window;
  const args = [];
  for (let i = 1; i < arguments.length; i++) {
    args.push(arguments[i]);
  }
  this.apply(newThis, args);
};

Function.prototype.myBind = function () {
  const self = this;
  let [context, ...args] = arguments;
  return function () {
    self.apply(context, args);
  };
};

Function.prototype.newBind = function () {
  const self = this;
  let [context, ...args] = arguments;
  return function () {
    self.apply(context, args);
  };
};

// let obj = {
//   name: 'lrz'
// }
// function testFunc(...args){
//   console.log('testApply', this.name);
//   console.log('args',...args);
// }
// testFunc.myApply(obj,[1,2,3]);
// testFunc.myCall(obj,2,3,4);
// const bindFunc = testFunc.myBind(obj, 5,6,7);
// bindFunc();
function myNew() {
  const obj = new Object();

  const constront = Array.prototype.shift.call(arguments);

  obj._proto_ = constront.prototype;

  const res = constront.apply(constront, arguments);

  return typeof res === "object" ? res : obj;
}

function myNew2() {
  const con = Array.prototype.shift.call(arguments);

  const obj = Object.create(con.prototype);

  const res = con.apply(obj, arguments);

  return typeof res === "object" ? res : obj;
}

function newObj() {
  const Con = [].shift.call(arguments);
  const obj = Object.create(Con.prototype);
  const res = Con.apply(obj, arguments);

  return typeof res === "object" ? res : obj;
}

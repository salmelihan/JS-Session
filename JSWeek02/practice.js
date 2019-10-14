// let goods = ['Water','Coffe'];
// let quantity = [8, 2];
// console.log(`The available goods: ${goods[0]}`);
// console.log(`quantity: ${quantity[0]}`);
// console.log(quantity[0] +' '+ typeof(quantity[0].toString()));



let message = [];
message.push(8);
console.log(message);
message.push('r', 'e', 'b', 'm', 'u');
console.log(message);
message.push('n', 's', 'i', 'A', 'G', 'K');
console.log(message);
console.log('----------------------');
console.log(message.pop());
console.log('Shift ' + message.shift());
console.log('Unshift ' +message.unshift(1));
console.log('reverse ' + message.reverse());
console.log('----------------------');
console.log('Join ' + message.join());
console.log('Join ' + message.join(''));
import * as bcrypt from 'bcryptjs';
/*
* @see https://github.com/dcodeIO/bcrypt.js
* **/

const salt = bcrypt.genSaltSync(10);
console.log(salt);

const hash = bcrypt.hashSync("B4c0/\/", salt);
console.log(hash);

const isMatch = bcrypt.compareSync("B4c0/\/", hash); // true
console.log(isMatch);

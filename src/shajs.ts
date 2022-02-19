import * as shajs from 'sha.js';

/*
* @see https://www.npmjs.com/package/sha.js/v/2.4.9
* **/

console.log(shajs('sha256').update('42').digest('hex')); // 73475cb40a568e8da8a045ced110137e159f890ac4da883b6b17dc651b3a8049
console.log(new shajs.sha256().update('42').digest('hex')); // 73475cb40a568e8da8a045ced110137e159f890ac4da883b6b17dc651b3a8049

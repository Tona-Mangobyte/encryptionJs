import * as crypto from 'crypto-js';
import { v4 as UUID } from 'uuid';

/*
* @see https://github.com/brix/crypto-js
* **/

console.log(crypto.SHA256('message').toString()); // ab530a13e45914982b79f9b7e3fba994cfd1f3fb22f71cea1afbf02b460c6d1d
console.log(crypto.SHA256(UUID()).toString()); // Random unique string

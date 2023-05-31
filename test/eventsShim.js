import * as mod from 'module';

let emitter = null;
if(typeof global === 'object'){
   const require = mod.createRequire(import.meta.url);
   emitter = require('events').EventEmitter;
}else{
   emitter = window.EventEmitter;
}

export const EventEmitter = emitter;
"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Greeter = void 0;
class Greeter {
    sayHi() {
        return 'hi';
    }
    sayNumber() {
        return 3;
    }
    saySomethingAsync(callback) {
        setTimeout(() => {
            callback('something');
        }, 1000);
    }
    saySomethingPromised() {
        return __awaiter(this, void 0, void 0, function* () {
            return "I am wrapped in promise!";
        });
    }
    forceACrash() {
        throw new Error('Some kind of custom crash message');
    }
}
exports.Greeter = Greeter;
const greeter = new Greeter();
console.log(greeter.sayHi());
//# sourceMappingURL=index.js.map
"use strict";
var index_1 = require("./index");
describe("createSpyForClass", function () {
    var TscClassTranspiledToES5 = (function () {
        function TscClassTranspiledToES5() {
        }
        TscClassTranspiledToES5.prototype.testMethod1 = function () {
            return "";
        };
        TscClassTranspiledToES5.prototype.testMethod2 = function () {
            return "";
        };
        return TscClassTranspiledToES5;
    }());
    it("should create an object with spy methods when you call jasmine.createSpyForClass() with a Typescript class", function () {
        var spyObj = index_1.spyOnClass(TscClassTranspiledToES5);
        spyObj.testMethod1.and.returnValue(42);
        spyObj.testMethod2.and.returnValue("special sauce");
        expect(spyObj.testMethod1()).toEqual(42);
        expect(spyObj.testMethod1.and.identity()).toEqual('TscClassTranspiledToES5.testMethod1');
        expect(spyObj.testMethod2()).toEqual("special sauce");
        expect(spyObj.testMethod2.and.identity()).toEqual('TscClassTranspiledToES5.testMethod2');
    });
});

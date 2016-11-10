
/// <reference path="../typings/globals/jasmine/index.d.ts" />

import {spyOnClass} from "./index";
describe("createSpyForClass", function() {

  class TscClassTranspiledToES5 {
    testMethod1() {
      return "";
    }
    testMethod2() {
      return "";
    }
  }

  it("should create an object with spy methods when you call jasmine.createSpyForClass() with a Typescript class", function () {
    var spyObj = spyOnClass(TscClassTranspiledToES5);

    spyObj.testMethod1.and.returnValue(42);
    spyObj.testMethod2.and.returnValue("special sauce");

    expect(spyObj.testMethod1()).toEqual(42);
    expect(spyObj.testMethod1.and.identity()).toEqual('TscClassTranspiledToES5.testMethod1');

    expect(spyObj.testMethod2()).toEqual("special sauce");
    expect(spyObj.testMethod2.and.identity()).toEqual('TscClassTranspiledToES5.testMethod2');
  });
});

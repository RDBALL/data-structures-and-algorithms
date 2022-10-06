'use strict';

const {balancedBrackets} = require('../stacks-and-queues/stack-and-queue');


describe('testing bracket validation', () => {
  let inputString1 = '{}';
  let inputString2 =  '}{';
  let inputString3 = '{{}}';
  let inputString4 = '(()}';

  test(' Test inputString1, should evaluate true', () => {
    expect(balancedBrackets(inputString1)).toEqual(true);
  });

  test(' Test inputString2, should evaluate false', () => {
    expect(balancedBrackets(inputString2)).toEqual(false);
  });

  test(' Test inputString3, should evaluate true', () => {
    expect(balancedBrackets(inputString3)).toEqual(true);
  });

  test(' Test inputString4, should evaluate false', () => {
    expect(balancedBrackets(inputString4)).toEqual(false);
  });
});

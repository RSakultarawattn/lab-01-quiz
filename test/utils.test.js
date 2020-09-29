// IMPORT MODULES under test here:
// import { example } from '../utils.js';


import {countsAsAYes} from '../counts-as-a-yes.js';

const test = QUnit.test;

test('time to test a function', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const yes = 'yep';
    const expected = true;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const no = 'no way';
    

    const actual = countsAsAYes(no);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});

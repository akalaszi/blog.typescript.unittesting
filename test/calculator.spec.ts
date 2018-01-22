import { expect } from 'chai'
import { describe, it } from 'mocha'
import Calculator from '../src/Calculator'

describe('Calculator', () => {
    describe('Add', () => {
        it('should return 3 when a=1 and b=2', () => {
            let calc = new Calculator();

            var result = calc.Add(1, 2);

            expect(result).to.equal(3);
        })
    })
})
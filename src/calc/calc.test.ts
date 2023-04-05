import { sum } from "./calc";

describe('calculator',()=>{
    it('should return right',()=>{
        expect(sum(1,3)).toBe(4)
    })
    it('should return right with negative',()=>{
        expect(sum(-1,3)).toBe(2)
    })
})
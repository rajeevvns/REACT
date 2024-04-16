import Memo
 from "./Memo";
export default class MathUtil {
    // Memoization pattern
    @Memo
    fibanocci(no: number): number {
        return (no == 0 || no == 1) ? no : this.fibanocci(no - 1) + this.fibanocci(no - 2);
    }

    @Memo
    add(x:number, y:number) : number {
        return x + y;
    }
}
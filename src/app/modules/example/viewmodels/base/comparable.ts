import * as deepEqual from 'deep-equal';

//'structure' comparison
export abstract class Comparable {
    equals(other:Comparable):boolean {
        return deepEqual(this,other);
    }
}
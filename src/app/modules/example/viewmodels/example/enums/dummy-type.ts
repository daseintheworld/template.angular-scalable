import { Enumeration } from '../../../store/models/base';

const types: Array<{id:number,name:string}> = [
    {id:1,name:"Void"},
    {id:2,name:"Boolean"},
    {id:3,name:"General"}
];

export class DummyType extends Enumeration<{id:number,name:string}>  {

    static Void: DummyType = new DummyType(1);
    static Boolean: DummyType = new DummyType(2);
    static General: DummyType = new DummyType(3);

    protected getItems(): { id: number; name: string; }[] {
        return types;
    }

    constructor(id:number){
        super(id);
    }
};

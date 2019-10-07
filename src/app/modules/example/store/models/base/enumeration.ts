export abstract class Enumeration<T extends {id:number,name:string}>
{
    protected abstract getItems() : T[];

    public readonly name: string = '';

    public readonly id: number = undefined;

    public readonly prop: T = undefined;

    constructor (id:number)
    {
        this.validation(id);
        this.prop = this.getItems().find(o => o.id === id);
        this.id = this.prop.id;
        this.name = this.prop.name;
    }

    private validation(id: number): any {
        if(!this.getItems()) {
            const message = `fatal error : enum has to be set - ${this.constructor.name}`;

            alert(message);
            throw message;
        }

        if(!this.getItems().some(o => o.id === id))
        {
            const message = `fatal error : key (${id}) does not exist in the type - ${this.constructor.name}`;
            alert(message);
            throw message;
        }
    }

    toString() {
        return this.name;
    }
}
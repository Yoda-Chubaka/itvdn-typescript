// GENERICS
class myDictionary<TKey, TDescription, TValue> {
    private _key: TKey;
    public _description: TDescription;
    private _value: TValue;

    public set key(value: TKey) {
        if (!value) {
            throw new Error("Значення поля value не може бути порожнім!");
        }
        this._key = value;
    }

    public get key(): TKey {
        return this._key;
    }

    public set description(value: TDescription) {
        if (!value) {
            throw new Error("Значення поля value не може бути порожнім!");
        }
        this._description = value;
    }

    public get description(): TDescription {
        return this._description;
    }

    public set value(value: TValue) {
        if (!value) {
            throw new Error("Значення поля value не може бути порожнім!");
        }
        this._value = value;
    }

    public get value(): TValue {
        return this._value;
    }
}

const vocabulary1 = new myDictionary<string, string, number>();
vocabulary1.key = "key1";
vocabulary1.description = "Lorem ipsum";
vocabulary1.value = 123;

const vocabulary2 = new myDictionary<string, string, number>();
vocabulary2.key = "key2";
vocabulary2.description = "Lorem ipsum2";
vocabulary2.value = 123456;

const vocabulary3 = new myDictionary<string, string, number>();
vocabulary3.key = "key3";
vocabulary3.description = "Lorem ipsum3";
vocabulary3.value = 123789900;

console.log(vocabulary1);
console.log(vocabulary2);
console.log(vocabulary3);
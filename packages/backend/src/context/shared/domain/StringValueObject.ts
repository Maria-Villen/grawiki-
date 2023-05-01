export abstract class StringValueObject extends String {
    readonly value: string;

    constructor(value: string) {
        super(value);
        this.value = value;
    }
    toString(): string {
        return this.value;
    }
}
export class Lover {
    private _id: number;
    private _name: string;
    private _address: string;
    private _zodiac: string;
    private _yearOfBirth: string;
    private _interest: string;

    constructor(id: number, name: string, address: string, zodiac: string, yearOfBirth: string, interest: string) {
        this._id = id;
        this._name = name;
        this._address = address;
        this._zodiac= zodiac;
        this._yearOfBirth = yearOfBirth;
        this._interest = interest;
    }


    getId(): number {
        return this._id;
    }

    setId(value: number) {
        this._id = value;
    }

    getName(): string {
        return this._name;
    }

    setName(value: string) {
        this._name = value;
    }

    getAddress(): string {
        return this._address;
    }

    setAddress(value: string) {
        this._address = value;
    }

    getZodiac(): string {
        return this._zodiac;
    }

    setZodiac(value: string) {
        this._zodiac = value;
    }

    getYearOfBirth(): string {
        return this._yearOfBirth;
    }

    setYearOfBirth(value: string) {
        this._yearOfBirth = value;
    }

    getInterest(): string {
        return this._interest;
    }

    setInterest(value: string) {
        this._interest = value;
    }
}
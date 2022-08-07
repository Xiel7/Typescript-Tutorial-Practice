// generics
// type numArray = Array<number>;
// type stringArray = Array<string>;
type numArray = number[];
type stringArray = string[];


// const last = <T>(arr: Array<T>) => {
//     return arr[arr.length - 1];
// }

const last = <T>(arr: T[]) => {
    return arr[arr.length - 1];
}

const l = last([1, 2, 3]);

const l2 = last<string>(['1', 'Hello', 'There']);

const makeArr = <X, Y = number>(x: X, y: Y): [X, Y] => {
    return [x, y];
}

const v = makeArr(5, 2);
const v2 = makeArr('hoho', '3');
const v3 = makeArr<string | null, number>('hoho', 3);

// const makeFullName = (obj: { firstName: string, lastName: string }) => {
//     return {
//         ...obj,
//         fullName: obj.firstName + ' ' + obj.lastName
//     }
// }

// extends
const makeFullName = <T extends { firstName: string, lastName: string }>(obj: T) => {
    return {
        ...obj,
        fullName: obj.firstName + ' ' + obj.lastName
    }
}

const v4 = makeFullName({ firstName: 'baka', lastName: 'yarou', age: 21 });
// const v5 = makeFullName({ another: 'baka', lastName: 'yarou', age: 21 });

interface Tab<T> {
    id: string;
    position: number;
    data: T;
}

type NumberTab = Tab<number>;
type StringTab = Tab<string>;

const numberTab: NumberTab = { id: 'hello', position: 1, data: 2 }
const stringTab: StringTab = { id: 'hello', position: 1, data: 'Hello desu' }
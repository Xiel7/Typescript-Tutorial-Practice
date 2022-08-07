// Type System Intro
const greeting: string = "Hello there";
const year : number = 2021;

// array
let numbers: number[] = [1, 2, 3];
numbers = numbers.map((number) => 
    number + 1
)
console.log(numbers);

// tuples
let user: [number, string, ...any] = [1, 'Most'];

console.log(user)

// enums
const small = 1;
const medium = 2;
const large = 3;
enum Size { Small = 1, Medium, Large}
let mySize: Size = Size.Medium;
console.log(mySize);

// Functions
const addTwoNumbers = (a: number, b: number): number => a + b

function addThreeNumbers(a: number, b: number, c: number): number {
    return a + b + c;
}

// implicit function
function calculateTax(income: number) : number {
    if(income < 50000) 
        return income * 1.2

    return income * 1.3
}

// Interface
interface User {
    id: string;
    name: string;
}

interface Book {
    id: string;
    name: string;
    releaseDate: Date;
}

const getUser = (id: string): User => ({
    id,
    name: 'bbbaka',
})

const getBook = (id: string): Book => ({
    id,
    name: 'Subtle Art of not Giving a F',
    releaseDate: new Date(),
})

const saveUser = (user: User) => {
    console.log('saving user', {
        prop1: user.id,
        prop2: user.name
    })
    return user;
}


const saveBook = (book: Book) => {
    console.log('saving book', {
        prop1: book.id,
        prop2: book.name,
        prop3: book.releaseDate,
    })
    return book;
}

saveUser(getBook("2"));
saveBook(getBook("2"));


// Types alias
type Employee = {
    readonly id: string,
    name: string, 
    retire: (date: Date) => void
}

const employee: Employee = {
    id: '2',
    name: 'Faze',
    retire: (date: Date) => {
        console.log(date)
    }
}

// Union
const kgToLbs = (weight: number | string): number  => {
    // Narrowing
    if(typeof weight === 'number') {
        return weight * 2.2
    } else {
        return parseInt(weight) * 2.2
    }
}

console.log('kgToLbs (number)', kgToLbs(10));
console.log('kgToLbs (string)', kgToLbs('10kg'));

// Intersection
type Draggable = {
    drag: () => void
}

type Resizable = {
    resize: () => void
}

type UIWidget = Draggable & Resizable


let textBox : UIWidget = {
    drag: () => {},
    resize: () => {},
}

// Literal Types (exact, specific)
type Quantity = 500 | 100
let quantity: Quantity = 100;

type Metric = 'cm' | 'inch';
let metric: Metric = 'cm';

// Nullable
const greet = (name : string | null | undefined) => {
    if(name)
        console.log('Hello ' + name);
    else 
        console.log('Hey')
}

greet(undefined)

// Optional Chaining
type Customer = {
    birthday: Date
}

function getCustomer(id: number): Customer | null {
    return id === 0 ? null : {birthday: new Date()}
}

let customer = getCustomer(1)
// Optional property access operator
console.log(customer?.birthday.getFullYear())

// Optional element access operator 
// customers?.[0]

// Optional call
let log: any = null
log?.('a')
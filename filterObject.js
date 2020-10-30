const array = [
    { id: 1, name: 'a1', sub: { id: 6, name: 'a1 sub' } },
    { id: 2, name: 'a2', sub: null },
    { id: 3, name: 'a3', sub: { id: 8, name: 'a3 sub' } },
    { id: 4, name: 'a4', sub: null },
    { id: 5, name: 'a5', sub: { id: 10, name: 'a5 sub' } },
];

const array2 = [
    { id: 1, name: 'a1', sub: { id: 6, name: 'a1 sub' } },
    { id: 2, name: 'a2', sub: null },
    { id: 5, name: 'a5', sub: { id: 10, name: 'a5 sub' } },
];

const result = array.filter((elem) => !array2.find(({ id }) => elem.id === id) && elem.sub);

console.log(result);
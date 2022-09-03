type Product = {
    id: number
    name: string
    price: number
    imageUrl?: string
}

export const products: Product[] = [
    {id: 1, name: 'Crêpe nature', price: 200},
    {id: 2, name: 'Crêpe choco', price: 300},
    {id: 3, name: 'Gaufre', price: 500},
    {id: 4, name: 'Pancake', price: 250},
    {id: 5, name: 'Cupcake fraise', price: 400},
    {id: 6, name: 'Cupcake raisins', price: 400},
    {id: 7, name: 'Beignet sucré', price: 80},
    {id: 8, name: 'Beignet crème', price: 150},
    {id: 9, name: 'Tarte meringue', price: 2500},
    {id: 10, name: 'Gâteau marbré', price: 8000},
]
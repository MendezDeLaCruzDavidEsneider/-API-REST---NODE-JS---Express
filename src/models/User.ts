export interface User{
    id: number;
    name: string;
    email: string;
    age: number;
}

//Base de datos (Colección) simulada
export const users: User[]= [
    {id:1, name: 'Juan García', email: 'juan@sena.edu.co', age:28},
    {id: 2, name: 'María López', email: 'maria@sena.edu.co', age: 32},
    {id: 3, name: 'Carlos Rodríguez', email: 'carlos@sena.edu.co', age: 25},
]
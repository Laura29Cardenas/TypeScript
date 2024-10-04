 //Definicion de tipos:
 export type Address = {
    street : string,
    numero : number,
    sector? : string,
    city : string,
    postalCode? : string
}

export type Estudiante = {
    nombre:string,
    apellido:string,
    edad?: number   
    addresses?: Address []
}
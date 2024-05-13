export interface DataAPI {
        id: number
        title: string
        price: number
        description: string
        images: string[]
        creationAt: string
        updatedAt: string
        category: Category
    }

    export interface Category {
    id: number
    name: string
    image: string
    creationAt: string
    updatedAt: string
    }


//     export type Root = Root2[]

// export interface Root2 {
//   id: number
//   title: string
//   price: number
//   description: string
//   images: string[]
//   creationAt: string
//   updatedAt: string
//   category: Category
// }

// export interface Category {
//   id: number
//   name: string
//   image: string
//   creationAt: string
//   updatedAt: string
// }

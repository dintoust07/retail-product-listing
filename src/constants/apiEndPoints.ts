// Created as an object to allow future extension,
// such as integrating additional API endpoints for create, update, and delete operations.
export const productApiEndpoints = {
  list: (limit: number =10, skip:number = 0, term: string = ''): string => 
    `https://dummyjson.com/products/search?q=${term}&limit=${limit}&skip=${skip}`
}
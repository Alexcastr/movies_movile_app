
export abstract class HttpAdapter{
  abstract get<T>(url: string, options?:Record<string, unknown>): Promise<T>
}


// give me an example of record

// {
//   name: 'John',
//   age: 30
// }

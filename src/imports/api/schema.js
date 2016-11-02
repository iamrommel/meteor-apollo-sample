export const rootSchema = [`
type Query {
  getCustomer : [Customer]
  getWorkItem : WorkItem
}

schema {
  query: Query
}
`];



export const rootResolvers = {

};
import faker  from 'faker'

export const schema = [`
type WorkItem {
    _id : String
    name : String
    description : String
}
`];

export const resolvers = {
    Query: {
        async getWorkItem(root, args, context) {

            return {
                name : faker.commerce.productName,
                description : faker.lorem.sentences(3)
            };
        },
      
    },

};
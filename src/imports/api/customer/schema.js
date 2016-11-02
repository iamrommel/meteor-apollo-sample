import faker  from 'faker'


export const  schema  = [`
type Customer {
    _id : String
    name : String
    address : String
}
`];



export const resolvers = {
    Query: {
        async getCustomer(root, args, context) {

            let result = [];
            for (let i=0; i< 10; i++) {
                result.push({
                    name: faker.name.findName(),
                    address: faker.address.streetAddress
                });
            }
            return result;
        },

    },

};
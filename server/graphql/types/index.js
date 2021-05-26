exports.userTypes = `

     type User {
         id:ID,
         email:String,
         password:String
         role:String
        }
        
       input signUpInput {
           email:String!
           password:String!
           role:String
        }

        input signInInput {
            email:String!
            password:String!
        }
`;

exports.userTypes = `
     type User {
         _id:ID,
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

        input UpdateUserInput{
            email:String!
            password:String!
          }
          input UpdateAdminInput{
            email:String
            role:String
          }
`;

exports.foodTypes = `
     type Food {
         _id:ID
         name:String
         image:String
         serving_size:String
         calories:String
         proteins:String
         carbs:String
         fat:String
    }   
    input FoodInput {
        name:String
        image:String
        serving_size:String
        calories:String
        proteins:String
        carbs:String
        fat:String
    }
`;

exports.mealsTypes = `
     
    type Author {
        email : String
    }

    type MealsFood {
        name: String
        serving_size:String
        calories:String
        proteins:String
        carbs:String
        fat:String
    } 
    type Meals {
        _id:ID
        food_id:String
        user_id:String
        serving_size:String
        calories:String
        user: Author
        food: MealsFood
    }
    input MealsInput {
        serving_size:String
        calories:String

    } 

   
  
`;

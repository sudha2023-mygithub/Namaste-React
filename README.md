# Namaste React

# parcel
- Dev Build
- Local Server
- HMR = Hot Module Replacement

# Namaste Food
/**
 * Header
 *  -logo
 *  -Nav Items
 * 
 * Body
 *  -Search
 *  -RestaurantConatiner
 *    -Restaurant Card
 *      -Img
 *      -Name of Res, Star Rating, Cuisine, delivery time
 * 
 * Footer
 *  -Copyright
 *  -Liks
 *  -Address
 *  -Contact
 * 
 * 
 * 
 */

 Two types of Export/Imports

 - Default Export/Import
  export default Component;
  import Component from "path";

 - named Export/Import
  export const Component;
  import {component} from "path";

  # React Hooks
    - Normal JS utility functions
       - useState() - Superpowerful state variables in react
       - useEffect() - 


## Two types of routing in web apps
# 1. Client Side Routing
# 2. Server Side Routing

 # Redux Toolkit
 - install @reduxjs/toolkit and react-redux
 - Build our store
 - connect our store to our app
 - Slice (cartSlice)
 - dispatch(action)
 - Selector


# Setting up Testing in our app
  - Install React Testing Library
  - Install jest
  - Installed Babel dependents
  - configure Babel
  - configure Parcel Config file to disable default Babel transpilation
  - Jest - npx jest --init
  - Install jsdom library
  - Install @babel/preset-react - to make JSX work in test cases
  - Include @babel/preset-react inside my babel config
  - npm i -D @testing-library/jest-dom
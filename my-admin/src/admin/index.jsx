import { Admin, Resource, ListGuesser, EditGuesser } from "react-admin";
import {createTrailbaseProvider} from "/workspaces/Org-348-A2/my-admin/ra-trailbase.js"
// import jsonServerProvider from "ra-data-json-server";

// const dataProvider = jsonServerProvider("https://jsonplaceholder.typicode.com");
const TRAILBASE_URL = "https://refactored-happiness-x59qj7xpwxv43694j-4000.app.github.dev/" 
const {dataProvider, authProvider} = await createTrailbaseProvider(TRAILBASE_URL);

const App = () => (
  <Admin dataProvider={dataProvider}>
    <Resource name="book" list={ListGuesser} edit={EditGuesser} />
    <Resource name="publisher" list={ListGuesser} edit={EditGuesser}/>
    <Resource name="student" list={ListGuesser} edit={EditGuesser}/>
    <Resource name="book_request" list={ListGuesser} edit={EditGuesser}/>
    <Resource name="orders" list={ListGuesser} edit={EditGuesser}/>
    <Resource name="request" list={ListGuesser} edit={EditGuesser}/>
  </Admin>
);

export default App;
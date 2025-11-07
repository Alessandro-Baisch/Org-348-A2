import { Admin, Resource, ListGuesser } from "react-admin";
import {createTrailbaseProvider} from "/workspaces/Org-348-A2/my-admin/ra-trailbase (2).js"
// import jsonServerProvider from "ra-data-json-server";

// const dataProvider = jsonServerProvider("https://jsonplaceholder.typicode.com");
const TRAILBASE_URL = "https://refactored-happiness-x59qj7xpwxv43694j-4000.app.github.dev/" 
const {dataProvider, authProvider} = await createTrailbaseProvider(TRAILBASE_URL);

const App = () => (
  <Admin dataProvider={dataProvider}>
    <Resource name="posts" list={ListGuesser} />
    <Resource name="comments" list={ListGuesser} />
  </Admin>
);

export default App;
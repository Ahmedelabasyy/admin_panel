import Sidebar from "./Components/Sidebar/Sidebar";
import Topbar from "./Components/Topbar/Topbar";
import Home  from "./Pages/Home/Home.jsx"
import { BrowserRouter as Router, Switch , Route} from "react-router-dom";
import './app.css';
import Userlist from "./Pages/UserList/Userlist";
import User from "./Pages/User/User";
import NewUser from "./Pages/newUser/NewUser";
import ProductList from "./Pages/ProductList/ProductList";
import Product from "./Pages/Product/Product";
import NewProduct from "./Pages/newProduct/NewProduct";

function App() {
  return (
    <Router className="App">
      <Topbar />
      <div className="container">
        <Sidebar />
        <Switch>
          <Route exact path="/home">
            <Home />
          </Route>
          <Route path="/users">
            <Userlist />
          </Route>
          <Route path="/user/:userid">
            <User />
          </Route>
          <Route path="/createUser">
            <NewUser />
          </Route>
          <Route path="/products">
            <ProductList />
          </Route>
          <Route path="/product/:productid">
            <Product />
          </Route>
          <Route path="/newProduct">
            <NewProduct />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter,Switch,Link,Route} from 'react-router-dom';
import CreateUser from "../CreateUser";
import UsersTable from "../UsersTable";
import Home from "../Home";


function MainNavigation() {



  
  return (
    <>
    <BrowserRouter>
      <Navbar bg="dark" variant="dark">
        <Container>
          {/* <Navbar.Brand href="#home">Navbar</Navbar.Brand> */}
          <Nav className="me-auto">
              <Nav.Link as={Link} to="/">Home</Nav.Link>
              <Nav.Link as={Link} to="/create">Create</Nav.Link>
              <Nav.Link as={Link} to="/table">Table</Nav.Link>
            </Nav>
        </Container>
      </Navbar>
      <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/create">
            <CreateUser />
          </Route>
          <Route path="/table">
            <UsersTable />
          </Route>
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default MainNavigation;
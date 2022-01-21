// Import React
import React from "react";

// Import Bootstrap
import { Nav, Navbar, Container, Row, Col }
		from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";

// Import Custom CSS
import "./App.css";

// Import from react-router-dom
import { BrowserRouter as Router, Switch,
	Route, Link } from "react-router-dom";

// Import other React Component
import CreateStudent from
	"./Components/create-student.component";
import EditStudent from
	"./Components/edit-student.component";
import StudentList from
	"./Components/student-list.component";
import Footer from
	"./Components/footer.component";

// App Component
const App = () => {
return (
	<Router>
	<div className="App">
		<header className="App-header">
		<Navbar bg="dark" variant="dark">
			<Container>
			<Navbar.Brand>
				<Link to={"/create-student"}
				className="nav-link">
				Student Record
				</Link>
			</Navbar.Brand>

			<Nav className="justify-content-end">
				<Nav>
				<Link to={"/create-student"}
					className="nav-link">
					Add Student
				</Link>
				</Nav>

				<Nav>
				<Link to={"/student-list"}
					className="nav-link">
					Student List
				</Link>
				</Nav>
			</Nav>
			</Container>
		</Navbar>
		</header>

		<Container>
		<Row>
			<Col md={12}>
			<div className="wrapper">
				<Switch>
				<Route exact path="/"
					component={CreateStudent} />
				<Route path="/create-student"
					component={CreateStudent} />
				<Route path="/edit-student/:id"
					component={EditStudent} />
				<Route path="/student-list"
					component={StudentList} />
				</Switch>
			</div>
			</Col>
		</Row>
		</Container>
				<Footer></Footer>
	</div>
		
			
		
	
	</Router>
);
};

export default App;

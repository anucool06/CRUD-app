import React, { useState, useEffect } from "react";
import axios from "axios";
import { Table } from "react-bootstrap";
import StudentTableRow from "./StudentTableRow";

const StudentList = () => {
const [students, setStudents] = useState([]);

useEffect(() => {
	axios
	.get("http://localhost:4000/students/")
	.then(({ data }) => {
		setStudents(data);
	})
	.catch((error) => {
		console.log(error);
	});
}, []);

const DataTable = () => {
	return students.map((res, i) => {
	return <StudentTableRow obj={res} key={i} />;
	});
};

return (
	<div className="table-wrapper">
		<div className="student-db">
			<h2><u>Student Database</u></h2>
		</div>
	<Table striped bordered hover>
		<thead>
		<tr>
			<th className="table-head">Full Name</th>
			<th className="table-head">Roll No.</th>
			<th className="table-head">Email Id</th>
			<th className="table-head">Update Info.</th>
		</tr>
		</thead>
		<tbody>{DataTable()}</tbody>
	</Table>
	</div>
);
};

export default StudentList;

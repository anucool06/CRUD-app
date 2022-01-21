import React from "react";
import * as Yup from "yup";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { FormGroup, FormControl, Button, Row } from "react-bootstrap";

const StudentForm = (props) => {
const validationSchema = Yup.object().shape({
	name: Yup.string().required("Rquired"),
	email: Yup.string()
	.email("You have enter an invalid email address")
	.required("Rquired"),
	rollno: Yup.number()
	.positive("Invalid roll number")
	.integer("Invalid roll number")
	.required("Rquired"),
});
console.log(props);
return (
	<div className="form-wrapper">
		<div className="student-db">
			<h3><u>Create Record</u></h3>
		</div>
	<Formik {...props} validationSchema={validationSchema}>
		<Form>
		<Row>
		<FormGroup> Full Name: 
			<Field name="name" type="text"
				className="form-control" />
			<ErrorMessage
			name="name"
			className="d-block invalid-feedback"
			component="span"
			/>
		</FormGroup>
		</Row>
		<Row>
		<FormGroup> Roll No: 
			<Field name="rollno" type="number"
				className="form-control" />
			<ErrorMessage
			name="rollno"
			className="d-block invalid-feedback"
			component="span"
			/>
		</FormGroup></Row>
		<Row>
		<FormGroup> Email Id: 
			<Field name="email" type="text"
				className="form-control" />
			<ErrorMessage
			name="email"
			className="d-block invalid-feedback"
			component="span"
			/>
		</FormGroup>
		</Row>
		<Row className="buttonsize">
		<Button variant="primary" size="lg"
			block="block" type="submit">
			{props.children}
		</Button>
		</Row>
		</Form>
	</Formik>
	
	</div>
);
};

export default StudentForm;

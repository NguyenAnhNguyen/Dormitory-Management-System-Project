import React, { useState } from 'react';
import {
    Form, Row, FormGroup, Col, Input, Button, Modal, ModalHeader, ModalBody, ModalFooter, Label
} from 'reactstrap';

function Addstudent(props) {
    const [state, setState] = useState({
        lastName: '',
        firstName: '',
        birthDate: '',
        gender: true,
        ethnic: '',
        nationnality: '',
        phoneNumber: '',
        homeAddress: '',
        mainAddress: '',
        email: '',
        avartar: 'test',
        identifyCardNumber: '',
        universitysutdentId: '',
        faculty: '',
        major: '',
        schoolYear: '',
        relatedPersonName: '',
        relatedPersonPhoneNumber: '',
        universityId: ''
    });
    const handleOnchangeInput = (event, item) => {
        let copyState = { ...state }
        if (event.target.value == "true" && item == "gender") {
            copyState["gender"] = true;
        }
        else if (event.target.value == "false" && item == "gender") {
            copyState["gender"] = false;
        }
        else {
            copyState[item] = event.target.value;
        }
        setState({
            ...copyState
        })
    }
    const checkValideInput = () => {
        let isValid = true;
        let arrInput = ['lastName', 'firstName', 'birthDate', 'ethnic', 'nationnality', 'phoneNumber', 'homeAddress', 'mainAddress', 'email', 'avartar', 'identifyCardNumber', 'universitysutdentId', 'faculty', 'major', 'schoolYear', 'relatedPersonName', 'relatedPersonPhoneNumber', 'universityId']
        for (let i = 0; i < arrInput.length; i++) {
            console.log('check inside loop', state[arrInput[i]], arrInput[i])
            if (!state[arrInput[i]]) {
                isValid = false;
                alert('Missing parameter: ' + arrInput[i]);
                break;
            }
        }
        return isValid;
    }
    const handleAddNewStudent = () => {
        let isValid = checkValideInput();
        if (isValid === true) {
            props.createNewStudent(state);
            console.log("data modal: ", state);
            // { lastName: 'df', firstName: 'sdf', dateOfBirth: '2022-12-03', email: 'test1@gmail.com', identiFyCardNumber: '123', phoneNumber: '12345', address: '12345', gender: true, status: true }
        }
    }
    return (
        <div>
            <Modal isOpen={props.modal} fade={false} toggle={props.toggle}>
                <ModalHeader >Add New Student</ModalHeader>
                <ModalBody>
                    <Form >
                        <FormGroup>
                            <Label for="lastName">
                                lastName
                            </Label>
                            <Input
                                id="lastName"
                                name="lastName"
                                onChange={(event) => handleOnchangeInput(event, "lastName")}
                                value={state.lastName}
                            />
                        </FormGroup>
                        <FormGroup>
                            <Label for="LastName">
                                firstName
                            </Label>
                            <Input
                                id="firstName"
                                name="firstName"
                                onChange={(event) => handleOnchangeInput(event, "firstName")}
                                value={state.firstName}
                            />
                        </FormGroup>
                        <FormGroup>
                            <Label for="birthDate">
                                date Of Birth
                            </Label>
                            <Input
                                id="birthDate"
                                name="birthDate"
                                type="date"
                                onChange={(event) => handleOnchangeInput(event, "birthDate")}
                                value={state.birthDate}
                            />
                        </FormGroup>
                        <Label for="gender">
                            gender
                        </Label>
                        <FormGroup>
                            <Label for="gender">
                                Man
                            </Label>
                            &nbsp;
                            &nbsp;
                            &nbsp;
                            <Input
                                id="gender"
                                name="gender"
                                type="radio"
                                onChange={(event) => handleOnchangeInput(event, "gender")}
                                value={true}
                            />
                            <Label for="gender">
                                Woman
                            </Label>
                            &nbsp;
                            &nbsp;
                            &nbsp;
                            <Input
                                id="gender"
                                name="gender"
                                type="radio"
                                onChange={(event) => handleOnchangeInput(event, "gender")}
                                value={false}
                            />

                        </FormGroup>
                        <FormGroup>
                            <Label for="ethnic">
                                ethnic
                            </Label>
                            <Input
                                id="ethnic"
                                name="ethnic"
                                onChange={(event) => handleOnchangeInput(event, "ethnic")}
                                value={state.ethnic}
                            />
                        </FormGroup>
                        <FormGroup>
                            <Label for="nationnality">
                                nation
                            </Label>
                            <Input
                                id="nationnality"
                                name="nationnality"
                                onChange={(event) => handleOnchangeInput(event, "nationnality")}
                                value={state.nationnality}
                            />
                        </FormGroup>
                        <FormGroup>
                            <Label for="phoneNumber">
                                phone Number
                            </Label>
                            <Input
                                id="phoneNumber"
                                name="phoneNumber"
                                onChange={(event) => handleOnchangeInput(event, "phoneNumber")}
                                value={state.phoneNumber}
                            />
                        </FormGroup>
                        <FormGroup>
                            <Label for="homeAddress">
                                Home Address
                            </Label>
                            <Input
                                id="homeAddress"
                                name="homeAddress"
                                onChange={(event) => handleOnchangeInput(event, "homeAddress")}
                                value={state.homeAddress}
                            />
                        </FormGroup>
                        <FormGroup>
                            <Label for="mainAddress">
                                Main Address
                            </Label>
                            <Input
                                id="mainAddress"
                                name="mainAddress"
                                onChange={(event) => handleOnchangeInput(event, "mainAddress")}
                                value={state.mainAddress}
                            />
                        </FormGroup>
                        <FormGroup>
                            <Label for="email">
                                email
                            </Label>
                            <Input
                                id="email"
                                name="email"
                                onChange={(event) => handleOnchangeInput(event, "email")}
                                value={state.email}
                            />
                        </FormGroup>
                        <FormGroup>

                            <Input
                                id="avartar"
                                name="avartar"
                                type="hidden"
                                onChange={(event) => handleOnchangeInput(event, "avartar")}
                                value={state.avartar}
                            />
                        </FormGroup>
                        <FormGroup>
                            <Label for="identifyCardNumber">
                                identifyCardNumber
                            </Label>
                            <Input
                                id="identifyCardNumber"
                                name="identifyCardNumber"
                                onChange={(event) => handleOnchangeInput(event, "identifyCardNumber")}
                                value={state.identifyCardNumber}
                            />
                        </FormGroup>
                        <FormGroup>
                            <Label for="universitysutdentId">
                                universitysutdentId
                            </Label>
                            <Input
                                id="universitysutdentId"
                                name="universitysutdentId"
                                onChange={(event) => handleOnchangeInput(event, "universitysutdentId")}
                                value={state.universitysutdentId}
                            />
                        </FormGroup>
                        <FormGroup>
                            <Label for="faculty">
                                faculty
                            </Label>
                            <Input
                                id="faculty"
                                name="faculty"
                                onChange={(event) => handleOnchangeInput(event, "faculty")}
                                value={state.faculty}
                            />
                        </FormGroup>
                        <FormGroup>
                            <Label for="major">
                                major
                            </Label>
                            <Input
                                id="major"
                                name="major"
                                onChange={(event) => handleOnchangeInput(event, "major")}
                                value={state.major}
                            />
                        </FormGroup>
                        <FormGroup>
                            <Label for="schoolYear">
                                schoolYear
                            </Label>
                            <Input
                                id="schoolYear"
                                name="schoolYear"
                                onChange={(event) => handleOnchangeInput(event, "schoolYear")}
                                value={state.schoolYear}
                            />
                        </FormGroup>
                        <FormGroup>
                            <Label for="relatedPersonName">
                                relatedPersonName
                            </Label>
                            <Input
                                id="relatedPersonName"
                                name="relatedPersonName"
                                onChange={(event) => handleOnchangeInput(event, "relatedPersonName")}
                                value={state.relatedPersonName}
                            />
                        </FormGroup>
                        <FormGroup>
                            <Label for="relatedPersonPhoneNumber">
                                related Person Phone Number
                            </Label>
                            <Input
                                id="relatedPersonPhoneNumber"
                                name="relatedPersonPhoneNumber"
                                onChange={(event) => handleOnchangeInput(event, "relatedPersonPhoneNumber")}
                                value={state.relatedPersonPhoneNumber}
                            />
                        </FormGroup>
                        <FormGroup>
                            <Label for="universityId">
                                universityId
                            </Label>
                            <Input
                                id="universityId"
                                name="universityId"
                                onChange={(event) => handleOnchangeInput(event, "universityId")}
                                value={state.universityId}
                            />
                        </FormGroup>
                        <Button color="primary" onClick={() => handleAddNewStudent()}>
                            Create
                        </Button>{' '}
                        <Button color="secondary" onClick={props.toggle}>
                            Cancel
                        </Button>
                    </Form>
                </ModalBody>
                {/* Nút tắt phần modal */}
                {/* <ModalFooter>
                    <Button color="primary" onClick={props.toggle}>
                        Create
                    </Button>{' '}
                    <Button color="secondary" onClick={props.toggle}>
                        Cancel
                    </Button>
                </ModalFooter> */}
            </Modal>
        </div>
    );
}

export default Addstudent;
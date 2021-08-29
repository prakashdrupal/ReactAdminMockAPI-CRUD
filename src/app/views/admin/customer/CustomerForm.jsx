import React, { useState, useEffect } from 'react'
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator'
import {
    Button,
    Icon,
    Grid,
    Radio,
    RadioGroup,
    FormControlLabel,
    Checkbox,
} from '@material-ui/core'
import {
    MuiPickersUtilsProvider,
    KeyboardDatePicker,
} from '@material-ui/pickers'
import 'date-fns'
import DateFnsUtils from '@date-io/date-fns'
import axios from 'axios';
import { useHistory } from 'react-router';

const CustomerForm = () => {
    const [state, setState] = useState({
        date: new Date(),
    })

    // useEffect(() => {
    //     ValidatorForm.addValidationRule('isPasswordMatch', (value) => {
    //         console.log(value)

    //         if (value !== state.password) {
    //             return false
    //         }
    //         return true
    //     })
    //     return () => ValidatorForm.removeValidationRule('isPasswordMatch')
    // }, [state.password])

    const handleSubmit = (event) => {
        console.log("submitted");
        console.log(event);
    }

    const handleChange = (event) => {
        event.persist()
        setState({
            ...state,
            [event.target.name]: event.target.value,
        })
    }

    const handleDateChange = (date) => {
        setState({ ...state, date })
    }

    const {
        date,
        gender
    } = state

    let history = useHistory();
    const [first_name, setFirstName] = useState('');
    const [last_name, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    //const [gender, setGender] = useState('');
    const [birthday, setBirthday] = useState(new Date());
    const [organization, setOrganization] = useState('');
    const [designation, setDesignation] = useState('');
    const [status, setCheckbox] = useState(false);
    //console.log(gender)
    console.log(birthday)
    console.log(status)
    const postData = () => {
        axios.post(`https://6129cc8a068adf001789b921.mockapi.io/api/v1/employee`, {
            first_name,
            last_name,
            email,
            phone,
            gender,
            birthday,
            organization,
            designation,
            status
        }).then(() => {
            history.push('/admin/customer/customer-list')
        })
        console.log(postData);
    }

    return (
        <div>
            <ValidatorForm onSubmit={handleSubmit} onError={() => null}>
                <Grid container spacing={6}>
                    <Grid item lg={6} md={6} sm={12} xs={12}>
                    <TextValidator
                            className="mb-4 w-full"
                            label="First Name"
                            onChange={handleChange}
                            type="text"
                            name="first_name"
                            value={first_name} onChange={(e) => setFirstName(e.target.value)}
                            validators={['required']}
                            errorMessages={['this field is required']}
                        />
                        <TextValidator
                            className="mb-4 w-full"
                            label="Last Name"
                            onChange={handleChange}
                            type="text"
                            name="last_name"
                            value={last_name} onChange={(e) => setLastName(e.target.value)}
                            validators={['required']}
                            errorMessages={['this field is required']}
                        />
                        <TextValidator
                            className="mb-4 w-full"
                            label="Email"
                            onChange={handleChange}
                            type="email"
                            name="email"
                            value={email} onChange={(e) => setEmail(e.target.value)}
                            validators={['required', 'isEmail']}
                            errorMessages={[
                                'this field is required',
                                'email is not valid',
                            ]}
                        />
                           <MuiPickersUtilsProvider utils={DateFnsUtils}>
                            <KeyboardDatePicker
                                className="mb-4 w-full"
                                margin="none"
                                id="mui-pickers-date"
                                label="Birthday"
                                inputVariant="standard"
                                type="text"
                                name="birthday"
                                autoOk={true}
                                //value={date}
                                value={birthday} onChange={(e) => setBirthday(e.target.value)}
                                onChange={handleDateChange}
                                KeyboardButtonProps={{
                                    'aria-label': 'change date',
                                }}
                            />
                        </MuiPickersUtilsProvider>

                        
                    </Grid>

                    <Grid item lg={6} md={6} sm={12} xs={12}>
                        <TextValidator
                            className="mb-4 w-full"
                            label="Mobile Nubmer"
                            onChange={handleChange}
                            type="text"
                            name="Phone"
                            value={phone} onChange={(e) => setPhone(e.target.value)}
                            validators={['required']}
                            errorMessages={['this field is required']}
                        />
                        <TextValidator
                            className="mb-8 w-full"
                            label="Designation"
                            onChange={handleChange}
                            type="textarea"
                            name="designation"
                            value={designation} onChange={(e) => setDesignation(e.target.value)}
                            validators={['required']}
                            errorMessages={['this field is required']}
                        /> 
                        <TextValidator
                            className="mb-8 w-full"
                            label="Organization"
                            onChange={handleChange}
                            type="text"
                            name="organization"
                            value={organization} onChange={(e) => setOrganization(e.target.value)}
                            validators={['required']}
                            errorMessages={['this field is required']}
                        />

                          <RadioGroup
                            className="mb-4"
                            //value={gender} onChange={(e) => setGender(e.target.value)}
                            //value={gender}
                            name="gender"
                            onChange={handleChange}
                            row
                        >
                            <FormControlLabel
                                value="Male"
                                control={<Radio color="secondary" />}
                                label="Male"
                                labelPlacement="end"
                            />
                            <FormControlLabel
                                value="Female"
                                control={<Radio color="secondary" />}
                                label="Female"
                                labelPlacement="end"
                            />
                            {/* <FormControlLabel
                                value="Others"
                                control={<Radio color="secondary" />}
                                label="Others"
                                labelPlacement="end"
                            /> */}
                        </RadioGroup>
                        <FormControlLabel
                            control={<Checkbox checked={status} onChange={() => setCheckbox(!status)} />}
                            label="I have read and agree to the terms of service."
                        />
                    </Grid>
                </Grid>
                <Button color="primary" variant="contained" onClick={postData} type="submit">
                    <Icon>send</Icon>
                    <span className="pl-2 capitalize">Save </span>
                </Button>
            </ValidatorForm>
        </div>
    )
}

export default CustomerForm

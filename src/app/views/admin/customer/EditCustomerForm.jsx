import React, { useState, useEffect } from 'react'
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator'
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useHistory } from 'react-router';
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


const EditCustomerForm = () => {
    const [state, setState] = useState({
        date: new Date(),
    })

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
        //gender,
    } = state

    let history = useHistory();
    const [id, setID] = useState(null);
    const [first_name, setFirstName] = useState('');
    const [last_name, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [gender, setGender] = useState('');
    const [birthday, setBirthday] = useState('');
    const [organization, setOrganization] = useState('');
    const [designation, setDesignation] = useState('');
    const [status, setCheckbox] = useState(false);

    useEffect(() => {
        setID(localStorage.getItem('ID'))
        setFirstName(localStorage.getItem('First Name'));
        setLastName(localStorage.getItem('Last Name'));
        setEmail(localStorage.getItem('Email'));
        setPhone(localStorage.getItem('Phone'));
        setGender(localStorage.getItem('Gender'));
        setBirthday(localStorage.getItem('Birthday'));
        setOrganization(localStorage.getItem('Organization'));
        setDesignation(localStorage.getItem('Designation'));
        setCheckbox(localStorage.getItem('Checkbox Value'));
    }, []);

    const updateAPIData = () => {
        axios.put(`https://6129cc8a068adf001789b921.mockapi.io/api/v1/employee/${id}`, {
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
                                label="Date picker"
                                inputVariant="standard"
                                type="text"
                                name="birthday"
                                autoOk={true}
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
                            label="Mobile Number"
                            onChange={handleChange}
                            type="text"
                            name="phone"
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
                            //value={gender || ''}
                            value={gender} onChange={(e) => setGender(e.target.value)}
                            name="gender"
                            onChange={handleChange}
                            row
                        >
                            <FormControlLabel
                                //value="Male"
                                value={gender ? 'Male' : 'Female'} onChange={(e) => setGender(e.target.value)}
                                control={<Radio color="secondary" />}
                                label="Male"
                               // name="gender"
                                labelPlacement="end"
                            />
                            <FormControlLabel
                                //value="Female"
                                value={gender ? 'Female' : 'Male'} onChange={(e) => setGender(e.target.value)}
                                control={<Radio color="secondary" />}
                                label="Female"
                               // name="gender"
                                labelPlacement="end"
                            />
                            {/* <FormControlLabel
                                //value="Other"
                                value={gender || ''}
                                control={<Radio color="secondary" />}
                                label="Others"
                               // name="gender"
                                labelPlacement="end"
                            /> */}
                        </RadioGroup>
                        <FormControlLabel
                            control={<Checkbox checked={status} onChange={() => setCheckbox(!status)} />}
                            label="I have read and agree to the terms of service."
                        />
                        
                        
                    </Grid>
                </Grid>
                <Button color="primary" variant="contained" type="submit" onClick={updateAPIData}>
                    <Icon>send</Icon>
                    <span className="pl-2 capitalize">Update</span>
                </Button>
                <Link Button color="secondary"  to="/admin/customer/customer-list"><span className="pl-2 capitalize">Cancel</span></Link>
            </ValidatorForm>
        </div>
    )
}

export default EditCustomerForm

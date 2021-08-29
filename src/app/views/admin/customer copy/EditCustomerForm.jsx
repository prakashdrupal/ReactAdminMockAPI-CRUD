import React, { useState, useEffect } from 'react'
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator'
import { Link } from 'react-router-dom';
import Axios from 'axios'
import {
    Button,
    Icon,
    Grid,
    Radio,
    RadioGroup,
    FormControlLabel,
    Checkbox,
    TextField,
} from '@material-ui/core'


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

    const [users,setusers]= useState([])
    useEffect(() => {
        fetchusers();
    }, [])
    
    useEffect(() => {
        //console.log(users)
    }, [users])

    
    const fetchusers=async()=>{
        const response= await Axios('https://jsonplaceholder.typicode.com/users/');
        setusers(response.data)    
        console.log(response.data);
    }

    
      

    const {
        firstName,
        website,
        phone,
        email,
        address
    } = state

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
                            name="firstName"
                            value={firstName || ''}
                            validators={['required']}
                            errorMessages={['this field is required']}
                        />
                        <TextValidator
                            className="mb-4 w-full"
                            label="Email"
                            onChange={handleChange}
                            type="email"
                            name="email"
                            value={email || ''}
                            validators={['required', 'isEmail']}
                            errorMessages={[
                                'this field is required',
                                'email is not valid',
                            ]}
                        />

                        <TextValidator
                            className="mb-8 w-full"
                            label="Website"
                            onChange={handleChange}
                            type="text"
                            name="website"
                            value={website || ''}
                            validators={['required']}
                            errorMessages={['this field is required']}
                        />
                    </Grid>

                    <Grid item lg={6} md={6} sm={12} xs={12}>
                        <TextValidator
                            className="mb-4 w-full"
                            label="Mobile Nubmer"
                            onChange={handleChange}
                            type="text"
                            name="phone"
                            value={phone || ''}
                            validators={['required']}
                            errorMessages={['this field is required']}
                        />
                        <TextValidator
                            className="mb-8 w-full"
                            label="Address"
                            onChange={handleChange}
                            type="textarea"
                            name="address"
                            value={address || ''}
                            validators={['required']}
                            errorMessages={['this field is required']}
                        /> 
                        
                    </Grid>
                </Grid>
                <Button color="primary" variant="contained" type="submit">
                    <Icon>send</Icon>
                    <span className="pl-2 capitalize">Save Changes</span>
                </Button>
                <Link Button color="secondary"  to="/admin/customer/customer-list"><span className="pl-2 capitalize">Cancel</span></Link>
            </ValidatorForm>
        </div>
    )
}

export default EditCustomerForm

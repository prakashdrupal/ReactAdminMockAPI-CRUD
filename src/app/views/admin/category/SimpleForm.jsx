import React, { useState, useEffect } from 'react'
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator'
import {
    Button,
    Icon,
    Grid,
    Radio,
    RadioGroup,
    FormControlLabel,
} from '@material-ui/core'

const SimpleForm = () => {
    const [state, setState] = useState({
        date: new Date(),
    })

    useEffect(() => {
        ValidatorForm.addValidationRule('isPasswordMatch', (value) => {
            console.log(value)

            if (value !== state.password) {
                return false
            }
            return true
        })
        return () => ValidatorForm.removeValidationRule('isPasswordMatch')
    }, [state.password])

    const handleSubmit = (event) => {
        // console.log("submitted");
        // console.log(event);
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
        categoryName,
        type,
    } = state

    return (
        <div>
            <ValidatorForm onSubmit={handleSubmit} onError={() => null}>
                <Grid container spacing={6}>
                    <Grid item lg={6} md={6} sm={12} xs={12}>
                        <TextValidator
                            className="mb-4 w-full"
                            label="Category Name"
                            onChange={handleChange}
                            type="text"
                            name="categoryName"
                            value={categoryName || ''}
                            errorMessages={['this field is required']}
                        />
                       
                        <RadioGroup
                            className="mb-4"
                            value={type || ''}
                            name="type"
                            onChange={handleChange}
                            row
                        >
                            <FormControlLabel
                                value="Income"
                                control={<Radio color="secondary" />}
                                label="Income"
                                labelPlacement="end"
                            />
                            <FormControlLabel
                                value="Expense"
                                control={<Radio color="secondary" />}
                                label="Expense"
                                labelPlacement="end"
                            />
                        </RadioGroup>
                    </Grid>
                </Grid>
                <Button color="primary" variant="contained" type="submit">
                    <Icon>send</Icon>
                    <span className="pl-2 capitalize">Save </span>
                </Button>
            </ValidatorForm>
        </div>
    )
}

export default SimpleForm

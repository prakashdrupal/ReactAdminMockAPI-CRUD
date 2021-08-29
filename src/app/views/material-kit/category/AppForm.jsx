import React from 'react'
import SimpleForm from './SimpleForm'
import StepperForm from './StepperForm'
import { Breadcrumb, SimpleCard } from 'app/components'

const AppForm = () => {
    return (
        <div className="m-sm-30">
            <div className="mb-sm-30">
                <Breadcrumb
                    routeSegments={[
                        { name: 'Categories', path: '/category' },
                        { name: 'Form' },
                    ]}
                />
            </div>
            <SimpleCard title="Categories">
                <SimpleForm />
            </SimpleCard>
            <div className="py-3" />
            <SimpleCard title="stepper form">
                <StepperForm />
            </SimpleCard>
        </div>
    )
}

export default AppForm

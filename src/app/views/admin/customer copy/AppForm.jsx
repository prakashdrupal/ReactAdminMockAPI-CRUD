import React from 'react'
import SimpleForm from './SimpleForm'
import { Breadcrumb, SimpleCard } from 'app/components'

const AppForm = () => {
    return (
        <div className="m-sm-30">
            <div className="mb-sm-30">
                <Breadcrumb
                    routeSegments={[
                        { name: 'Add new customer', path: '/customer' },
                        { name: 'Form' },
                    ]}
                />
            </div>
            <SimpleCard title="Add new customer">
                <SimpleForm />
            </SimpleCard>
        </div>
    )
}

export default AppForm

import React from 'react'
import SimpleForm from './SimpleForm'
import { Breadcrumb, SimpleCard } from 'app/components'

const AppForm = () => {
    return (
        <div className="m-sm-30">
            <div className="mb-sm-30">
                <Breadcrumb
                    routeSegments={[
                        { name: 'Add new category', path: '/category' },
                        { name: 'Form' },
                    ]}
                />
            </div>
            <SimpleCard title="Add new category">
                <SimpleForm />
            </SimpleCard>
        </div>
    )
}

export default AppForm

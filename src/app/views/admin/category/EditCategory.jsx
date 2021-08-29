import React from 'react'
import EditForm from './EditForm'
import { Breadcrumb, SimpleCard } from 'app/components'

const EditCategory = () => {
    return (
        <div className="m-sm-30">
            <div className="mb-sm-30">
                <Breadcrumb
                    routeSegments={[
                        { name: 'Edit category', path: '/category' },
                        { name: 'Form' },
                    ]}
                />
            </div>
            <SimpleCard title="Add new category">
                <EditForm />
            </SimpleCard>
        </div>
    )
}

export default EditCategory

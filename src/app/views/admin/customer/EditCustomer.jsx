import React from 'react'
import EditCustomerForm from './EditCustomerForm'
import { Breadcrumb, SimpleCard } from 'app/components'

const EditCustomer = () => {
    return (
        <div className="m-sm-30">
            <div className="mb-sm-30">
                <Breadcrumb
                    routeSegments={[
                        { name: 'Edit customer', path: '/admin/customer/customer-list' },
                        { name: 'Form' },
                    ]}
                />
            </div>
            <SimpleCard title="Edit customer">
                <EditCustomerForm />
            </SimpleCard>
        </div>
    )
}

export default EditCustomer

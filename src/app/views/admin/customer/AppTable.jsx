import React from 'react'
import PaginationTable from './PaginationTable'
import { Breadcrumb, SimpleCard } from 'app/components'

const AppTable = () => {
    return (
        <div className="m-sm-30">
            <div className="mb-sm-30">
                <Breadcrumb
                    routeSegments={[
                        { name: 'Customer List', path: '/admin/category/customer-list' },
                        { name: 'Table' },
                    ]}
                />
            </div>
            <div className="py-3" />
            <SimpleCard title="Customer List">
                <PaginationTable />
            </SimpleCard>
        </div>
    )
}

export default AppTable

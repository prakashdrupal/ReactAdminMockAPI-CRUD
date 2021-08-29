import React from 'react'
import PaginationTable from './PaginationTable'
import { Breadcrumb, SimpleCard } from 'app/components'

const AppTable = () => {
    return (
        <div className="m-sm-30">
            <div className="mb-sm-30">
                <Breadcrumb
                    routeSegments={[
                        { name: 'Categories List', path: '/admin/category/category-list' },
                        { name: 'Table' },
                    ]}
                />
            </div>
            <div className="py-3" />
            <SimpleCard title="Categories List">
                <PaginationTable />
            </SimpleCard>
        </div>
    )
}

export default AppTable

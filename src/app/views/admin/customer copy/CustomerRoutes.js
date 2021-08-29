import React from 'react'

const customerRoutes = [
    {
        path: '/admin/customer/add-category',
        component: React.lazy(() => import('./AppForm')),
    },
    {
        path: '/admin/customer/customer-list',
        component: React.lazy(() => import('./AppTable')),
    },
    {
        path: '/admin/customer/edit/:id',
        component: React.lazy(() => import('./EditCustomer')),
    }
]

export default customerRoutes

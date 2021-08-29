import React from 'react'

const customerRoutes = [
    {
        path: '/admin/customer/new-customer',
        component: React.lazy(() => import('./AppCustomer')),
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

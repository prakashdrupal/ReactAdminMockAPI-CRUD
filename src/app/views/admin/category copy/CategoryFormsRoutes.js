import React from 'react'

const categoryformsroutes = [
    {
        path: '/admin/category/add-category',
        component: React.lazy(() => import('./AppForm')),
    },
    {
        path: '/admin/category/category-list',
        component: React.lazy(() => import('./AppTable')),
    }
]

export default categoryformsroutes

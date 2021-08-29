import React from 'react'

const categoryformsroutes = [
    {
        path: '/admin/category/add-category',
        component: React.lazy(() => import('./AppForm')),
    },
    {
        path: '/admin/category/category-list',
        component: React.lazy(() => import('./AppTable')),
    },
    {
        path: '/admin/category/edit/:id',
        component: React.lazy(() => import('./EditCategory')),
    }
]

export default categoryformsroutes

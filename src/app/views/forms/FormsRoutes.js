import React from 'react'

const formsRoutes = [
    {
        path: '/forms/basic',
        component: React.lazy(() => import('./BasicForm')),
    },
    {
        path: '/forms/editor',
        component: React.lazy(() => import('./EditorForm')),
    },
    {
        path: '/forms/upload',
        component: React.lazy(() => import('./UploadForm')),
    },
    {
        path: '/forms/wizard',
        component: React.lazy(() => import('./WizardForm')),
    }
]

export default formsRoutes

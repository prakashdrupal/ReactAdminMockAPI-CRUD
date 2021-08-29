import { authRoles } from './auth/authRoles'

export const navigations = [
    {
        name: 'Dashboard',
        path: '/dashboard',
        icon: 'dashboard',
    },
    {
        label: 'Pages',
        type: 'label',
    },

    {
        name: 'Customers',
        icon: 'people',
        children: [
            {
                name: 'Customers',
                iconText: 'C',
                path: '/admin/customer/customer-list',
            },
            {
                name: 'New Customer',
                iconText: 'C',
                path: '/admin/customer/new-customer',
            }
        ],
    },
    {
        name: 'Categories',
        icon: 'control_point',
        children: [
            {
                name: 'Add Category',
                iconText: 'SI',
                path: '/admin/category/add-category',
            },
            {
                name: 'Categories List',
                iconText: 'SI',
                path: '/admin/category/category-list',
            },
        ],
    },

    {
        name: 'Sales',
        icon: 'control_point',
        children: [
            {
                name: 'Products & Services',
                iconText: 'PS',
                path: '/admin/customer/category-list',
            },
            {
                name: 'Estimates',
                iconText: 'E',
                path: '/admin/category/add-category',
            },
            {
                name: 'Invoices',
                iconText: 'I',
                path: '/admin/category/category-list',
            },
        ],
    },

    // {
    //     name: 'Session/Auth',
    //     icon: 'security',
    //     children: [
    //         {
    //             name: 'Sign in',
    //             iconText: 'SI',
    //             path: '/session/signin',
    //         },
    //         {
    //             name: 'Sign up',
    //             iconText: 'SU',
    //             path: '/session/signup',
    //         },
    //         {
    //             name: 'Forgot Password',
    //             iconText: 'FP',
    //             path: '/session/forgot-password',
    //         },
    //         {
    //             name: 'Error',
    //             iconText: '404',
    //             path: '/session/404',
    //         },
    //     ],
    // },
    
    // {
    //     label: 'Components',
    //     type: 'label',
    // },
    // {
    //     name: 'Components',
    //     icon: 'favorite',
    //     badge: { value: '30+', color: 'secondary' },
    //     children: [
    //         {
    //             name: 'Auto Complete',
    //             path: '/material/autocomplete',
    //             iconText: 'A',
    //         },
    //         {
    //             name: 'Buttons',
    //             path: '/material/buttons',
    //             iconText: 'B',
    //         },
    //         {
    //             name: 'Checkbox',
    //             path: '/material/checkbox',
    //             iconText: 'C',
    //         },
    //         {
    //             name: 'Form',
    //             path: '/material/form',
    //             iconText: 'F',
    //         },
    //         {
    //             name: 'Icons',
    //             path: '/material/icons',
    //             iconText: 'I',
    //         },
    //         {
    //             name: 'Progress',
    //             path: '/material/progress',
    //             iconText: 'P',
    //         },
    //         {
    //             name: 'Radio',
    //             path: '/material/radio',
    //             iconText: 'R',
    //         },
    //         {
    //             name: 'Switch',
    //             path: '/material/switch',
    //             iconText: 'S',
    //         },
    //         {
    //             name: 'Slider',
    //             path: '/material/slider',
    //             iconText: 'S',
    //         },
    //         {
    //             name: 'Table',
    //             path: '/material/table',
    //             iconText: 'T',
    //         },
    //     ],
    // },
]

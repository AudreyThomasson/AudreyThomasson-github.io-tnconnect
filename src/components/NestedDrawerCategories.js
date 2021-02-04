import React from 'react';


export const getCategories = () => [
    {
    key: 'children',
    label: "Children's Services",
    // separated: true,
    subMenus: [
        { key: 'childcare', label: 'Childcare' },
        { key: 'children', label: "Children's Services" },
        { key: 'teen', label: 'Teen Services' },
        { key: 'christmas', label: 'Christmas' },
        ],
    },

    { key: 'clothing', label: 'Clothing Assistance' },

    { 
    key: 'crisis',
    label: 'Crisis Services',
    subMenus: [
        { key: 'crisis', label: 'Crisis Info Resources' },
        { key: 'rehab', label: 'Rehab- Drug / Alcohol' },
        { key: 'counseling', label: 'Counseling' },
        { key: 'teen', label: 'Teen Services' },
        { key: 'mens', label: "Men's Resources" },
        { key: 'fire', label: 'Fire Stations' },
        { key: 'police',label: 'Police Stations' },
    ],
    },
];

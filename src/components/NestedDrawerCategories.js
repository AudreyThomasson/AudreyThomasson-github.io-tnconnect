// All the categories that will be added to the drawer

const getCategories = () => [
    {
    key: 'children',
    label: "Children's Services",
    subMenus: [
        { key: 'childcare', label: 'Childcare' },
        { key: 'children-sub', label: "Children's Services" },
        { key: 'teen', label: 'Teen Services' },
        { key: 'christmas', label: 'Christmas' },
        ],
    },

    { key: 'clothing', label: 'Clothing Assistance' },

    { 
    key: 'crisis',
    label: 'Crisis Services',
    subMenus: [
        { key: 'crisis-sub', label: 'Crisis Info Resources' },
        { key: 'rehab', label: 'Rehab- Drug / Alcohol' },
        { key: 'counseling', label: 'Counseling' },
        { key: 'teen', label: 'Teen Services' },
        { key: 'mens', label: "Men's Resources" },
        { key: 'fire', label: 'Fire Stations' },
        { key: 'police',label: 'Police Stations' },
    ],
    },

    { 
    key: 'disability',
    label: 'Disability Services',
    subMenus: [
        { key: 'disability-sub', label: 'Disability' },
        { key: 's-d-housing', label: 'Senior / Disabled Housing' },
        { key: 'mens', label: "Men's Resources" },
    ],
    },

    { 
    key: 'edu',
    label: 'Education',
    subMenus: [
        { key: 'esl', label: 'ESL Classes' },
        { key: 'ged', label: 'GED / Education' },
        { key: 'training', label: 'Job Training' },
        { key: 'library', label: 'Library Locations' },
    ],
    },

    { 
    key: 'emergency',
    label: 'Emergency Services',
    subMenus: [
        { key: 'fire', label: 'Fire Stations' },
        { key: 'police',label: 'Police Stations' },
    ],
    },

    { 
    key: 'employ',
    label: 'Employment Services',
    subMenus: [
        { key: 'esl', label: 'ESL Classes' },
        { key: 'ged', label: 'GED / Education' },
        { key: 'training', label: 'Job Training' },
        { key: 'library', label: 'Library Locations' },
        { key: 'phone', label: 'Phone'},
        { key: 'tax', label: 'Tax Prep'},
        { key: 'transport', label: 'Transportation',}
        ],
    },

    {
    key: 'family',
    label: "Family Services",
    subMenus: [
        { key: 'childcare', label: 'Childcare' },
        { key: 'children-sub', label: "Children's Services" },
        { key: 'counseling', label: 'Counseling'},
        { key: 'insurance', label: 'Health Insurance'},
        { key: 'teen', label: 'Teen Services' },
        { key: 'christmas', label: 'Christmas' },
        { key: 'pet', label: 'Pet Resources' },
        ],
    },

    { 
    key: 'fa',
    label: 'Financial Assistance',
    subMenus: [
        { key: 'housing', label: 'Housing' },
        { key: 'rent', label: 'Rent / Mortgage / Utility Help' },
        { key: 'tax', label: 'Tax Prep' },
        ],
    },

    { key: 'food', label: 'Food Assistance' },

    {
    key: 'health',
    label: "Health Services",
    subMenus: [
        { key: 'insurance', label: 'Health Insurance'},
        { key: 'medical', label: 'Medical / Dental' },
        { key: 'disability-sub', label: 'Disability' },
        { key: 'rehab', label: 'Rehab- Drug / Alcohol' },
        { key: 'crisis-sub', label: 'Crisis Info Resources' },
        { key: 'counseling', label: 'Counseling'},
        { key: 'teen', label: 'Teen Services' },
        { key: 'mens', label: "Men's Resources" },
        ],
    },

    { 
    key: 'housing-assist',
    label: 'Housing Assistance',
    subMenus: [
        { key: 'housing', label: 'Housing' },
        { key: 'rent', label: 'Rent / Mortgage / Utility Help' },
        { key: 's-d-housing', label: 'Senior / Disabled Housing' },
        { key: 'mens', label: "Men's Resources" },
        ],
    },

    { 
    key: 'immigration',
    label: 'Immigration Resources',
    subMenus: [
        { key: 'esl', label: 'ESL Classes' },
        { key: 'ged', label: 'GED / Education' },
        { key: 'img-ref', label: 'Immigration / Refugee' },
        { key: 'lawyer-i', label: 'Lawyer (immigration)' },
        { key: 'legal-assist', label: 'Legal Assistance' },
    ],
    },

    { 
    key: 'legal',
    label: 'Legal Services',
    subMenus: [
        { key: 'lawyer-d', label: 'Lawyer (divorce)' },
        { key: 'lawyer-i', label: 'Lawyer (immigration)' },
        { key: 'legal-assist', label: 'Legal Assistance' },
        { key: 'tax', label: 'Tax Prep' },
    ],
    },

    { key: 'library-main', label: 'Library Locations' },

    { key: 'mens-main', label: "Men's Resources" },

    { key: 'wifi-main', label: 'Public Wi-Fi Locations' },

    { key: 'transport-main', label: 'Transportation Services' },

    { 
    key: 'misc',
    label: 'Miscellaneous',
    subMenus: [
        { key: 'christmas', label: 'Christmas' },
        { key: 'pet', label: 'Pet Resources' },
        { key: 'phone', label: 'Phone'},
    ],
    },

];
export default getCategories;

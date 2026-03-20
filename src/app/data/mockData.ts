export interface Invoice {
  id: string;
  invoiceNumber: string;
  team: string;
  project: string;
  description: string;
  amount: number;
  date: string;
  status: 'paid' | 'pending' | 'overdue';
  vendor?: string;
}

export const mockInvoices: Invoice[] = [
  // Engineering Team
  {
    id: '1',
    invoiceNumber: 'INV-2026-001',
    team: 'Engineering',
    project: 'Mobile App',
    description: 'AWS Cloud Services',
    amount: 4500,
    date: '2026-03-15',
    status: 'paid',
    vendor: 'AWS'
  },
  {
    id: '2',
    invoiceNumber: 'INV-2026-002',
    team: 'Engineering',
    project: 'Mobile App',
    description: 'Third-party API licenses',
    amount: 1200,
    date: '2026-03-18',
    status: 'paid',
    vendor: 'Stripe'
  },
  {
    id: '3',
    invoiceNumber: 'INV-2026-003',
    team: 'Engineering',
    project: 'Web Platform',
    description: 'Server hosting',
    amount: 2800,
    date: '2026-03-10',
    status: 'paid',
    vendor: 'DigitalOcean'
  },
  {
    id: '4',
    invoiceNumber: 'INV-2026-004',
    team: 'Engineering',
    project: 'Web Platform',
    description: 'CDN services',
    amount: 890,
    date: '2026-03-12',
    status: 'paid',
    vendor: 'Cloudflare'
  },
  {
    id: '5',
    invoiceNumber: 'INV-2026-005',
    team: 'Engineering',
    project: 'API Gateway',
    description: 'Database services',
    amount: 3200,
    date: '2026-02-28',
    status: 'paid',
    vendor: 'MongoDB Atlas'
  },
  
  // Design Team
  {
    id: '6',
    invoiceNumber: 'INV-2026-006',
    team: 'Design',
    project: 'Brand Refresh',
    description: 'Adobe Creative Cloud',
    amount: 680,
    date: '2026-03-01',
    status: 'paid',
    vendor: 'Adobe'
  },
  {
    id: '7',
    invoiceNumber: 'INV-2026-007',
    team: 'Design',
    project: 'Brand Refresh',
    description: 'Stock photos',
    amount: 450,
    date: '2026-03-14',
    status: 'paid',
    vendor: 'Unsplash+'
  },
  {
    id: '8',
    invoiceNumber: 'INV-2026-008',
    team: 'Design',
    project: 'Marketing Campaign',
    description: 'Figma Professional',
    amount: 450,
    date: '2026-03-01',
    status: 'paid',
    vendor: 'Figma'
  },
  {
    id: '9',
    invoiceNumber: 'INV-2026-009',
    team: 'Design',
    project: 'Marketing Campaign',
    description: 'Video editing software',
    amount: 320,
    date: '2026-03-19',
    status: 'pending',
    vendor: 'Frame.io'
  },

  // Marketing Team
  {
    id: '10',
    invoiceNumber: 'INV-2026-010',
    team: 'Marketing',
    project: 'Q1 Campaign',
    description: 'Google Ads',
    amount: 8500,
    date: '2026-03-05',
    status: 'paid',
    vendor: 'Google'
  },
  {
    id: '11',
    invoiceNumber: 'INV-2026-011',
    team: 'Marketing',
    project: 'Q1 Campaign',
    description: 'Facebook Ads',
    amount: 6200,
    date: '2026-03-08',
    status: 'paid',
    vendor: 'Meta'
  },
  {
    id: '12',
    invoiceNumber: 'INV-2026-012',
    team: 'Marketing',
    project: 'Social Media',
    description: 'Hootsuite subscription',
    amount: 299,
    date: '2026-03-01',
    status: 'paid',
    vendor: 'Hootsuite'
  },
  {
    id: '13',
    invoiceNumber: 'INV-2026-013',
    team: 'Marketing',
    project: 'Social Media',
    description: 'Influencer partnership',
    amount: 2500,
    date: '2026-03-16',
    status: 'pending',
    vendor: 'Influencer Co'
  },
  {
    id: '14',
    invoiceNumber: 'INV-2026-014',
    team: 'Marketing',
    project: 'Content Creation',
    description: 'Copywriting services',
    amount: 1800,
    date: '2026-02-25',
    status: 'paid',
    vendor: 'Content Writers Inc'
  },

  // Sales Team
  {
    id: '15',
    invoiceNumber: 'INV-2026-015',
    team: 'Sales',
    project: 'CRM System',
    description: 'Salesforce licenses',
    amount: 4200,
    date: '2026-03-01',
    status: 'paid',
    vendor: 'Salesforce'
  },
  {
    id: '16',
    invoiceNumber: 'INV-2026-016',
    team: 'Sales',
    project: 'Lead Generation',
    description: 'LinkedIn Sales Navigator',
    amount: 1599,
    date: '2026-03-01',
    status: 'paid',
    vendor: 'LinkedIn'
  },
  {
    id: '17',
    invoiceNumber: 'INV-2026-017',
    team: 'Sales',
    project: 'Lead Generation',
    description: 'ZoomInfo subscription',
    amount: 2800,
    date: '2026-03-10',
    status: 'paid',
    vendor: 'ZoomInfo'
  },

  // Operations Team
  {
    id: '18',
    invoiceNumber: 'INV-2026-018',
    team: 'Operations',
    project: 'Office Management',
    description: 'Office supplies',
    amount: 560,
    date: '2026-03-12',
    status: 'paid',
    vendor: 'Staples'
  },
  {
    id: '19',
    invoiceNumber: 'INV-2026-019',
    team: 'Operations',
    project: 'Office Management',
    description: 'Cleaning services',
    amount: 800,
    date: '2026-03-01',
    status: 'paid',
    vendor: 'CleanCo'
  },
  {
    id: '20',
    invoiceNumber: 'INV-2026-020',
    team: 'Operations',
    project: 'IT Infrastructure',
    description: 'Laptop purchases',
    amount: 6500,
    date: '2026-02-20',
    status: 'paid',
    vendor: 'Apple'
  },
  {
    id: '21',
    invoiceNumber: 'INV-2026-021',
    team: 'Operations',
    project: 'IT Infrastructure',
    description: 'Software licenses',
    amount: 1200,
    date: '2026-03-01',
    status: 'paid',
    vendor: 'Microsoft'
  },

  // Additional entries for better date range testing
  {
    id: '22',
    invoiceNumber: 'INV-2026-022',
    team: 'Engineering',
    project: 'Mobile App',
    description: 'Testing tools',
    amount: 890,
    date: '2026-01-15',
    status: 'paid',
    vendor: 'BrowserStack'
  },
  {
    id: '23',
    invoiceNumber: 'INV-2026-023',
    team: 'Marketing',
    project: 'Q1 Campaign',
    description: 'Email marketing',
    amount: 1250,
    date: '2026-01-20',
    status: 'paid',
    vendor: 'Mailchimp'
  },
  {
    id: '24',
    invoiceNumber: 'INV-2026-024',
    team: 'Design',
    project: 'Brand Refresh',
    description: 'Font licenses',
    amount: 299,
    date: '2026-02-10',
    status: 'paid',
    vendor: 'Fontstand'
  },
];

export type TimePeriod = 'daily' | 'weekly' | 'monthly' | 'quarterly' | 'semi-annual' | 'annual';

import Layout2 from '@/layout/Layout2'

export default [{
  path: '/finance',
  component: Layout2,
  children: [{
    path: 'BankStatement',
    component: () => import('@/components/tables/finance/BankStatement')
  },
  {
    path: 'BankLoan',
    component: () => import('@/components/tables/finance/BankLoan')
  },
  {
    path: 'BankAccount',
    component: () => import('@/components/tables/finance/BankAccount')
  },
  {
    path: 'CompanyStock',
    component: () => import('@/components/tables/finance/CompanyStock')
  },
  {
    path: 'Draft',
    component: () => import('@/components/tables/finance/Draft')
  },
  {
    path: 'Guarantee',
    component: () => import('@/components/tables/finance/Guarantee')
  },
  {
    path: 'Warranty',
    component: () => import('@/components/tables/finance/Warranty')
  }]
}]

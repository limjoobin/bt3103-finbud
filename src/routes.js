import HomePage from './components/pages/HomePage/HomePage.vue'
import SignUpPage from './components/pages/HomePage/SignUpPage.vue'
import AfterLogin from './components/pages/AfterLogin.vue'

import BudgetCalculatorContent from './components/pages/BudgetCalculatorPage/BudgetCalculatorContent.vue'
import InvestmentGrowth from './components/pages/InvestmentGrowthPage/InvestmentGrowth.vue'
import SavingsWithdrawal from './components/pages/SavingsWithdrawalPage/SavingsWithdrawal.vue'
import FinancialPathway from './components/pages/FinancialPathwayPage/FinancialPathway.vue'

import Community from './components/pages/CommunityPage/Community.vue'
import CommunityPost from './components/pages/CommunityPage/CommunityPost'
import Dashboard from './components/pages/DashboardPage/Dashboard.vue'


export default[
    {
        path:'/', 
        name: 'homepage',
        component: HomePage
    },
    {
        path:'/home', 
        name:'after-login',
        component: AfterLogin, 
        meta: {requiresAuth: true}
    },
    {
        path:'/budget_planning', 
        name:'budget-planning',
        component: BudgetCalculatorContent
    },
    {
        path:'/investment_growth', 
        name:'investment-growth',
        component: InvestmentGrowth
    },
    {
        path:'/savings_withdrawal', 
        name:'savings-withdrawal',
        component: SavingsWithdrawal
    },
    {
        path:'/financial_pathway', 
        name: 'financial-pathway',
        component: FinancialPathway, meta: {requiresAuth: true}
    },
    {
        path:'/dashboard', 
        name:'dashboard',
        component: Dashboard, 
        meta: {requiresAuth: true}
    },
    {
        path:'/signup', 
        name:'signup',
        component:SignUpPage
    },
    {
        path:'/community', 
        name:'community',
        component:Community, 
        meta: {requiresAuth: true}
    },
    {
        path: '/communitypost',
        name: 'communitypost',
        component: CommunityPost,
        meta: {requiresAuth: true}
    },
]

import HomePage from './components/pages/HomePage/HomePage.vue'
import SignUpPage from './components/pages/HomePage/SignUpPage.vue'
import AfterLogin from './components/pages/AfterLogin/AfterLogin.vue'

import BudgetCalculatorContent from './components/pages/BudgetCalculatorPage/BudgetCalculatorContent.vue'
import InvestmentGrowth from './components/pages/InvestmentGrowthPage/InvestmentGrowth.vue'
import SavingsWithdrawal from './components/pages/SavingsWithdrawalPage/SavingsWithdrawal.vue'
import FinancialPathway from './components/pages/FinancialPathwayPage/FinancialPathway.vue'

import Community from './components/pages/CommunityPage/Community.vue'
import Dashboard from './components/pages/DashboardPage/Dashboard.vue'


export default[
    {path:'/', component: HomePage},
    {path:'/home', component: AfterLogin, meta: {requiresAuth: true}},
    {path:'/budget_planning', component: BudgetCalculatorContent},
    {path:'/investment_growth', component: InvestmentGrowth},
    {path:'/savings_withdrawal', component: SavingsWithdrawal},
    {path:'/financial_pathway', component: FinancialPathway, meta: {requiresAuth: true}},
    {path:'/dashboard', component: Dashboard, meta: {requiresAuth: true}},
    {path:'/signup', component:SignUpPage},
    {path:'/community', component:Community, meta: {requiresAuth: true}},
]

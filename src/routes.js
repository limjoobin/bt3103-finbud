import HomePage from './components/HomePage.vue'
import AfterLogin from './components/AfterLogin.vue'
import BudgetPlanning from './components/BudgetPlanning.vue'
import InvestmentGrowth from './components/InvestmentGrowth.vue'
import SavingsWithdrawal from './components/SavingsWithdrawal.vue'
import Community from './components/Community.vue'
import Dashboard from './components/Dashboard.vue'

export default[
    {path:'/', component: HomePage},
    {path:'/home', component: AfterLogin},
    {path:'/budget_planning', component: BudgetPlanning},
    {path:'/investment_growth', component: InvestmentGrowth},
    {path:'/savings_withdrawal', component: SavingsWithdrawal},
    {path:'/community', component: Community},
    {path:'/dashboard', component: Dashboard},
]
import HomePage from './components/HomePage.vue'
import AfterLogin from './components/AfterLogin.vue'
import BudgetPlanning from './components/BudgetPlanning.vue'
import InvestmentGrowth from './components/InvestmentGrowth.vue'
import SavingsWithdrawal from './components/SavingsWithdrawal.vue'
import Communityhp from './components/communityhp.vue'
import Dashboard from './components/Dashboard.vue'
import FinancialPathway from './components/FinancialPathway.vue'

export default[
    {path:'/', component: HomePage},
    {path:'/home', component: AfterLogin},
    {path:'/budget_planning', component: BudgetPlanning},
    {path:'/investment_growth', component: InvestmentGrowth},
    {path:'/savings_withdrawal', component: SavingsWithdrawal},
    {path:'/financial_pathway', component: FinancialPathway},
    {path:'/communityhp', component: Communityhp},
    {path:'/dashboard', component: Dashboard},
]
import HomePage from './components/pages/HomePage/HomePage.vue'
import SignUpPage from './components/pages/HomePage/SignUpPage.vue'
import AfterLogin from './components/pages/AfterLogin/AfterLogin.vue'
import ForgotPassword from "./components/pages/HomePage/ForgotPassword.vue";

import BudgetCalculatorContent from './components/pages/BudgetCalculatorPage/BudgetCalculatorContent.vue'
import InvestmentGrowth from './components/pages/InvestmentGrowthPage/InvestmentGrowth.vue'
import InvestmentGrowthLogin from './components/pages/InvestmentGrowthPage/InvestmentGrowthLogin.vue'
import SavingsWithdrawal from './components/pages/SavingsWithdrawalPage/SavingsWithdrawal.vue'
import FinancialPathway from './components/pages/FinancialPathwayPage/FinancialPathway.vue'
import Report from './components/pages/FinancialPathwayPage/Report.vue'

import Community from './components/pages/CommunityPage/Community.vue'
import CommunityPost from './components/pages/CommunityPage/CommunityPost'
import Posts from './components/pages/CommunityPage/Posts.vue'

import NotFound from './components/UI/NotFound'



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
        component: BudgetCalculatorContent,
        meta: {flag: true}
    },
    {
        path:'/investment_growth', 
        name:'investment-growth',
        component: InvestmentGrowth,
        meta: {flag: true}
    },
    {
        path:'/savings_withdrawal', 
        name:'savings-withdrawal',
        component: SavingsWithdrawal,
        meta: {flag: true}
    },
    {
        path:'/financial_pathway', 
        name: 'financial-pathway',
        component: FinancialPathway,
        meta: {requiresAuth: true},
    },
    {
        path:'/report', 
        name: 'report',
        component: Report, 
        meta: {requiresAuth: true}
    },
    {
        path:'/signup', 
        name:'signup',
        component:SignUpPage,
        props:true 
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
    {
        path: '/posts',
        name: 'Posts',
        component: Posts,
        meta: {requiresAuth: true},
        props: 'true'
    },

    //Duplicate?
    {
        path: '/investment_growth_login',
        name: 'InvestmentGrowthLogin',
        component: InvestmentGrowthLogin,
        meta: {requiresAuth: true}
    },
    {
        path: "/forgotpassword",
        name: "ForgotPassword",
        component: ForgotPassword,
    }
    //Page does not exist. 
    , {
        path:'/:catchAll(.*)',
        name: 'NotFound',
        component: NotFound
    },

]

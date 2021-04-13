<template>
    <div id='navigation'>
        <header>
            <h2>
                <router-link class='nav-header' to='/home'>FinBud</router-link>
            </h2>

            <ul class='navbar-links'>
                <li><router-link to='/home'>Home</router-link></li>
                <li><router-link to='/dashboard'>Dashboard</router-link></li>
                <li class="dropdown">
                    <router-link to='/financial_pathway'>Calculators</router-link>
                    <ul id="dropdown-content">
                        <li><router-link class='dropdown-link' style='text-decoration: none' to='/financial_pathway'>Financial Pathway Calculator</router-link></li>
                        <li><router-link class='dropdown-link' style='text-decoration: none' to='/investment_growth'>Investment Growth Calculator</router-link></li>
                        <li><router-link class='dropdown-link' style='text-decoration: none' to='/savings_withdrawal'>Savings Withdrawal Calculator</router-link></li>
                    </ul>
                </li>
                <li><router-link to='/community'>Community</router-link></li>
            </ul>
        </header>
    </div>
</template>

<script>

export default {
  data (){
    return{}
  }
}

</script>

<style>
#navigation{
    position: sticky;
    top: 0;
}

#navigation *{
    height:10%;
    background-color: #3B75AB;
    color: white;
    font-family: Lato;

}


ul{
    list-style-type: none;
}

.navbar-links{
    display: inline-flex;
    
}

.navbar-links>li{
    text-align: right;
    display: inline-block;
    padding: 5%;
}

h2{
    padding: 2% 0 2% 2%;
    width: 65%;
    display: inline-block;

}
.nav-header{
    text-decoration: none;

}

.dropdown {
    position: relative;
    display: inline-block;
    text-align: center;
}

.dropdown:hover #dropdown-content {
    display: block;
}

#dropdown-content {
    display: none;
    position: absolute;
    width: 250%;
    height: auto;
    box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
    z-index: 1;
    text-align: center;
    right: -75%;
}

#dropdown-content li{
    border: dashed;
}

.dropdown-link{
    text-decoration: none;
    display: block;
    padding: 5%;


}	

.dropdown-link:hover{
    background-color:  #356A9C  !important;
}

</style>
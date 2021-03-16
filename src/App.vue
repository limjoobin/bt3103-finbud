<template> 
  <div id = "app">
	<router-view></router-view>
	<footer>
		<p>©FinBud 2021 All rights reserved, Singapore</p>
		<div>
			<img>
			<p>
			All information, commentaries, recommendations, or statements of opinion you may find in this site represents the view of the author(s) at the date of publication, 
			and are solely for general informational and educational purposes only. It should not be used as a substitute for professional investment advice or basis for any financial decision. 
			Individual users have the responsibilities to exercise their own diligience to ensure that they make the optimal choice in their unique scenario.
			</p>
		</div>
	</footer>
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
    @font-face {
        font-family: Lustria;
        src: url('assets/Lustria-Regular.ttf');
    }
    @font-face {
        font-family: Lato;
        src: url('assets/Lato-Regular.ttf');
    }
    *{
        background-color: #a9d6ff;
        color:#0E4070;
        margin: 0px;
        padding: 0px;
    }
	footer *{
		background-color: #3B75AB;
		font-family: Lato;
		height: 10%;
	}
	footer p{
		padding: 10px;
		text-align:center;
	}
	footer img{
		content: url('./assets/footer-logo.png');
		padding: 2px;
		max-width: 100%;
        max-height: 100%;
		width: 5%;
		height: 50%;
		object-fit: fill;
		display: inline-block;
		vertical-align: top;	
	}
	footer div p{
		width: 90%;
		height: auto;
		display: inline-block;
		vertical-align: top;
	}

</style>
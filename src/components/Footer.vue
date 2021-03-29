<template>
    <footer>
        <p>{{text}}</p>
        <p>{{disclaimer1}}</p>
        <p>{{disclaimer2}}</p>
        <p>{{disclaimer3}}</p>
        <p>{{disclaimer4}}</p>
        <img class ="bcFooter" v-bind:src="imageURL">
    </footer>
</template>

<script>
export default {
    data(){
        return {
            text: '©FinBud 2021 All right reserved, Singapore',
            disclaimer1: 'All information, commentaries, recommendations, or statements of opinion you may find in this site represents the view of', 
            disclaimer2: 'the author(s) at the date of publication, and are solely for general informational and educational purposes only. It should',
            disclamer3: 'not be used as a substitute for professional investment advice or basis for any financial decision. Individual user',
            disclaimer4: 'have the responsibilities to exercise their own diligience to ensure that they make the optimal choice in their unique scenario.',
            imageURL: "https://drive.google.com/thumbnail?id=1o2xqgpQnavxYLkg-NzD2oeu7-ELyuta0"
        }
    }
}
</script>

<style scoped>

.footerDiv {
    background-color: #3B75AB;
    text-align: center;
}

footer{
    font-size: 12px;
    background-color: #3B75AB;
    text-align: center;
    padding-top: 10px;
    text-align:center;
    font-family: Avenir, Helvetica, Arial, sans-serif;
    vertical-align: middle;
}

.bcFooter{
    height: 55px;
    width: 55px;
    position: relative;
    right: 500px;
    bottom: 75px;
}

</style>
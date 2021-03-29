<template>
<div id="service">
    <h1 style="padding-top:10px">Our Services</h1>
    <div class="container">
        <div id="boxes">
            <span>Find out your ideal Budget</span>
        </div>

        <div id="boxes">
            <span>Calculate Your Investment Growth</span>
        </div>

        <div id="boxes">
            <span>Find out how long can your investment last you for</span>
        </div>

        <div id="boxes">
            <span>Map out your pathway to Financial Freedom</span>
        </div>
    </div>

</div>
    
</template>

<script>
export default {
    
}
</script>

<style scoped>
.container {
    padding-top: 20px;
    display: flex;
    justify-content: space-evenly;
}

#service {
    height:320px;
}
#boxes {
    background-color: #A9D6FF;
    border-radius: 25px;
    padding: 10px;
    width: 160px;
    height: 160px;
  line-height: 160px;
  text-align: center;
}

span {
  display: inline-block;
  vertical-align: middle;
  line-height: normal;
}

</style>
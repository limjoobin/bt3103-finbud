<template>
    <div>
        <retirement-chart :dataset="dataset"></retirement-chart>
    </div>    
</template>


<script>
import RetirementChart from './charts/RetirementCharts/RetirementChart.vue'

export default {
  components: { RetirementChart },
    name:"report",
    props:["dataset"],
    data:function(){
        return{

        }
    },created(){
        console.log(this.dataset)
    }, watch:{
        dataset: {
            handler: function (val, oldVal) {
                console.log('watch 1', 'newval: ', val, '   oldVal:', oldVal)
            },
            deep: true
        }
    }
}
</script>

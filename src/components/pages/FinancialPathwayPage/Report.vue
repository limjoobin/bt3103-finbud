<template>
    <div>
        <retirement-chart></retirement-chart>
    </div>    
</template>


<script>
import RetirementChart from '../../charts/RetirementChart.vue'
import firebase from '../../../../firebase'

export default {
  components: { RetirementChart },
    name:"Report",
    data:function(){
        return{
            database: firebase.firestore(),
            dataset:{}
        }
    },
    methods:{
      
    },    
    created(){
    }
}
</script>

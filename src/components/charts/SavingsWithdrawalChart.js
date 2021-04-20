import { Bar } from 'vue-chartjs'

//https://stackoverflow.com/questions/43728332/vue-chart-js-chart-is-not-updating-when-data-is-changing

export default{
    extends: Bar,
    props:["timestep","amount"],
    data(){
        return {
            label:[0]
        }
    },
    mounted(){
        this.renderBarChart();
    },
    computed:{
        chartData: function(){
            return this.amount;
        }
    },

    methods:{
        renderBarChart:function(){
            this.renderChart(
                {
                    labels: this.label,
                    datasets:[
                        {
                            label:'Savings Withdrawal',
                            backgroundColor: '#3366ff',
                            data: this.chartData
                        }
                    ]
                },
                {
                    legend: { display: false },
                    title: {
                        display: true,
                        text: 'Savings Withdrawal Chart',
                        fontSize: 28,
                      },
                    scales:{
                        yAxes: [{
                            ticks: {
                                min: 0
                            }
                            }]
                    },
                    responsive: true,
                    maintainAspectRatio: false,
                }
            )
        }
    },
    watch:{
        amount: function(){
            this.label = [];
            for(let i =0; i < this.timestep; i++){
                this.label.push(i+1);
            }
            console.log(this.label);

            this.renderBarChart();
        }
    },

}
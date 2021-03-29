import {Bar} from 'vue-chartjs'

export default{
    extends:Bar,
    props: ['data','options'],
    mounted() {
        //alert(this.data)
        this.renderBarChart();
    },
    computed: {
        chartData: function() {
            return this.data;
        }
    },
    methods: {
        renderBarChart: function() {
            this.renderChart( {
                labels: [0,1,2,3,4,5,6,7,8,9],
                datasets: [{
                    label: "Data 1",
                    backgroundColor: "#f87979",
                    data: this.chartData
                }]
            },
            { responsive: true, maintainAspectRatio: false}
        );
        }
    },
    watch: {
        data: function() {
            //alert(this.chartData)
            //this._chart.destroy();
            this.renderBarChart();
        }
    },
    /*
    data:()=>({
        chartdata: {
            labels: [1,2,3,4,5,6,7,8,9,10],
            datasets: [
              {
                label: 'Principal',
                data: this.growth,//[10000,15000,20000,25000,30000,35000,40000,45000,50000,55000],
                backgroundColor:'#AA6',
                borderWidth:1.0,
              }
              ,
              {
                  label: 'Profit',
                  data: this.growth,
                  backgroundColor:'#7C1'
                }
            ]
            
          },
    
        options: {
            title: {
                display: true,
                text: 'Investment Growth Chart',
                fontColor: 'Black',
                fontSize: 30,
            },
            legend: {
                position: 'top',
                
            },
            layout: {
                padding: {
                    left: 0,
                    right: 0,
                    top: 0,
                    bottom: 0
                }
            },
            scales: {
                yAxes: [{
                    ticks: {
                        min: 0,
                        max: 300000,
                    },
                    scaleLabel: {
                        display: true,
                        labelString: 'Investment Value'
                    }
                }],
                xAxes: [{
                    stacked: true,
                    scaleLabel: {
                        display: true,
                        labelString: 'Number of Years'
                    }
                }],
            },
            maintainAspectRatio: false,
            responsive: true

        }
    }),
    watch: {
        growth: function() {
            alert(this.growth);
            this.renderChart(this.chartdata,this.options);
        }

    },
    mounted(){
        this.renderChart(this.chartdata,this.options)
    },
    */
};
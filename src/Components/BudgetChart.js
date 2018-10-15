import React, {Component} from 'react';
import {Bar,Line,Pie} from 'react-chartjs-2';

class BudgetChart extends Component {

    constructor(props){
        super(props);

        this.state = {
            charData: {
                labels: ['january','february','march'],
                datasets: [
                    {
                        label: 'Increment',
                        data: [
                            20990,
                            65600,
                            78000
                        ],
                        backgroundColor: [
                            'rgba(105,9,123,0.6)',
                            'rgba(135,99,123,0.6)',
                            'rgba(25,79,123,0.6)'
                        ]
                    }
                ]
            }
        }
    }


    render() {
        return (
            <div>
                <Bar
                    data={this.state.charData}
                    options={{
                        maintainAspectratio: false
                    }}
                />
            </div>
        );
    }
}

export default BudgetChart;
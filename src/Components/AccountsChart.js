import React, {Component} from 'react';
import {Bar,Line,Pie} from 'react-chartjs-2';

class AccountsChart extends Component {

    constructor(props){
        super(props);

        this.state = {
            charData: {
                labels: ['january','feb','march'],
                datasets: [
                    {
                        label: 'Accounts',
                        data: [
                            12990,
                            65600,
                            78000
                        ],
                        backgroundColor: [
                            'rgba(255,99,123,0.6)',
                            'rgba(55,99,123,0.6)',
                            'rgba(255,79,123,0.6)'
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

export default AccountsChart;
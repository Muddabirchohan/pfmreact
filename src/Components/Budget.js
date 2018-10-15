import React, {Component} from 'react';
import Grid from "@material-ui/core/Grid/Grid";
import BudgetChart from "./BudgetChart";

class Budget extends Component {
    constructor(){
        super();

        this.state = {
            budgetData: [
                {
                    amount: 30000,
                    balance: 100000,
                    expenses: 30000,
                    savings: 3000+30000
                }
            ]
        }
    }

    render() {
        return (
            <div>
                {
                    this.state.budgetData.map(obj=>{
                        return(
                            <div>
                                <p> <b> Amount: </b> {obj.amount} </p>
                                <p> <b> Balance: </b> {obj.balance} </p>
                                <p> <b> Expenses: </b> {obj.expenses} </p>
                                <p> <b> SAVINGS: </b> {obj.savings} </p>
                                <BudgetChart/>
                                <br/><br/><br/>
                            </div>
                        )
                    })
                }
            </div>
        );
    }
}

export default Budget;
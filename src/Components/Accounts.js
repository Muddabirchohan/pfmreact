import React, {Component} from 'react';
import AccountsChart from "./AccountsChart";

class Accounts extends Component {

    constructor(){
        super();

        this.state ={
            User:
                [
                    {
                        name: 'rehan',
                        salaray: 200000,
                        age: 20,
                        AccountNo: 2097761,
                    },

            ]
        }
    }


    render() {
        return (
            <div className="accounts">

                {
                    this.state.User.map(obj=>{
                        return(
                            <div>
                                <p> <b> Name:      </b> {obj.name}        </p>
                                <p> <b> AccountNo: </b> {obj.AccountNo}   </p>
                                <p> <b> Salary:   </b> {obj.salaray}     </p>
                                <p> <b> Age:       </b> {obj.age}         </p>
                                <AccountsChart/>
                                <hr/>
                            </div>
                        )
                    })
                }
            </div>
        );
    }
}

export default Accounts;
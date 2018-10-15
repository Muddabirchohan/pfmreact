import React, {Component} from 'react';
import {Form,FormControl,FormGroup,ControlLabel,Col,Button} from 'react-bootstrap';
import Card from '@material-ui/core/Card';


class Login extends Component {
constructor(){
    super();

    this.state = {
        password: '',
        email: ''
    }
    this.getData = this.getData.bind(this);
    this.getEmail = this.getEmail.bind(this);
    this.getPassword = this.getPassword.bind(this);

}



    getData(e){
     e.preventDefault();
     console.log("email and pass", this.state.email,this.state.password)
        if(this.state.password == "12345"){
           this.props.history.push('/')
        }
        else {
            alert("password mismatched");
        }
    }


    getEmail(e){
        this.setState({ email: e.target.value})
    }

    getPassword(e){
    this.setState({ password: e.target.value})
    }
    render() {
        return (
            <div className="login-bg">
            <Card className="login">
            <div >
                <h1> Login Form </h1> <hr/>
                <Form horizontal onSubmit={this.getData}>
                    <FormGroup controlId="formHorizontalEmail">
                        <Col componentClass={ControlLabel} sm={2}>
                            Email
                        </Col> <br/><br/>
                        <Col sm={10}>
                            <FormControl type="email" placeholder="Email" onChange={this.getEmail}/>
                        </Col>
                    </FormGroup>

                    <FormGroup controlId="formHorizontalPassword">
                        <Col componentClass={ControlLabel} sm={2}>
                            Password
                        </Col> <br/><br/>
                        <Col sm={10}>
                            <FormControl type="password" placeholder="Password" onChange={this.getPassword} />
                        </Col>
                    </FormGroup>



                    <FormGroup>
                        <Col smOffset={2} sm={10}>
                            <Button  bsStyle="primary" type="submit">Sign in</Button>
                        </Col>
                    </FormGroup>
                </Form>
            </div>
            </Card>
            </div>
        );
    }
}

export default Login;
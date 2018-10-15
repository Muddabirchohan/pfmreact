import React from 'react';
import ReactDOM from 'react-dom';
import ReactDrawer from 'react-drawer';
import {Glyphicon} from 'react-bootstrap';

/* if you using webpack, should not apply identity to this css */
import 'react-drawer/lib/react-drawer.css';

export default class Main extends React.Component {
    constructor() {
        super();
        this.state = {
            open: false,
            position: 'left',
            noOverlay: false
        };
        this.toggleDrawer = this.toggleDrawer.bind(this);
        this.closeDrawer = this.closeDrawer.bind(this);
        this.onDrawerClose = this.onDrawerClose.bind(this);
        this.setPosition = this.setPosition.bind(this);
        this.setNoOverlay = this.setNoOverlay.bind(this);
    }
    setPosition(e) {
        this.setState({position: e.target.value});
    }
    setNoOverlay(e) {
        this.setState({noOverlay: e.target.checked});
    }
    toggleDrawer() {
        this.setState({open: !this.state.open});
    }
    closeDrawer() {
        this.setState({open: false});
    }
    onDrawerClose() {
        this.setState({open: false});
    }
    render() {
        return (
            <div>
                <div>
                    <button
                        style={{margin: 20}}
                        onClick={this.toggleDrawer}
                        disabled={this.state.open && !this.state.noOverlay}
                    >
                        {!this.state.open ? <span>show drawer</span>: <span>close drawer</span>}
                    </button>
                </div>
                <ReactDrawer
                    className="drawer"
                    open={this.state.open}
                    position={this.state.position}
                    onClose={this.onDrawerClose}
                    noOverlay={this.state.noOverlay}>
                    <i onClick={this.closeDrawer} className="icono-cross"></i>
                    <div>

                        <div className='round-image'>
                            <p>
                            <Glyphicon glyph="user" />
                                <b> Muddabir </b>
                            </p>
                            <p>   <i> Logout </i></p>
                        </div>

                        <div className="lists">
                            <li>  <Glyphicon glyph="user" /> User </li>
                            <li>  <Glyphicon glyph="earphone" /> Contact </li>
                            <li>  <Glyphicon glyph="briefcase" /> Work </li>
                        </div>

                    </div>
                </ReactDrawer>
            </div>
        );
    }
}
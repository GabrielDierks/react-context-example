import React, {Component} from 'react';
import Button from './Button';
import '../App.css';
import {ThemeContext} from '../theme-context';

class Container extends Component {


    render() {

        const { toggleTheme } = this.props;

        return (
            <ThemeContext.Consumer>

            {theme => (
            <div className="Container" style={{backgroundColor: theme.foreground}}>
                <h2 style={{color: theme.background}}>
                    Container
                </h2>
                <Button changeTheme={toggleTheme}/>
            </div>
        )}
            </ThemeContext.Consumer>

        );
    }
}

export default Container;

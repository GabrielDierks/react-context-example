import React, {Component} from 'react';
import '../App.css';
import {ThemeContext} from '../theme-context';


class Button extends Component {
    render() {
        const { changeTheme } = this.props;

        return (
            <ThemeContext.Consumer>
                { theme => (
                    <button
                        style={{color: theme.text, backgroundColor: theme.background}}
                        type="button"
                        onClick={changeTheme}
                    >
                        Change theme
                    </button>)}
            </ThemeContext.Consumer>
        );
    }


}

export default Button;

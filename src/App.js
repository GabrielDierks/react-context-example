import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Container from './components/Container';
import {ThemeContext, themes} from './theme-context';



class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            theme: themes.dark,
        };
        this.toggleTheme = () => {
            this.setState(state => ({
                theme:
                    state.theme === themes.dark
                        ? themes.light
                        : themes.dark,
            }));
        };

    }


    render() {
        return (
            <ThemeContext.Provider value={this.state.theme}>
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <h1 className="App-title">React Context-Api-Example</h1>
                </header>

                <Container toggleTheme={this.toggleTheme}/>

            </div>
            </ThemeContext.Provider>
        );
    }
}

export default App;

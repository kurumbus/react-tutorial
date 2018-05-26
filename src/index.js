import React from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/SearchBar';
import GifList from './components/GifList';


class App extends React.Component {
    constructor() {
        super();
        this.state = {
            gifs: [
                {
                    id: 1,
                    url: 'http://fakeimg.pl/300/'
                },
                {
                    id: 2,
                    url: 'http://fakeimg.pl/300/'
                },
                {
                    id: 3,
                    url: 'http://fakeimg.pl/300/'
                }
            ]
        }
    }

    handleTermChange(term) {
        console.log(term);
    }

    render() {
        return (
            <div>
                <SearchBar onTermChange={this.handleTermChange} />
                <GifList gifs={this.state.gifs} />
            </div>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('app'));
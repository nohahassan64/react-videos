import React, { Component } from 'react'

export default class SearchBar extends Component {
    state = { term : '' };
    onFormSubmit = (event) => {
        event.preventDefault();
        this.props.onTermSubmit(this.state.term);
    }
    
    render() {
        return (
            <div className="ui segment">
                <form className="ui form" onSubmit={this.onFormSubmit}>
                    <div className="field">
                        <label>Video Search</label>
                        <input 
                            type="text"
                            value={this.state.term}
                            onChange={ (e) => this.setState({ term : e.target.value})}
                        />
                        <button 
                            onClick={this.onFormSubmit}
                            className="ui red button"
                            style={{ marginTop: '20px'}} 
                            >
                                Submit
                        </button>
                    </div>
                </form>    
            </div>
        )
    }
}

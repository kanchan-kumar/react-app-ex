import React, {useState} from 'react';

const SearchBar = ({onSubmitSearch, label}) => {
  const [term, setTerm]=useState('');

    const onFormSubmit = (event) => {
        event.preventDefault();
        onSubmitSearch(term);
    }

    return (
        <div className="ui segment">
            <form className="ui form" onSubmit={onFormSubmit}>
                <div className="field">
                    <label>{label}</label>
                    <input type="text" value={term}
                           onChange={(e)=> {
                               setTerm(e.target.value)}}/>
                </div>
            </form>
        </div>
    );
};

export default SearchBar;

/*
export class SearchBar extends React.Component {

    state = {term: ''};

    onInputChange = (event) => {
        console.log(event.target.value);
        this.setState({term: event.target.value});
    }

    onFormSubmit = (event) => {
        event.preventDefault();
        //console.log(this.state);
        this.props.onSubmitSearch(this.state.term);
    }

    render() {
        return (
          <div className="ui segment">
              <form className="ui form" onSubmit={this.onFormSubmit}>
                  <div className="field">
                      <label>{this.props.label}</label>
                      <input type="text" value={this.state.term}
                             onChange={(e) => this.setState({term: e.target.value})}/>
                  </div>
              </form>
          </div>
        );
    }
};
*/

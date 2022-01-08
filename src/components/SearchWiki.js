import React, {useState, useEffect} from 'react';
import axios from "axios";

const SearchWiki = () => {

    const [term, setTerm] = useState('Developer');
    const [results, setResults] = useState([]);
    const [debounceTerm, setDebounceTerm] = useState('Developer');

    //console.log(results);

    /*This effect is for removing initial request delay.*/
    useEffect(() => {
       const timerId = setTimeout(() => {
           setDebounceTerm(term);
       }, 1000);

       return () => {
         clearTimeout(timerId);
       };
    }, [term]);


    useEffect(() => {
        const search = async () => {
            const {data} = await axios.get('https://en.wikipedia.org/w/api.php', {
                params: {
                    action: 'query',
                    list: 'search',
                    origin: '*',
                    format: 'json',
                    srsearch: debounceTerm
                }
            });
            setResults(data.query.search);
        }

        search();
    }, [debounceTerm]);

    const renderedResults = results.map((result) => {
        return (
            <div key={result.pageid} className="item">
                <div className="right floated content">
                    <a className="ui button"
                       href={`https://en.wikipedia.org?curid=${result.pageid}`}>
                        Go
                    </a>
                </div>
                <div className="content">
                    <div className="header">
                        {result.title}
                    </div>
                    <span dangerouslySetInnerHTML={{__html: result.snippet}}></span>
                </div>
            </div>
        );
    });

    return (
        <div className="ui form">
            <div className="field">
                <label>Enter Search Term</label>
                <input value={term}
                       onChange={(e) => setTerm(e.target.value)} className="input"/>
            </div>
            <div className="ui celled list">
                {renderedResults}
            </div>
        </div>
    );
}

export default SearchWiki;

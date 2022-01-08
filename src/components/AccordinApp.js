import React, {useState} from 'react';
import Accordion from "./Accordion";
import SearchWiki from "./SearchWiki";
import Dropdown from "./Dropdown";
import Translate from "./Translate";
import Route from "./Route";
import Header from "./Header";

const items = [
    {
        title: 'What is React?',
        content: 'React is a front end javascript framework'
    },
    {
        title: 'Why use React?',
        content: 'React is favorites javascript library'
    },
    {
        title: 'How do you use React?',
        content: 'By simply adding react.js'
    }
];

const options = [
    {
        label: 'The Color RED',
        value: 'red'
    },
    {
        label: 'The Color GREEN',
        value: 'green'
    },
    {
        label: 'A Shade of BLUE',
        value: 'blue'
    }
];

/*const showAccordion = () => {
    if (window.location.pathname === '/') {
        return <Accordion items={items}/>
    }
};

const showList = () => {
    if (window.location.pathname === '/list') {
        return <SearchWiki/>
    }
}

const showDropdownL = () => {
    if (window.location.pathname === '/dropdown') {
        return (
            <div>
                <br/>
                <Dropdown/>
            </div>
        )
    }
}

const showTranslate = () => {
    if (window.location.pathname === '/translate') {
        return <Translate/>

    }
}*/


export default () => {

    const [selected, setSelected] = useState(options[0]);
    const [showDropdown, setShowDropdown] = useState(true);

    return (
        <div>
            <Header/>
            <Route path="/">
                <Accordion items={items} />
            </Route>
            <Route path="/list">
                <SearchWiki/>
            </Route>
            <Route path="/dropdown">
                <Dropdown options={options}
                          selected={selected}
                          onSelectedChange={setSelected}
                />
            </Route>
            <Route path="/translate">
                <Translate/>
            </Route>
        </div>
    );
};

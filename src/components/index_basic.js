// Import the React and ReactDOM libraries
import React from "react";
import ReactDOM from "react-dom";
import faker from 'faker';
import {CommentDetail} from "./CommentDetail";
import {ApprovalCard} from "./ApprovalCard";
import {SeasonDisplay} from "./SeasonDisplay";
import {Spinner} from "./Spinner";


if (module.hot) {
    module.hot.accept();
}

// Create a react component
const SampleApp = () => {
    const buttonText = {text: "Click me"};
    const labelText = "Enter name:";

    return (
        <div>
            <label className="label" htmlFor="name">
                {labelText}
            </label>
            <input id="name" type="text"/>
            <button style={{backgroundColor: "blue", color: "white"}}>
                {buttonText.text}
            </button>
        </div>
    );
};

const App = () => {
    return (
        <div className="ui container comments">
            <ApprovalCard>
                <CommentDetail author="SAM" avatar={faker.image.image()}></CommentDetail>
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail author="DEAN" avatar={faker.image.image()}></CommentDetail>
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail author="LUCIFER" avatar={faker.image.image()}/>
            </ApprovalCard>
        </div>
    );
};

/*const SeasonApp = () => {
    window.navigator.geolocation.getCurrentPosition(
        (position) => {
            console.log(position);
        },(error) => {
            console.error(error);
        }
    );
    return (
        <h1>Latitude: </h1>
    )
};*/

class SeasonApp extends React.Component {

    state = {lat: null, err: ''};

    constructor(props) {
        super(props);
        //this.state = {lat: null, err: ''};

    }


    componentDidMount() {
        console.log("Component Mount !!!");
        window.navigator.geolocation.getCurrentPosition(
            (position) => {
                this.setState({lat: position.coords.latitude});
            }, (error) => {
                this.setState({err: error.message});
            }
        );
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log("Component State Changed !!!");
    }

    componentWillUnmount() {
        console.log("Component Unmount !!!");
    }

    renderContent() {
        if (this.state.err && !this.state.lat) {
            return <div>Error: {this.state.err} </div>
        }

        if (!this.state.err && this.state.lat) {
            //return <div>Latitude: {this.state.lat} </div>
            return <SeasonDisplay lat={this.state.lat}></SeasonDisplay>
        }

        return <Spinner message="PLease accept location request ..."/>
        //return <div>Loading ...</div>
    }


    render() {
        return (
          <div className="border red">
              {this.renderContent()}
          </div>
        );
    }

}


// Take the react component and show it on the screen
ReactDOM.render(<SeasonApp/>, document.querySelector("#root"));

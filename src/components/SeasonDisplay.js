import './SeasonDisplay.css';
import React from "react";

const seasonConfig = {
  summer: {
      text: 'Lets hit the beach!',
      iconName: 'sun'
  },
  winter: {
      text: 'Burr it is cold!',
      iconName: 'snowflake'
  }
};

const getSession = (lat, month) => {
    if (month > 2 && month < 9) {
        return lat > 0 ? 'summer' : 'winter';
    } else {
        return lat > 0 ? 'winter' : 'summer';
    }
}

export const SeasonDisplay = (props) => {
    const season = getSession(props.lat, new Date().getMonth());
    const {text, iconName} = seasonConfig[season];

    return (
        <div className={`season-display ${season}`} >
            <i className={`icon-left massive ${iconName} icon`} />
           <h1>{text}</h1>
            <i className={`icon-right massive ${iconName} icon`} />
        </div>
    );
}

/*export const SeasonDisplay = (props) => {
    const season = getSession(props.lat, new Date().getMonth());
    return (
        <div className="ui cards">
            <div className="card">
                <div className="content">
                    {props.children}
                </div>
                <div className="extra content">
                    <div className="ui two buttons">
                        <div className="ui basic green button">Approve</div>
                        <div className="ui basic red button">Decline</div>
                    </div>
                </div>
            </div>
        </div>
    );
}*/

import React from 'react';

import '../styles/BadgesList.css';
//import Loader from '../components/Loader'

class BadgesListItem extends React.Component {



    render() {
        console.log("-------------------------");
        console.log(this.props.badge.results);
        return (
            <div className="BadgesListItem">
                <img
                    className="BadgesListItem__avatar"
                    src={this.props.badge.results[3].image}
                    alt={`${this.props.badge.name} ${this.props.badge.name}`}
                />

                <div>
                    <strong>
                        {this.props.badge.name} {this.props.badge.name}
                    </strong>
                    <br />@{this.props.badge.status}
                    <br />
                    {this.props.badge.species}
                </div>
            </div>
        );
    }
}

class BadgesList extends React.Component {
    render() {
        // if (this.state.error) {
        //     return `Error: ${this.state.error.message}`
        // }

        return (
            <div className="BadgesList">
                <ul className="list-unstyled">
                    {this.props.badges.map(badge => {
                        console.log(badge)

                        return (

                            <li key={badge.id} >
                                <BadgesListItem badge={badge} />
                            </li>
                        );
                    })}
                </ul>

                {/* {this.state.loading && (
                    <div className="loader">
                        <Loader />
                    </div>
                )} */}

                {/* {!this.state.loading && (
    <button onClick={this.fet}></button>
)} */}
            </div >
        );
    }
}

export default BadgesList;
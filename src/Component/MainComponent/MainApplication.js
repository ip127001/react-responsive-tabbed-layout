import React, { Component } from 'react';
import './MainApplication.css';

import axios from 'axios';

import { Route, Switch, withRouter, NavLink } from 'react-router-dom';

import List from './LayoutComponent/List'
import Favourite from './LayoutComponent/Favourite';


class MainApplication extends Component {

    state = {
        lists: [],
        favourite: []
    }

    componentWillMount() {
        axios.get('http://18.139.137.183:8080/favourite.json')
            .then(resp => {
                this.setState({lists: resp.data.map(el => {
                    let obj = {...el};
                    obj.selected = false;
                    return obj;
                })});
                console.log(this.state.lists[0])
            })
            .catch(err => {
                console.log(err)
            })
    }

    favouriteSelectedHandler = (event, title) => {
        event.preventDefault();

        let favArray = this.state.favourite;
        let selectedElement = this.state.lists.filter(element => element.title === title)[0];
        selectedElement.selected = true;
        if(favArray.findIndex(el => el.title === title) === -1) {
            favArray.push(selectedElement);
            this.setState({favourite: favArray});
        }

        let updatedList = [...this.state.lists];
        let index = this.state.lists.findIndex(el => el.title === title);
        updatedList[index] = selectedElement;
        this.setState({lists: updatedList})
    }



    render() {
        let forcast_data = null;
        forcast_data = (
            <div>
                <h4 style={{textAlign:"center"}}>Job Opportunities</h4>
                <div>
                    <ul className="NavigationItems">
                        <li className="NavigationItem" onClick={this.listSelectedHandler}>
                            <NavLink to="/lists">
                                Lists
                            </NavLink>
                        </li>
                        <li className="NavigationItem" onClick={this.favSelectHandler}>
                            <NavLink to="/favourites">
                                Favourites
                            </NavLink>
                        </li>
                    </ul>
                </div>
                <Switch>
                    <Route 
                        path={this.props.match.path + "lists"} 
                        exact
                        render={props => (
                            <List {...props} data={this.state.lists} favHandler={this.favouriteSelectedHandler.bind(this)} />
                    )} />
                    <Route 
                        path={this.props.match.path + "favourites"} 
                        exact
                        render={props => (
                            <Favourite {...props} data={this.state.favourite} />
                    )} />
                </Switch>
            </div>
        );
        return (
            <div className="MainLayout">
                {forcast_data}
            </div>
        );
    }
}

export default withRouter(MainApplication);
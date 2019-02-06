import React, { Component, Fragment} from 'react';
import {Header, Footer} from './Layouts';
import MainLogic from './MainLogic';
import {users} from '../store.js'


// Main Page involving Top bar, bottom bar, and main grid components 
export default class extends Component{ 

    //Takes users objects {name:, id:} and creates individual arrays that are identified by the users name in array[0]
    //and contain all other object properties in array[1]
    getUsersByName(){
        var names = users.map((user) => 
                    user.name)
        return names;            
    }

    //Grabs the code parameter after user login 
    componentDidMount(){
        var urlParams = new URLSearchParams(window.location.search);
        var code = urlParams.get('code');
        console.log(code);
    }

    render() {
        const users = this.getUsersByName();

        return <Fragment>
            <Header/>

            <MainLogic
            users= {users}
            />

            <Footer          
            />
        </Fragment>
    }
}
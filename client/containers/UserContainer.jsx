import React, { Component } from 'react';
const URL = 'http://localhost:3000/data'






class UserContainer extends Component {
    constructor(props) {
        super(props)

        this.state = {
            userData: [],

        }
    }



 //fetches user data from database. 
  componentDidMount() {
    fetch(URL)
      .then(response => response.json())
      .then(data => {
        console.log(data)   
      })
      .catch(error => console.log(error)) 
  }
}
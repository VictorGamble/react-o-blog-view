import React, { Component } from 'react';


class EntriesList extends Component{
    state = {
        data: [],
        isLoaded: false
    }
    
    LoadData = async (url) => {
        try {
            const response = await fetch(url);
            const data = await response.json()
            return data;
        } catch (error) {
            console.error("error", error);
            return error;
        }
    }
    
    async componentDidMount() {
        let url = `http://localhost:3000/all`
        const data = await this.LoadData(url);
        console.log("data is =>", data);
        this.setState({
            data,
            isLoad: true
        })
    }

    render() {
        const { data, isLoaded } = this.state;
        console.log(data);
        return (
        
            (!isLoaded) ? <div>Loading Data....</div> : <div>hello World</div>
           
        )
    }
}

export default EntriesList;
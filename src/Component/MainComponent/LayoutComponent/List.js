import React, { Component } from 'react'

import '../MainApplication.css';

class List extends Component {
    state = {
        titleName: ''
    }

    checkedHandler = (event, title) => {
        this.setState({
            titleName: event.target.value
        });
    }
    
    handleSubmit =(event, title) => {
        event.preventDefault();
        this.props.favHandler(event, title);
    }
    
    render() {
        let data = this.props.data.map((dt,i) => {
            let views;
            if(dt['view-count'].toString().length === 5) {
                views = (dt['view-count']/1000).toPrecision(3);
            } else {
                views = (dt['view-count']/1000).toPrecision(2);
            }
            if(dt.type === 'internship') {
                return (
                    <div key={i} className="Internship">
                        <img src={dt.imageUrl} alt="twitterImage" /><br></br>
                        <p><b>Title</b>:        {dt.title}</p>
                        <p><b>Description</b>:  {dt.desc}</p>
                        <p><b>Type</b>:         {dt.type}</p>
                        <p><b>No of Views</b>:  {views}k</p>
                    
                        <form onSubmit={event => this.handleSubmit(event, dt.title)}>
                            <label>
                                <input 
                                    type="radio" 
                                    value={dt.title} 
                                    checked={dt.selected || this.state.titleName === dt.title} 
                                    onChange={event => this.checkedHandler(event, dt.title)} /> Favourite
                            </label>
                            <button className="btn" type="submit">Submit</button>
                        </form>
                    </div>
                )
            } else {
                return (
                    <div key={i} className="Offer">
                        <img src={dt.imageUrl} alt="twitterImage" /><br></br>
                        <p><b>Title</b>:       {dt.title}</p>
                        <p><b>Description</b>: {dt.desc}</p>
                        <p><b>Type</b>:        {dt.type}</p>
                        <p><b>No of Views</b>: {views}k</p>
                        
                        <form onSubmit={event => this.handleSubmit(event, dt.title)}>
                            <label>
                                <input 
                                    type="radio" 
                                    value={dt.title} 
                                    checked={dt.selected || this.state.titleName === dt.title} 
                                    onChange={event => this.checkedHandler(event, dt.title)} /> Favourite
                            </label>
                            <button className="btn" type="submit">Submit</button>
                        </form>
                    </div>
                )
            }
        })
        return (
            <div>
                {data}
            </div>
        );
    }
}

export default List;
import React, { Component } from 'react'

import '../MainApplication.css';

class Favourite extends Component {
    render() {
        let data;
        if(this.props.data[0]) {
            data = this.props.data.map((dt,i) => {
                
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
                        </div>
                    )
                }
            })
        } else {
            data = null;
        }
        return (
            <div>
                {data}
            </div>
        );
    }
}

export default Favourite;
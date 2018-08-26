import React, { Component } from 'react';
import data from '../data.json'

import { Link } from 'react-router-dom'

class FeaturedItems extends Component {
    render() {
        return (
            <section className="featured-items">
                {
                    Object.keys(data).map((objKey, i) => {
                        let new_id = Math.floor(Math.random() * 4)
                        return (
                            <section className="featured-item" key={i}>
                                <Link to={`/${objKey}/${new_id}`}><img src={data[objKey].collection[new_id].imageURL} alt={data[objKey].collection[new_id].name} /></Link>
                                <div>{data[objKey].collection[new_id].name}</div>
                                <div className="italic">{data[objKey].collection[new_id].price}</div>
                            </section>
                        )
                    })
                }
                {
                    Object.keys(data).reverse().map((objKey, i) => {
                        let new_id = Math.floor(Math.random() * 4)
                        console.log(new_id)
                        return (
                            <section className="featured-item" key={i}>
                                <Link to={`/${objKey}/${new_id}`}><img src={data[objKey].collection[new_id].imageURL} alt={data[objKey].collection[new_id].name} /></Link>
                                <div>{data[objKey].collection[new_id].name}</div>
                                <div className="italic">{data[objKey].collection[new_id].price}</div>
                            </section>
                        )
                    })   
                }
            </section>
        );
    }
}

export default FeaturedItems;

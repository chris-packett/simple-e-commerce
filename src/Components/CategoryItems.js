import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import data from '../data.json'

class CategoryItems extends Component {
    render() {
        return (
            <section className="featured-items-header-and-content">
                <section className="featured-items-header">
                    {data[this.props.match.params.category].title}
                </section>
                <section className="featured-items">
                    {data[this.props.match.params.category].collection.map((item, i) => {
                        return (
                        <section className="featured-item" key={i}>
                            <Link to={`${this.props.match.params.category}/${i}`}><img src={item.imageURL} alt={item.name} /></Link>
                            <div>{item.name}</div>
                            <div className="italic">{item.price}</div>
                        </section>
                        )   
                    })}
                </section>
            </section>
        );
    }
}

export default CategoryItems;

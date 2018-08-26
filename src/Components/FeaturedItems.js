import React, { Component } from 'react';
import data from '../data.json'

class FeaturedItems extends Component {
    render() {
        return (
            <section className="featured-items">
                <section className="featured-item">
                    <img src={data['watches'].collection[0].imageURL} alt={data['watches'].collection[0].name} />
                    <div>{data['watches'].collection[0].name}</div>
                    <div className="italic">{data['watches'].collection[0].price}</div>
                </section>                
                <section className="featured-item">
                    <img src={data['glasses'].collection[0].imageURL} alt={data['glasses'].collection[0].name} />
                    <div>{data['glasses'].collection[0].name}</div>
                    <div className="italic">{data['glasses'].collection[0].price}</div>
                </section>
                <section className="featured-item">
                    <img src={data['glasses'].collection[3].imageURL} alt={data['glasses'].collection[3].name} />
                    <section className="featured-item-info">
                        <div>{data['glasses'].collection[3].name}</div>
                        <div className="italic">{data['glasses'].collection[3].price}</div>
                    </section>
                </section>
                <section className="featured-item">
                    <img src={data['watches'].collection[1].imageURL} alt={data['watches'].collection[1].name} />
                    <div>{data['watches'].collection[1].name}</div>
                    <div className="italic">{data['watches'].collection[1].price}</div>
                </section>
            </section>
        );
    }
}

export default FeaturedItems;

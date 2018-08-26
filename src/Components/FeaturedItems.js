import React, { Component } from 'react';
import data from '../data.json'

class FeaturedItems extends Component {
    render() {
        return (
            <section className="featured-items">
                {/* {
                    Object.keys(data).map((objKey, i) => {
                        for (let j = 0; j < 2; j++) {
                            return (
                                <section className="featured-item" key={i+j}>
                                    <img src={data[objKey].collection[i].imageURL} alt={data[objKey].collection[i].name} />
                                    <div>{data[objKey].collection[i].name}</div>
                                    <div className="italic">{data[objKey].collection[i].price}</div>
                                </section>
                            )
                        }
                    })
                } */}
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

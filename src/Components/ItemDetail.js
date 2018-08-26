import React, { Component } from 'react';
import data from '../data.json'

class ItemDetail extends Component {
    render() {
        let items = data[this.props.match.params.category].collection
        let item = this.props.match.params.id
        return (
            <section className="item-details">
                <img src={items[item].imageURL} alt={items[item].name} />
                <section className="item-details-info">
                    <div>{items[item].name}</div>
                    <div className="italic">{items[item].price}</div>
                    <button>ADD TO CART</button>
                </section>
            </section>
        );
    }
}

export default ItemDetail;

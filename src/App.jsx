import React, { Component } from 'react';
import Navbar from './components/navbar';
import Product from './components/product';
import ShoppingCart from './components/shopping-cart';

class App extends Component {
    state = { 
        items:[]
     } 

     addItem = (amount, name, price) => {
        let currentItems = this.state.items;

        let existingItem = this.state.items.find(item => item.name == name);
        if (existingItem) {
            existingItem.amount++;
        }else{
            currentItems.push({
                amount,
                name,
                price
            });
        }
        
        this.setState({items: currentItems});
        console.log(this.state);
     }
    render() {
        return <React.Fragment>
            <Navbar/>
            <div className='mein-conteiner'>
                <div className='product-container'>
                    <Product onAdd={() => this.addItem(1, 'Äpfel', 3.99)} image='apples.jpg' title='Äpfel' description="Füge Äpfel zu deinem Warenkorb hinzu"/>
                    <Product onAdd={() => this.addItem(1, 'Birnen', 4.99)}image='pears.jpg' title='Birnen' description="Füge Birnen zu deinem Warenkorb hinzu"/>
                    <Product onAdd={() => this.addItem(1, 'Erdbeeren', 3.49)}image='strawberry.jpg' title='Erdbeeren' description="Füge Erdbeeren zu deinem Warenkorb hinzu"/>
                    <Product onAdd={() => this.addItem(1, 'Tomaten', 2.99)}image='tomatoes.jpg' title='Tomaten' description="Füge Tomaten zu deinem Warenkorb hinzu"/>         
                </div>
                <ShoppingCart items={this.state.items}/>
            </div>        
        </React.Fragment>;
    }
}
 
export default App;
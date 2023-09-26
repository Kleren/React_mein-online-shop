import React, { Component } from 'react';
import Navbar from './components/navbar';
import Product from './components/product';
import ShoppingCart from './components/shopping-cart';

class App extends Component {
    state = {  } 
    render() {
        return <React.Fragment>
            <Navbar/>
            <div className='mein-conteiner'>
                <div className='product-container'>
                    <Product image='apples.jpg' title='Äpfel' description="Füge Äpfel zu deinem Warenkorb hinzu"/>
                    <Product image='pears.jpg' title='Erdbeeren' description="Füge Birnen zu deinem Warenkorb hinzu"/>
                    <Product image='strawberry.jpg' title='Birnen' description="Füge Erdbeeren zu deinem Warenkorb hinzu"/>
                    <Product image='tomatoes.jpg' title='Tomaten' description="Füge Tomaten zu deinem Warenkorb hinzu"/>         
                </div>
                <ShoppingCart/>
            </div>        
        </React.Fragment>;
    }
}
 
export default App;
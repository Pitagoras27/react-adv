import { useState } from "react";
import { Product, ProductInCart } from '../interfaces/interfaces';

interface IShoppingCard extends Product {
    count: number;
}

export const useShoppingCart = () => {
    const [ shoppingCard, setShoppingCard ] = useState<{ [key: string]: IShoppingCard }>({});

    const onProductChange = ({ count, product }: { count:number, product: Product })  => {
        setShoppingCard(oldShoppingCart => {
      
            const productInCart: ProductInCart = oldShoppingCart[product.id] || { ...product, count: 0 };
    
            if( Math.max( productInCart.count + count, 0 ) > 0 ) {
            productInCart.count += count;
                return {
                ...oldShoppingCart,
                [product.id]: productInCart
                }
            }
    
            const {[product.id]: toDelete, ...rest} = oldShoppingCart;
            return rest;
        })
    };

    return {
        shoppingCard,
        onProductChange
    }
}
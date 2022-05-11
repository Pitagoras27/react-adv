import { useState } from "react";
import { Product } from '../interfaces/interfaces';

interface IShoppingCard extends Product {
    count: number;
}

export const useShoppingCart = () => {
    const [ shoppingCard, setShoppingCard ] = useState<{ [key: string]: IShoppingCard }>({});

    const onProductChange = ({ count, product }: { count:number, product: Product })  => {
        setShoppingCard(oldShoppingCart => {
            if (count === 0) {
              const {[product.id]: toDelete, ...rest} = oldShoppingCart;
              return rest
            }
    
            return {
              ...oldShoppingCart,
              [product.id]: {...product, count}
            }
        })
    };

    return {
        shoppingCard,
        onProductChange
    }
}
import React from 'react'

import '../style/product.css'

const Product = props => {
    const mappedFilteredProducts = props.rProps.filteredProducts.map(filteredProduct => 
                                                                        <div key={filteredProduct.identifier}>
                                                                            <h1>{filteredProduct.name}</h1>
                                                                            <p>Description: {filteredProduct.description}</p>
                                                                            <p>Rarity: {filteredProduct.rarity}</p>
                                                                            <p>Cost: {filteredProduct.cost} vbucks</p>
                                                                            <p>Type: {filteredProduct.type}</p>
                                                                            <img src={filteredProduct.images.transparent} alt={filteredProduct.name}/>
                                                                        </div>
                                                                    )


    const mappedProducts = props.rProps.products.map(product => 
                                                        <div key={product.identifier}>
                                                            <h1>{product.name}</h1>
                                                            <p>Description: {product.description}</p>
                                                            <p>Rarity: {product.rarity}</p>
                                                            <p>Cost: {product.cost} vbucks</p>
                                                            <p>Type: {product.type}</p>
                                                            <img src={product.images.transparent} alt={product.name} />
                                                        </div> 
        )
    return(
        <div className='eachProductSection'>
            {mappedFilteredProducts}
        </div>
    )
}

export default Product



                                                      
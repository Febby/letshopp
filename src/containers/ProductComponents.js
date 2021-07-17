import React from 'react'
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const ProductComponents = () =>{
    const products = useSelector((state) => state.allProducts.products);
    //to display the products we should map

    const renderList = products.map((product) => {
        //since the data we receive fromt the API has several propertiers we'll need to **destructure** them in order to access them
        const {id,title,image,price,category} = product;
        return(
            <div className="four wide column" key={id}>
                <Link to={`/product/${id}`}>
                <div className="ui link cards">
                    <div className="card">
                         <div className="image">
                            <img src={image} alt= {title}/>
                         </div>
                        <div className="content">
                            <div className="header">
                                 {title}
                             </div>
                            <div className="meta price">
                                $ {price}
                            </div>
                            <div className="meta">
                                {category}
                            </div> 
                        </div>
                    </div>  
                 </div>
                </Link> 
            </div>
        );
    })

    return(
        <>
        {renderList}
        </>
    )

    
}



export default ProductComponents


/* const {id, title} = products[0];
        return(
            <div className="four column wide">
                <div className="ui link cards">
                    <div className="card">
                        <div className="image">
                            
                        </div>
                        <div className="content">
                             <div className="header">
                                {title}
                            </div> 
                        </div>
                    </div>
                </div>
            </div>
        ) } 
*/
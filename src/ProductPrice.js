function ProductPrice (props) {
    return (
        <div className="product-price">
            <ol>            
                <h4>Product: {props.name} {props.sale ? <label>- On Sale!!!</label> : <label></label>}</h4>
                <p /><img src={props.photo} alt={props.name}/>
                <p />Description: {props.description}
                <p />Price: ${props.price} 
                <p /><button>Buy now!</button>                
            </ol>
        </div>
    )
}
export default ProductPrice
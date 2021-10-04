import React,{useState} from 'react'

const ItemsCounts = ({stock=40 , cantidad=1 , nombre}) => {

        const [itemStock , setItemStock] = useState(stock);
        const [itemQuantity,setItemQuantity] = useState(cantidad);


        const sumarCantidad = () => {
            if( itemStock === 0){
                alert('No hay mas stock')
            }else{
                setItemQuantity(itemQuantity + 1);
                setItemStock(itemStock -1);
            }
        }
        const restarCantidad = () => {
            if(itemQuantity === 0){
                alert('No quedo mas de este articulo')
            }else{
                setItemQuantity(itemQuantity - 1);
                setItemStock( itemStock + 1);
            }
        };

    return (
        <div className='counter'>
            <h4>{nombre}</h4>
            <p>El stock es de {itemStock}</p>
            <section>
                <button onClick={restarCantidad}> - </button>
                <p>{itemQuantity}</p>
                <button inClick={sumarCantidad}> + </button>
            </section>
        </div>
    )
}

export default ItemsCounts

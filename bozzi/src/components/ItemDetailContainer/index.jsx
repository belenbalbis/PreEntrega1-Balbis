const ItemDetailContainer = () => {
return (
    <div>
    {productos.map((producto) => (
        <h4 key={producto.id}>{producto.description}</h4>
    ))}
    </div>
)
}

export default ItemDetailContainer
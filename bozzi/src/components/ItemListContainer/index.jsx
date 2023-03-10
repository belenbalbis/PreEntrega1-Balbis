const ItemListContainer = ({productos}) => {
  return (
    <div>
      {productos.map((producto) => (
        <h4 key={producto.id}>{producto.title}</h4>
      ))}
    </div>
  )
}

export default ItemListContainer
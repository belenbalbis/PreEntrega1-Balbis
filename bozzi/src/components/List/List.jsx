import "./list.css"

const List = ({sale}) => {
    return (

    <ul>
        <a href=""><li>{sale[0]}</li></a>
        <a href=""><li>{sale[1]}</li></a>
        <a href=""><li>{sale[2]}</li></a>
    </ul>


    )

}

export default List
import { Link } from "react-router-dom"

const CategoriesListItem = ({item}) => {
    return <li className="list-item">
        <Link to={`/categories/${item.Slug}`}>{item.Name}</Link>
    </li>
}
export default CategoriesListItem
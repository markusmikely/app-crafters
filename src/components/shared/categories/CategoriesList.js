import CategoriesListItem from "./CategoriesListItem"

const CategoriesList = ({categories}) => {
    return <ul className={`categories-list`}>
        {categories.map(category => category.attributes).map((item, itemIndex) => <CategoriesListItem key={itemIndex} item={item} />)}
    </ul>
}
export default CategoriesList
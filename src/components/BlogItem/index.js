import './index.css'

const BlogItem = props => {
  const {each1} = props
  const {title, description, publishedDate} = each1
  return (
    <div>
      <div className="for-flex">
        <h1 className="title">{title}</h1>
        <p className="publishedDate">{publishedDate}</p>
      </div>
      <p className="description">{description}</p>
      <hr />
    </div>
  )
}
export default BlogItem

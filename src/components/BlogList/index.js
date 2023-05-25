import './index.css'
import BlogItem from '../BlogItem'

const BlogList = props => {
  const {each} = props
  return (
    <div>
      <ul>
        {each.map(each1 => (
          <BlogItem each1={each1} key={each1.id} />
        ))}
      </ul>
    </div>
  )
}
export default BlogList

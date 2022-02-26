const App = () => {
  const title = 'Blog Post'
  const body = 'This is the body of the blog!'

  const comments = [
    { id: 1, text: 'Comment 1' },
    { id: 2, text: 'Comment 2' },
    { id: 3, text: 'Comment 3' },
  ]

  const loading = false
  if (loading) return <h1>Loading ...</h1>
  const showComments = true
  const commentBlock = (
    <div>
      <h2>There are {comments.length} comments here</h2>
      <ul>
        {comments.map((comment, index) => {
          return <li key={index}>{comment.text}</li>
        })}
      </ul>
    </div>
  )

  return (
    <div>
      <h1>{title}</h1>
      <p>{body}</p>

      {showComments && commentBlock}
    </div>
  )
}

export default App

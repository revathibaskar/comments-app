import {formatDistanceToNow} from 'date-fns'
import './index.css'

const CommentItem = props => {
  const {cmtDetail, onDeleteStateCmt, onChangeLikeState} = props
  const {id, name, comment, isLike} = cmtDetail

  const onDelCmt = () => {
    onDeleteStateCmt(id)
  }

  const onChngeLke = () => {
    onChangeLikeState(id)
  }

  const likeImg = isLike
    ? 'https://assets.ccbp.in/frontend/react-js/comments-app/liked-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/comments-app/like-img.png'
  return (
    <li>
      <div className="name-container">
        <p className="bg-style amber"> {name[0]}</p>
        <h1 className="name-style">{name}</h1>
        <p className="time-style">{formatDistanceToNow(new Date())}</p>
      </div>
      <p className="cmt">{comment}</p>
      <div className="img-con">
        <div className="like-con">
          <button className="button-style" onClick={onChngeLke}>
            <img src={likeImg} className="img-style" alt="like" />
          </button>
          <p>Like</p>
        </div>
        <button data-testid="delete" className="button-style" onClick={onDelCmt}>
          <img
            src="https://assets.ccbp.in/frontend/react-js/comments-app/delete-img.png"
            className="img-style"
            alt="delete"
          />
        </button>
      </div>
      <hr />
    </li>
  )
}
export default CommentItem

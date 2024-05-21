import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'
import CommentItem from '../CommentItem'
import './index.css'

const initialContainerBackgroundClassNames = [
  'amber',
  'blue',
  'orange',
  'emerald',
  'teal',
  'red',
  'light-blue',
]

const initialCommentsList = []

class Comments extends Component {
  state = {
    commentsDetailsList: initialCommentsList,
    name: '',
    comment: '',
    count: 0,
  }

  onChnageName = event => {
    this.setState({name: event.target.value})
  }

  onChangeCmt = event => {
    this.setState({comment: event.target.value})
  }

  onAddCmt = event => {
    event.preventDefault()
    const {name, comment} = this.state
    const newCmt = {
      id: uuidv4(),
      name,
      comment,
      isLike: false,
    }

    this.setState(prev => ({
      commentsDetailsList: [...prev.commentsDetailsList, newCmt],
      name: '',
      comment: '',
      count: prev.count + 1,
    }))
  }

  onDeleteStateCmt = id => {
    this.setState(prev => ({
      commentsDetailsList: prev.commentsDetailsList.filter(
        each => each.id !== id,
      ),
      count: prev.count - 1,
    }))
  }

  onChangeLikeState = id => {
    this.setState(prev => ({
      commentsDetailsList: prev.commentsDetailsList.map(each => {
        if (each.id === id) {
          return {...each, isLike: !each.isLike}
        }
        return each
      }),
    }))
  }

  render() {
    const {commentsDetailsList, name, comment, count} = this.state
    return (
      <div className="bg-container">
        <h1 className="cmt-heading">Comments</h1>
        <div>
          <img
            src="https://assets.ccbp.in/frontend/react-js/comments-app/comments-img.png"
            alt="comments"
            className="cmt-img-style"
          />
          <form className="add-cmt-con" onSubmit={this.onAddCmt}>
            <p className="desc">Say something about 4.0 Technologies</p>
            <input
              placeholder="Your Name"
              className="name-inpt-style"
              onChange={this.onChnageName}
              value={name}
            />
            <br />
            <textarea
              placeholder="Your Comment"
              rows="5"
              cols="50"
              className="cmt-inp-style"
              onChange={this.onChangeCmt}
              value={comment}
            >
              {' '}
              {comment}
            </textarea>
            <br />
            <button type="submit" className="btn-style">
              Add Comment
            </button>
          </form>
        </div>
        <hr className="hr-style" />
        <div className="cmt-count-con">
          <button type="button" className="cmt-count-btn">
            {count}
          </button>
          <p className="desc">Comments</p>
        </div>
        <ul className="unorder-container">
          {commentsDetailsList.map(each => (
            <CommentItem
              cmtDetail={each}
              key={each.id}
              onDeleteStateCmt={this.onDeleteStateCmt}
              onChangeLikeState={this.onChangeLikeState}
            />
          ))}
        </ul>
      </div>
    )
  }
}

export default Comments

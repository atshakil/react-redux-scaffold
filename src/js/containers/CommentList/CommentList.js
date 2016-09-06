import React from 'react';
import connect from 'react-redux';
import './CommentList.scss';
import Comment from '../../components/Comment/Comment';

var CommentList = React.createClass({
  render: function() {
    var commentNodes = this.props.data.map(function(comment) {
      return (
        <Comment author={comment.author} key={comment.id}>
          {comment.text}
        </Comment>
      );
    });
    return (
      <div className="commentList">
        {commentNodes}
      </div>
    );
  }
});


var CommentListState = function(state) {
  return {
    data: state.data
  }
}

CommentList = connect(
  CommentListState
)(CommentList)

export default CommentList;

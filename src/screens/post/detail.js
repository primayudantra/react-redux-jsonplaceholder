import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPagePostDetailComment } from '../../action/Page1';
import Loading from '../__layout/loading'

class DetailPost extends Component {
  componentDidMount(){
    this.props.fetchPagePostDetailComment(this.props.match.params.postId);
  }
  render() {

    if(this.props.posts.loading) return  <Loading/>
    let {dataPost,dataComments} = this.props.posts;
    console.log(this.props.posts)

    let listComments = dataComments.map((item,idx)=>{
      return(
        <div className="article border-bottom">
            <div className="col-xs-12">
                <div className="row">
                    <div className="col-2 date">
                        <div className="small">Comment ID : {item.id}</div>
                    </div>
                    <div className="col-10">
                        <h4>{item.email}</h4>
                        <p>{item.name}.</p>
                    </div>
                </div>
            </div>
            <div className="clear" />
        </div>
      )
    })

    return (
      <div className="col-md-12 col-lg-10">
        <div className="card">
          <div className="card-header">Post Id : {dataPost.id} | {dataPost.title} </div>
          <div className="card-block">
            <p>{dataPost.body}</p>
          </div>
        </div>
        <hr/>
        <div className="card mb-4">
          <div className="card-block">
              <h3 className="card-title">Comments</h3>
              <h6 className="card-subtitle mb-2 text-muted">Latest news</h6>
              <div className="divider" style={{marginTop: '1rem'}} />
              <div className="articles-container">
                {listComments}
              </div>
          </div>
      </div>
      </div>
    );
  }
}
export default connect(
  state => ({ posts: state.postDetail}),{fetchPagePostDetailComment})
(DetailPost)

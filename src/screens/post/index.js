import React, { Component } from 'react';
import { connect } from "react-redux"
import { Link } from 'react-router-dom';
import { fetchPage1 } from '../../action/Page1';
import Loading from '../__layout/loading'

class ListPost extends Component {
  componentDidMount(){
    this.props.fetchPage1();
  }
  render() {
    if(this.props.posts.loading) return  <Loading/>
    var list = this.props.posts.page1.map((item,key)=>{
      return (
        <tr key={key}>
            <td> {item.userId} </td>
            <td> {item.id} </td>
            <td> {item.title} </td>
            <td> {item.body} </td>
            <td>
              <Link to={`/posts/${item.id}`}><button className="btn btn-outline-primary">View</button></Link>
            </td>
        </tr>
      )
    })
    return (
      <div className="col-md-12 col-lg-12">
          <div className="card mb-4">
              <div className="card-block">
                  <h3 className="card-title">Example Data from jsonplaceholder</h3>
                  <div className="table-responsive">
                      <table className="table table-striped">
                          <thead>
                              <tr style={{textAlign:'center'}}>
                                  <th>User Id</th>
                                  <th>Id</th>
                                  <th>Title</th>
                                  <th>Body</th>
                                  <th>View</th>
                              </tr>
                          </thead>
                          <tbody>
                            {list}
                          </tbody>
                      </table>
                  </div>
              </div>
          </div>
      </div>
    );
  }
}

export default connect(
  state => ({
    posts: state.page1
  }),{
    fetchPage1
  }
)(ListPost)

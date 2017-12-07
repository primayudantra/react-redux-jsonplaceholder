import React, { Component } from 'react';

class Header extends Component {
  render() {
    return (
      <header className="page-header row justify-center">
          <div className="col-md-6 col-lg-8">
              <h1 className="float-left text-center text-md-left">REACT REDUX</h1>
          </div>
          <div className="dropdown user-dropdown col-md-6 col-lg-4 text-center text-md-right">
              <a className="btn btn-stripped dropdown-toggle" href="https://example.com" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  <img src="images/profile-pic.jpg" className="circle float-left profile-photo" width={50} height="auto"
                  alt="Profile Photo"/>
                  <div className="username mt-1">
                      <h4 className="mb-1">Username</h4>
                      <h6 className="text-muted">Super Admin</h6>
                  </div>
              </a>
              <div className="dropdown-menu dropdown-menu-right" style={{marginRight: '1.5rem'}} aria-labelledby="dropdownMenuLink">
                  <a className="dropdown-item" href="/"><em className="fa fa-user-circle mr-1" /> View Profile</a>
                  <a className="dropdown-item" href="/"><em className="fa fa-sliders mr-1" /> Preferences</a>
                  <a className="dropdown-item" href="/"><em className="fa fa-power-off mr-1" /> Logout</a>
              </div>
          </div>
          <div className="clear" />
      </header>
    );
  }
}

export default Header;

import React from 'react';

class Header extends React.Component {
    render() {
        return(
            <nav class="navbar navbar-dark bg-dark">
          <div class="container-fluid">
    <a class="navbar-brand" href="#">BMI Counter</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
   
  </div>
          </nav> 
        )
    }
}

export default Header;
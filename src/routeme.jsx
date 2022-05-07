import React from 'react';

function RouteMe() {

 const redirecter = () => {     window.location.href = "http://localhost:8081/BAC/";  }



    //   console.log( {this.props});
    return (
      <div>
       <h2>RouteMe</h2>
       <button onClick={redirecter}>Link</button>
      </div>
    )
  
}

export default RouteMe;
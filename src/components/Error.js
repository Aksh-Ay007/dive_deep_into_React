import React from 'react'

import { useRouteError } from 'react-router-dom'

function Error() {

    const err=useRouteError();
    console.log(err,'ss');
  return (
    <div>
      <h1>404</h1>
      <h2>{err.statusText}</h2>
      <h3>{err.status}</h3>

      <h3>`We are sorry, the page you requested could not be found {err.data}`</h3>
      <h3>
        Go back to the <a href="/">Home Page</a>
      </h3>
    </div>
  );
}

export default Error
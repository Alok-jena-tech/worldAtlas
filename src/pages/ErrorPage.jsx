import React from 'react'
import {useRouteError,NavLink} from "react-router-dom";
export const ErrorPage = () => {
    const error=useRouteError();
    console.log(error)
  return (
    <>
    <h1>Oops! an error occurred</h1>
    {error && <p>{error.data}</p>}
<NavLink to="/">
<button>    Go Back
</button>
</NavLink>
    </>
  )
}



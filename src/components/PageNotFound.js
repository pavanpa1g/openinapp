import {useNavigate, Link} from 'react-router-dom'

import './PageNotFound.css'

const PageNotFound = () => {
  const navigate = useNavigate()
  return (
    <div className="page-not-found-bg-container">
      <img
        src="https://res.cloudinary.com/dlafvsqxz/image/upload/v1686501697/Group_7484_tkbptc.png"
        alt="not found"
        className="not-found-image"
      />
      <h4 className="page-not-found-text">Page Not Found</h4>
      <p className="sorry-text-para">
        we are sorry, the page you requested could not be found. Please go back
        to the homepage.
      </p>
      <Link to="/">
        <button
          type="button"
          className="go-back-home-btn"
          onClick={() => navigate('/')}
        >
          Go Back to Home
        </button>
      </Link>
    </div>
  )
}

export default PageNotFound
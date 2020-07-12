import * as React from 'react'
import { Link } from '@reach/router'
import classnames from 'classnames'

function Listing({ listing }) {
  if (!listing) {
    return null
  }
  //NOTE: For now I am using filler values to demo the if frontend works so I am just using
  //a JSON file with random property along with pictures (Will change...)
  const { id, image, first_name, last_name, age, gender, description} = listing
  const columnClasses = classnames('column', 'col-4', 'col-xs-12')
  const cardClasses = classnames('card')

  return (
    <div className={columnClasses} style={{ margin: '1rem 0' }}>
      <div className={cardClasses}>
        <div className="card-image">
          <img className="img-responsive" src={`/server/${image}`} alt={first_name} />
        </div>
        <div className="card-header">
          <div className="card-title h5">{first_name} {last_name}</div>
          <div className="card-title h6">{age} years old {gender}</div>
        </div>
        <div className="card-body">{description}</div>
        <div className="card-footer">
          <Link className="btn btn-primary" to={`/details/${first_name}${id}`}>
            Go to profile
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Listing
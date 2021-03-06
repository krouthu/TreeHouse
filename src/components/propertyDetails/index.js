import * as React from 'react'
import classnames from 'classnames'

import KeyFeatures from '../keyFeatures'
import Map from '../map'
import NavBar from '../../components/navbar'

function PropertyDetails({ listing }) {
  if (!listing) {
    return null
  }

  const { title, address, description, price, features, details } = listing
  //const priceClasses = classnames('text-success', 'text-right')

  return (
    <div>
      <NavBar />
      <div className="columns">
        <div className="column col-9 col-xs-12">
          <h2>{title}</h2>
          <h3 className="text-dark text-small mb-1">{description}</h3>
        </div>
        <div className="column col-3 col-xs-12">
          <h5>
            <small>Priced from</small>
            <br />
            ${price}
          </h5>
        </div>
      </div>
      <div className="columns">
        <div className="column col-6 col-xs-12" />
        <div className="column col-6 col-xs-12">
          <KeyFeatures features={features} />
        </div>
      </div>
      <p className="text-bold mt-3">Full Details</p>
      {details.map(detail => (
        <p key={detail}>{detail}</p>
      ))}
      <p className="text-bold mt-3">Map</p>
      <Map address={address} />
    </div>
  )
}

export default PropertyDetails
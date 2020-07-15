import * as React from 'react'
import Map from '/components/map/'
import KeyFeatures from '/components/keyFeatures/'
import NavBar from '../../components/navbar'

function Details({ propertyId }) {
    const features = [
      "Close to downtown",
      "Within walking distance of Trader Joes",
      "Exposed brickwork retaining the charm of the existing building",
      "Bike storage",
      "Parking for an extra fee",
      "Flexible lease options"
    ]
    return (
      <div>
        <NavBar />
        Property Id: {propertyId}
        <KeyFeatures features={features} />
        <Map />
      </div>
    )
  }

export default Details
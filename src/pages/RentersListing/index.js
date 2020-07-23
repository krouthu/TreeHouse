import * as React from 'react'
import Hero from '../../components/hero'
import {
    RenterListingsProvider,
    RenterListingsConsumer
} from '../../context/RenterListingsProvider'
import Listing from '../../components/renterListing'
import Filter from '../../components/filter'
import NavBar from '../../components/navbar'

function RentersListing() {
  return (
    <React.Fragment> 
      <NavBar />
      <Hero />
       <div className="container">
         <RenterListingsProvider>
           <RenterListingsConsumer> 
              {function(value) {
                const { renterListings, updateFilter } = value
                  return (
                    <ul>
                      <div className="columns">
                        {renterListings.map(listing => (
                        <Listing listing={listing} key={listing.address} />
                        ))}
                      </div>
                    </ul>
                       )
                    }}
            </RenterListingsConsumer>
          </RenterListingsProvider>
        </div>
    </React.Fragment>
  )
}

export default RentersListing

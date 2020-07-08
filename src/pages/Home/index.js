import * as React from 'react'
import Hero from '../../components/hero'
import {
    PropertyListingsProvider,
    PropertyListingsConsumer
} from '../../context/PropertyListingsProvider'
import Listing from '../../components/listing'
import Filter from '../../components/filter'
import NavBar from '../../components/navbar'

function Home() {
  return (
    <React.Fragment> 
      <NavBar />
      <Hero />
       <div className="container">
         <PropertyListingsProvider>
           <PropertyListingsConsumer> 
              {function(value) {
                const { propertyListings, updateFilter } = value
                  return (
                    <ul>
                      <Filter updateFilter={updateFilter} />
                      <div className="columns">
                        {propertyListings.map(listing => (
                        <Listing listing={listing} key={listing.address} />
                        ))}
                      </div>
                    </ul>
                       )
                    }}
            </PropertyListingsConsumer>
          </PropertyListingsProvider>
        </div>
    </React.Fragment>
  )
}

export default Home
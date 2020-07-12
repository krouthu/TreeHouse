import * as React from 'react'

const DefaultState = {
  renterListings: [],
  //filter: {}
}

const RenterListingsContext = React.createContext(DefaultState)

export const RenterListingsConsumer = RenterListingsContext.Consumer

export class RenterListingsProvider extends React.Component {
  //static applyFilter(renterListings, filter) {
    
  //}

  state = DefaultState //from declared const...
  
  componentDidMount() {
    fetch('/server/renterProfiles.json')
      .then(res => res.json())
      .then(res => {
        this.setState({ renterListings: res })
      })
  }

  /*updateFilter = filter => {
    this.setState({
      filter
    })
  }*/
  
  render() {
    const { children } = this.props;
    const { renterListings, filter } = this.state;

    //const filteredListings = renterListingsProvider.applyFilter(renterListings,filter)
  
    return (
      <RenterListingsContext.Provider
        value={{
          renterListings: renterListings,
          //updateFilter: this.updateFilter,
        }}
        >
        {children} 
      </RenterListingsContext.Provider>
    )
  }
}
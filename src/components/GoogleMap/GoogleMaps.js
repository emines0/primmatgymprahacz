import React, { useEffect } from 'react'
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api'

const containerStyle = {
  width: '100%',
  height: '400px',
}

const center = {
  lat: 50.1175845071,
  lng: 14.4762221259,
}

const position = {
  lat: 50.1175845071,
  lng: 14.4762221259,
}

const GoogleMaps = () => {
  const onLoad = (marker) => {
    console.log('marker: ', marker)
  }
  return (
    <LoadScript googleMapsApiKey='AIzaSyDa37BHUy57PAK7EMQQGGebioLZQ52kCVk'>
      <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={17}>
        {/* Child components, such as markers, info windows, etc. */}
        <Marker onLoad={onLoad} position={position} />
      </GoogleMap>
    </LoadScript>
  )
}

export default GoogleMaps

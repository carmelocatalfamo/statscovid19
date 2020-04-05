import React from 'react'

import Navbar from './Navbar'
import Footer from './Footer'
import Alert from './BannerAlert'

export default ({ children }) => {
  return (
    <>
      <Navbar />
      <Alert />
      {children}
      <Footer />
    </>
  )
}

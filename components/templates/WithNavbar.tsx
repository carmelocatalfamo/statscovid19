import React, { FC } from 'react'

import { Navbar } from '../Navbar'
import { Footer } from '../Footer'

const WithNavbar: FC = ({ children }) => {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  )
}

export { WithNavbar }

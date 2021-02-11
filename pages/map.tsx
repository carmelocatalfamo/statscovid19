import React from 'react'
import { GetServerSideProps } from 'next'

import { Text } from '../components/commons/Text'
import { WithTemplate } from '../components/WithTemplate'

const Map = () => {
  return (
    <WithTemplate>
      <Text>Map</Text>
    </WithTemplate>
  )
}

export const getServerSideProps: GetServerSideProps = async () => {
  return {
    props: {}
  }
}

export default Map

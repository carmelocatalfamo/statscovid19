import React from 'react'
import { GetServerSideProps } from 'next'

const Home = () => {
  return (
    <div data-testid='welcome_message'>
      Hello world
    </div>
  )
}

export const getServerSideProps: GetServerSideProps = async () => {
  return {
    props: {}
  }
}

export default Home

import React, { FC } from 'react'
import Head from 'next/head'
import DefaultErrorPage from 'next/error'

type Props = {
  title?: string
  code: number
}

const Error: FC<Props> = ({ code, title }) => {
  return (
    <>
      <Head>
        <meta name="robots" content="noindex" />
      </Head>
      <DefaultErrorPage title={title} statusCode={code} />
    </>
  )
}

export { Error }

import React from 'react'

import { ContentLoader } from '@/components/commons/ContentLoader'

type Props = {
  children?: React.ReactElement
  isLoading: boolean
}

const Loader = ({ children, isLoading }: Props) => {
  if (!isLoading) {
    return children
  }

  return (
    <ContentLoader height={297} uniqueKey='chart'>
      <rect x='5%' y='90%' rx='3' ry='3' width='95%' height='4' />
      <rect x='5%' y='0%' rx='3' ry='3' width='4' height='91%' />
      <rect x='4.5%' y='10%' rx='3' ry='3' width='95%' height='1' />
      <rect x='4.5%' y='30%' rx='3' ry='3' width='95%' height='1' />
      <rect x='4.5%' y='50%' rx='3' ry='3' width='95%' height='1' />
      <rect x='4.5%' y='70%' rx='3' ry='3' width='95%' height='1' />
      <rect x='0%' y='8%' rx='3' ry='3' width='3.5%' height='4%' />
      <rect x='0%' y='28%' rx='3' ry='3' width='3.5%' height='4%' />
      <rect x='0%' y='48%' rx='3' ry='3' width='3.5%' height='4%' />
      <rect x='0%' y='68%' rx='3' ry='3' width='3.5%' height='4%' />
      <rect x='15%' y='0%' rx='3' ry='3' width='1' height='93%' />
      <rect x='25%' y='0%' rx='3' ry='3' width='1' height='93%' />
      <rect x='35%' y='0%' rx='3' ry='3' width='1' height='93%' />
      <rect x='45%' y='0%' rx='3' ry='3' width='1' height='93%' />
      <rect x='55%' y='0%' rx='3' ry='3' width='1' height='93%' />
      <rect x='65%' y='0%' rx='3' ry='3' width='1' height='93%' />
      <rect x='75%' y='0%' rx='3' ry='3' width='1' height='93%' />
      <rect x='85%' y='0%' rx='3' ry='3' width='1' height='93%' />
      <rect x='95%' y='0%' rx='3' ry='3' width='1' height='93%' />
      <rect x='13.5%' y='95%' rx='3' ry='3' width='3.5%' height='4%' />
      <rect x='23.5%' y='95%' rx='3' ry='3' width='3.5%' height='4%' />
      <rect x='33.5%' y='95%' rx='3' ry='3' width='3.5%' height='4%' />
      <rect x='43.5%' y='95%' rx='3' ry='3' width='3.5%' height='4%' />
      <rect x='53.5%' y='95%' rx='3' ry='3' width='3.5%' height='4%' />
      <rect x='63.5%' y='95%' rx='3' ry='3' width='3.5%' height='4%' />
      <rect x='73.5%' y='95%' rx='3' ry='3' width='3.5%' height='4%' />
      <rect x='83.5%' y='95%' rx='3' ry='3' width='3.5%' height='4%' />
      <rect x='93.5%' y='95%' rx='3' ry='3' width='3.5%' height='4%' />
    </ContentLoader>
  )
}

export { Loader }

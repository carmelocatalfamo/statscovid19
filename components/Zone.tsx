import React, { FC, useEffect, useState } from 'react'
import styled, { useTheme } from 'styled-components'
import { FiInfo } from 'react-icons/fi'
import ContentLoader from 'react-content-loader'

import { Card } from './commons/Card'
import { Region } from './maps/Region'
import { Text } from './commons/Text'
import { fetchZones } from '../utils/api'
import { ZoneApiResponse } from '../models/Api'

type Props = {
  regionSlug: string
}

export const Zone: FC<Props> = ({ regionSlug }) => {
  const theme = useTheme()
  const [loading, setLoading] = useState(true)
  const [zones, setZones] = useState<ZoneApiResponse[]>([])
  const [data, setData] = useState<ZoneApiResponse | null>(null)

  useEffect(() => {
    const fetchRegionZones = async () => {
      setLoading(true)

      try {
        const zonesResponse = await fetchZones()
        setZones(zonesResponse)
      } catch (error) {
        console.log('ERROR', error)
      }

      setLoading(false)
    }

    fetchRegionZones()
  }, [])

  useEffect(() => {
    if (zones.length) {
      const zone = zones.find(({ region: { slug } }) => slug === regionSlug)
      setData(zone)
    }
  }, [zones, regionSlug])

  const zoneToColors = {
    white: theme.colors.text,
    yellow: theme.colors.warning,
    orange: theme.colors.gradient2,
    red: theme.colors.danger,
    undefined: theme.colors.sidebar
  }

  const zoneToTitle = {
    white: 'Zona Bianca',
    yellow: 'Zona Gialla',
    orange: 'Zona Arancione',
    red: 'Zona Rossa',
    undefined: ''
  }

  const renderContent = () => {
    if (loading) {
      return (
        <ContentLoader
          uniqueKey='zone_loader'
          speed={2}
          width='100%'
          height='100%'
          backgroundColor='#f3f3f3'
          foregroundColor='#ecebeb'
        >
          <circle cx='50%' cy='130' r='75' />
        </ContentLoader>
      )
    }

    if (!loading && !data) {
      return <Text>Errore durante il caricamento dei dati</Text>
    }

    return (
      <Container>
        <Region
          regionSlug={data.region.slug}
          fill={theme.colors.navbar}
          stroke={theme.colors.navbar}
        />
      </Container>
    )
  }

  return (
    <Card
      offset={75}
      size={25}
      highlighted={zoneToColors[data?.zone]}
      title={() => (
        <CardHeader>
          <Title>{zoneToTitle[data?.zone]}</Title>
          <a
            target='_blank'
            rel='noreferrer'
            href='https://www.governo.it/it/articolo/domande-frequenti-sulle-misure-adottate-dal-governo/15638'
          >
            <FiInfo
              size={22}
              color={theme.colors.title}
              style={{
                cursor: 'pointer'
              }}
            />
          </a>
        </CardHeader>
      )}
    >
      {renderContent()}
    </Card>
  )
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
`

const CardHeader = styled.div`
  border-bottom: 2px solid ${props => props.theme.colors.content};
  padding: 22px 30px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`

const Title = styled(Text)`
  color: ${props => props.theme.colors.title};
  font-size: 16px;
  font-weight: bold;
`

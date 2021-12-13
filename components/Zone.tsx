import React from 'react'
import { FiInfo } from 'react-icons/fi'
import ContentLoader from 'react-content-loader'
import styled, { useTheme } from 'styled-components'

import { Card } from '@/components/commons/Card'
import { RegionMap } from '@/components/RegionMap'
import { Text } from '@/components/commons/Text'
import { useGetRegionsZoneDataQuery } from '@/store/services/covid'

type Props = {
  regionSlug: string
}

export const Zone = ({ regionSlug, ...otherProps }: Props) => {
  const { colors, loader } = useTheme()
  const { data = [], error, isLoading } = useGetRegionsZoneDataQuery()
  const regionZone = data.find(({ region: { slug } }) => slug === regionSlug)

  const zoneToColors = {
    white: colors.text,
    yellow: colors.warning,
    orange: colors.gradient2,
    red: colors.danger,
    undefined: colors.sidebar
  }

  const zoneToTitle = {
    white: 'Zona Bianca',
    yellow: 'Zona Gialla',
    orange: 'Zona Arancione',
    red: 'Zona Rossa',
    undefined: ''
  }

  const renderContent = () => {
    if (isLoading) {
      return (
        <ContentLoader
          uniqueKey='zone_loader'
          speed={2}
          width='100%'
          height='100%'
          backgroundColor={loader.background}
          foregroundColor={loader.foreground}
        >
          <circle cx='50%' cy='130' r='75' />
        </ContentLoader>
      )
    }

    // TODO: non esiste più la mappa sul sito del ministero che fornisce
    // i colori delle regioni, rimuovere il box.
    if (error || !regionZone) {
      return <Text>Errore durante il caricamento dei dati</Text>
    }

    return (
      <Container>
        <RegionMap
          regionSlug={regionZone.region.slug}
          fill={colors.navbar}
          stroke={colors.navbar}
        />
      </Container>
    )
  }

  return (
    <StyledCard
      {...otherProps}
      highlighted={zoneToColors[regionZone?.zone]}
      title={() => (
        <CardHeader>
          <Title>{zoneToTitle[regionZone?.zone] || 'Zona Regione'}</Title>
          <a
            target='_blank'
            rel='noreferrer'
            title='Informazioni Ufficiali'
            href='https://www.governo.it/it/articolo/domande-frequenti-sulle-misure-adottate-dal-governo/15638'
          >
            <Icon size={22} color={colors.title} />
          </a>
        </CardHeader>
      )}
    >
      {renderContent()}
    </StyledCard>
  )
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
`

const StyledCard = styled(Card)`
  & > div:last-child {
    height: 320px;

    ${props => props.theme.breakpoint.medium} {
      height: calc(100% - 70px);
    }
  }
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

const Icon = styled(FiInfo)`
  cursor: pointer;
`

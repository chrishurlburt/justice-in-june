import styled from 'styled-components'

interface Props {
  size: number
  children: JSX.Element
}

const H1 = styled.h1`
  font-size: 60px;
  font-weight: normal;
  color: #38516b;
`

const H2 = styled.h2`
  font-size: 24px;
  font-weight: normal;
`

const H3 = styled.h3`
  font-size: 24px;
  font-weight: bold;
`

const H4 = styled.h4`
  font-size: 20;
  font-weight: normal;
  text-transform: uppercase;
`

const SIZES = [null, H1, H2, H3, H4] 

export const Heading = ({ size, children }: Props) => {
  const Component = SIZES[size]
  
  return (
    <Component>{children}</Component>
  )
}

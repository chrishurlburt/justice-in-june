import styled from 'styled-components'

interface Props {
  size: number
  children: JSX.Element
}

const H1 = styled.h1`
  font-size: 36px;
  font-weight: normal;
  color: #38516b;
  @media (min-width: 480px) {
    font-size: 60px;
  }
`

const H2 = styled.h2`
  font-size: 24px;
  font-weight: normal;
`

const H3 = styled.h3`
  font-size: 30px;
  font-weight: bold;
  @media (min-width: 480px) {
    font-size: 36px;
  }
`

const H4 = styled.h4`
  font-size: 20px;
  font-weight: bold;
  text-transform: uppercase;
`

const SIZES = [null, H1, H2, H3, H4] 

export const Heading = ({ size, children }: Props) => {
  const Component = SIZES[size]
  
  return (
    <Component>{children}</Component>
  )
}

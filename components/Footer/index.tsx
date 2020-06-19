import styled from 'styled-components'

import { Logo } from '../'

const Wrap = styled.footer`
  padding: 48px 36px;
  width: 100%;
  background-color: #E8D8C8;
`

const InnerWrap = styled.div`
  width: 100%;
  p {
    margin: 30px 0;
  }
  @media (min-width: 1200px) {
    width: 600px;
  }
`

const LogoWrap = styled.div`
  max-width: 300px;
`

export const Footer = () => {
  return (
    <Wrap id="our-story">
      <InnerWrap>
      <LogoWrap>
        <Logo />
      </LogoWrap>
      <p>
        I had a 2.5 hour discussion with my friend (Bryanna Wallace) on Saturday night (5/30), which was mainly me listening and her talking (for context she is half Jamaican & African American). I have always considered myself an ally of the black community, but I had a moment of conviction when I realized that even I didn't know a majority of the content listed on some of the circulating guides. I'm very Type A and knew that I needed an actionable plan if I wanted to educate myself further and be accountable for my own learning. And that's how Justice in June was born!
      </p>

      </InnerWrap>
    </Wrap>
  )
}

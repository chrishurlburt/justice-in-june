import styled from 'styled-components'

import { Logo, Heading, TwitterIcon, InstagramIcon } from '../'

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

const SocialWrap = styled.div`
  display: flex;
`

const SocialIcon = styled.div`
  cursor: pointer;
  margin-right: 18px;
  width: 35px;
`

export const Footer = () => {
  return (
    <Wrap id="our-story">
      <InnerWrap>
        <LogoWrap>
          <Logo />
        </LogoWrap>
        <p>
          Bryanna Wallace and Autumn Gupta are two queens on a mission to spread truth, love and awareness.
        </p>
        <p>
          Justice in June all started with a conversation. Our friendship is based on a mutual desire to actively listen to others and consistently exercise empathy. We recognize that to truly understand the need for system level change, it takes education and information that leads to action. This resource was compiled for the purpose of providing a starting place for individuals striving to become better and more active allies. The journey does not stop at just a month. We need everyone to do their part to amplify the conversation and help us take this moment to a movement.
        </p>
        <Heading size={4}>
          Contact us
        </Heading>
        <a href="mailto:justiceinjuneofficial@gmail.com">justiceinjuneofficial@gmail.com</a>
        <Heading size={4}>
          Follow Bryanna
        </Heading>
        <SocialWrap>
          <SocialIcon onClick={() => window.location.href = 'https://twitter.com/Autumn_Bry'}>
            <TwitterIcon />
          </SocialIcon>
          <SocialIcon onClick={() => window.location.href = 'https://www.instagram.com/brybry1217/'}>
            <InstagramIcon />
          </SocialIcon>
        </SocialWrap>

        <Heading size={4}>
          Follow Autumn
        </Heading>

        <SocialWrap>
          <SocialIcon onClick={() => window.location.href = 'https://twitter.com/Autumn_Bry'}>
            <TwitterIcon />
          </SocialIcon>
          <SocialIcon onClick={() => window.location.href = 'https://www.instagram.com/autumngupta/'}>
            <InstagramIcon />
          </SocialIcon>
        </SocialWrap>

      </InnerWrap>
    </Wrap>
  )
}

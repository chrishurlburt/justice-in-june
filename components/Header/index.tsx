import styled from 'styled-components'

import { Logo, Heading } from '../'

const Banner = styled.div`
  padding: 12px;
  background-color: #d8896a;
  text-align: center;
  a:hover {
    color: #172435;
  }
`

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  background-color: #E8D8C8;
  padding: 36px 12px;
  @media (min-width: 480px) {
    padding: 30px 72px;
  }
  @media (min-width: 1200px) {
    flex-direction: row;
    height: 150px;
    justify-content: space-between;
  }
`

const HeaderText = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 0 12px;
  h1 {
    max-width: 825px;
    text-align: center;
    margin: 48px 0;
  }
`

const LogoWrap = styled.div`
  width: 100%;
  svg {
    height: 100%;
    width: 100%;
    @media (min-width: 480px) {
      width: 40%;
    }
    @media (min-width: 1200px) {
      display: block;
      width: 100%;
    }
  }
  @media (min-width: 480px) {
    display: flex;
    justify-content: center;
  }
  @media (min-width: 1200px) {
    display: block;
    width: 50%;
  }
`

const Divider = styled.div`
  height: 8px;
  width: 115px;
  background-color: #d8896a;
  margin-bottom: 30px;
`

const NavWrap = styled.div`
  display: none;
  align-items: flex-end;
  ul {
    margin: 0;
    padding: 0;
    li {
      display: inline-block;
      padding: 0 18px;
    }
    a {
      text-decoration: none;
      text-transform: uppercase;
      font-size: 16px;
    }
  }
  @media (min-width: 668px) {
    display: flex;
    justify-content: center;
    margin-top: 30px;
  }
  @media (min-width: 1200px) {
    margin-top: 0;
  }
`

export const Header = () => {
  return (
    <>
      {/* <Banner>
        <a href="" target="_blank" rel="noopener noreferrer">Read about us</a> in the Washington Post
      </Banner> */}
      <Wrap>
        <LogoWrap>
          <Logo />
        </LogoWrap>
        <NavWrap>
          <ul>
            <li>
              <a href="#10-minutes">10 Minutes</a>
            </li>
            <li>
              <a href="#25-minutes">25 Minutes</a>
            </li>
            <li>
              <a href="#45-minutes">45 Minutes</a>
            </li>
            <li>
              <a href="#our-story">Our Story</a>
            </li>
          </ul>
        </NavWrap>
      </Wrap>
      <HeaderText>
        <Heading size={1}>
          Justice in June cultivates a community rooted in truth, inspires action and is committed to awareness.
        </Heading>
        <Divider />
      </HeaderText>
    </>
  )
}

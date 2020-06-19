import styled from 'styled-components'

import { Logo, Heading } from '../'

const Wrap = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 150px;
  background-color: #E8D8C8;
  padding: 30px 72px;
`

const HeaderText = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  h1 {
    max-width: 825px;
    text-align: center;
  }
`

const LogoWrap = styled.div`
  width: 50%;
  svg {
    height: 100%;
  }
`

const Divider = styled.div`
  height: 8px;
  width: 115px;
  background-color: #d8896a;
  margin-bottom: 24px;
`

const NavWrap = styled.div`
  display: flex;
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
      color: #385166;
      text-transform: uppercase;
      font-size: 16px;
    }
  }
`

export const Header = () => {
  return (
    <>
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

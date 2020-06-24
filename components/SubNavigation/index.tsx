import styled from 'styled-components'

const Wrap = styled.div`
  padding: 36px 0;
  ul {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0;
    padding: 0;
    @media (min-width: 668px) {
      justify-content: space-between;
      flex-direction: row;
    }
    li {
      padding: 24px 0;
      display: inline-block;
      font-size: 24px;
      font-family: 'Libre Caslon Text', serif;
      @media (min-width: 668px) {
        padding: 0;
      }
      &:last-child {
        @media (min-width: 668px) {
          display: none;
        }
        background: #38516b;
        margin-top: 24px;
        padding: 24px 36px;
        a {
          color: #fff;
          &:after {
            display: none;
          }
        }
      }
    }
    a {
      position: relative;
      text-decoration: none;
      &:after {
        position: absolute;
        content: '';
        display: block;
        width: 100%;
        height: 3px;
        background-color: #d8896a;
        top: 110%;
        left: 0;
      }
    }
  }
`

export const SubNavigation = () => {
  return (
    <Wrap>
      <ul>
        <li>
          <a href="#10-minutes">10 minutes/day</a>
        </li>
        <li>
          <a href="#25-minutes">25 minutes/day</a>
        </li>
        <li>
          <a href="#45-minutes">45 minutes/day</a>
        </li>
        <li>
          <a href="http://gofundme.com/f/justice-in-june" target="_blank" rel="noopener noreferrer">Donate</a>
        </li>
      </ul>
    </Wrap>
  )
}

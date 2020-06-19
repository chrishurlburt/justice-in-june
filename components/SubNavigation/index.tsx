import styled from 'styled-components'

const Wrap = styled.div`
  padding: 36px 0;
  ul {
    display: flex;
    justify-content: space-between;
    margin: 0;
    padding: 0;
    li {
      display: inline-block;
      font-size: 24px;
      font-family: 'Libre Caslon Text', serif;
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
      </ul>
    </Wrap>
  )
}

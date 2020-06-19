import styled from 'styled-components'

const Wrap = styled.div`
  display: flex;
  justify-content: center;
`

const InnerWrap = styled.div`
  max-width: 825px;
  width: 100%;
  padding: 12px;
`

export const Layout = ({ children }) => {
  return (
    <Wrap>
      <InnerWrap>
        {children}
      </InnerWrap>
    </Wrap>
  )
}

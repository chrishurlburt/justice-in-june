import styled from 'styled-components'

const SectionWrap = styled.section`
  padding: 18px 0;
`

export const Section = ({ children, id }) => {
  return (
    <SectionWrap id={id}>
      {children}
    </SectionWrap>
  )
}

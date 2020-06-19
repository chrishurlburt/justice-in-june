import styled from 'styled-components'

const SectionWrap = styled.section``

export const Section = ({ children, id }) => {
  return (
    <SectionWrap id={id}>
      {children}
    </SectionWrap>
  )
}

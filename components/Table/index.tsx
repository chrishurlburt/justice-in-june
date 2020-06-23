import styled from 'styled-components'

const Wrap = styled.div`
  width: 100%;
  overflow-x: scroll;
  margin-bottom: 30px;
  table {
    border-spacing: 0;
    border: 1px solid black;
    width: 100%;
    tr {
      :last-child {
        td {
          border-bottom: 0;
        }
      }
    }

    th,
    td {
      margin: 0;
      padding: 0.5rem;
      border-bottom: 1px solid black;
      border-right: 1px solid black;

      :last-child {
        border-right: 0;
      }
    }
  }
`


export const Table = ({ weekly, children }) => {
  return (
    <Wrap>
      <table>
        <thead>
          <tr>
            {weekly
            ? (
              <>
                <td></td>
                <th>Week 1</th>
                <th>Week 2</th>
                <th>Week 3</th>
                <th>Week 4</th>
                <th>Week 5</th>
              </>
            )
            : (
              <>
                <th>Monday</th>
                <th>Tuesday</th>
                <th>Wednesday</th>
                <th>Thursday</th>
                <th>Friday</th>
                <th>Saturday</th>
                <th>Sunday</th>
              </>
            )}
          </tr>
        </thead>
        <tbody>
          {children}
        </tbody>
      </table>
    </Wrap>
  )
}
import React, { useEffect, useState } from 'react';
import './App.css';
import styled from 'styled-components'
import Table from './Table';

import makeData from './makeData'

const Styles = styled.div`
  padding: 1rem;

  table {
    border-spacing: 0;
    border: 1px solid black;

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

function App() {
  const [orchardData, setOrchardData] = useState(0);

  useEffect(() => {
    fetch('https://bx.group/.test/orchards.json')
      .then(response => response.json())
      .then(data => setOrchardData(data));
  }, []);

  const columns = React.useMemo(
    () => [
      {
        Header: 'Name',
        columns: [
          {
            Header: 'First Name',
            accessor: 'firstName',
          },
          {
            Header: 'Last Name',
            accessor: 'lastName',
          },
        ],
      },
      {
        Header: 'Info',
        columns: [
          {
            Header: 'Age',
            accessor: 'age',
          },
          {
            Header: 'Visits',
            accessor: 'visits',
          },
          {
            Header: 'Status',
            accessor: 'status',
          },
          {
            Header: 'Profile Progress',
            accessor: 'progress',
          },
        ],
      },
    ],
    []
  )

  const data = React.useMemo(() => makeData(2000), [])

  return (
    <Styles>
      <Table columns={columns} data={data}/>
      <p>{JSON.stringify(data)}</p>
      <p>{JSON.stringify(orchardData)}</p>
    </Styles>
  )
}

export default App;

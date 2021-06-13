import React, { useEffect, useState } from 'react';
import './App.css';
import styled from 'styled-components'
import Table from './Table';


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
        Header: 'Orchards',
        columns: [
          {
            Header: 'Name',
            accessor: 'name',
          },
          {
            Header: 'Fruit',
            accessor: 'fruit',
          },
          {
            Header: 'Variety',
            accessor: 'variety',
          },
          {
            Header: 'Growing System',
            accessor: 'growingSystem',
          },
          {
            Header: 'Area Ha',
            accessor: 'areaHa',
          },
          {
            Header: 'Trees',
            accessor: 'trees',
          },
          {
            Header: 'Planted',
            accessor: 'planted',
          },
          {
            Header: 'Latitude',
            accessor: 'lat',
          },
          {
            Header: 'Longitude',
            accessor: 'lng',
          },
        ],
      },
    ],
    []
  )

  return (
    <Styles>
      <Table columns={columns} data={orchardData || []}/> 
    </Styles>
  )
}

export default App;

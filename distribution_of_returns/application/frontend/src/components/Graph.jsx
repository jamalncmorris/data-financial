import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import Plot from 'react-plotly.js';

function Graph() {

  const timeFrame = useSelector(state => state.data.timeFrame);

  const data = useSelector(state => state.data);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [returns, setReturns] = useState([]);
  const [lastTicker, setLastTicker] = useState('');

  useEffect(() => {
    console.log("Data on mount/update:", data);
  
    // Checking if the 'data' property within 'data' state is populated
    if (data && data.data && Object.keys(data.data).length > 0) {

      // Extracting last ticker value
      const tickers = Object.values(data.data).map(item => item.ticker);
      const lastTickerValue = tickers[tickers.length - 1];
      setLastTicker(lastTickerValue);

      const transformedReturns = Object.values(data.data).map(item => item[`Returns ${timeFrame}`]).filter(value => value != null);
      console.log("Transformed Returns:", transformedReturns);
      setReturns(transformedReturns);
      setLoading(false);
    } else {
      setLoading(true);
    }
  }, [data]); // Dependency on data
  

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  https://finance.yahoo.com/screener/unsaved/481313f0-3ce3-4f35-9758-2ba65a06b9eb
  return (
    <div>
      <Plot
        className='w-full'
        data={[
          {
            x: returns,
            type: 'histogram',
            histnorm: 'probability', // 'count' or 'probability'
            autobinx: true,
            // marker: {color: 'red'},
          },
        ]}
        layout={{title: `${lastTicker} Returns ${timeFrame} Histogram`}}
        config={{ 
          displayModeBar: false,
        }}
      />
    </div>
  );
}

export default Graph;

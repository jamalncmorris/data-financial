import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import Plot from 'react-plotly.js';

function Graph() {
  const data = useSelector(state => state.data);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [returns1D, setReturns1D] = useState([]);
  const [lastTicker, setLastTicker] = useState('');

  useEffect(() => {
    console.log("Data on mount/update:", data);
  
    // Checking if the 'data' property within 'data' state is populated
    if (data && data.data && Object.keys(data.data).length > 0) {

      // Extracting last ticker value
      const tickers = Object.values(data.data).map(item => item.ticker);
      const lastTickerValue = tickers[tickers.length - 1];
      setLastTicker(lastTickerValue);

      const transformedReturns1D = Object.values(data.data).map(item => item['Returns 1D']).filter(value => value != null);
      console.log("Transformed Returns 1D:", transformedReturns1D);
      setReturns1D(transformedReturns1D);
      setLoading(false);
    } else {
      setLoading(true);
    }
  }, [data]); // Dependency on data
  

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      <Plot
        data={[
          {
            x: returns1D,
            type: 'histogram',
            histnorm: 'probability', // 'count' or 'probability'
            autobinx: true,
            // marker: {color: 'red'},
          },
        ]}
        layout={{width: '100px', height: '300px', title: `${lastTicker} Returns 1D Histogram`}}
        config={{ 
          displayModeBar: false,
        }}
      />
    </div>
  );
}

export default Graph;
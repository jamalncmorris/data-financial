import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import { submitFormData } from '../redux/actions/dataAction';

function Form() {

  const dispatch = useDispatch();

  const [stockTicker, setStockTicker] = useState('');
  const [timeFrame, setTimeFrame] = useState('1D');

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(submitFormData(stockTicker, timeFrame)); // Dispatch the new action
    setStockTicker('');
    setTimeFrame('1D');
  };


  const handleChange = (e) => {
    setStockTicker(e.target.value);
  };

  const handleTimeFrameChange = (e) => {
    setTimeFrame(e.target.value);
  };

  return (
    <form className='py-8' id="tickerForm" onSubmit={handleSubmit}>
      <label htmlFor="ticker" className="block leading-6">
        Ticker Symbol
      </label>
      <div className="relative mt-8 rounded-md shadow-sm">
        <input
          type="text"
          name="stockTicker"
          id="stockTicker"
          className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-accent sm:text-sm sm:leading-6"
          placeholder="Enter ticker symbol 'AAPL'"
          value={stockTicker}
          onChange={handleChange}
        />
        <div className="absolute inset-y-0 right-0 flex items-center">
          <label htmlFor="time_frame" className="sr-only">
            Time Frame
          </label>
          <select
            id="time_frame"
            name="time_frame"
            className="h-full rounded-md border-0 bg-transparent py-0 pl-2 pr-7 text-gray-500 focus:ring-2 focus:ring-inset focus:ring-accent sm:text-sm"
            value={timeFrame}
            onChange={handleTimeFrameChange}
          >
            <option>1D</option>
            <option>1W</option>
            <option>1M</option>
          </select>
        </div>
      </div>

      <div className='relative mt-8'>
        <button
          type="submit"
          className="flex w-full justify-center rounded-md btn btn-accent uppercase font-bold text-white"
        >
          Submit
        </button>
      </div>
    </form>
  )
}

export default Form
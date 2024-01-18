from django.shortcuts import render
import json

from rest_framework import status
from rest_framework.response import Response
from rest_framework.views import APIView

import pandas as pd
import yfinance as yf

class GetDataView(APIView):
    def get(self, request, *args, **kwargs):
        
        stock_ticker = request.query_params.get('ticker', None)

        if stock_ticker:
            # Update the session with the new stock ticker
            request.session['last_ticker'] = stock_ticker.upper()
        else:
            # Use the last ticker from the session or a default
            stock_ticker = request.session.get('last_ticker', 'AAPL').upper()


        def data_retrieval(stock_ticker=stock_ticker, time_horizon="10y", time_frame="1d"):
            data = yf.Ticker(f"{stock_ticker}").history(period=time_horizon, interval=time_frame)
            return data
        
        data = data_retrieval()


        data = pd.DataFrame(data['Close'])
        data["ticker"] = stock_ticker
        data["Returns 1D"] = data['Close'].pct_change(periods=1) * 100
        data["Returns 1W"] = data['Close'].pct_change(periods=5) * 100
        data["Returns 1M"] = data['Close'].pct_change(periods=20) * 100
        data = data[["ticker", "Returns 1D", "Returns 1W", "Returns 1M"]]


        data = data.to_json(orient='index', date_format='iso')
        data = json.loads(data)


        return Response(data)

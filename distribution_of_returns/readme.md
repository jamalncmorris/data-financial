# Application

*By Jamal Noah Chester-Morris*  
*Jan 2024*

This project is a Probability Distribution application that allows users to input stock ticker symbols and select a time frame. The application then renders a graph of the historical percentage returns based on the selected company and time frame. The time frames include 1D for daily % return, 1W for weekly % return, and 1M for monthly % returns. All probability distributions are calculated using data from the past 10 years. This is managed in `/api/views.py`, where the application connects to the unofficial Yahoo Finance API using a Python library.

The data is processed to include percentage rate of change values. These values populate a histogram, and the application calculates a probability for the returns to be within a specified range. The probability is calculated by determining the count (the number of times an event occurs) - in this case, the number of times a stock price return falls within that range. The probability is then derived as follows: `probability = number of times a specific event occurs / total number of events`.

![Screenshot](/application/static/docs/screenshot.png)

## Technology Stack

1. Backend: Django
2. Frontend: React & Tailwind

Using Python 3.12.1, Node v20.11.0.

### Get Started

To get started with the application:

- Navigate to the application directory: `cd application/`
- Create a virtual environment: `py -m venv venv`
- Install requirements: `pip install -r requirements.txt`
- Run the server: `py manage.py runserver`

The application should not require any extra setup as the JavaScript and CSS build files have already been compiled. I have opted for Vite.js to manage my build pipeline. The `frontend/` directory houses a React application built with Vite.js. If you try to use `npm run dev` and connect to the Django DRF API endpoint, you may encounter CORS issues. To avoid this, you can modify `vite.config.js`. However, as this is a small project I coded in a day, I decided to build the frontend directly into my Django project and serve the compiled `.jsx` files from my static folder.

**NOTE: NOT SUITABLE FOR PRODUCTION**

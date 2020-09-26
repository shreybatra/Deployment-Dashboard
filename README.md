# Deployments Dashboard

This project is a simple Deployment Dashboard made in React using hooks. It shows a dashboard to track deployed tag(version) / deployment date of various microservices on real time. It also has a page where you can list all your tag releases (testing/production).

## Example screenshot

![Deployment Dashboard](./images/deployment_dashboard.jpg 'Deployment Dashboard')

## Setup

1. Clone this repository.
2. Edit `.env` file to add URLs -
   - **REACT_APP_LOGIN_URL** - POST URL to login passing `username` and `password` (base 64 encoded) in body. Accepts 2xx series response, 4xx/5xx series will raise authentication error.
   - **REACT_APP_LIST_CLIENTS** - GET URL to list clients in dashboard. Must contain `client`(name of tenant) and `url` (base url of tenant).
   - **REACT_APP_ADD_CLIENT** - POST URL to add a new client in dashboard. Must contain `client`(name of tenant) and `url` (base url of tenant) in body.
   - **REACT_APP_GET_RELEASES** - GET URL to list down tags/versions posted. Can be from any webhook of Github/Gitlab. Accepts response parameters - `userAvatar`, `userName`, `tag`, `createdOn` and `message`
3. Open the file [Home.js](./src/components/Home/Home.js) and add your services at line 8 `options` list.

## Deploy

1. Install dependencies - `npm i`
2. To build run the command - `npm run build`
3. To run app locally - `npm start`

### Requirements

1. Node version - v8.16.1
2. Npm version - 6.4.1

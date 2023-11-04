# simply-lit

## About

This repo is a collaborative project to create a basic inventory system for a company of the
same name. The problem with the current business model is when signs and other equipment are
being rented out. There is no system to keep track of availability for inventory. This can
lead to miscommunications between the business and the customers, along with some crazy last-minute
woodworking for employees.

The ability to be able to keep track of inventory will help improve customer confidence and
allow the woodworkers to be more proactive in creating new inventory before it has dimished.
This allows better communications to customers about availablility and allows employees to
better prepare for the creation of needed inventory which would improve work flow.

## Install dependencies

From the root of the directory run

```
npm install
```
This will install all of the necessary dependencies in the root, server, and client directories.
## Add environment variables

create a .env file in the root of the server directory and create the vairables
defined in the sample.env file. You will need a mongodb account and a cluster set up
to connect to the db. The connection is a uri string that you can generate when the cluster
is created.

## Run in development

To run both the client and server in development, run the following command from the
root directory

```
npm run dev
```

This command will start the server and automatically launch the client in the browser.

To run the server separately, in the root directory run

```
npm run start:server
```

To run the client separately, in the root directory run

```
npm run start:client
```
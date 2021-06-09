# RestAPIInvocation
# simple-vue-app that interacts with Open Source REST API and gets the details


This Repo demonstrates the use of the following in vuejs
1. Vue Routing
2. Components
4. Axios Library to make HTTP calls

## Prerequisites

### Install NodeJS 

Refer https://nodejs.org/en/ to install NodeJS

### Install Vue Cli 

Install Vue Cli Node Package Globally using the following Command.

```bash
npm install -g @vue/cli
```
## Cloning and Running the Application

Clone the application to local

Go into the project Folder and install the npm packages using the following command
```bash
npm install
```
Run the following command to run the application
```
npm run serve
```
The Application runs on **localhost:8080**

## Application Design

### Views and components

**detailsByZipCode** : This View Displays Latitude, Longitude, State, Country, Zipcode details of a given Zipcode. It gets the details from https://api.zippopotam.us/in/600028 where the last value mentions about a zip code of a location.

### Http Library [![Generic badge](https://img.shields.io/badge/http-axios-blue.svg)](https://www.npmjs.com/package/axios)

**axios** library is used to make http calls

### Routing

The Application has 2 endpoints

**/detailsByZipCode** : The ties to *detailsByZipCode* View

## References

**VueJS** : https://vuejs.org/v2/guide/

**vue cli** : https://cli.vuejs.org/guide/

**axios** : https://www.npmjs.com/package/axios

**vue bootstrap** : https://bootstrap-vue.js.org/docs

**vue router** : https://router.vuejs.org/guide/

#Space Apps
 [![Build Status](https://travis-ci.org/troy0820/Space_apps_express.svg?branch=master)](https://travis-ci.org/troy0820/Space_apps_express) 

##Space Apps challenge using express

###Description

This project is the express.js version of https://github.com/joshuajharris/SpaceApps2015
which is done in meteor.js for spaceapps757.  

Problem finding open data?  Help us tag data with this app.  Simply search for the data set you need and click on keywords generated from the thesarus.

##Getting Started   

```
git clone git@github.com:troy0820/Space_apps_express.git
cd Space_apps_express
npm install
```
###To run in a Docker Container 

```bash
docker build -t space .
docker run -p 3000:3000 -e PORT=3000 space
```

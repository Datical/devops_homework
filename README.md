# Liquibase SRE Homework

Please clone this repo.  Do not fork unless you want others to potentially see your work.

Please ask questions.  You can email me at jake@liquibase.com.  I anticipated 3-4 hours for this project, so please get as far as you can in that timeframe.

The assignment is to build the infrastructure, deploy the app, and put it together in a pipeline.

Please create a NOTES.md with your thought process, troubleshooting, and solutions.

## Task 1 - Infrastructure Resources

The infrastructure should be written as code.  Please create a terraform module that will create the following resources in the AWS **free tier**:

* Elastic Load Balancer
* EC2 Instance
* Postgres RDS Database
* Any required security groups

### Infrastructure Requirements

* The load balancer should only allow access to port 80.
* The EC2 instance should only allow access from the load balancer
* The database should only allow access from the EC2 instance
* We should be alerted if the ELB health check is not passing.

## Task 2 - Application

The application is a simple to-do list app.  There are bugs that need to be fixed:

1. The Dockerfile for the api (todo-api) is inefficient.  Convert it to a multi-stage docker build and make it as efficient/small as possible. If done correctly the final image should be < 300 MB.
2. The docker-compose file in the root of the project has 2 bugs.  Fix them.  You should be able to run a `docker-compose up` to start the application.  If the application is working you should be able to browse to http://localhost and create a to-do list.

## Task 3 - Application Deployment

Deploy your docker containers to the EC2 instance created above.

## Task 4 - Production Database

* The database is currently a local postgres docker container.  This is fine for local development, but not suitable for production.  Make any necessary changes required to use the RDS Database you created instead.

### API Config

Many of the APIs configuration options can be found in `todo-api/src/main.ts`.

The API Expects a Postgres Database to be running. The expected properties of this DB can be found in `todo-api/src/database/database.providers.ts`

### Client Config

The Client Application's configurations can be found at `todo-client/src/environments/environment.**.ts`.

## Task 5 - Pipeline

Create a Github Actions pipeline that does the following:

* On commits to the master branch, apply any terraform changes and then re-deploy the updated app.

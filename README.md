# Liquibase DevOps Homework

Please clone this repo.  Do not fork unless you want others to potentially see your work.

Please ask questions.  You can email me at jake@liquibase.com.

The assignment is to troubleshoot the app locally, build the infrastructure, and deploy it.

Please create a NOTES.md with your thought process, troubleshooting, and solutions.  The goal here is not to "weed someone out" but rather to see your thought process when dealing with a typical DevOps-y day :)

## Task 1 - Application

The application is a simple to-do list app.  There are bugs that need to be fixed:

1. The Dockerfile for the api (todo-api) is inefficient.  Convert it to a multi-stage docker build and make it as efficient/small as possible. If done correctly the final image should be < 300 MB.
2. The docker-compose file in the root of the project has 2 bugs.  Fix them.  You should be able to run a `docker-compose up` to start the application.  If the application is working you should be able to browse to http://localhost and create a to-do list.

## Task 2 - Infrastructure Resources

The infrastructure should be written as code.  Please create the following resources in the AWS **free tier**.  Note that using existing public modules is perfectly acceptable:

* Elastic Load Balancer
* EC2 Instance
* Postgres RDS Database
* Any required security groups

### Infrastructure Requirements

* The load balancer should only allow access to port 80.
* The EC2 instance should only allow access from the load balancer
* The database should only allow access from the EC2 instance
* We should be alerted if the ELB health check is not passing.

## Task 3 - Application Deployment

Deploy your docker containers to the EC2 instance created above.

## Task 4 - Production Database

* The database is currently a local postgres docker container.  This is fine for local development, but not suitable for production.  Make any necessary changes required to use the RDS Database you created instead.


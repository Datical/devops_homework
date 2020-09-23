CREATE USER "yourusername" WITH PASSWORD 'yoursecurepassword';
CREATE DATABASE "uat_dev" WITH OWNER "yourusername";
GRANT ALL PRIVILEGES ON DATABASE "uat_dev" TO "yourusername";
\connect "uat_dev";
CREATE SCHEMA app_schema AUTHORIZATION "postgres";
CREATE TABLE app_schema.todo_items (
  ID SERIAL PRIMARY KEY,
  description VARCHAR(255)
);
GRANT USAGE ON SCHEMA app_schema TO "yourusername";
GRANT USAGE, SELECT ON ALL SEQUENCES IN SCHEMA app_schema to "yourusername";
GRANT ALL PRIVILEGES ON ALL TABLES IN SCHEMA app_schema to "yourusername";

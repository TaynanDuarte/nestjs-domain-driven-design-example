/**
 * MongoDB allow you to create js script to manipulate data.
 * This file does that.
 *
 * This script create an new data base called nestjs_ddd_db with
 * a new collection called users
 *
 * The docker-compose.yml file syncs this file with one that has
 * the same name in the path /docker-entrypoint-initdb.d/ inside container
 *
 * https://www.mongodb.com/docs/manual/tutorial/write-scripts-for-the-mongo-shell/
 */

db.getSiblingDB('nestjs_ddd_db');
db.createCollection('users');

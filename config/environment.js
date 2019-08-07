"use strict";

/* eslint-disable no-process-env */

const environment = process.env.NODE_ENV ? process.env.NODE_ENV.toLowerCase() : "development";

// Validate environment
const validEnvironments = new Set(["development", "test", "production"]);
if (!validEnvironments.has(environment)) {
  throw new Error(`Invalid environment: ${environment}`);
}

// Load env file only when development env
if (environment === "development") {
  require("dotenv").config();
}
const awsAccessKey = process.env.AWS_ACCESS_KEY ? process.env.AWS_ACCESS_KEY : "";
const awsSecretKey = process.env.AWS_SECRET_KEY ? process.env.AWS_SECRET_KEY : "";
const awsRegion = process.env.AWS_REGION ? process.env.AWS_REGION : "";
const pollerIntervalMilliseconds = process.env.POLLER_INTERVAL_MILLISECONDS
  ? Number(process.env.POLLER_INTERVAL_MILLISECONDS)
  : 10000;

const logLevel = process.env.LOG_LEVEL || "info";

module.exports = {
  environment,
  pollerIntervalMilliseconds,
  logLevel,
  awsAccessKey,
  awsSecretKey,
  awsRegion
};

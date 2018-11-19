# Jyoti Server

This repository holds information of the NodeJS Server deployed using Firebase and functions serving via Firebase Cloud Functions. The server hosts the Jyoti Platform's website as well as a quiz API service tailor made for Jyoti Client Application.

## Prerequisites

Please ensure configuring these specifications before proceeding:
+ NodeJS 6 or above
+ Firebase CLI

## API Endpoints

#### /quiz.json
Returns quiz data in JSON format to be used by the Jyoti Clent Application.

#### /quiz-cached
Returns a cached copy of the quiz JSON. To be used in case of optimized quiz calls and future scaling purposes.

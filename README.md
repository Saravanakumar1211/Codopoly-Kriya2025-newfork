# Codopoly-Kriya2025

## Table of Contents

1. [Event Flow](#event-flow)
2. [API Endpoints](#api-endpoints)

## Event Flow

### Registration/Login

![team_register](images/README/team_register.png)

### Debugging Phase

![debugging_phase](images/README/debugging_phase.png)

### Auctioning Phase

#### Pre-Auction:

![pre-auction](images/README/pre-auction.png)

#### Auctioning:

![auctioning_phase](images/README/auctioning_phase.png)

<a id = "eventflow"><a/>

## API Endpoints

### Teams

| Endpoint             | Method | Purpose                                 | Request Payload | Status |
| -------------------- | ------ | --------------------------------------- | --------------- | ------ |
| /teams/auth/register | POST   | Register a new team (with 2–4 members) |                 | tbd    |
| /teams/auth/login    | POST   | Team Login                              |                 | tbd    |
| /teams/getall        | GET    | Get all the team details(leaderboards)  |                 | tbd    |
| /teams/{team_id}     | GET    | Get the specific team details           |                 | tbd    |

Note : Maybe include assigning POCs the moment a team registers - will have to decide
Maybe remove /teamid

### Debugging phase

| Endpoint       | Method | Purpose                   | Request Payload | Status |
| -------------- | ------ | ------------------------- | --------------- | ------ |
| /debug/:teamid | GET    | Get team's part of code   |                 | tbd    |
| /debug/submit  | POST   | Submit their added debugs |                 | tbd    |

### Pre Auction phase

| Endpoint   | Method | Purpose                          | Request Payload | Status |
| ---------- | ------ | -------------------------------- | --------------- | ------ |
| /bank | GET    | Get the list of pocs in the bank |                 | tbd    |

### Auctioning phase

| Endpoint        | Method | Purpose                          | Request Payload | Status |
| --------------- | ------ | -------------------------------- | --------------- | ------ |
| /auction/bid    | POST   | Place bid on a POC               |                 | tbd    |
| /auction/status | GET    | Current active(or status of) POC |                 | tbd    |
| /auction/win    | GET    |                                  |                 | tbd    |

### Admin

| Endpoint      | Method | Purpose                                                        | Request Payload | Status |
| ------------- | ------ | -------------------------------------------------------------- | --------------- | ------ |
| /admin/start  | POST   | Start/stop debugging/auction phase                             |                 | tbd    |
| /admin/reveal | POST   | Reveal the pocs at the start of a new debug phase(idk for now) |                 | tbd    |

<a id = "apiendpoints"><a/>


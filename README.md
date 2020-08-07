# CodeCave

## Description 
A social space to conduct job searches while being able to connect with other Boot Camp Graudates.

---

### Table of Contents

- [Value Proposal](#value-proposal)
- [User Stories](#user-stories)
- [Concept](#concept)
  - [Design](#design)
  - [Wireframes](#wireframes)
  - [MVP](#mvp)
- [Challenges](#Challenges)
- [Planned Enhancements](#planned-enhancements)
- [Tech Stack](#tech-stack)
- [Team Members](#team-members)
- [Project Board](https://github.com/Group-5-Project-2/CodeCave/projects/1)

---


## Value Proposal

- Allows unregistered users to view job search and register
- Allows users to securely login then logOut
- Allows users to build a profile
- Allows users to search for job listings based on profile skills and other data
- View data on job titles such as average salary
- Channels for users to make posts on various topics.
---



## User Stories

```
As a coding bootcamp student
I WANT to search for specific job opportunities
WHILE in a space where I can connect with a community of bootcamp alumni
```

---

## Concept

A social media application that facilitates a community of coding bootcamp graduates.

#### Design

<details>
<summary>Main Views</summary>
<img src="client\public\images\LandingDesign.png" width = "600px">
</details>

<details>
<summary>Profile View</summary>
Coming soon...
</details>

---


##### Wireframes

<details>
  <summary>Flow Chart</summary>
  <img src="client\public\images\codecave.png" width = "600px">
</details>

<details>
  <summary>Profile Page Diagram</summary>
  <img src="client\public\images\ProfilePageDiagram.png" width = "600px">
</details>

<details>
<summary>Entity Relationship Diagram</summary>
<img src="client\public\images\code-cave-erd.png" width = "600px">
</details>

---

#### MVP

- User can register after validating email
- User can login with user name and password
- Upon successful login, user will gain access to dashboard
- User will be able to view and edit their own Profile
- User will be able to view and manage a friend list
- User can view list of channels
- User can view and create new posts in specific channels
- User can search for jobs in search bar
- User can view and manage their own posts
---

## Tech Stack

- React.js.
- React Bootstrap
- Sequelize
- Node and Express server
- Axios, bcript, Json Web Token
- MySQL database with Sequelize ORM.
- To be deployed with [Heroku](https://www.heroku.com/platform)
---


## Challenges

- Found React and React Bootstrap documention lacking
- Frequent code breaks highlighting the sensitivity of syntax and numerous options to create desired outcome
- Forming components requirements in order to work with the backend 
- Challenges learning to use state and props
- Breaking tasks into smaller issues/branches to easily close and share with team members - difficult to break tasks up until more is understood
- Challenged to remember to add Axios to package and then spent hours debugging before remembering to add a proxy.
- Started with PassPort but moved to Cors with bcript and json Web Token
- Difficult tracking/maintaining changes each member made to get code to work without impacting other team member's work and then reconnecting those "links" at the end
---


## Planned Enhancements
- Authentication of university bootcamp to generate key for registration
- Messaging between users/friends
- User will be awarded points based on quantity and quality of posts
- User can upvote or downvote other user's posts
- User can view their accumulated points on dashboard

---


## Team Members

- <a href="https://github.com/CGMcBride">Conner McBride</a>
- <a href="https://github.com/chong0810">ChangYeon Hong</a>
- <a href="https://github.com/dianecandler">Diane Candler</a>
- <a href="https://github.com/JDMartinez1531">Joshua Martinez</a>

---

[Table of Contents](#table-of-contents)
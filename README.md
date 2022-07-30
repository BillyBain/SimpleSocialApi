# SimpleSocialApi

## Table of Contents
- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [Links](#links)
- [Test Instructions](#test_instructions)
- [Thoughts](#thoughts)
- [Screenshot](#screenshot)

# Description
A simple api to add users and thoughts. Also you can add reactions to thoughts.

# Installation

1: Pull from: https://github.com/BillyBain/SimpleSocialApi

2: With an integrated terminal run `npm i` to install dependencies

3: In the same terminal use `npm run seed` to use test DB.

4: Then `npm start` to engage the server api.

5: Finally using a program like `Insomnia` to check out the code.

# Usage
Free for anyone to use or edit!

# Links
Github Repo: https://github.com/BillyBain/SimpleSocialApi

Walkthrough Video: https://watch.screencastify.com/v/Ow586ux2txgDvUO8Ya3z 

# Test Instructions
Using the URLs like `http://localhost:3001/api/users` and `http://localhost:3001/api/thoughts` with the `GET` method you can see the seeded data. You can `POST`, `PUT`, `DELETE` using these routes some with `/:id` after. If you would like to add a reaction use the `http://localhost:3001/api/thoughts/:id/reaction` route with the `POST` method. To delete using the `DELETE` method add the `reactionId` to the end of the previous route.

# Thoughts
I enjoy the NoSQL system and this has helped me understand databases at a higher capacities. I struggled a bit with linking the databases and was glad when i finally saw the reactions on the thoughts.

# Screenshot
![Insomnia - New Document – New Request 7_29_2022 9_41_59 PM](https://user-images.githubusercontent.com/100814286/181865724-a25a5687-c1b6-4d3e-bf08-b5b9e1da9492.png)


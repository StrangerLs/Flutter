


## Overview

**Flutter** is a full-stack react on rails app that matches potential bird owners and current bird owners with available birds as pets. This website will allow users to make a profile and search for potential birds to be adopted based on specific criteria. Users will be able to favorite potential birds, interact with bird profiles and find information on types of birds. Users will also be able to post birds for adoption in their area and recommend other resources.


<br>

## MVP

**Flutter** MVP Will include 
 - Login/sign-up/sign-out pages for users
 - Bird info pages/will include bird characteristics
 - Page for posting birds 
 - Landing page with mission statement
 

<br>

### Goals

- Ability to Create a new bird
- Lists out all created birds and info
- ability to Update bird info/change availability of bird
- Deleting birds who have been adopted
- User Table
- Bird Table
- Bird Characteristic table 
- one to many user to bird
- one to many bird to characteristic
<br>

### Libraries and Dependencies


|     Library      | Description                                |
| :--------------: | :----------------------------------------- |
|      React       | _Javascript library for ui_ |
|      Axios       | _Makes Api calls and accesses data_ |
|   React Router   | _Routing Library_ |
|   Ruby on Rails  | _Backend framework MVC_ |
|      Pry         | _Ruby repl_ |

<br>

### Client (Front End)

#### Wireframes
- Desktop Landing Pre signup
![Screen Shot 2021-04-25 at 7 01 44 PM](https://user-images.githubusercontent.com/78058810/116102386-e80fe780-a66b-11eb-9b37-7b7ba02b396e.png)


- Desktop Landing
- 
![Screen Shot 2021-04-26 at 8 48 27 AM](https://user-images.githubusercontent.com/78058810/116102814-41781680-a66c-11eb-84c3-3af8b9e657ca.png)


- Desktop Sign in

![Screen Shot 2021-04-25 at 7 36 58 PM](https://user-images.githubusercontent.com/78058810/116017719-9b8dc300-a5fd-11eb-92ec-fc7385bdd85e.png)

- Broad Bird

![Screen Shot 2021-04-25 at 7 42 38 PM](https://user-images.githubusercontent.com/78058810/116018040-6635a500-a5fe-11eb-9018-5475fd282942.png)




- Specific bird

![Screen Shot 2021-04-25 at 7 37 56 PM](https://user-images.githubusercontent.com/78058810/116017763-bf510900-a5fd-11eb-9b6d-8853a1958cf3.png)

- edit add!
- [Screen Shot 2021-04-26 at 8 38 00 AM](https://user-images.githubusercontent.com/78058810/116101176-daa62d80-a66a-11eb-94ce-dd5a05fd622b.png)



-bird friends

![Screen Shot 2021-04-25 at 7 10 33 PM](https://user-images.githubusercontent.com/78058810/116016464-ead1f480-a5f9-11eb-970d-dca6f534921c.png)

-bird care

![Screen Shot 2021-04-25 at 7 11 01 PM](https://user-images.githubusercontent.com/78058810/116016487-fae9d400-a5f9-11eb-856f-c3371bb603e7.png)

-Supplies

![Screen Shot 2021-04-25 at 7 11 38 PM](https://user-images.githubusercontent.com/78058810/116016513-10f79480-a5fa-11eb-9fdd-d7c39e20eaab.png)

-Create Bird

![Screen Shot 2021-04-25 at 7 38 26 PM](https://user-images.githubusercontent.com/78058810/116017792-d0017f00-a5fd-11eb-8edd-27b491dc13d5.png)

- Mobile landing page
![Screen Shot 2021-04-26 at 9 51 29 AM](https://user-images.githubusercontent.com/78058810/116112701-09290600-a675-11eb-9dc4-fccb49adb56e.png)



#### Component Tree

![Screen Shot 2021-04-26 at 8 42 24 AM](https://user-images.githubusercontent.com/78058810/116101856-6e77f980-a66b-11eb-9dcf-176e5dc37b23.png)


#### Component Architecture

``` structure

src
|__ components/
      |__ Header.jsx
      |__ BirdInfo.jsx
      |__ Birds.jsx
|__ Containers
      |__ MainContainer.jsx
|__ Layout
      |__Layout.jsx
|__ Screens
      |__ {SignUp.jsx, SignUp.Css}
      |__ {SignIn.jsx, SignIn.Css}
      |__ {GeneralBirds.jsx, GeneralBirds.Css}
      |__ {SpecificBird.jsx, SpecificBird.Css}
      |__ {BirdCare.jsx, BirdCare.Css}
      |__ {Supplies.jsx, Supplies.Css}
      |__ {BirdCreate.jsx, BirdCreate.Css}
      |__ {Home.jsx, Home.Css}   
|__ services/
      |__ api_config.js
      |__ birds.js

```

#### Time Estimates


| Task                | Priority | Estimated Time | Time Invested | Actual Time |
| ------------------- | :------: | :------------: | :-----------: | :---------: |
| Proposal            |    H     |     4 hrs      |     2 hrs     |    3 hrs    |
| Backend file structure setup |    H     |     3 hrs      |     1 hrs     |     TBD     |
| Create tables |    H     |     2 hrs      |     1 hrs     |     TBD     |
| Api Call setup|    H     |     3 hrs      |     3 hrs     |     TBD     |
| Route setup |    H     |     3 hrs      |     3 hrs     |     TBD     |
| DB seed |    H     |     1 hrs      |     2 hrs     |     TBD     |
| Create Frontend file structure |    H     |     3 hrs      |     1 hrs     |     TBD     |
| Hookup backend to front end |    H     |     3 hrs      |     1 hrs     |     TBD     |
| Homepage/styling |    H     |     5 hrs      |     2 hrs     |     TBD     |
| Navbar/styling |    H     |     3 hrs      |     2 hrs     |     TBD     |
| Sign in/styling |    H     |     2 hrs      |     2 hrs     |     TBD     |
| Sign up/styling |    H     |     2 hrs      |     2 hrs     |     TBD     |
| General bird page/styling |    H     |     4 hrs      |     2 hrs     |     TBD     |
| Specific bird page/styling |    H     |     4 hrs      |     2 hrs     |     TBD     |
| Create Bird page/styling |    H     |     4 hrs      |     2 hrs     |     TBD     |
| Bird care page/styling |    L     |     4 hrs      |     2 hrs     |     TBD     |
| supplies page/styling |    L     |     4 hrs      |     2 hrs     |     TBD     |
| TOTAL               |          |     45 hrs      |     3 hrs     |     TBD     |


<br>

### Server (Back End)

#### ERD Model


[ERD](https://drive.google.com/file/d/1hgZiIzRwPfwnU6vu9sEkAFjTkhHPbiI1/view?usp=sharing)
<br>

***

## Post-MVP

- bird care page
- supplies page
- potential comment system for users on birds
- bird rating system
- cart like feature for favoriting birds

***

## Code Showcase

> Use this section to include a brief code snippet of functionality that you are proud of and a brief description.

## Code Issues & Resolutions

> Use this section to list of all major issues encountered and their resolution.

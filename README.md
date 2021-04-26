


## Overview

**Flutter** is a full-stack react on rails app that matches potential bird owners and current bird owners with available birds as pets. This website will allow users to make a profile and search for potential birds to be adopted based on specific criteria. Users will be able to favorite potential birds, interact with bird profiles and find information on types of birds. Users will also be able to post birds for adoption in their area and recommend other resources.


<br>

## MVP

**Flutter** MVP Will include 
 - Responsive, styled UI 
 - Login/sign-up/sign-out pages for users
 - Bird info pages/will include bird characteristics/care
 - Page for posting birds up for adoption in the area
 - Resource page for local bird related busineses
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
|      React       | _Lorem ipsum dolor sit amet, consectetur._ |
|      Axios       | _Lorem ipsum dolor sit amet, consectetur._ |
|   React Router   | _Lorem ipsum dolor sit amet, consectetur._ |
|      Ruby        | _Lorem ipsum dolor sit amet, consectetur._ |
|      Rails       | _Lorem ipsum dolor sit amet, consectetur._ |
|      Pry         | _Lorem ipsum dolor sit amet, consectetur._ |

<br>

### Client (Front End)

#### Wireframes

- Desktop Landing

![Screen Shot 2021-04-25 at 7 05 25 PM](https://user-images.githubusercontent.com/78058810/116016211-33d57900-a5f9-11eb-8e85-9b1bb5d42430.png)

- Desktop Sign in

![Screen Shot 2021-04-25 at 7 36 58 PM](https://user-images.githubusercontent.com/78058810/116017719-9b8dc300-a5fd-11eb-92ec-fc7385bdd85e.png)

- Broad Bird

![Screen Shot 2021-04-25 at 7 42 38 PM](https://user-images.githubusercontent.com/78058810/116018040-6635a500-a5fe-11eb-9018-5475fd282942.png)




- Specific bird

![Screen Shot 2021-04-25 at 7 37 56 PM](https://user-images.githubusercontent.com/78058810/116017763-bf510900-a5fd-11eb-9b6d-8853a1958cf3.png)


-bird friends

![Screen Shot 2021-04-25 at 7 10 33 PM](https://user-images.githubusercontent.com/78058810/116016464-ead1f480-a5f9-11eb-970d-dca6f534921c.png)

-bird care

![Screen Shot 2021-04-25 at 7 11 01 PM](https://user-images.githubusercontent.com/78058810/116016487-fae9d400-a5f9-11eb-856f-c3371bb603e7.png)

-Supplies

![Screen Shot 2021-04-25 at 7 11 38 PM](https://user-images.githubusercontent.com/78058810/116016513-10f79480-a5fa-11eb-9fdd-d7c39e20eaab.png)

-Create Bird

![Screen Shot 2021-04-25 at 7 38 26 PM](https://user-images.githubusercontent.com/78058810/116017792-d0017f00-a5fd-11eb-8edd-27b491dc13d5.png)




#### Component Tree

[Component Tree Sample](https://gist.git.generalassemb.ly/davidtwhitlatch/414107e2560ae0bb65e233570f2fe056#file-component-tree-png)

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
| Proposal            |    H     |     1 hrs      |     2 hrs     |    3 hrs    |
| Backend file structure setup |    H     |     3 hrs      |     1 hrs     |     TBD     |
| Create tables |    H     |     2 hrs      |     1 hrs     |     TBD     |
| Api Call setup|    H     |     3 hrs      |     2 hrs     |     TBD     |
| Route setup |    H     |     3 hrs      |     3 hrs     |     TBD     |
| DB seed |    H     |     1 hrs      |     1 hrs     |     TBD     |
| Create Frontend file structure |    H     |     3 hrs      |     1 hrs     |     TBD     |
| Hookup backend to front end |    H     |     3 hrs      |     1 hrs     |     TBD     |
| Homepage/styling |    H     |     5 hrs      |     1 hrs     |     TBD     |
| Navbar/styling |    H     |     3 hrs      |     1 hrs     |     TBD     |
| Sign in/styling |    H     |     2 hrs      |     1 hrs     |     TBD     |
| Sign up/styling |    H     |     2 hrs      |     1 hrs     |     TBD     |
| General bird page/styling |    H     |     4 hrs      |     1 hrs     |     TBD     |
| Specific bird page/styling |    H     |     4 hrs      |     1 hrs     |     TBD     |
| Create Bird page/styling |    H     |     4 hrs      |     1 hrs     |     TBD     |
| Bird care page/styling |    L     |     4 hrs      |     1 hrs     |     TBD     |
| supplies page/styling |    L     |     4 hrs      |     1 hrs     |     TBD     |
| TOTAL               |          |     42 hrs      |     3 hrs     |     TBD     |


<br>

### Server (Back End)

#### ERD Model

> Use this section to display an image of a computer generated ERD model. You can use draw.io, Lucidchart or another ERD tool.

[ERD Sample](https://drive.google.com/file/d/1kLyQTZqfcA4jjKWQexfEkG2UspyclK8Q/view)
<br>

***

## Post-MVP

> Use this section to document ideas you've had that would be fun (or necessary) for your Post-MVP. This will be helpful when you return to your project after graduation!

***

## Code Showcase

> Use this section to include a brief code snippet of functionality that you are proud of and a brief description.

## Code Issues & Resolutions

> Use this section to list of all major issues encountered and their resolution.

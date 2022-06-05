# SESAMm fullstack technical interview

![image](https://user-images.githubusercontent.com/56207146/172072322-80fa02c3-aab9-4b87-991b-4cacd72ac19f.png)

## Table of Contents

- [SESAMm fullstack technical interview](#sesamm-fullstack-technical-interview)
  - [Table of Contents](#table-of-contents)
  - [Starting the project](#starting-the-project)
    - [Downloading and running the project](#downloading-and-running-the-project)
      - [Setup the automatic project launch](#setup-the-automatic-project-launch)
      - [Manual project launch](#manual-project-launch)
  - [Project](#project)
    - [Project features](#project-features)
      - [Home page](#home-page)
      - [Users list](#users-list)
      - [Profile page](#profile-page)
    - [Project tree](#project-tree)
    - [Data schemes](#data-schemes)

## Starting the project

### Downloading and running the project

- Clone / Download this project
- Open _Visual Studio Code_
- Open a CLI and install the dependencies with `npm run init`

#### Setup the automatic project launch

Theses steps makes the project launch itself automatically and only has to be
done once

- Go to the **"technical-test.code-workspace"** file and click on the
  "Open Workspace" button

  ![image](https://user-images.githubusercontent.com/56207146/160180330-3c543095-cc5b-477f-8d91-0f6a7f5adf80.png)

- Once the workspace is open, open the Command Palette and write down
  "`>Tasks: Run Task`". Select the option and then select "`Run the project`"

  ![image](https://user-images.githubusercontent.com/56207146/160179776-10679033-3a03-4f41-b5c3-83cb8e21542b.png)

- A terminal will open and run the command. On this point onwards, each time
  you open the workshop, the tasks will automatically run.

> :information_source: A prompt might ask your authorization to accept or deny
> the automatic launch.

#### Manual project launch

Open a terminal and type in :

- "`npm run start:client`" (front-end -> port 3000)
- "`npm run start:server`" (back-end -> port 3001)

---

## Project

### Project features

Here are some of the main features of this app (front-end side):

#### Home page

A sober landing page that will greet you!
Nothing much on a technical level here, though :)

There's also a navigation bar that allows you to go to the list of users...

#### Users list

![image](https://user-images.githubusercontent.com/56207146/172072356-330d007c-c553-4375-8320-58ed17f6bdf9.png)


Here, the users are listed inside a table. You can sort them or search for someone. A the bottom of the page, you can choose the number of user per page thanks to the pagination system.

Select your user and click on see profile to go to their profile page...

#### Profile page

![image](https://user-images.githubusercontent.com/56207146/172072362-82245197-97dc-4318-bcf0-cc0ec9b11d04.png)

Finally, each user gets their profile page with their information displayed (personnal informations as well as their address)

### Project tree

```tree
📦 root
├─ .gitignore
├─ .vscode
│  └─ tasks.json
├─ README.md
├─ Technical Test - Fullstack apprentice - Data_SQL.pdf
├─ package.json
├─ technical-test-back
│  ├─ app.js
│  ├─ config.js
│  ├─ db
│  │  └─ database.db
│  ├─ package-lock.json
│  ├─ package.json
│  ├─ routes
│  │  ├─ index.js
│  │  └─ users.routes.js
│  ├─ services
│  │  ├─ db.js
│  │  └─ users.js
│  └─ utils
│     └─ consoleMessage.js
├─ technical-test-data
│  ├─ create_and_insert_database.py
│  └─ data
│     ├─ addresses.csv
│     └─ users.csv
├─ technical-test-front
│  ├─ .eslint.yml
│  ├─ .eslintrc.yml
│  ├─ .gitignore
│  ├─ .prettierrc.yaml
│  ├─ README.md
│  ├─ jest-puppeteer.config.js
│  ├─ jest.config.js
│  ├─ package-lock.json
│  ├─ package.json
│  ├─ public
│  │  ├─ assets
│  │  │  └─ bg.mp4
│  │  ├─ favicon.ico
│  │  ├─ index.html
│  │  ├─ logo192.png
│  │  ├─ logo512.png
│  │  ├─ manifest.json
│  │  ├─ meta_image.png
│  │  └─ robots.txt
│  ├─ src
│  │  ├─ @types
│  │  │  └─ assets
│  │  │     └─ index.d.ts
│  │  ├─ App.css
│  │  ├─ App.test.tsx
│  │  ├─ App.tsx
│  │  ├─ core
│  │  │  ├─ components
│  │  │  │  ├─ Arrow.tsx
│  │  │  │  ├─ BackgroundVideo.tsx
│  │  │  │  ├─ BlueBorderBackground.tsx
│  │  │  │  ├─ Layout.tsx
│  │  │  │  ├─ Logo.tsx
│  │  │  │  ├─ Navbar.tsx
│  │  │  │  ├─ PageTitle.tsx
│  │  │  │  ├─ PartTitle.tsx
│  │  │  │  └─ index.ts
│  │  │  ├─ fonts
│  │  │  │  ├─ Archia-Regular.otf
│  │  │  │  ├─ BasierSquareMono-Regular.otf
│  │  │  │  ├─ Bebas Neue Bold.otf
│  │  │  │  ├─ Hack-Bold.ttf
│  │  │  │  ├─ Hack-BoldOblique.ttf
│  │  │  │  ├─ Hack-Regular.ttf
│  │  │  │  ├─ Hack-RegularOblique.ttf
│  │  │  │  ├─ Kenteken.ttf
│  │  │  │  └─ MonoLisa-Regular.otf
│  │  │  └─ index.ts
│  │  ├─ e2e.test.ts
│  │  ├─ index.css
│  │  ├─ index.tsx
│  │  ├─ landingPage
│  │  │  ├─ components
│  │  │  │  ├─ LandingPage.tsx
│  │  │  │  ├─ LandingPageGreeting.tsx
│  │  │  │  └─ index.ts
│  │  │  ├─ index.ts
│  │  │  └─ tests
│  │  │     └─ LandingPage.test.tsx
│  │  ├─ loadingScreen
│  │  │  ├─ assets
│  │  │  │  ├─ index.ts
│  │  │  │  └─ spinner.svg
│  │  │  ├─ components
│  │  │  │  ├─ LoadingScreen.tsx
│  │  │  │  └─ index.ts
│  │  │  └─ index.ts
│  │  ├─ logo.svg
│  │  ├─ react-app-env.d.ts
│  │  ├─ routeManager
│  │  │  ├─ RouteManager.tsx
│  │  │  └─ index.ts
│  │  ├─ services
│  │  │  ├─ index.js
│  │  │  └─ user.service.ts
│  │  ├─ setupTests.ts
│  │  ├─ userList
│  │  │  ├─ components
│  │  │  │  ├─ UserList.tsx
│  │  │  │  ├─ UsersTable.tsx
│  │  │  │  └─ index.ts
│  │  │  ├─ hooks
│  │  │  │  ├─ index.tsx
│  │  │  │  ├─ useUserList.tsx
│  │  │  │  └─ useUserTable.tsx
│  │  │  ├─ index.ts
│  │  │  ├─ interfaces
│  │  │  │  ├─ UserListData.ts
│  │  │  │  └─ index.ts
│  │  │  └─ tests
│  │  │     └─ UserList.test.tsx
│  │  └─ userProfile
│  │     ├─ components
│  │     │  ├─ Userprofile.tsx
│  │     │  └─ index.ts
│  │     ├─ hooks
│  │     │  ├─ index.ts
│  │     │  └─ useUserProfile.tsx
│  │     ├─ index.ts
│  │     ├─ interfaces
│  │     │  ├─ UserData.ts
│  │     │  └─ index.ts
│  │     └─ tests
│  │        └─ UserProfile.test.tsx
│  ├─ tsconfig.json
│  └─ yarn.lock
└─ technical-test.code-workspace
```

### Data schemes

```sql
    `users` table schema:
        id int,
        firstName string,
        lastName string,
        gender string,
        email string,
        age int,
        eyeColor string,
        phone string,
        registered string
```

```sql
    `addresses` table schema:
        id int,
        streetNumber int,
        street string,
        postalCode int,
        city string,
        userId Foreign key users.id
```

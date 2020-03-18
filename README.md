# CHITTR

## Installation

#### Code download and setup

The code can be easily downloaded from GitHub.
Using the terminal/command window:

```bash
#clone code from repository:
$ git clone https://github.com/Gingerbread89fp/mad_2cwk50.git

#enter the new directory
$ cd mad_2cwk50

#install packages and dependencies needed
$ npm install
```

#### Android Studio setup

Open Android studio import the android directory and build the project.
The ADV (Android Virtual Device) used is a Pixel 2 with API 28 and Android 9.0.

After the build had finished, start the AVD.


#### Server setup

If the server is not running yet enter manually the credential for connection with the database in the config > config.js file
Open a new terminal window:

```bash
#enter the server directory
$ cd chittr_server_v6

#run the server
$ npm start
```
On a command window inside the server directory run:

```bash
#create the tables in the database and populate them with initial data
$ npm test
```

#### Run emulator and app

On command window inside the project directory run:

```bash
$ react-native run-android
```
It will open the metro bundler terminal and will install the app on the emulator.

## Usage

You can navigate through the app using the bottom tab navigation passing from the Home page to the Profile or Search.
If no login is made actions enabled are limited and the user will be asked to login before posting Chits, viewing the profile or following other user for example.

From the Home click the top icon to login. From there you will have the option to register if no profile had been created yet.

Once registered and logged in the user can fully use the app viewing all Chits posted, following other users, posting Chits with location tag or a picture attached to it. Chits can also be saved in the draft to be posted later.

Drafts can be updated, deleted or posted.

Each user can also update their profile details and unfollow any of the other chitters they were previously following.
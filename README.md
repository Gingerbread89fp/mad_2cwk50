# CHITTR

## Installation

### Code download and setup

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

### Android Studio setup

Open Android studio import the android directory and build the project.
The ADV (Android Virtual Device) used is a Pixel 2 with API 28 and Android 9.0.

After the build had finished, start the AVD.


### Server setup

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

### Run emulator and app



# CHITTR

<p align="center">
<img 
    src='https://github.com/Gingerbread89fp/mad_2cwk50/blob/master/assets/images/appLogo.png' 
    width=20% 
/>

A totally original, unique and non-plagiarised platform for microblogging. Users who sign up for an account can publish ‘Chits’ – short, textual based posts of no more than 141 characters. Users can also follow their friends and peers to keep updated with what their friends are Chitting about.</p>


## Visual

Few print screens from the application

<img 
    src='https://github.com/Gingerbread89fp/mad_2cwk50/blob/master/assets/gitImgs/login.png' 
    width=18% alt='login screen'
/>
<img 
    src='https://github.com/Gingerbread89fp/mad_2cwk50/blob/master/assets/gitImgs/chits.png' 
    width=18% alt='home page with random chits preview'
/>
<img 
    src='https://github.com/Gingerbread89fp/mad_2cwk50/blob/master/assets/gitImgs/search.png' 
    width=18% alt='search page'
/>
<img 
    src='https://github.com/Gingerbread89fp/mad_2cwk50/blob/master/assets/gitImgs/follow.png' 
    width=18% alt='follow user'
/>
<img 
    src='https://github.com/Gingerbread89fp/mad_2cwk50/blob/master/assets/gitImgs/profile.png' 
    width=18% alt='profile page'
/>



## Installation


#### Code download and setup

The code can be downloaded from GitHub.

Use the terminal/command window and run:

```bash
#clone code from repository:
$ git clone https://github.com/Gingerbread89fp/mad_2cwk50.git

#enter the new directory
$ cd mad_2cwk50

#install packages and dependencies needed
$ npm install
```

#### Android Studio setup

Open Android studio import the android directory inside the mad_2cwk50 project and build it.
The ADV (Android Virtual Device) used is a Pixel 2 with API 28 and Android 9.0.

After the build had finished, start the AVD.

#### Run emulator and app

On command window making sure you are still located inside the mad_2cwk50 directory run:

```bash
$ react-native run-android
```
It will open the metro bundler terminal and will install the app on the emulator.
The app should be open automatically. If not look for "Chittr" between the app list of the emulator.


## Usage


You can navigate through the app using the bottom tab navigation passing from the Home page to the Profile or Search.
If no login is made actions enabled are limited and the user will be asked to login before posting Chits, viewing the profile or following other user for example.

From the Home click the top icon to login. From there you will have the option to register if no profile had been created yet.

Once registered and logged in the user can fully use the app viewing all Chits posted, following other users, posting Chits with location tag or a picture attached to it. Chits can also be saved in the draft to be posted later.

Drafts can be updated, deleted or posted.

Each user can also update their profile details and unfollow any of the other chitters they were previously following.

## Acknowledgements

Thanks to the Chittr team for providing the API on which this app is built.

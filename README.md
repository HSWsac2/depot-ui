```
 ▄▄▄▄▄▄▄▄▄▄   ▄▄▄▄▄▄▄▄▄▄▄  ▄▄▄▄▄▄▄▄▄▄▄  ▄▄▄▄▄▄▄▄▄▄▄  ▄▄▄▄▄▄▄▄▄▄▄          ▄         ▄  ▄▄▄▄▄▄▄▄▄▄▄ 
▐░░░░░░░░░░▌ ▐░░░░░░░░░░░▌▐░░░░░░░░░░░▌▐░░░░░░░░░░░▌▐░░░░░░░░░░░▌        ▐░▌       ▐░▌▐░░░░░░░░░░░▌
▐░█▀▀▀▀▀▀▀█░▌▐░█▀▀▀▀▀▀▀▀▀ ▐░█▀▀▀▀▀▀▀█░▌▐░█▀▀▀▀▀▀▀█░▌ ▀▀▀▀█░█▀▀▀▀         ▐░▌       ▐░▌ ▀▀▀▀█░█▀▀▀▀ 
▐░▌       ▐░▌▐░▌          ▐░▌       ▐░▌▐░▌       ▐░▌     ▐░▌             ▐░▌       ▐░▌     ▐░▌     
▐░▌       ▐░▌▐░█▄▄▄▄▄▄▄▄▄ ▐░█▄▄▄▄▄▄▄█░▌▐░▌       ▐░▌     ▐░▌ ▄▄▄▄▄▄▄▄▄▄▄ ▐░▌       ▐░▌     ▐░▌     
▐░▌       ▐░▌▐░░░░░░░░░░░▌▐░░░░░░░░░░░▌▐░▌       ▐░▌     ▐░▌▐░░░░░░░░░░░▌▐░▌       ▐░▌     ▐░▌     
▐░▌       ▐░▌▐░█▀▀▀▀▀▀▀▀▀ ▐░█▀▀▀▀▀▀▀▀▀ ▐░▌       ▐░▌     ▐░▌ ▀▀▀▀▀▀▀▀▀▀▀ ▐░▌       ▐░▌     ▐░▌     
▐░▌       ▐░▌▐░▌          ▐░▌          ▐░▌       ▐░▌     ▐░▌             ▐░▌       ▐░▌     ▐░▌     
▐░█▄▄▄▄▄▄▄█░▌▐░█▄▄▄▄▄▄▄▄▄ ▐░▌          ▐░█▄▄▄▄▄▄▄█░▌     ▐░▌             ▐░█▄▄▄▄▄▄▄█░▌ ▄▄▄▄█░█▄▄▄▄ 
▐░░░░░░░░░░▌ ▐░░░░░░░░░░░▌▐░▌          ▐░░░░░░░░░░░▌     ▐░▌             ▐░░░░░░░░░░░▌▐░░░░░░░░░░░▌
 ▀▀▀▀▀▀▀▀▀▀   ▀▀▀▀▀▀▀▀▀▀▀  ▀            ▀▀▀▀▀▀▀▀▀▀▀       ▀               ▀▀▀▀▀▀▀▀▀▀▀  ▀▀▀▀▀▀▀▀▀▀▀ 
```
> Das Webfrontend für die Bank, das auf die bereitgestellten Services des DepotService/BuchungsService zugreift.

Eine vom Team sadUI (Skalierbare Anwendungen - Depot UI) bereitgestellte Oberfläche zur Depotverwaltung.

# Depot-UI CI
[![Node.js CI](https://github.com/HSWsac2/depot-ui/actions/workflows/ci.yml/badge.svg)](https://github.com/HSWsac2/depot-ui/actions/workflows/ci.yml)

## Login-Credentials

E-Mail: \<taken from DepotService\>
 
Password: `start12345`

While the e-mail is validated by calling the DepotService, the password ultimately has no effect. For demonstration purposes, it is set to a fixed value (`start12345`) at compile time.

Note that implementing proper authentication was a declared non-goal of this project. This password mock is not aiming to provide that.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode. It is required that the depotService is running on the url specified in [the config file](.env.development) \
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.

### `./redeployDockerCompose.ps1`

Builds and deploys the depot-ui as a local Docker container via docker-compose (after shutting down an old instance if it is still running).

:warning: **This will not start any containers on which this service depends on.** Those have to be started seperately.

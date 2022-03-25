# Depot-UI
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

# Login-Credentials

E-Mail: <taken from DepotService>
Password: start12345

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode. It is required that the depotService is running on `https://localhost:8080/` \
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.


### `npm run start:mocked`

Runs the app in the mocked developement mode. This will mock any api request to external services as stated in [the routes.js file](src/app/mocks/routes.js)
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.

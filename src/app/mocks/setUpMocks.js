import routes from './routes.js'
import buchungsroutes from './buchungsserviceRoutes.js';

const setUpMocks = () => {
    var axios = require("axios");
    var MockAdapter = require("axios-mock-adapter");

    // This sets the mock adapter on the default instance
    var mock = new MockAdapter(axios);

    // Mock any GET request to /users
    // arguments for reply are (status, data, headers)

    routes.forEach(route => {
         mock.onGet(`http://localhost:8080/api/depotService${route.url}`).reply(route.code, route.response);
    });

    buchungsroutes.forEach(route => {
        mock.onGet(`http://localhost:8081${route.url}`).reply(route.code, route.response);
   });
}
export default setUpMocks;
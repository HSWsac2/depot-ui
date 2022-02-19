const routes = [
    {
        method: 'get',
        url: '/clients/',
        code: 200,
        response: [
            {
                "firstname": "Hans",
                "lastname": "Meyer",
                "birthdate": "20.01.2000",
                "e_mail": "hans@meyer.de",
                "citizenship": "Deutsch",
                "street": "string-Street",
                "street_number": "51a",
                "plz": "23456",
                "location": "Buz",
                "country": "Deutschland",
                "client_id": 1234567890
            },
            {
                "firstname": "John",
                "lastname": "Doe",
                "birthdate": "20.01.2000",
                "e_mail": "john.doe@gmail.com",
                "citizenship": "Deutsch",
                "street": "St. Street",
                "street_number": "52",
                "plz": "23456",
                "location": "Buz",
                "country": "Deutschland",
                "client_id": 7777777777
            }
        ]
    },
]

export default routes;
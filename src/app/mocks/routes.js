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
    {
        method: 'get',
        url: '/deposits/7777777777',
        code: 200,
        response: [
            {
                "client_id": 7777777777,
                "position_id": "123-456-789",
                "position_sub_id": "222-222-222",
                "saldo": 100,
                "limit": 1000
            },
            {
                "client_id": 7777777777,
                "position_id": "123-456-789",
                "position_sub_id": "222-222-223",
                "saldo": 200,
                "limit": 1000
            }
        ]
    },
    {
        method: 'get',
        url: '/deposits/1234567890',
        code: 200,
        response: [
            {
                "client_id": 1234567890,
                "position_id": "111-456-789",
                "position_sub_id": "222-222-222",
                "saldo": 100,
                "limit": 1000
            },
            {
                "client_id": 1234567890,
                "position_id": "111-456-789",
                "position_sub_id": "222-222-223",
                "saldo": 200,
                "limit": 1000
            }
        ]
    },
    {
        method: 'get',
        url: '/deposits/111-456-789/222-222-223',
        code: 200,
        response: {
            "client_id": 1234567890,
            "position_id": "111-456-789",
            "position_sub_id": "222-222-222",
            "saldo": 100,
            "limit": 1000
        },
    },
    {
        method: 'get',
        url: '/deposits/111-456-789/222-222-223',
        code: 200,
        response: {
            "client_id": 1234567890,
            "position_id": "111-456-789",
            "position_sub_id": "222-222-222",
            "saldo": 100,
            "limit": 1000
        },
    },
    {
        method: 'get',
        url: '/deposits/123-456-789/222-222-222',
        code: 200,
        response: {
            "client_id": 7777777777,
            "position_id": "123-456-789",
            "position_sub_id": "222-222-222",
            "saldo": 100,
            "limit": 1000
        },
    },
    {
        method: 'get',
        url: '/deposits/123-456-789/222-222-223',
        code: 200,
        response: {
            "client_id": 7777777777,
            "position_id": "123-456-789",
            "position_sub_id": "222-222-222",
            "saldo": 100,
            "limit": 1000
        },
    },
]

export default routes;
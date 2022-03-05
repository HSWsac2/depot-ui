const buchungsroutes =  [  
    {
        method: 'get',
        url: '/stocks/current',
        code: 200,
        response: 
            [
                {
                    id: 1,
                    name: "Alphabet",
                    price_per_stock: 2350,
                    link: "https://upload.wikimedia.org/wikipedia/commons/7/7a/Alphabet_Inc_Logo_2015.svg",
                    amount: 4,
                    isin: "DE123DINGSBUMS"
                },
                {
                    id: 2,
                    name: "Meta",
                    price_per_stock: 192,
                    link: "https://upload.wikimedia.org/wikipedia/commons/7/7b/Meta_Platforms_Inc._logo.svg",
                    amount: 3,
                    isin: "DE456DINGSBUMS"
                },
                {
                    id: 3,
                    name: "Amazon.com, Inc.",
                    price_per_stock: 2672,
                    link: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg",
                    amount: 2,
                    isin: "DE789DINGSBUMS"
                },
                {
                    id: 4,
                    name: "Netflix",
                    price_per_stock: 241,
                    link: "https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg",
                    amount: 1,
                    isin: "DE135DINGSBUMS"
                }
            ]
        
    }
]

export default buchungsroutes;
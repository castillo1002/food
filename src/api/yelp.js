import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses',
    headers: {
        Authorization:
            'Bearer kvRXl6_td1l0NknJr_0olkYOaJP0rblCEMQPuC_hvuI62O4P9MwH_0x5WWLHXHjdZD1gwu2sNeCf9uUddWCSTw23gUJBHD_MAenerRuzMcKwfX8GoypxBbRv08QkXnYx'
    }
});




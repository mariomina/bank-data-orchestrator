const axios = require('axios');

exports.getExternalData = async (req, res) => {
    try {
        console.log('Fetching data from external API...');
        const response = await axios.get(process.env.EXTERNAL_API_URL);

        // Simulating data cleaning/formatting
        const cleanedData = response.data.map(user => ({
            id: user.id,
            name: user.name,
            email: user.email,
            company: user.company.name,
            city: user.address.city
        }));

        console.log('Data fetched and cleaned successfully');
        res.json(cleanedData);
    } catch (error) {
        console.error('Error fetching external data:', error.message);
        res.status(500).json({
            error: 'Failed to fetch data from bank service',
            details: error.message
        });
    }
};

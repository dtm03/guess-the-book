import axios from 'axios';

// API Key should be put in a .env file
const API_KEY = process.env.REACT_APP_OPENAI_API_KEY || 'YOUR_OPENAI_API_KEY';

export const getMovieAndHints = async () => {
    try {
        const response = await axios.post(
            'https://api.openai.com/v1/completions',
            {
                model: 'text-davinci-003',
                prompt: `Generate a movie title and five hints to help someone guess the movie. 
                Format it as follows:
                Movie: [Movie Title]
                Hint 1: [Challenging hint]
                Hint 2: [Moderately challenging hint]
                Hint 3: [Moderate hint]
                Hint 4: [Easier hint]
                Hint 5: [Easiest hint]
                `,
                max_tokens: 150,
                temperature: 0.7,
            },
            {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${API_KEY}`,
                },
            }
        );

        const result = response.data.choices[0].text.trim();
        const lines = result.split('\n').map(line => line.trim());
        const movie = lines[0].replace('Movie: ', '');
        const hints = lines.slice(1).map(line => line.replace(/Hint \d+: /, ''));

        return { movie, hints };
    } catch (error) {
        console.error('Error fetching movie and hints:', error);
        return null;
    }
};
Weather App
A simple, responsive weather application that allows users to search for the current weather in any city using the OpenWeatherMap API. The site is deployed live on Netlify for easy, secure, and rapid access.

🌐 Live Demo
https://heroic-wisp-907cf2.netlify.app/

✨ Features
Search for current weather by city name.

Displays temperature, description, humidity, and wind speed.

User-friendly interface with instant feedback.

Graceful error handling for invalid city names or network problems.

Deployed and secured with HTTPS via Netlify.

🚀 How to Use
Go to the live site:
Open the link above in your web browser.

Enter a city name:
Type a city (e.g., "London") into the input box and click Search.

View the results:
Weather details for the city will appear below the search.

🛠️ Local Setup & Development
Clone the repo:

bash
git clone https://github.com/Hirwavsopps/Weather-API-app.git
cd weather-app
Start a local server:
If you want to preview locally with Node.js and Express:

bash
npm install
node server.js
The server runs by default on http://localhost:3000 or http://localhost:8080 if configured.

Alternatively:

Simply open index.html in your browser for static-only preview.

⚡ Deployment
Platform: Netlify

Build Command: none required (static site)

Publish directory: / (project root)

Automatic deployments:
Any push to the connected GitHub repository redeploys the site automatically.

Custom Domain
You can set up a custom domain in Netlify’s domain settings (optional).

🔒 Security Note
API Key Usage: For simplicity, the OpenWeatherMap API key is included in the frontend JavaScript.
Warning: In production or sensitive projects, API keys should never appear in client-side code.
A secure approach uses a backend server to proxy API requests with the key hidden in environment variables.

🧑💻 Code Structure
text
weather-app/
│
├── index.html       # Main page
├── script.js        # Handles API requests and UI logic
├── styles.css       # Minimal styling (optional)
├── server.js        # Simple Express server (optional, for static hosting)
├── package.json     # Dependencies (only needed for Node server)
🔗 API Attribution
Weather Data:
OpenWeatherMap
Please see their Terms of Service.

🎥 Demo Video
https://youtu.be/uB444nPBRPs

💬 Challenges & Notes
Decided to deploy as a static frontend for speed and simplicity using Netlify.

Skipped server-side key protection for this student demo (see Security Note above).

Followed modern web best practices for structure, error handling, and deployment.

📄 Assignment Requirements Checklist
 Application serves a practical, genuine purpose

 Utilizes OpenWeatherMap external API effectively

 Handles errors and invalid user input gracefully

 Data is displayed clearly and logically

 User can search and interact easily

 README contains instructions, credits, and deployment details

 Demo video recorded and linked

👋 How to Contribute
Pull requests welcome for improvements!
(For this assignment, all code is original as required.)

I used Netfly for servers because https://github.com/waka-man/web_infra_lab.git)
the link of that github is not openning and also searching for my facilitator github was not i have a png screenshot file as proof in that file called link error proof
in the project structure

Thank you for checking out this project!


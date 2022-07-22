# FC-1

- Epic: Layout Test
- Status: To Do
- Components: React
- Reporter: Marcos Silva

## Delivery

- Delivery instructions:
    1. Create a new GitHub repo exclusively for the project
    2. Make commits as you normally would
    
    3. At the end of the 8h, give access to the GitHub user `mediumhotcoffee`/msilva@fastmail.com

        - The delivery time is counted as the time of the invite; if the invite is sent when the repo is created and contains no relevant files, the applicant will be disqualified
        - Any commits past the deadline will not be considered
        - If the project doesn't compile/run, the applicant will be disqualified
- Reminders:
    - The test started when you downloaded the project from the Dropbox Transfer

## Info

- Create a website that displays weather forecasts, matching the prototype provided as closely as possible
- [Prototype](https://sketch.com/s/f9bf9720-2dd1-4d4c-b508-52c77dd20e34)
- API docs:
	- [Current](https://openweathermap.org/current)
	- [One Call API 1.0](https://openweathermap.org/api/one-call-api)
- Fonts:
	- Helvetica Neue
    - If the above isn't available on your platform, use Roboto
- Colors:
    - Black: `#000`
    - White: `#FFF`
    - Purple: `#BF5AF2`
    - Yellow: `#FFD60A`
    - Blue: `#0A84FF`
    - Cyan: `#64D2FF`
- Icons:
	- Icons were provided as SVG files
	- The prototype contains an example of how each icon should look with a blur

## Requirements

- Only use the `emotion` or the `styled-components` library
- Display a grid with any 18 cities
	- Any city that can be used to generate a valid weather forecast with the API provided can be used
- When the app starts, show a default message indicating that no city has been selected
- Add the ability to click on a city from the grid, and see its current forecast
- Allow the user to toggle between a 7-day weather forecast, where each day shows the high and low temperatures, or the current weather for a city
- Show an image for each weather condition using the assets provided
- Add React Router to the project and add routes, such that `/` shows the current forecast, and `/7days` shows the 7 days forecast
- Add a clock on the top left corner of the main page
- Add a search button on the top right corner of the page; if the user types the name of a city and hits enter, select that city (even if the capitalization used is wrong)
- Add a settings button on the top right corner of the page; it should show a settings modal that allows the user to change in between imperial/metric/standard measurements and AM/PM or 24h time
	- Blur the view behind the modal

## Extra Credit

You don't need to implement these features, but successfully completing these will be considered extra points on your evaluation:

- Add unit tests
	- This counts for more points than anything else below
- Pull a random list of cities every time the user opens the app. These random cities must generate valid weather forecasts if picked
- Remove cells from the grid as the user types on the search bar
- Add a graphics library to add a graph of the temperature over the course of a week or day; insert a way to access the graph seamlessly in the page
- Add animations
- Add light/dark mode support

Note: These won't be considered if the app doesn't compile/run.
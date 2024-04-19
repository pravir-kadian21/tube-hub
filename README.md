## TubeHub

TubeHub is a React project that utilizes YouTube APIs to create a user-friendly platform for browsing and watching YouTube videos. This README will guide you through the setup process and provide an overview of the project structure and features.

# Getting Started

Follow these steps to set up the TubeHub project on your local machine:

1. **Clone the Repository**:
   git clone https://github.com/pravir-kadian21/tube-hub.git

2. **Install Dependencies**:
   cd tubehub
   npm i

3. **Set Up YouTube API Key**:
   Obtain a YouTube API key from the [Google Developers Console](https://console.developers.google.com/). Then, create a `.env` file in the project root directory and add your API key:

REACT_APP_YOUTUBE_API_KEY=YOUR_API_KEY_HERE

4. **Start the Development Server**:
   npm start

5. **Visit the Application**:
   Open your browser and navigate to `http://localhost:3000` to view the TubeHub application.

## Features

- **Home Section**: Lists YouTube videos fetched using the YouTube API.
- **Sidebar**: Allows users to filter video search based on different criteria.
- **Search Bar Functionality**: Enables users to search for videos by entering keywords.
- **Watch Page**: Displays detailed information about a particular video, including comments and other video metadata.
- **Redux Integration**: Uses Redux for state management to ensure a scalable and maintainable application.
- **Responsive Design**: Ensures seamless user experience across various devices and screen sizes.

## Dependencies

- [React](https://reactjs.org/): JavaScript library for building user interfaces.
- [Redux](https://redux.js.org/): State management library for JavaScript applications.
- [React Router](https://reactrouter.com/): Declarative routing for React applications.
- [YouTube Data API](https://developers.google.com/youtube/v3): Access to YouTube's data, including videos, playlists, and channels.

#  Media Feed App

A full-stack web application that allows users to create and view posts with images and captions, similar to a basic social media feed.

## Features

- **Create Posts**: Upload images and add captions to create new posts.
- **View Feed**: Browse a feed of all posts with images and captions.
- **Image Storage**: Secure image uploading and storage using ImageKit.
- **Responsive Design**: Clean and responsive UI built with React.

## Tech Stack

### Backend
- **Node.js**: JavaScript runtime for server-side development.
- **Express.js**: Web framework for building RESTful APIs.
- **MongoDB**: NoSQL database for storing post data.
- **Mongoose**: ODM for MongoDB.
- **Multer**: Middleware for handling file uploads.
- **ImageKit**: Cloud-based image storage and optimization service.
- **CORS**: Cross-Origin Resource Sharing for API access.

### Frontend
- **React**: JavaScript library for building user interfaces.
- **Vite**: Fast build tool and development server.
- **React Router**: Declarative routing for React applications.
- **Axios**: HTTP client for making API requests.
- **CSS**: Custom styling for responsive design.

## Prerequisites

Before running this application, ensure you have the following installed:

- Node.js (version 14 or higher)
- npm or yarn package manager
- MongoDB database (local or cloud instance)
- ImageKit account for image storage

## Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/your-username/your-repo-name.git
   cd your-repo-name
   ```

2. **Backend Setup**:
   - Navigate to the Backend directory:
     ```bash
     cd Backend
     ```
   - Install dependencies:
     ```bash
     npm install
     ```
   - Create a `.env` file in the Backend directory and add the following environment variables:
     ```
     MONGO_URI=your_mongodb_connection_string
     IMAGEKIT_PRIVATE_KEY=your_imagekit_private_key
     IMAGEKIT_PUBLIC_KEY=your_imagekit_public_key
     IMAGEKIT_URL_ENDPOINT=your_imagekit_url_endpoint
     ```
   - Start the backend server:
     ```bash
     node server.js
     ```
     The server will run on `http://localhost:3000`.

3. **Frontend Setup**:
   - Open a new terminal and navigate to the Frontend directory:
     ```bash
     cd ../Frontend
     ```
   - Install dependencies:
     ```bash
     npm install
     ```
   - Start the development server:
     ```bash
     npm run dev
     ```
     The frontend will run on `http://localhost:5173` (default Vite port).

## Usage

1. Open your browser and navigate to `http://localhost:5173`.
2. Click on "Create New Post" to upload an image and add a caption.
3. Submit the form to create a post.
4. Navigate to the feed to view all posts.

## API Endpoints

### Backend API

- **POST /create-post**: Create a new post.
  - Request: Multipart form data with `image` (file) and `caption` (string).
  - Response: JSON with success message and post data.

- **GET /posts**: Retrieve all posts.
  - Response: JSON array of posts with `image` (URL) and `caption`.

## Project Structure

```
.
├── Backend/
│   ├── package.json
│   ├── server.js
│   ├── src/
│   │   ├── app.js
│   │   ├── db/
│   │   │   └── db.js
│   │   ├── models/
│   │   │   └── post.model.js
│   │   └── services/
│   │       └── storage.service.js
│   └── images/ (for storing images if needed)
├── Frontend/
│   ├── package.json
│   ├── vite.config.js
│   ├── index.html
│   ├── src/
│   │   ├── App.jsx
│   │   ├── main.jsx
│   │   ├── index.css
│   │   ├── pages/
│   │   │   ├── CreatePost.jsx
│   │   │   └── Feed.jsx
│   │   └── assets/
│   └── public/
└── README.md
```

## Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository.
2. Create a new branch for your feature or bug fix.
3. Make your changes and test them.
4. Submit a pull request with a clear description of your changes.

## License

This project is licensed under the ISC License. See the LICENSE file for details.

## Acknowledgments

- [ImageKit](https://imagekit.io/) for image storage services.
- [MongoDB](https://www.mongodb.com/) for database services.
- [React](https://reactjs.org/) and [Express](https://expressjs.com/) communities for excellent documentation and support.</content>
<parameter name="filePath">c:\Users\123\Downloads\Backend Practice\Practice\3\README.md

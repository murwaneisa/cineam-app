# Feature Flicks Cinema Website Prototype

Welcome to the Feature Flicks Cinema website prototype! This project aims to create a user-friendly cinema website for Feature Flicks, a local cinema in Småstad, Sweden, competing with SF. The website will allow visitors to access movie information, screening schedules, and book tickets conveniently.

## Features

- **Movie Information:**
  Visitors can view information about movies being shown, including dates, times, and categories.

- **Screening List:**

  - Movies are displayed in a list, sorted by the date of screening.
  - Each screening date is presented as a separate headline, including the date and weekday.
  - For each screening, details such as date, time, title, movie poster, and length are shown.

- **Filter by Category:**
  Visitors can filter the screening list by category.

- **Booking Page:**

  - Clicking on a movie in the list transfers users to the booking page.
  - Users can choose seats and specify the number of visitors.
  - Total price is calculated based on ticket type and quantity.

- **Booking Confirmation:**
  After completing a booking, users receive a unique booking number and see the selected seats.

- **Seat Booking System:**
  - Users can view a graphical layout of the auditorium with available seats.
  - Adjacent seats can be booked together for a specific screening.

## Ticket Pricing

- Normal ticket price: SEK 85
- Senior ticket (above age 65): SEK 75
- Children ticket (under age 12): SEK 65

## Language Options

Choose either Swedish or English as the site language (not both).

## Backend Integration

The backend for this project has already been provided by another company. You'll need to integrate the provided REST API and MySQL database with the frontend. The backend's code and documentation will be available [here](backend-link).

## Technologies Used

- React
- React Router
- React Bootstrap (Grade 5)

---

# Project Overview: Structured React Web Application

Welcome to our well-structured React web application! This project has been meticulously organized to ensure maintainability, scalability, and efficient development. Below, we'll explore how the codebase is structured across various folders and the workflow we follow to achieve these goals.

## File and Workflow Design

### Assets Folder

The `assets` folder contains all our static assets such as images, fonts, and media files. Centralizing these assets ensures consistency in their usage throughout the application and simplifies updates.

### Components Folder

In the `components` folder, we house reusable UI components. Each component is designed to be self-contained, promoting reusability and modularity. This approach accelerates development and enhances code maintainability by isolating component-specific logic and styles.

### Pages Folder

Our `pages` folder defines the individual pages of the application. Each page is a composition of relevant components, creating a cohesive user interface. This separation simplifies management and scaling as new features are introduced.

### Redux Folder

For state management, we utilize the `redux` folder, which contains actions, reducers, and store configuration. Centralized state management ensures consistent data handling across components and facilitates communication between different parts of the application.

### Lib Folder

The `lib` folder is home to utility functions, helper classes, and third-party integrations that extend the application's capabilities. This separation promotes clean code practices and ensures functionalities unrelated to specific components or pages have their designated space.

### Style Folder

Global and reusable styles are defined in the `style` folder. CSS or SASS files within this folder define the application's theme, typography, colors, and layout grids. This separation maintains a consistent and visually appealing user interface.

## Workflow

Our workflow adheres to a structured process:

1. **Assets:** Organize assets in the `assets` folder.
2. **Components:** Develop UI components within the `components` folder.
3. **Pages:** Assemble pages in the `pages` folder using relevant components.
4. **Redux:** Manage state using the `redux` folder for consistent data handling.
5. **Lib:** Enhance capabilities by adding utility functions and integrations in the `lib` folder.
6. **Style:** Define global and reusable styles in the `style` folder.

This approach enhances code quality, promotes collaboration, and streamlines development. Our well-defined structure facilitates current development efforts and lays a strong foundation for future expansion and feature integration.

## Getting Started

To get started with the project, follow these steps:

1. Clone this repository.
2. Install dependencies using `npm install`.
3. you need the TMDB api Key and add it to the variable VITE_REACT_APP_API_KEY="Your API Key" in the .env file.
4. Start the development server with `npm start`.

Feel free to explore each folder and dive into our well-organized codebase. Happy coding!

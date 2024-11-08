# Image Carousel

## Project Description

A simple image carousel that fetches images from [picsum.photos](https://picsum.photos). The carousel is responsive and supports smooth infinite scrolling.

### Key Features

- **Responsiveness**:
  - Desktop version displays a varying number of images based on screen width.
  - Mobile version displays a single, full-width image.
- **Navigation**: `prev` and `next` buttons allow users to scroll through images.
- **Image Selection**: Users can select images, with a list of selected images displayed below the carousel.
- **Animations**: Smooth transitions for carousel scrolling and animations for the list of selected images.

## Technologies Used

- **Vue**: Main framework for building components.
- **JavaScript**: Core logic for the carousel.
- **HTML/CSS**: Layout and styling of the carousel.

## Component Structure

- **App.vue**: Main component that passes data to the carousel.
- **Carousel.vue**: Primary carousel component, implementing scrolling and image selection logic.
- **CarouselItem.vue**: Component for displaying individual images.
- **CarouselControls.vue**: Navigation buttons for `prev` and `next`.

## Notes

- No third-party libraries were used for the carousel functionality, as per the project requirements.
- The project supports keyboard navigation (left and right arrows) and mouse wheel scrolling.

## Additional Enhancements

- **Transitions and Animations**: Smooth transitions are added for image scrolling, with animations for selected images.
- **Image Selection**: Selected images are dynamically updated and displayed below the carousel.

## Installation and Usage

1. **Install dependencies**:
   ```bash
   npm install
   ```

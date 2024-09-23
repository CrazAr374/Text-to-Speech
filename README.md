# Text-to-Speech (TTS) Converter

A simple web-based Text-to-Speech converter that allows users to convert text input into speech, choose different voices, and download the audio as a WAV file. Built using HTML, CSS, and JavaScript.

## Features

- **Convert Text to Speech**: Type any text and convert it to audio.
- **Multiple Voices**: Select from available voices based on your browser's support.
- **Play and Download**: Listen to the converted speech and download it as an audio file (WAV format).
- **Responsive Design**: Works well on different screen sizes.

## Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/your-username/tts-converter.git
   cd tts-converter
   ```

2. **Open the project**:
   Simply open the `index.html` file in your preferred web browser.

## Usage

1. Open the app in your browser by opening the `index.html` file.
2. Write any text in the provided text area.
3. Select a voice from the dropdown (optional).
4. Click **Play Audio** to hear the speech.
5. Click **Download Audio** to download the speech as a `.wav` file.

## Screenshots

### TTS Converter Interface

![TTS Converter Screenshot](https://via.placeholder.com/400)

## Files

### `index.html`
- Contains the structure of the webpage, including the text input area, buttons, and select dropdown for voice selection.

### `Tts.js`
- Contains the JavaScript logic to convert the text to speech, manage voice selections, and download the audio as a `.wav` file.

### `Tts.css`
- Styles the web page for a clean and minimal look.

## How It Works

1. **SpeechSynthesis API**: The app uses the browser's built-in `SpeechSynthesis` API to convert text to speech.
   - `SpeechSynthesisUtterance()` is used to represent the speech request.
   - Available voices are loaded into the dropdown via `window.speechSynthesis.getVoices()`.

2. **Play Functionality**: When the "Play Audio" button is clicked, the text in the text area is spoken using the selected voice.

3. **Download Functionality**: Clicking the "Download Audio" button converts the text into an audio blob and triggers a download as a `.wav` file. This part can be further enhanced to create actual audio instead of just downloading text.

## Browser Support

This project uses the Web Speech API, which is supported in most modern browsers:
- Google Chrome
- Mozilla Firefox
- Safari (limited support)
- Edge

## Contributing

Feel free to submit issues or pull requests if you'd like to contribute to this project.

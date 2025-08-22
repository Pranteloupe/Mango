# Mango Frontend

A modern, responsive AI chat interface built with Next.js and Tailwind CSS. This frontend integrates with the Mango FastAPI backend to provide a seamless AI chat experience.

## Features

- 🎨 **Modern UI**: Clean, responsive design with dark/light mode support
- 💬 **Real-time Chat**: Stream responses from OpenAI's GPT models
- 🔐 **Secure API Key Management**: Password-protected API key input
- 🥔 **Easter Egg**: Hidden potato that triggers a fun animation
- 📱 **Mobile Responsive**: Works perfectly on all device sizes
- 🌙 **Dark Mode**: Automatic dark/light mode based on system preferences

## Prerequisites

- Node.js 18+ 
- npm, yarn, or pnpm
- Mango Backend running on `http://localhost:8000`

## Installation

1. **Install dependencies:**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

2. **Start the development server:**
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

3. **Open your browser:**
   Navigate to [http://localhost:3000](http://localhost:3000)

## Usage

1. **Set API Key**: Click the settings icon (⚙️) in the header and enter your OpenAI API key
2. **Start Chatting**: Type your message and press Enter or click Send
3. **Enjoy the Experience**: The AI will respond with streaming text
4. **Find the Potato**: Look for the hidden 🥔 in the bottom-right corner!

## Project Structure

```
frontend/
├── app/
│   ├── components/
│   │   ├── ChatInterface.tsx    # Main chat component
│   │   ├── Header.tsx           # Header with title and profile
│   │   └── PotatoRain.tsx      # Potato rain animation
│   ├── globals.css              # Global styles and Tailwind
│   ├── layout.tsx               # Root layout component
│   └── page.tsx                 # Main page component
├── package.json                 # Dependencies and scripts
├── tailwind.config.js          # Tailwind CSS configuration
├── tsconfig.json               # TypeScript configuration
└── README.md                   # This file
```

## API Integration

The frontend communicates with the Mango backend at `http://localhost:8000`:

- **POST** `/api/chat` - Send chat messages and receive streaming responses
- **GET** `/api/health` - Health check endpoint

## Customization

### Changing the Backend URL

Update the fetch URL in `ChatInterface.tsx`:

```typescript
const response = await fetch('http://localhost:8000/api/chat', {
  // ... rest of the code
})
```

### Modifying the Potato Rain

Adjust the potato rain animation in `PotatoRain.tsx`:

```typescript
// Change number of potatoes
Array.from({ length: 20 }, ...)

// Modify animation duration in globals.css
.potato-rain {
  animation: potatoRain 5s linear forwards;
}
```

## Building for Production

```bash
npm run build
npm start
```

## Deployment

This frontend is designed to work with Vercel deployment. Simply connect your GitHub repository to Vercel for automatic deployments.

## Troubleshooting

### Common Issues

1. **API Connection Error**: Ensure the Mango backend is running on port 8000
2. **CORS Issues**: The backend includes CORS middleware, but check if it's properly configured
3. **API Key Not Working**: Verify your OpenAI API key is valid and has sufficient credits

### Development Tips

- Use the browser's developer tools to debug API calls
- Check the Network tab for request/response details
- Monitor the Console for any JavaScript errors

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is part of the Mango ecosystem.
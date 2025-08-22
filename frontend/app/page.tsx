'use client'

import { useState, useEffect, useRef } from 'react'
import { User, Send, Bot, Settings } from 'lucide-react'
import ChatInterface from './components/ChatInterface'
import Header from './components/Header'
import PotatoRain from './components/PotatoRain'

export default function Home() {
  const [isPotatoRaining, setIsPotatoRaining] = useState(false)
  const [apiKey, setApiKey] = useState('')
  const [showSettings, setShowSettings] = useState(false)

  const handlePotatoClick = () => {
    setIsPotatoRaining(true)
    setTimeout(() => {
      setIsPotatoRaining(false)
    }, 10000)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800">
      {/* Potato Rain Effect */}
      {isPotatoRaining && <PotatoRain />}
      
      {/* Hidden Potato */}
      <div 
        className="fixed bottom-4 right-4 w-8 h-8 cursor-pointer opacity-20 hover:opacity-100 transition-opacity duration-300 z-50"
        onClick={handlePotatoClick}
        title="Click for a surprise! 🥔"
      >
        🥔
      </div>

      <Header 
        onSettingsClick={() => setShowSettings(!showSettings)}
        apiKey={apiKey}
        onApiKeyChange={setApiKey}
        showSettings={showSettings}
      />
      
      <main className="container mx-auto px-4 py-8 max-w-6xl">
        <ChatInterface apiKey={apiKey} />
      </main>

      {/* Settings Modal */}
      {showSettings && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white dark:bg-gray-800 rounded-lg p-6 w-96 max-w-md">
            <h3 className="text-lg font-semibold mb-4">Settings</h3>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-2">
                  OpenAI API Key
                </label>
                <input
                  type="password"
                  value={apiKey}
                  onChange={(e) => setApiKey(e.target.value)}
                  placeholder="sk-..."
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <button
                onClick={() => setShowSettings(false)}
                className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors"
              >
                Save & Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}


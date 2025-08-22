import { User, Settings } from 'lucide-react'

interface HeaderProps {
  onSettingsClick: () => void
  apiKey: string
  onApiKeyChange: (key: string) => void
  showSettings: boolean
}

export default function Header({ onSettingsClick, apiKey, onApiKeyChange, showSettings }: HeaderProps) {
  return (
    <header className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-700 sticky top-0 z-40">
      <div className="container mx-auto px-4 py-4 max-w-6xl">
        <div className="flex items-center justify-between">
          {/* Logo and Title */}
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-br from-orange-400 to-red-500 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">🥭</span>
            </div>
            <h1 className="text-2xl font-bold bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
              Mango
            </h1>
            <span className="text-sm text-gray-500 dark:text-gray-400 font-medium">
              AI Chat Interface
            </span>
          </div>

          {/* Profile and Settings */}
          <div className="flex items-center space-x-4">
            {/* API Key Status */}
            <div className="flex items-center space-x-2">
              <div className={`w-2 h-2 rounded-full ${apiKey ? 'bg-green-500' : 'bg-red-500'}`}></div>
              <span className="text-sm text-gray-600 dark:text-gray-400">
                {apiKey ? 'API Ready' : 'No API Key'}
              </span>
            </div>

            {/* Settings Button */}
            <button
              onClick={onSettingsClick}
              className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              title="Settings"
            >
              <Settings className="w-5 h-5 text-gray-600 dark:text-gray-400" />
            </button>

            {/* Profile Icon */}
            <div className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800">
              <User className="w-5 h-5 text-gray-600 dark:text-gray-400" />
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}


import React from 'react';
import UnicornStudioExample from './components/UnicornStudioExample';

/**
 * Main App Component
 *
 * This is the root component of the application. It serves as the main layout
 * and orchestrates the different sections of the landing page.
 *
 * Structure:
 * - Header: Navigation and branding
 * - Hero: Main landing section with call-to-action
 * - Features: Showcase of key features
 * - Footer: Links and additional information
 */
function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Header Section */}

      {/* Main Content */}
      <main>
        {/* Unicorn Studio Example Section */}
        <UnicornStudioExample />
      </main>

      {/* Footer Section */}
    </div>
  );
}

export default App;

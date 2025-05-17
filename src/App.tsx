import React from 'react';
import { RouletteProvider } from './context/RouletteContext';
import EmployeeForm from './components/EmployeeForm';
import EmployeeList from './components/EmployeeList';
import TitleInput from './components/TitleInput';
import RouletteWheel from './components/RouletteWheel';
import ResultDisplay from './components/ResultDisplay';
import { Sparkles } from 'lucide-react';

function App() {
  return (
    <RouletteProvider>
      <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-gray-100 py-8 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto">
          <header className="text-center mb-8">
            <div className="flex items-center justify-center gap-2 mb-2">
              <Sparkles className="text-indigo-600" size={28} />
              <h1 className="text-3xl font-bold text-gray-800">
                ERAS社内当番ルーレット
              </h1>
            </div>
          </header>

          <main className="bg-white rounded-xl shadow-lg p-6 mb-8">
            <div className="grid gap-8">
              {/* Title and Employee Input Section */}
              <section>
                <h2 className="text-xl font-bold text-gray-800 mb-4">設定</h2>
                <div className="space-y-4">
                  <TitleInput />
                  <EmployeeForm />
                </div>
              </section>

              {/* Roulette and Result Section */}
              <section className="flex flex-col items-center">
                <h2 className="text-xl font-bold text-gray-800 mb-4">ルーレット</h2>
                <RouletteWheel />
                <ResultDisplay />
              </section>

              {/* Employee List Section */}
              <section>
                <h2 className="text-xl font-bold text-gray-800 mb-4">社員リスト</h2>
                <EmployeeList />
              </section>
            </div>
          </main>

          <footer className="text-center text-gray-500 text-sm">
            <p>©2025 ERAS社内当番ルーレット</p>
          </footer>
        </div>
      </div>
    </RouletteProvider>
  );
}

export default App;
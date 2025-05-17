import React, { useEffect, useRef } from 'react';
import { Trophy, RefreshCw } from 'lucide-react';
import { useRoulette } from '../context/RouletteContext';
import confetti from '../utils/confetti';

const ResultDisplay: React.FC = () => {
  const { selectedEmployee, dutyTitle, resetSelection } = useRoulette();
  const resultRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    if (selectedEmployee && resultRef.current) {
      // Trigger confetti animation
      confetti(resultRef.current);
      
      // Add entrance animation
      resultRef.current.classList.add('animate-entrance');
    }
  }, [selectedEmployee]);
  
  if (!selectedEmployee) return null;

  return (
    <div
      ref={resultRef}
      className="w-full max-w-md mx-auto my-6 bg-white border border-emerald-200 rounded-xl p-6 shadow-lg"
    >
      <div className="flex items-center gap-3 mb-4">
        <div className="p-2 bg-emerald-100 rounded-full text-emerald-600">
          <Trophy size={24} />
        </div>
        <h2 className="text-xl font-bold text-gray-800">
          {dutyTitle || '当番'} 結果
        </h2>
      </div>
      
      <div className="flex flex-col items-center justify-center py-4">
        <p className="text-gray-600 mb-2">選ばれた社員:</p>
        <p className="text-3xl font-bold text-emerald-600 mb-4">{selectedEmployee.name}</p>
        <div className="w-16 h-1 bg-emerald-200 rounded-full mb-4"></div>
        <p className="text-gray-500 text-sm text-center">
          {dutyTitle || '当番'}の担当は{selectedEmployee.name}に決定しました！
        </p>
      </div>
      
      <button
        onClick={resetSelection}
        className="mt-4 w-full py-2 flex items-center justify-center gap-2 text-indigo-600 hover:text-indigo-700 bg-indigo-50 hover:bg-indigo-100 rounded-lg transition-colors"
      >
        <RefreshCw size={16} />
        <span>リセット</span>
      </button>
    </div>
  );
};

export default ResultDisplay;
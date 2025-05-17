import React, { useRef, useEffect } from 'react';
import { useRoulette } from '../context/RouletteContext';
import { RotateCw } from 'lucide-react';

const RouletteWheel: React.FC = () => {
  const { employees, isSpinning, startRoulette, selectedEmployee } = useRoulette();
  const wheelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isSpinning && wheelRef.current) {
      wheelRef.current.style.animation = 'none';
      void wheelRef.current.offsetWidth; // Trigger reflow
      wheelRef.current.style.animation = 'spin 2s cubic-bezier(0.3, 0.9, 0.1, 1) forwards';
    }
  }, [isSpinning]);

  const canSpin = employees.length > 0 && !isSpinning;

  return (
    <div className="flex flex-col items-center gap-6 w-full max-w-md mx-auto my-4">
      <div
        ref={wheelRef}
        className="relative w-64 h-64 rounded-full bg-gradient-to-br from-indigo-500 to-indigo-700 shadow-xl flex items-center justify-center overflow-hidden transition-all"
      >
        <div className="absolute inset-2 rounded-full bg-white flex items-center justify-center">
          <div className="text-center p-4">
            {isSpinning ? (
              <div className="text-indigo-600 font-bold text-lg animate-pulse">選択中...</div>
            ) : selectedEmployee ? (
              <div className="text-emerald-600 font-bold text-xl">{selectedEmployee.name}</div>
            ) : (
              <div className="text-gray-400 text-sm">
                {employees.length > 0 
                  ? "スタートを押してください" 
                  : "社員を追加してください"}
              </div>
            )}
          </div>
        </div>
        
        {/* Markers on the wheel */}
        {employees.map((employee, index) => {
          const angle = (index * (360 / employees.length)) % 360;
          return (
            <div 
              key={employee.id}
              className="absolute w-3 h-3 rounded-full bg-white"
              style={{
                transform: `rotate(${angle}deg) translateY(-28px)`,
                transformOrigin: 'center 32px',
              }}
            />
          );
        })}
        
        {/* Triangle pointer */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-0 h-0 border-l-[10px] border-r-[10px] border-b-[16px] border-l-transparent border-r-transparent border-b-red-500 z-10" />
      </div>
      
      <button
        onClick={startRoulette}
        disabled={!canSpin}
        className={`
          px-6 py-3 rounded-full text-white font-semibold flex items-center gap-2
          transition-all duration-300 transform
          ${canSpin 
            ? 'bg-emerald-500 hover:bg-emerald-600 hover:scale-105 shadow-lg' 
            : 'bg-gray-400 cursor-not-allowed'
          }
        `}
      >
        <RotateCw size={20} className={isSpinning ? 'animate-spin' : ''} />
        {isSpinning ? '選択中...' : 'ルーレット開始'}
      </button>
    </div>
  );
};

export default RouletteWheel;
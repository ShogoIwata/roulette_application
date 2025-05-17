import React from 'react';
import { Tag } from 'lucide-react';
import { useRoulette } from '../context/RouletteContext';

const TitleInput: React.FC = () => {
  const { dutyTitle, setDutyTitle } = useRoulette();

  return (
    <div className="flex items-center gap-2 w-full">
      <div className="text-indigo-500">
        <Tag size={20} />
      </div>
      <input
        type="text"
        value={dutyTitle}
        onChange={(e) => setDutyTitle(e.target.value)}
        placeholder="当番のタイトルを入力"
        className="flex-1 px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-all"
        aria-label="当番タイトル"
      />
    </div>
  );
};

export default TitleInput;
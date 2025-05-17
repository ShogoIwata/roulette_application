import React, { useState } from 'react';
import { Plus } from 'lucide-react';
import { useRoulette } from '../context/RouletteContext';

const EmployeeForm: React.FC = () => {
  const [name, setName] = useState('');
  const { addEmployee } = useRoulette();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (name.trim()) {
      addEmployee(name);
      setName('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="w-full">
      <div className="flex items-center gap-2">
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="社員名を入力"
          className="flex-1 px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-all"
          aria-label="社員名"
        />
        <button
          type="submit"
          className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-lg flex items-center gap-1 transition-colors"
          aria-label="社員を追加"
        >
          <Plus size={18} />
          <span>追加</span>
        </button>
      </div>
    </form>
  );
};

export default EmployeeForm;
import React from 'react';
import { X, User } from 'lucide-react';
import { useRoulette } from '../context/RouletteContext';
import { Employee } from '../types';

const EmployeeList: React.FC = () => {
  const { employees, removeEmployee, selectedEmployee } = useRoulette();

  if (employees.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-8 px-4 border-2 border-dashed border-gray-300 rounded-lg text-gray-500">
        <User size={32} />
        <p className="mt-2">社員がまだ登録されていません</p>
      </div>
    );
  }

  return (
    <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 w-full">
      {employees.map((employee: Employee) => (
        <li 
          key={employee.id}
          className={`
            relative flex items-center justify-between px-4 py-3 rounded-lg border
            ${selectedEmployee?.id === employee.id 
              ? 'border-emerald-500 bg-emerald-50 shadow-md' 
              : 'border-gray-200 bg-white hover:border-indigo-200 hover:bg-indigo-50'
            }
            transition-all duration-300
          `}
        >
          <div className="flex items-center gap-2 truncate mr-2">
            <User size={16} className={selectedEmployee?.id === employee.id ? 'text-emerald-500' : 'text-indigo-500'} />
            <span className="truncate font-medium">{employee.name}</span>
          </div>
          <button
            onClick={() => removeEmployee(employee.id)}
            className="text-gray-400 hover:text-red-500 transition-colors p-1 rounded-full hover:bg-gray-100"
            aria-label={`削除: ${employee.name}`}
          >
            <X size={16} />
          </button>
        </li>
      ))}
    </ul>
  );
};

export default EmployeeList;
import { Code2 } from 'lucide-react';

export function Logo() {
  return (
    <div className="w-10 h-10 bg-gradient-to-br from-teal-400 to-cyan-500 rounded-full flex items-center justify-center shadow-lg">
      <Code2 className="w-6 h-6 text-white" />
    </div>
  );
}
import { TrendingUp, TrendingDown } from 'lucide-react';

interface ExpenseCardProps {
  title: string;
  amount: number;
  count: number;
  type: 'team' | 'project';
  trend?: number;
}

export function ExpenseCard({ title, amount, count, type, trend }: ExpenseCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-sm p-4 border border-gray-200">
      <div className="flex items-start justify-between mb-3">
        <div className="flex-1">
          <p className="text-xs text-gray-500 uppercase tracking-wide mb-1">
            {type === 'team' ? 'Team' : 'Project'}
          </p>
          <h3 className="font-semibold text-gray-900">{title}</h3>
        </div>
        {trend !== undefined && (
          <div className={`flex items-center gap-1 text-xs ${trend >= 0 ? 'text-red-600' : 'text-green-600'}`}>
            {trend >= 0 ? <TrendingUp className="w-3 h-3" /> : <TrendingDown className="w-3 h-3" />}
            <span>{Math.abs(trend)}%</span>
          </div>
        )}
      </div>
      
      <div className="space-y-1">
        <p className="text-2xl font-bold text-gray-900">
          ${amount.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
        </p>
        <p className="text-xs text-gray-500">
          {count} {count === 1 ? 'invoice' : 'invoices'}
        </p>
      </div>
    </div>
  );
}

import { useState, useMemo } from 'react';
import { FileSpreadsheet, TrendingUp, DollarSign, Receipt, AlertCircle } from 'lucide-react';
import { Link } from 'react-router';
import { TimePeriodSelector } from '../components/TimePeriodSelector';
import { ExpenseCard } from '../components/ExpenseCard';
import { mockInvoices, TimePeriod } from '../data/mockData';
import { startOfDay, startOfWeek, startOfMonth, startOfQuarter, subMonths, isAfter, parseISO } from 'date-fns';

export function Dashboard() {
  const [timePeriod, setTimePeriod] = useState<TimePeriod>('monthly');
  const [groupBy, setGroupBy] = useState<'team' | 'project'>('team');

  const filteredInvoices = useMemo(() => {
    const now = new Date();
    let startDate: Date;

    switch (timePeriod) {
      case 'daily':
        startDate = startOfDay(now);
        break;
      case 'weekly':
        startDate = startOfWeek(now);
        break;
      case 'monthly':
        startDate = startOfMonth(now);
        break;
      case 'quarterly':
        startDate = startOfQuarter(now);
        break;
      case 'semi-annual':
        startDate = subMonths(startOfMonth(now), 6);
        break;
      case 'annual':
        startDate = subMonths(startOfMonth(now), 12);
        break;
      default:
        startDate = startOfMonth(now);
    }

    return mockInvoices.filter(invoice => {
      const invoiceDate = parseISO(invoice.date);
      return isAfter(invoiceDate, startDate) || invoiceDate.getTime() === startDate.getTime();
    });
  }, [timePeriod]);

  const expenseGroups = useMemo(() => {
    const groups = new Map<string, { amount: number; count: number }>();

    filteredInvoices.forEach(invoice => {
      const key = groupBy === 'team' ? invoice.team : invoice.project;
      const existing = groups.get(key) || { amount: 0, count: 0 };
      groups.set(key, {
        amount: existing.amount + invoice.amount,
        count: existing.count + 1,
      });
    });

    return Array.from(groups.entries())
      .map(([name, data]) => ({ name, ...data }))
      .sort((a, b) => b.amount - a.amount);
  }, [filteredInvoices, groupBy]);

  const totalExpense = useMemo(() => {
    return filteredInvoices.reduce((sum, invoice) => sum + invoice.amount, 0);
  }, [filteredInvoices]);

  const paidInvoices = useMemo(() => {
    return filteredInvoices.filter(inv => inv.status === 'paid').length;
  }, [filteredInvoices]);

  const pendingInvoices = useMemo(() => {
    return filteredInvoices.filter(inv => inv.status === 'pending').length;
  }, [filteredInvoices]);

  const maxExpense = useMemo(() => {
    return expenseGroups.length > 0 ? expenseGroups[0].amount : 0;
  }, [expenseGroups]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Header */}
      <div className="bg-white/80 backdrop-blur-sm border-b border-gray-200/50 sticky top-0 z-10">
        <div className="px-4 py-5">
          <div className="flex items-start justify-between mb-6">
            <div>
              <h1 className="text-2xl font-bold text-gray-900 mb-1">Welcome back</h1>
              <p className="text-sm text-gray-600">Your invoice overview</p>
            </div>
            <Link
              to="/sheet"
              className="flex items-center gap-2 px-4 py-2.5 bg-white text-gray-700 rounded-xl text-sm hover:bg-gray-50 transition-all shadow-sm border border-gray-200"
            >
              <FileSpreadsheet className="w-4 h-4" />
              <span>Sheet</span>
            </Link>
          </div>

          <TimePeriodSelector selected={timePeriod} onChange={setTimePeriod} />
        </div>
      </div>

      <div className="px-4 py-6 max-w-7xl mx-auto">
        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
          {/* Total Expenses - Gradient */}
          <div className="bg-gradient-to-br from-orange-400 to-rose-500 rounded-2xl p-6 text-white shadow-lg sm:col-span-2">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                <DollarSign className="w-5 h-5" />
              </div>
              <p className="text-white/90 text-sm">Total Expenses</p>
            </div>
            <p className="text-4xl font-bold mb-2">
              ${(totalExpense / 1000).toFixed(1)}k
            </p>
            <p className="text-white/80 text-sm">
              {filteredInvoices.length} invoices • {timePeriod}
            </p>
          </div>

          {/* Paid Rate - Gradient */}
          <div className="bg-gradient-to-br from-emerald-400 to-teal-500 rounded-2xl p-6 text-white shadow-lg">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                <Receipt className="w-5 h-5" />
              </div>
            </div>
            <p className="text-3xl font-bold mb-2">
              {filteredInvoices.length > 0 ? Math.round((paidInvoices / filteredInvoices.length) * 100) : 0}%
            </p>
            <p className="text-white/80 text-sm">Paid invoices</p>
          </div>

          {/* Pending */}
          <div className="bg-gradient-to-br from-violet-400 to-purple-500 rounded-2xl p-6 text-white shadow-lg">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                <AlertCircle className="w-5 h-5" />
              </div>
            </div>
            <p className="text-3xl font-bold mb-2">{pendingInvoices}</p>
            <p className="text-white/80 text-sm">Pending items</p>
          </div>
        </div>

        {/* Group By Toggle */}
        <div className="bg-white rounded-2xl p-2 shadow-sm border border-gray-200/50 mb-6 inline-flex gap-2">
          <button
            onClick={() => setGroupBy('team')}
            className={`px-6 py-2.5 rounded-xl text-sm font-medium transition-all ${
              groupBy === 'team'
                ? 'bg-gray-900 text-white shadow-sm'
                : 'text-gray-600 hover:bg-gray-50'
            }`}
          >
            By Team
          </button>
          <button
            onClick={() => setGroupBy('project')}
            className={`px-6 py-2.5 rounded-xl text-sm font-medium transition-all ${
              groupBy === 'project'
                ? 'bg-gray-900 text-white shadow-sm'
                : 'text-gray-600 hover:bg-gray-50'
            }`}
          >
            By Project
          </button>
        </div>

        {/* Expense Breakdown */}
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-200/50">
          <h2 className="text-lg font-semibold text-gray-900 mb-5">Expense Breakdown</h2>
          
          {expenseGroups.length === 0 ? (
            <div className="py-12 text-center">
              <p className="text-gray-500">No invoices found for this period</p>
            </div>
          ) : (
            <div className="space-y-4">
              {expenseGroups.map((group, index) => {
                const percentage = maxExpense > 0 ? (group.amount / maxExpense) * 100 : 0;
                const colors = [
                  'bg-gradient-to-r from-purple-500 to-purple-600',
                  'bg-gradient-to-r from-blue-500 to-blue-600',
                  'bg-gradient-to-r from-emerald-500 to-emerald-600',
                  'bg-gradient-to-r from-orange-500 to-orange-600',
                  'bg-gradient-to-r from-rose-500 to-rose-600',
                ];
                const color = colors[index % colors.length];

                return (
                  <div key={group.name} className="space-y-2">
                    <div className="flex items-center justify-between text-sm">
                      <span className="font-medium text-gray-900">{group.name}</span>
                      <div className="flex items-center gap-3">
                        <span className="text-gray-600">{Math.round(percentage)}%</span>
                        <span className="font-semibold text-gray-900">
                          ${group.amount.toLocaleString('en-US', { minimumFractionDigits: 0, maximumFractionDigits: 0 })}
                        </span>
                      </div>
                    </div>
                    <div className="relative h-2 bg-gray-100 rounded-full overflow-hidden">
                      <div
                        className={`h-full ${color} rounded-full transition-all duration-500`}
                        style={{ width: `${percentage}%` }}
                      />
                    </div>
                    <p className="text-xs text-gray-500">{group.count} invoices</p>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
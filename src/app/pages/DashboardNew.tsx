import { useState, useMemo } from 'react';
import { TrendingUp, Users, Briefcase, Calendar } from 'lucide-react';
import { AreaChart, Area, XAxis, YAxis, Tooltip, ResponsiveContainer, Line, ComposedChart } from 'recharts';
import { useNavigate } from 'react-router';
import { mockInvoices as initialInvoices, TimePeriod, Invoice } from '../data/mockData';
import { startOfDay, startOfWeek, startOfMonth, startOfQuarter, subMonths, isAfter, parseISO, format } from 'date-fns';
import { Navbar } from '../components/Navbar';
import { NewInvoiceModal } from '../components/NewInvoiceModal';

// Budget cap used for "Budget Usage" (can be made configurable later)
const MONTHLY_BUDGET = 50000;

export function DashboardNew() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('Dashboard');
  const [timePeriod, setTimePeriod] = useState<TimePeriod>('monthly');
  const [invoices, setInvoices] = useState<Invoice[]>(initialInvoices);
  const [modalOpen, setModalOpen] = useState(false);

  const handleAddInvoice = (invoice: Invoice) => {
    setInvoices(prev => [invoice, ...prev]);
  };

  const filteredInvoices = useMemo(() => {
    const now = new Date();
    let startDate: Date;
    switch (timePeriod) {
      case 'daily':    startDate = startOfDay(now); break;
      case 'weekly':   startDate = startOfWeek(now); break;
      case 'monthly':  startDate = startOfMonth(now); break;
      case 'quarterly': startDate = startOfQuarter(now); break;
      case 'semi-annual': startDate = subMonths(startOfMonth(now), 6); break;
      case 'annual':   startDate = subMonths(startOfMonth(now), 12); break;
      default:         startDate = startOfMonth(now);
    }
    return invoices.filter(invoice => {
      const d = parseISO(invoice.date);
      return isAfter(d, startDate) || d.getTime() === startDate.getTime();
    });
  }, [timePeriod, invoices]);

  const teamExpenses = useMemo(() => {
    const groups = new Map<string, { amount: number; count: number }>();
    filteredInvoices.forEach(invoice => {
      const existing = groups.get(invoice.team) || { amount: 0, count: 0 };
      groups.set(invoice.team, { amount: existing.amount + invoice.amount, count: existing.count + 1 });
    });
    return Array.from(groups.entries())
      .map(([name, data]) => ({ name, ...data }))
      .sort((a, b) => b.amount - a.amount);
  }, [filteredInvoices]);

  const projectExpenses = useMemo(() => {
    const groups = new Map<string, { amount: number; count: number }>();
    filteredInvoices.forEach(invoice => {
      const existing = groups.get(invoice.project) || { amount: 0, count: 0 };
      groups.set(invoice.project, { amount: existing.amount + invoice.amount, count: existing.count + 1 });
    });
    return Array.from(groups.entries())
      .map(([name, data]) => ({ name, ...data }))
      .sort((a, b) => b.amount - a.amount)
      .slice(0, 2);
  }, [filteredInvoices]);

  const totalExpense = useMemo(() =>
    filteredInvoices.reduce((sum, inv) => sum + inv.amount, 0),
    [filteredInvoices]
  );

  const recentInvoices = useMemo(() =>
    [...filteredInvoices]
      .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
      .slice(0, 3),
    [filteredInvoices]
  );

  const sortedChartData = useMemo(() => {
    const sorted = [...filteredInvoices].sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());
    const totalMap = new Map<string, number>();
    const highestMap = new Map<string, number>();
    const teamsMap = new Map<string, Set<string>>();
    sorted.forEach(inv => {
      const key = format(parseISO(inv.date), 'MMM dd');
      totalMap.set(key, (totalMap.get(key) || 0) + inv.amount);
      highestMap.set(key, Math.max(highestMap.get(key) || 0, inv.amount));
      if (!teamsMap.has(key)) teamsMap.set(key, new Set());
      teamsMap.get(key)!.add(inv.team);
    });
    return Array.from(totalMap.keys()).map(date => ({
      date,
      amount: totalMap.get(date)!,
      highest: highestMap.get(date)!,
      teamCount: teamsMap.get(date)!.size,
    }));
  }, [filteredInvoices]);

  const allProjects = useMemo(() => {
    const groups = new Map<string, { amount: number; count: number; team: string }>();
    filteredInvoices.forEach(inv => {
      const ex = groups.get(inv.project) || { amount: 0, count: 0, team: inv.team };
      groups.set(inv.project, { amount: ex.amount + inv.amount, count: ex.count + 1, team: inv.team });
    });
    return Array.from(groups.entries()).map(([name, d]) => ({ name, ...d })).sort((a, b) => b.amount - a.amount);
  }, [filteredInvoices]);

  const topTeam = teamExpenses[0];
  const topProject = projectExpenses[0];

  // Stats for sidebar
  const paidCount = filteredInvoices.filter(i => i.status === 'paid').length;
  const pendingCount = filteredInvoices.filter(i => i.status === 'pending').length;
  const total = filteredInvoices.length;
  const rating = total > 0 ? ((paidCount / total) * 10).toFixed(1) : '0.0';
  const pendingPct = total > 0 ? Math.round((pendingCount / total) * 100) : 0;
  const budgetUsagePct = Math.min(Math.round((totalExpense / MONTHLY_BUDGET) * 100), 100);
  const budgetStatus = budgetUsagePct < 60 ? 'Optimal' : budgetUsagePct < 85 ? 'Moderate' : 'High';
  const budgetStatusColor = budgetUsagePct < 60 ? 'text-teal-600 bg-teal-50' : budgetUsagePct < 85 ? 'text-amber-600 bg-amber-50' : 'text-rose-600 bg-rose-50';

  // Tab content for non-dashboard tabs
  const renderTabContent = () => {
    if (activeTab === 'Teams') {
      return (
        <div className="backdrop-blur-xl bg-white/60 rounded-3xl p-6 sm:p-8 border border-white shadow-xl shadow-slate-200/50 animate-in fade-in duration-500">
          <h3 className="text-2xl font-medium text-gray-900 mb-6">Teams Breakdown</h3>
          <div className="space-y-4">
            {teamExpenses.map((team, index) => {
              const colors = ['bg-gradient-to-br from-purple-100 to-purple-200', 'bg-gradient-to-br from-teal-100 to-teal-200', 'bg-gradient-to-br from-orange-100 to-orange-200', 'bg-gradient-to-br from-rose-100 to-rose-200', 'bg-gradient-to-br from-blue-100 to-blue-200'];
              const textColors = ['text-purple-700', 'text-teal-700', 'text-orange-700', 'text-rose-700', 'text-blue-700'];
              const barColors = ['bg-purple-500', 'bg-teal-500', 'bg-orange-500', 'bg-rose-500', 'bg-blue-500'];
              const pct = total > 0 ? Math.round((team.amount / totalExpense) * 100) : 0;
              return (
                <div key={team.name} className="flex items-center gap-4 p-4 rounded-2xl hover:bg-white/80 transition-all border border-transparent hover:border-white hover:shadow-md">
                  <div className={`w-14 h-14 ${colors[index % colors.length]} rounded-2xl flex items-center justify-center flex-shrink-0`}>
                    <span className={`text-base font-bold ${textColors[index % textColors.length]}`}>{team.name.substring(0, 3).toUpperCase()}</span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-semibold text-gray-800">{team.name}</span>
                      <span className="font-bold text-gray-900">${team.amount.toLocaleString()}</span>
                    </div>
                    <div className="text-xs text-gray-500 mb-2">{team.count} invoice{team.count !== 1 ? 's' : ''} · {pct}% of total</div>
                    <div className="h-2 bg-gray-200/60 rounded-full overflow-hidden">
                      <div className={`h-full ${barColors[index % barColors.length]} rounded-full`} style={{ width: `${pct}%` }} />
                    </div>
                  </div>
                </div>
              );
            })}
            {teamExpenses.length === 0 && (
              <p className="text-center text-gray-400 py-12">No team data for this period.</p>
            )}
          </div>
        </div>
      );
    }

    if (activeTab === 'Projects') {
      return (
        <div className="backdrop-blur-xl bg-white/60 rounded-3xl p-6 sm:p-8 border border-white shadow-xl shadow-slate-200/50 animate-in fade-in duration-500">
          <h3 className="text-2xl font-medium text-gray-900 mb-6">Projects Breakdown</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {allProjects.map((project) => (
              <div key={project.name} className="p-5 rounded-2xl bg-white/50 border border-white hover:shadow-lg transition-all">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <div className="font-semibold text-gray-900 mb-1">{project.name}</div>
                    <div className="text-xs font-medium text-purple-600 bg-purple-50 px-2 py-0.5 rounded-md inline-block">{project.team}</div>
                  </div>
                  <div className="text-lg font-bold text-gray-900">${project.amount.toLocaleString()}</div>
                </div>
                <div className="text-xs text-gray-500">{project.count} invoice{project.count !== 1 ? 's' : ''}</div>
              </div>
            ))}
            {allProjects.length === 0 && (
              <p className="text-center text-gray-400 py-12 col-span-2">No project data for this period.</p>
            )}
          </div>
        </div>
      );
    }

    if (activeTab === 'Analytics') {
      const statusCounts = {
        paid: filteredInvoices.filter(i => i.status === 'paid').length,
        pending: filteredInvoices.filter(i => i.status === 'pending').length,
        overdue: filteredInvoices.filter(i => i.status === 'overdue').length,
      };
      return (
        <div className="space-y-6 animate-in fade-in duration-500">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {[
              { label: 'Total Invoices', value: total, color: 'from-purple-500 to-indigo-500' },
              { label: 'Total Spend', value: `$${(totalExpense / 1000).toFixed(1)}k`, color: 'from-teal-500 to-emerald-500' },
              { label: 'Avg. Invoice', value: total > 0 ? `$${Math.round(totalExpense / total).toLocaleString()}` : '$0', color: 'from-rose-500 to-orange-500' },
            ].map(stat => (
              <div key={stat.label} className={`bg-gradient-to-br ${stat.color} rounded-3xl p-6 text-white shadow-xl`}>
                <div className="text-3xl font-light mb-1">{stat.value}</div>
                <div className="text-sm font-medium opacity-80">{stat.label}</div>
              </div>
            ))}
          </div>
          <div className="backdrop-blur-xl bg-white/60 rounded-3xl p-6 sm:p-8 border border-white shadow-xl shadow-slate-200/50">
            <h3 className="text-xl font-medium text-gray-900 mb-6">Status Distribution</h3>
            <div className="space-y-4">
              {([['paid', 'teal'], ['pending', 'purple'], ['overdue', 'rose']] as const).map(([s, c]) => {
                const cnt = statusCounts[s];
                const pct = total > 0 ? Math.round((cnt / total) * 100) : 0;
                return (
                  <div key={s} className="group">
                    <div className="flex justify-between mb-2 text-sm font-medium">
                      <span className="capitalize text-gray-800">{s}</span>
                      <span className="text-gray-500">{cnt} ({pct}%)</span>
                    </div>
                    <div className="h-3 bg-gray-200/60 rounded-full overflow-hidden">
                      <div className={`h-full bg-${c}-500 rounded-full transition-all duration-700`} style={{ width: `${pct}%` }} />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="backdrop-blur-xl bg-white/60 rounded-3xl p-6 sm:p-8 border border-white shadow-xl shadow-slate-200/50">
            <h3 className="text-xl font-medium text-gray-900 mb-4">Spending Over Time</h3>
            {/* Legend */}
            <div className="flex items-center gap-4 sm:gap-6 text-xs font-medium uppercase tracking-widest mb-6 flex-wrap">
              <div className="flex items-center gap-2">
                <div className="w-2.5 h-2.5 bg-violet-500 rounded-full shadow-[0_0_8px_rgba(139,92,246,0.5)]" />
                <span className="text-gray-500">Total Spend</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2.5 h-2.5 bg-rose-500 rounded-full shadow-[0_0_8px_rgba(244,63,94,0.5)]" />
                <span className="text-gray-500">Highest Spend</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2.5 h-2.5 bg-teal-500 rounded-full shadow-[0_0_8px_rgba(20,184,166,0.5)]" />
                <span className="text-gray-500">Active Teams</span>
              </div>
            </div>
            <div className="h-64 w-full">
              {sortedChartData.length > 0 ? (
                <ResponsiveContainer width="100%" height="100%">
                  <ComposedChart data={sortedChartData} margin={{ top: 10, right: 30, left: -20, bottom: 0 }}>
                    <defs>
                      <linearGradient id="colorAmountAnalytics" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#8b5cf6" stopOpacity={0.3}/>
                        <stop offset="95%" stopColor="#8b5cf6" stopOpacity={0}/>
                      </linearGradient>
                    </defs>
                    <XAxis dataKey="date" axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: '#9ca3af' }} dy={10} />
                    <YAxis yAxisId="left" axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: '#9ca3af' }} tickFormatter={(val) => `$${val/1000}k`} />
                    <YAxis yAxisId="right" orientation="right" axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: '#9ca3af' }} tickFormatter={(val) => `${val}`} width={25} />
                    <Tooltip
                      contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 10px 15px -3px rgba(0,0,0,0.1)', background: 'rgba(255,255,255,0.9)', backdropFilter: 'blur(8px)' }}
                      formatter={(value: number, name: string) => {
                        if (name === 'amount') return [`$${value.toLocaleString()}`, 'Total Spend'];
                        if (name === 'highest') return [`$${value.toLocaleString()}`, 'Highest Invoice'];
                        if (name === 'teamCount') return [`${value} team${value !== 1 ? 's' : ''}`, 'Active Teams'];
                        return [value, name];
                      }}
                    />
                    <Area yAxisId="left" type="monotone" dataKey="amount" stroke="#8b5cf6" strokeWidth={3} fillOpacity={1} fill="url(#colorAmountAnalytics)" activeDot={{ r: 6, stroke: '#fff', strokeWidth: 2, fill: '#8b5cf6' }} />
                    <Line yAxisId="left" type="monotone" dataKey="highest" stroke="#f43f5e" strokeWidth={2.5} dot={{ r: 4, fill: '#f43f5e', stroke: '#fff', strokeWidth: 2 }} activeDot={{ r: 6, stroke: '#fff', strokeWidth: 2, fill: '#f43f5e' }} strokeDasharray="5 3" />
                    <Line yAxisId="right" type="monotone" dataKey="teamCount" stroke="#0d9488" strokeWidth={2} dot={{ r: 3, fill: '#0d9488', stroke: '#fff', strokeWidth: 2 }} activeDot={{ r: 5, stroke: '#fff', strokeWidth: 2, fill: '#0d9488' }} />
                  </ComposedChart>
                </ResponsiveContainer>
              ) : (
                <div className="h-full flex items-center justify-center text-gray-400 font-medium bg-white/30 rounded-2xl border border-white/50 border-dashed">No data available</div>
              )}
            </div>
          </div>
        </div>
      );
    }
    return null; // Dashboard tab falls through to main render below
  };

  return (
    <div className="min-h-screen bg-[conic-gradient(at_top_right,_var(--tw-gradient-stops))] from-slate-100 via-purple-50 to-teal-50 selection:bg-purple-200">
      <Navbar activeTab={activeTab} onTabChange={setActiveTab} />

      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-12">
        {/* Header */}
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-6 mb-8 animate-in fade-in slide-in-from-bottom-5 duration-700">
          <div>
            <h2 className="text-4xl sm:text-5xl font-extralight tracking-tight text-gray-900 mb-2 sm:mb-3">
              Welcome back, <br className="sm:hidden" /><span className="font-medium bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">Kristin</span>
            </h2>
            <p className="text-base sm:text-lg font-light text-gray-500">
              You have <span className="font-semibold text-purple-600 px-2 py-0.5 bg-purple-100 rounded-md whitespace-nowrap">{filteredInvoices.length} invoices</span> to review today.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row w-full md:w-auto gap-3 sm:gap-4">
            <button
              onClick={() => navigate('/sheet')}
              className="w-full sm:w-auto bg-white/70 backdrop-blur-md px-6 sm:px-8 py-3 sm:py-3.5 rounded-full text-sm font-medium text-gray-700 border border-white/80 shadow-sm hover:shadow-lg hover:-translate-y-1 hover:bg-white transition-all duration-300"
            >
              View Schedule
            </button>
            <button
              onClick={() => setModalOpen(true)}
              className="w-full sm:w-auto bg-gradient-to-r from-purple-600 to-indigo-600 text-white px-6 sm:px-8 py-3 sm:py-3.5 rounded-full text-sm font-medium shadow-xl shadow-purple-600/30 hover:shadow-2xl hover:shadow-purple-600/40 hover:-translate-y-1 hover:scale-105 transition-all duration-300"
            >
              New Invoice
            </button>
          </div>
        </div>

        {/* Non-Dashboard Tab Content */}
        {activeTab !== 'Dashboard' ? (
          renderTabContent()
        ) : (
          <div className="flex flex-col lg:flex-row gap-6 lg:gap-8">
            {/* Left Column */}
            <div className="flex-1 space-y-6 lg:space-y-10 min-w-0">
              {/* Expense Overview Card */}
              <div className="group relative backdrop-blur-xl bg-white/60 rounded-3xl p-6 sm:p-8 border border-white shadow-xl shadow-slate-200/50 hover:shadow-2xl transition-all duration-500 overflow-hidden animate-in fade-in slide-in-from-bottom-8 duration-700 delay-100">
                <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-purple-400/20 to-teal-400/20 rounded-full blur-3xl -mr-20 -mt-20 transition-transform duration-700 group-hover:scale-150" />
                <div className="relative">
                  <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6 sm:mb-8">
                    <div>
                      <h3 className="text-xl sm:text-2xl font-medium text-gray-900 mb-1">Expense Overview</h3>
                      <p className="text-xs sm:text-sm font-light text-gray-500">Spending analytics</p>
                    </div>
                    <div className="bg-white/80 backdrop-blur-sm rounded-full px-4 sm:px-5 py-2 sm:py-2.5 text-xs sm:text-sm font-medium text-gray-700 flex items-center gap-2 shadow-sm border border-white/60 w-fit">
                      Range: <span className="capitalize text-purple-600">{timePeriod}</span>
                      <span className="text-gray-400 ml-1">▼</span>
                    </div>
                  </div>

                  {/* Time Period Selector */}
                  <div className="overflow-x-auto pb-4 -mx-2 px-2 sm:mx-0 sm:px-0 sm:pb-0 hide-scrollbar mb-8 sm:mb-10">
                    <div className="flex items-center gap-2 p-1.5 bg-white/40 backdrop-blur-md rounded-full w-max border border-white/50 shadow-inner">
                      {(['daily', 'weekly', 'monthly', 'quarterly', 'semi-annual', 'annual'] as TimePeriod[]).map((period) => (
                        <button
                          key={period}
                          onClick={() => setTimePeriod(period)}
                          className={`px-4 sm:px-6 py-2 rounded-full text-xs sm:text-sm font-medium capitalize transition-all duration-300 whitespace-nowrap ${
                            timePeriod === period
                              ? 'bg-white text-purple-700 shadow-md scale-105'
                              : 'text-gray-500 hover:text-gray-900 hover:bg-white/50'
                          }`}
                        >
                          {period === 'semi-annual' ? 'Semi' : period}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Stats */}
                  <div className="flex flex-col sm:flex-row items-end justify-between gap-6">
                    <div className="flex items-center gap-4 sm:gap-6 text-xs sm:text-sm font-medium uppercase tracking-widest w-full sm:w-auto order-last sm:order-first flex-wrap">
                      <div className="flex items-center gap-2 sm:gap-3">
                        <div className="w-2.5 sm:w-3 h-2.5 sm:h-3 bg-violet-500 rounded-full shadow-[0_0_10px_rgba(139,92,246,0.5)]" />
                        <span className="text-gray-500">Total Spend</span>
                      </div>
                      <div className="flex items-center gap-2 sm:gap-3">
                        <div className="w-2.5 sm:w-3 h-2.5 sm:h-3 bg-rose-500 rounded-full shadow-[0_0_10px_rgba(244,63,94,0.5)]" />
                        <span className="text-gray-500">Highest Spend</span>
                      </div>
                      <div className="flex items-center gap-2 sm:gap-3">
                        <div className="w-2.5 sm:w-3 h-2.5 sm:h-3 bg-teal-500 rounded-full shadow-[0_0_10px_rgba(20,184,166,0.5)]" />
                        <span className="text-gray-500">Active Teams</span>
                      </div>
                    </div>
                    <div className="text-left sm:text-right w-full sm:w-auto">
                      <div className="text-5xl sm:text-6xl font-light tracking-tighter text-gray-900 mb-1">
                        <span className="text-gray-400 mr-1">$</span>
                        {(totalExpense / 1000).toFixed(1)}
                        <span className="text-2xl sm:text-3xl text-gray-500 ml-1">k</span>
                      </div>
                      <div className="text-xs sm:text-sm font-medium text-purple-600 uppercase tracking-widest mt-2 bg-purple-100/50 inline-block px-3 py-1 rounded-lg">
                        Total Spend
                      </div>
                    </div>
                  </div>

                  {/* Chart */}
                  <div className="h-64 mt-8 w-full">
                    {sortedChartData.length > 0 ? (
                      <ResponsiveContainer width="100%" height="100%">
                        <ComposedChart data={sortedChartData} margin={{ top: 10, right: 30, left: -20, bottom: 0 }}>
                          <defs>
                            <linearGradient id="colorAmount" x1="0" y1="0" x2="0" y2="1">
                              <stop offset="5%" stopColor="#8b5cf6" stopOpacity={0.3}/>
                              <stop offset="95%" stopColor="#8b5cf6" stopOpacity={0}/>
                            </linearGradient>
                          </defs>
                          <XAxis dataKey="date" axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: '#9ca3af' }} dy={10} />
                          <YAxis yAxisId="left" axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: '#9ca3af' }} tickFormatter={(val) => `$${val/1000}k`} />
                          <YAxis yAxisId="right" orientation="right" axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: '#9ca3af' }} tickFormatter={(val) => `${val}`} width={25} />
                          <Tooltip
                            contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 10px 15px -3px rgba(0,0,0,0.1)', background: 'rgba(255,255,255,0.9)', backdropFilter: 'blur(8px)' }}
                            formatter={(value: number, name: string) => {
                              if (name === 'amount') return [`$${value.toLocaleString()}`, 'Total Spend'];
                              if (name === 'highest') return [`$${value.toLocaleString()}`, 'Highest Invoice'];
                              if (name === 'teamCount') return [`${value} team${value !== 1 ? 's' : ''}`, 'Active Teams'];
                              return [value, name];
                            }}
                          />
                          <Area yAxisId="left" type="monotone" dataKey="amount" stroke="#8b5cf6" strokeWidth={3} fillOpacity={1} fill="url(#colorAmount)" activeDot={{ r: 6, stroke: '#fff', strokeWidth: 2, fill: '#8b5cf6' }} />
                          <Line yAxisId="left" type="monotone" dataKey="highest" stroke="#f43f5e" strokeWidth={2.5} dot={{ r: 4, fill: '#f43f5e', stroke: '#fff', strokeWidth: 2 }} activeDot={{ r: 6, stroke: '#fff', strokeWidth: 2, fill: '#f43f5e' }} strokeDasharray="5 3" />
                          <Line yAxisId="right" type="monotone" dataKey="teamCount" stroke="#0d9488" strokeWidth={2} dot={{ r: 3, fill: '#0d9488', stroke: '#fff', strokeWidth: 2 }} activeDot={{ r: 5, stroke: '#fff', strokeWidth: 2, fill: '#0d9488' }} />
                        </ComposedChart>
                      </ResponsiveContainer>
                    ) : (
                      <div className="h-full w-full flex items-center justify-center text-gray-400 font-medium bg-white/30 rounded-2xl border border-white/50 border-dashed">
                        No data available for this range
                      </div>
                    )}
                  </div>
                </div>
              </div>

              {/* Top Team + Top Project Cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 min-w-0">
                {topTeam && (
                  <div
                    className="group relative rounded-3xl overflow-hidden shadow-xl shadow-teal-900/10 hover:shadow-2xl hover:shadow-teal-900/20 hover:-translate-y-1 transition-all duration-500 border border-white/20 animate-in fade-in slide-in-from-bottom-8 duration-700 delay-200"
                    style={{ background: 'linear-gradient(135deg, rgb(13 148 136) 0%, rgb(45 212 191) 100%)' }}
                  >
                    <div className="absolute top-0 right-0 w-48 h-48 bg-white/20 rounded-full blur-3xl -mr-12 -mt-12 transition-transform duration-700 group-hover:scale-150" />
                    <div className="relative p-8 lg:p-10 h-full flex flex-col justify-between min-h-[280px] lg:min-h-[320px]">
                      <div className="flex items-start justify-between">
                        <div className="backdrop-blur-xl bg-white/20 rounded-2xl p-3 sm:p-4 shadow-lg border border-white/10">
                          <Users className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                        </div>
                        <div className="px-3 sm:px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md text-[10px] sm:text-xs font-semibold text-teal-50 uppercase tracking-widest border border-white/10">
                          Top Spend
                        </div>
                      </div>
                      <div className="mt-8">
                        <h3 className="text-3xl sm:text-4xl font-medium text-white mb-2 sm:mb-4 tracking-tight">{topTeam.name}</h3>
                        <p className="text-sm sm:text-base font-light text-teal-50/90 mb-6 sm:mb-8 max-w-[90%] leading-relaxed">
                          Leading team expenses with <span className="font-semibold">{topTeam.count} invoices</span>.
                        </p>
                        <div className="text-2xl sm:text-3xl font-light text-white bg-black/10 inline-block px-5 sm:px-6 py-2 rounded-xl backdrop-blur-sm border border-white/5">
                          ${topTeam.amount.toLocaleString()}
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {topProject && (
                  <div
                    className="group relative rounded-3xl overflow-hidden shadow-xl shadow-rose-900/10 hover:shadow-2xl hover:shadow-rose-900/20 hover:-translate-y-1 transition-all duration-500 border border-white/20 animate-in fade-in slide-in-from-bottom-8 duration-700 delay-300"
                    style={{ background: 'linear-gradient(135deg, rgb(225 29 72) 0%, rgb(251 113 133) 100%)' }}
                  >
                    <div className="absolute top-0 right-0 w-48 h-48 bg-white/20 rounded-full blur-3xl -mr-12 -mt-12 transition-transform duration-700 group-hover:scale-150" />
                    <div className="relative p-8 lg:p-10 h-full flex flex-col justify-between min-h-[280px] lg:min-h-[320px]">
                      <div className="flex items-start justify-between">
                        <div className="backdrop-blur-xl bg-white/20 rounded-2xl p-3 sm:p-4 shadow-lg border border-white/10">
                          <Briefcase className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                        </div>
                        <div className="px-3 sm:px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md text-[10px] sm:text-xs font-semibold text-rose-50 uppercase tracking-widest border border-white/10">
                          Active Project
                        </div>
                      </div>
                      <div className="mt-8">
                        <h3 className="text-3xl sm:text-4xl font-medium text-white mb-2 sm:mb-4 tracking-tight truncate max-w-[90%]">{topProject.name}</h3>
                        <p className="text-sm sm:text-base font-light text-rose-50/90 mb-6 sm:mb-8 max-w-[90%] leading-relaxed">
                          Highest project expenses with <span className="font-semibold">{topProject.count} invoices</span>.
                        </p>
                        <div className="backdrop-blur-xl bg-black/10 rounded-xl px-4 sm:px-6 py-2 sm:py-3 inline-flex items-center gap-2 sm:gap-3 text-white border border-white/5 whitespace-nowrap">
                          <Calendar className="w-4 h-4 sm:w-5 sm:h-5 opacity-80" />
                          <span className="text-xs sm:text-sm font-medium tracking-wide">This {timePeriod}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Active Expenses */}
              <div className="backdrop-blur-xl bg-white/60 rounded-3xl p-6 sm:p-8 border border-white shadow-xl shadow-slate-200/50 animate-in fade-in slide-in-from-bottom-8 duration-700 delay-500 min-w-0">
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6 sm:mb-8">
                  <h3 className="text-xl sm:text-2xl font-medium text-gray-900">Active Expenses</h3>
                  <button
                    onClick={() => navigate('/sheet')}
                    className="w-full sm:w-auto justify-center text-sm font-semibold text-purple-600 hover:text-purple-700 bg-purple-50 hover:bg-purple-100 px-5 py-2.5 rounded-full transition-colors flex items-center gap-2"
                  >
                    View All Projects <TrendingUp className="w-4 h-4" />
                  </button>
                </div>
                <div className="space-y-4 sm:space-y-6">
                  {teamExpenses.slice(0, 4).map((team, index) => {
                    const colors = ['bg-gradient-to-br from-purple-100 to-purple-200', 'bg-gradient-to-br from-teal-100 to-teal-200', 'bg-gradient-to-br from-orange-100 to-orange-200', 'bg-gradient-to-br from-rose-100 to-rose-200'];
                    const textColors = ['text-purple-700', 'text-teal-700', 'text-orange-700', 'text-rose-700'];
                    const barColors = ['bg-purple-500', 'bg-teal-500', 'bg-orange-500', 'bg-rose-500'];
                    const percentage = totalExpense > 0 ? Math.round((team.amount / totalExpense) * 100) : 0;
                    return (
                      <div key={team.name} className="group flex items-center gap-4 sm:gap-6 p-3 sm:p-4 rounded-2xl hover:bg-white/80 transition-all duration-300 cursor-pointer border border-transparent hover:border-white hover:shadow-md min-w-0">
                        <div className={`w-12 h-12 sm:w-14 sm:h-14 ${colors[index % colors.length]} rounded-2xl flex items-center justify-center flex-shrink-0 shadow-sm transition-transform group-hover:scale-110`}>
                          <span className={`text-sm sm:text-base font-bold ${textColors[index % textColors.length]}`}>
                            {team.name.substring(0, 3).toUpperCase()}
                          </span>
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center justify-between mb-1 sm:mb-2 gap-2">
                            <span className="text-sm sm:text-base font-semibold text-gray-800 truncate">{team.name}</span>
                            <span className="text-sm sm:text-base font-bold text-gray-900 whitespace-nowrap">${team.amount.toLocaleString()}</span>
                          </div>
                          <div className="text-xs sm:text-sm font-medium text-gray-500 mb-2 sm:mb-3 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-1 sm:gap-0">
                            <span className="truncate">{team.count} invoice{team.count !== 1 ? 's' : ''}</span>
                            <span className={`text-[10px] sm:text-xs font-bold ${textColors[index % textColors.length]} bg-white px-2 py-0.5 rounded-md shadow-sm whitespace-nowrap`}>{percentage}% of total</span>
                          </div>
                          <div className="relative h-2 sm:h-2.5 bg-gray-200/60 rounded-full overflow-hidden shadow-inner">
                            <div
                              className={`absolute top-0 left-0 h-full ${barColors[index % barColors.length]} rounded-full transition-all duration-1000 ease-out`}
                              style={{ width: `${percentage}%` }}
                            />
                          </div>
                        </div>
                      </div>
                    );
                  })}
                  {teamExpenses.length === 0 && (
                    <p className="text-center text-gray-400 py-8">No expense data for this period.</p>
                  )}
                </div>
              </div>
            </div>

            {/* Right Sidebar */}
            <div className="w-full lg:w-80 space-y-6 lg:space-y-8 animate-in fade-in slide-in-from-right-8 duration-700 delay-300">
              {/* Profile Card */}
              <div className="backdrop-blur-xl bg-white/60 rounded-3xl p-6 sm:p-8 border border-white shadow-xl shadow-slate-200/50 text-center relative overflow-hidden group hover:shadow-2xl transition-all duration-500">
                <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-r from-purple-100 to-teal-100 opacity-50 transition-opacity group-hover:opacity-100" />
                <div className="relative">
                  <div className="relative w-24 h-24 sm:w-28 sm:h-28 mx-auto mb-4 sm:mb-6">
                    <div className="w-full h-full bg-gradient-to-tr from-purple-600 to-indigo-500 rounded-full p-1 shadow-xl shadow-purple-500/20 group-hover:scale-105 transition-transform duration-500">
                      <div className="w-full h-full rounded-full border-4 border-white bg-white flex items-center justify-center font-bold text-2xl sm:text-3xl text-gray-800">
                        KW
                      </div>
                    </div>
                    {/* Fixed: online dot with correct relative parent */}
                    <div className="absolute bottom-1 right-1 w-5 h-5 sm:w-6 sm:h-6 bg-emerald-500 rounded-full border-4 border-white shadow-sm" />
                  </div>
                  <h4 className="text-lg sm:text-xl font-bold text-gray-900 mb-1">Kristin Watson</h4>
                  <p className="text-xs sm:text-sm font-medium text-purple-600 mb-6 sm:mb-8 bg-purple-50 inline-block px-3 py-1 sm:px-4 sm:py-1.5 rounded-full">Senior UI/UX Designer</p>
                  <div className="grid grid-cols-3 gap-2 sm:gap-3 divide-x divide-gray-200/50 bg-white/50 backdrop-blur-sm rounded-2xl p-3 sm:p-4 border border-white/60 shadow-sm">
                    <div>
                      <div className="text-2xl sm:text-3xl font-light text-gray-900 mb-1">{paidCount}</div>
                      <div className="text-[9px] sm:text-[10px] font-bold text-gray-500 uppercase tracking-widest">Done</div>
                    </div>
                    <div>
                      <div className="text-2xl sm:text-3xl font-light text-gray-900 mb-1">{pendingCount}</div>
                      <div className="text-[9px] sm:text-[10px] font-bold text-gray-500 uppercase tracking-widest">Active</div>
                    </div>
                    <div>
                      <div className="text-2xl sm:text-3xl font-light text-gray-900 mb-1">{rating}</div>
                      <div className="text-[9px] sm:text-[10px] font-bold text-gray-500 uppercase tracking-widest">Rating</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Recent Activity */}
              <div className="backdrop-blur-xl bg-white/60 rounded-3xl p-6 sm:p-8 border border-white shadow-xl shadow-slate-200/50">
                <div className="flex items-center justify-between mb-6 sm:mb-8">
                  <h4 className="text-lg sm:text-xl font-medium text-gray-900">Recent</h4>
                  <button
                    onClick={() => navigate('/sheet')}
                    className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-gray-500 hover:text-purple-600 hover:shadow-md transition-all"
                  >
                    <span className="text-sm ml-0.5">▶</span>
                  </button>
                </div>
                <div className="space-y-4 sm:space-y-5">
                  {recentInvoices.map((invoice, index) => (
                    <div key={invoice.id} className="group p-3 sm:p-4 rounded-2xl bg-white/50 hover:bg-white border border-transparent hover:border-purple-100 hover:shadow-lg transition-all duration-300">
                      <div className="flex items-start justify-between mb-2">
                        <div className="flex-1 min-w-0">
                          <div className="text-xs sm:text-sm font-semibold text-gray-800 mb-1 group-hover:text-purple-700 transition-colors truncate">{invoice.description}</div>
                          <div className="text-[10px] sm:text-xs font-medium text-gray-500 flex items-center gap-1 sm:gap-2 truncate">
                            <span className="px-1.5 sm:px-2 py-0.5 rounded bg-gray-100 truncate">{invoice.team}</span>
                            <span>•</span>
                            <span className="whitespace-nowrap">{format(parseISO(invoice.date), 'MMM d')}</span>
                          </div>
                        </div>
                        <span className="text-sm font-bold text-gray-700 whitespace-nowrap ml-2">${invoice.amount.toLocaleString()}</span>
                      </div>
                      {index === 0 && (
                        <button
                          onClick={() => navigate('/sheet')}
                          className="w-full mt-3 sm:mt-4 bg-gradient-to-r from-purple-100 to-indigo-100 text-purple-700 py-2 sm:py-2.5 rounded-xl text-xs sm:text-sm font-semibold hover:from-purple-200 hover:to-indigo-200 transition-colors border border-purple-200/50 text-center"
                        >
                          Review Invoice
                        </button>
                      )}
                    </div>
                  ))}
                  {recentInvoices.length === 0 && (
                    <p className="text-center text-gray-400 py-4 text-sm">No recent invoices.</p>
                  )}
                </div>
              </div>

              {/* Global Status */}
              <div className="backdrop-blur-xl bg-white/60 rounded-3xl p-6 sm:p-8 border border-white shadow-xl shadow-slate-200/50 hover:shadow-2xl transition-all duration-300">
                <h4 className="text-[10px] sm:text-xs font-bold text-gray-500 uppercase tracking-widest mb-4 sm:mb-6">Global Status</h4>
                <div className="space-y-5 sm:space-y-6">
                  {/* Budget Usage — now dynamic */}
                  <div className="group">
                    <div className="flex items-center justify-between mb-2 sm:mb-3 text-xs sm:text-sm font-medium">
                      <span className="text-gray-800">Budget Usage</span>
                      <span className={`${budgetStatusColor} px-2.5 py-1 rounded-md`}>{budgetStatus}</span>
                    </div>
                    <div className="h-2.5 sm:h-3 bg-gray-200/60 rounded-full overflow-hidden shadow-inner relative">
                      <div
                        className="absolute top-0 left-0 h-full bg-gradient-to-r from-teal-400 to-emerald-500 rounded-full transition-all duration-700"
                        style={{ width: `${budgetUsagePct}%` }}
                      />
                    </div>
                    <div className="text-[10px] text-gray-400 mt-1 text-right">${totalExpense.toLocaleString()} / ${MONTHLY_BUDGET.toLocaleString()}</div>
                  </div>
                  {/* Pending Review — NaN-safe */}
                  <div className="group">
                    <div className="flex items-center justify-between mb-2 sm:mb-3 text-xs sm:text-sm font-medium">
                      <span className="text-gray-800">Pending Review</span>
                      <span className="text-purple-600 bg-purple-50 px-2.5 py-1 rounded-md">{pendingPct}%</span>
                    </div>
                    <div className="h-2.5 sm:h-3 bg-gray-200/60 rounded-full overflow-hidden shadow-inner relative">
                      <div
                        className="absolute top-0 left-0 h-full bg-gradient-to-r from-purple-400 to-indigo-500 rounded-full transition-all duration-700"
                        style={{ width: `${pendingPct}%` }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      <NewInvoiceModal isOpen={modalOpen} onClose={() => setModalOpen(false)} onAdd={handleAddInvoice} />
    </div>
  );
}

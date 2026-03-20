import { useState, useMemo } from 'react';
import {
  Search, Filter, Download, Plus,
  ArrowUpDown, MoreHorizontal, CheckCircle2,
  Clock, XCircle, ChevronLeft, ChevronRight,
  Eye, Pencil, Trash2, X
} from 'lucide-react';
import { useNavigate } from 'react-router';
import { mockInvoices as initialInvoices, Invoice } from '../data/mockData';
import { format, parseISO } from 'date-fns';
import { Navbar } from '../components/Navbar';
import { NewInvoiceModal } from '../components/NewInvoiceModal';

type SortField = 'date' | 'amount' | 'status' | 'project';
type SortOrder = 'asc' | 'desc';

const PAGE_SIZE = 8;

// Action dropdown for each row
function RowActions({ onView, onEdit, onDelete }: { onView: () => void; onEdit: () => void; onDelete: () => void }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="relative">
      <button
        onClick={(e) => { e.stopPropagation(); setOpen(o => !o); }}
        className="p-2 text-gray-400 hover:text-purple-600 hover:bg-purple-50 rounded-xl transition-colors"
        aria-label="Row actions"
      >
        <MoreHorizontal className="w-5 h-5" />
      </button>
      {open && (
        <>
          <div className="fixed inset-0 z-10" onClick={() => setOpen(false)} />
          <div className="absolute right-0 mt-1 w-40 bg-white rounded-2xl shadow-xl border border-gray-100 z-20 py-1 animate-in fade-in slide-in-from-top-2 duration-150">
            <button onClick={() => { onView(); setOpen(false); }} className="w-full flex items-center gap-2.5 px-4 py-2.5 text-sm text-gray-700 hover:bg-purple-50 hover:text-purple-700 transition-colors">
              <Eye className="w-4 h-4" /> View
            </button>
            <button onClick={() => { onEdit(); setOpen(false); }} className="w-full flex items-center gap-2.5 px-4 py-2.5 text-sm text-gray-700 hover:bg-purple-50 hover:text-purple-700 transition-colors">
              <Pencil className="w-4 h-4" /> Edit
            </button>
            <div className="my-1 border-t border-gray-100" />
            <button onClick={() => { onDelete(); setOpen(false); }} className="w-full flex items-center gap-2.5 px-4 py-2.5 text-sm text-rose-600 hover:bg-rose-50 transition-colors">
              <Trash2 className="w-4 h-4" /> Delete
            </button>
          </div>
        </>
      )}
    </div>
  );
}

// View Invoice detail modal
function InvoiceDetailModal({ invoice, onClose }: { invoice: Invoice; onClose: () => void }) {
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" onClick={onClose} />
      <div className="relative w-full max-w-md bg-white rounded-3xl shadow-2xl animate-in fade-in zoom-in-95 duration-200 overflow-hidden">
        <div className="bg-gradient-to-r from-purple-600 to-indigo-600 px-6 py-5 flex items-start justify-between">
          <div>
            <div className="text-xs font-bold text-purple-200 uppercase tracking-widest mb-1">{invoice.invoiceNumber}</div>
            <h2 className="text-xl font-bold text-white">{invoice.description}</h2>
          </div>
          <button onClick={onClose} className="w-8 h-8 flex items-center justify-center rounded-full bg-white/20 hover:bg-white/30 text-white transition-colors mt-1">
            <X className="w-4 h-4" />
          </button>
        </div>
        <div className="p-6 space-y-4">
          {[
            ['Team', invoice.team],
            ['Project', invoice.project],
            ['Vendor', invoice.vendor || '—'],
            ['Date', format(parseISO(invoice.date), 'MMMM dd, yyyy')],
            ['Status', invoice.status],
            ['Amount', `$${invoice.amount.toLocaleString(undefined, { minimumFractionDigits: 2 })}`],
          ].map(([label, value]) => (
            <div key={label} className="flex justify-between items-center py-3 border-b border-gray-100 last:border-0">
              <span className="text-sm font-medium text-gray-500">{label}</span>
              <span className={`text-sm font-semibold ${label === 'Amount' ? 'text-gray-900 text-base' : 'text-gray-800'} capitalize`}>{value}</span>
            </div>
          ))}
        </div>
        <div className="px-6 pb-6">
          <button onClick={onClose} className="w-full py-3 rounded-2xl bg-gray-100 text-gray-700 text-sm font-semibold hover:bg-gray-200 transition-colors">
            Close
          </button>
        </div>
      </div>
    </div>
  );
}

// Status components
function StatusIcon({ status }: { status: Invoice['status'] }) {
  switch (status) {
    case 'paid':    return <CheckCircle2 className="w-4 h-4 text-teal-600" />;
    case 'pending': return <Clock className="w-4 h-4 text-purple-600" />;
    case 'overdue': return <XCircle className="w-4 h-4 text-rose-600" />;
  }
}

function StatusBadge({ status }: { status: Invoice['status'] }) {
  const styles: Record<Invoice['status'], string> = {
    paid:    'bg-teal-50 text-teal-700 border-teal-200/50',
    pending: 'bg-purple-50 text-purple-700 border-purple-200/50',
    overdue: 'bg-rose-50 text-rose-700 border-rose-200/50',
  };
  return (
    <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-widest border ${styles[status]}`}>
      <StatusIcon status={status} />
      {status}
    </span>
  );
}

// CSV export helper
function exportToCSV(invoices: Invoice[]) {
  const headers = ['Invoice #', 'Date', 'Description', 'Project', 'Team', 'Vendor', 'Amount', 'Status'];
  const rows = invoices.map(inv => [
    inv.invoiceNumber,
    format(parseISO(inv.date), 'yyyy-MM-dd'),
    `"${inv.description.replace(/"/g, '""')}"`,
    `"${inv.project}"`,
    inv.team,
    inv.vendor || '',
    inv.amount.toFixed(2),
    inv.status,
  ]);
  const csv = [headers.join(','), ...rows.map(r => r.join(','))].join('\n');
  const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `invoices-${format(new Date(), 'yyyy-MM-dd')}.csv`;
  a.click();
  URL.revokeObjectURL(url);
}

export function SheetView() {
  const navigate = useNavigate();
  const [invoices, setInvoices] = useState<Invoice[]>(initialInvoices);
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState<string>('all');
  const [sortField, setSortField] = useState<SortField>('date');
  const [sortOrder, setSortOrder] = useState<SortOrder>('desc');
  const [currentPage, setCurrentPage] = useState(1);
  const [modalOpen, setModalOpen] = useState(false);
  const [viewInvoice, setViewInvoice] = useState<Invoice | null>(null);
  const [deleteConfirm, setDeleteConfirm] = useState<string | null>(null);

  const handleSort = (field: SortField) => {
    if (sortField === field) {
      setSortOrder(o => o === 'asc' ? 'desc' : 'asc');
    } else {
      setSortField(field);
      setSortOrder('desc');
    }
    setCurrentPage(1);
  };

  const handleAddInvoice = (invoice: Invoice) => {
    setInvoices(prev => [invoice, ...prev]);
    setCurrentPage(1);
  };

  const handleDelete = (id: string) => {
    setInvoices(prev => prev.filter(inv => inv.id !== id));
    setDeleteConfirm(null);
  };

  const filteredAndSorted = useMemo(() => {
    let result = [...invoices];
    if (searchTerm) {
      const lower = searchTerm.toLowerCase();
      result = result.filter(inv =>
        inv.description.toLowerCase().includes(lower) ||
        inv.project.toLowerCase().includes(lower) ||
        inv.team.toLowerCase().includes(lower) ||
        (inv.vendor?.toLowerCase().includes(lower) ?? false) ||
        inv.invoiceNumber.toLowerCase().includes(lower)
      );
    }
    if (statusFilter !== 'all') {
      result = result.filter(inv => inv.status === statusFilter);
    }
    result.sort((a, b) => {
      let cmp = 0;
      switch (sortField) {
        case 'date':    cmp = new Date(a.date).getTime() - new Date(b.date).getTime(); break;
        case 'amount':  cmp = a.amount - b.amount; break;
        case 'status':  cmp = a.status.localeCompare(b.status); break;
        case 'project': cmp = a.project.localeCompare(b.project); break;
      }
      return sortOrder === 'asc' ? cmp : -cmp;
    });
    return result;
  }, [invoices, searchTerm, statusFilter, sortField, sortOrder]);

  const totalPages = Math.max(1, Math.ceil(filteredAndSorted.length / PAGE_SIZE));
  const safePage = Math.min(currentPage, totalPages);
  const paginated = filteredAndSorted.slice((safePage - 1) * PAGE_SIZE, safePage * PAGE_SIZE);

  const goPage = (p: number) => setCurrentPage(Math.max(1, Math.min(p, totalPages)));

  // Reset to page 1 when filters change
  const handleSearch = (val: string) => { setSearchTerm(val); setCurrentPage(1); };
  const handleStatus = (val: string) => { setStatusFilter(val); setCurrentPage(1); };

  const SortIcon = ({ field }: { field: SortField }) => (
    <ArrowUpDown className={`w-3.5 h-3.5 ${sortField === field ? 'text-purple-600' : 'text-gray-400'}`} />
  );

  return (
    <div className="min-h-screen bg-[conic-gradient(at_top_right,_var(--tw-gradient-stops))] from-slate-100 via-indigo-50/50 to-teal-50/50 selection:bg-purple-200 font-sans text-gray-900 pb-12">
      <Navbar showTabs={false} />

      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-12">
        {/* Header */}
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-6 mb-8 lg:mb-12 animate-in fade-in slide-in-from-bottom-5 duration-700">
          <div>
            <button
              onClick={() => navigate('/')}
              className="flex items-center gap-2 text-sm font-medium text-gray-500 hover:text-purple-600 transition-colors mb-4 group"
            >
              <ChevronLeft className="w-4 h-4 group-hover:-translate-x-0.5 transition-transform" />
              Back to Dashboard
            </button>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extralight tracking-tight text-gray-900 mb-2 lg:mb-3">
              Invoice <span className="font-medium bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">Directory</span>
            </h2>
            <p className="text-sm sm:text-base lg:text-lg font-light text-gray-500 max-w-xl">
              Manage and track all organizational expenses across projects and teams.
            </p>
          </div>
          <div className="flex items-center gap-3">
            <button
              onClick={() => exportToCSV(filteredAndSorted)}
              className="flex items-center gap-2 bg-white/50 hover:bg-white px-4 py-2 sm:px-5 sm:py-2.5 rounded-full text-xs sm:text-sm font-semibold text-gray-700 transition-all shadow-sm hover:shadow-md border border-white/60"
            >
              <Download className="w-4 h-4" /> Export CSV
            </button>
            <button
              onClick={() => setModalOpen(true)}
              className="flex items-center gap-2 bg-gradient-to-r from-purple-600 to-indigo-600 text-white px-5 py-2.5 sm:px-6 sm:py-3 rounded-full text-xs sm:text-sm font-medium shadow-lg hover:shadow-xl hover:shadow-purple-600/30 hover:-translate-y-0.5 transition-all"
            >
              <Plus className="w-4 h-4 sm:w-5 sm:h-5" /> New Invoice
            </button>
          </div>
        </div>

        {/* Filters */}
        <div className="flex flex-col lg:flex-row gap-4 mb-6 lg:mb-8 animate-in fade-in slide-in-from-bottom-8 duration-700 delay-100">
          <div className="relative flex-1 lg:max-w-md group">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5 group-hover:text-purple-500 transition-colors" />
            <input
              type="text"
              placeholder="Search by description, project, team or vendor..."
              value={searchTerm}
              onChange={e => handleSearch(e.target.value)}
              className="w-full pl-12 pr-4 py-3 sm:py-3.5 bg-white/70 backdrop-blur-xl rounded-2xl text-sm outline-none focus:bg-white transition-all shadow-sm focus:shadow-lg border border-white/80 focus:border-purple-300 focus:ring-4 focus:ring-purple-500/10 placeholder-gray-400"
            />
          </div>
          <div className="flex flex-wrap sm:flex-nowrap items-center gap-3">
            <div className="bg-white/70 backdrop-blur-xl rounded-2xl p-1.5 flex gap-1 shadow-sm border border-white/80 overflow-x-auto hide-scrollbar w-full sm:w-auto">
              {[
                { id: 'all', label: 'All' },
                { id: 'pending', label: 'Pending' },
                { id: 'paid', label: 'Paid' },
                { id: 'overdue', label: 'Overdue' },
              ].map(s => (
                <button
                  key={s.id}
                  onClick={() => handleStatus(s.id)}
                  className={`px-4 sm:px-5 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all whitespace-nowrap flex-1 sm:flex-none ${
                    statusFilter === s.id
                      ? 'bg-white text-purple-700 shadow-md'
                      : 'text-gray-500 hover:text-gray-900 hover:bg-white/50'
                  }`}
                >
                  {s.label}
                </button>
              ))}
            </div>
            <button className="hidden sm:flex items-center justify-center gap-2 bg-white/70 backdrop-blur-xl hover:bg-white px-5 py-3.5 rounded-2xl text-sm font-semibold text-gray-700 transition-all shadow-sm hover:shadow-md border border-white/80 shrink-0">
              <Filter className="w-4 h-4" /> Filters
            </button>
          </div>
        </div>

        {/* Summary bar */}
        <div className="flex items-center gap-4 mb-4 text-sm text-gray-500 animate-in fade-in duration-500">
          <span><span className="font-bold text-gray-900">{filteredAndSorted.length}</span> invoice{filteredAndSorted.length !== 1 ? 's' : ''}</span>
          {filteredAndSorted.length > 0 && (
            <span>· Total: <span className="font-bold text-gray-900">${filteredAndSorted.reduce((s, i) => s + i.amount, 0).toLocaleString(undefined, { minimumFractionDigits: 2 })}</span></span>
          )}
        </div>

        {/* Table */}
        <div className="backdrop-blur-xl bg-white/60 rounded-3xl border border-white shadow-xl shadow-slate-200/50 overflow-hidden animate-in fade-in slide-in-from-bottom-8 duration-700 delay-200">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse min-w-[800px]">
              <thead>
                <tr className="bg-slate-50/50 border-b border-gray-100/50">
                  <th className="px-6 py-5 text-[10px] sm:text-xs font-bold text-gray-500 uppercase tracking-widest cursor-pointer hover:bg-slate-100/50 transition-colors w-1/5" onClick={() => handleSort('date')}>
                    <div className="flex items-center gap-2">Date Issued <SortIcon field="date" /></div>
                  </th>
                  <th className="px-6 py-5 text-[10px] sm:text-xs font-bold text-gray-500 uppercase tracking-widest w-1/3">
                    Description & Project
                  </th>
                  <th className="px-6 py-5 text-[10px] sm:text-xs font-bold text-gray-500 uppercase tracking-widest cursor-pointer hover:bg-slate-100/50 transition-colors w-1/6" onClick={() => handleSort('amount')}>
                    <div className="flex items-center gap-2">Amount <SortIcon field="amount" /></div>
                  </th>
                  <th className="px-6 py-5 text-[10px] sm:text-xs font-bold text-gray-500 uppercase tracking-widest cursor-pointer hover:bg-slate-100/50 transition-colors w-1/6" onClick={() => handleSort('status')}>
                    <div className="flex items-center gap-2">Status <SortIcon field="status" /></div>
                  </th>
                  <th className="px-6 py-5 text-right w-16"></th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100/50">
                {paginated.map((invoice) => (
                  <tr
                    key={invoice.id}
                    className="group hover:bg-white/80 transition-colors cursor-pointer"
                    onClick={() => setViewInvoice(invoice)}
                  >
                    <td className="px-6 py-4 sm:py-5 align-top">
                      <div className="text-sm font-semibold text-gray-900 group-hover:text-purple-700 transition-colors">
                        {format(parseISO(invoice.date), 'MMM dd, yyyy')}
                      </div>
                      <div className="text-xs text-gray-500 mt-1 uppercase tracking-wider font-medium">{invoice.invoiceNumber}</div>
                    </td>
                    <td className="px-6 py-4 sm:py-5">
                      <div className="text-sm font-semibold text-gray-900 mb-1 max-w-md truncate">{invoice.description}</div>
                      <div className="flex flex-wrap items-center gap-2">
                        <span className="text-xs font-medium text-purple-600 bg-purple-50 px-2 py-0.5 rounded-md border border-purple-100/50 truncate max-w-[150px]">
                          {invoice.project}
                        </span>
                        <span className="text-[10px] font-bold text-gray-500 uppercase tracking-widest bg-gray-100 px-2 py-0.5 rounded-md">
                          {invoice.team}
                        </span>
                        {invoice.vendor && (
                          <span className="text-[10px] text-gray-400 hidden sm:inline">{invoice.vendor}</span>
                        )}
                      </div>
                    </td>
                    <td className="px-6 py-4 sm:py-5 align-top">
                      <div className="text-sm font-bold text-gray-900 bg-slate-50 inline-block px-3 py-1 rounded-lg border border-gray-100 group-hover:bg-white group-hover:shadow-sm transition-all group-hover:border-purple-100">
                        ${invoice.amount.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                      </div>
                    </td>
                    <td className="px-6 py-4 sm:py-5 align-top">
                      <StatusBadge status={invoice.status} />
                    </td>
                    <td className="px-6 py-4 sm:py-5 align-top text-right" onClick={e => e.stopPropagation()}>
                      <RowActions
                        onView={() => setViewInvoice(invoice)}
                        onEdit={() => setViewInvoice(invoice)}
                        onDelete={() => setDeleteConfirm(invoice.id)}
                      />
                    </td>
                  </tr>
                ))}

                {paginated.length === 0 && (
                  <tr>
                    <td colSpan={5} className="px-6 py-16 text-center">
                      <div className="flex flex-col items-center justify-center text-gray-400">
                        <Search className="w-12 h-12 mb-4 opacity-50 text-purple-300" />
                        <p className="text-lg font-medium text-gray-900">No invoices found</p>
                        <p className="text-sm text-gray-500 mt-1">Try adjusting your filters or search terms.</p>
                        <button
                          onClick={() => { setSearchTerm(''); setStatusFilter('all'); setCurrentPage(1); }}
                          className="mt-6 text-sm font-semibold text-purple-600 hover:text-purple-700 bg-purple-50 hover:bg-purple-100 px-5 py-2.5 rounded-full transition-colors"
                        >
                          Clear Filters
                        </button>
                      </div>
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>

          {/* Pagination */}
          <div className="border-t border-gray-100/50 px-6 py-4 bg-slate-50/30 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs sm:text-sm font-medium text-gray-500">
            <div>
              Showing <span className="text-gray-900 font-bold">{(safePage - 1) * PAGE_SIZE + 1}</span>–<span className="text-gray-900 font-bold">{Math.min(safePage * PAGE_SIZE, filteredAndSorted.length)}</span> of <span className="text-gray-900 font-bold">{filteredAndSorted.length}</span>
            </div>
            <div className="flex items-center gap-2">
              <button
                onClick={() => goPage(safePage - 1)}
                disabled={safePage === 1}
                className="w-8 h-8 flex items-center justify-center rounded-xl hover:bg-white hover:shadow-sm border border-transparent hover:border-gray-200 transition-all disabled:opacity-30 disabled:cursor-not-allowed"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              {Array.from({ length: totalPages }, (_, i) => i + 1)
                .filter(p => p === 1 || p === totalPages || Math.abs(p - safePage) <= 1)
                .reduce<(number | '...')[]>((acc, p, idx, arr) => {
                  if (idx > 0 && typeof arr[idx - 1] === 'number' && (p as number) - (arr[idx - 1] as number) > 1) acc.push('...');
                  acc.push(p);
                  return acc;
                }, [])
                .map((p, i) =>
                  p === '...' ? (
                    <span key={`ellipsis-${i}`} className="w-8 h-8 flex items-center justify-center text-gray-400">…</span>
                  ) : (
                    <button
                      key={p}
                      onClick={() => goPage(p as number)}
                      className={`w-8 h-8 rounded-xl flex items-center justify-center font-bold transition-all ${
                        safePage === p
                          ? 'bg-white text-purple-700 shadow-sm border border-gray-200'
                          : 'hover:bg-white hover:shadow-sm border border-transparent hover:border-gray-200 text-gray-600'
                      }`}
                    >
                      {p}
                    </button>
                  )
                )}
              <button
                onClick={() => goPage(safePage + 1)}
                disabled={safePage === totalPages}
                className="w-8 h-8 flex items-center justify-center rounded-xl hover:bg-white hover:shadow-sm border border-transparent hover:border-gray-200 transition-all disabled:opacity-30 disabled:cursor-not-allowed"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Modals */}
      <NewInvoiceModal isOpen={modalOpen} onClose={() => setModalOpen(false)} onAdd={handleAddInvoice} />
      {viewInvoice && <InvoiceDetailModal invoice={viewInvoice} onClose={() => setViewInvoice(null)} />}

      {/* Delete Confirmation */}
      {deleteConfirm && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" onClick={() => setDeleteConfirm(null)} />
          <div className="relative w-full max-w-sm bg-white rounded-3xl shadow-2xl p-6 animate-in fade-in zoom-in-95 duration-200 text-center">
            <div className="w-14 h-14 bg-rose-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Trash2 className="w-7 h-7 text-rose-600" />
            </div>
            <h3 className="text-lg font-bold text-gray-900 mb-2">Delete Invoice?</h3>
            <p className="text-sm text-gray-500 mb-6">This action cannot be undone.</p>
            <div className="flex gap-3">
              <button onClick={() => setDeleteConfirm(null)} className="flex-1 py-3 rounded-2xl border border-gray-200 text-sm font-semibold text-gray-600 hover:bg-gray-50 transition-colors">
                Cancel
              </button>
              <button onClick={() => handleDelete(deleteConfirm)} className="flex-1 py-3 rounded-2xl bg-rose-600 text-white text-sm font-semibold hover:bg-rose-700 transition-colors shadow-lg shadow-rose-600/30">
                Delete
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
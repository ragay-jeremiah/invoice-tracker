import { useState } from 'react';
import { X, Plus } from 'lucide-react';
import { Invoice } from '../data/mockData';

interface NewInvoiceModalProps {
  isOpen: boolean;
  onClose: () => void;
  onAdd: (invoice: Invoice) => void;
}

const TEAMS = ['Engineering', 'Design', 'Marketing', 'Sales', 'Operations'];
const PROJECTS: Record<string, string[]> = {
  Engineering: ['Mobile App', 'Web Platform', 'API Gateway'],
  Design: ['Brand Refresh', 'Marketing Campaign'],
  Marketing: ['Q1 Campaign', 'Social Media', 'Content Creation'],
  Sales: ['CRM System', 'Lead Generation'],
  Operations: ['Office Management', 'IT Infrastructure'],
};

export function NewInvoiceModal({ isOpen, onClose, onAdd }: NewInvoiceModalProps) {
  const [form, setForm] = useState({
    description: '',
    team: 'Engineering',
    project: 'Mobile App',
    amount: '',
    date: new Date().toISOString().split('T')[0],
    status: 'pending' as Invoice['status'],
    vendor: '',
  });
  const [errors, setErrors] = useState<Record<string, string>>({});

  if (!isOpen) return null;

  const validate = () => {
    const e: Record<string, string> = {};
    if (!form.description.trim()) e.description = 'Description is required';
    if (!form.amount || isNaN(Number(form.amount)) || Number(form.amount) <= 0)
      e.amount = 'Enter a valid amount';
    if (!form.date) e.date = 'Date is required';
    return e;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) { setErrors(errs); return; }

    const invoice: Invoice = {
      id: `${Date.now()}`,
      invoiceNumber: `INV-${new Date().getFullYear()}-${String(Date.now()).slice(-3)}`,
      description: form.description.trim(),
      team: form.team,
      project: form.project,
      amount: Number(form.amount),
      date: form.date,
      status: form.status,
      vendor: form.vendor.trim() || undefined,
    };
    onAdd(invoice);
    onClose();
    setForm({
      description: '',
      team: 'Engineering',
      project: 'Mobile App',
      amount: '',
      date: new Date().toISOString().split('T')[0],
      status: 'pending',
      vendor: '',
    });
    setErrors({});
  };

  const inputClass = (field: string) =>
    `w-full px-4 py-3 rounded-2xl bg-gray-50 border text-sm outline-none transition-all focus:bg-white focus:ring-2 focus:ring-purple-500/20 ${
      errors[field] ? 'border-rose-300 focus:border-rose-400' : 'border-gray-200 focus:border-purple-300'
    }`;

  return (
    <div className="fixed inset-0 z-[100] flex items-end sm:items-center justify-center p-0 sm:p-4">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/40 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="relative w-full sm:max-w-lg bg-white sm:rounded-3xl rounded-t-3xl shadow-2xl animate-in fade-in slide-in-from-bottom-8 duration-300 max-h-[90vh] overflow-y-auto">
        <div className="sticky top-0 bg-white sm:rounded-t-3xl rounded-t-3xl border-b border-gray-100 px-6 py-5 flex items-center justify-between z-10">
          <div>
            <h2 className="text-xl font-bold text-gray-900">New Invoice</h2>
            <p className="text-sm text-gray-500 mt-0.5">Add a new expense to the tracker</p>
          </div>
          <button
            onClick={onClose}
            className="w-9 h-9 flex items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200 text-gray-600 transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="px-6 py-6 space-y-5">
          {/* Description */}
          <div>
            <label className="block text-xs font-bold text-gray-600 uppercase tracking-widest mb-2">Description *</label>
            <input
              type="text"
              placeholder="e.g. AWS Cloud Services"
              value={form.description}
              onChange={e => { setForm(f => ({ ...f, description: e.target.value })); setErrors(er => ({ ...er, description: '' })); }}
              className={inputClass('description')}
            />
            {errors.description && <p className="text-xs text-rose-500 mt-1">{errors.description}</p>}
          </div>

          {/* Team & Project */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-bold text-gray-600 uppercase tracking-widest mb-2">Team</label>
              <select
                value={form.team}
                onChange={e => setForm(f => ({ ...f, team: e.target.value, project: PROJECTS[e.target.value]?.[0] || '' }))}
                className={inputClass('team')}
              >
                {TEAMS.map(t => <option key={t} value={t}>{t}</option>)}
              </select>
            </div>
            <div>
              <label className="block text-xs font-bold text-gray-600 uppercase tracking-widest mb-2">Project</label>
              <select
                value={form.project}
                onChange={e => setForm(f => ({ ...f, project: e.target.value }))}
                className={inputClass('project')}
              >
                {(PROJECTS[form.team] || []).map(p => <option key={p} value={p}>{p}</option>)}
              </select>
            </div>
          </div>

          {/* Amount & Date */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-bold text-gray-600 uppercase tracking-widest mb-2">Amount ($) *</label>
              <input
                type="number"
                placeholder="0.00"
                min="0"
                step="0.01"
                value={form.amount}
                onChange={e => { setForm(f => ({ ...f, amount: e.target.value })); setErrors(er => ({ ...er, amount: '' })); }}
                className={inputClass('amount')}
              />
              {errors.amount && <p className="text-xs text-rose-500 mt-1">{errors.amount}</p>}
            </div>
            <div>
              <label className="block text-xs font-bold text-gray-600 uppercase tracking-widest mb-2">Date *</label>
              <input
                type="date"
                value={form.date}
                onChange={e => { setForm(f => ({ ...f, date: e.target.value })); setErrors(er => ({ ...er, date: '' })); }}
                className={inputClass('date')}
              />
              {errors.date && <p className="text-xs text-rose-500 mt-1">{errors.date}</p>}
            </div>
          </div>

          {/* Status & Vendor */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-bold text-gray-600 uppercase tracking-widest mb-2">Status</label>
              <select
                value={form.status}
                onChange={e => setForm(f => ({ ...f, status: e.target.value as Invoice['status'] }))}
                className={inputClass('status')}
              >
                <option value="pending">Pending</option>
                <option value="paid">Paid</option>
                <option value="overdue">Overdue</option>
              </select>
            </div>
            <div>
              <label className="block text-xs font-bold text-gray-600 uppercase tracking-widest mb-2">Vendor</label>
              <input
                type="text"
                placeholder="e.g. AWS"
                value={form.vendor}
                onChange={e => setForm(f => ({ ...f, vendor: e.target.value }))}
                className={inputClass('vendor')}
              />
            </div>
          </div>

          {/* Submit */}
          <div className="flex gap-3 pt-2">
            <button
              type="button"
              onClick={onClose}
              className="flex-1 py-3.5 rounded-2xl border border-gray-200 text-sm font-semibold text-gray-600 hover:bg-gray-50 transition-colors"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="flex-1 py-3.5 rounded-2xl bg-gradient-to-r from-purple-600 to-indigo-600 text-white text-sm font-semibold shadow-lg shadow-purple-600/30 hover:shadow-xl hover:shadow-purple-600/40 hover:-translate-y-0.5 transition-all flex items-center justify-center gap-2"
            >
              <Plus className="w-4 h-4" /> Add Invoice
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

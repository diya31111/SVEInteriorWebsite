import { useState, useEffect } from 'react';
import ShinyText from '../components/react-bits/ShinyText';

export default function AdminLeads() {
    const [leads, setLeads] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [secret, setSecret] = useState('');

    const verifySecret = (e) => {
        e.preventDefault();
        if (secret === 'SVE2026') {
            setIsAuthenticated(true);
            fetchLeads();
        } else {
            alert('Invalid Secret Code');
        }
    };

    const fetchLeads = async () => {
        setLoading(true);
        setError('');
        try {
            const response = await fetch('/api/leads');
            if (!response.ok) throw new Error('Failed to fetch data');
            const data = await response.json();
            setLeads(data);
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    if (!isAuthenticated) {
        return (
            <div className="min-h-screen bg-blush flex items-center justify-center p-6">
                <form onSubmit={verifySecret} className="bg-white p-8 rounded-xl shadow-xl max-w-md w-full border border-soft-border">
                    <h2 className="text-2xl font-serif text-heading mb-6 text-center">Admin Access</h2>
                    <input
                        type="password"
                        value={secret}
                        onChange={(e) => setSecret(e.target.value)}
                        placeholder="Enter Secret Code"
                        className="w-full border border-soft-border p-3 rounded mb-4 focus:outline-none focus:border-cta"
                        autoFocus
                    />
                    <button className="w-full bg-cta text-white py-3 rounded hover:bg-rose transition-colors font-bold uppercase tracking-wider text-xs">
                        Enter Dashboard
                    </button>
                </form>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-white pt-32 pb-20 px-6">
            <div className="container mx-auto max-w-6xl">
                <div className="flex justify-between items-end mb-12">
                    <div>
                        <ShinyText text="Internal Dashboard" className="text-xs uppercase tracking-widest font-bold mb-2 block" />
                        <h1 className="text-4xl md:text-5xl font-serif text-heading">Client Leads</h1>
                    </div>
                    <button
                        onClick={fetchLeads}
                        className="text-xs uppercase tracking-wider font-bold text-cta hover:text-heading transition-colors border-b border-cta hover:border-heading pb-1"
                    >
                        Refresh Data
                    </button>
                </div>

                {loading && <div className="text-center py-20 text-body-text">Loading leads...</div>}
                {error && <div className="text-center py-20 text-red-500">Error: {error}</div>}

                {!loading && !error && (
                    <div className="overflow-x-auto bg-white border border-soft-border rounded-lg shadow-sm">
                        <table className="w-full text-left border-collapse">
                            <thead>
                                <tr className="bg-blush/20 text-heading text-xs uppercase tracking-wider font-bold">
                                    <th className="p-6 border-b border-soft-border">Date</th>
                                    <th className="p-6 border-b border-soft-border">Name</th>
                                    <th className="p-6 border-b border-soft-border">Email</th>
                                    <th className="p-6 border-b border-soft-border">Message</th>
                                </tr>
                            </thead>
                            <tbody>
                                {leads.length === 0 ? (
                                    <tr>
                                        <td colSpan="4" className="p-8 text-center text-body-text italic">No leads found.</td>
                                    </tr>
                                ) : (
                                    leads.map((lead) => (
                                        <tr key={lead.id} className="hover:bg-gray-50 transition-colors">
                                            <td className="p-6 border-b border-soft-border text-sm text-body-text whitespace-nowrap">
                                                {new Date(lead.timestamp).toLocaleDateString()} <span className="text-xs opacity-50 ml-1">{new Date(lead.timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</span>
                                            </td>
                                            <td className="p-6 border-b border-soft-border font-serif text-heading">
                                                {lead.first_name} {lead.last_name}
                                            </td>
                                            <td className="p-6 border-b border-soft-border text-sm text-cta hover:underline">
                                                <a href={`mailto:${lead.email}`}>{lead.email}</a>
                                            </td>
                                            <td className="p-6 border-b border-soft-border text-sm text-body-text max-w-md truncate" title={lead.message}>
                                                {lead.message}
                                            </td>
                                        </tr>
                                    ))
                                )}
                            </tbody>
                        </table>
                    </div>
                )}
            </div>
        </div>
    );
}

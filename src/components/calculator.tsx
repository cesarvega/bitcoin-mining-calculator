import { FormEvent, useState } from "react";
import { MiningFormData, MiningResult } from "../types";
import MiningResultCard from "./miningResults";

export function Calculator() {
    const [formData, setFormData] = useState<MiningFormData>({
        hash_rate: 0,
        power_consumption: 0,
        electricity_cost: 0,
        initial_investment: 0,
    });
    const initialData: MiningResult = {
        dailyCost: 0,
        monthlyCost: 0,
        yearlyCost: 0,
        dailyRevenueUSD: 0,
        monthlyRevenueUSD: 0,
        yearlyRevenueUSD: 0,
        dailyRevenueBTC: 0,
        monthlyRevenueBTC: 0,
        yearlyRevenueBTC: 0,
        dailyProfitUSD: 0,
        monthlyProfitUSD: 0,
        yearlyProfitUSD: 0,
        breakevenTimeline: 0,
        costToMine: 0,
    }
    // State to handle submission status, response, and errors
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [response, setResponse] = useState<any>(null);
    const [error, setError] = useState<string | null>(null);

    // Handles changes in the form fields
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: Number(value),
        });
    };

    // Handles form submission
    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        setError(null);
        setResponse(null);

        try {
            const res = await fetch(import.meta.env.VITE_URL_API_POST, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (!res.ok) {
                throw new Error(`Error: ${res.status} ${res.statusText}`);
            }

            const data = await res.json();
            console.log(data);
            setResponse(data);
        } catch (err: any) {
            setError(err.message || 'An error occurred');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="flex flex-col lg:flex-row items-center justify-center min-h-screen py-6 bg-gray-900">
            <div className="mx-10 w-full lg:w-auto">
                <form
                    className="bg-black p-4 rounded-lg  lg:px-8 shadow-md w-full lg:w-auto mx-auto space-y-4"
                    onSubmit={handleSubmit}
                >
                    <div>
                        <label
                            htmlFor="hash_rate"
                            className="block text-white font-semibold mb-2"
                        >
                            Hash Rate (H/s):
                        </label>
                        <input
                            type="number"
                            id="hash_rate"
                            name="hash_rate"
                            value={formData.hash_rate > 0 ? formData.hash_rate : ''}
                            onChange={handleChange}
                            required
                            min="0"
                            className="w-full px-3 py-2 border border-gray-400 rounded focus:outline-none focus:ring focus:ring-yellow-500"
                        />
                    </div>

                    <div>
                        <label
                            htmlFor="power_consumption"
                            className="block text-white font-semibold mb-2"
                        >
                            Power Consumption (W):
                        </label>
                        <input
                            type="number"
                            id="power_consumption"
                            name="power_consumption"
                            value={
                                formData.power_consumption > 0 ? formData.power_consumption : ''
                            }
                            onChange={handleChange}
                            required
                            min="0"
                            className="w-full px-3 py-2 border border-gray-400 rounded focus:outline-none focus:ring focus:ring-yellow-500"
                        />
                    </div>

                    <div>
                        <label
                            htmlFor="electricity_cost"
                            className="block text-white font-semibold mb-2"
                        >
                            Electricity Cost (USD/kWh):
                        </label>
                        <input
                            type="number"
                            step="0.01"
                            id="electricity_cost"
                            name="electricity_cost"
                            value={
                                formData.electricity_cost > 0 ? formData.electricity_cost : ''
                            }
                            onChange={handleChange}
                            required
                            min="0"
                            className="w-full px-3 py-2 border border-gray-400 rounded focus:outline-none focus:ring focus:ring-yellow-500"
                        />
                    </div>

                    <div>
                        <label
                            htmlFor="initial_investment"
                            className="block text-white font-semibold mb-2"
                        >
                            Initial Investment (USD):
                        </label>
                        <input
                            type="number"
                            id="initial_investment"
                            name="initial_investment"
                            value={
                                formData.initial_investment > 0
                                    ? formData.initial_investment
                                    : ''
                            }
                            onChange={handleChange}
                            required
                            min="0"
                            className="w-full px-3 py-2 border border-gray-400 rounded focus:outline-none focus:ring focus:ring-yellow-500"
                        />
                    </div>

                    <button
                        type="submit"
                        disabled={isSubmitting}
                        className={`w-full py-2 px-4 rounded text-white font-semibold ${isSubmitting
                            ? 'bg-gray-400 cursor-not-allowed'
                            : 'bg-yellow-600 hover:bg-yellow-500'
                            }`}
                    >
                        {isSubmitting ? 'Sending...' : 'Calculate'}
                    </button>

                    {error && (
                        <div className="text-red-600 mt-4">
                            <p>{error}</p>
                        </div>
                    )}
                </form>
            </div>
            <div className="mx-10 w-full lg:w-auto">
                {response ? <MiningResultCard data={response} /> : <MiningResultCard data={initialData} />}</div>
        </div>
    );
}

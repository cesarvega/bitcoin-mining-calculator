// src/components/MiningResultCard.tsx

import React from 'react';
import { MiningResult } from '../types';

interface MiningResultCardProps {
    data: MiningResult;
}

const MiningResultCard: React.FC<MiningResultCardProps> = ({ data }) => {
    return (
        <div className="bg-black text-white rounded-lg p-6 w-full lg:w-auto mx-auto lg:px-8">
            <h2 className="text-2xl font-bold text-center mb-4">Mining Results</h2>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div>
                    <h3 className="text-lg font-semibold mb-2">Costs</h3>
                    <p><strong>Daily Cost:</strong> ${data.dailyCost.toFixed(2)}</p>
                    <p><strong>Monthly Cost:</strong> ${data.monthlyCost.toFixed(2)}</p>
                    <p><strong>Yearly Cost:</strong> ${data.yearlyCost.toFixed(2)}</p>
                </div>
                <div>
                    <h3 className="text-lg font-semibold mb-2">Revenue in USD</h3>
                    <p><strong>Daily Revenue:</strong> ${data.dailyRevenueUSD.toFixed(2)}</p>
                    <p><strong>Monthly Revenue:</strong> ${data.monthlyRevenueUSD.toFixed(2)}</p>
                    <p><strong>Yearly Revenue:</strong> ${data.yearlyRevenueUSD.toFixed(2)}</p>
                </div>
                <div>
                    <h3 className="text-lg font-semibold mb-2">Revenue in BTC</h3>
                    <p><strong>Daily Revenue:</strong> {data.dailyRevenueBTC.toFixed(6)} BTC</p>
                    <p><strong>Monthly Revenue:</strong> {data.monthlyRevenueBTC.toFixed(6)} BTC</p>
                    <p><strong>Yearly Revenue:</strong> {data.yearlyRevenueBTC.toFixed(6)} BTC</p>
                </div>
                <div>
                    <h3 className="text-lg font-semibold mb-2">Profits</h3>
                    <p><strong>Daily Profit:</strong> ${data.dailyProfitUSD.toFixed(2)}</p>
                    <p><strong>Monthly Profit:</strong> ${data.monthlyProfitUSD.toFixed(2)}</p>
                    <p><strong>Yearly Profit:</strong> ${data.yearlyProfitUSD.toFixed(2)}</p>
                </div>
            </div>
            <div className="mt-4 bg-yellow-600 text-center py-2 rounded">
                <h3 className="text-lg font-semibold">Other</h3>
                <p><strong>Break-Even Timeline:</strong> {data.breakevenTimeline} days</p>
                <p><strong>Cost to Mine:</strong> ${data.costToMine.toFixed(2)}</p>
            </div>
        </div>

    );
};

export default MiningResultCard;

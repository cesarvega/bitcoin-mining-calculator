// src/types/index.ts

export interface MiningFormData {
    hash_rate: number;
    power_consumption: number;
    electricity_cost: number;
    initial_investment: number;
}


export interface MiningResult {
    dailyCost: number;
    monthlyCost: number;
    yearlyCost: number;
    dailyRevenueUSD: number;
    monthlyRevenueUSD: number;
    yearlyRevenueUSD: number;
    dailyRevenueBTC: number;
    monthlyRevenueBTC: number;
    yearlyRevenueBTC: number;
    dailyProfitUSD: number;
    monthlyProfitUSD: number;
    yearlyProfitUSD: number;
    breakevenTimeline: number;
    costToMine: number;
}

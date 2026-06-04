"use client";

import React, { useState, useEffect } from 'react';
import { Calculator, ArrowRight, Info, DollarSign, Users, MousePointerClick, ShoppingCart } from 'lucide-react';

interface CalculatorInputs {
  monthlyVisitors: number;
  conversionRate: number;
  averageValue: number;
  projectCost: number;
}

interface CalculatorResults {
  currentMonthlyRevenue: number;
  projectedConversionRate: number;
  projectedMonthlyRevenue: number;
  additionalAnnualRevenue: number;
  roi: number;
  paybackPeriod: number;
}

export default function ROICalculator() {
  const [inputs, setInputs] = useState<CalculatorInputs>({
    monthlyVisitors: 1000,
    conversionRate: 1.5,
    averageValue: 100,
    projectCost: 5000
  });
  
  const [results, setResults] = useState<CalculatorResults | null>(null);
  const [activeTooltip, setActiveTooltip] = useState<string | null>(null);
  
  // Calculate results whenever inputs change
  useEffect(() => {
    calculateROI();
  }, [inputs]);
  
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    
    // Validate and sanitize numeric inputs
    const numericValue = parseFloat(value);
    
    // Check for valid numbers and reasonable ranges
    if (isNaN(numericValue) || numericValue < 0) {
      return; // Don't update if invalid
    }
    
    // Set reasonable maximum values to prevent abuse
    const maxValues = {
      monthlyVisitors: 1000000, // 1M max
      conversionRate: 50, // 50% max
      averageValue: 100000, // $100K max
      projectCost: 500000 // $500K max
    };
    
    const fieldName = name as keyof CalculatorInputs;
    const maxValue = maxValues[fieldName];
    
    if (numericValue > maxValue) {
      return; // Don't update if exceeds maximum
    }
    
    setInputs(prev => ({
      ...prev,
      [name]: numericValue
    }));
  };
  
  const calculateROI = () => {
    // Current monthly revenue
    const currentMonthlyRevenue = (inputs.monthlyVisitors * (inputs.conversionRate / 100) * inputs.averageValue);
    
    // Projected conversion rate (typically 2-3x improvement based on our case studies)
    const projectedConversionRate = inputs.conversionRate * 2.5;
    
    // Projected monthly revenue
    const projectedMonthlyRevenue = (inputs.monthlyVisitors * (projectedConversionRate / 100) * inputs.averageValue);

    // Additional revenue per month
    const additionalMonthlyRevenue = projectedMonthlyRevenue - currentMonthlyRevenue;

    // Additional annual revenue
    const additionalAnnualRevenue = additionalMonthlyRevenue * 12;

    // ROI calculation (additional annual revenue / project cost)
    // Protect against division by zero
    const roi = inputs.projectCost > 0 ? (additionalAnnualRevenue / inputs.projectCost) * 100 : 0;

    // Payback period in months
    // If there's no additional revenue, payback is infinite (will never pay back)
    const paybackPeriod = additionalMonthlyRevenue > 0
      ? inputs.projectCost / additionalMonthlyRevenue
      : Infinity;

    setResults({
      currentMonthlyRevenue,
      projectedConversionRate,
      projectedMonthlyRevenue,
      additionalAnnualRevenue,
      roi,
      paybackPeriod
    });
  };
  
  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      maximumFractionDigits: 0
    }).format(value);
  };
  
  const formatPercent = (value: number) => {
    return `${value.toFixed(1)}%`;
  };
  
  const formatMonths = (value: number) => {
    if (!isFinite(value)) {
      return 'Never (no additional revenue)';
    }
    if (value < 0) {
      return 'Immediate (generating revenue from day 1)';
    }
    return `${value.toFixed(1)} months`;
  };
  
  return (
    <div className="bg-[#1b1b1b] rounded-xl border border-white/10 overflow-hidden">
      <div className="p-8">
        <div className="flex items-center gap-3 mb-4">
          <div className="bg-[#A3D1FF]/10 p-3 rounded-lg">
            <Calculator className="w-6 h-6 text-[#A3D1FF]" />
          </div>
          <h3 className="text-2xl font-bold text-white">Website ROI Calculator</h3>
        </div>
        
        <p className="text-white mb-6">
          Estimate the potential return on investment for your new website project based on industry benchmarks and our client results.
        </p>
        
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Your Website Metrics</h4>
            
            <div className="space-y-4">
              <div>
                <div className="flex items-center justify-between mb-2">
                  <label className="flex items-center text-gray-300 text-sm">
                    <Users className="w-4 h-4 mr-2" />
                    Monthly Visitors
                    <button
                      type="button"
                      className="ml-2 p-2 min-w-[44px] min-h-[44px] flex items-center justify-center text-white hover:text-[#A3D1FF]"
                      onMouseEnter={() => setActiveTooltip('visitors')}
                      onMouseLeave={() => setActiveTooltip(null)}
                      aria-label="More information about monthly visitors metric"
                      title="Information about monthly visitors"
                    >
                      <Info className="w-4 h-4" />
                    </button>
                  </label>
                  <span className="text-sm text-[#A3D1FF]">{inputs.monthlyVisitors.toLocaleString()}</span>
                </div>
                {activeTooltip === 'visitors' && (
                  <div className="text-xs text-white mb-2 bg-[#2d3035] p-2 rounded">
                    The average number of unique visitors to your website each month. Check Google Analytics for this number.
                  </div>
                )}
                <input
                  type="range"
                  id="monthlyVisitors"
                  name="monthlyVisitors"
                  min="100"
                  max="100000"
                  step="100"
                  value={inputs.monthlyVisitors}
                  onChange={handleInputChange}
                  className="w-full h-2 bg-[#2d3035] rounded-lg appearance-none cursor-pointer"
                  aria-label="Monthly website visitors slider"
                  aria-describedby="visitors-range-description"
                />
                <div id="visitors-range-description" className="sr-only">
                  Adjust the number of monthly visitors to your website, ranging from 100 to 100,000
                </div>
                <div className="flex justify-between text-xs text-gray-500 mt-1">
                  <span>100</span>
                  <span>Most businesses: 1,000-10,000</span>
                  <span>100,000</span>
                </div>
              </div>
              
              <div>
                <div className="flex items-center justify-between mb-2">
                  <label className="flex items-center text-gray-300 text-sm">
                    <MousePointerClick className="w-4 h-4 mr-2" />
                    Current Conversion Rate (%)
                    <button 
                      type="button" 
                      className="ml-2 p-2 min-w-[44px] min-h-[44px] flex items-center justify-center text-white hover:text-[#A3D1FF]"
                      onMouseEnter={() => setActiveTooltip('conversion')}
                      onMouseLeave={() => setActiveTooltip(null)}
                      aria-label="More information about conversion rate metric"
                      title="Information about conversion rate"
                    >
                      <Info className="w-4 h-4" />
                    </button>
                  </label>
                  <span className="text-sm text-[#A3D1FF]">{inputs.conversionRate.toFixed(1)}%</span>
                </div>
                {activeTooltip === 'conversion' && (
                  <div className="text-xs text-white mb-2 bg-[#2d3035] p-2 rounded">
                    The percentage of visitors who complete a desired action. Industry average is 1-3%. Check your analytics or estimate if unsure.
                  </div>
                )}
                <input
                  type="range"
                  id="conversionRate"
                  name="conversionRate"
                  min="0.1"
                  max="10"
                  step="0.1"
                  value={inputs.conversionRate}
                  onChange={handleInputChange}
                  className="w-full h-2 bg-[#2d3035] rounded-lg appearance-none cursor-pointer"
                  aria-label="Current conversion rate percentage slider"
                  aria-describedby="conversion-range-description"
                />
                <div id="conversion-range-description" className="sr-only">
                  Adjust your current conversion rate percentage, ranging from 0.1% to 10%
                </div>
                <div className="flex justify-between text-xs text-gray-500 mt-1">
                  <span>0.1%</span>
                  <span>Industry avg: 2-3%</span>
                  <span>10%</span>
                </div>
              </div>
              
              <div>
                <div className="flex items-center justify-between mb-2">
                  <label className="flex items-center text-gray-300 text-sm">
                    <ShoppingCart className="w-4 h-4 mr-2" />
                    Average Order/Lead Value
                    <button 
                      type="button" 
                      className="ml-2 p-2 min-w-[44px] min-h-[44px] flex items-center justify-center text-white hover:text-[#A3D1FF]"
                      onMouseEnter={() => setActiveTooltip('value')}
                      onMouseLeave={() => setActiveTooltip(null)}
                      aria-label="More information about average order value metric"
                      title="Information about average order value"
                    >
                      <Info className="w-4 h-4" />
                    </button>
                  </label>
                  <span className="text-sm text-[#A3D1FF]">{formatCurrency(inputs.averageValue)}</span>
                </div>
                {activeTooltip === 'value' && (
                  <div className="text-xs text-white mb-2 bg-[#2d3035] p-2 rounded">
                    For e-commerce: average order value. For lead generation: estimated lifetime value of a customer.
                  </div>
                )}
                <input
                  type="range"
                  id="averageValue"
                  name="averageValue"
                  min="10"
                  max="10000"
                  step="10"
                  value={inputs.averageValue}
                  onChange={handleInputChange}
                  className="w-full h-2 bg-[#2d3035] rounded-lg appearance-none cursor-pointer"
                  aria-label="Average order or lead value slider"
                  aria-describedby="value-range-description"
                />
                <div id="value-range-description" className="sr-only">
                  Adjust the average value of each order or lead, ranging from $10 to $10,000
                </div>
                <div className="flex justify-between text-xs text-gray-500 mt-1">
                  <span>$10</span>
                  <span>Service businesses: $500-2,000</span>
                  <span>$10,000</span>
                </div>
              </div>
              
              <div>
                <div className="flex items-center justify-between mb-2">
                  <label className="flex items-center text-gray-300 text-sm">
                    <DollarSign className="w-4 h-4 mr-2" />
                    Website Project Investment
                    <button 
                      type="button" 
                      className="ml-2 p-2 min-w-[44px] min-h-[44px] flex items-center justify-center text-white hover:text-[#A3D1FF]"
                      onMouseEnter={() => setActiveTooltip('cost')}
                      onMouseLeave={() => setActiveTooltip(null)}
                      aria-label="More information about project investment metric"
                      title="Information about project investment"
                    >
                      <Info className="w-4 h-4" />
                    </button>
                  </label>
                  <span className="text-sm text-[#A3D1FF]">{formatCurrency(inputs.projectCost)}</span>
                </div>
                {activeTooltip === 'cost' && (
                  <div className="text-xs text-white mb-2 bg-[#2d3035] p-2 rounded">
                    Professional websites typically range from $5,000-$25,000 depending on complexity and features.
                  </div>
                )}
                <input
                  type="range"
                  id="projectCost"
                  name="projectCost"
                  min="1000"
                  max="50000"
                  step="1000"
                  value={inputs.projectCost}
                  onChange={handleInputChange}
                  className="w-full h-2 bg-[#2d3035] rounded-lg appearance-none cursor-pointer"
                  aria-label="Website project investment amount slider"
                  aria-describedby="cost-range-description"
                />
                <div id="cost-range-description" className="sr-only">
                  Adjust the website project investment amount, ranging from $1,000 to $50,000
                </div>
                <div className="flex justify-between text-xs text-gray-500 mt-1">
                  <span>$1,000</span>
                  <span>Professional range: $5K-25K</span>
                  <span>$50,000</span>
                </div>
              </div>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Projected Results</h4>
            
            {results && (
              <div className="space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-[#2d3035] p-4 rounded-lg">
                    <p className="text-sm text-white mb-1">Current Monthly Revenue</p>
                    <p className="text-xl font-bold text-white">{formatCurrency(results.currentMonthlyRevenue)}</p>
                  </div>
                  
                  <div className="bg-[#2d3035] p-4 rounded-lg">
                    <p className="text-sm text-white mb-1">Projected Monthly Revenue</p>
                    <p className="text-xl font-bold text-[#A3D1FF]">{formatCurrency(results.projectedMonthlyRevenue)}</p>
                  </div>
                </div>
                
                <div className="bg-[#2d3035] p-4 rounded-lg">
                  <div className="flex items-center justify-between mb-2">
                    <p className="text-sm text-white">Current Conversion Rate</p>
                    <p className="text-sm font-medium text-white">{formatPercent(inputs.conversionRate)}</p>
                  </div>
                  <div className="flex items-center justify-between">
                    <p className="text-sm text-white">Projected Conversion Rate</p>
                    <p className="text-sm font-medium text-[#A3D1FF]">{formatPercent(results.projectedConversionRate)}</p>
                  </div>
                </div>
                
                <div className="bg-[#A3D1FF]/10 p-4 rounded-lg border border-[#A3D1FF]/30">
                  <h5 className="font-semibold text-white mb-3">ROI Summary</h5>
                  
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <p className="text-gray-300">Additional Annual Revenue</p>
                      <p className="font-bold text-[#A3D1FF]">{formatCurrency(results.additionalAnnualRevenue)}</p>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <p className="text-gray-300">Return on Investment</p>
                      <p className="font-bold text-[#A3D1FF]">{formatPercent(results.roi)}</p>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <p className="text-gray-300">Payback Period</p>
                      <p className="font-bold text-[#A3D1FF]">{formatMonths(results.paybackPeriod)}</p>
                    </div>
                  </div>
                </div>
                
                <div className="text-center">
                  <button onClick={() => {
                    const params = new URLSearchParams({
                      visitors: inputs.monthlyVisitors.toString(),
                      conversion: inputs.conversionRate.toString(),
                      value: inputs.averageValue.toString(),
                      investment: inputs.projectCost.toString(),
                      roi: results.roi.toFixed(1)
                    });
                    window.location.href = `/contact?${params.toString()}`;
                  }} className="mr_btn mr_btn_primary">
                    <span>Get My Custom Proposal</span>
                  </button>
                  <p className="text-xs text-gray-500 mt-2">
                    I'll use these numbers to create your personalized proposal
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
        
        <div className="mt-8 pt-6 border-t border-white/10">
          <p className="text-sm text-white">
            <strong className="text-white">Note:</strong> This calculator provides estimates based on industry averages and our client results. Actual results may vary based on your specific industry, audience, and implementation.
          </p>
        </div>
      </div>
    </div>
  );
}
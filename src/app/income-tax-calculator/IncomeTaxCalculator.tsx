/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";
import React, { useContext, useState } from "react";
import {
  Box,
  TextField,
  Typography,
  Button,
  Grid,
  Paper,
  MenuItem,
  Select,
  FormControl,
  InputLabel,
  InputAdornment,
} from "@mui/material";
import SocialMediaShare from "../components/Sharing/SocialMediaShare";
import Footer from "../components/Footer/Footer";
import { ThemeContext } from "../context/ThemeContextProvider";

interface ResultType {
  taxOld: number;
  taxNew: number;
  taxableOld: number;
  taxableNew: number;
  better: string;
  savings: number;
  hraExplanation: string;
}

interface FieldType {
  label: string;
  value: string;
  setter: React.Dispatch<React.SetStateAction<string>>;
  helper?: string;
}

const formatIndian = (num: string) => {
  const parsed = Number(num.replace(/[^\d.]/g, ""));
  if (isNaN(parsed)) return "";
  return parsed.toLocaleString("en-IN");
};

const TaxCalculator2025: React.FC = () => {
  const parseNum = (value: string): number =>
    Number(value.replace(/[^\d.]/g, "")) || 0;
  const isInvalid = (value: string): boolean => /[^\d.]/.test(value);
  const { currentTheme, toggleTheme } = useContext(ThemeContext);
console.log(currentTheme)
  const [age, setAge] = useState<string>("30");
  const [income, setIncome] = useState<string>("");
  const [hraReceived, setHraReceived] = useState<string>("");
  const [rentPaid, setRentPaid] = useState<string>("");
  const [metro, setMetro] = useState<string>("no");
  const [investment80C, setInvestment80C] = useState<string>("");
  const [healthInsurance, setHealthInsurance] = useState<string>("");
  const [parentsHealthInsurance, setParentsHealthInsurance] =
    useState<string>("");
  const [homeLoanInterest, setHomeLoanInterest] = useState<string>("");
  const [npsContribution, setNpsContribution] = useState<string>("");
  const [ltaClaimed, setLtaClaimed] = useState<string>("");
  const [preventiveCheckup, setPreventiveCheckup] = useState<string>("");

  const [result, setResult] = useState<ResultType | null>(null);

  const calculateTax = (): void => {
    const stdDeduction = 75000;
    const ageNum = parseNum(age);
    const salary = parseNum(income);
    const hra = parseNum(hraReceived);
    const rent = parseNum(rentPaid);
    const inv80C = parseNum(investment80C);
    const checkup = Math.min(parseNum(preventiveCheckup), 5000); // cap at ₹5,000
    const health = parseNum(healthInsurance);
    const parentsHealth = parseNum(parentsHealthInsurance);
    const loan = parseNum(homeLoanInterest);
    const nps = parseNum(npsContribution);
    const lta = parseNum(ltaClaimed);

    const basicOld = ageNum >= 80 ? 500000 : ageNum >= 60 ? 300000 : 250000;
    const selfAndCheckup = Math.min(
      health + checkup,
      ageNum >= 60 ? 50000 : 25000
    );
    const totalHealthDeduction =
      selfAndCheckup + Math.min(parentsHealth, 50000);

    const deductionsOld =
      stdDeduction +
      Math.min(inv80C, 150000) +
      totalHealthDeduction +
      Math.min(loan, 200000) +
      Math.min(nps, 50000) +
      lta;

    let hraExempt = 0;
    let hraExplanation = "";
    if (hra && rent) {
      const rentMinus10 = rent - 0.1 * salary;
      const percentSalary = (metro === "yes" ? 0.5 : 0.4) * salary;
      hraExempt = Math.min(hra, rentMinus10, percentSalary);
      hraExempt = Math.max(hraExempt, 0);
      hraExplanation = `HRA Exemption is calculated as the least of:\n1. Actual HRA received: ₹${hra}\n2. Rent paid minus 10% of salary: ₹${rentMinus10}\n3. ${
        metro === "yes" ? "50%" : "40%"
      } of salary: ₹${percentSalary}\n\nHence, exempted HRA = ₹${hraExempt}`;
    }

    const taxableOld = Math.max(salary - deductionsOld - hraExempt, 0);
    const taxOld = calculateOldTax(taxableOld, basicOld);

    const basicNew = 400000;
    const taxableNew = Math.max(salary - stdDeduction, 0);
    let taxNew = calculateNewTax(taxableNew);
    if (taxableNew <= 1200000) taxNew = Math.max(taxNew - 60000, 0);

    const better = taxOld < taxNew ? "Old Regime" : "New Regime";
    const savings = Math.abs(taxOld - taxNew);

    setResult({
      taxOld,
      taxNew,
      taxableOld,
      taxableNew,
      better,
      savings,
      hraExplanation,
    });
  };

  const calculateOldTax = (income: number, exemption: number): number => {
    let tax = 0;
    let slab = income - exemption;
    if (slab <= 0) return 0;
    if (slab <= 250000) return slab * 0.05;
    tax += 250000 * 0.05;
    slab -= 250000;
    if (slab <= 500000) return tax + slab * 0.2;
    tax += 500000 * 0.2;
    slab -= 500000;
    return tax + slab * 0.3;
  };

  const calculateNewTax = (income: number): number => {
    let tax = 0;

    const slabs = [
      { limit: 400000, rate: 0 },
      { limit: 800000, rate: 0.05 },
      { limit: 1200000, rate: 0.1 },
      { limit: 1600000, rate: 0.15 },
      { limit: 2000000, rate: 0.2 },
      { limit: 2400000, rate: 0.25 },
      { limit: Infinity, rate: 0.3 },
    ];

    let prev = 0;
    for (const slab of slabs) {
      if (income <= slab.limit) {
        tax += (income - prev) * slab.rate;
        break;
      } else {
        tax += (slab.limit - prev) * slab.rate;
        prev = slab.limit;
      }
    }

    // Apply surcharge if applicable
    let surchargeRate = 0;
    if (income > 50000000) {
      surchargeRate = 0.25; // 25% for income > ₹5Cr
    } else if (income > 20000000) {
      surchargeRate = 0.25;
    } else if (income > 10000000) {
      surchargeRate = 0.15;
    } else if (income > 5000000) {
      surchargeRate = 0.1;
    } else if (income > 5000000) {
      surchargeRate = 0.1;
    }

    const surcharge = tax * surchargeRate;
    const taxWithSurcharge = tax + surcharge;

    // Add 4% Health & Education Cess
    let taxWithCess = taxWithSurcharge * 1.04;

    // Rebate if taxable income ≤ ₹12L
    if (income <= 1200000) {
      taxWithCess = Math.max(taxWithCess - 60000, 0);
    } else {
      // Apply Marginal Relief: tax should not exceed income above ₹12L
      const extraIncome = income - 1200000;
      if (taxWithCess > extraIncome) {
        taxWithCess = Math.round(extraIncome * 1.04);
      }
    }

    return Math.round(taxWithCess);
  };

  const fields: FieldType[] = [
    { label: "Age", value: age, setter: setAge },
    {
      label: "Annual Income(salary+other)/ Pension",
      value: income,
      setter: setIncome,
    },
    {
      label: "Rent Paid (Yearly)",
      value: rentPaid,
      setter: setRentPaid,
      helper: "Used for HRA exemption",
    },
    {
      label: "HRA Received (Yearly)",
      value: hraReceived,
      setter: setHraReceived,
    },
    {
      label: "80C Investments",
      value: investment80C,
      setter: setInvestment80C,
      helper: "Maximum allowed: ₹1,50,000",
    },
    {
      label: "Health Insurance Premium (Self+Family)",
      value: healthInsurance,
      setter: setHealthInsurance,
      helper: "Max ₹25,000 (₹50,000 if age ≥ 60)",
    },
    {
      label: "Health Insurance (Parents)",
      value: parentsHealthInsurance,
      setter: setParentsHealthInsurance,
      helper: "Max additional ₹50,000 if paid for parents",
    },
    {
      label: "Home Loan Interest (Section 24)",
      value: homeLoanInterest,
      setter: setHomeLoanInterest,
      helper: "Maximum deduction: ₹2,00,000",
    },
    {
      label: "NPS Contribution (80CCD)",
      value: npsContribution,
      setter: setNpsContribution,
      helper: "Maximum allowed: ₹50,000",
    },
    {
      label: "LTA Claimed",
      value: ltaClaimed,
      setter: setLtaClaimed,
      helper: "For tax-free domestic travel allowance",
    },
    {
      label: "Preventive Health Check-up",
      value: preventiveCheckup,
      setter: setPreventiveCheckup,
      helper: "Max allowed: ₹5,000 (included in 80D limit)",
    },
  ];

  return (
    <>
      <Box p={4}>
        <Typography
          variant="h4"
          gutterBottom
          sx={{ textAlign: "center", mx: "13px", fontWeight: "800" }}
        >
          Income Tax Calculator – FY 2025–26
        </Typography>
        <Typography sx={{fontSize: "1rem"}}>Plan Your Taxes Smartly with the Latest Income Tax Calculator for FY 2025–26 (AY 2026–27).
        Use our free, fast, and accurate Income Tax Calculator to estimate your tax liability under the new and old tax regimes. Whether you&apos;re a salaried employee, freelancer, or professional, our tool helps you calculate taxes based on your income, deductions, and HRA components in real-time.</Typography> 
        <Typography>Updated as per the Union Budget 2025, this tax calculator supports the latest slabs, standard deductions, and rebate limits. Find out which regime saves you more and make informed tax-saving decisions. Start planning your income tax filing for 2026 with confidence!</Typography>
        <Paper elevation={3} sx={{ my: "30px", p: 2 }}>
          <Grid container spacing={2}>
            {fields.map((field, index) => (
              <Grid item xs={12} sm={6} key={index}>
                <TextField
                  label={field.label}
                  fullWidth
                  value={formatIndian(field.value)}
                  sx={{
                    '& .MuiOutlinedInput-root': {
                      '&.Mui-focused fieldset': {
                        borderColor: '#5DC3C6', // change to your desired focus border color
                      },
                    },
                    '& label.Mui-focused': {
                      color: '#5DC3C6', // change to your desired focus label color
                    },
                  }}
                  onChange={(e) =>
                    field.setter(e.target.value.replace(/[^\d.]/g, ""))
                  }
                  helperText={
                    isInvalid(field.value)
                      ? "❌ Only numbers allowed"
                      : field.helper || ""
                  }
                  error={isInvalid(field.value)}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">₹</InputAdornment>
                    ),
                  }}
                />
              </Grid>
            ))}
            <Grid item xs={12} sm={6}>
              <FormControl fullWidth sx={{
                    '& .MuiOutlinedInput-root': {
                      '&.Mui-focused fieldset': {
                        borderColor: '#5DC3C6', // change to your desired focus border color
                      },
                    },
                    '& label.Mui-focused': {
                      color: '#5DC3C6', // change to your desired focus label color
                    },
                  }}>
                <InputLabel>Metro City?</InputLabel>
                <Select
                  value={metro}
                  label="Metro City?"
                  onChange={(e) => setMetro(e.target.value)}
                  
                >
                  <MenuItem value="yes">Yes</MenuItem>
                  <MenuItem value="no">No</MenuItem>
                </Select>
              </FormControl>
            </Grid>
          </Grid>
          <Box mt={2}>
            <Button
              variant="contained"
              onClick={calculateTax}
              sx={{ background: "#5DC3C6" }}
            >
              Calculate Tax
            </Button>
          </Box>
          <Box sx={{ margin: "15px 15px 15px 0px" }}>
            <em style={{ fontSize: "1rem" }}>
              Note: We donot capture your data!
            </em>
          </Box>
        </Paper>
        {result && (
          <Box mt={4}>
            <Typography variant="h6" gutterBottom>
              📊 Tax Comparison
            </Typography>
            <Grid container spacing={2}>
              <Grid item xs={12} md={6}>
                <Paper elevation={2} sx={{ p: 2 }}>
                  <Typography variant="subtitle1">Old Regime</Typography>
                  <Typography>
                    Taxable Income: ₹{result.taxableOld.toLocaleString("en-IN")}
                  </Typography>
                  <Typography>
                    Tax Payable: ~₹{result.taxOld.toLocaleString("en-IN")}{" "}
                    (includes 4% cess)
                  </Typography>
                </Paper>
              </Grid>
              <Grid item xs={12} md={6}>
                <Paper elevation={2} sx={{ p: 2 }}>
                  <Typography variant="subtitle1">New Regime</Typography>
                  <Typography>
                    Taxable Income: ₹{result.taxableNew.toLocaleString("en-IN")}
                  </Typography>
                  <Typography>
                    Tax Payable: ~₹{result.taxNew.toLocaleString("en-IN")}{" "}
                    (includes 4% cess)
                  </Typography>
                </Paper>
              </Grid>
            </Grid>
            <Box mt={2}>
              <Typography variant="h6">
                ✅ By selecting <strong>{result.better}</strong>, you save ₹
                {result.savings.toLocaleString("en-IN")} in taxes.
              </Typography>
            </Box>
            {result.hraExplanation && (
              <Box mt={2}>
                <Typography variant="body1" whiteSpace="pre-line">
                  <strong style={{ margin: "12px" }}>
                    HRA Exemption Explanation:
                  </strong>
                  {"\n" + result.hraExplanation}
                </Typography>
              </Box>
            )}
          </Box>
        )}
        <SocialMediaShare />
        <h4>Related Reads</h4>
        <ul>
          <li>
            <a style={{color: currentTheme=="dark" ? "rgb(237, 237, 237)" : 'rgb(23, 23, 23)', fontSize: "1rem"}} href="https://www.theinforush.com/category/finance-insurance/income-tax-2025-simplified">How to save tax legally in India?</a>
          </li>
          <li>
            <a style={{color: currentTheme=="dark" ? "rgb(237, 237, 237)" : 'rgb(23, 23, 23)', fontSize: "1rem"}} href="https://www.theinforush.com/category/finance-insurance/digital-gold-vs-gold-etf-vs-physical-gold">Digital Gold vs Gold ETF vs Physical Gold</a>
          </li>
        </ul>
      </Box>
      <Footer />
    </>
  );
};

export default TaxCalculator2025;

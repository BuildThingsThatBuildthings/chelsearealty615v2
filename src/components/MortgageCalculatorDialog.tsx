import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

export function MortgageCalculatorDialog({
  children,
}: {
  children: React.ReactNode;
}) {
  const [loanAmount, setLoanAmount] = useState<number>(300000);
  const [downPaymentType, setDownPaymentType] = useState<"amount" | "percentage">("percentage");
  const [downPaymentValue, setDownPaymentValue] = useState<number>(20);
  const [interestRate, setInterestRate] = useState<number>(4.5);
  const [loanTerm, setLoanTerm] = useState<number>(30);
  const [monthlyPayment, setMonthlyPayment] = useState<number | null>(null);

  const calculateMortgage = () => {
    // Calculate the loan amount after down payment
    const downPaymentAmount = downPaymentType === "percentage" 
      ? (loanAmount * downPaymentValue) / 100 
      : downPaymentValue;
    
    const principalAmount = loanAmount - downPaymentAmount;
    
    // Convert annual interest rate to monthly and decimal form
    const monthlyInterestRate = interestRate / 100 / 12;
    
    // Convert loan term to months
    const loanTermMonths = loanTerm * 12;
    
    // Calculate monthly payment using the formula: P * (r(1+r)^n) / ((1+r)^n - 1)
    // Where P = principal, r = monthly interest rate, n = number of payments
    if (monthlyInterestRate === 0) {
      // If interest rate is 0, simply divide principal by number of months
      setMonthlyPayment(principalAmount / loanTermMonths);
    } else {
      const payment = principalAmount * 
        (monthlyInterestRate * Math.pow(1 + monthlyInterestRate, loanTermMonths)) / 
        (Math.pow(1 + monthlyInterestRate, loanTermMonths) - 1);
      
      setMonthlyPayment(payment);
    }
  };

  const handleInputChange = (
    setter: React.Dispatch<React.SetStateAction<number>>,
    value: string
  ) => {
    const numValue = parseFloat(value);
    if (!isNaN(numValue)) {
      setter(numValue);
    }
  };

  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Mortgage Payment Calculator</DialogTitle>
          <DialogDescription>
            Estimate your monthly mortgage payments based on your loan details.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="loanAmount" className="text-right">
              Loan Amount
            </Label>
            <Input
              id="loanAmount"
              type="number"
              value={loanAmount}
              onChange={(e) => handleInputChange(setLoanAmount, e.target.value)}
              className="col-span-3"
            />
          </div>
          
          <div className="grid grid-cols-4 items-center gap-4">
            <Label className="text-right">Down Payment</Label>
            <div className="col-span-3 space-y-2">
              <RadioGroup 
                value={downPaymentType} 
                onValueChange={(value) => setDownPaymentType(value as "amount" | "percentage")}
                className="flex space-x-4 mb-2"
              >
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="percentage" id="percentage" />
                  <Label htmlFor="percentage">Percentage</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="amount" id="amount" />
                  <Label htmlFor="amount">Amount</Label>
                </div>
              </RadioGroup>
              
              <div className="flex items-center">
                <Input
                  type="number"
                  value={downPaymentValue}
                  onChange={(e) => handleInputChange(setDownPaymentValue, e.target.value)}
                />
                {downPaymentType === "percentage" && <span className="ml-2">%</span>}
                {downPaymentType === "amount" && <span className="ml-2">$</span>}
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="interestRate" className="text-right">
              Interest Rate
            </Label>
            <div className="col-span-3 flex items-center">
              <Input
                id="interestRate"
                type="number"
                step="0.1"
                value={interestRate}
                onChange={(e) => handleInputChange(setInterestRate, e.target.value)}
              />
              <span className="ml-2">%</span>
            </div>
          </div>
          
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="loanTerm" className="text-right">
              Loan Term
            </Label>
            <div className="col-span-3 flex items-center">
              <Input
                id="loanTerm"
                type="number"
                value={loanTerm}
                onChange={(e) => handleInputChange(setLoanTerm, e.target.value)}
              />
              <span className="ml-2">Years</span>
            </div>
          </div>
          
          <Button onClick={calculateMortgage} className="mt-2">
            Calculate
          </Button>
          
          {monthlyPayment !== null && (
            <div className="mt-4 p-4 bg-secondary/20 rounded-md">
              <h3 className="font-semibold text-lg mb-2">Monthly Payment</h3>
              <p className="text-2xl font-bold">${monthlyPayment.toFixed(2)}</p>
              <p className="text-sm text-muted-foreground mt-2">
                This is an estimate. Actual payment may vary based on taxes, insurance, and other factors.
              </p>
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}

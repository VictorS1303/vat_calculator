function calculateVAT(amount, vat = 25)
{
    return amount * (1 + (vat / 100)) 
}

console.log(calculateVAT(300))
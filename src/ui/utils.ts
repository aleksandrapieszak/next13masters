export const formatMoney = (amount: string)=> {
    return new Intl.NumberFormat("pl-PL", {
        style: "currency",
        currency: "PLN",
    }).format(amount)
}
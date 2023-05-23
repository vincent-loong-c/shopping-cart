const CURRENCY_FORMATTER = new Intl.NumberFormat('ms-MY',{currency:"MYR",style:"currency"})

export function currencyFormat(number:number){
    return CURRENCY_FORMATTER.format(number)
}
declare module "*.png" {
  const value: any;
  export default value;
}

type SubData = {
  detail: string,
  value: number
}

type Data =  {
    confirmed: SubData, 
    recovered: SubData, 
    deaths: SubData, 
    lastUpdate: string
  } | undefined;

type DailyDataItem = {
  confirmed: { total: number }, 
  deaths: { total: number }, 
  reportDate: string
}  

type CountryItem = {
  name: string,
  iso2: string
}

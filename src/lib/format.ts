
export const formatCurrency = (value: string | number, decimals = 2) => {
  if (typeof value === 'number')
    value = value.toFixed(decimals);
  
  const isNegative = value.startsWith('-') && value !== '-0.00';
  const normalized = value.replace(/\D/g, '');
  
  const decimalLimit = normalized.length - decimals;
  
  let leftSide = normalized.substring(0, decimalLimit);
  let rightSide = normalized.substring(decimalLimit);
  
  if (rightSide === '00')
    rightSide = '0' + rightSide.substring(1);
        
  if (!leftSide)
    leftSide = '0';
  
  leftSide = leftSide
    .replace(/^0+(?=\d)/g, '')
    .replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  
  return `${isNegative ? '-' : ''}${leftSide}.${rightSide}`;
};
  
export const objectToQueryString = (data = {}) => {
  const entries = Object.entries(data);
  const isEmpty = entries.length === 0;
  
  if (isEmpty)
    return '';
  
  const query = entries.map(data => data.join('=')).join('&');
  
  return `?${query}`;
};
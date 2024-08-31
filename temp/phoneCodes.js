const countryData = require('country-data').callingCountries;

function getCountryNameFromCode(countryCode) {
  // Remove leading zeros and plus sign from the country code
  const trimmedCode = countryCode.replace(/^0+|^\+/, '');

  try {
    // Find the country object with the matching calling code
    const countryInfo = Object.values(countryData).find(country =>
      country.countryCallingCodes.includes(`+${trimmedCode}`)
    );
    const countryName = countryInfo ? countryInfo.name : null;

    if (countryName) {
      return countryName;
    } else {
      return `Invalid country code: ${countryCode}`;
    }
  } catch (error) {
    console.error(`Error getting country name for code ${countryCode}: ${error.message}`);
    return null;
  }
}

// Example usage
console.log(getCountryNameFromCode('001')); // Output: United States
console.log(getCountryNameFromCode('+1')); // Output: United States
console.log(getCountryNameFromCode('0091')); // Output: India
console.log(getCountryNameFromCode('+44')); // Output: United Kingdom
console.log(getCountryNameFromCode('invalid')); // Output: Invalid country code: invalid

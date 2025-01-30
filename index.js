const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

// Code your solution here

const totalBatteries = batteryBatches.reduce((total, current) => {
    return total + current; // Add the current battery batch to the total
}, 0); // Initial value of total is 0

console.log(totalBatteries);
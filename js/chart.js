const maintanance = document.getElementById('maintanance');
const liquidity = document.getElementById('liquidity');
const publicSale = document.getElementById('publicSale');
const initialBurn = document.getElementById('initialBurn');
const exchange = document.getElementById('exchange');
const marketing = document.getElementById('marketing');
const referral = document.getElementById('referral');
const scheme = document.getElementById('scheme');

// MAINTANANCE
new Chart(maintanance, {
  type: 'doughnut',
  data: {
    datasets: [{
      label: '# of Votes',
      data: [70, 30],
      borderWidth: 0,
      backgroundColor: [
    '#27AFE820',
    '#27AFE8',
  ],
    borderWidth: 0,
    cutout: 50,
    }],
  },
});

// LIQUIDITY
new Chart(liquidity, {
  type: 'doughnut',
  data: {
    datasets: [{
      label: '# of Votes',
      data: [30, 70],
      borderWidth: 0,
      backgroundColor: [
    '#27AFE820',
    '#27AFE8',
  ],
  borderWidth: 0,
  cutout: 50,
    }],
  },
});

// PUBLIC SALE
new Chart(publicSale, {
  type: 'doughnut',
  data: {
    datasets: [{
      label: '# of Votes',
      data: [28, 72],
      borderWidth: 0,
      backgroundColor: [
    '#27AFE820',
    '#27AFE8',
  ],
  borderWidth: 0,
  cutout: 50,
    }],
  },
});

// INITIAL BURN
new Chart(initialBurn, {
  type: 'doughnut',
  data: {
    datasets: [{
      label: '# of Votes',
      data: [0, 100],
      borderWidth: 0,
      backgroundColor: [
    '#27AFE820',
    '#27AFE8',
  ],
  borderWidth: 0,
  cutout: 50,
    }],
  },
});

// EXCHANGE
new Chart(exchange, {
  type: 'doughnut',
  data: {
    datasets: [{
      label: '# of Votes',
      data: [28, 72],
      borderWidth: 0,
      backgroundColor: [
    '#27AFE820',
    '#27AFE8',
  ],
  borderWidth: 0,
  cutout: 50,
    }],
  },
});

// MARKETEING
new Chart(marketing, {
  type: 'doughnut',
  data: {
    datasets: [{
      label: '# of Votes',
      data: [28, 72],
      borderWidth: 0,
      backgroundColor: [
    '#27AFE820',
    '#27AFE8',
  ],
  borderWidth: 0,
  cutout: 50,
    }],
  },
});

// REFERRAL
new Chart(referral, {
  type: 'doughnut',
  data: {
    datasets: [{
      label: '# of Votes',
      data: [28, 72],
      borderWidth: 0,
      backgroundColor: [
    '#27AFE820',
    '#27AFE8',
  ],
  borderWidth: 0,
  cutout: 50,
    }],
  },
});

// SCHEME
new Chart(scheme, {
  type: 'doughnut',
  data: {
    datasets: [{
      label: '# of Votes',
      data: [28, 72],
      borderWidth: 0,
      backgroundColor: [
    '#27AFE820',
    '#27AFE8',
  ],
  borderWidth: 0,
  cutout: 50,
    }],
  },
});
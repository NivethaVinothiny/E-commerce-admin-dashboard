// Toggle Sidebar Function
function toggleSidebar() {
    const sidebar = document.getElementById('sidebar');
    const mainContent = document.getElementById('main-content');
    sidebar.classList.toggle('open');
    mainContent.classList.toggle('shift');
  }
  
  // Dashboard Data
  const totalSales = document.getElementById('sales');
  const totalOrders = document.getElementById('orders');
  const newCustomers = document.getElementById('customers');
  const inventory = document.getElementById('inventory');
  
  // Sample data for charts
  const ctxSales = document.getElementById('salesChart').getContext('2d');
  const salesChart = new Chart(ctxSales, {
    type: 'line',
    data: {
      labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'],
      datasets: [{
        label: 'Sales (₹)',
        data: [1200, 1900, 3000, 5000, 2000, 3000, 4500, 3500, 4000],
        backgroundColor: 'rgba(40, 192, 199, 0.2)',
        borderColor: 'black',
        borderWidth: 3
      }]
    },
    options: {
      responsive: true,
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });
  
  const ctxCustomers = document.getElementById('customerChart').getContext('2d');
  const customerChart = new Chart(ctxCustomers, {
    type: 'bar',
    data: {
      labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
      datasets: [{
        label: 'New Customers',
        data: [30, 50, 20, 40, 60],
        backgroundColor: 'rgba(153, 102, 255, 0.2)',
        borderColor: 'rgba(153, 102, 255, 1)',
        borderWidth: 1
      }]
    },
    options: {
      responsive: true,
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });
  
  const ctxMonthlySales = document.getElementById('monthlySalesChart').getContext('2d');
  const monthlySalesChart = new Chart(ctxMonthlySales, {
    type: 'line',
    data: {
      labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'],
      datasets: [{
        label: 'Sales (₹)',
        data: [1200, 1900, 3000, 5000, 2000, 3000, 4500, 3500, 4000],
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1
      }]
    },
    options: {
      responsive: true,
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });
  
  const ctxTopProducts = document.getElementById('topProductsChart').getContext('2d');
  const topProductsChart = new Chart(ctxTopProducts, {
    type: 'bar',
    data: {
      labels: ['Product A', 'Product B', 'Product C', 'Product D', 'Product E'],
      datasets: [{
        label: 'Units Sold',
        data: [500, 400, 350, 300, 450],
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)'
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)'
        ],
        borderWidth: 1
      }]
    },
    options: {
      responsive: true,
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });
  
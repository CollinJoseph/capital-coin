import Image from 'next/image'

export default function Transcation() {
  return (
    <div>
      <div class="account-details">
          <div class="balance-section">
              <h3>Checking Account</h3>
              <h1>USD 10,000.00</h1>
              <p>Available: USD 8,000.00</p>
              <div class="income-expense">
                  <span>Income: USD 30,000.00</span>
                  <span>Expenses: USD 20,000.00</span>
              </div>
          </div>
          <div class="card-details">
              <h4>Available Balance</h4>
              <h2>USD 10,000.00</h2>
              <p>1111 **** **** 0000</p>
              <span>Navdeep Labana</span>
              <span>12/26</span>
          </div>
      </div>
      <div class="transactions">
          <input type="text" id="search-bar" placeholder="Search"/>
          <div class="transaction-filters">
              <button data-filter="all" class="active">All</button>
              <button data-filter="expenses">Expenses</button>
              <button data-filter="income">Income</button>
          </div>
          {/* <!-- Add your transaction items here --> */}
          <div class="transaction-item">
              <span>Playstation 6</span>
              <span>- $189.36</span>
          </div>
          {/* <!-- ... more transaction items --> */}
      </div>
      <div class="spending-overview">
          <h3>Spending overview</h3>
          <div class="statistics">
              {/* <!-- Add your statistics bars here --> */}
              <div class="stat-bar" style="height: 50%;"></div>
      
          </div>
      </div>
    </div>
  )
}

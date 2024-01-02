import React from 'react';
import './admin.css';




export default function AdminPanel({ children }) {

  
    return (
        <div>
        <input type="checkbox" name="" id="nav-toggle" />
        <div class="sidebar">
          <div class="sidebar-brand">
            <h2>
              <span class="lab la-accusoft"></span> <span><h1>Sky Forest Resort</h1></span>
            </h2>
          </div>
          <div class="sidebar-menu">
            <ul>
              
              <li>
                <a href="/" class="active">
                    {" "}
                    {}    
                    <span class="fas fa-align-left"></span>
                  <span>Dashboard</span>
                </a>
              </li>

              <li>
                <a href="/InventoryMain">
                  {" "}
                  {}
                  <span class="las la-clipboard-list"></span>
                  <span>INVENTORY MANAGEMENT</span>
                </a>
              </li>

              <li>
                <a href="/EmployeeMain">
                  {" "}
                  {}
                  <span class="las la-clipboard-list"></span>
                  <span>EMPLOYEE MANAGEMENT</span>
                </a>
              </li>
              
              <li>
                <a href="/CustomerMain">
                  {" "}
                  {/* icons */}
                  <span class="las la-clipboard-list"></span>
                  <span>CUSTOMER MANAGEMENT</span>
                </a>
              </li>
              <li>
                <a href="/PaymentMain">
                  {" "}
                {/* icons */}
                <span class="las la-clipboard-list"></span>
                  <span>PAYMENT MANAGEMENT</span>
                </a>
              </li>

              <li>
                <a href="/FoodMain">
                  {" "}
                  <span class="las la-clipboard-list"></span>
                  <span>FOOD MANAGEMENT</span>
                </a>
              </li>

              <li>
                <a href="/SafariMain">
                  {" "}
                  <span class="las la-clipboard-list"></span>
                  <span>SAFARI MANAGEMENT</span>
                </a>
              </li>     

              <li>
                <a href="/DayoutMain">
                  {" "}
                  <span class="las la-clipboard-list"></span>
                  <span>DAYOUT PACKAGE MANAGEMENT</span>
                </a>
              </li> 

              <li>
                <a href="/RoomMain">
                  {" "}
                  <span class="las la-clipboard-list"></span>
                  <span>ROOM MANAGEMENT</span>
                </a>
              </li> 

            </ul>
          </div>
        </div>
        <div class="main-content">
        <header><h2>
            <label for="nav-toggle">
              <span class="las la-bars"></span>
            </label>
                </h2>
        </header>
          <main>
              {children}
          </main>
        </div>
      </div>
    )
}

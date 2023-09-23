import './style.css'
import {
    setupEffect
} from './effect.js'

document.querySelector('#app').innerHTML = `
<div class="center-container">
<div class="layout">
<div class="grid-container">
<div class="grid">
  <div class="card">
  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="M8 9V7h2v2H8zm-2 2V9h2v2H6zm0 2H4v-2h2v2zm2 2v-2H6v2h2zm0 0h2v2H8v-2zm8-6V7h-2v2h2zm2 2V9h-2v2h2zm0 2v-2h2v2h-2zm-2 2v-2h2v2h-2zm0 0v2h-2v-2h2z"/></svg>
    <h2>Code As A Service</h2>
    <p>Access ready-to-use coding solutions tailored to your needs. No more lengthy development times; plug in our service and get started instantly.</p>
  </div>
  <div class="card" >
  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="M5 3h14v2H5V3zm0 16H3V5h2v14zm14 0v2H5v-2h14zm0 0h2V5h-2v14zM10 8H8v2h2V8zm4 0h2v2h-2V8zm-5 6v-2H7v2h2zm6 0v2H9v-2h6zm0 0h2v-2h-2v2z"/></svg>
    <h2>Customer Care Support</h2>
    <p>Our team is committed to your success. Experience round-the-clock assistance, ensuring all your questions and concerns are addressed promptly.</p>
  </div>
  <div class="card">
  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="M6 3h14v2h2v6h-2v8h-2V5H6V3zm8 14v-2H6V5H4v10H2v4h2v2h14v-2h-2v-2h-2zm0 0v2H4v-2h10zM8 7h8v2H8V7zm8 4H8v2h8v-2z"/></svg>
    <h2>Your Script, Your Rules</h2>
    <p>Maintain complete control over your processes. Our platform is customizable, letting you dictate the rules and ensuring your unique needs are met.</p>
  </div>
  <div class="card">
  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="M6 2h12v2H6V2zM4 6V4h2v2H4zm0 12V6H2v12h2zm2 2v-2H4v2h2zm12 0v2H6v-2h12zm2-2v2h-2v-2h2zm0-12h2v12h-2V6zm0 0V4h-2v2h2zm-9-1h2v2h3v2h-6v2h6v6h-3v2h-2v-2H8v-2h6v-2H8V7h3V5z"/></svg>
    <h2>Billing Policy</h2>
    <p>Transparent and straightforward, our billing policy is designed for maximum clarity. Know exactly what you’re paying for, with no hidden costs.</p>
  </div>
  <div class="card">
  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="M16 4h-6v2H8v2H4v2H2v2H0v6h2v2h20v-2h2v-6h-2v-2h-2V8h-2V6h-2V4zm2 8h4v6H2v-6h2v-2h4v2h2v-2H8V8h2V6h6v2h2v4zm0 0v2h-2v-2h2z"/></svg>
    <h2>Cloud Based Architecture</h2>
    <p>Benefit from the scalability, security, and flexibility that our cloud infrastructure offers. Access your data and services anywhere, anytime.</p>
  </div>
  <div class="card">
  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="M9 2H5v2H3v2H1v6h2v2h2v2h2v2h2v2h2v2h2v-2h2v-2h2v-2h2v-2h2v-2h2V6h-2V4h-2V2h-4v2h-2v2h-2V4H9V2zm0 2v2h2v2h2V6h2V4h4v2h2v6h-2v2h-2v2h-2v2h-2v2h-2v-2H9v-2H7v-2H5v-2H3V6h2V4h4z"/></svg>
    <h2>Made with Love</h2>
    <p>Every line of code, every feature, and every interaction is crafted with care and passion. We don't just build software; we pour our heart into creating solutions you'll adore.</p>
  </div>
</div>
</div>
</div>
`

setupEffect()

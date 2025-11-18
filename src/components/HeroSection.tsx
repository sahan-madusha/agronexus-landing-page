import '../styles/hero.css'
import { ArrowRight, ChevronDown } from 'lucide-react'

export default function HeroSection() {
  return (
    <section className="hero-section">
      <div className="hero-overlay">
        <div className="hero-content">
          <div className="hero-badge">
            AI + IoT Innovation
          </div>
          
          <h1 className="hero-title">
            AI-Powered Smart Greenhouse for Efficient Farming
          </h1>
          
          <p className="hero-description">
            Harness the power of artificial intelligence and IoT technology to
            optimize crop yield, reduce water consumption, and revolutionize
            modern agriculture with real-time monitoring and automated control.
          </p>
          
          <div className="hero-buttons">
            <button className="btn-primary">
              Request a Demo
              <ArrowRight className="btn-icon" size={20} />
            </button>
            <button className="btn-secondary">
              Learn More
            </button>
          </div>
          
          <div className="hero-stats">
            <div className="stat-card">
              <div className="stat-value">40%</div>
              <div className="stat-label">Increased Yield</div>
            </div>
            <div className="stat-card">
              <div className="stat-value">60%</div>
              <div className="stat-label">Water Savings</div>
            </div>
            <div className="stat-card">
              <div className="stat-value">24/7</div>
              <div className="stat-label">Smart Monitoring</div>
            </div>
          </div>
        </div>
        
        <div className="scroll-indicator">
          <ChevronDown size={32} />
        </div>
      </div>
    </section>
  )
}
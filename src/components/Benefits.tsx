import '../styles/benefits.css'
import { TrendingUp, Droplet, Users, DollarSign, Leaf, Clock } from 'lucide-react'

export default function Benefits() {
  const benefits = [
    {
      icon: <TrendingUp size={32} />,
      title: 'Increased Yield',
      description: 'Optimize growing conditions for up to 40% higher crop production',
      color: '#00C853'
    },
    {
      icon: <Droplet size={32} />,
      title: 'Water Efficiency',
      description: 'Save up to 60% water with precision irrigation control',
      color: '#00C853'
    },
    {
      icon: <Users size={32} />,
      title: 'Reduced Labor',
      description: 'Minimize manual monitoring and intervention requirements',
      color: '#00C853'
    },
    {
      icon: <DollarSign size={32} />,
      title: 'Cost-Effective',
      description: 'Lower operational costs through automation and optimization',
      color: '#00C853'
    },
    {
      icon: <Leaf size={32} />,
      title: 'Sustainable Farming',
      description: 'Reduce chemical usage with early pest and disease detection',
      color: '#00C853'
    },
    {
      icon: <Clock size={32} />,
      title: '24/7 Monitoring',
      description: 'Continuous surveillance ensures no issues go unnoticed',
      color: '#00C853'
    }
  ]

  return (
    <section className="benefits-section">
      <div className="container">
        <div className="section-badge">Benefits</div>
        
        <h2 className="section-title">
          Why Choose Smart Greenhouse Technology?
        </h2>
        
        <p className="section-description">
          Experience tangible improvements in productivity, sustainability, and profitability.
        </p>
        
        <div className="benefits-grid">
          {benefits.map((benefit, index) => (
            <div key={index} className="benefit-card">
              <div className="benefit-icon" style={{ color: benefit.color }}>
                {benefit.icon}
              </div>
              <div className="benefit-content">
                <h3 className="benefit-title">{benefit.title}</h3>
                <p className="benefit-description">{benefit.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
import '../styles/features.css'
import { Camera, TrendingUp, Thermometer, Bell } from 'lucide-react'

export default function KeyFeatures() {
  const features = [
    {
      icon: <Camera size={32} />,
      title: 'AI-Based Plant Health Detection',
      description: 'Advanced computer vision and machine learning algorithms analyze plant images to detect diseases, pest infestations, and nutrient deficiencies in real-time.',
      color: '#00C853'
    },
    {
      icon: <TrendingUp size={32} />,
      title: 'Growth Monitoring & Prediction',
      description: 'Track plant growth patterns with continuous sensors and predictive analytics to forecast harvest times and optimize production schedules.',
      color: '#00C853'
    },
    {
      icon: <Thermometer size={32} />,
      title: 'IoT Climate & Irrigation Control',
      description: 'Automated control of temperature, humidity, and irrigation systems based on real-time environmental data and crop requirements.',
      color: '#00C853'
    },
    {
      icon: <Bell size={32} />,
      title: 'Mobile Alerts & Cloud Dashboard',
      description: 'Receive instant notifications on your mobile device and access comprehensive analytics through our intuitive cloud-based dashboard.',
      color: '#00C853'
    }
  ]

  return (
    <section className="features-section">
      <div className="container">
        <div className="section-badge">Key Features</div>
        
        <h2 className="section-title">
          Cutting-Edge Technology for Modern Agriculture
        </h2>
        
        <p className="section-description">
          Our smart greenhouse system combines AI, IoT, and automation to
          deliver unprecedented control and insights.
        </p>
        
        <div className="features-grid">
          {features.map((feature, index) => (
            <div key={index} className="feature-card">
              <div className="feature-icon" style={{ color: feature.color }}>
                {feature.icon}
              </div>
              <h3 className="feature-title">{feature.title}</h3>
              <p className="feature-description">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
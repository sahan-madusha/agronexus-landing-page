import '../styles/howitworks.css'
import { Waves, Camera, BarChart3, Smartphone } from 'lucide-react'

export default function HowItWorks() {
  const steps = [
    {
      number: '01',
      icon: <Waves size={40} />,
      title: 'IoT Sensors Collect Data',
      description: 'Environmental sensors continuously monitor temperature, humidity, soil moisture, and light levels throughout the greenhouse.'
    },
    {
      number: '02',
      icon: <Camera size={40} />,
      title: 'AI Camera Analysis',
      description: 'Smart cameras capture plant images and AI algorithms detect health issues, growth stages, and potential pest problems.'
    },
    {
      number: '03',
      icon: <BarChart3 size={40} />,
      title: 'Data Processing & Analysis',
      description: 'Cloud-based analytics process sensor data and camera feeds to generate actionable insights and predictions.'
    },
    {
      number: '04',
      icon: <Smartphone size={40} />,
      title: 'Alerts & Automation',
      description: 'Receive mobile notifications and let the system automatically adjust climate controls and irrigation for optimal conditions.'
    }
  ]

  return (
    <section className="howitworks-section">
      <div className="container">
        <div className="section-badge">How It Works</div>
        
        <h2 className="section-title">
          Simple, Smart, and Seamless
        </h2>
        
        <p className="section-description">
          Our integrated system works in four simple steps to keep your greenhouse
          running at peak efficiency.
        </p>
        
        <div className="steps-container">
          {steps.map((step, index) => (
            <div key={index} className="step-item">
              <div className="step-number">{step.number}</div>
              <div className="step-icon">
                {step.icon}
              </div>
              <h3 className="step-title">{step.title}</h3>
              <p className="step-description">{step.description}</p>
              {index < steps.length - 1 && (
                <div className="step-connector">
                  <div className="connector-line"></div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
import '../styles/about.css'
import { Lightbulb, GraduationCap, MapPin } from 'lucide-react'

export default function AboutProject() {
  return (
    <section className="about-section">
      <div className="container">
        <div className="about-content">
          <div className="about-image-wrapper">
            <img 
              src="https://images.unsplash.com/photo-1574943320219-553eb213f72d?w=800&q=80" 
              alt="Greenhouse with tractor"
              className="about-image"
            />
            <div className="about-badge">
              <Lightbulb size={24} />
              <div>
                <div className="badge-title">Innovation</div>
                <div className="badge-subtitle">Research Project</div>
              </div>
            </div>
          </div>
          
          <div className="about-text">
            <div className="section-badge">About the Project</div>
            
            <h2 className="section-title-left">
              A University Innovation Initiative
            </h2>
            
            <div className="about-description">
              <p>
                The Smart Greenhouse AI & IoT Project is a cutting-edge
                research and innovation initiative developed at a leading
                university in Sri Lanka. Our multidisciplinary team combines
                expertise in artificial intelligence, agricultural engineering,
                and IoT systems to address the challenges of modern
                sustainable farming.
              </p>
              
              <p>
                This prototype demonstrates how advanced technology can
                transform traditional agriculture, making it more efficient,
                sustainable, and accessible to farmers of all scales. Our goal
                is to contribute to food security while promoting
                environmental conservation through smart, data-driven
                farming practices.
              </p>
            </div>
            
            <div className="about-highlights">
              <div className="highlight-item">
                <GraduationCap size={24} className="highlight-icon" />
                <div>
                  <div className="highlight-title">University Research Project</div>
                  <div className="highlight-text">Academic excellence meets real-world application</div>
                </div>
              </div>
              
              <div className="highlight-item">
                <MapPin size={24} className="highlight-icon" />
                <div>
                  <div className="highlight-title">Developed in Sri Lanka</div>
                  <div className="highlight-text">Addressing local and global agricultural challenges</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
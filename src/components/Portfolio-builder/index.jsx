import jsPDF from 'jspdf'
import React, { useEffect, useState } from 'react'
import AnimatedLetters from '../AnimatedLetters'
import './index.scss'

const PortfolioBuilder = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 5000)
    return () => clearTimeout(timeoutId)
  }, [])

  const [isGeneratingPdf, setIsGeneratingPdf] = useState(false)
  const [errorMessage, setErrorMessage] = useState('')
  const [userData, setUserData] = useState({
    fullName: '',
    contactInfo: '',
    summary: '',
    internship: '',
    projects: '',
    achievements: '',
    certifications: '',
    education: '',
  })

  // Handle form input change
  const handleInputChange = (e) => {
    const { name, value } = e.target
    setUserData({
      ...userData,
      [name]: value,
    })
  }

  const generatePDF = async () => {
    setIsGeneratingPdf(true)
    setErrorMessage('')

    try {
      const pdf = new jsPDF({
        orientation: 'portrait',
        unit: 'pt',
        format: 'a4',
      })

      pdf.setFont('helvetica')
      pdf.setFontSize(12)

      // Header Section
      pdf.setFontSize(18)
      pdf.setFont('helvetica', 'bold')
      pdf.text(userData.fullName, 40, 50)
      pdf.setFontSize(10)
      pdf.text(userData.contactInfo, 40, 70)

      pdf.setLineWidth(0.5)
      let yPos = 75 // Start position for the first section
      pdf.line(40, yPos, 550, yPos) // Line under contact info

      const addSectionWithWrap = (title, content, yPos) => {
        yPos += 20
        pdf.setFontSize(14)
        pdf.setFont('helvetica', 'bold')
        pdf.text(title, 40, yPos)
        pdf.setFontSize(12)
        pdf.setFont('helvetica', 'normal')
        yPos += 20

        let lines = pdf.splitTextToSize(content, 510)
        pdf.text(lines, 40, yPos)
        return yPos + lines.length * 20 // Adjust position based on text height
      }

      // Adding each section with word wrapping
      yPos = addSectionWithWrap('Skills Summary', userData.summary, yPos)
      pdf.line(40, yPos + 10, 550, yPos + 10) // Line after Skills Summary

      yPos = addSectionWithWrap('Internship', userData.internship, yPos + 30)
      pdf.line(40, yPos + 10, 550, yPos + 10) // Line after Internship

      // Projects Section with Wrapping
      yPos += 30
      pdf.setFontSize(14)
      pdf.setFont('helvetica', 'bold')
      pdf.text('Projects', 40, yPos)
      yPos += 20
      userData.projects.split('\n').forEach((project, index) => {
        let projectText = `${index + 1}. ${project}`
        let projectLines = pdf.splitTextToSize(projectText, 510)
        pdf.text(projectLines, 40, yPos)
        yPos += projectLines.length * 20 // Adjust yPos after each project
      })
      pdf.line(40, yPos + 10, 550, yPos + 10) // Line after Projects

      // Achievements Section with Wrapping
      yPos += 30
      pdf.setFontSize(14)
      pdf.setFont('helvetica', 'bold')
      pdf.text('Achievements', 40, yPos)
      yPos += 20
      userData.achievements.split('\n').forEach((achievement, index) => {
        let achievementText = `${index + 1}. ${achievement}`
        let achievementLines = pdf.splitTextToSize(achievementText, 510)
        pdf.text(achievementLines, 40, yPos)
        yPos += achievementLines.length * 20 // Adjust yPos after each achievement
      })
      pdf.line(40, yPos + 10, 550, yPos + 10) // Line after Achievements

      // Certifications Section with Wrapping
      yPos += 30
      pdf.setFontSize(14)
      pdf.setFont('helvetica', 'bold')
      pdf.text('Certifications', 40, yPos)
      yPos += 20
      userData.certifications.split('\n').forEach((certification, index) => {
        let certificationText = `${index + 1}. ${certification}`
        let certificationLines = pdf.splitTextToSize(certificationText, 510)
        pdf.text(certificationLines, 40, yPos)
        yPos += certificationLines.length * 20 // Adjust yPos after each certification
      })
      pdf.line(40, yPos + 10, 550, yPos + 10) // Line after Certifications

      // Education Section with Wrapping
      yPos += 30
      yPos = addSectionWithWrap('Education', userData.education, yPos)
      pdf.line(40, yPos + 10, 550, yPos + 10) // Line after Education

      // Save PDF
      pdf.save(`${userData.fullName}_CV.pdf`)
      setIsGeneratingPdf(false)
      setErrorMessage('PDF generated successfully!')
    } catch (error) {
      console.error('Error generating PDF:', error)
      setIsGeneratingPdf(false)
      setErrorMessage(
        'There was an error generating the PDF. Please try again.'
      )
    }
  }

  return (
    <div className="container cv-builder">
      <div className="text-zone">
      <h1>
        <AnimatedLetters
          letterClass={letterClass}
          strArray={['C', 'V', ' ', 'B', 'U', 'I', 'L', 'D', 'E', 'R']}
          idx={10}
        />
        </h1>
        <p>By filling this from you can get a generated PDF CV</p>
      </div>

      <div className="form-sect">
        <label>Full Name</label>
        <input
          type="text"
          name="fullName"
          value={userData.fullName}
          onChange={handleInputChange}
          placeholder="Enter your full name"
        />

        <label>Contact Information</label>
        <textarea
          name="contactInfo"
          value={userData.contactInfo}
          onChange={handleInputChange}
          placeholder="LinkedIn, Email, Phone"
        />

        <label>Skills Summary</label>
        <textarea
          name="summary"
          value={userData.summary}
          onChange={handleInputChange}
          placeholder="Enter your skills summary"
        />

        <label>Internship</label>
        <textarea
          name="internship"
          value={userData.internship}
          onChange={handleInputChange}
          placeholder="Describe your internship experience"
        />

        <label>Projects (separate each project with a newline)</label>
        <textarea
          name="projects"
          value={userData.projects}
          onChange={handleInputChange}
          placeholder="Enter your projects"
        />

        <label>Achievements (separate each achievement with a newline)</label>
        <textarea
          name="achievements"
          value={userData.achievements}
          onChange={handleInputChange}
          placeholder="Enter your achievements"
        />

        <label>
          Certifications (separate each certification with a newline)
        </label>
        <textarea
          name="certifications"
          value={userData.certifications}
          onChange={handleInputChange}
          placeholder="Enter your certifications"
        />

        <label>Education</label>
        <textarea
          name="education"
          value={userData.education}
          onChange={handleInputChange}
          placeholder="Enter your education details"
        />
      </div>

      <button disabled={isGeneratingPdf} onClick={generatePDF}>
        {isGeneratingPdf ? 'Generating PDF...' : 'Download CV'}
      </button>

      {errorMessage && <div className="error-message">{errorMessage}</div>}
    </div>
  )
}

export default PortfolioBuilder

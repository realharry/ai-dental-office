import { NextRequest, NextResponse } from "next/server"

// Knowledge base about the dental office
const dentalKnowledge = `
San Diego Bright Smile Dental Office Information:

LOCATION & CONTACT:
- Address: 123 Pacific Coast Highway, San Diego, CA 92101
- Phone: (619) 555-0123
- Email: info@sandiegobrightsmile.com

OFFICE HOURS:
- Monday: 8:00 AM - 6:00 PM
- Tuesday: 8:00 AM - 6:00 PM
- Wednesday: 8:00 AM - 6:00 PM
- Thursday: 8:00 AM - 6:00 PM
- Friday: 8:00 AM - 5:00 PM
- Saturday: 9:00 AM - 2:00 PM (By appointment only)
- Sunday: Closed

SERVICES:
1. General Dentistry
   - Regular check-ups and cleanings
   - Dental exams
   - X-rays
   - Fluoride treatments
   - Sealants

2. Cosmetic Dentistry
   - Teeth whitening
   - Veneers
   - Bonding
   - Smile makeovers

3. Restorative Dentistry
   - Fillings
   - Crowns and bridges
   - Dental implants
   - Dentures

4. Orthodontics
   - Traditional braces
   - Invisalign
   - Retainers

5. Emergency Dental Care
   - Same-day appointments available for emergencies
   - Pain management
   - Tooth extractions

INSURANCE:
- We accept most major dental insurance plans
- PPO and HMO plans accepted
- Payment plans available
- CareCredit financing accepted

APPOINTMENT SCHEDULING:
- Call us at (619) 555-0123
- Book online through our website
- Same-day emergency appointments available
- We typically recommend scheduling regular cleanings every 6 months

COMMON DENTAL QUESTIONS:

Q: How often should I visit the dentist?
A: We recommend visiting every 6 months for routine check-ups and cleanings.

Q: Do you offer emergency services?
A: Yes, we offer same-day emergency appointments. Call (619) 555-0123 immediately.

Q: What should I do if I have a toothache?
A: Rinse with warm water, use dental floss to remove any trapped food, and call us for an appointment. Take over-the-counter pain medication if needed.

Q: How can I prevent cavities?
A: Brush twice daily, floss daily, limit sugary foods and drinks, and visit us regularly for cleanings.

Q: What is the cost of teeth whitening?
A: Professional teeth whitening typically ranges from $300-$500. We offer various options to fit your budget.

Q: Do you accept my insurance?
A: We accept most major dental insurance plans. Contact our office with your insurance information, and we'll verify your coverage.

TEAM:
- Dr. Sarah Johnson, DDS - General Dentist with 15 years of experience
- Dr. Michael Chen, DDS - Cosmetic and Restorative Dentistry specialist
- Experienced dental hygienists and friendly staff

PARKING:
- Free parking available in our building's parking structure
- Street parking also available

COVID-19 SAFETY:
- Enhanced cleaning protocols
- Air purification systems
- PPE for all staff
- Temperature checks
- Social distancing in waiting areas
`

function findRelevantInfo(query: string): string {
  const lowerQuery = query.toLowerCase()
  
  // Appointment scheduling
  if (lowerQuery.includes("appointment") || lowerQuery.includes("schedule") || lowerQuery.includes("book")) {
    return "To schedule an appointment, you can call us at (619) 555-0123 or book online through our website. We're open Monday-Friday 8:00 AM - 6:00 PM (Friday until 5:00 PM), and Saturday 9:00 AM - 2:00 PM by appointment. Same-day emergency appointments are available."
  }
  
  // Office hours
  if (lowerQuery.includes("hours") || lowerQuery.includes("open") || lowerQuery.includes("when")) {
    return "Our office hours are: Monday-Thursday 8:00 AM - 6:00 PM, Friday 8:00 AM - 5:00 PM, Saturday 9:00 AM - 2:00 PM (by appointment), and we're closed on Sunday."
  }
  
  // Location
  if (lowerQuery.includes("location") || lowerQuery.includes("address") || lowerQuery.includes("where")) {
    return "We're located at 123 Pacific Coast Highway, San Diego, CA 92101. Free parking is available in our building's parking structure."
  }
  
  // Contact
  if (lowerQuery.includes("phone") || lowerQuery.includes("call") || lowerQuery.includes("contact") || lowerQuery.includes("email")) {
    return "You can reach us at (619) 555-0123 or email us at info@sandiegobrightsmile.com."
  }
  
  // Services
  if (lowerQuery.includes("service") || lowerQuery.includes("what do you")) {
    return "We offer comprehensive dental services including general dentistry (check-ups, cleanings), cosmetic dentistry (whitening, veneers), restorative dentistry (fillings, crowns, implants), orthodontics (braces, Invisalign), and emergency dental care."
  }
  
  // Emergency
  if (lowerQuery.includes("emergency") || lowerQuery.includes("urgent") || lowerQuery.includes("pain")) {
    return "For dental emergencies, please call us immediately at (619) 555-0123. We offer same-day emergency appointments and can help with pain management and urgent dental issues."
  }
  
  // Insurance
  if (lowerQuery.includes("insurance") || lowerQuery.includes("payment") || lowerQuery.includes("cost")) {
    return "We accept most major dental insurance plans including PPO and HMO plans. We also offer payment plans and accept CareCredit financing. Please contact our office with your insurance information to verify coverage."
  }
  
  // Teeth whitening
  if (lowerQuery.includes("whitening") || lowerQuery.includes("white teeth")) {
    return "We offer professional teeth whitening services that typically range from $300-$500. We have various options to fit your budget and can help you achieve a brighter smile safely and effectively."
  }
  
  // Cavity prevention
  if (lowerQuery.includes("cavity") || lowerQuery.includes("cavities") || lowerQuery.includes("prevent")) {
    return "To prevent cavities, brush your teeth twice daily with fluoride toothpaste, floss daily, limit sugary foods and drinks, and visit us regularly for check-ups and cleanings every 6 months."
  }
  
  // Regular visits
  if (lowerQuery.includes("how often") || lowerQuery.includes("regular")) {
    return "We recommend visiting the dentist every 6 months for routine check-ups and cleanings. Regular visits help prevent dental problems and catch issues early."
  }
  
  return ""
}

export async function POST(request: NextRequest) {
  try {
    const { messages } = await request.json()
    
    if (!messages || messages.length === 0) {
      return NextResponse.json(
        { error: "No messages provided" },
        { status: 400 }
      )
    }

    // Get the last user message
    const lastMessage = messages[messages.length - 1]
    const userQuery = lastMessage.content

    // Find relevant information from our knowledge base
    const relevantInfo = findRelevantInfo(userQuery)
    
    // Generate response
    let response = ""
    if (relevantInfo) {
      response = relevantInfo
    } else {
      // Default response for general queries
      response = "I'd be happy to help you with information about our dental office! I can assist with:\n\n" +
        "• Scheduling appointments\n" +
        "• Office hours and location\n" +
        "• Our dental services\n" +
        "• Insurance and payment options\n" +
        "• Emergency dental care\n" +
        "• Common dental questions\n\n" +
        "What would you like to know more about? You can also call us directly at (619) 555-0123."
    }

    return NextResponse.json({ message: response })
  } catch (error) {
    console.error("Chat API error:", error)
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    )
  }
}

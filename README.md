# San Diego Bright Smile Dental

A modern, professional business website for a dental office in San Diego, featuring an intelligent LLM RAG chatbot for patient assistance.

## Features

- **Modern Design**: Clean, bright, and professional interface built with Next.js and Tailwind CSS
- **Dark/Light Mode**: Theme toggle for user preference
- **Responsive Layout**: Fully responsive design that works on all devices
- **Comprehensive Information**:
  - Office hours and location
  - Contact information
  - Services offered (General, Cosmetic, Restorative, Orthodontics)
  - Insurance and payment options
- **Intelligent Chatbot**: LLM-powered RAG chatbot that can:
  - Schedule appointments
  - Answer common dental questions
  - Provide office information
  - Assist with emergency inquiries
- **Intuitive UI**: Easy-to-use chatbot interface with real-time responses

## Tech Stack

- **Framework**: Next.js 15 with TypeScript
- **Styling**: Tailwind CSS v3
- **UI Components**: Custom Shadcn-style components
- **Theme**: next-themes for dark/light mode
- **Icons**: Lucide React
- **Knowledge Base**: In-memory knowledge base with pattern matching (ChromaDB integration ready)

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Clone the repository:
```bash
git clone https://github.com/realharry/ai-dental-office.git
cd ai-dental-office
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

### Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
ai-dental-office/
├── app/                    # Next.js app directory
│   ├── api/               # API routes
│   │   └── chat/         # Chatbot API endpoint
│   ├── globals.css       # Global styles
│   ├── layout.tsx        # Root layout
│   └── page.tsx          # Home page
├── components/            # React components
│   ├── ui/               # UI components (Button, Card, Input)
│   ├── chatbot.tsx       # Chatbot component
│   ├── theme-provider.tsx # Theme provider
│   └── theme-toggle.tsx  # Theme toggle button
├── lib/                   # Utility functions
│   └── utils.ts          # Helper utilities
└── public/               # Static assets
```

## Chatbot Knowledge Base

The chatbot currently uses a pattern-matching system with a comprehensive knowledge base covering:
- Office hours and location
- Services offered
- Appointment scheduling
- Insurance and payment options
- Common dental questions
- Emergency care information

## Customization

### Updating Office Information

Edit the knowledge base in `app/api/chat/route.ts` to update:
- Office hours
- Contact information
- Services offered
- Pricing information

### Styling

Modify `tailwind.config.ts` and `app/globals.css` to customize:
- Color scheme
- Typography
- Spacing
- Component styles

## License

MIT License - see [LICENSE](LICENSE) file for details

## Contact

San Diego Bright Smile Dental
- Address: 123 Pacific Coast Highway, San Diego, CA 92101
- Phone: (619) 555-0123
- Email: info@sandiegobrightsmile.com

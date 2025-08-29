# Portfolio - Next.js Application

A modern, responsive portfolio website built with Next.js 14, featuring smooth animations, dark mode support, and a professional contact form with email integration.

## 🚀 Features

### Core Functionality
- **Hero Section**: Dynamic introduction with animated text and call-to-action
- **About Section**: Professional background and skills showcase
- **Projects Section**: Portfolio of work with detailed descriptions
- **Contact Form**: Functional contact form with email notifications
- **Responsive Navigation**: Mobile-friendly navigation with smooth scrolling

### UI/UX Features
- **Dark Mode Support**: Toggle between light and dark themes
- **Responsive Design**: Mobile-first approach with fluid layouts
- **Smooth Animations**: Framer Motion powered micro-interactions
- **Loading States**: Form submission feedback and loading indicators
- **Professional Design**: Clean, modern interface with gradient accents

### Technical Features
- **Next.js 14**: App Router with TypeScript
- **Tailwind CSS**: Utility-first styling with custom design system
- **Framer Motion**: Smooth animations and transitions
- **Lucide Icons**: Consistent iconography
- **Email Integration**: Nodemailer with Gmail SMTP
- **Form Handling**: React Hook Form with validation
- **Database**: MongoDB for contact form submissions

## 🛠 Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **UI Components**: Radix UI primitives
- **Theme**: next-themes for dark mode
- **Forms**: React Hook Form
- **Email**: Nodemailer
- **Database**: MongoDB
- **Notifications**: Sonner
- **TypeScript**: Full type safety

## 📋 Features Implemented

### Layout & Sections ✅
- **Navigation**: Responsive navbar with smooth scrolling
- **Hero Section**: Animated introduction with gradient text
- **About Section**: Professional background showcase
- **Projects Section**: Portfolio gallery with descriptions
- **Contact Section**: Functional contact form with validation

### Functionality ✅
- **Contact Form**: Email submission with MongoDB storage
- **Responsive Design**: Mobile-friendly across all devices
- **Form Validation**: Client-side validation with error handling
- **Email Notifications**: Automated email sending via Nodemailer

### Bonus Features ✅
- **Dark Mode**: Complete theme switching
- **Smooth Animations**: Framer Motion powered interactions
- **Toast Notifications**: User feedback for form submissions

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <https://github.com/ankit-mehta07/Portfoliol>
cd portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
```bash
cp .env.example .env.local
```

Add your environment variables:
```env
MONGODB_URI=your-mongodb-connection-string
EMAIL_USER=your-gmail@gmail.com
EMAIL_PASS=your-gmail-app-password
```

4. Run the development server:
```bash
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📁 Project Structure

```
├── app/
│   ├── api/contact/            # Contact form API endpoint
│   ├── globals.css             # Global styles
│   ├── layout.tsx              # Root layout
│   └── page.tsx               # Home page
├── components/
│   ├── hero.tsx               # Hero section component
│   ├── about.tsx              # About section component
│   ├── projects.tsx           # Projects section component
│   ├── contact.tsx            # Contact section component
│   ├── navbar.tsx             # Navigation component
│   ├── ui/                    # Reusable UI components
│   └── theme-provider.tsx     # Theme context provider
├── lib/
│   └── utils.ts              # Utility functions
└── tailwind.config.ts        # Tailwind configuration
```

## 🔌 API Endpoints

### Contact Form
- **POST** `/api/contact`
  - Accepts: `{ name, email, subject, message }`
  - Stores submission in MongoDB
  - Sends email notification via Nodemailer
  - Returns success/error response

## 🎨 Design System

### Colors
- **Primary**: Indigo/Purple gradients - Main brand colors
- **Success**: Green (#10B981) - Success states
- **Warning**: Orange (#F59E0B) - Warning states
- **Error**: Red (#EF4444) - Error states

### Components
- **Cards**: Glass morphism design with backdrop blur
- **Buttons**: Gradient backgrounds with hover effects
- **Forms**: Clean input styling with validation states
- **Animations**: Smooth transitions and micro-interactions

## 📱 Responsive Breakpoints

- **Mobile**: < 768px - Stacked layout, collapsible sidebar
- **Tablet**: 768px - 1024px - Adapted grid layouts
- **Desktop**: > 1024px - Full multi-column layout

## ⚡ Performance Optimizations

- **Code Splitting**: Automatic route-based code splitting
- **Loading States**: Skeleton UI for improved perceived performance
- **Optimized Renders**: Efficient state management
- **Static Generation**: Where applicable

## 🚀 Deployment

### Build for Production
```bash
npm run build
```

### Start Production Server
```bash
npm start
```

## 🌐 Browser Support

- Chrome 91+
- Firefox 90+
- Safari 14+
- Edge 91+

## 📸 Features

The portfolio includes:
- Animated hero section with gradient text
- Professional about section
- Project showcase with descriptions
- Functional contact form with email integration
- Dark mode support
- Mobile responsive design
- Smooth scrolling navigation
- Toast notifications for user feedback

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License.
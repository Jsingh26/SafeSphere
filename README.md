SafeSphere Website Description
SafeSphere is an innovative web-based safety navigation platform designed to empower women in Delhi by providing real-time, crowdsourced safety information. The platform aims to create a safer urban environment by enabling users to plan safer routes, report incidents, and access community-generated safety tips—all without the need for a dedicated mobile application.

Key Features:
Safe Route Mapping: Users can input their starting point and destination to receive route suggestions based on safety ratings, lighting conditions, and the presence of security features like CCTV cameras. This feature utilizes data from public sources and user contributions to ensure accurate and reliable information.

Real-Time Incident Reporting: A user-friendly web form allows individuals to report safety concerns or incidents they encounter, such as harassment or poorly lit areas. These reports are immediately reflected on the platform's map, alerting other users to potential dangers.

Crowdsourced Safety Ratings: Community members can rate and review locations based on their safety experiences, creating a dynamic map that highlights safe zones and areas to avoid. This collective vigilance fosters a community-driven approach to safety.

Safety Tips and Resources: The platform includes a dedicated section for safety tips, emergency contact numbers, and links to local support services. It also provides guidelines on how to stay safe in various scenarios, such as using public transport or walking alone at night.

Anonymous User Profiles: Users can create anonymous profiles to contribute to the community while ensuring their privacy. This feature encourages open sharing of information in a safe environment.

Data-Driven Insights: SafeSphere features data visualization tools, including heatmaps and trend analysis based on reported incidents, helping users and authorities identify safety hotspots and make informed decisions.

Community Engagement and Collaboration: The platform actively engages with women's groups, local communities, and NGOs to gather feedback and promote adoption. It also collaborates with the Delhi Police and urban planning agencies to integrate data and share resources.

Technological Framework: SafeSphere utilizes modern web technologies, including HTML, CSS, JavaScript, React, and Node.js, to create a responsive and user-friendly interface. It employs APIs for mapping services, crowdsourced data, and notifications, ensuring a seamless user experience.

Future Scope:
SafeSphere plans to conduct pilot implementations, develop robust data collection methods, and engage in community outreach programs to educate women about the platform and encourage active participation.

By fostering a culture of safety and collective vigilance, SafeSphere aims to empower women to make informed decisions about their travel routes, ultimately contributing to a more inclusive and secure urban environment in Delhi.

I'll help you integrate the shadcn/ui components into your React project. Based on the components.json file, I can see you're using TypeScript, Tailwind CSS, and the New York style variant.
Here are the steps to integrate the code:

First, ensure you have the necessary dependencies installed:

bashCopynpm install tailwindcss postcss autoprefixer
npm install @radix-ui/react-icons
npm install class-variance-authority
npm install clsx
npm install tailwind-merge

Initialize Tailwind CSS if you haven't already:

bashCopynpx tailwindcss init -p

Create or update your tailwind.config.js with the required configuration:

Create a utils.ts file in your lib directory (src/lib/utils.ts):

typescriptCopyimport { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"
 
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

Update your src/index.css (or global CSS file) with the base styles:

Install any component-specific dependencies when you add new components. For example, if you want to use the Button component:

npx shadcn-ui@latest add button

You can now import and use the components in your React components:

typescriptCopyimport { Button } from "@/components/ui/button"

export default function App() {
  return (
    <Button variant="outline">Click me</Button>
  )
}

For the Lucide icons (as specified in your components.json), install:

bashCopynpm install lucide-react
preview:

![image](https://github.com/user-attachments/assets/25c5bf09-403a-4888-8e98-5d094dd5dff1) 

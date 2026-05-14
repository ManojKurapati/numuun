### The "Namo" Premium Build Prompt

> ### 1. Brand Identity & Aesthetic
> 
> 
> * **Vibe:** Sophisticated, nurturing, trustworthy, and modern. Not "childish" with primary colors, but "premium" using a palette of soft terracottas, sage greens, and warm creams.
> * **Typography:** Use a high-end Serif for headings (like *Playfair Display*) and a clean, legible Sans-Serif for body text (*Inter* or *Geist*).
> 
> 
> ### 2. Technical Stack Requirements
> 
> 
> * **Framework:** Next.js (App Router), Tailwind CSS.
> * **Components:** Source high-end UI components from **21st.dev**. Specifically, look for:
> * A "Bento Grid" for showcasing developmental milestones.
> * A "Glassmorphism" Navigation bar.
> * A "Shiny Button" or "Magnetic Button" for the primary Call to Action (CTA).
> 
> 
> * **Animations:** Use **Framer Motion** for:
> * **Staggered Fade-ins:** Hero elements should drift upward and fade in sequentially.
> * **Smooth Scroll:** Implement a smooth scroll behavior.
> * **Micro-interactions:** Add subtle hover scales on cards and "LayoutCamera" transitions where appropriate.
> 
> 
> 
> 
> ### 3. Page Structure
> 
> 
> * **Hero Section:** A split layout with a high-resolution image of parent-child interaction and a value proposition: *"Nurturing the Architecture of the Developing Mind."*
> * **The Method:** A 3-column feature section using Framer Motion `whileInView` triggers to reveal Namo’s core pillars.
> * **Developmental Bento:** A 21st.dev-inspired bento grid that highlights different age-appropriate screening tools and modules.
> * **Trust Section:** A subtle logo marquee of partner clinics or certifications.
> 
> 
> ### 4. Execution Command
> 
> 
> * "First, analyze the project structure. Then, suggest the best 21st.dev components to install. Finally, write the code for the Home page (`page.tsx`), ensuring all Framer Motion constants are defined for 'spring' physics rather than 'linear' transitions to ensure a premium feel."
> 
> 

---

### Pro-Tips for the Build

* **Spring Physics:** When Claude starts writing the Framer Motion code, ensure it uses `type: "spring"` with `stiffness: 100` and `damping: 20`. This prevents the animations from looking "robotic" and gives them a high-end, organic bounce.
* **Asset Management:** Since this is for a childhood development company, ask Claude to use **Lucide-React** icons for things like "Growth," "Brain," and "Safety," but style them with low-opacity backgrounds to keep them subtle.
* **The 21st.dev Secret:** If you see a specific component on 21st.dev you love (like a specific "Animated Testimonial" slider), copy the URL of that component and tell Claude: *"Use the implementation logic found at [URL] for the testimonial section."*

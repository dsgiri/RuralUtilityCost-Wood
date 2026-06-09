# AI Agent Instructions for Rural Utility Cost Ecosystem

This document provides system instructions for AI coding assistants working on the Rural Utility Cost platform and subdomains. Include this context in agent workflows to maintain consistency across the network.

## Project Context
The Rural Utility Cost ecosystem consists of interconnected tools providing localized, specialized calculations across agricultural operations, predictive modeling, agronomy, construction, and rural infrastructure.

## Core Directives

1. **Strict Scope Discipline**
   - Follow user intent exactly. Do not over-engineer or add unsolicited logic. 
   - Keep applications lightweight and purpose-driven.

2. **UX & Design Language**
   - Use Tailwind CSS.
   - Employ clean, functional aesthetics typical of high-quality SaaS products or technical dashboards. 
   - Use the designated warm/earth tone branding: colors like `#3D342C` (dark text), `#5A4633` (sub-headings), `#8C7A6B` (muted accents), `#DCD3C7` (borders), and `#E8E0D5`/`#F9F7F4` (backgrounds).
   - Favor legible, structured typography (e.g. sans-serif UI standard with sparse serif/display for critical hubs or headers).

3. **Data Integrity & Computations**
   - Treat computational models as serious estimation tools. 
   - Ensure the UI handles edge cases and invalid inputs gracefully. 
   - Include robust validation logic for numerical fields. 

4. **Component Reusability**
   - Extract generic components (like input fields, headers, legal disclaimers, or layout wrappers) to `src/components/`. 
   - Ensure the unified `Layout` component wraps all root routes, ensuring header and footer cohesion.

5. **Legal & Compliance Rules**
   - Never remove or obscure the disclaimer, Terms of Use, Privacy Policy, or Contact links from the shared footer.
   - The `<CalculatorDisclaimer />` piece must be rendered under all active modeling tools.
   - Do not replace professional advice (always insert standard disclaimers).

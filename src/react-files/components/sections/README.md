# Section Components

This folder contains reusable section components for building pages with a consistent grid-based layout.

## Available Components

### 1. HeroSection
Hero section with background and centered text.

```jsx
import { HeroSection } from '../components/sections'

<HeroSection
  backgroundColor="#001837"
  title="Welcome to Vega Federal"
  subtitle="Automate Your Mission"
  height="60vh"
/>
```

**Props:**
- `backgroundImage` (string, optional) - URL for background image
- `backgroundColor` (string, default: '#001837') - Background color
- `title` (string) - Main heading
- `subtitle` (string) - Subtitle text
- `height` (string, default: '60vh') - Section height
- `className` (string, optional) - Additional CSS classes

### 2. TwoColumnSection
Image and text side-by-side section.

```jsx
import { TwoColumnSection } from '../components/sections'

<TwoColumnSection
  image={imageSrc}
  imageAlt="Description"
  imageFirst={true}
  content={<div>Your content here</div>}
  bgColor="bg-white"
/>
```

**Props:**
- `image` (string) - Image source URL
- `imageAlt` (string) - Alt text for image
- `imageFirst` (boolean, default: true) - Whether image comes first
- `content` (ReactNode) - Content to display
- `bgColor` (string, default: 'bg-white') - Background color class
- `className` (string, optional) - Additional CSS classes

### 3. BannerSection
Full-width banner for section headers.

```jsx
import { BannerSection } from '../components/sections'

<BannerSection
  title="Core Capabilities"
  bgColor="bg-primary"
  textColor="text-white"
/>
```

**Props:**
- `title` (string) - Banner title
- `bgColor` (string, default: 'bg-primary') - Background color class
- `textColor` (string, default: 'text-white') - Text color class
- `className` (string, optional) - Additional CSS classes

### 4. GridCardSection
Responsive grid of cards.

```jsx
import { GridCardSection } from '../components/sections'

<GridCardSection
  cards={[<Card1 />, <Card2 />, <Card3 />, <Card4 />]}
  columns={{ mobile: 1, tablet: 2, desktop: 4 }}
  bgColor="bg-white"
/>
```

**Props:**
- `cards` (Array<ReactNode>) - Array of card components
- `columns` (Object, default: { mobile: 1, tablet: 2, desktop: 4 }) - Column configuration
- `bgColor` (string, default: 'bg-white') - Background color class
- `className` (string, optional) - Additional CSS classes

### 5. CenteredContentSection
Full-width centered content section.

```jsx
import { CenteredContentSection } from '../components/sections'

<CenteredContentSection
  content={<div>Your centered content</div>}
  bgColor="bg-white"
  maxWidth="default"
/>
```

**Props:**
- `content` (ReactNode) - Content to display
- `bgColor` (string, default: 'bg-white') - Background color class
- `maxWidth` (string, default: 'default') - 'default', 'narrow', or 'wide'
- `className` (string, optional) - Additional CSS classes

## Shared Utilities

All sections use shared utility classes defined in `shared/utilities.css` (imported globally in `index.css`):

### Background Color Classes

- `bg-white` - White background (#ffffff)
- `bg-primary` - Primary color (#001837)
- `bg-secondary` - Secondary color (#DD004A)
- `bg-gray` - Gray background (#F2F2F7)

### Text Color Classes

- `text-white` - White text
- `text-primary` - Primary color text (#001837)
- `text-secondary` - Secondary color text (#DD004A)

### Container Class

- `.page-container` - Responsive container with consistent padding across all sections

**Note:** Font sizes are handled globally by `typography.css`. All h1-h6 and p elements automatically use responsive font sizes.

## Creating a New Page

1. Create a new file in `routes/` folder
2. Import the sections you need
3. Compose your page using the section components
4. Customize styling via props and `className`

See `ExamplePage.jsx` for a complete example.


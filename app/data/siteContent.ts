export type DetailedService = {
  title: string
  summary: string
  bullets: string[]
}

export type CaseStudy = {
  name: string
  category: string
  platforms: string[]
  result: string
}

export type Testimonial = {
  quote: string
  author: string
  business: string
}

export type Stat = {
  value: string
  label: string
}

export const stats: Stat[] = [
  { value: '12–15', label: 'Posts published per month' },
  { value: '1', label: 'On-site content visit included' },
  { value: '24h', label: 'Average response time' },
  { value: '100%', label: 'Tailored to your brand' },
]

export const testimonials: Testimonial[] = [
  {
    quote: 'Bethany completely transformed how we show up on social. The enquiries speak for themselves.',
    author: 'James',
    business: 'Home Creations',
  },
  {
    quote: 'Professional, creative and incredibly easy to work with. I finally feel like our brand looks the part online.',
    author: 'Sophie',
    business: 'Coastal Interiors',
  },
  {
    quote: 'I handed over my Instagram with no idea what to expect and came back to a feed I was actually proud of.',
    author: 'Maria',
    business: 'The Bloom Room',
  },
]

export const packageInclusions = [
  '12–15 posts per month',
  'Content creation and editing',
  'Strategy and planning',
  'Community management',
  'Monthly performance reports',
  '1 on-site content visit per month',
]

export const addOnOptions = [
  'Paid advertising',
  'Additional content visits',
  'Additional posts',
  'Websites, SEO & app support',
]

export const detailedServices: DetailedService[] = [
  {
    title: 'Content Creation & Publishing',
    summary: 'Consistent, thoughtful content that reflects your brand and gives people a reason to stop scrolling.',
    bullets: [
      '3 posts per week planned around your goals',
      'A mix of photo content, video, reels and branded graphics',
      'Editing, formatting and publishing handled for you',
      'Before and after content where it helps show the value of your work',
      'Seasonal campaigns and timely content ideas',
      'Instagram Highlights refreshed and organised',
    ],
  },
  {
    title: 'On-Site Content Capture',
    summary: 'Monthly visits to capture the kind of footage and photography that feels natural, polished and useful.',
    bullets: [
      '1 on-site content visit each month',
      'Filming and photography captured with social in mind',
      'Ideal for behind-the-scenes content, process shots and finished work',
      'Travel included within a 15-mile radius',
    ],
  },
  {
    title: 'Strategy & Planning',
    summary: 'Clear planning that keeps your content consistent and connected to what your business actually needs.',
    bullets: [
      'Initial social media strategy shaped around your audience',
      'Ongoing refinement as we learn what performs best',
      'Monthly content planning and scheduling',
      'Competitor analysis and market positioning',
      'Trend research to keep content relevant without feeling forced',
      'Hashtag research and scheduling support',
    ],
  },
  {
    title: 'Copywriting & Optimisation',
    summary: 'Captions and profile improvements that sound like your brand and encourage real enquiries.',
    bullets: [
      'Conversion-focused captions with clear calls to action',
      'Tone of voice aligned with your brand',
      'Bio optimisation for clarity and credibility',
      'Hashtag sets built around your service and audience',
    ],
  },
  {
    title: 'Community Management',
    summary: 'A more active social presence that feels warm, responsive and connected to your customers.',
    bullets: [
      'Comment management and inbox support',
      'Audience engagement across relevant accounts',
      'UGC spotting and interaction opportunities',
      'Relationship building with your online community',
    ],
  },
  {
    title: 'Performance Monitoring',
    summary: 'Monthly reporting that keeps us focused on what is working and where we can improve.',
    bullets: [
      'Analytics tracking across your chosen platforms',
      'Monthly review of reach, engagement and enquiries',
      'Data-led adjustments based on performance',
    ],
  },
]

export const caseStudies: CaseStudy[] = [
  {
    name: 'Home Creations',
    category: 'Bathroom and outdoor renovation',
    platforms: ['Instagram'],
    result: '42% increase in profile visits',
  },
  {
    name: 'Local Bakery Co.',
    category: 'Food and lifestyle',
    platforms: ['Instagram', 'Facebook'],
    result: '3x enquiry rate in 90 days',
  },
  {
    name: 'Coastal Interiors',
    category: 'Interior design',
    platforms: ['Instagram'],
    result: 'Grew from 400 to 2,800 followers',
  },
  {
    name: 'FitLife Studio',
    category: 'Fitness and wellness',
    platforms: ['Instagram', 'TikTok'],
    result: 'Average 8% engagement rate',
  },
  {
    name: 'Oak & Stone Kitchens',
    category: 'Luxury kitchens',
    platforms: ['Instagram'],
    result: 'Featured in regional press',
  },
  {
    name: 'The Bloom Room',
    category: 'Florist and events',
    platforms: ['Instagram'],
    result: 'Consistent 5-star review growth',
  },
]

export const aboutValues = [
  {
    title: 'Authenticity first',
    description: 'Content should feel like your brand in real life, not a version of it that only exists online.',
  },
  {
    title: 'Results over vanity',
    description: 'I care about the metrics that support enquiries, loyalty and steady growth.',
  },
  {
    title: 'Partnership, not transactions',
    description: 'The best work happens when we know each other well and build momentum together.',
  },
]

export const platformTags = ['Instagram', 'Facebook', 'TikTok', 'LinkedIn', 'Pinterest']

export const contactServiceOptions = [
  'Content Creation',
  'Strategy & Planning',
  'Community Management',
  'Paid Advertising',
  'Website / SEO / App support',
  'Full Package',
]

export const budgetOptions = ['Under £500', '£500–£1,000', '£1,000–£2,000', '£2,000+']

export const discoveryOptions = ['Social media', 'Referral', 'Google search', 'Other']

export const proposalServiceOptions = detailedServices.map((service) => service.title)

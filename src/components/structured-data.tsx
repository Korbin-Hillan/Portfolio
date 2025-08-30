'use client';

interface StructuredDataProps {
  type: 'person' | 'website' | 'project';
  data?: any;
}

export default function StructuredData({ type, data }: StructuredDataProps) {
  const getStructuredData = () => {
    switch (type) {
      case 'person':
        return {
          '@context': 'https://schema.org',
          '@type': 'Person',
          name: 'Korbin Hillan',
          jobTitle: 'Software Engineer',
          description: 'Full-Stack Software Engineering student at Arizona State University specializing in React, Next.js, and modern web technologies.',
          url: 'https://korbinhillan.com',
          image: 'https://korbinhillan.com/images/Lake_Isabella.jpeg',
          sameAs: [
            'https://github.com/Korbin-Hillan',
            'https://linkedin.com/in/korbinhillan'
          ],
          worksFor: {
            '@type': 'EducationalOrganization',
            name: 'Arizona State University'
          },
          alumniOf: {
            '@type': 'EducationalOrganization',
            name: 'Arizona State University'
          },
          knowsAbout: [
            'JavaScript',
            'TypeScript',
            'React',
            'Next.js',
            'Node.js',
            'PostgreSQL',
            'MongoDB',
            'Java',
            'Python',
            'Software Engineering'
          ]
        };

      case 'website':
        return {
          '@context': 'https://schema.org',
          '@type': 'Website',
          name: 'Korbin Hillan Portfolio',
          url: 'https://korbinhillan.com',
          description: 'Full-Stack Software Engineering student at Arizona State University specializing in React, Next.js, and modern web technologies.',
          author: {
            '@type': 'Person',
            name: 'Korbin Hillan'
          },
          inLanguage: 'en-US'
        };

      case 'project':
        return {
          '@context': 'https://schema.org',
          '@type': 'SoftwareApplication',
          name: data?.title || '',
          description: data?.description || '',
          url: data?.live || data?.repo || '',
          author: {
            '@type': 'Person',
            name: 'Korbin Hillan'
          },
          applicationCategory: 'WebApplication',
          operatingSystem: 'Web Browser',
          programmingLanguage: data?.technologies?.map((tech: any) => tech.name) || []
        };

      default:
        return {};
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(getStructuredData()) }}
    />
  );
}
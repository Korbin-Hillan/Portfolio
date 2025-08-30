import { projects, getProjectBySlug } from '../../src/data/projects';

describe('Projects Data', () => {
  describe('projects array', () => {
    it('contains expected number of projects', () => {
      expect(projects).toHaveLength(3);
    });

    it('has projects with required fields', () => {
      projects.forEach(project => {
        expect(project).toHaveProperty('title');
        expect(project).toHaveProperty('slug');
        expect(project).toHaveProperty('description');
        expect(project).toHaveProperty('technologies');
        expect(project).toHaveProperty('repo');
        expect(project).toHaveProperty('status');
        expect(project).toHaveProperty('category');
      });
    });

    it('has valid technologies array for each project', () => {
      projects.forEach(project => {
        expect(Array.isArray(project.technologies)).toBe(true);
        expect(project.technologies.length).toBeGreaterThan(0);
        
        project.technologies.forEach(tech => {
          expect(tech).toHaveProperty('name');
          expect(tech).toHaveProperty('icon');
          expect(tech).toHaveProperty('color');
        });
      });
    });

    it('has unique slugs for all projects', () => {
      const slugs = projects.map(project => project.slug);
      const uniqueSlugs = new Set(slugs);
      expect(uniqueSlugs.size).toBe(slugs.length);
    });
  });

  describe('getProjectBySlug', () => {
    it('returns correct project for valid slug', () => {
      const project = getProjectBySlug('linktree');
      expect(project).toBeDefined();
      expect(project?.title).toBe('LinkTree Clone');
      expect(project?.slug).toBe('linktree');
    });

    it('returns undefined for invalid slug', () => {
      const project = getProjectBySlug('non-existent-slug');
      expect(project).toBeUndefined();
    });

    it('returns projects for all valid slugs', () => {
      const validSlugs = ['linktree', 'expense-tracker', 'portfolio'];
      
      validSlugs.forEach(slug => {
        const project = getProjectBySlug(slug);
        expect(project).toBeDefined();
        expect(project?.slug).toBe(slug);
      });
    });
  });
});
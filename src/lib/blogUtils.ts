import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  author: string;
  date: string;
  category: string;
  excerpt: string;
  content: string;
}

const blogDir = path.join(process.cwd(), 'src/content/blog');

export function getAllBlogPosts(): BlogPost[] {
  const files = fs.readdirSync(blogDir).filter(file => file.endsWith('.md'));
  
  return files
    .map(file => {
      const filePath = path.join(blogDir, file);
      const fileContent = fs.readFileSync(filePath, 'utf-8');
      const { data, content } = matter(fileContent);
      
      return {
        id: data.id,
        title: data.title,
        slug: data.slug,
        author: data.author,
        date: data.date,
        category: data.category,
        excerpt: data.excerpt,
        content: content
      };
    })
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export function getBlogPostBySlug(slug: string): BlogPost | null {
  try {
    const filePath = path.join(blogDir, `*.md`);
    const files = fs.readdirSync(blogDir).filter(file => file.endsWith('.md'));
    
    for (const file of files) {
      const fullPath = path.join(blogDir, file);
      const fileContent = fs.readFileSync(fullPath, 'utf-8');
      const { data, content } = matter(fileContent);
      
      if (data.slug === slug) {
        return {
          id: data.id,
          title: data.title,
          slug: data.slug,
          author: data.author,
          date: data.date,
          category: data.category,
          excerpt: data.excerpt,
          content: content
        };
      }
    }
    return null;
  } catch {
    return null;
  }
}

export function getBlogPostsByCategory(category: string): BlogPost[] {
  return getAllBlogPosts().filter(post => post.category === category);
}

import portfolioMd from './portfolio-sites.md?raw';

export interface PortfolioSite {
  priority: number;
  name: string;
  url: string;
  repo: string;
  description: string;
  category: string;
  status: string;
}

export interface PortfolioCategoryGroup {
  title: string;
  sites: PortfolioSite[];
}

export function parsePortfolioMarkdown(): PortfolioSite[] {
  const lines = portfolioMd.split('\n');
  const sites: PortfolioSite[] = [];
  
  // Find the start of the table
  let inTable = false;
  
  for (const line of lines) {
    if (line.trim().startsWith('| Priority |')) {
      inTable = true;
      continue;
    }
    
    if (inTable && line.trim().startsWith('|----------|')) {
      continue;
    }
    
    if (inTable && line.trim().startsWith('|')) {
      // Parse table row
      const cells = line.split('|').map(cell => cell.trim()).filter(Boolean);
      if (cells.length >= 7) {
        sites.push({
          priority: parseInt(cells[0], 10),
          name: cells[1],
          url: cells[2],
          repo: cells[3],
          description: cells[4],
          category: cells[5],
          status: cells[6],
        });
      }
    } else if (inTable && line.trim() === '') {
      inTable = false; // End of table
    }
  }

  // Sort by priority by default
  return sites.sort((a, b) => a.priority - b.priority);
}

export function getGroupedPortfolio(): PortfolioCategoryGroup[] {
  const sites = parsePortfolioMarkdown().filter(s => s.status.toLowerCase() !== 'retired');
  const grouped = new Map<string, PortfolioSite[]>();
  
  // Maintain a stable order of categories if possible, or build ordered
  const categoryOrder = [
    "Core Platform & Planning",
    "Specialty & Utility Hubs",
    "Forecasting & Scenario Tools",
    "Agriculture & Agronomy",
    "Livestock & Animal Systems",
    "Infrastructure, Logistics & Operations"
  ];
  
  for (const site of sites) {
    const p = grouped.get(site.category) || [];
    p.push(site);
    grouped.set(site.category, p);
  }
  
  const result: PortfolioCategoryGroup[] = [];
  
  // Add in known order
  for (const cat of categoryOrder) {
    if (grouped.has(cat)) {
      result.push({ title: cat, sites: grouped.get(cat)! });
      grouped.delete(cat);
    }
  }
  
  // Add any remaining
  for (const [cat, catSites] of grouped.entries()) {
    result.push({ title: cat, sites: catSites });
  }

  return result;
}

import { TOOLS } from '../data/tools';
import { ToolCard } from '../components/ToolCard';
import { useFavorites } from '../hooks/use-favorites';
import { HeartCrack } from 'lucide-react';
import { Link } from 'react-router-dom';

export function Favorites() {
  const { favorites } = useFavorites();
  
  const favoriteTools = TOOLS.filter(t => favorites.includes(t.id));

  return (
    <div className="space-y-8 px-6 md:px-8 py-8 flex-1">
      <div className="border-b border-[#DCD3C7] pb-4">
        <h1 className="text-3xl font-extrabold text-[#42372E] tracking-tight font-serif italic">Saved Estimators</h1>
        <p className="text-[#8C7A6B] mt-2">Tools you have explicitly pinned to your local registry node.</p>
      </div>

      {favoriteTools.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {favoriteTools.map(tool => (
            <ToolCard key={tool.id} tool={tool} />
          ))}
        </div>
      ) : (
        <div className="bg-white border text-center border-[#DCD3C7] border-dashed rounded-sm p-16 flex flex-col items-center justify-center">
           <HeartCrack className="w-12 h-12 text-[#DCD3C7] mb-4" />
           <h2 className="text-xl font-bold text-[#42372E] mb-2">No tools in vault</h2>
           <p className="text-[#8C7A6B] mb-6 max-w-sm">
             You have not added any estimation modules to your persistent favorites list.
           </p>
           <Link to="/" className="bg-[#5A4633] text-white px-6 py-2 shadow-sm transition hover:bg-opacity-90 rounded-sm font-bold text-sm">
             Browse Active Registry
           </Link>
        </div>
      )}
    </div>
  );
}

import { Link } from 'react-router-dom';
import { Heart } from 'lucide-react';
import { Tool } from '../types';
import { cn } from '../lib/utils';
import { useFavorites } from '../hooks/use-favorites';

interface ToolCardProps {
  tool: Tool;
}

export function ToolCard({ tool }: ToolCardProps) {
  const { isFavorite, toggleFavorite } = useFavorites();
  const isFav = isFavorite(tool.id);

  let categoryColors = "text-[#8C7A6B] bg-[#F9F7F4]";
  let outcomeColors = "text-[#5A4633]";

  if (tool.category.toLowerCase().includes('log')) {
    categoryColors = "text-[#2C5282] bg-blue-50";
    outcomeColors = "text-[#2C5282]";
  } else if (tool.category.toLowerCase().includes('kiln') || tool.category.toLowerCase().includes('dry') || tool.category.toLowerCase().includes('shrinkage')) {
    categoryColors = "text-[#4A7C59] bg-green-50";
    outcomeColors = "text-[#4A7C59]";
  }

  const handleFavoriteClick = (e: React.MouseEvent) => {
    e.preventDefault();
    toggleFavorite(tool.id);
  };

  return (
    <div className="bg-white border border-[#DCD3C7] rounded-xl p-4 sm:p-5 flex flex-col justify-between hover:shadow-md transition-shadow relative group h-full focus-within:ring-2 focus-within:ring-[#5A4633] focus-within:border-transparent">
      <button
        onClick={handleFavoriteClick}
        className={cn(
          "absolute top-2 right-2 p-3 sm:p-2 sm:top-3 sm:right-3 transition-colors rounded-full z-10 focus:outline-none focus:ring-2 focus:ring-[#5A4633] min-h-[44px] min-w-[44px] flex items-center justify-center",
          isFav ? "text-red-500 bg-red-50 hover:bg-red-100" : "text-[#DCD3C7] hover:text-red-400 hover:bg-stone-50"
        )}
        aria-label={isFav ? `Remove ${tool.title} from favorites` : `Add ${tool.title} to favorites`}
        aria-pressed={isFav}
      >
        <Heart className={cn("w-6 h-6 sm:w-5 sm:h-5", isFav && "fill-current")} />
      </button>
      <div className="pr-12 sm:pr-8">
        <span className={cn("inline-block text-[10px] font-bold uppercase tracking-tighter px-2.5 py-1 rounded", categoryColors)}>
          {tool.category}
        </span>
        <h3 className="text-lg sm:text-base font-bold text-[#42372E] mt-3 leading-tight">
          <Link to={tool.path} className="focus:outline-none before:absolute before:inset-0 before:z-0">
            {tool.title}
          </Link>
        </h3>
        <p className="text-sm sm:text-xs text-[#8C7A6B] mt-2 leading-relaxed">
          {tool.description}
        </p>
      </div>
      <div className="mt-5 sm:mt-4 flex flex-wrap items-end justify-between border-t border-stone-100 pt-4 sm:pt-3 gap-3 relative z-10">
        <div className={outcomeColors}>
          <span className="text-[10px] uppercase block leading-none mb-1.5 sm:mb-1 opacity-80 font-bold">Outcome</span>
          <span className="text-lg sm:text-base font-mono font-bold leading-none block">{tool.primaryOutcome}</span>
        </div>
        <Link
          to={tool.path}
          className="bg-[#5A4633] text-white px-5 py-3 sm:px-4 sm:py-2 rounded text-sm sm:text-xs font-bold hover:bg-[#42372E] transition-colors whitespace-nowrap ml-auto focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#5A4633] active:bg-[#3D342C] min-h-[44px] sm:min-h-auto flex items-center shadow-sm"
          aria-label={`Open ${tool.title}`}
          tabIndex={-1}
        >
          Open Tool
        </Link>
      </div>
    </div>
  );
}

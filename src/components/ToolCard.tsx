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

  return (
    <div className="bg-white border border-[#DCD3C7] rounded-xl p-4 flex flex-col justify-between hover:shadow-md transition-shadow relative group h-full">
      <button
        onClick={() => toggleFavorite(tool.id)}
        className={cn(
          "absolute top-3 right-3 transition-colors",
          isFav ? "text-red-500" : "text-[#DCD3C7] hover:text-red-400"
        )}
        aria-label={isFav ? "Remove from favorites" : "Add to favorites"}
      >
        <Heart className={cn("w-5 h-5", isFav && "fill-current")} />
      </button>
      <div>
        <span className={cn("text-[9px] font-bold uppercase tracking-tighter px-2 py-0.5 rounded", categoryColors)}>
          {tool.category}
        </span>
        <h3 className="font-bold text-[#42372E] mt-2 leading-tight">
          {tool.title}
        </h3>
        <p className="text-xs text-[#8C7A6B] mt-1 leading-relaxed">
          {tool.description}
        </p>
      </div>
      <div className="mt-4 flex flex-wrap items-end justify-between border-t border-stone-50 pt-3 gap-2">
        <div className={outcomeColors}>
          <span className="text-[10px] uppercase block leading-none mb-1 opacity-80 font-bold">Outcome</span>
          <span className="text-base font-mono font-bold leading-none block">{tool.primaryOutcome}</span>
        </div>
        <Link
          to={tool.path}
          className="bg-[#5A4633] text-white px-4 py-2 rounded text-xs font-bold hover:bg-[#42372E] transition-colors whitespace-nowrap ml-auto"
          aria-label={`Open ${tool.title}`}
        >
          Open Tool
        </Link>
      </div>
    </div>
  );
}

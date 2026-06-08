export function AdSensePlaceholder({
  slot,
  format = 'auto',
  className = '',
}: {
  slot: string;
  format?: 'auto' | 'fluid' | 'rectangle';
  className?: string;
}) {
  return (
    <div
      className={`bg-[#f5f5f5] border border-[#ddd] flex justify-center items-center my-5 min-h-[250px] w-full text-sm text-[#8C7A6B] text-center p-4 ${className}`}
      data-ad-status="unfilled"
      aria-label="Advertisement"
    >
      <div className="flex flex-col items-center gap-2">
        <span className="uppercase tracking-widest text-[10px] font-bold opacity-60">Advertisement</span>
        <div className="hidden">
          {/* Actual AdSense code would be injected here */}
          <ins className="adsbygoogle"
               style={{ display: 'block' }}
               data-ad-client="ca-PUB-YOUR_CLIENT_ID"
               data-ad-slot={slot}
               data-ad-format={format}
               data-full-width-responsive="true"></ins>
        </div>
      </div>
    </div>
  );
}

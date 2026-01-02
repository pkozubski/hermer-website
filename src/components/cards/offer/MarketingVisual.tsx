import React from "react";

export const MarketingVisual = () => (
  <div className="relative h-full w-full">
    <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800" />
    <div className="absolute -top-12 left-0 h-56 w-56 rounded-full bg-fuchsia-500/25 blur-[130px] animate-float-slower" />
    <div className="absolute -bottom-14 right-0 h-56 w-56 rounded-full bg-orange-400/25 blur-[130px] animate-float-slow" />
    <div className="absolute inset-0 bg-[url('/images/noise.png')] opacity-[0.25] mix-blend-soft-light" />

    <div className="relative h-full p-5 lg:p-6 grid grid-cols-1 lg:grid-cols-[0.6fr_0.4fr] gap-6 text-white">
      <div className="rounded-2xl bg-white/5 border border-white/10 p-4 backdrop-blur-sm">
        <div className="flex items-center justify-between">
          <span className="text-[10px] uppercase tracking-widest text-white/60">
            Kampanie
          </span>
          <span className="text-[10px] text-emerald-300 flex items-center gap-2">
            Live
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
          </span>
        </div>
        <div className="mt-4 grid grid-cols-3 gap-3">
          {[
            { label: "ROAS", value: "4.2x" },
            { label: "CTR", value: "3.8%" },
            { label: "Lead", value: "1.9k" },
          ].map((item) => (
            <div
              key={item.label}
              className="rounded-xl bg-white/10 border border-white/10 p-3"
            >
              <div className="text-[10px] text-white/60 uppercase">
                {item.label}
              </div>
              <div className="text-lg font-semibold mt-1">{item.value}</div>
            </div>
          ))}
        </div>
        <div className="mt-4 h-24 rounded-xl bg-white/5 p-3">
          <div className="flex items-end gap-2 h-full">
            {[35, 60, 45, 80, 55, 90, 70].map((height, index) => (
              <div
                key={index}
                className="w-full rounded-full bg-white/20"
                style={{ height: `${height}%` }}
              />
            ))}
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-4">
        <div className="rounded-2xl bg-white/10 border border-white/10 p-4">
          <div className="text-[10px] uppercase tracking-widest text-white/60">
            Kreacje
          </div>
          <div className="mt-3 space-y-2">
            {[
              { name: "Video Ads", stat: "CTR 3.1%" },
              { name: "Social Proof", stat: "CTR 2.6%" },
              { name: "Brand Story", stat: "CTR 2.2%" },
            ].map((item) => (
              <div
                key={item.name}
                className="flex items-center justify-between rounded-lg bg-white/5 px-3 py-2 text-[11px]"
              >
                <span>{item.name}</span>
                <span className="text-emerald-300 font-semibold">
                  {item.stat}
                </span>
              </div>
            ))}
          </div>
        </div>
        <div className="rounded-2xl bg-white/10 border border-white/10 p-4">
          <div className="text-[10px] uppercase tracking-widest text-white/60 mb-3">
            Kanały
          </div>
          <div className="flex flex-wrap gap-2">
            {["Meta", "Google", "TikTok", "LinkedIn"].map((channel) => (
              <span
                key={channel}
                className="px-3 py-1 rounded-full bg-white/10 text-[10px] uppercase tracking-widest"
              >
                {channel}
              </span>
            ))}
          </div>
          <div className="mt-4 text-xs text-white/70">
            Sekwencje, automatyzacje i retargeting w jednym ekosystemie.
          </div>
        </div>
      </div>
    </div>
  </div>
);

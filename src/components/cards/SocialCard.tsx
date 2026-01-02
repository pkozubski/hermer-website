import React from "react";
import { Heart, MessageCircle, User, Share2 } from "lucide-react";
import { CardFrame } from "./ui/CardFrame";

export const SocialCard: React.FC = () => {
  return (
    <CardFrame title="Social Media" type="phone">
      <div className="flex flex-col h-full bg-white relative">
        {/* Feed List */}
        <div className="flex-1 overflow-hidden space-y-3 p-3">
          {/* Post 1 */}
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 rounded-full bg-gradient-to-tr from-[#916AFF] to-indigo-400 flex items-center justify-center text-white shadow-sm">
                <User size={12} />
              </div>
              <div className="h-2 w-20 bg-slate-100 rounded-sm"></div>
              <div className="ml-auto text-[8px] text-[#916AFF] font-medium">
                Teraz
              </div>
            </div>
            {/* Content */}
            <div className="w-full h-24 bg-slate-50 rounded-lg flex items-center justify-center relative group cursor-default overflow-hidden">
              <div className="absolute inset-0 bg-[#916AFF]/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <Heart
                size={28}
                className="text-white fill-[#916AFF] opacity-0 group-hover:scale-110 group-hover:opacity-100 transition-all duration-300 drop-shadow-[0_4px_6px_rgba(145,106,255,0.4)]"
              />
            </div>
            {/* Actions */}
            <div className="flex gap-3 text-slate-300">
              <Heart
                size={14}
                className="hover:text-[#916AFF] hover:fill-[#916AFF] transition-colors cursor-pointer text-[#916AFF]"
              />
              <MessageCircle
                size={14}
                className="hover:text-slate-600 transition-colors cursor-pointer"
              />
              <Share2
                size={14}
                className="hover:text-slate-600 transition-colors cursor-pointer ml-auto"
              />
            </div>
          </div>

          {/* Post 2 */}
          <div className="flex flex-col gap-2 opacity-40 grayscale">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 rounded-full bg-slate-200"></div>
              <div className="h-2 w-16 bg-slate-100 rounded-sm"></div>
            </div>
            {/* Content */}
            <div className="w-full h-16 bg-slate-50 rounded-lg"></div>
          </div>
        </div>
      </div>
    </CardFrame>
  );
};

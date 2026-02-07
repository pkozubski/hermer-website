import React from "react";
import { Code2 } from "lucide-react";
import svgPaths from "../../imports/svg-jsem1yknox";

function CodeLines() {
  return (
    <div className="absolute contents left-0 top-0">
      <div className="absolute bg-[#262626] h-[450px] left-0 rounded-[32px] top-0 w-[529px]">
        <div
          aria-hidden="true"
          className="absolute border-5 border-[rgba(255,255,255,0.03)] border-solid inset-[-5px] pointer-events-none rounded-[37px] shadow-[0px_0px_48px_10px_rgba(0,0,0,0.2),0px_4px_16px_8px_rgba(0,0,0,0.1)]"
        />
      </div>
      {/* Code syntax highlighting bars */}
      <div className="absolute bg-linear-to-r from-[#9b87f5] h-[12px] left-[55px] rounded-[100px] to-[rgba(155,155,155,0)] top-[98px] w-[70px]" />
      <div className="absolute bg-linear-to-r from-[#9b87f5] h-[12px] left-[189px] rounded-[100px] to-[rgba(155,155,155,0)] top-[98px] w-[37px]" />
      <div className="absolute bg-linear-to-r from-[#ffbd2e] h-[12px] left-[134px] rounded-[100px] to-[rgba(155,155,155,0)] top-[98px] w-[44px]" />
      <div className="absolute bg-linear-to-r from-[#ffbd2e] h-[12px] left-[268px] rounded-[100px] to-[rgba(155,155,155,0)] top-[155px] w-[44px]" />
      <div className="absolute bg-linear-to-r from-[#ce9178] h-[12px] left-[237px] rounded-[100px] to-[rgba(155,155,155,0)] top-[98px] w-[44px]" />
      <div className="absolute bg-linear-to-r from-[#0a75c2] h-[12px] left-[92px] rounded-[100px] to-[rgba(155,155,155,0)] top-[185px] w-[264px]" />
      <div className="absolute bg-linear-to-r from-[#4ec9b0] h-[12px] left-[140px] rounded-[100px] to-[rgba(155,155,155,0)] top-[212px] w-[121px]" />
      <div className="absolute bg-linear-to-r from-[#0a75c2] h-[12px] left-[92px] rounded-[100px] to-[rgba(155,155,155,0)] top-[239px] w-[48px]" />
      <div className="absolute bg-linear-to-r from-[#a855f7] h-[12px] left-[52px] rounded-[100px] to-[rgba(155,155,155,0)] top-[269px] w-[65px]" />
      <div className="absolute bg-linear-to-r from-[#9b87f5] h-[12px] left-[55px] rounded-[100px] to-[rgba(155,155,155,0)] top-[155px] w-[206px]" />
    </div>
  );
}
function CodeGroup() {
  return (
    <div className="absolute contents left-0 top-0">
      <CodeLines />
    </div>
  );
}
function TabText() {
  return (
    <div
      className="absolute h-[20px] left-0 top-0 w-[17.5px]"
      data-name="Text"
    />
  );
}
function TabText1() {
  return (
    <div
      className="absolute h-[20px] left-[25.5px] top-0 w-[48.703px]"
      data-name="Text"
    />
  );
}
function TabIcon() {
  return (
    <div
      className="absolute left-[82.2px] size-[14px] top-[3px]"
      data-name="Icon"
    />
  );
}
function ActiveTabContent() {
  return (
    <div className="absolute h-[20px] left-[28px] top-[6.5px] w-[96.203px]">
      <TabText />
      <TabText1 />
      <TabIcon />
    </div>
  );
}
function InactiveTabs() {
  return (
    <div className="absolute font-['Inter:Regular',sans-serif] font-normal h-[20px] leading-[20px] left-[156px] not-italic text-[14px] top-[7.5px] tracking-[-0.1504px] w-[68.5px]">
      <p className="absolute left-[25.5px] text-[#969696] top-0">utils.ts</p>
      <p className="absolute left-0 text-[#519aba] top-0">TS</p>
    </div>
  );
}
function EditorWindow() {
  return (
    <div className="absolute h-[35.5px] left-px top-[55px] w-[528px]">
      {/* Active Tab Text */}
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-[27px] not-italic text-[#e8d180] text-[14px] top-[6px] tracking-[-0.1504px]">
        TS
      </p>
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-[53.5px] not-italic text-[14px] text-white top-[7px] tracking-[-0.1504px]">
        App.tsx
      </p>

      {/* Tab Dividers/Borders */}
      <div
        className="absolute inset-[36.62%_77.14%_43.66%_21.53%]"
        data-name="Vector"
      >
        <div className="absolute inset-[-8.33%]">
          <svg
            className="block size-full"
            fill="none"
            preserveAspectRatio="none"
            viewBox="0 0 8.16667 8.16667"
          >
            <path
              d={svgPaths.p755a300 || "M0 0"}
              id="Vector"
              stroke="var(--stroke-0, #858585)"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.16667"
            />
          </svg>
        </div>
      </div>
      <div
        className="absolute inset-[36.62%_77.14%_43.66%_21.53%]"
        data-name="Vector"
      >
        <div className="absolute inset-[-8.33%]">
          <svg
            className="block size-full"
            fill="none"
            preserveAspectRatio="none"
            viewBox="0 0 8.16667 8.16667"
          >
            <path
              d={svgPaths.p4618fa0 || "M0 0"}
              id="Vector"
              stroke="var(--stroke-0, #858585)"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.16667"
            />
          </svg>
        </div>
      </div>

      {/* Tab Separator */}
      <div
        className="absolute flex h-[35px] items-center justify-center left-[138px] top-[0.5px] w-0"
        style={
          {
            "--transform-inner-width": "1200",
            "--transform-inner-height": "22.21875",
          } as React.CSSProperties
        }
      >
        <div className="flex-none rotate-90">
          <div className="h-0 relative w-[35px]">
            <div className="absolute inset-[-1px_0_0_0]">
              <svg
                className="block size-full"
                fill="none"
                preserveAspectRatio="none"
                viewBox="0 0 35 1"
              >
                <line
                  id="Line 2"
                  stroke="var(--stroke-0, #333333)"
                  x2="35"
                  y1="0.5"
                  y2="0.5"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* Horizontal Line Blue */}
      <div className="absolute h-0 left-0 top-0 w-[139px]">
        <div className="absolute inset-[-0.5px_0]">
          <svg
            className="block size-full"
            fill="none"
            preserveAspectRatio="none"
            viewBox="0 0 139 1"
          >
            <path
              d="M0 0.5H139"
              id="Line 5"
              stroke="var(--stroke-0, #0A75C2)"
            />
          </svg>
        </div>
      </div>

      <ActiveTabContent />
      <InactiveTabs />

      {/* Horizontal Lines Gray */}
      <div className="absolute h-0 left-0 top-[35.5px] w-[528px]">
        <div className="absolute inset-[-1px_0_0_0]">
          <svg
            className="block size-full"
            fill="none"
            preserveAspectRatio="none"
            viewBox="0 0 528 1"
          >
            <line
              id="Line 1"
              stroke="var(--stroke-0, #333333)"
              x2="528"
              y1="0.5"
              y2="0.5"
            />
          </svg>
        </div>
      </div>
      <div className="absolute h-0 left-0 top-[0.5px] w-[528px]">
        <div className="absolute inset-[-1px_0_0_0]">
          <svg
            className="block size-full"
            fill="none"
            preserveAspectRatio="none"
            viewBox="0 0 528 1"
          >
            <line
              id="Line 1"
              stroke="var(--stroke-0, #333333)"
              x2="528"
              y1="0.5"
              y2="0.5"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}
function EditorFrame() {
  return (
    <div className="absolute h-[450px] left-[6px] top-0 w-[529px]">
      <CodeGroup />
      <EditorWindow />
    </div>
  );
}
function WindowControls() {
  return (
    <div className="absolute h-[14px] left-[27px] top-[26px] w-[56px]">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 56 14"
      >
        <g id="Group 5">
          <circle
            cx="7"
            cy="7"
            fill="var(--fill-0, #8E8E8E)"
            fillOpacity="0.23"
            id="Ellipse 4"
            r="7"
          />
          <circle
            cx="28"
            cy="7"
            fill="var(--fill-0, #8E8E8E)"
            fillOpacity="0.23"
            id="Ellipse 5"
            r="7"
          />
          <circle
            cx="49"
            cy="7"
            fill="var(--fill-0, #8E8E8E)"
            fillOpacity="0.23"
            id="Ellipse 6"
            r="7"
          />
        </g>
      </svg>
    </div>
  );
}
function LineNumbers() {
  return (
    <div className="absolute font-['Inter:Regular',sans-serif] font-normal h-[187px] leading-[28px] left-[27px] not-italic overflow-clip text-[#6e7681] text-[15px] text-right top-[91px] w-[17px]">
      <p className="-translate-x-full absolute left-[17px] top-[252px]">10</p>
      <p className="-translate-x-full absolute left-[17px] top-[280px]">11</p>
      <p className="-translate-x-full absolute left-[17.03px] top-[224px]">9</p>
      <p className="-translate-x-full absolute left-[17.03px] top-[196px]">8</p>
      <p className="-translate-x-full absolute left-[17.03px] top-[168px]">7</p>
      <p className="-translate-x-full absolute left-[17.03px] top-[140px]">6</p>
      <p className="-translate-x-full absolute left-[17.03px] top-[112px]">5</p>
      <p className="-translate-x-full absolute left-[17.03px] top-[84px]">4</p>
      <p className="-translate-x-full absolute left-[17.03px] top-[56px]">3</p>
      <p className="-translate-x-full absolute left-[17.03px] top-[28px]">2</p>
      <p className="-translate-x-full absolute left-[17.03px] top-0">1</p>
    </div>
  );
}
function EditorContainer() {
  return (
    <div className="absolute h-[403px] -right-[10%] top-[60px] w-[534px]">
      <EditorFrame />
      <WindowControls />
      <LineNumbers />
    </div>
  );
}
function CodeIconVector() {
  return (
    <div className="text-white">
      <Code2 size={44} strokeWidth={1.5} />
    </div>
  );
}
function FloatingIcon() {
  return (
    <div className="relative size-[88px]">
      <div
        className="absolute left-0 top-0 size-[88px] rounded-[24px]"
        style={{
          background:
            "linear-gradient(135deg, #575757 0%, #1a1a1a 50%, #2d2d2d 100%)",
          border: "1px solid rgba(255,255,255,0.15)",
          boxShadow:
            "0 8px 32px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.1), inset 0 -1px 0 rgba(0,0,0,0.3)",
        }}
      />
      <div className="absolute inset-0 flex items-center justify-center">
        <CodeIconVector />
      </div>
    </div>
  );
}
export function WebDevCard() {
  return (
    <div className="bg-[rgba(26,26,26,0.4)] backdrop-blur-[7px] content-stretch flex flex-col gap-[10px] items-center justify-end overflow-clip px-[51px] py-[41px] relative rounded-[50px] w-[620px] h-[520px] shadow-2xl shrink-0">
      {/* Editor Illustration */}
      <EditorContainer />

      {/* Progressive Blur and Gradient Overlay */}
      <div className="absolute h-[340px] left-0 bottom-0 w-full pointer-events-none z-0">
        {/* Layered blur for progressive effect */}
        <div
          className="absolute inset-0 backdrop-blur-[2px]"
          style={{
            maskImage: "linear-gradient(to bottom, transparent 0%, black 30%)",
            WebkitMaskImage:
              "linear-gradient(to bottom, transparent 0%, black 30%)",
          }}
        />
        <div
          className="absolute inset-0 backdrop-blur-xs"
          style={{
            maskImage: "linear-gradient(to bottom, transparent 30%, black 60%)",
            WebkitMaskImage:
              "linear-gradient(to bottom, transparent 30%, black 60%)",
          }}
        />
        <div
          className="absolute inset-0 backdrop-blur-sm"
          style={{
            maskImage:
              "linear-gradient(to bottom, transparent 60%, black 100%)",
            WebkitMaskImage:
              "linear-gradient(to bottom, transparent 60%, black 100%)",
          }}
        />
        {/* Color Gradient */}
        <div className="absolute inset-0 bg-linear-to-b from-transparent via-[rgba(26,26,26,0.8)] to-[#1a1a1a]" />
      </div>

      {/* Bottom Content Group */}
      <div className="relative z-10 flex flex-col items-start gap-6 w-full mt-auto">
        <div className="-rotate-15 flex-none origin-bottom-left -ml-2">
          <FloatingIcon />
        </div>
        <p className="font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic text-[32px] text-white">
          Web Development
        </p>
      </div>
    </div>
  );
}

import svgPaths from "./svg-v28mtuom7b";
import imgTeamMemberHeadshot from "figma:asset/7654e11cf347fc563c335a0e7b48f4473636fab3.png";
import imgTeamMemberHeadshot1 from "figma:asset/59cdaed13ec92bc4ec8610426821f11ba3cdcd9d.png";
import imgProfilePictureOfKristin from "figma:asset/10a5ec2b7dbb5853a3bf8b9c4c95a29b7a1f6114.png";
import imgUserProfessionalPortraitProfilePicture from "figma:asset/ed60dafb785e826d64a07b41c767a5c4c4b38749.png";

function Heading() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 1">
      <div className="flex flex-col font-['Manrope:Extra_Light',sans-serif] h-[40px] justify-center leading-[0] not-italic relative shrink-0 text-[#303337] text-[36px] tracking-[-0.9px] w-[285.63px]">
        <p className="leading-[40px]">Welcome, Kristin</p>
      </div>
    </div>
  );
}

function Container1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Manrope:Extra_Light',sans-serif] h-[28px] justify-center leading-[0] not-italic relative shrink-0 text-[#5c5f64] text-[18px] w-[363.3px]">
        <p>
          <span className="leading-[28px]">{`You have `}</span>
          <span className="font-['Manrope:Extra_Light',sans-serif] leading-[28px] not-italic text-[#635c72]">8 priority tasks</span>
          <span className="leading-[28px]">{` to complete today.`}</span>
        </p>
      </div>
    </div>
  );
}

function Container() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-[363.3px]" data-name="Container">
      <Heading />
      <Container1 />
    </div>
  );
}

function Button() {
  return (
    <div className="backdrop-blur-[10px] bg-white content-stretch flex flex-col items-center justify-center px-[25px] py-[13px] relative rounded-[9999px] shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.3)] border-solid inset-0 pointer-events-none rounded-[9999px]" />
      <div className="flex flex-col font-['Manrope:Extra_Light',sans-serif] h-[24px] justify-center leading-[0] not-italic relative shrink-0 text-[#303337] text-[16px] text-center w-[111.17px]">
        <p className="leading-[24px]">View Schedule</p>
      </div>
    </div>
  );
}

function Button1() {
  return (
    <div className="bg-[#635c72] content-stretch flex flex-col items-center justify-center px-[24px] py-[13px] relative rounded-[9999px] shrink-0" data-name="Button">
      <div className="absolute bg-[rgba(255,255,255,0)] inset-0 rounded-[9999px] shadow-[0px_10px_15px_-3px_rgba(99,92,114,0.2),0px_4px_6px_-4px_rgba(99,92,114,0.2)]" data-name="Button:shadow" />
      <div className="flex flex-col font-['Manrope:Extra_Light',sans-serif] h-[24px] justify-center leading-[0] not-italic relative shrink-0 text-[#fdf7ff] text-[16px] text-center w-[70.98px]">
        <p className="leading-[24px]">New Task</p>
      </div>
    </div>
  );
}

function Container2() {
  return (
    <div className="content-stretch flex gap-[16.01px] items-start relative shrink-0" data-name="Container">
      <Button />
      <Button1 />
    </div>
  );
}

function HeaderSection() {
  return (
    <div className="content-stretch flex items-end justify-between relative shrink-0 w-full" data-name="Header Section">
      <Container />
      <Container2 />
    </div>
  );
}

function Heading1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 2">
      <div className="flex flex-col font-['Manrope:Extra_Light',sans-serif] h-[32px] justify-center leading-[0] not-italic relative shrink-0 text-[#303337] text-[24px] tracking-[-0.6px] w-[100.59px]">
        <p className="leading-[32px]">Focusing</p>
      </div>
    </div>
  );
}

function Container5() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Manrope:Extra_Light',sans-serif] h-[20px] justify-center leading-[0] not-italic relative shrink-0 text-[#5c5f64] text-[14px] w-[139.91px]">
        <p className="leading-[20px]">Productivity analytics</p>
      </div>
    </div>
  );
}

function Container4() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[139.91px]" data-name="Container">
      <Heading1 />
      <Container5 />
    </div>
  );
}

function Container6() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Manrope:Extra_Light',sans-serif] h-[16px] justify-center leading-[0] not-italic relative shrink-0 text-[#303337] text-[16px] w-[103.27px]">
        <p className="leading-[16px]">expand_more</p>
      </div>
    </div>
  );
}

function Overlay() {
  return (
    <div className="bg-[rgba(255,255,255,0.4)] content-stretch flex gap-[7.99px] items-center px-[16px] py-[8px] relative rounded-[9999px] shrink-0" data-name="Overlay">
      <div className="flex flex-col font-['Manrope:Extra_Light',sans-serif] h-[16px] justify-center leading-[0] not-italic relative shrink-0 text-[#303337] text-[12px] w-[109.19px]">
        <p className="leading-[16px]">Range: Last month</p>
      </div>
      <Container6 />
    </div>
  );
}

function Container3() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start justify-between relative w-full">
        <Container4 />
        <Overlay />
      </div>
    </div>
  );
}

function Container8() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Manrope:Extra_Light',sans-serif] h-[21px] justify-center leading-[0] not-italic relative shrink-0 text-[#94a3b8] text-[14px] tracking-[1px] uppercase w-[242.02px]">
        <p className="leading-[21px]">keyboard_double_arrow_up</p>
      </div>
    </div>
  );
}

function Container9() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Manrope:Extra_Light',sans-serif] h-[15px] justify-center leading-[0] not-italic relative shrink-0 text-[#94a3b8] text-[10px] tracking-[1px] uppercase w-[24.03px]">
        <p className="leading-[15px]">Aug</p>
      </div>
    </div>
  );
}

function Background() {
  return (
    <div className="bg-[#4f46e5] content-stretch flex items-center justify-center pb-[9px] pt-[8px] relative rounded-[9999px] shrink-0 size-[32px]" data-name="Background">
      <div className="flex flex-col font-['Manrope:Extra_Light',sans-serif] h-[15px] justify-center leading-[0] not-italic relative shrink-0 text-[10px] text-center text-white tracking-[1px] uppercase w-[21.81px]">
        <p className="leading-[15px]">Sep</p>
      </div>
    </div>
  );
}

function Container10() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Manrope:Extra_Light',sans-serif] h-[15px] justify-center leading-[0] not-italic relative shrink-0 text-[#94a3b8] text-[10px] tracking-[1px] uppercase w-[23.95px]">
        <p className="leading-[15px]">Oct</p>
      </div>
    </div>
  );
}

function Container11() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Manrope:Extra_Light',sans-serif] h-[15px] justify-center leading-[0] not-italic relative shrink-0 text-[#94a3b8] text-[10px] tracking-[1px] uppercase w-[23.78px]">
        <p className="leading-[15px]">Nov</p>
      </div>
    </div>
  );
}

function Container12() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Manrope:Extra_Light',sans-serif] h-[21px] justify-center leading-[0] not-italic relative shrink-0 text-[#94a3b8] text-[14px] tracking-[1px] uppercase w-[267.52px]">
        <p className="leading-[21px]">keyboard_double_arrow_down</p>
      </div>
    </div>
  );
}

function LeftNavigationMonths() {
  return (
    <div className="h-full relative shrink-0 w-[32px]" data-name="Left Navigation: Months">
      <div className="flex flex-col items-center size-full">
        <div className="content-stretch flex flex-col items-center justify-between pb-[8.06px] pt-[8px] relative size-full">
          <Container8 />
          <Container9 />
          <Background />
          <Container10 />
          <Container11 />
          <Container12 />
        </div>
      </div>
    </div>
  );
}

function Text() {
  return (
    <div className="absolute h-[41.636px] left-[364.06px] top-[-19.79px] w-[105.766px]" data-name="Text">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Manrope:Extra_Light',sans-serif] h-[41.636px] justify-center leading-[0] left-0 not-italic text-[#303337] text-[30.48px] top-[20.82px] w-[105.766px]">
        <p className="leading-[normal]">Week 8</p>
      </div>
    </div>
  );
}

function Text1() {
  return (
    <div className="absolute h-[31.227px] left-[364.06px] top-[26.43px] w-[126.61px]" data-name="Text">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Manrope:Extra_Light',sans-serif] h-[31.227px] justify-center leading-[0] left-0 not-italic text-[#5c5f64] text-[22.86px] top-[15.61px] w-[126.61px]">
        <p className="leading-[normal]">Unbalanced</p>
      </div>
    </div>
  );
}

function Group() {
  return (
    <div className="absolute contents left-[334px] top-[-38.1px]" data-name="Group">
      <div className="absolute bottom-[70%] left-1/2 right-[41%] top-[-15%]" data-name="Vector">
        <div className="absolute inset-[-1.75%_-9.98%_-8.75%_-9.98%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 72.12 126.3">
            <g filter="url(#filter0_d_2_288)" id="Vector" opacity="0.9">
              <path d={svgPaths.p1a726380} fill="var(--fill-0, white)" />
            </g>
            <defs>
              <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="126.3" id="filter0_d_2_288" width="72.12" x="0" y="0">
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                <feOffset dy="4" />
                <feGaussianBlur stdDeviation="3" />
                <feComposite in2="hardAlpha" operator="out" />
                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0" />
                <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_2_288" />
                <feBlend in="SourceGraphic" in2="effect1_dropShadow_2_288" mode="normal" result="shape" />
              </filter>
            </defs>
          </svg>
        </div>
      </div>
      <Text />
      <Text1 />
      <div className="absolute bottom-1/2 left-[54%] right-[45%] top-[40%]" data-name="Vector">
        <div className="absolute inset-[-6.31%_-24.01%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.888 28.608">
            <g id="Vector">
              <path d={svgPaths.p2fd36080} fill="var(--fill-0, white)" />
              <path d={svgPaths.p2fd36080} stroke="var(--stroke-0, #6366F1)" strokeWidth="3.208" />
            </g>
          </svg>
        </div>
      </div>
    </div>
  );
}

function Svg() {
  return (
    <div className="h-[254px] relative shrink-0 w-full" data-name="SVG">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <div className="absolute inset-[36.67%_0_15.75%_0]" data-name="Vector">
          <div className="absolute inset-[-1.33%_-0.22%_-1.33%_0]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 669.468 124.074">
              <path d={svgPaths.p33417000} id="Vector" stroke="var(--stroke-0, #6366F1)" strokeOpacity="0.6" strokeWidth="3.208" />
            </svg>
          </div>
        </div>
        <div className="absolute inset-[28.4%_0_-10.86%_10%]" data-name="Vector">
          <div className="absolute inset-[-0.77%_-0.27%_-0.77%_0]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 602.804 212.679">
              <path d={svgPaths.p31f31a00} id="Vector" stroke="var(--stroke-0, #EF4444)" strokeWidth="3.208" />
            </svg>
          </div>
        </div>
        <Group />
      </div>
    </div>
  );
}

function MainChartArea() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col h-full items-start justify-center min-h-px min-w-px p-px relative rounded-[8px]" data-name="Main Chart Area" style={{ backgroundImage: "url('data:image/svg+xml;utf8,<svg viewBox=\\'0 0 670 256\\' xmlns=\\'http://www.w3.org/2000/svg\\' preserveAspectRatio=\\'none\\'><rect x=\\'0\\' y=\\'0\\' height=\\'100%\\' width=\\'100%\\' fill=\\'url(%23grad)\\' opacity=\\'1\\'/><defs><radialGradient id=\\'grad\\' gradientUnits=\\'userSpaceOnUse\\' cx=\\'0\\' cy=\\'0\\' r=\\'10\\' gradientTransform=\\'matrix(47.376 0 0 18.102 335 128)\\'><stop stop-color=\\'rgba(203,213,225,1)\\' offset=\\'0.035355\\'/><stop stop-color=\\'rgba(203,213,225,0)\\' offset=\\'0.035355\\'/></radialGradient></defs></svg>')" }}>
      <div aria-hidden="true" className="absolute border border-[rgba(241,245,249,0.5)] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <Svg />
    </div>
  );
}

function Container7() {
  return (
    <div className="h-[256px] relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[32px] items-start relative size-full">
        <LeftNavigationMonths />
        <MainChartArea />
      </div>
    </div>
  );
}

function Container14() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Manrope:Extra_Light',sans-serif] h-[15px] justify-center leading-[0] not-italic relative shrink-0 text-[#5c5f64] text-[10px] tracking-[-0.5px] uppercase w-[91.25px]">
        <p className="leading-[15px]">Maximum of focus</p>
      </div>
    </div>
  );
}

function Container13() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative self-stretch shrink-0" data-name="Container">
      <div className="bg-[#ef4444] rounded-[3px] shrink-0 size-[12px]" data-name="Background" />
      <Container14 />
    </div>
  );
}

function Container16() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Manrope:Extra_Light',sans-serif] h-[15px] justify-center leading-[0] not-italic relative shrink-0 text-[#5c5f64] text-[10px] tracking-[-0.5px] uppercase w-[102.45px]">
        <p className="leading-[15px]">Min or lack of focus</p>
      </div>
    </div>
  );
}

function Container15() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative self-stretch shrink-0" data-name="Container">
      <div className="bg-[#6366f1] rounded-[3px] shrink-0 size-[12px]" data-name="Background" />
      <Container16 />
    </div>
  );
}

function Legend() {
  return (
    <div className="content-stretch flex gap-[24px] h-[15px] items-start relative shrink-0" data-name="Legend">
      <Container13 />
      <Container15 />
    </div>
  );
}

function Container17() {
  return (
    <div className="content-stretch flex flex-col items-end relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Manrope:Extra_Light',sans-serif] h-[48px] justify-center leading-[0] not-italic relative shrink-0 text-[#303337] text-[48px] text-right tracking-[-2.4px] w-[86.27px]">
        <p className="leading-[48px]">41%</p>
      </div>
    </div>
  );
}

function Container18() {
  return (
    <div className="content-stretch flex flex-col items-end relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Manrope:Extra_Light',sans-serif] h-[15px] justify-center leading-[0] not-italic relative shrink-0 text-[#5c5f64] text-[10px] text-right tracking-[1px] uppercase w-[88.2px]">
        <p className="leading-[15px]">Avg. Conc-ion</p>
      </div>
    </div>
  );
}

function PercentageDisplay() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[88.2px]" data-name="Percentage Display">
      <Container17 />
      <Container18 />
    </div>
  );
}

function BottomElements() {
  return (
    <div className="relative shrink-0 w-full" data-name="Bottom Elements">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-end justify-between relative w-full">
        <Legend />
        <PercentageDisplay />
      </div>
    </div>
  );
}

function FocusingCardUpdatedToMatchImage() {
  return (
    <div className="backdrop-blur-[10px] bg-[rgba(255,255,255,0.6)] min-h-[400px] relative rounded-[12px] shrink-0 w-full" data-name="Focusing Card (Updated to match IMAGE_5)">
      <div className="min-h-[inherit] overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[16px] items-start min-h-[inherit] p-[33px] relative w-full">
          <Container3 />
          <Container7 />
          <BottomElements />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.3)] border-solid inset-0 pointer-events-none rounded-[12px] shadow-[0px_0px_40px_-10px_rgba(99,92,114,0.15)]" />
    </div>
  );
}

function OverlayOverlayBlur() {
  return (
    <div className="backdrop-blur-[6px] bg-[rgba(255,255,255,0.2)] content-stretch flex flex-col items-start p-[12px] relative rounded-[12px] shrink-0" data-name="Overlay+OverlayBlur">
      <div className="flex flex-col font-['Manrope:Extra_Light',sans-serif] h-[24px] justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-white w-[29.47px]">
        <p className="leading-[24px]">star</p>
      </div>
    </div>
  );
}

function Container20() {
  return (
    <div className="absolute content-stretch flex items-start justify-between left-0 right-0 top-0" data-name="Container">
      <OverlayOverlayBlur />
      <div className="flex flex-col font-['Manrope:Extra_Light',sans-serif] h-[16px] justify-center leading-[0] not-italic opacity-70 relative shrink-0 text-[#e2fffa] text-[12px] tracking-[1.2px] uppercase w-[55.47px]">
        <p className="leading-[16px]">Urgent</p>
      </div>
    </div>
  );
}

function Heading2() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 right-0 top-[96px]" data-name="Heading 3">
      <div className="flex flex-col font-['Manrope:Extra_Light',sans-serif] h-[36px] justify-center leading-[0] not-italic relative shrink-0 text-[#e2fffa] text-[30px] w-[192.38px]">
        <p className="leading-[36px]">Priority Work</p>
      </div>
    </div>
  );
}

function Container21() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 opacity-90 right-0 top-[140px]" data-name="Container">
      <div className="flex flex-col font-['Manrope:Extra_Light',sans-serif] h-[40px] justify-center leading-[20px] not-italic relative shrink-0 text-[#e2fffa] text-[14px] w-[313.44px]">
        <p className="mb-0">Complete the Luminous design system audit and</p>
        <p>final export.</p>
      </div>
    </div>
  );
}

function TeamMemberHeadshot() {
  return (
    <div className="pointer-events-none relative rounded-[9999px] shrink-0 size-[32px]" data-name="Team member headshot">
      <div className="absolute inset-0 overflow-hidden rounded-[9999px]">
        <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgTeamMemberHeadshot} />
      </div>
      <div aria-hidden="true" className="absolute border-2 border-[#7cfaed] border-solid inset-0 rounded-[9999px]" />
    </div>
  );
}

function TeamMemberHeadshot1() {
  return (
    <div className="absolute left-[-8px] pointer-events-none rounded-[9999px] size-[32px] top-0" data-name="Team member headshot">
      <div className="absolute inset-0 overflow-hidden rounded-[9999px]">
        <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgTeamMemberHeadshot1} />
      </div>
      <div aria-hidden="true" className="absolute border-2 border-[#7cfaed] border-solid inset-0 rounded-[9999px]" />
    </div>
  );
}

function ImgTeamMemberHeadshotMargin() {
  return (
    <div className="h-[32px] relative shrink-0 w-[24px]" data-name="Img - Team member headshot:margin">
      <TeamMemberHeadshot1 />
    </div>
  );
}

function Container23() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Container">
      <TeamMemberHeadshot />
      <ImgTeamMemberHeadshotMargin />
    </div>
  );
}

function Container24() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Manrope:Extra_Light',sans-serif] h-[16px] justify-center leading-[0] not-italic relative shrink-0 text-[#e2fffa] text-[12px] w-[54.63px]">
        <p className="leading-[16px]">+3 others</p>
      </div>
    </div>
  );
}

function Container22() {
  return (
    <div className="absolute content-stretch flex gap-[8px] items-center left-0 right-0 top-[204px]" data-name="Container">
      <Container23 />
      <Container24 />
    </div>
  );
}

function Container19() {
  return (
    <div className="h-[236px] relative shrink-0 w-full" data-name="Container">
      <Container20 />
      <Heading2 />
      <Container21 />
      <Container22 />
    </div>
  );
}

function PriorityTasks() {
  return (
    <div className="col-1 justify-self-stretch relative rounded-[12px] row-1 self-start shadow-[0px_20px_25px_-5px_rgba(0,107,100,0.1),0px_8px_10px_-6px_rgba(0,107,100,0.1)] shrink-0" data-name="Priority Tasks" style={{ backgroundImage: "linear-gradient(135deg, rgb(0, 107, 100) 0%, rgb(124, 250, 237) 100%)" }}>
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start p-[32px] relative w-full">
          <div className="absolute bg-[rgba(255,255,255,0.1)] blur-[20px] right-[-32px] rounded-[9999px] size-[128px] top-[-32px]" data-name="Overlay+Blur" />
          <Container19 />
        </div>
      </div>
    </div>
  );
}

function OverlayOverlayBlur1() {
  return (
    <div className="backdrop-blur-[6px] bg-[rgba(255,255,255,0.2)] content-stretch flex flex-col items-start p-[12px] relative rounded-[12px] shrink-0" data-name="Overlay+OverlayBlur">
      <div className="flex flex-col font-['Manrope:Extra_Light',sans-serif] h-[24px] justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-white w-[126.05px]">
        <p className="leading-[24px]">pending_actions</p>
      </div>
    </div>
  );
}

function Container26() {
  return (
    <div className="absolute content-stretch flex items-start justify-between left-0 right-0 top-0" data-name="Container">
      <OverlayOverlayBlur1 />
      <div className="flex flex-col font-['Manrope:Extra_Light',sans-serif] h-[16px] justify-center leading-[0] not-italic opacity-70 relative shrink-0 text-[#fff7f6] text-[12px] tracking-[1.2px] uppercase w-[58.02px]">
        <p className="leading-[16px]">Next Up</p>
      </div>
    </div>
  );
}

function Heading3() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 right-0 top-[96px]" data-name="Heading 3">
      <div className="flex flex-col font-['Manrope:Extra_Light',sans-serif] h-[36px] justify-center leading-[0] not-italic relative shrink-0 text-[#fff7f6] text-[30px] w-[158.02px]">
        <p className="leading-[36px]">Team Sync</p>
      </div>
    </div>
  );
}

function Container27() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 opacity-90 right-0 top-[140px]" data-name="Container">
      <div className="flex flex-col font-['Manrope:Extra_Light',sans-serif] h-[40px] justify-center leading-[20px] not-italic relative shrink-0 text-[#fff7f6] text-[14px] w-[298.77px]">
        <p className="mb-0">Weekly alignment meeting for Q3 roadmap and</p>
        <p>feature freeze.</p>
      </div>
    </div>
  );
}

function Container28() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Manrope:Extra_Light',sans-serif] h-[16px] justify-center leading-[0] not-italic relative shrink-0 text-[#fff7f6] text-[16px] w-[68.19px]">
        <p className="leading-[16px]">schedule</p>
      </div>
    </div>
  );
}

function OverlayOverlayBlur2() {
  return (
    <div className="absolute backdrop-blur-[6px] bg-[rgba(255,255,255,0.2)] content-stretch flex gap-[8px] items-center left-0 px-[16px] py-[8px] rounded-[8px] top-[204px]" data-name="Overlay+OverlayBlur">
      <Container28 />
      <div className="flex flex-col font-['Manrope:Extra_Light',sans-serif] h-[16px] justify-center leading-[0] not-italic relative shrink-0 text-[#fff7f6] text-[12px] w-[85.95px]">
        <p className="leading-[16px]">Today, 2:30 PM</p>
      </div>
    </div>
  );
}

function Container25() {
  return (
    <div className="h-[236px] relative shrink-0 w-full" data-name="Container">
      <Container26 />
      <Heading3 />
      <Container27 />
      <OverlayOverlayBlur2 />
    </div>
  );
}

function AdditionalTasks() {
  return (
    <div className="col-2 justify-self-stretch relative rounded-[12px] row-1 self-start shadow-[0px_20px_25px_-5px_rgba(159,65,53,0.1),0px_8px_10px_-6px_rgba(159,65,53,0.1)] shrink-0" data-name="Additional Tasks" style={{ backgroundImage: "linear-gradient(135deg, rgb(159, 65, 53) 0%, rgb(255, 159, 146) 100%)" }}>
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start p-[32px] relative w-full">
          <div className="absolute bg-[rgba(255,255,255,0.1)] blur-[20px] right-[-32px] rounded-[9999px] size-[128px] top-[-32px]" data-name="Overlay+Blur" />
          <Container25 />
        </div>
      </div>
    </div>
  );
}

function DualTaskCards() {
  return (
    <div className="gap-x-[32px] gap-y-[32px] grid grid-cols-[repeat(2,minmax(0,1fr))] grid-rows-[_300px] relative shrink-0 w-full" data-name="Dual Task Cards">
      <PriorityTasks />
      <AdditionalTasks />
    </div>
  );
}

function Heading4() {
  return (
    <div className="relative shrink-0" data-name="Heading 3">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative">
        <div className="flex flex-col font-['Manrope:Extra_Light',sans-serif] h-[28px] justify-center leading-[0] not-italic relative shrink-0 text-[#303337] text-[18px] w-[132.86px]">
          <p className="leading-[28px]">Active Projects</p>
        </div>
      </div>
    </div>
  );
}

function Button2() {
  return (
    <div className="relative shrink-0" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center justify-center relative">
        <div className="flex flex-col font-['Manrope:Extra_Light',sans-serif] h-[20px] justify-center leading-[0] not-italic relative shrink-0 text-[#635c72] text-[14px] text-center w-[52.05px]">
          <p className="leading-[20px]">View All</p>
        </div>
      </div>
    </div>
  );
}

function HorizontalBorder() {
  return (
    <div className="relative shrink-0 w-full" data-name="HorizontalBorder">
      <div aria-hidden="true" className="absolute border-[rgba(255,255,255,0.2)] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between pb-[25px] pt-[24px] px-[24px] relative w-full">
          <Heading4 />
          <Button2 />
        </div>
      </div>
    </div>
  );
}

function Container31() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Manrope:Extra_Light',sans-serif] h-[24px] justify-center leading-[0] not-italic relative shrink-0 text-[#635c72] text-[16px] w-[43.16px]">
        <p className="leading-[24px]">folder</p>
      </div>
    </div>
  );
}

function Background1() {
  return (
    <div className="bg-[#e8def9] content-stretch flex items-center justify-center relative rounded-[12px] shrink-0 size-[48px]" data-name="Background">
      <Container31 />
    </div>
  );
}

function Heading5() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 4">
      <div className="flex flex-col font-['Manrope:Extra_Light',sans-serif] h-[24px] justify-center leading-[0] not-italic relative shrink-0 text-[#303337] text-[16px] w-[138.28px]">
        <p className="leading-[24px]">Design System V2</p>
      </div>
    </div>
  );
}

function Container33() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Manrope:Extra_Light',sans-serif] h-[16px] justify-center leading-[0] not-italic relative shrink-0 text-[#5c5f64] text-[12px] w-[112.64px]">
        <p className="leading-[16px]">Last updated 2h ago</p>
      </div>
    </div>
  );
}

function Container32() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[138.28px]" data-name="Container">
      <Heading5 />
      <Container33 />
    </div>
  );
}

function Container30() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0" data-name="Container">
      <Background1 />
      <Container32 />
    </div>
  );
}

function Background2() {
  return (
    <div className="bg-[#e1e2e8] h-[8px] overflow-clip relative rounded-[9999px] shrink-0 w-[128px]" data-name="Background">
      <div className="absolute bg-gradient-to-r bottom-0 from-[#006b64] left-0 right-1/4 rounded-[9999px] to-[#635c72] top-0" data-name="Gradient" />
    </div>
  );
}

function Container36() {
  return (
    <div className="content-stretch flex flex-col items-end relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Manrope:Extra_Light',sans-serif] h-[15px] justify-center leading-[0] not-italic relative shrink-0 text-[#5c5f64] text-[10px] text-right w-[69.83px]">
        <p className="leading-[15px]">75% Complete</p>
      </div>
    </div>
  );
}

function Container35() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0" data-name="Container">
      <Background2 />
      <Container36 />
    </div>
  );
}

function Container37() {
  return (
    <div className="content-stretch flex items-start justify-center relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Manrope:Extra_Light',sans-serif] h-[24px] justify-center leading-[0] not-italic relative shrink-0 text-[#303337] text-[16px] text-center w-[105.55px]">
        <p className="leading-[24px]">chevron_right</p>
      </div>
    </div>
  );
}

function Button3() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center opacity-0 p-[8px] relative rounded-[8px] shrink-0" data-name="Button">
      <Container37 />
    </div>
  );
}

function Container34() {
  return (
    <div className="content-stretch flex gap-[31.99px] items-center relative shrink-0" data-name="Container">
      <Container35 />
      <Button3 />
    </div>
  );
}

function ProjectItem() {
  return (
    <div className="relative shrink-0 w-full" data-name="Project Item">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between p-[24px] relative w-full">
          <Container30 />
          <Container34 />
        </div>
      </div>
    </div>
  );
}

function Container39() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Manrope:Extra_Light',sans-serif] h-[24px] justify-center leading-[0] not-italic relative shrink-0 text-[#006b64] text-[16px] w-[22.11px]">
        <p className="leading-[24px]">api</p>
      </div>
    </div>
  );
}

function Background3() {
  return (
    <div className="bg-[#7cfaed] content-stretch flex items-center justify-center relative rounded-[12px] shrink-0 size-[48px]" data-name="Background">
      <Container39 />
    </div>
  );
}

function Heading6() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 4">
      <div className="flex flex-col font-['Manrope:Extra_Light',sans-serif] h-[24px] justify-center leading-[0] not-italic relative shrink-0 text-[#303337] text-[16px] w-[115.83px]">
        <p className="leading-[24px]">API Integration</p>
      </div>
    </div>
  );
}

function Container41() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Manrope:Extra_Light',sans-serif] h-[16px] justify-center leading-[0] not-italic relative shrink-0 text-[#5c5f64] text-[12px] w-[112.73px]">
        <p className="leading-[16px]">Last updated 5h ago</p>
      </div>
    </div>
  );
}

function Container40() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[115.83px]" data-name="Container">
      <Heading6 />
      <Container41 />
    </div>
  );
}

function Container38() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0" data-name="Container">
      <Background3 />
      <Container40 />
    </div>
  );
}

function Background4() {
  return (
    <div className="bg-[#e1e2e8] h-[8px] overflow-clip relative rounded-[9999px] shrink-0 w-[128px]" data-name="Background">
      <div className="absolute bg-gradient-to-r from-[#006b64] inset-[0_60.01%_0_0] rounded-[9999px] to-[#635c72]" data-name="Gradient" />
    </div>
  );
}

function Container44() {
  return (
    <div className="content-stretch flex flex-col items-end relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Manrope:Extra_Light',sans-serif] h-[15px] justify-center leading-[0] not-italic relative shrink-0 text-[#5c5f64] text-[10px] text-right w-[71.3px]">
        <p className="leading-[15px]">40% Complete</p>
      </div>
    </div>
  );
}

function Container43() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0" data-name="Container">
      <Background4 />
      <Container44 />
    </div>
  );
}

function Container45() {
  return (
    <div className="content-stretch flex items-start justify-center relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Manrope:Extra_Light',sans-serif] h-[24px] justify-center leading-[0] not-italic relative shrink-0 text-[#303337] text-[16px] text-center w-[105.55px]">
        <p className="leading-[24px]">chevron_right</p>
      </div>
    </div>
  );
}

function Button4() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center opacity-0 p-[8px] relative rounded-[8px] shrink-0" data-name="Button">
      <Container45 />
    </div>
  );
}

function Container42() {
  return (
    <div className="content-stretch flex gap-[31.99px] items-center relative shrink-0" data-name="Container">
      <Container43 />
      <Button4 />
    </div>
  );
}

function ProjectItem1() {
  return (
    <div className="relative shrink-0 w-full" data-name="Project Item">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between p-[24px] relative w-full">
          <Container38 />
          <Container42 />
        </div>
      </div>
    </div>
  );
}

function Container29() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative w-full">
        <ProjectItem />
        <ProjectItem1 />
      </div>
    </div>
  );
}

function ActiveProjectsSection() {
  return (
    <div className="backdrop-blur-[10px] bg-[rgba(255,255,255,0.6)] relative rounded-[12px] shrink-0 w-full" data-name="Active Projects Section">
      <div className="content-stretch flex flex-col items-start overflow-clip p-px relative rounded-[inherit] w-full">
        <HorizontalBorder />
        <Container29 />
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.3)] border-solid inset-0 pointer-events-none rounded-[12px]" />
    </div>
  );
}

function LeftColumnTasksProjects() {
  return (
    <div className="col-[1/span_8] content-stretch flex flex-col gap-[32px] items-start justify-self-stretch relative row-1 self-start shrink-0" data-name="LEFT COLUMN: Tasks & Projects">
      <FocusingCardUpdatedToMatchImage />
      <DualTaskCards />
      <ActiveProjectsSection />
    </div>
  );
}

function Heading7() {
  return (
    <div className="absolute content-stretch flex flex-col items-center left-[33px] right-[33px] top-[153px]" data-name="Heading 2">
      <div className="flex flex-col font-['Manrope:Extra_Light',sans-serif] h-[32px] justify-center leading-[0] not-italic relative shrink-0 text-[#303337] text-[24px] text-center tracking-[-0.6px] w-[166.25px]">
        <p className="leading-[32px]">Kristin Watson</p>
      </div>
    </div>
  );
}

function Container46() {
  return (
    <div className="absolute content-stretch flex flex-col items-center left-[33px] right-[33px] top-[185px]" data-name="Container">
      <div className="flex flex-col font-['Manrope:Extra_Light',sans-serif] h-[20px] justify-center leading-[0] not-italic relative shrink-0 text-[#5c5f64] text-[14px] text-center w-[144.73px]">
        <p className="leading-[20px]">Senior UI/UX Designer</p>
      </div>
    </div>
  );
}

function Container48() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Manrope:Extra_Light',sans-serif] h-[28px] justify-center leading-[0] not-italic relative shrink-0 text-[#635c72] text-[20px] text-center w-[21.17px]">
        <p className="leading-[28px]">12</p>
      </div>
    </div>
  );
}

function Container49() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Manrope:Extra_Light',sans-serif] h-[15px] justify-center leading-[0] not-italic relative shrink-0 text-[#5c5f64] text-[10px] text-center tracking-[0.5px] uppercase w-[29.53px]">
        <p className="leading-[15px]">Done</p>
      </div>
    </div>
  );
}

function Container47() {
  return (
    <div className="col-1 justify-self-stretch relative row-1 self-start shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative w-full">
        <Container48 />
        <Container49 />
      </div>
    </div>
  );
}

function Container50() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center relative w-full">
        <div className="flex flex-col font-['Manrope:Extra_Light',sans-serif] h-[28px] justify-center leading-[0] not-italic relative shrink-0 text-[#635c72] text-[20px] text-center w-[25.95px]">
          <p className="leading-[28px]">08</p>
        </div>
      </div>
    </div>
  );
}

function Container51() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center relative w-full">
        <div className="flex flex-col font-['Manrope:Extra_Light',sans-serif] h-[15px] justify-center leading-[0] not-italic relative shrink-0 text-[#5c5f64] text-[10px] text-center tracking-[0.5px] uppercase w-[38.03px]">
          <p className="leading-[15px]">Active</p>
        </div>
      </div>
    </div>
  );
}

function Border() {
  return (
    <div className="col-2 justify-self-stretch relative row-1 self-start shrink-0" data-name="Border">
      <div aria-hidden="true" className="absolute border-[rgba(255,255,255,0.2)] border-l border-r border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start px-px relative w-full">
        <Container50 />
        <Container51 />
      </div>
    </div>
  );
}

function Container53() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Manrope:Extra_Light',sans-serif] h-[28px] justify-center leading-[0] not-italic relative shrink-0 text-[#635c72] text-[20px] text-center w-[30.75px]">
        <p className="leading-[28px]">4.9</p>
      </div>
    </div>
  );
}

function Container54() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Manrope:Extra_Light',sans-serif] h-[15px] justify-center leading-[0] not-italic relative shrink-0 text-[#5c5f64] text-[10px] text-center tracking-[0.5px] uppercase w-[39.08px]">
        <p className="leading-[15px]">Rating</p>
      </div>
    </div>
  );
}

function Container52() {
  return (
    <div className="col-3 justify-self-stretch relative row-1 self-start shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative w-full">
        <Container53 />
        <Container54 />
      </div>
    </div>
  );
}

function HorizontalBorder1() {
  return (
    <div className="absolute gap-x-[8px] gap-y-[8px] grid grid-cols-[repeat(3,minmax(0,1fr))] grid-rows-[_43px] left-[33px] pt-[33px] right-[33px] top-[237px]" data-name="HorizontalBorder">
      <div aria-hidden="true" className="absolute border-[rgba(255,255,255,0.2)] border-solid border-t inset-0 pointer-events-none" />
      <Container47 />
      <Border />
      <Container52 />
    </div>
  );
}

function ProfilePictureOfKristin() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px pointer-events-none relative rounded-[9999px] w-full" data-name="Profile picture of Kristin">
      <div className="absolute inset-0 overflow-hidden rounded-[9999px]">
        <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgProfilePictureOfKristin} />
      </div>
      <div aria-hidden="true" className="absolute border-4 border-solid border-white inset-0 rounded-[9999px]" />
    </div>
  );
}

function Background5() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center p-[4px] relative rounded-[9999px] shrink-0 size-[96px]" data-name="Background" style={{ backgroundImage: "linear-gradient(45deg, rgb(99, 92, 114) 0%, rgb(0, 107, 100) 100%)" }}>
      <ProfilePictureOfKristin />
    </div>
  );
}

function Container55() {
  return (
    <div className="absolute content-stretch flex items-start left-[144px] top-[33px]" data-name="Container">
      <Background5 />
      <div className="absolute bg-[#006b64] bottom-[4px] right-[4px] rounded-[9999px] size-[24px]" data-name="Background+Border">
        <div aria-hidden="true" className="absolute border-4 border-solid border-white inset-0 pointer-events-none rounded-[9999px]" />
      </div>
    </div>
  );
}

function ProfileWidget() {
  return (
    <div className="backdrop-blur-[10px] bg-[rgba(255,255,255,0.6)] h-[346px] relative rounded-[12px] shrink-0 w-full" data-name="Profile Widget">
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.3)] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="absolute bg-[rgba(255,255,255,0)] inset-0 rounded-[12px] shadow-[0px_0px_40px_-10px_rgba(99,92,114,0.15)]" data-name="Profile Widget:shadow" />
      <Heading7 />
      <Container46 />
      <HorizontalBorder1 />
      <Container55 />
    </div>
  );
}

function Heading8() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Heading 3">
      <div className="flex flex-col font-['Manrope:Extra_Light',sans-serif] h-[28px] justify-center leading-[0] not-italic relative shrink-0 text-[#303337] text-[18px] w-[88.84px]">
        <p className="leading-[28px]">Upcoming</p>
      </div>
    </div>
  );
}

function Container58() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute content-stretch flex flex-col items-center left-[calc(50%+0.01px)] top-1/2" data-name="Container">
      <div className="flex flex-col font-['Manrope:Extra_Light',sans-serif] h-[20px] justify-center leading-[0] not-italic relative shrink-0 text-[#303337] text-[14px] text-center w-[83.86px]">
        <p className="leading-[20px]">chevron_left</p>
      </div>
    </div>
  );
}

function Button5() {
  return (
    <div className="bg-[rgba(255,255,255,0.4)] relative rounded-[9999px] shrink-0 size-[32px]" data-name="Button">
      <Container58 />
    </div>
  );
}

function Container59() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute content-stretch flex flex-col items-center left-[calc(50%+0.01px)] top-1/2" data-name="Container">
      <div className="flex flex-col font-['Manrope:Extra_Light',sans-serif] h-[20px] justify-center leading-[0] not-italic relative shrink-0 text-[#303337] text-[14px] text-center w-[92.36px]">
        <p className="leading-[20px]">chevron_right</p>
      </div>
    </div>
  );
}

function Button6() {
  return (
    <div className="bg-[rgba(255,255,255,0.4)] relative rounded-[9999px] shrink-0 size-[32px]" data-name="Button">
      <Container59 />
    </div>
  );
}

function Container57() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0" data-name="Container">
      <Button5 />
      <Button6 />
    </div>
  );
}

function Container56() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between relative w-full">
        <Heading8 />
        <Container57 />
      </div>
    </div>
  );
}

function Container62() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Manrope:Extra_Light',sans-serif] h-[20px] justify-center leading-[0] not-italic relative shrink-0 text-[#635c72] text-[14px] w-[14.97px]">
        <p className="leading-[20px]">14</p>
      </div>
    </div>
  );
}

function Container63() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Manrope:Extra_Light',sans-serif] h-[15px] justify-center leading-[0] not-italic relative shrink-0 text-[#5c5f64] text-[10px] uppercase w-[18.81px]">
        <p className="leading-[15px]">Sep</p>
      </div>
    </div>
  );
}

function Margin() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-px" data-name="Margin">
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col items-start justify-center pt-[8px] relative size-full">
          <div className="bg-[#e1e2e8] flex-[1_0_0] min-h-px min-w-px w-px" data-name="Vertical Divider" />
        </div>
      </div>
    </div>
  );
}

function Container61() {
  return (
    <div className="content-stretch flex flex-col items-center relative self-stretch shrink-0" data-name="Container">
      <Container62 />
      <Container63 />
      <Margin />
    </div>
  );
}

function Heading9() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 4">
      <div className="flex flex-col font-['Manrope:Extra_Light',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#303337] text-[16px] w-full">
        <p className="leading-[20px]">Marketing Strategy Review</p>
      </div>
    </div>
  );
}

function Container66() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Manrope:Extra_Light',sans-serif] h-[16px] justify-center leading-[0] not-italic relative shrink-0 text-[#5c5f64] text-[14px] w-[59.67px]">
        <p className="leading-[16px]">schedule</p>
      </div>
    </div>
  );
}

function Container67() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Manrope:Extra_Light',sans-serif] h-[16px] justify-center leading-[0] not-italic relative shrink-0 text-[#5c5f64] text-[12px] w-[87.06px]">
        <p className="leading-[16px]">10:00 - 11:30 AM</p>
      </div>
    </div>
  );
}

function Container65() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Container">
      <Container66 />
      <Container67 />
    </div>
  );
}

function Margin1() {
  return (
    <div className="content-stretch flex flex-col items-start mr-[-4px] relative shrink-0 size-[24px]" data-name="Margin">
      <div className="bg-[#cbd5e1] relative rounded-[9999px] shrink-0 size-[24px]" data-name="Background+Border">
        <div aria-hidden="true" className="absolute border border-solid border-white inset-0 pointer-events-none rounded-[9999px]" />
      </div>
    </div>
  );
}

function Margin2() {
  return (
    <div className="content-stretch flex flex-col items-start mr-[-4px] relative shrink-0 size-[24px]" data-name="Margin">
      <div className="bg-[#94a3b8] relative rounded-[9999px] shrink-0 size-[24px]" data-name="Background+Border">
        <div aria-hidden="true" className="absolute border border-solid border-white inset-0 pointer-events-none rounded-[9999px]" />
      </div>
    </div>
  );
}

function Container68() {
  return (
    <div className="content-stretch flex items-start pr-[4px] pt-[8px] relative shrink-0 w-full" data-name="Container">
      <div className="bg-[#e2e8f0] mr-[-4px] relative rounded-[9999px] shrink-0 size-[24px]" data-name="Background+Border">
        <div aria-hidden="true" className="absolute border border-solid border-white inset-0 pointer-events-none rounded-[9999px]" />
      </div>
      <Margin1 />
      <Margin2 />
    </div>
  );
}

function Container64() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative self-stretch" data-name="Container">
      <div className="content-stretch flex flex-col gap-[4px] items-start pb-[24px] relative size-full">
        <Heading9 />
        <Container65 />
        <Container68 />
      </div>
    </div>
  );
}

function MeetingItem() {
  return (
    <div className="content-stretch flex gap-[16px] h-[100px] items-start relative shrink-0 w-full" data-name="Meeting Item">
      <Container61 />
      <Container64 />
    </div>
  );
}

function Container70() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Manrope:Extra_Light',sans-serif] h-[20px] justify-center leading-[0] not-italic relative shrink-0 text-[#303337] text-[14px] w-[14.61px]">
        <p className="leading-[20px]">15</p>
      </div>
    </div>
  );
}

function Container71() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Manrope:Extra_Light',sans-serif] h-[15px] justify-center leading-[0] not-italic relative shrink-0 text-[#5c5f64] text-[10px] uppercase w-[18.81px]">
        <p className="leading-[15px]">Sep</p>
      </div>
    </div>
  );
}

function Margin3() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-px" data-name="Margin">
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col items-start justify-center pt-[8px] relative size-full">
          <div className="bg-[#e1e2e8] flex-[1_0_0] min-h-px min-w-px opacity-0 w-px" data-name="Vertical Divider" />
        </div>
      </div>
    </div>
  );
}

function Container69() {
  return (
    <div className="content-stretch flex flex-col items-center relative self-stretch shrink-0" data-name="Container">
      <Container70 />
      <Container71 />
      <Margin3 />
    </div>
  );
}

function Heading10() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 4">
      <div className="flex flex-col font-['Manrope:Extra_Light',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#303337] text-[16px] w-full">
        <p className="leading-[20px]">Product Sync</p>
      </div>
    </div>
  );
}

function Container74() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Manrope:Extra_Light',sans-serif] h-[16px] justify-center leading-[0] not-italic relative shrink-0 text-[#5c5f64] text-[14px] w-[59.67px]">
        <p className="leading-[16px]">schedule</p>
      </div>
    </div>
  );
}

function Container75() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Manrope:Extra_Light',sans-serif] h-[16px] justify-center leading-[0] not-italic relative shrink-0 text-[#5c5f64] text-[12px] w-[94.16px]">
        <p className="leading-[16px]">02:00 - 03:00 PM</p>
      </div>
    </div>
  );
}

function Container73() {
  return (
    <div className="content-stretch flex gap-[8px] items-center pb-[12px] relative shrink-0 w-full" data-name="Container">
      <Container74 />
      <Container75 />
    </div>
  );
}

function Button7() {
  return (
    <div className="bg-[#e8def9] content-stretch flex items-center justify-center py-[8px] relative rounded-[8px] shrink-0 w-full" data-name="Button">
      <div className="flex flex-col font-['Manrope:Extra_Light',sans-serif] h-[16px] justify-center leading-[0] not-italic relative shrink-0 text-[#554e64] text-[12px] text-center w-[110.86px]">
        <p className="leading-[16px]">Join Zoom Meeting</p>
      </div>
    </div>
  );
}

function Container72() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-start min-h-px min-w-px relative self-stretch" data-name="Container">
      <Heading10 />
      <Container73 />
      <Button7 />
    </div>
  );
}

function MeetingItem1() {
  return (
    <div className="content-stretch flex gap-[16px] h-[88px] items-start relative shrink-0 w-full" data-name="Meeting Item">
      <Container69 />
      <Container72 />
    </div>
  );
}

function Container60() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[24px] items-start relative w-full">
        <MeetingItem />
        <MeetingItem1 />
      </div>
    </div>
  );
}

function CalendarMeetingsWidget() {
  return (
    <div className="backdrop-blur-[10px] bg-[rgba(255,255,255,0.6)] relative rounded-[12px] shrink-0 w-full" data-name="Calendar/Meetings Widget">
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.3)] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="content-stretch flex flex-col gap-[24px] items-start p-[33px] relative w-full">
        <Container56 />
        <Container60 />
      </div>
    </div>
  );
}

function Heading11() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 3">
      <div className="flex flex-col font-['Manrope:Extra_Light',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#5c5f64] text-[14px] tracking-[1.4px] uppercase w-full">
        <p className="leading-[20px]">Global Status</p>
      </div>
    </div>
  );
}

function Container78() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Manrope:Extra_Light',sans-serif] h-[16px] justify-center leading-[0] not-italic relative shrink-0 text-[#303337] text-[12px] w-[66.52px]">
        <p className="leading-[16px]">Server Load</p>
      </div>
    </div>
  );
}

function Container79() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Manrope:Extra_Light',sans-serif] h-[16px] justify-center leading-[0] not-italic relative shrink-0 text-[#006b64] text-[12px] w-[46.02px]">
        <p className="leading-[16px]">Optimal</p>
      </div>
    </div>
  );
}

function Container77() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Container">
      <Container78 />
      <Container79 />
    </div>
  );
}

function Background6() {
  return (
    <div className="bg-[#e1e2e8] h-[4px] relative rounded-[9999px] shrink-0 w-full" data-name="Background">
      <div className="absolute bg-[#006b64] inset-[0_76%_0_0] rounded-[9999px]" data-name="Background" />
    </div>
  );
}

function Container81() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Manrope:Extra_Light',sans-serif] h-[16px] justify-center leading-[0] not-italic relative shrink-0 text-[#303337] text-[12px] w-[80.48px]">
        <p className="leading-[16px]">Cloud Storage</p>
      </div>
    </div>
  );
}

function Container82() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Manrope:Extra_Light',sans-serif] h-[16px] justify-center leading-[0] not-italic relative shrink-0 text-[#303337] text-[12px] w-[56.34px]">
        <p className="leading-[16px]">82% used</p>
      </div>
    </div>
  );
}

function Container80() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Container">
      <Container81 />
      <Container82 />
    </div>
  );
}

function Background7() {
  return (
    <div className="bg-[#e1e2e8] h-[4px] relative rounded-[9999px] shrink-0 w-full" data-name="Background">
      <div className="absolute bg-[#635c72] inset-[0_18%_0_0] rounded-[9999px]" data-name="Background" />
    </div>
  );
}

function Container76() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="Container">
      <Container77 />
      <Background6 />
      <Container80 />
      <Background7 />
    </div>
  );
}

function GlobalStatus() {
  return (
    <div className="bg-[#f4f3f7] relative rounded-[12px] shrink-0 w-full" data-name="Global Status">
      <div className="content-stretch flex flex-col gap-[16px] items-start p-[24px] relative w-full">
        <Heading11 />
        <Container76 />
      </div>
    </div>
  );
}

function RightColumnProfileSchedule() {
  return (
    <div className="col-[9/span_4] content-stretch flex flex-col gap-[32px] items-start justify-self-stretch pb-[188px] relative row-1 self-start shrink-0" data-name="RIGHT COLUMN: Profile & Schedule">
      <ProfileWidget />
      <CalendarMeetingsWidget />
      <GlobalStatus />
    </div>
  );
}

function BentoGridLayout() {
  return (
    <div className="gap-x-[32px] gap-y-[32px] grid grid-cols-[repeat(12,minmax(0,1fr))] grid-rows-[_1104px] relative shrink-0 w-full" data-name="Bento Grid Layout">
      <LeftColumnTasksProjects />
      <RightColumnProfileSchedule />
    </div>
  );
}

function MainContentCanvas() {
  return (
    <div className="max-w-[1920px] relative shrink-0 w-full" data-name="Main Content Canvas">
      <div className="content-stretch flex flex-col gap-[48px] items-start max-w-[inherit] pb-[48px] pt-[112px] px-[32px] relative w-full">
        <HeaderSection />
        <BentoGridLayout />
      </div>
    </div>
  );
}

function Container85() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Manrope:Extra_Light',sans-serif] h-[28px] justify-center leading-[0] not-italic relative shrink-0 text-[#312e81] text-[20px] tracking-[-1px] w-[86.83px]">
        <p className="leading-[28px]">Luminous</p>
      </div>
    </div>
  );
}

function Link() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[6px] relative shrink-0" data-name="Link">
      <div aria-hidden="true" className="absolute border-[#6366f1] border-b-2 border-solid inset-0 pointer-events-none" />
      <div className="flex flex-col font-['Manrope:Extra_Light',sans-serif] h-[20px] justify-center leading-[0] not-italic relative shrink-0 text-[#4f46e5] text-[14px] tracking-[-0.35px] w-[70.48px]">
        <p className="leading-[20px]">Dashboard</p>
      </div>
    </div>
  );
}

function Link1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Link">
      <div className="flex flex-col font-['Manrope:Extra_Light',sans-serif] h-[20px] justify-center leading-[0] not-italic relative shrink-0 text-[#64748b] text-[14px] tracking-[-0.35px] w-[52.31px]">
        <p className="leading-[20px]">Projects</p>
      </div>
    </div>
  );
}

function Link2() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Link">
      <div className="flex flex-col font-['Manrope:Extra_Light',sans-serif] h-[20px] justify-center leading-[0] not-italic relative shrink-0 text-[#64748b] text-[14px] tracking-[-0.35px] w-[34px]">
        <p className="leading-[20px]">Team</p>
      </div>
    </div>
  );
}

function Link3() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Link">
      <div className="flex flex-col font-['Manrope:Extra_Light',sans-serif] h-[20px] justify-center leading-[0] not-italic relative shrink-0 text-[#64748b] text-[14px] tracking-[-0.35px] w-[58.34px]">
        <p className="leading-[20px]">Analytics</p>
      </div>
    </div>
  );
}

function Container86() {
  return (
    <div className="content-stretch flex gap-[32px] items-center relative shrink-0" data-name="Container">
      <Link />
      <Link1 />
      <Link2 />
      <Link3 />
    </div>
  );
}

function Container84() {
  return (
    <div className="content-stretch flex gap-[48px] items-center relative shrink-0" data-name="Container">
      <Container85 />
      <Container86 />
    </div>
  );
}

function Container88() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px overflow-clip relative" data-name="Container">
      <div className="flex flex-col font-['Manrope:Extra_Light',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#6b7280] text-[14px] w-full">
        <p className="leading-[normal]">Search tasks, files, members...</p>
      </div>
    </div>
  );
}

function Input() {
  return (
    <div className="bg-[#f4f3f7] content-stretch flex items-start justify-center overflow-clip pb-[9px] pl-[40px] pr-[16px] pt-[8px] relative rounded-[9999px] shrink-0 w-[256px]" data-name="Input">
      <Container88 />
    </div>
  );
}

function Container89() {
  return (
    <div className="absolute bottom-[16.67%] content-stretch flex flex-col items-start left-[12px] top-[16.67%]" data-name="Container">
      <div className="flex flex-col font-['Manrope:Extra_Light',sans-serif] h-[24px] justify-center leading-[0] not-italic relative shrink-0 text-[#94a3b8] text-[16px] w-[50.46px]">
        <p className="leading-[24px]">search</p>
      </div>
    </div>
  );
}

function SearchBar() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Search Bar">
      <Input />
      <Container89 />
    </div>
  );
}

function Container91() {
  return (
    <div className="content-stretch flex items-start justify-center relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Manrope:Extra_Light',sans-serif] h-[24px] justify-center leading-[0] not-italic relative shrink-0 text-[#64748b] text-[16px] text-center w-[93.92px]">
        <p className="leading-[24px]">notifications</p>
      </div>
    </div>
  );
}

function Button8() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center p-[8px] relative rounded-[9999px] shrink-0" data-name="Button">
      <Container91 />
    </div>
  );
}

function Container92() {
  return (
    <div className="content-stretch flex items-start justify-center relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Manrope:Extra_Light',sans-serif] h-[24px] justify-center leading-[0] not-italic relative shrink-0 text-[#64748b] text-[16px] text-center w-[60.73px]">
        <p className="leading-[24px]">settings</p>
      </div>
    </div>
  );
}

function Button9() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center p-[8px] relative rounded-[9999px] shrink-0" data-name="Button">
      <Container92 />
    </div>
  );
}

function UserProfessionalPortraitProfilePicture() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-full" data-name="User professional portrait profile picture">
      <div className="absolute bg-clip-padding border-0 border-[transparent] border-solid inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgUserProfessionalPortraitProfilePicture} />
      </div>
    </div>
  );
}

function Border1() {
  return (
    <div className="relative rounded-[9999px] shrink-0 size-[40px]" data-name="Border">
      <div className="content-stretch flex flex-col items-start justify-center overflow-clip p-[2px] relative rounded-[inherit] size-full">
        <UserProfessionalPortraitProfilePicture />
      </div>
      <div aria-hidden="true" className="absolute border-2 border-[rgba(99,92,114,0.1)] border-solid inset-0 pointer-events-none rounded-[9999px]" />
    </div>
  );
}

function Container90() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0" data-name="Container">
      <Button8 />
      <Button9 />
      <Border1 />
    </div>
  );
}

function Container87() {
  return (
    <div className="content-stretch flex gap-[24px] items-center relative shrink-0" data-name="Container">
      <SearchBar />
      <Container90 />
    </div>
  );
}

function Container83() {
  return (
    <div className="max-w-[1920px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center max-w-[inherit] size-full">
        <div className="content-stretch flex items-center justify-between max-w-[inherit] px-[32px] py-[16px] relative w-full">
          <Container84 />
          <Container87 />
        </div>
      </div>
    </div>
  );
}

function TopNavBar() {
  return (
    <div className="absolute backdrop-blur-[12px] content-stretch flex flex-col items-start left-0 shadow-[0px_20px_50px_0px_rgba(99,92,114,0.06)] top-0 w-[1280px]" data-name="TopNavBar" style={{ backgroundImage: "linear-gradient(rgba(241, 245, 249, 0.5) 0%, rgba(241, 245, 249, 0) 100%), linear-gradient(90deg, rgba(255, 255, 255, 0.7) 0%, rgba(255, 255, 255, 0.7) 100%)" }}>
      <Container83 />
    </div>
  );
}

export default function Body() {
  return (
    <div className="bg-[#faf9fc] content-stretch flex flex-col items-start relative size-full" data-name="Body">
      <MainContentCanvas />
      <TopNavBar />
    </div>
  );
}
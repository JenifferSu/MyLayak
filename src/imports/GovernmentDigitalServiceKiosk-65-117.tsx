import svgPaths from "./svg-a65767puwl";
import imgImage from "figma:asset/df2f6be404215777d6a9ff32bce3eee7cf6f3052.png";

function Image() {
  return (
    <div className="absolute h-[940px] left-0 top-0 w-[1438px]" data-name="Image">
      <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImage} />
    </div>
  );
}

function Container() {
  return <div className="absolute bg-[rgba(0,0,0,0.2)] h-[940px] left-0 top-0 w-[1438px]" data-name="Container" />;
}

function Container1() {
  return (
    <div className="absolute h-[940px] left-0 top-0 w-[1438px]" data-name="Container">
      <Image />
      <Container />
    </div>
  );
}

function Heading() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Heading 1">
      <p className="absolute font-['Arial:Regular',sans-serif] leading-[24px] left-0 not-italic text-[16px] text-nowrap text-white top-[-2px] whitespace-pre">My Eligibility Wallet</p>
    </div>
  );
}

function Paragraph() {
  return (
    <div className="h-[28px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Arial:Regular',sans-serif] leading-[28px] left-0 not-italic text-[18px] text-[rgba(255,255,255,0.7)] text-nowrap top-[-1px] whitespace-pre">Your verified credentials</p>
    </div>
  );
}

function Container2() {
  return (
    <div className="h-[60px] relative shrink-0 w-[189.68px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[8px] h-[60px] items-start relative w-[189.68px]">
        <Heading />
        <Paragraph />
      </div>
    </div>
  );
}

function Icon() {
  return (
    <div className="absolute left-[12px] size-[16px] top-[10px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p2c1f680} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.7" strokeWidth="1.33333" />
          <path d="M14 8H6" id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.7" strokeWidth="1.33333" />
          <path d={svgPaths.p12257fa0} id="Vector_3" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.7" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Button() {
  return (
    <div className="h-[36px] relative rounded-[8px] shrink-0 w-[93.227px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid h-[36px] relative w-[93.227px]">
        <Icon />
        <p className="absolute font-['Arial:Regular',sans-serif] leading-[20px] left-[59.5px] not-italic text-[14px] text-[rgba(255,255,255,0.7)] text-center text-nowrap top-[6.5px] translate-x-[-50%] whitespace-pre">Logout</p>
      </div>
    </div>
  );
}

function Container3() {
  return (
    <div className="absolute content-stretch flex h-[60px] items-center justify-between left-[48px] top-[48px] w-[1342px]" data-name="Container">
      <Container2 />
      <Button />
    </div>
  );
}

function Icon1() {
  return (
    <div className="relative shrink-0 size-[40px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 40 40">
        <g id="Icon">
          <path d={svgPaths.p36917500} id="Vector" stroke="var(--stroke-0, #FFB900)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3.33333" />
          <path d="M36.6667 16.6667V26.6667" id="Vector_2" stroke="var(--stroke-0, #FFB900)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3.33333" />
          <path d={svgPaths.p25a5c600} id="Vector_3" stroke="var(--stroke-0, #FFB900)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3.33333" />
        </g>
      </svg>
    </div>
  );
}

function Container4() {
  return (
    <div className="bg-[rgba(255,255,255,0.1)] relative rounded-[16px] shrink-0 size-[80px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-[80px]">
        <Icon1 />
      </div>
    </div>
  );
}

function Heading1() {
  return (
    <div className="h-[24px] relative shrink-0 w-[101.922px]" data-name="Heading 3">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid h-[24px] relative w-[101.922px]">
        <p className="absolute font-['Arial:Regular',sans-serif] leading-[24px] left-0 not-italic text-[16px] text-nowrap text-white top-[-2px] whitespace-pre">Student Status</p>
      </div>
    </div>
  );
}

function Icon2() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_65_144)" id="Icon">
          <path d={svgPaths.p7de3b00} id="Vector" stroke="var(--stroke-0, #05DF72)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p1f2c5400} id="Vector_2" stroke="var(--stroke-0, #05DF72)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
        <defs>
          <clipPath id="clip0_65_144">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Text() {
  return (
    <div className="basis-0 grow h-[20px] min-h-px min-w-px relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid h-[20px] relative w-full">
        <p className="absolute font-['Arial:Regular',sans-serif] leading-[20px] left-0 not-italic text-[#05df72] text-[14px] text-nowrap top-[-1.5px] whitespace-pre">Verified</p>
      </div>
    </div>
  );
}

function Container5() {
  return (
    <div className="bg-[rgba(5,223,114,0.2)] h-[28px] relative rounded-[1.67772e+07px] shrink-0 w-[90.727px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[4px] h-[28px] items-center px-[12px] py-0 relative w-[90.727px]">
        <Icon2 />
        <Text />
      </div>
    </div>
  );
}

function Container6() {
  return (
    <div className="content-stretch flex gap-[12px] h-[28px] items-center relative shrink-0 w-full" data-name="Container">
      <Heading1 />
      <Container5 />
    </div>
  );
}

function Paragraph1() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Arial:Regular',sans-serif] leading-[24px] left-0 not-italic text-[16px] text-[rgba(255,255,255,0.6)] text-nowrap top-[-2px] whitespace-pre">Currently enrolled student</p>
    </div>
  );
}

function Container7() {
  return (
    <div className="basis-0 grow h-[60px] min-h-px min-w-px relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[8px] h-[60px] items-start relative w-full">
        <Container6 />
        <Paragraph1 />
      </div>
    </div>
  );
}

function Icon3() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p18f7f580} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.5" strokeWidth="1.33333" />
          <path d={svgPaths.p4317f80} id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.5" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Text1() {
  return (
    <div className="basis-0 grow h-[20px] min-h-px min-w-px relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid h-[20px] relative w-full">
        <p className="absolute font-['Arial:Regular',sans-serif] leading-[20px] left-0 not-italic text-[14px] text-[rgba(255,255,255,0.5)] text-nowrap top-[-1.5px] whitespace-pre">Non-transferable</p>
      </div>
    </div>
  );
}

function Container8() {
  return (
    <div className="bg-[rgba(255,255,255,0.05)] h-[36px] relative rounded-[10px] shrink-0 w-[153.438px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] h-[36px] items-center px-[12px] py-0 relative w-[153.438px]">
        <Icon3 />
        <Text1 />
      </div>
    </div>
  );
}

function Icon4() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p39608d00} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.5" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Text2() {
  return (
    <div className="h-[20px] relative shrink-0 w-[43.086px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid h-[20px] relative w-[43.086px]">
        <p className="absolute font-['Arial:Regular',sans-serif] leading-[20px] left-0 not-italic text-[14px] text-[rgba(255,255,255,0.5)] text-nowrap top-[-1.5px] whitespace-pre">Official</p>
      </div>
    </div>
  );
}

function Container9() {
  return (
    <div className="basis-0 bg-[rgba(255,255,255,0.05)] grow min-h-px min-w-px relative rounded-[10px] shrink-0 w-[153.438px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] h-full items-center pl-[12px] pr-0 py-0 relative w-[153.438px]">
        <Icon4 />
        <Text2 />
      </div>
    </div>
  );
}

function Container10() {
  return (
    <div className="h-[80px] relative shrink-0 w-[153.438px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[8px] h-[80px] items-start relative w-[153.438px]">
        <Container8 />
        <Container9 />
      </div>
    </div>
  );
}

function Container11() {
  return (
    <div className="content-stretch flex gap-[24px] h-[80px] items-center relative shrink-0 w-full" data-name="Container">
      <Container4 />
      <Container7 />
      <Container10 />
    </div>
  );
}

function Container12() {
  return (
    <div className="bg-[rgba(255,255,255,0.1)] h-[146px] relative rounded-[24px] shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.2)] border-solid inset-0 pointer-events-none rounded-[24px] shadow-[0px_20px_25px_-5px_rgba(0,0,0,0.1),0px_8px_10px_-6px_rgba(0,0,0,0.1)]" />
      <div className="size-full">
        <div className="content-stretch flex flex-col h-[146px] items-start pb-px pt-[33px] px-[33px] relative w-full">
          <Container11 />
        </div>
      </div>
    </div>
  );
}

function Icon5() {
  return (
    <div className="relative shrink-0 size-[40px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 40 40">
        <g id="Icon">
          <path d={svgPaths.p12bc9800} id="Vector" stroke="var(--stroke-0, #FFB900)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3.33333" />
          <path d={svgPaths.p26e2d200} id="Vector_2" stroke="var(--stroke-0, #FFB900)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3.33333" />
        </g>
      </svg>
    </div>
  );
}

function Container13() {
  return (
    <div className="bg-[rgba(255,255,255,0.1)] relative rounded-[16px] shrink-0 size-[80px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-[80px]">
        <Icon5 />
      </div>
    </div>
  );
}

function Heading2() {
  return (
    <div className="h-[24px] relative shrink-0 w-[175.195px]" data-name="Heading 3">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid h-[24px] relative w-[175.195px]">
        <p className="absolute font-['Arial:Regular',sans-serif] leading-[24px] left-0 not-italic text-[16px] text-nowrap text-white top-[-2px] whitespace-pre">B40 Household Eligibility</p>
      </div>
    </div>
  );
}

function Icon6() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_65_125)" id="Icon">
          <path d={svgPaths.p3bd56180} id="Vector" stroke="var(--stroke-0, #05DF72)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p1f2c5400} id="Vector_2" stroke="var(--stroke-0, #05DF72)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
        <defs>
          <clipPath id="clip0_65_125">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Text3() {
  return (
    <div className="basis-0 grow h-[20px] min-h-px min-w-px relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid h-[20px] relative w-full">
        <p className="absolute font-['Arial:Regular',sans-serif] leading-[20px] left-0 not-italic text-[#05df72] text-[14px] text-nowrap top-[-1.5px] whitespace-pre">Verified</p>
      </div>
    </div>
  );
}

function Container14() {
  return (
    <div className="bg-[rgba(5,223,114,0.2)] h-[28px] relative rounded-[1.67772e+07px] shrink-0 w-[90.727px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[4px] h-[28px] items-center px-[12px] py-0 relative w-[90.727px]">
        <Icon6 />
        <Text3 />
      </div>
    </div>
  );
}

function Container15() {
  return (
    <div className="content-stretch flex gap-[12px] h-[28px] items-center relative shrink-0 w-full" data-name="Container">
      <Heading2 />
      <Container14 />
    </div>
  );
}

function Paragraph2() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Arial:Regular',sans-serif] leading-[24px] left-0 not-italic text-[16px] text-[rgba(255,255,255,0.6)] text-nowrap top-[-2px] whitespace-pre">Qualified household income bracket</p>
    </div>
  );
}

function Container16() {
  return (
    <div className="basis-0 grow h-[60px] min-h-px min-w-px relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[8px] h-[60px] items-start relative w-full">
        <Container15 />
        <Paragraph2 />
      </div>
    </div>
  );
}

function Icon7() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p18f7f580} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.5" strokeWidth="1.33333" />
          <path d={svgPaths.p4317f80} id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.5" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Text4() {
  return (
    <div className="basis-0 grow h-[20px] min-h-px min-w-px relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid h-[20px] relative w-full">
        <p className="absolute font-['Arial:Regular',sans-serif] leading-[20px] left-0 not-italic text-[14px] text-[rgba(255,255,255,0.5)] text-nowrap top-[-1.5px] whitespace-pre">Non-transferable</p>
      </div>
    </div>
  );
}

function Container17() {
  return (
    <div className="bg-[rgba(255,255,255,0.05)] h-[36px] relative rounded-[10px] shrink-0 w-[153.438px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] h-[36px] items-center px-[12px] py-0 relative w-[153.438px]">
        <Icon7 />
        <Text4 />
      </div>
    </div>
  );
}

function Icon8() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p2d0e6200} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.5" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Text5() {
  return (
    <div className="h-[20px] relative shrink-0 w-[43.086px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid h-[20px] relative w-[43.086px]">
        <p className="absolute font-['Arial:Regular',sans-serif] leading-[20px] left-0 not-italic text-[14px] text-[rgba(255,255,255,0.5)] text-nowrap top-[-1.5px] whitespace-pre">Official</p>
      </div>
    </div>
  );
}

function Container18() {
  return (
    <div className="basis-0 bg-[rgba(255,255,255,0.05)] grow min-h-px min-w-px relative rounded-[10px] shrink-0 w-[153.438px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] h-full items-center pl-[12px] pr-0 py-0 relative w-[153.438px]">
        <Icon8 />
        <Text5 />
      </div>
    </div>
  );
}

function Container19() {
  return (
    <div className="h-[80px] relative shrink-0 w-[153.438px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[8px] h-[80px] items-start relative w-[153.438px]">
        <Container17 />
        <Container18 />
      </div>
    </div>
  );
}

function Container20() {
  return (
    <div className="content-stretch flex gap-[24px] h-[80px] items-center relative shrink-0 w-full" data-name="Container">
      <Container13 />
      <Container16 />
      <Container19 />
    </div>
  );
}

function Container21() {
  return (
    <div className="bg-[rgba(255,255,255,0.1)] h-[146px] relative rounded-[24px] shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.2)] border-solid inset-0 pointer-events-none rounded-[24px] shadow-[0px_20px_25px_-5px_rgba(0,0,0,0.1),0px_8px_10px_-6px_rgba(0,0,0,0.1)]" />
      <div className="size-full">
        <div className="content-stretch flex flex-col h-[146px] items-start pb-px pt-[33px] px-[33px] relative w-full">
          <Container20 />
        </div>
      </div>
    </div>
  );
}

function Icon9() {
  return (
    <div className="relative shrink-0 size-[40px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 40 40">
        <g id="Icon">
          <path d={svgPaths.pae32d00} id="Vector" stroke="var(--stroke-0, #FFB900)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3.33333" />
          <path d={svgPaths.pdd0b300} id="Vector_2" stroke="var(--stroke-0, #FFB900)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3.33333" />
        </g>
      </svg>
    </div>
  );
}

function Container22() {
  return (
    <div className="bg-[rgba(255,255,255,0.1)] relative rounded-[16px] shrink-0 size-[80px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-[80px]">
        <Icon9 />
      </div>
    </div>
  );
}

function Heading3() {
  return (
    <div className="h-[24px] relative shrink-0 w-[128.93px]" data-name="Heading 3">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid h-[24px] relative w-[128.93px]">
        <p className="absolute font-['Arial:Regular',sans-serif] leading-[24px] left-0 not-italic text-[16px] text-nowrap text-white top-[-2px] whitespace-pre">Regional Eligibility</p>
      </div>
    </div>
  );
}

function Icon10() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_65_125)" id="Icon">
          <path d={svgPaths.p3bd56180} id="Vector" stroke="var(--stroke-0, #05DF72)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p1f2c5400} id="Vector_2" stroke="var(--stroke-0, #05DF72)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
        <defs>
          <clipPath id="clip0_65_125">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Text6() {
  return (
    <div className="basis-0 grow h-[20px] min-h-px min-w-px relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid h-[20px] relative w-full">
        <p className="absolute font-['Arial:Regular',sans-serif] leading-[20px] left-0 not-italic text-[#05df72] text-[14px] text-nowrap top-[-1.5px] whitespace-pre">Verified</p>
      </div>
    </div>
  );
}

function Container23() {
  return (
    <div className="bg-[rgba(5,223,114,0.2)] h-[28px] relative rounded-[1.67772e+07px] shrink-0 w-[90.727px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[4px] h-[28px] items-center px-[12px] py-0 relative w-[90.727px]">
        <Icon10 />
        <Text6 />
      </div>
    </div>
  );
}

function Container24() {
  return (
    <div className="content-stretch flex gap-[12px] h-[28px] items-center relative shrink-0 w-full" data-name="Container">
      <Heading3 />
      <Container23 />
    </div>
  );
}

function Paragraph3() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Arial:Regular',sans-serif] leading-[24px] left-0 not-italic text-[16px] text-[rgba(255,255,255,0.6)] text-nowrap top-[-2px] whitespace-pre">Location-based services</p>
    </div>
  );
}

function Container25() {
  return (
    <div className="basis-0 grow h-[60px] min-h-px min-w-px relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[8px] h-[60px] items-start relative w-full">
        <Container24 />
        <Paragraph3 />
      </div>
    </div>
  );
}

function Icon11() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p18f7f580} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.5" strokeWidth="1.33333" />
          <path d={svgPaths.p4317f80} id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.5" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Text7() {
  return (
    <div className="basis-0 grow h-[20px] min-h-px min-w-px relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid h-[20px] relative w-full">
        <p className="absolute font-['Arial:Regular',sans-serif] leading-[20px] left-0 not-italic text-[14px] text-[rgba(255,255,255,0.5)] text-nowrap top-[-1.5px] whitespace-pre">Non-transferable</p>
      </div>
    </div>
  );
}

function Container26() {
  return (
    <div className="bg-[rgba(255,255,255,0.05)] h-[36px] relative rounded-[10px] shrink-0 w-[153.438px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] h-[36px] items-center px-[12px] py-0 relative w-[153.438px]">
        <Icon11 />
        <Text7 />
      </div>
    </div>
  );
}

function Icon12() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p639ae80} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.5" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Text8() {
  return (
    <div className="h-[20px] relative shrink-0 w-[43.086px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid h-[20px] relative w-[43.086px]">
        <p className="absolute font-['Arial:Regular',sans-serif] leading-[20px] left-0 not-italic text-[14px] text-[rgba(255,255,255,0.5)] text-nowrap top-[-1.5px] whitespace-pre">Official</p>
      </div>
    </div>
  );
}

function Container27() {
  return (
    <div className="basis-0 bg-[rgba(255,255,255,0.05)] grow min-h-px min-w-px relative rounded-[10px] shrink-0 w-[153.438px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] h-full items-center pl-[12px] pr-0 py-0 relative w-[153.438px]">
        <Icon12 />
        <Text8 />
      </div>
    </div>
  );
}

function Container28() {
  return (
    <div className="h-[80px] relative shrink-0 w-[153.438px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[8px] h-[80px] items-start relative w-[153.438px]">
        <Container26 />
        <Container27 />
      </div>
    </div>
  );
}

function Container29() {
  return (
    <div className="content-stretch flex gap-[24px] h-[80px] items-center relative shrink-0 w-full" data-name="Container">
      <Container22 />
      <Container25 />
      <Container28 />
    </div>
  );
}

function Container30() {
  return (
    <div className="bg-[rgba(255,255,255,0.1)] h-[146px] relative rounded-[24px] shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.2)] border-solid inset-0 pointer-events-none rounded-[24px] shadow-[0px_20px_25px_-5px_rgba(0,0,0,0.1),0px_8px_10px_-6px_rgba(0,0,0,0.1)]" />
      <div className="size-full">
        <div className="content-stretch flex flex-col h-[146px] items-start pb-px pt-[33px] px-[33px] relative w-full">
          <Container29 />
        </div>
      </div>
    </div>
  );
}

function Container31() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[24px] h-[550px] items-start left-[48px] top-[140px] w-[1342px]" data-name="Container">
      <Container12 />
      <Container21 />
      <Container30 />
    </div>
  );
}

function Button1() {
  return (
    <div className="absolute bg-[#ffb900] content-stretch flex h-[64px] items-center justify-center left-[581px] px-[64px] py-[8px] rounded-[14px] top-[690px] w-[275.414px]" data-name="Button">
      <p className="font-['Arial:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#1c398e] text-[14px] text-center text-nowrap whitespace-pre">View Available Services</p>
    </div>
  );
}

function EligibilityWallet() {
  return (
    <div className="absolute h-[940px] left-0 top-0 w-[1438px]" data-name="EligibilityWallet">
      <Container3 />
      <Container31 />
      <Button1 />
    </div>
  );
}

function App() {
  return (
    <div className="h-[940px] overflow-clip relative shrink-0 w-full" data-name="App">
      <Container1 />
      <EligibilityWallet />
    </div>
  );
}

export default function GovernmentDigitalServiceKiosk() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start pl-0 py-0 relative size-full" data-name="Government Digital Service Kiosk">
      <App />
    </div>
  );
}
import svgPaths from "./svg-vaw36hpglf";
import imgImage from "figma:asset/df2f6be404215777d6a9ff32bce3eee7cf6f3052.png";

function Image() {
  return (
    <div className="absolute h-[934px] left-0 top-0 w-[1069px]" data-name="Image">
      <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImage} />
    </div>
  );
}

function Container() {
  return <div className="absolute bg-[rgba(0,0,0,0.2)] h-[934px] left-0 top-0 w-[1069px]" data-name="Container" />;
}

function Container1() {
  return (
    <div className="absolute h-[934px] left-0 top-0 w-[1069px]" data-name="Container">
      <Image />
      <Container />
    </div>
  );
}

function Icon() {
  return (
    <div className="absolute left-[12px] size-[16px] top-[10px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p203476e0} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.7" strokeWidth="1.33333" />
          <path d="M12.6667 8H3.33333" id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.7" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Button() {
  return (
    <div className="absolute h-[36px] left-0 rounded-[8px] top-0 w-[138.836px]" data-name="Button">
      <Icon />
      <p className="absolute font-['Arial:Regular',sans-serif] leading-[20px] left-[81px] not-italic text-[14px] text-[rgba(255,255,255,0.7)] text-center text-nowrap top-[6.5px] translate-x-[-50%] whitespace-pre">Back to Wallet</p>
    </div>
  );
}

function Heading() {
  return (
    <div className="absolute h-[24px] left-0 top-[60px] w-[973px]" data-name="Heading 1">
      <p className="absolute font-['Arial:Black',sans-serif] leading-[24px] left-0 not-italic text-[20px] text-nowrap text-white top-[-2px] whitespace-pre">{`Services You're Eligible For`}</p>
    </div>
  );
}

function Paragraph() {
  return (
    <div className="absolute h-[28px] left-0 top-[92px] w-[973px]" data-name="Paragraph">
      <p className="absolute font-['Arial:Bold',sans-serif] leading-[28px] left-0 not-italic text-[18px] text-[rgba(255,255,255,0.7)] text-nowrap top-[-1px] whitespace-pre">All services have been pre-qualified based on your eligibility tokens</p>
    </div>
  );
}

function Container2() {
  return (
    <div className="h-[120px] relative shrink-0 w-[973px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid h-[120px] relative w-[973px]">
        <Button />
        <Heading />
        <Paragraph />
      </div>
    </div>
  );
}

function Icon1() {
  return (
    <div className="relative shrink-0 size-[32px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g id="Icon">
          <path d={svgPaths.p355a240} id="Vector" stroke="var(--stroke-0, #FFB900)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
          <path d="M29.3333 13.3333V21.3333" id="Vector_2" stroke="var(--stroke-0, #FFB900)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
          <path d={svgPaths.p3858b240} id="Vector_3" stroke="var(--stroke-0, #FFB900)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
        </g>
      </svg>
    </div>
  );
}

function Container3() {
  return (
    <div className="bg-[rgba(255,255,255,0.1)] relative rounded-[16px] shrink-0 size-[64px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-[64px]">
        <Icon1 />
      </div>
    </div>
  );
}

function Container4() {
  return (
    <div className="h-[64px] relative shrink-0 w-[242.328px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex h-[64px] items-start justify-between relative w-[242.328px]">
        <Container3 />
      </div>
    </div>
  );
}

function Text() {
  return (
    <div className="absolute content-stretch flex h-[16px] items-start left-[12px] top-[9.5px] w-[52.375px]" data-name="Text">
      <p className="font-['Arial:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#ffb900] text-[12px] text-nowrap whitespace-pre">Education</p>
    </div>
  );
}

function Container5() {
  return (
    <div className="absolute bg-[rgba(255,185,0,0.2)] h-[32px] left-0 rounded-[10px] top-0 w-[76.375px]" data-name="Container">
      <Text />
    </div>
  );
}

function Heading1() {
  return (
    <div className="absolute h-[24px] left-0 top-[40px] w-[242.328px]" data-name="Heading 3">
      <p className="absolute font-['Arial:Bold',sans-serif] leading-[24px] left-0 not-italic text-[16px] text-nowrap text-white top-[-2px] whitespace-pre">Student Grant</p>
    </div>
  );
}

function Paragraph1() {
  return (
    <div className="absolute h-[48px] left-0 top-[76px] w-[242.328px]" data-name="Paragraph">
      <p className="absolute font-['Arial:Regular',sans-serif] leading-[24px] left-0 not-italic text-[16px] text-[rgba(255,255,255,0.6)] top-[-2px] w-[236px]">Financial assistance for education expenses</p>
    </div>
  );
}

function Container6() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-[242.328px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid h-full relative w-[242.328px]">
        <Container5 />
        <Heading1 />
        <Paragraph1 />
      </div>
    </div>
  );
}

function Icon2() {
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

function Text1() {
  return (
    <div className="h-[20px] relative shrink-0 w-[137.102px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid h-[20px] relative w-[137.102px]">
        <p className="absolute font-['Arial:Regular',sans-serif] leading-[20px] left-0 not-italic text-[14px] text-[rgba(255,255,255,0.5)] text-nowrap top-[-1.5px] whitespace-pre">Official source verified</p>
      </div>
    </div>
  );
}

function Container7() {
  return (
    <div className="h-[37px] relative shrink-0 w-[242.328px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[1px_0px_0px] border-[rgba(255,255,255,0.1)] border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] h-[37px] items-center pb-0 pt-px px-0 relative w-[242.328px]">
        <Icon2 />
        <Text1 />
      </div>
    </div>
  );
}

function Button1() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.1)] content-stretch flex flex-col gap-[24px] h-[331px] items-start left-0 pl-[33px] pr-px py-[33px] rounded-[24px] top-0 w-[308.328px]" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.2)] border-solid inset-0 pointer-events-none rounded-[24px] shadow-[0px_20px_25px_-5px_rgba(0,0,0,0.1),0px_8px_10px_-6px_rgba(0,0,0,0.1)]" />
      <Container4 />
      <Container6 />
      <Container7 />
    </div>
  );
}

function Icon3() {
  return (
    <div className="relative shrink-0 size-[32px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g id="Icon">
          <path d="M10.6667 8V16" id="Vector" stroke="var(--stroke-0, #FFB900)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
          <path d="M20 8V16" id="Vector_2" stroke="var(--stroke-0, #FFB900)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
          <path d="M2.66667 16H28.8" id="Vector_3" stroke="var(--stroke-0, #FFB900)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
          <path d={svgPaths.p3d8c96c0} id="Vector_4" stroke="var(--stroke-0, #FFB900)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
          <path d={svgPaths.p292c5c00} id="Vector_5" stroke="var(--stroke-0, #FFB900)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
          <path d="M12 24H18.6667" id="Vector_6" stroke="var(--stroke-0, #FFB900)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
          <path d={svgPaths.p11115780} id="Vector_7" stroke="var(--stroke-0, #FFB900)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
        </g>
      </svg>
    </div>
  );
}

function Container8() {
  return (
    <div className="bg-[rgba(255,255,255,0.1)] relative rounded-[16px] shrink-0 size-[64px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-[64px]">
        <Icon3 />
      </div>
    </div>
  );
}

function Container9() {
  return (
    <div className="h-[64px] relative shrink-0 w-[242.336px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex h-[64px] items-start justify-between relative w-[242.336px]">
        <Container8 />
      </div>
    </div>
  );
}

function Text2() {
  return (
    <div className="absolute content-stretch flex h-[16px] items-start left-[12px] top-[9.5px] w-[76.633px]" data-name="Text">
      <p className="font-['Arial:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#ffb900] text-[12px] text-nowrap whitespace-pre">Transportation</p>
    </div>
  );
}

function Container10() {
  return (
    <div className="absolute bg-[rgba(255,185,0,0.2)] h-[32px] left-0 rounded-[10px] top-0 w-[100.633px]" data-name="Container">
      <Text2 />
    </div>
  );
}

function Heading2() {
  return (
    <div className="absolute h-[24px] left-0 top-[40px] w-[242.336px]" data-name="Heading 3">
      <p className="absolute font-['Arial:Bold',sans-serif] leading-[24px] left-0 not-italic text-[16px] text-nowrap text-white top-[-2px] whitespace-pre">Transport Subsidy</p>
    </div>
  );
}

function Paragraph2() {
  return (
    <div className="absolute h-[48px] left-0 top-[76px] w-[242.336px]" data-name="Paragraph">
      <p className="absolute font-['Arial:Regular',sans-serif] leading-[24px] left-0 not-italic text-[16px] text-[rgba(255,255,255,0.6)] top-[-2px] w-[172px]">Reduced fares for public transportation</p>
    </div>
  );
}

function Container11() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-[242.336px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid h-full relative w-[242.336px]">
        <Container10 />
        <Heading2 />
        <Paragraph2 />
      </div>
    </div>
  );
}

function Icon4() {
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

function Text3() {
  return (
    <div className="h-[20px] relative shrink-0 w-[137.102px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid h-[20px] relative w-[137.102px]">
        <p className="absolute font-['Arial:Regular',sans-serif] leading-[20px] left-0 not-italic text-[14px] text-[rgba(255,255,255,0.5)] text-nowrap top-[-1.5px] whitespace-pre">Official source verified</p>
      </div>
    </div>
  );
}

function Container12() {
  return (
    <div className="h-[37px] relative shrink-0 w-[242.336px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[1px_0px_0px] border-[rgba(255,255,255,0.1)] border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] h-[37px] items-center pb-0 pt-px px-0 relative w-[242.336px]">
        <Icon4 />
        <Text3 />
      </div>
    </div>
  );
}

function Button2() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.1)] content-stretch flex flex-col gap-[24px] h-[331px] items-start left-[332.33px] pl-[33px] pr-px py-[33px] rounded-[24px] top-0 w-[308.336px]" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.2)] border-solid inset-0 pointer-events-none rounded-[24px] shadow-[0px_20px_25px_-5px_rgba(0,0,0,0.1),0px_8px_10px_-6px_rgba(0,0,0,0.1)]" />
      <Container9 />
      <Container11 />
      <Container12 />
    </div>
  );
}

function Icon5() {
  return (
    <div className="relative shrink-0 size-[32px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g id="Icon">
          <path d="M16 9.33333V14.6667" id="Vector" stroke="var(--stroke-0, #FFB900)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
          <path d={svgPaths.p1188a00} id="Vector_2" stroke="var(--stroke-0, #FFB900)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
          <path d="M18.6667 12H13.3333" id="Vector_3" stroke="var(--stroke-0, #FFB900)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
          <path d={svgPaths.p375c4a00} id="Vector_4" stroke="var(--stroke-0, #FFB900)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
          <path d={svgPaths.pacc5d80} id="Vector_5" stroke="var(--stroke-0, #FFB900)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
        </g>
      </svg>
    </div>
  );
}

function Container13() {
  return (
    <div className="bg-[rgba(255,255,255,0.1)] relative rounded-[16px] shrink-0 size-[64px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-[64px]">
        <Icon5 />
      </div>
    </div>
  );
}

function Container14() {
  return (
    <div className="h-[64px] relative shrink-0 w-[242.336px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex h-[64px] items-start justify-between relative w-[242.336px]">
        <Container13 />
      </div>
    </div>
  );
}

function Text4() {
  return (
    <div className="absolute content-stretch flex h-[16px] items-start left-[12px] top-[9.5px] w-[56.766px]" data-name="Text">
      <p className="font-['Arial:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#ffb900] text-[12px] text-nowrap whitespace-pre">Healthcare</p>
    </div>
  );
}

function Container15() {
  return (
    <div className="absolute bg-[rgba(255,185,0,0.2)] h-[32px] left-0 rounded-[10px] top-0 w-[80.766px]" data-name="Container">
      <Text4 />
    </div>
  );
}

function Heading3() {
  return (
    <div className="absolute h-[24px] left-0 top-[40px] w-[242.336px]" data-name="Heading 3">
      <p className="absolute font-['Arial:Bold',sans-serif] leading-[24px] left-0 not-italic text-[16px] text-nowrap text-white top-[-2px] whitespace-pre">Healthcare Benefit</p>
    </div>
  );
}

function Paragraph3() {
  return (
    <div className="absolute h-[48px] left-0 top-[76px] w-[242.336px]" data-name="Paragraph">
      <p className="absolute font-['Arial:Regular',sans-serif] leading-[24px] left-0 not-italic text-[16px] text-[rgba(255,255,255,0.6)] top-[-2px] w-[205px]">Access to subsidized medical services</p>
    </div>
  );
}

function Container16() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-[242.336px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid h-full relative w-[242.336px]">
        <Container15 />
        <Heading3 />
        <Paragraph3 />
      </div>
    </div>
  );
}

function Icon6() {
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
    <div className="h-[20px] relative shrink-0 w-[137.102px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid h-[20px] relative w-[137.102px]">
        <p className="absolute font-['Arial:Regular',sans-serif] leading-[20px] left-0 not-italic text-[14px] text-[rgba(255,255,255,0.5)] text-nowrap top-[-1.5px] whitespace-pre">Official source verified</p>
      </div>
    </div>
  );
}

function Container17() {
  return (
    <div className="h-[37px] relative shrink-0 w-[242.336px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[1px_0px_0px] border-[rgba(255,255,255,0.1)] border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] h-[37px] items-center pb-0 pt-px px-0 relative w-[242.336px]">
        <Icon6 />
        <Text5 />
      </div>
    </div>
  );
}

function Button3() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.1)] content-stretch flex flex-col gap-[24px] h-[331px] items-start left-[664.66px] pl-[33px] pr-px py-[33px] rounded-[24px] top-0 w-[308.336px]" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.2)] border-solid inset-0 pointer-events-none rounded-[24px] shadow-[0px_20px_25px_-5px_rgba(0,0,0,0.1),0px_8px_10px_-6px_rgba(0,0,0,0.1)]" />
      <Container14 />
      <Container16 />
      <Container17 />
    </div>
  );
}

function Icon7() {
  return (
    <div className="relative shrink-0 size-[32px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g id="Icon">
          <path d={svgPaths.p28895840} id="Vector" stroke="var(--stroke-0, #FFB900)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
        </g>
      </svg>
    </div>
  );
}

function Container18() {
  return (
    <div className="bg-[rgba(255,255,255,0.1)] relative rounded-[16px] shrink-0 size-[64px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-[64px]">
        <Icon7 />
      </div>
    </div>
  );
}

function Container19() {
  return (
    <div className="h-[64px] relative shrink-0 w-[242.328px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex h-[64px] items-start justify-between relative w-[242.328px]">
        <Container18 />
      </div>
    </div>
  );
}

function Text6() {
  return (
    <div className="absolute content-stretch flex h-[16px] items-start left-[12px] top-[9.5px] w-[76.547px]" data-name="Text">
      <p className="font-['Arial:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#ffb900] text-[12px] text-nowrap whitespace-pre">Social Services</p>
    </div>
  );
}

function Container20() {
  return (
    <div className="absolute bg-[rgba(255,185,0,0.2)] h-[32px] left-0 rounded-[10px] top-0 w-[100.547px]" data-name="Container">
      <Text6 />
    </div>
  );
}

function Heading4() {
  return (
    <div className="absolute h-[24px] left-0 top-[40px] w-[242.328px]" data-name="Heading 3">
      <p className="absolute font-['Arial:Bold',sans-serif] leading-[24px] left-0 not-italic text-[16px] text-nowrap text-white top-[-2px] whitespace-pre">Senior Care Program</p>
    </div>
  );
}

function Paragraph4() {
  return (
    <div className="absolute h-[48px] left-0 top-[76px] w-[242.328px]" data-name="Paragraph">
      <p className="absolute font-['Arial:Regular',sans-serif] leading-[24px] left-0 not-italic text-[16px] text-[rgba(255,255,255,0.6)] top-[-2px] w-[227px]">Comprehensive care services for elderly citizens</p>
    </div>
  );
}

function Container21() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-[242.328px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid h-full relative w-[242.328px]">
        <Container20 />
        <Heading4 />
        <Paragraph4 />
      </div>
    </div>
  );
}

function Icon8() {
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

function Text7() {
  return (
    <div className="h-[20px] relative shrink-0 w-[137.102px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid h-[20px] relative w-[137.102px]">
        <p className="absolute font-['Arial:Regular',sans-serif] leading-[20px] left-0 not-italic text-[14px] text-[rgba(255,255,255,0.5)] text-nowrap top-[-1.5px] whitespace-pre">Official source verified</p>
      </div>
    </div>
  );
}

function Container22() {
  return (
    <div className="h-[37px] relative shrink-0 w-[242.328px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[1px_0px_0px] border-[rgba(255,255,255,0.1)] border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] h-[37px] items-center pb-0 pt-px px-0 relative w-[242.328px]">
        <Icon8 />
        <Text7 />
      </div>
    </div>
  );
}

function Button4() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.1)] content-stretch flex flex-col gap-[24px] h-[331px] items-start left-0 pl-[33px] pr-px py-[33px] rounded-[24px] top-[355px] w-[308.328px]" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.2)] border-solid inset-0 pointer-events-none rounded-[24px] shadow-[0px_20px_25px_-5px_rgba(0,0,0,0.1),0px_8px_10px_-6px_rgba(0,0,0,0.1)]" />
      <Container19 />
      <Container21 />
      <Container22 />
    </div>
  );
}

function Icon9() {
  return (
    <div className="relative shrink-0 size-[32px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g id="Icon">
          <path d={svgPaths.p31449b00} id="Vector" stroke="var(--stroke-0, #FFB900)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
          <path d="M26.7387 21.316H5.26135" id="Vector_2" stroke="var(--stroke-0, #FFB900)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
        </g>
      </svg>
    </div>
  );
}

function Container23() {
  return (
    <div className="bg-[rgba(255,255,255,0.1)] relative rounded-[16px] shrink-0 size-[64px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-[64px]">
        <Icon9 />
      </div>
    </div>
  );
}

function Container24() {
  return (
    <div className="h-[64px] relative shrink-0 w-[242.336px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex h-[64px] items-start justify-between relative w-[242.336px]">
        <Container23 />
      </div>
    </div>
  );
}

function Text8() {
  return (
    <div className="absolute content-stretch flex h-[16px] items-start left-[12px] top-[9.5px] w-[60.359px]" data-name="Text">
      <p className="font-['Arial:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#ffb900] text-[12px] text-nowrap whitespace-pre">Technology</p>
    </div>
  );
}

function Container25() {
  return (
    <div className="absolute bg-[rgba(255,185,0,0.2)] h-[32px] left-0 rounded-[10px] top-0 w-[84.359px]" data-name="Container">
      <Text8 />
    </div>
  );
}

function Heading5() {
  return (
    <div className="absolute h-[24px] left-0 top-[40px] w-[242.336px]" data-name="Heading 3">
      <p className="absolute font-['Arial:Bold',sans-serif] leading-[24px] left-0 not-italic text-[16px] text-nowrap text-white top-[-2px] whitespace-pre">Digital Access Program</p>
    </div>
  );
}

function Paragraph5() {
  return (
    <div className="absolute h-[48px] left-0 top-[76px] w-[242.336px]" data-name="Paragraph">
      <p className="absolute font-['Arial:Regular',sans-serif] leading-[24px] left-0 not-italic text-[16px] text-[rgba(255,255,255,0.6)] top-[-2px] w-[171px]">Free internet and device assistance</p>
    </div>
  );
}

function Container26() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-[242.336px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid h-full relative w-[242.336px]">
        <Container25 />
        <Heading5 />
        <Paragraph5 />
      </div>
    </div>
  );
}

function Icon10() {
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

function Text9() {
  return (
    <div className="h-[20px] relative shrink-0 w-[137.102px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid h-[20px] relative w-[137.102px]">
        <p className="absolute font-['Arial:Regular',sans-serif] leading-[20px] left-0 not-italic text-[14px] text-[rgba(255,255,255,0.5)] text-nowrap top-[-1.5px] whitespace-pre">Official source verified</p>
      </div>
    </div>
  );
}

function Container27() {
  return (
    <div className="h-[37px] relative shrink-0 w-[242.336px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[1px_0px_0px] border-[rgba(255,255,255,0.1)] border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] h-[37px] items-center pb-0 pt-px px-0 relative w-[242.336px]">
        <Icon10 />
        <Text9 />
      </div>
    </div>
  );
}

function Button5() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.1)] content-stretch flex flex-col gap-[24px] h-[331px] items-start left-[332.33px] pl-[33px] pr-px py-[33px] rounded-[24px] top-[355px] w-[308.336px]" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.2)] border-solid inset-0 pointer-events-none rounded-[24px] shadow-[0px_20px_25px_-5px_rgba(0,0,0,0.1),0px_8px_10px_-6px_rgba(0,0,0,0.1)]" />
      <Container24 />
      <Container26 />
      <Container27 />
    </div>
  );
}

function Icon11() {
  return (
    <div className="relative shrink-0 size-[32px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g id="Icon">
          <path d={svgPaths.p2c917000} id="Vector" stroke="var(--stroke-0, #FFB900)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
          <path d={svgPaths.p3d09fdf0} id="Vector_2" stroke="var(--stroke-0, #FFB900)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
          <path d={svgPaths.p9901970} id="Vector_3" stroke="var(--stroke-0, #FFB900)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
          <path d={svgPaths.p229a8c00} id="Vector_4" stroke="var(--stroke-0, #FFB900)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
          <path d={svgPaths.p33a28372} id="Vector_5" stroke="var(--stroke-0, #FFB900)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
          <path d={svgPaths.p34281100} id="Vector_6" stroke="var(--stroke-0, #FFB900)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
          <path d={svgPaths.p2cd33600} id="Vector_7" stroke="var(--stroke-0, #FFB900)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
          <path d={svgPaths.p11949d00} id="Vector_8" stroke="var(--stroke-0, #FFB900)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
        </g>
      </svg>
    </div>
  );
}

function Container28() {
  return (
    <div className="bg-[rgba(255,255,255,0.1)] relative rounded-[16px] shrink-0 size-[64px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-[64px]">
        <Icon11 />
      </div>
    </div>
  );
}

function Container29() {
  return (
    <div className="h-[64px] relative shrink-0 w-[242.336px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex h-[64px] items-start justify-between relative w-[242.336px]">
        <Container28 />
      </div>
    </div>
  );
}

function Text10() {
  return (
    <div className="absolute content-stretch flex h-[16px] items-start left-[12px] top-[9.5px] w-[76.547px]" data-name="Text">
      <p className="font-['Arial:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#ffb900] text-[12px] text-nowrap whitespace-pre">Social Services</p>
    </div>
  );
}

function Container30() {
  return (
    <div className="absolute bg-[rgba(255,185,0,0.2)] h-[32px] left-0 rounded-[10px] top-0 w-[100.547px]" data-name="Container">
      <Text10 />
    </div>
  );
}

function Heading6() {
  return (
    <div className="absolute h-[24px] left-0 top-[40px] w-[242.336px]" data-name="Heading 3">
      <p className="absolute font-['Arial:Bold',sans-serif] leading-[24px] left-0 not-italic text-[16px] text-nowrap text-white top-[-2px] whitespace-pre">Food Assistance</p>
    </div>
  );
}

function Paragraph6() {
  return (
    <div className="absolute h-[48px] left-0 top-[76px] w-[242.336px]" data-name="Paragraph">
      <p className="absolute font-['Arial:Regular',sans-serif] leading-[24px] left-0 not-italic text-[16px] text-[rgba(255,255,255,0.6)] top-[-2px] w-[236px]">Monthly food support for eligible households</p>
    </div>
  );
}

function Container31() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-[242.336px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid h-full relative w-[242.336px]">
        <Container30 />
        <Heading6 />
        <Paragraph6 />
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

function Text11() {
  return (
    <div className="h-[20px] relative shrink-0 w-[137.102px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid h-[20px] relative w-[137.102px]">
        <p className="absolute font-['Arial:Regular',sans-serif] leading-[20px] left-0 not-italic text-[14px] text-[rgba(255,255,255,0.5)] text-nowrap top-[-1.5px] whitespace-pre">Official source verified</p>
      </div>
    </div>
  );
}

function Container32() {
  return (
    <div className="h-[37px] relative shrink-0 w-[242.336px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[1px_0px_0px] border-[rgba(255,255,255,0.1)] border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] h-[37px] items-center pb-0 pt-px px-0 relative w-[242.336px]">
        <Icon12 />
        <Text11 />
      </div>
    </div>
  );
}

function Button6() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.1)] content-stretch flex flex-col gap-[24px] h-[331px] items-start left-[664.66px] pl-[33px] pr-px py-[33px] rounded-[24px] top-[355px] w-[308.336px]" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.2)] border-solid inset-0 pointer-events-none rounded-[24px] shadow-[0px_20px_25px_-5px_rgba(0,0,0,0.1),0px_8px_10px_-6px_rgba(0,0,0,0.1)]" />
      <Container29 />
      <Container31 />
      <Container32 />
    </div>
  );
}

function Container33() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-[973px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid h-full relative w-[973px]">
        <Button1 />
        <Button2 />
        <Button3 />
        <Button4 />
        <Button5 />
        <Button6 />
      </div>
    </div>
  );
}

function EligibleServices() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[32px] h-[934px] items-start left-0 pl-[48px] pr-0 py-[48px] top-0 w-[1069px]" data-name="EligibleServices">
      <Container2 />
      <Container33 />
    </div>
  );
}

function App() {
  return (
    <div className="h-[934px] overflow-clip relative shrink-0 w-full" data-name="App">
      <Container1 />
      <EligibleServices />
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
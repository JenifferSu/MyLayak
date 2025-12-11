import svgPaths from "./svg-ji9jnsizjn";
import imgImage from "figma:asset/df2f6be404215777d6a9ff32bce3eee7cf6f3052.png";
import { imgVector } from "./svg-fzhcp";

function Image() {
  return (
    <div className="absolute h-[770px] left-0 top-0 w-[1438px]" data-name="Image">
      <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImage} />
    </div>
  );
}

function Container() {
  return <div className="absolute bg-[rgba(0,0,0,0.2)] h-[770px] left-0 top-0 w-[1438px]" data-name="Container" />;
}

function Container1() {
  return (
    <div className="absolute h-[770px] left-0 top-0 w-[1438px]" data-name="Container">
      <Image />
      <Container />
    </div>
  );
}

function Paragraph() {
  return (
    <div className="absolute h-[24px] left-0 top-[-2px] w-[136.32px]" data-name="Paragraph">
      <p className="absolute font-['Arial:Black',sans-serif] leading-[24px] left-0 not-italic text-[26px] text-nowrap text-white top-0 whitespace-pre">My Eligibility Wallet</p>
    </div>
  );
}

function Paragraph1() {
  return (
    <div className="absolute h-[28px] left-0 top-[31px] w-[191.445px]" data-name="Paragraph">
      <p className="absolute font-['Arial:Regular',sans-serif] leading-[28px] left-[0.5px] not-italic text-[18px] text-[rgba(255,255,255,0.7)] text-nowrap top-0 whitespace-pre">Your verified credentials</p>
    </div>
  );
}

function Container2() {
  return (
    <div className="absolute h-[60px] left-0 top-0 w-[189.68px]" data-name="Container">
      <Paragraph />
      <Paragraph1 />
    </div>
  );
}

function Group() {
  return (
    <div className="absolute contents inset-[12.5%]" data-name="Group">
      <div className="absolute inset-[29.17%_12.5%_29.17%_66.67%]" data-name="Vector">
        <div className="absolute inset-[-10%_-20%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5 8">
            <path d={svgPaths.p30a33100} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.7" strokeWidth="1.33333" />
          </svg>
        </div>
      </div>
      <div className="absolute bottom-1/2 left-[37.5%] right-[12.5%] top-1/2" data-name="Vector">
        <div className="absolute inset-[-0.67px_-8.33%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 2">
            <path d="M8.66667 0.666665H0.666665" id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.7" strokeWidth="1.33333" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[12.5%_62.5%_12.5%_12.5%]" data-name="Vector">
        <div className="absolute inset-[-5.56%_-16.67%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6 14">
            <path d={svgPaths.p59a4f80} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.7" strokeWidth="1.33333" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Icon() {
  return (
    <div className="h-[16px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <Group />
    </div>
  );
}

function LogoutIcon() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[12px] size-[16px] top-[10px]" data-name="LogoutIcon">
      <Icon />
    </div>
  );
}

function Paragraph2() {
  return (
    <div className="absolute h-[20px] left-[38.09px] top-[6.5px] w-[42.82px]" data-name="Paragraph">
      <p className="absolute font-['Arial:Regular',sans-serif] leading-[20px] left-[21.5px] not-italic text-[14px] text-[rgba(255,255,255,0.7)] text-center text-nowrap top-0 translate-x-[-50%] whitespace-pre">Logout</p>
    </div>
  );
}

function Button() {
  return (
    <div className="absolute h-[36px] left-[879.77px] rounded-[8px] top-[12px] w-[93.227px]" data-name="Button">
      <LogoutIcon />
      <Paragraph2 />
    </div>
  );
}

function Container3() {
  return (
    <div className="h-[60px] relative shrink-0 w-full" data-name="Container">
      <Container2 />
      <Button />
    </div>
  );
}

function Container4() {
  return <div className="absolute bg-[rgba(255,255,255,0)] border border-[rgba(255,255,255,0.2)] border-solid h-[146px] left-0 rounded-[24px] shadow-[0px_20px_25px_-5px_rgba(0,0,0,0.1),0px_8px_10px_-6px_rgba(0,0,0,0.1)] top-0 w-[973px]" data-name="Container" />;
}

function Group1() {
  return (
    <div className="absolute contents inset-[20.83%_8.27%_20.83%_8.34%]" data-name="Group">
      <div className="absolute inset-[20.83%_8.27%_37.5%_8.34%]" data-name="Vector">
        <div className="absolute inset-[-10%_-5%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 37 20">
            <path d={svgPaths.p519eb00} id="Vector" stroke="var(--stroke-0, #FFB900)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3.33333" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[41.67%_8.33%_33.33%_91.67%]" data-name="Vector">
        <div className="absolute inset-[-16.67%_-1.67px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4 14">
            <path d="M1.66666 1.66666V11.6667" id="Vector" stroke="var(--stroke-0, #FFB900)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3.33333" />
          </svg>
        </div>
      </div>
      <div className="absolute bottom-[20.83%] left-1/4 right-1/4 top-[52.08%]" data-name="Vector">
        <div className="absolute inset-[-15.38%_-8.33%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 15">
            <path d={svgPaths.p6ad000} id="Vector" stroke="var(--stroke-0, #FFB900)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3.33333" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Icon1() {
  return (
    <div className="h-[40px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <Group1 />
    </div>
  );
}

function GraduationCapIcon() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[20px] size-[40px] top-[20px]" data-name="GraduationCapIcon">
      <Icon1 />
    </div>
  );
}

function Container5() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.1)] left-0 rounded-[16px] size-[80px] top-0" data-name="Container">
      <GraduationCapIcon />
    </div>
  );
}

function Paragraph3() {
  return (
    <div className="absolute h-[24px] left-[-1.48px] top-0 w-[104.961px]" data-name="Paragraph">
      <p className="absolute font-['Arial:Bold',sans-serif] leading-[24px] left-[66.98px] not-italic text-[20px] text-center text-nowrap text-white top-0 translate-x-[-50%] whitespace-pre">Student Status</p>
    </div>
  );
}

function Group2() {
  return (
    <div className="absolute contents inset-[8.32%_8.32%_8.35%_8.34%]" data-name="Group">
      <div className="absolute inset-[8.32%_8.32%_8.35%_8.34%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-1.335px_-1.331px] mask-size-[16px_16px]" data-name="Vector" style={{ maskImage: `url('${imgVector}')` }}>
        <div className="absolute inset-[-5%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15 15">
            <path d={svgPaths.p2bf65000} id="Vector" stroke="var(--stroke-0, #05DF72)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[16.67%_8.33%_41.67%_37.5%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-6px_-2.667px] mask-size-[16px_16px]" data-name="Vector" style={{ maskImage: `url('${imgVector}')` }}>
        <div className="absolute inset-[-10%_-7.69%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 8">
            <path d={svgPaths.p178dac00} id="Vector" stroke="var(--stroke-0, #05DF72)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function ClipPathGroup() {
  return (
    <div className="absolute contents inset-0" data-name="Clip path group">
      <Group2 />
    </div>
  );
}

function Icon2() {
  return (
    <div className="h-[16px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <ClipPathGroup />
    </div>
  );
}

function CheckCircleIcon() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[12px] size-[16px] top-[6px]" data-name="CheckCircleIcon">
      <Icon2 />
    </div>
  );
}

function Paragraph4() {
  return (
    <div className="absolute h-[20px] left-[32.15px] top-[2.5px] w-[46.703px]" data-name="Paragraph">
      <p className="absolute font-['Arial:Regular',sans-serif] leading-[20px] left-[23.5px] not-italic text-[#05df72] text-[14px] text-center text-nowrap top-0 translate-x-[-50%] whitespace-pre">Verified</p>
    </div>
  );
}

function Container6() {
  return (
    <div className="absolute bg-[rgba(5,223,114,0.2)] h-[28px] left-[150.5px] rounded-[1.67772e+07px] top-[-2px] w-[90.727px]" data-name="Container">
      <CheckCircleIcon />
      <Paragraph4 />
    </div>
  );
}

function Container7() {
  return (
    <div className="absolute h-[28px] left-0 top-0 w-[625.563px]" data-name="Container">
      <Paragraph3 />
      <Container6 />
    </div>
  );
}

function Paragraph5() {
  return (
    <div className="absolute h-[24px] left-[-5.61px] top-[30px] w-[183.211px]" data-name="Paragraph">
      <p className="absolute font-['Arial:Regular',sans-serif] leading-[24px] left-[92px] not-italic text-[16px] text-[rgba(255,255,255,0.6)] text-center text-nowrap top-0 translate-x-[-50%] whitespace-pre">Currently enrolled student</p>
    </div>
  );
}

function Container8() {
  return (
    <div className="absolute h-[60px] left-[104px] top-[10px] w-[625.563px]" data-name="Container">
      <Container7 />
      <Paragraph5 />
    </div>
  );
}

function Group3() {
  return (
    <div className="absolute contents inset-[8.33%_12.5%]" data-name="Group">
      <div className="absolute inset-[45.83%_12.5%_8.33%_12.5%]" data-name="Vector">
        <div className="absolute inset-[-9.09%_-5.56%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 9">
            <path d={svgPaths.p1762b680} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.5" strokeWidth="1.33333" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[8.33%_29.17%_54.17%_29.17%]" data-name="Vector">
        <div className="absolute inset-[-11.11%_-10%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8 8">
            <path d={svgPaths.p381b5500} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.5" strokeWidth="1.33333" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Icon3() {
  return (
    <div className="h-[16px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <Group3 />
    </div>
  );
}

function LockIcon() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[12px] size-[16px] top-[10px]" data-name="LockIcon">
      <Icon3 />
    </div>
  );
}

function Paragraph6() {
  return (
    <div className="absolute h-[20px] left-[37.36px] top-[6.5px] w-[104.281px]" data-name="Paragraph">
      <p className="absolute font-['Arial:Regular',sans-serif] leading-[20px] left-[52.5px] not-italic text-[14px] text-[rgba(255,255,255,0.5)] text-center text-nowrap top-0 translate-x-[-50%] whitespace-pre">Non-transferable</p>
    </div>
  );
}

function Container9() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.05)] h-[36px] left-0 rounded-[10px] top-0 w-[153.438px]" data-name="Container">
      <LockIcon />
      <Paragraph6 />
    </div>
  );
}

function Group4() {
  return (
    <div className="absolute contents inset-[8.33%_16.67%_8.32%_16.67%]" data-name="Group">
      <div className="absolute inset-[8.33%_16.67%_8.32%_16.67%]" data-name="Vector">
        <div className="absolute inset-[-5%_-6.25%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 15">
            <path d={svgPaths.p3c6dae00} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.5" strokeWidth="1.33333" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Icon4() {
  return (
    <div className="h-[16px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <Group4 />
    </div>
  );
}

function ShieldIcon() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[12px] size-[16px] top-[10px]" data-name="ShieldIcon1">
      <Icon4 />
    </div>
  );
}

function Paragraph7() {
  return (
    <div className="absolute h-[20px] left-[37.23px] top-[6.5px] w-[42.539px]" data-name="Paragraph">
      <p className="absolute font-['Arial:Regular',sans-serif] leading-[20px] left-[21.5px] not-italic text-[14px] text-[rgba(255,255,255,0.5)] text-center text-nowrap top-0 translate-x-[-50%] whitespace-pre">Official</p>
    </div>
  );
}

function Container10() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.05)] h-[36px] left-0 rounded-[10px] top-[44px] w-[153.438px]" data-name="Container">
      <ShieldIcon />
      <Paragraph7 />
    </div>
  );
}

function Container11() {
  return (
    <div className="absolute h-[80px] left-[753.56px] top-0 w-[153.438px]" data-name="Container">
      <Container9 />
      <Container10 />
    </div>
  );
}

function Container12() {
  return (
    <div className="absolute h-[80px] left-[33px] top-[33px] w-[907px]" data-name="Container">
      <Container5 />
      <Container8 />
      <Container11 />
    </div>
  );
}

function Button1() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.1)] h-[146px] left-0 rounded-[24px] top-0 w-[973px]" data-name="Button">
      <Container4 />
      <Container12 />
    </div>
  );
}

function Container13() {
  return <div className="absolute bg-[rgba(255,255,255,0)] border border-[rgba(255,255,255,0.2)] border-solid h-[146px] left-0 rounded-[24px] shadow-[0px_20px_25px_-5px_rgba(0,0,0,0.1),0px_8px_10px_-6px_rgba(0,0,0,0.1)] top-0 w-[973px]" data-name="Container" />;
}

function Group5() {
  return (
    <div className="absolute contents inset-[8.33%_12.5%_12.5%_12.5%]" data-name="Group">
      <div className="absolute bottom-[12.5%] left-[37.5%] right-[37.5%] top-1/2" data-name="Vector">
        <div className="absolute inset-[-11.11%_-16.67%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 19">
            <path d={svgPaths.p4218400} id="Vector" stroke="var(--stroke-0, #FFB900)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3.33333" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[8.33%_12.5%_12.5%_12.5%]" data-name="Vector">
        <div className="absolute inset-[-5.26%_-5.56%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 34 35">
            <path d={svgPaths.p9450700} id="Vector" stroke="var(--stroke-0, #FFB900)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3.33333" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Icon5() {
  return (
    <div className="h-[40px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <Group5 />
    </div>
  );
}

function HomeIcon() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[20px] size-[40px] top-[20px]" data-name="HomeIcon">
      <Icon5 />
    </div>
  );
}

function Container14() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.1)] left-0 rounded-[16px] size-[80px] top-0" data-name="Container">
      <HomeIcon />
    </div>
  );
}

function Paragraph8() {
  return <div className="absolute h-[24px] left-[0.45px] top-0 w-[176.102px]" data-name="Paragraph" />;
}

function Group6() {
  return (
    <div className="absolute contents inset-[8.32%_8.32%_8.35%_8.34%]" data-name="Group">
      <div className="absolute inset-[8.32%_8.32%_8.35%_8.34%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-1.335px_-1.331px] mask-size-[16px_16px]" data-name="Vector" style={{ maskImage: `url('${imgVector}')` }}>
        <div className="absolute inset-[-5%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15 15">
            <path d={svgPaths.p2bf65000} id="Vector" stroke="var(--stroke-0, #05DF72)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[16.67%_8.33%_41.67%_37.5%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-6px_-2.667px] mask-size-[16px_16px]" data-name="Vector" style={{ maskImage: `url('${imgVector}')` }}>
        <div className="absolute inset-[-10%_-7.69%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 8">
            <path d={svgPaths.p178dac00} id="Vector" stroke="var(--stroke-0, #05DF72)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function ClipPathGroup1() {
  return (
    <div className="absolute contents inset-0" data-name="Clip path group">
      <Group6 />
    </div>
  );
}

function Icon6() {
  return (
    <div className="h-[16px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <ClipPathGroup1 />
    </div>
  );
}

function CheckCircleIcon1() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[12px] size-[16px] top-[6px]" data-name="CheckCircleIcon">
      <Icon6 />
    </div>
  );
}

function Paragraph9() {
  return (
    <div className="absolute h-[20px] left-[32.15px] top-[2.5px] w-[46.703px]" data-name="Paragraph">
      <p className="absolute font-['Arial:Regular',sans-serif] leading-[20px] left-[23.5px] not-italic text-[#05df72] text-[14px] text-center text-nowrap top-0 translate-x-[-50%] whitespace-pre">Verified</p>
    </div>
  );
}

function Container15() {
  return (
    <div className="absolute bg-[rgba(5,223,114,0.2)] h-[28px] left-[251.5px] rounded-[1.67772e+07px] top-0 w-[90.727px]" data-name="Container">
      <CheckCircleIcon1 />
      <Paragraph9 />
    </div>
  );
}

function Container16() {
  return (
    <div className="absolute h-[28px] left-0 top-0 w-[625.563px]" data-name="Container">
      <Paragraph8 />
      <p className="absolute font-['Arial:Bold',sans-serif] leading-[24px] left-[114px] not-italic text-[20px] text-center text-nowrap text-white top-[-1px] translate-x-[-50%] whitespace-pre">B40 Household Eligibility</p>
      <Container15 />
    </div>
  );
}

function Paragraph10() {
  return (
    <div className="absolute h-[24px] left-[-7.5px] top-[30px] w-[254.375px]" data-name="Paragraph">
      <p className="absolute font-['Arial:Regular',sans-serif] leading-[24px] left-[127.5px] not-italic text-[16px] text-[rgba(255,255,255,0.6)] text-center text-nowrap top-0 translate-x-[-50%] whitespace-pre">Qualified household income bracket</p>
    </div>
  );
}

function Container17() {
  return (
    <div className="absolute h-[60px] left-[104px] top-[10px] w-[625.563px]" data-name="Container">
      <Container16 />
      <Paragraph10 />
    </div>
  );
}

function Group7() {
  return (
    <div className="absolute contents inset-[8.33%_12.5%]" data-name="Group">
      <div className="absolute inset-[45.83%_12.5%_8.33%_12.5%]" data-name="Vector">
        <div className="absolute inset-[-9.09%_-5.56%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 9">
            <path d={svgPaths.p1762b680} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.5" strokeWidth="1.33333" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[8.33%_29.17%_54.17%_29.17%]" data-name="Vector">
        <div className="absolute inset-[-11.11%_-10%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8 8">
            <path d={svgPaths.p381b5500} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.5" strokeWidth="1.33333" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Icon7() {
  return (
    <div className="h-[16px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <Group7 />
    </div>
  );
}

function LockIcon1() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[12px] size-[16px] top-[10px]" data-name="LockIcon">
      <Icon7 />
    </div>
  );
}

function Paragraph11() {
  return (
    <div className="absolute h-[20px] left-[37.36px] top-[6.5px] w-[104.281px]" data-name="Paragraph">
      <p className="absolute font-['Arial:Regular',sans-serif] leading-[20px] left-[52.5px] not-italic text-[14px] text-[rgba(255,255,255,0.5)] text-center text-nowrap top-0 translate-x-[-50%] whitespace-pre">Non-transferable</p>
    </div>
  );
}

function Container18() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.05)] h-[36px] left-0 rounded-[10px] top-0 w-[153.438px]" data-name="Container">
      <LockIcon1 />
      <Paragraph11 />
    </div>
  );
}

function Group8() {
  return (
    <div className="absolute contents inset-[8.33%_16.67%_8.32%_16.67%]" data-name="Group">
      <div className="absolute inset-[8.33%_16.67%_8.32%_16.67%]" data-name="Vector">
        <div className="absolute inset-[-5%_-6.25%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 15">
            <path d={svgPaths.p251dabf0} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.5" strokeWidth="1.33333" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Icon8() {
  return (
    <div className="h-[16px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <Group8 />
    </div>
  );
}

function ShieldIcon1() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[12px] size-[16px] top-[10px]" data-name="ShieldIcon2">
      <Icon8 />
    </div>
  );
}

function Paragraph12() {
  return (
    <div className="absolute h-[20px] left-[37.23px] top-[6.5px] w-[42.539px]" data-name="Paragraph">
      <p className="absolute font-['Arial:Regular',sans-serif] leading-[20px] left-[21.5px] not-italic text-[14px] text-[rgba(255,255,255,0.5)] text-center text-nowrap top-0 translate-x-[-50%] whitespace-pre">Official</p>
    </div>
  );
}

function Container19() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.05)] h-[36px] left-0 rounded-[10px] top-[44px] w-[153.438px]" data-name="Container">
      <ShieldIcon1 />
      <Paragraph12 />
    </div>
  );
}

function Container20() {
  return (
    <div className="absolute h-[80px] left-[753.56px] top-0 w-[153.438px]" data-name="Container">
      <Container18 />
      <Container19 />
    </div>
  );
}

function Container21() {
  return (
    <div className="absolute h-[80px] left-[33px] top-[33px] w-[907px]" data-name="Container">
      <Container14 />
      <Container17 />
      <Container20 />
    </div>
  );
}

function Button2() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.1)] h-[146px] left-0 rounded-[24px] top-[170px] w-[973px]" data-name="Button">
      <Container13 />
      <Container21 />
    </div>
  );
}

function Container22() {
  return <div className="absolute bg-[rgba(255,255,255,0)] border border-[rgba(255,255,255,0.2)] border-solid h-[146px] left-0 rounded-[24px] shadow-[0px_20px_25px_-5px_rgba(0,0,0,0.1),0px_8px_10px_-6px_rgba(0,0,0,0.1)] top-0 w-[973px]" data-name="Container" />;
}

function Group9() {
  return (
    <div className="absolute contents inset-[8.33%_16.67%]" data-name="Group">
      <div className="absolute inset-[8.33%_16.67%]" data-name="Vector">
        <div className="absolute inset-[-5%_-6.25%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 30 37">
            <path d={svgPaths.p6d00e00} id="Vector" stroke="var(--stroke-0, #FFB900)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3.33333" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[29.17%_37.5%_45.83%_37.5%]" data-name="Vector">
        <div className="absolute inset-[-16.67%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
            <path d={svgPaths.p27674d80} id="Vector" stroke="var(--stroke-0, #FFB900)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3.33333" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Icon9() {
  return (
    <div className="h-[40px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <Group9 />
    </div>
  );
}

function MapPinIcon() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[20px] size-[40px] top-[20px]" data-name="MapPinIcon">
      <Icon9 />
    </div>
  );
}

function Container23() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.1)] left-0 rounded-[16px] size-[80px] top-0" data-name="Container">
      <MapPinIcon />
    </div>
  );
}

function Paragraph13() {
  return (
    <div className="absolute h-[24px] left-[-0.92px] top-0 w-[129.844px]" data-name="Paragraph">
      <p className="absolute font-['Arial:Bold',sans-serif] leading-[24px] left-[83.42px] not-italic text-[20px] text-center text-nowrap text-white top-0 translate-x-[-50%] whitespace-pre">Regional Eligibility</p>
    </div>
  );
}

function Group10() {
  return (
    <div className="absolute contents inset-[8.32%_8.32%_8.35%_8.34%]" data-name="Group">
      <div className="absolute inset-[8.32%_8.32%_8.35%_8.34%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-1.335px_-1.331px] mask-size-[16px_16px]" data-name="Vector" style={{ maskImage: `url('${imgVector}')` }}>
        <div className="absolute inset-[-5%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15 15">
            <path d={svgPaths.p2bf65000} id="Vector" stroke="var(--stroke-0, #05DF72)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[16.67%_8.33%_41.67%_37.5%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-6px_-2.667px] mask-size-[16px_16px]" data-name="Vector" style={{ maskImage: `url('${imgVector}')` }}>
        <div className="absolute inset-[-10%_-7.69%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 8">
            <path d={svgPaths.p178dac00} id="Vector" stroke="var(--stroke-0, #05DF72)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function ClipPathGroup2() {
  return (
    <div className="absolute contents inset-0" data-name="Clip path group">
      <Group10 />
    </div>
  );
}

function Icon10() {
  return (
    <div className="h-[16px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <ClipPathGroup2 />
    </div>
  );
}

function CheckCircleIcon2() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[12px] size-[16px] top-[6px]" data-name="CheckCircleIcon">
      <Icon10 />
    </div>
  );
}

function Paragraph14() {
  return (
    <div className="absolute h-[20px] left-[32.15px] top-[2.5px] w-[46.703px]" data-name="Paragraph">
      <p className="absolute font-['Arial:Regular',sans-serif] leading-[20px] left-[23.5px] not-italic text-[#05df72] text-[14px] text-center text-nowrap top-0 translate-x-[-50%] whitespace-pre">Verified</p>
    </div>
  );
}

function Container24() {
  return (
    <div className="absolute bg-[rgba(5,223,114,0.2)] h-[28px] left-[191.5px] rounded-[1.67772e+07px] top-0 w-[90.727px]" data-name="Container">
      <CheckCircleIcon2 />
      <Paragraph14 />
    </div>
  );
}

function Container25() {
  return (
    <div className="absolute h-[28px] left-0 top-0 w-[625.563px]" data-name="Container">
      <Paragraph13 />
      <Container24 />
    </div>
  );
}

function Paragraph15() {
  return (
    <div className="absolute h-[24px] left-[0.23px] top-[30px] w-[172.539px]" data-name="Paragraph">
      <p className="absolute font-['Arial:Regular',sans-serif] leading-[24px] left-[79.77px] not-italic text-[16px] text-[rgba(255,255,255,0.6)] text-center text-nowrap top-0 translate-x-[-50%] whitespace-pre">Location-based services</p>
    </div>
  );
}

function Container26() {
  return (
    <div className="absolute h-[60px] left-[104px] top-[10px] w-[625.563px]" data-name="Container">
      <Container25 />
      <Paragraph15 />
    </div>
  );
}

function Group11() {
  return (
    <div className="absolute contents inset-[8.33%_12.5%]" data-name="Group">
      <div className="absolute inset-[45.83%_12.5%_8.33%_12.5%]" data-name="Vector">
        <div className="absolute inset-[-9.09%_-5.56%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 9">
            <path d={svgPaths.p1762b680} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.5" strokeWidth="1.33333" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[8.33%_29.17%_54.17%_29.17%]" data-name="Vector">
        <div className="absolute inset-[-11.11%_-10%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8 8">
            <path d={svgPaths.p381b5500} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.5" strokeWidth="1.33333" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Icon11() {
  return (
    <div className="h-[16px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <Group11 />
    </div>
  );
}

function LockIcon2() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[12px] size-[16px] top-[10px]" data-name="LockIcon">
      <Icon11 />
    </div>
  );
}

function Paragraph16() {
  return (
    <div className="absolute h-[20px] left-[37.36px] top-[6.5px] w-[104.281px]" data-name="Paragraph">
      <p className="absolute font-['Arial:Regular',sans-serif] leading-[20px] left-[52.5px] not-italic text-[14px] text-[rgba(255,255,255,0.5)] text-center text-nowrap top-0 translate-x-[-50%] whitespace-pre">Non-transferable</p>
    </div>
  );
}

function Container27() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.05)] h-[36px] left-0 rounded-[10px] top-0 w-[153.438px]" data-name="Container">
      <LockIcon2 />
      <Paragraph16 />
    </div>
  );
}

function Group12() {
  return (
    <div className="absolute contents inset-[8.33%_16.67%_8.32%_16.67%]" data-name="Group">
      <div className="absolute inset-[8.33%_16.67%_8.32%_16.67%]" data-name="Vector">
        <div className="absolute inset-[-5%_-6.25%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 15">
            <path d={svgPaths.p23454300} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.5" strokeWidth="1.33333" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Icon12() {
  return (
    <div className="h-[16px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <Group12 />
    </div>
  );
}

function ShieldIcon2() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[12px] size-[16px] top-[10px]" data-name="ShieldIcon3">
      <Icon12 />
    </div>
  );
}

function Paragraph17() {
  return (
    <div className="absolute h-[20px] left-[37.23px] top-[6.5px] w-[42.539px]" data-name="Paragraph">
      <p className="absolute font-['Arial:Regular',sans-serif] leading-[20px] left-[21.5px] not-italic text-[14px] text-[rgba(255,255,255,0.5)] text-center text-nowrap top-0 translate-x-[-50%] whitespace-pre">Official</p>
    </div>
  );
}

function Container28() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.05)] h-[36px] left-0 rounded-[10px] top-[44px] w-[153.438px]" data-name="Container">
      <ShieldIcon2 />
      <Paragraph17 />
    </div>
  );
}

function Container29() {
  return (
    <div className="absolute h-[80px] left-[753.56px] top-0 w-[153.438px]" data-name="Container">
      <Container27 />
      <Container28 />
    </div>
  );
}

function Container30() {
  return (
    <div className="absolute h-[80px] left-[33px] top-[33px] w-[907px]" data-name="Container">
      <Container23 />
      <Container26 />
      <Container29 />
    </div>
  );
}

function Button3() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.1)] h-[146px] left-0 rounded-[24px] top-[340px] w-[973px]" data-name="Button">
      <Container22 />
      <Container30 />
    </div>
  );
}

function Container31() {
  return (
    <div className="h-[486px] relative shrink-0 w-full" data-name="Container">
      <Button1 />
      <Button2 />
      <Button3 />
    </div>
  );
}

function Paragraph18() {
  return (
    <div className="h-[20px] relative shrink-0 w-[147.344px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid h-[20px] relative w-[147.344px]">
        <p className="absolute font-['Arial:Regular',sans-serif] leading-[20px] left-[74px] not-italic text-[#1c398e] text-[18px] text-center text-nowrap top-0 translate-x-[-50%] whitespace-pre">View Available Services</p>
      </div>
    </div>
  );
}

function Button4() {
  return (
    <div className="bg-[#ffb900] h-[64px] relative rounded-[14px] shrink-0 w-[275.344px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex h-[64px] items-center justify-center relative w-[275.344px]">
        <Paragraph18 />
      </div>
    </div>
  );
}

function Paragraph19() {
  return (
    <div className="h-[20px] relative shrink-0 w-[205.445px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid h-[20px] relative w-[205.445px]">
        <p className="absolute font-['Arial:Regular',sans-serif] leading-[20px] left-[103px] not-italic text-[18px] text-center text-nowrap text-white top-0 translate-x-[-50%] whitespace-pre">{`Check Application `}</p>
      </div>
    </div>
  );
}

function Button5() {
  return (
    <div className="bg-[rgba(59,130,246,0.8)] h-[64px] relative rounded-[14px] shrink-0 w-[303.445px]" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.2)] border-solid inset-0 pointer-events-none rounded-[14px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex h-[64px] items-center justify-center p-px relative w-[303.445px]">
        <Paragraph19 />
      </div>
    </div>
  );
}

function Container32() {
  return (
    <div className="content-stretch flex gap-[24px] h-[64px] items-center justify-end relative shrink-0 w-full" data-name="Container">
      <Button4 />
      <Button5 />
    </div>
  );
}

function EligibilityWallet() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[32px] h-[770px] items-start left-[184.5px] overflow-clip pb-0 pt-[48px] px-[48px] top-0 w-[1069px]" data-name="EligibilityWallet">
      <Container3 />
      <Container31 />
      <Container32 />
    </div>
  );
}

function App() {
  return (
    <div className="h-[770px] overflow-clip relative shrink-0 w-full" data-name="App">
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

import React from 'react';

export const DMED_PRIMARY = '#0066CC';

export const UzbekistanEmblem: React.FC<{ className?: string }> = ({ className = "w-24 h-24" }) => (
  <img 
    src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/Emblem_of_Uzbekistan.svg/512px-Emblem_of_Uzbekistan.svg.png" 
    alt="Gerb" 
    className={className} 
    crossOrigin="anonymous" 
    referrerPolicy="no-referrer"
  />
);

export const DMED_LOGO_URL = "https://drive.google.com/uc?export=download&id=17fkMebltybxPCwRqzjTCAU6brkLcJYSw";

export const DMEDCross: React.FC<{ className?: string }> = ({ className = "w-6 h-6" }) => (
  <img 
    src={DMED_LOGO_URL} 
    alt="DMED Cross" 
    className={`${className} object-contain`}
    crossOrigin="anonymous"
    referrerPolicy="no-referrer"
  />
);

export const DMEDLogo: React.FC<{ className?: string }> = ({ className = "" }) => (
  <div className={`flex items-center gap-2 ${className}`}>
    <div className="w-10 h-10 shrink-0 flex items-center justify-center">
      <img 
        src={DMED_LOGO_URL} 
        alt="DMED Logo" 
        className="w-full h-full object-contain"
        crossOrigin="anonymous"
        referrerPolicy="no-referrer"
        style={{ display: 'block' }}
      />
    </div>
    <span className="font-bold text-3xl tracking-tighter text-[#0066CC] leading-none">DMED</span>
  </div>
);

export const DEFAULT_CERT_DATA: any = {
  clinicName: "56 - sonli oilaviy poliklinika",
  registrationDate: "01.02.2026",
  certificateNumber: "01ТШ 007204125",
  tibbiyMuassasaNomi: "56 - sonli oilaviy poliklinika",
  
  patientFullName: "TAGANOV BEHZOD MARKS O‘G‘LI",
  patientGender: "erkak",
  patientPinfl: "51612047310013",
  patientAge: "20",
  relativesRelation: "O‘zi",
  
  childFullName: "-",
  childGender: "-",
  childPinfl: "-",
  childAge: "-",

  address: "Toshkent shahri, Mirobod tumani, Саракул 3 в 15",
  workOrStudyPlace: "ТДТрУ",
  assignedClinic: "Yunusobod tumani 56-sonli oilaviy poliklinika",
  reason: "Kasallik",
  diagnosisInitialCode: "J20.9",
  diagnosisInitialName: "Аниқlanmagan o‘tkir bronxit",
  doctorFullName: "O‘RINOV M.CH.",
  departmentHeadFullName: "RUZIYEVA M.E.",
  diagnosisFinalCode: "J20.9",
  diagnosisFinalName: "Аниқlanmagan o‘tkir bronxit",
  vmkChairFullName: "MUSIRMANKULOVA X.S.",
  contactInfectious: "Yo'q",
  tiekCheckDate: "-",
  tiekConclusion: "-",
  tiekChairFullName: "MUSIRMANKULOVA X.S.",
  tartib: "Ambulator",
  tartibNotes: "-",
  releasedDays: [
    { start: "25.11.2025", end: "01.12.2025" }
  ],
  temporaryOtherJob: "Yo'q",
  otherCityPermission: "Yo'q",
  certificateInstitutionType: "Oliygoh",
  certificateInstitutionName: "TDTU"
};

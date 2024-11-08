interface EducationEmployment {
  level: string;
  employmentStatus: string;
  sector: string;
  employmentDuration: string;
  officeEmail: string;
  monthlyIncome: string;
  loanRepayment: number;
}

interface Socials {
  twitter: string;
  facebook: string;
  instagram: string;
}

interface Guarantor {
  fullName: string;
  phoneNumber: string;
  relationship: string;
}

interface ApiData {
  userId: string;
  organizationName: string;
  fullName: string;
  email: string;
  phoneNumber: string;
  bvn: string;
  gender: string;
  maritalStatus: string;
  children: number;
  residenceType: string;
  dateJoined: string;
  bank: string;
  accountBalance: number;
  userTier: number;
  status: string;
  educationEmployment: EducationEmployment;
  socials: Socials;
  guarantor: Guarantor;
}

interface ApiDataRecord {
  userKey: string;
  data: ApiData[];
}

export type { EducationEmployment, Socials, Guarantor, ApiData, ApiDataRecord };

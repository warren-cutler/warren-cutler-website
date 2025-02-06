

export type Project = {
  id: number;
  name: string;
  description: string;
  imagePath: string;
  linkUrl?: string;
  status: string;
};

export type Job = {
  id: number;
  company: string;
  companyLogo: string;
  companyUrl: string;
  location: string;
  roles: Role[];
}

export type Role = {
  title: string;
  dateStart: Date;
  dateEnd: Date;
  details: string[];
}
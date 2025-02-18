

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
  logo: string;
  url: string;
  location: string;
  roles: Role[];
}

export type Role = {
  title: string;
  dateStart: Date;
  dateEnd: Date;
  details: string[];
}

export type Education = {
  id: number;
  school: string;
  logo: string;
  url: string;
  location: string;
  degree: string;
  dateEnd: Date;
}
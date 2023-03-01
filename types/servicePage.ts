export interface ServiceI {
  id: number;
  title: string;
  picture: {
    mobile?: string;
    landscape: string;
  };
  options: string;
}
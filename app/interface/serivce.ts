export interface IService {
  id: number;
  title: string;
  icon: React.ReactElement;
  price: string;
  duration: string;
  link: string;
  services: TService[];
}

type TService = {
  id: number;
  title: string;
};

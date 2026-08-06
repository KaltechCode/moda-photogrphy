export interface IMenuDT {
  id: number;
  title: string;
  link: string;
  dropdown_menus?: {
    title: string;
    link: string;
  }[];
}
[];

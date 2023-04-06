import { ReactHTMLElement } from "react";

export enum SelectedPage{
    Home = "home",
    Bio = "bio",
    Specs = "specs",
    Modern = "modern",
    ContactUs = "contactus"
  }

  export interface DescriptionType{
    picture: string;
    title: string;
    body: string,
    link: React.ReactNode;
  }

  export interface SpecType{
    name: string;
    description: string;
    image: string;
  }
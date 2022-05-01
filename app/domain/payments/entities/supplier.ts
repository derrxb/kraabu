import { EKyash } from "./ekyash";

type Props = {
  id: number;
  name: string;
  tag: string;
  logo_url: string;
  homepage: string;
  ekyash?: EKyash;
};

export class Supplier {
  id: number;
  name: string;
  tag: string;
  logo_url: string;
  homepage: string;
  ekyash?: EKyash;

  constructor({ id, name, tag, logo_url, homepage, ekyash }: Props) {
    this.id = id;
    this.name = name;
    this.tag = tag;
    this.logo_url = logo_url;
    this.homepage = homepage;
    this.ekyash = ekyash;
  }

  json() {
    return {
      id: this.id,
      name: this.name,
      tag: this.tag,
      logo_url: this.logo_url,
      homepage: this.homepage,
      ekyash: this.ekyash?.json(),
    };
  }
}

type Props = {
  id: number;
  name: string;
  tag: string;
  logo_url: string;
  homepage: string;
};

export class Supplier {
  id: number;
  name: string;
  tag: string;
  logo_url: string;
  homepage: string;

  constructor({ id, name, tag, logo_url, homepage }: Props) {
    this.id = id;
    this.name = name;
    this.tag = tag;
    this.logo_url = logo_url;
    this.homepage = homepage;
  }

  json() {
    return {
      id: this.id,
      name: this.name,
      tag: this.tag,
      logo_url: this.logo_url,
      homepage: this.homepage,
    };
  }
}

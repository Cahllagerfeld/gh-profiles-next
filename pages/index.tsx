import type { List } from "../types/list.interface";
import Listitem from "../components/landing-page/list-item";
import path from "path";
import fs from "fs";

export async function getStaticProps() {
  const dataDirectory = path.join(process.cwd(), "public", "data");
  const files = fs.readdirSync(dataDirectory);

  const profiles = files.map((file) => {
    const data = JSON.parse(
      fs.readFileSync(
        `${path.join(process.cwd(), "public", "data", file)}`,
        "utf8"
      )
    );
    return {
      username: file.split(".")[0],
      ...data,
    };
  });
  const output = profiles.map((profile) => ({
    ...profile,
  }));

  return {
    props: { list: output },
  };
}

export interface HomeProps {
  list: List.ListItem[];
}

const Home = ({ list }: HomeProps) => {
  return (
    <>
      {list.map((listEl) => (
       <Listitem item={listEl}/>
      ))}
    </>
  );
};

export default Home;

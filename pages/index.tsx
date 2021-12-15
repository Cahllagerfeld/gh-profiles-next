import type { ListItem } from "../types/list.interface";
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
    name: profile.name,
    username: profile.username,
    job: profile.job,
  }));

  return {
    props: { list: output },
  };
}

export interface HomeProps {
  list: ListItem.ListItem[];
}

const Home = ({ list }: HomeProps) => {
  return (
    <>
      {list.map((listEl) => (
        <p key={listEl.username}>
          {JSON.stringify(listEl)}
        </p>
      ))}
    </>
  );
};

export default Home;

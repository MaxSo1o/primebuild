import Head from "@/pages/index/Head";
import logo from "@/public/image/logo.svg"
import Body from "@/pages/index/Body";
import Footer from "@/pages/index/Footer";

const linksMenu = await Api();

export async function Api() {
    const res = await fetch('http://79.174.86.248:1337/api/menus?populate=image');
    const menu = await res.json();
    const links = await menu.data.map((item: { id: number, link: string, title: string, image: [{url: string}]}) => ({
        id: item.id,
        link: item.link,
        title: item.title,
        url: item.image[0].url,
    }));
    return links;
}

export default function Home() {
    Api();
    return (
      <>
          <Head logo={logo} />
          <Body links={linksMenu} />
          <Footer/>
      </>
  );
}

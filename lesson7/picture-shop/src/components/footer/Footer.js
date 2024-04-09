import footerStyle from "./footer.module.css";

const footerInfo = {
  style: footerStyle.footer,
  text: 'Some center aligned info 2024'
}

export default function Footer() {
  return <footer className={footerInfo.style}>{footerInfo.text}</footer>;
}

function Section({ refLink, style, title, text, links, onClickSection }) {
  return (
    <div ref={refLink} className={style}>
      <h2>{title}</h2>
      <p>{text}</p>
      {links.map((link) => (
        <a key={link.value} href={link.value} onClick={() => onClickSection(link.ref.current)}>
          {link.text}
        </a>
      ))}
    </div>
  );
}

export default Section;

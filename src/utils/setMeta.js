export default function setMeta (name, content) {
  let metaTag = document.querySelector(`meta[name="${name}"]`);
  if (!metaTag) {
    metaTag = document.createElement('meta');
    metaTag.name = name;
    document.head.appendChild(metaTag);
  }
  metaTag.content = content;
};

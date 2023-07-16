import { Remarkable } from 'remarkable';

const md = new Remarkable();

function renderMarkdownToHTML(markdown) {
  const renderedHTML = md.render(markdown);
  return {__html: renderedHTML};
}

export const CardAboutMe = ({ aboutUser }) => {
  const markup = renderMarkdownToHTML(aboutUser.description_md);
    return (
        <div dangerouslySetInnerHTML={ markup } />
    )
}

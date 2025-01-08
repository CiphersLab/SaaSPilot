import DOMPurify from 'isomorphic-dompurify';

// Function to sanitize HTML and replace `classname` with `className` for React
export const convertToHTML = (text: string) => {
  // Sanitize the HTML content
  let sanitizedHTML = DOMPurify.sanitize(text, {
    ALLOWED_ATTR: ['className', 'class', 'id', 'style', 'src', 'href'],
  });

  // Replace 'classname' with 'className' after sanitization
  // sanitizedHTML = sanitizedHTML.replace(/classname/g, 'className');

  return sanitizedHTML;
};
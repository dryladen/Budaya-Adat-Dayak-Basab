import { RichTextField } from "@prismicio/client";
import {
  JSXMapSerializer,
  PrismicRichText,
  PrismicLink,
} from "@prismicio/react";

export const richTextComponents: JSXMapSerializer = {
  label: ({ node, children }) => {
    if (node.data.label === "codespan") {
      return <code>{children}</code>;
    }
  },
  heading1: ({ children }) => (
    <h1 className="font-bold text-6xl">{children}</h1>
  ),
  heading2: ({ children }) => <h2 className="font-bold text-4xl">{children}</h2>,
  heading3: ({ children }) => <h3 className="font-bold text-2xl">{children}</h3>,
  heading4: ({ children }) => <h4 className="font-bold text-xl">{children}</h4>,
  heading5: ({ children }) => <h5 className="font-bold text-lg">{children}</h5>,
  heading6: ({ children }) => <h6 className="font-bold text-md">{children}</h6>,
  paragraph: ({ children }) => <p className="mt-3">{children}</p>,
  hyperlink: ({ children, node }) => (
    <PrismicLink field={node.data} className="font-bold underline">
      {children}
    </PrismicLink>
  ),
};

interface RichTextProps {
  field: RichTextField;
}

export const RichText = ({ field }: RichTextProps) => {
  return <PrismicRichText field={field} components={richTextComponents} />;
};
type TextNode = {
    type: 'text';
    text: string;
};

type ParagraphNode = {
    type: 'paragraph';
    children: TextNode[];
};

type RichTextNode = ParagraphNode; // Extend as necessary
export type RichTextContent = RichTextNode[];

// Recursive function to render the rich text structure
export const renderContent = (content: RichTextContent) => {
    return content.map((block, index) => {
        switch (block.type) {
            case 'paragraph':
                return (
                    <p key={index} className="mb-4">
                        {block.children.map((child) => {
                            return child.type === 'text' ? child.text : null;
                        })}
                    </p>
                );
            default:
                return null;
        }
    });
};
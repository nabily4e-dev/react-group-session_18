import React from "react";

interface Book {
  id: number;
  title: string;
  author: string;
}

interface BookshelfProps {
  books: Book[];
}

const Bookshelf = (props: BookshelfProps): React.FC => {
  return (
    <section>
      {props.books.map((book) => (
        <React.Fragment key={book.id}>
          <h1>{book.title}</h1>
          <h2>{book.author}</h2>
        </React.Fragment>
      ))}
    </section>
  );
};

export default Bookshelf;

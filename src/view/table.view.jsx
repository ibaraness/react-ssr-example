import React from 'react';

const data = {
    albumId: 1,
    id: 1,
    title: "accusamus beatae ad facilis cum similique qui sunt",
    url: "http://placehold.it/600/92c952",
    thumbnailUrl: "http://placehold.it/150/92c952"
}

export class TableCellView extends React.Component {
    render () {
      return (
        <div className="table-row">
            <div>{data.albumId}</div>
            <div>{data.id}</div>
            <div>{data.title}</div>
            <img src={data.thumbnailUrl} />
        </div>
        );
    }
  }
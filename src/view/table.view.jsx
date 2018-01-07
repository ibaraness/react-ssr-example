import React from 'react';

export class TableCellView extends React.Component {
    render () {
        const cellData = this.props.cellData || {};
      return (
        <div className="table-row">
            <div>{cellData.albumId}</div>
            <div>{cellData.id}</div>
            <div>{cellData.title}</div>
            <img src={cellData.thumbnailUrl} />
        </div>
        );
    }
  }
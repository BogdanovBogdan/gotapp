import React from 'react';

export default function View({ item }) {
  const { name, gender, born, died, culture } = item;
  return (
    <>
      <h4>Random Character: { name }</h4>
      <ul className="list-group list-group-flush">
        <li className="list-group-item d-flex justify-content-between">
          <span className="term">Gender </span>
          <span>{ gender || <i>no data</i> }</span>
        </li>
        <li className="list-group-item d-flex justify-content-between">
          <span className="term">Born </span>
          <span>{ born || <i>no data</i> }</span>
        </li>
        <li className="list-group-item d-flex justify-content-between">
          <span className="term">Died </span>
          <span>{ died || <i>no data</i> }</span>
        </li>
        <li className="list-group-item d-flex justify-content-between">
          <span className="term">Culture </span>
          <span>{ culture || <i>no data</i> }</span>
        </li>
      </ul>
    </>
  )
}
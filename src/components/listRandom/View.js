import React from 'react';

export default function View({ item }) {
  const exclusionValue = ['nameObject', 'id'];
  return (
    <>
      <h4>Random { item.nameObject }: { item.name }</h4>
      <ul className="list-group list-group-flush">
        { Object.entries(item).map(([key, value]) => {
          if (exclusionValue.includes(key)) return null;
          const stringValue = Array.isArray(value) ? value.join(',') : value;

          return (
            <li key={key} className="list-group-item d-flex justify-content-between">
              <span className="term">{ key }</span>
              <span>{ (stringValue.length && stringValue) || <i>no data</i> }</span>
            </li>
          )
        }) }
      </ul>
    </>
  )
}
"use client";

import { useState } from "react";
import { Table } from "react-bootstrap";

export default function Calculator() {
  const [total, setTotal] = useState(3);

  return (
    <div>
      <Table className="calculator" bordered>
        <thead>
          <tr>
            <td colSpan={4}>Calculatrice</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td colSpan={4}>
              <input value={total} className="form-control text-end" disabled />
            </td>
          </tr>
          <tr>
            <td>AC</td>
            <td>R</td>
            <td>%</td>
            <td>/</td>
          </tr>
          <tr>
            <td>7</td>
            <td>8</td>
            <td>9</td>
            <td>x</td>
          </tr>
          <tr>
            <td>4</td>
            <td>5</td>
            <td>6</td>
            <td>-</td>
          </tr>
          <tr>
            <td>1</td>
            <td>2</td>
            <td>3</td>
            <td>+</td>
          </tr>
          <tr>
            <td></td>
            <td>0</td>
            <td>,</td>
            <td className="calcultor-equal">=</td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
}

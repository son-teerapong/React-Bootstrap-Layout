import React from 'react'
import LayoutPage from './components/layoutPage/LayoutPage'

export default function App() {
  return (
    <div>
      <ul><h3>Containers</h3>
      <ol>{`container จะขยายขนาดความกว้างปรับไปตามขนาดหน้าจอ โดยมีช่องว่างซ้ายขวา (padding) ข้างละ 15px`}</ol>
      <ol>{`container-fluid จะขยายขนาดความกว้างเต็มจอเสมอ โดยมีช่องว่างซ้ายขวา (padding) ข้างละ 15px`}</ol>
      </ul>
      <ul><h3>Responsive breakpoints</h3>
      <ol>{`xs ขนาดเล็กที่สุด  เช่น อุปกรณ์ขนาดเล็กมาก หรือจอเมือถือในแนวตั้งที่ขนาด  < 576px`}</ol>
      <ol>{`sm ขนาดเล็ก เช่น  อุปกรณ์ขนาดเล็ก หรือ จอมือถือในแนวนอนที่ขนาด >= 576px และ < 768px`}</ol>
      <ol>{`md ขนาดปานกลาง เช่น แท็บเล็ทขนาดหน้าจอ >= 768px และ < 992px`}</ol>
      <ol>{`lg ขนาดใหญ่ เช่น คอมพิวเตอร์ขนาดหน้าจอ >= 992px และ < 1200px`}</ol>
      <ol>{`xl ขนาดใหญ่ที่สุด เช่น คอมพิวเตอร์หน้าจอขนาดใหญ่ >= 1200px ขึ้นไป`}</ol>
      </ul>
      <hr/>
      <LayoutPage/>
    </div>
  )
}

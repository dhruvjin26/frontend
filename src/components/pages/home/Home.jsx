import React from "react";
import Department from "./Department";

const departments = [{department:"CSE", src:"/public/dept-1.png" },{department:"ISE", src:"/public/dept-2.png" },{department:"AI&ML", src:"/public/dept-3.png" } ,{department:"ECE", src:"/public/dept-4.png" } , {department:"ME", src:"/public/dept-5.png" },{department:"CIVIL", src:"/public/dept-6.png" } ,{department:"EEE", src:"/public/dept-7.png" } ,  {department:"ETE", src:"/public/dept-8.png" },{department:"EIE", src:"/public/dept-9.png" }, {department:"IEM", src:"/public/dept-10.png" }]

export default function Home() {
    return (
        <div>
        <h1>Deparments </h1>



        <div>{departments.map(department => <Department key= {department} name={department.department} src={department.src} />)}</div>
        </div>
    );
}
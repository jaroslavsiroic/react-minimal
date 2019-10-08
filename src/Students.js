import React, { Component } from "react";
import teachers from "../example.json";

export default class Students extends Component {
    state = {
        teachers: teachers,
        students: []
    };

    componentDidMount() {
        this.all();
    }

    all = () => {
        this.setState((prevState, props) => {
            let students = [];
            prevState.teachers.map(teacher =>
                teacher.students.map(student => students.push(student))
            );
            return {
                students: students
            };
        });
    };

    sort = () => {
        this.setState((prevState, props) => {
            return {
                students: prevState.students.sort((a, b) => {
                    let x = a.name.toLowerCase();
                    let y = b.name.toLowerCase();
                    if (x < y) {
                        return -1;
                    }
                    if (x > y) {
                        return 1;
                    }
                    return 0;
                })
            };
        });
    };

    old = () => {
        this.setState((prevState, props) => {
            let students = [];
            prevState.teachers.map(
                teacher =>
                    teacher.active &&
                    teacher.students.map(
                        student => student.age > 20 && students.push(student)
                    )
            );
            return {
                students: students
            };
        });
    };

    render() {
        return (
            <div style={{ padding: "20px" }}>
                <p>Students Component:</p>
                <button onClick={this.all}>All students</button>
                <button onClick={this.sort}>Sort students</button>
                <button onClick={this.old}>Old students</button>
                {this.state.students.map((s, i) => (
                    <p key={i}>{`${s.name} ${s.age} lat`}</p>
                ))}
            </div>
        );
    }
}

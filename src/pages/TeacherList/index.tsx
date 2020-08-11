import React, { useState, FormEvent } from "react";
import "./styles.css";
import PageHeader from "../../components/Pageheader";
import TeacherItem,{Teacher} from "../../components/TeacherItem";
import Input from "../../components/Input";
import Select from "../../components/Select";
import api from "../../services/api";



interface TeacherItemProps{
  teacher: Teacher;
}

function TeacherList() {
  const [teachers,setTeachers] = useState([]);
  const [subject, setSubject] = useState("");
  const [week_day, setWeekDay] = useState("");
  const [time, setTime] = useState("");

async function searchTeachers(e: FormEvent){
e.preventDefault();

const resp = await api.get('classes',{params: {subject,week_day,time}})
setTeachers(resp.data);

// ciencias domingo 2:00
console.log(resp.data);

}

  return (
    <div id="page-teacher-list" className="container">
      <PageHeader title="Estes são os proffys disponíveis">
        <form id="search-teachers" onSubmit={searchTeachers}>
          <Select
            name="subject"
            label="Matéria"
            value={subject}
            onChange={(e) => {
              setSubject(e.target.value);
            }}
            options={[
              { value: "Artes", label: "Artes" },
              { value: "Biologia", label: "Biologia" },
              { value: "Ciências", label: "Ciencias" },
              { value: "Educação Física", label: "Educação Física" },
              { value: "Geografia", label: "Geografia" },
              { value: "Português", label: "Português" },
              { value: "Química", label: "Química" },
            ]}
          ></Select>
          <Select
            name="week_day"
            label="Dia da semana"
            value={week_day}
            onChange={(e) => {
              setWeekDay(e.target.value);
            }}
            options={[
              { value: "0", label: "Domingo" },
              { value: "1", label: "Segunda" },
              { value: "2", label: "Terça" },
              { value: "3", label: "Quarta" },
              { value: "4", label: "Quinta" },
              { value: "5", label: "Sexta" },
              { value: "6", label: "Sábado" },
            ]}
          ></Select>
          <Input
            name="time"
            type="time"
            label="Horas"
            value={time}
            onChange={(e) => {
              setTime(e.target.value);
            }}
          />

          <button type="submit">
            Buscar
          </button>
        </form>
      </PageHeader>

      <main>
        { teachers.map((teacher: Teacher) => {
         return <TeacherItem  key={teacher.id} teacher = {teacher}></TeacherItem>;
        })}
      </main>
    </div>
  );
}

export default TeacherList;

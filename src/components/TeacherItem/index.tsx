
import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';
import './styles.css';

function TeacherItem(){
    return(
<article className="teacher-item">
 <header>
   <img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80" alt="Milena" className="teacherImg" ></img>

   <div>
     <strong>Diego Fernandos</strong>
     <span>Química</span>
   </div>
 </header>
 <p>
   Entusiasta das melhores tecnologias de química avançada. <br />
   <br />
Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências. Mais de 200.000 pessoas já passaram por uma das minhas explosões.

</p>
 <footer>
   <p>
     Preço/Hora
<strong>R$ 80,00</strong>
   </p>
   <button type="button">
     <img src={whatsappIcon} alt="Whatsapp" >

     </img>
Entrar em Contato
   </button>
 </footer>
</article>
    );
}


export default TeacherItem;


 
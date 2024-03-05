// import React from "react";

// const Tabela = ({ dados }) => {
//   return (
//     <table>
//       <thead>
//         <tr>
//           <th>Nome</th>
//           <th>Sobrenome</th>
//           <th>Email</th>
//           <th>Cidade</th>
//           <th>Estado</th>
//           <th>Cep</th>
//           <th>Mensagem</th>
//         </tr>
//       </thead>
//       <tbody>
//         {dados.map((item, index) => (
//           <tr key={index}>
//             <td>{item.nome}</td>
//             <td>{item.sobrenone}</td>
//             <td>{item.email}</td>
//             <td>{item.cidade}</td>
//             <td>{item.estado}</td>
//             <td>{item.cep}</td>
//             <td>{item.mensagem}</td>
//           </tr>
//         ))}
//       </tbody>
//     </table>
//   );
// };
// export default Tabela;
import React from "react";
import { Container } from "react-bootstrap";
import "../tabela.css";

const Tabela = ({ dados }) => {
  return (
    <Container className="boxtabela">
      <table className="text-center" style={{ color: "white" }}>
        <thead className="text-center">
          <tr>
            <th>Nome</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {dados.map((item, index) => (
            <tr key={index}>
              <td>{item.nome}</td>
              <td>{item.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </Container>
  );
};
export default Tabela;

// SPDX-License-Identifier: UNLICENSED
pragma solidity 0.8.27;

contract HelloWorld {

   // Emtiido quando a função update é chamada
   event UpdatedMessages(string oldStr, string newStr);

   // Variável `message` do rtipo `string`.   
   string public message;

   // Construtor
   constructor(string memory initMessage) {
      message = initMessage;
   }

   // Função pública que atualiza a string de mensagem
   function update(string memory newMessage) public {
      string memory oldMsg = message;
      message = newMessage;
      emit UpdatedMessages(oldMsg, newMessage);
   }
}
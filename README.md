# GoBarber_Mobile
Versão mobile do GoBarber com React-native, com ensinamentos da [Rocketseat](https://rocketseat.com.br/).
A diferença do GoBarber original é o uso do [react-navigation v5](https://reactnavigation.org/docs/getting-started), o que trouxe diversas alterações na forma que foi montado as páginas e rotas.

Inicialmente para baixar as dependências, você precisa rodar:

```
yarn install
```
e configurar o axios para o tipo de emulador que você vai estar usando:

```
import axios from 'axios';

/* Endereços para cada emulador/simulador:
** Genymotion:              http://10.0.3.2:3333/
** Emulador Android Studio: http://10.0.2.2:3333/
** Simulador IOS:           http://localhost:3333/
*/
const api = axios.create({
  baseURL: 'http://localhost:3333/',
});

export default api;

```
Caso não saiba como configurar o emulador, segue o [tutorial](https://react-native.rocketseat.dev/) da própria Rocketseat.

Estando todas as coisas configurados, você precisa rodar para instalar o aplicativo no emulador:
```
yarn react-native run-android
ou
yarn react-native run-ios
```
e estando com o aplicativo já no emulador, sem nenhuma dependência nova ou conflito, rodar:
```
yarn react-native start
```

Agora, rodando o emulador e a aplicação, você precisa certificar-se de estar rodando o [backend](https://github.com/RenatoDTH/GoBarber_Backend) para poder utilizá-lo da melhor maneira e para tirar o máximo proveito e visualizar todas as frentes, rodar também a versão [web](https://github.com/RenatoDTH/GoBarber_Frontend_Web) pois nela é a versão para os provedores e o mobile, a versão para os usuários.


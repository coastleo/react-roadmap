import './App.css'
import React from 'react'
import ComParametro from './components/basicos/ComParametro'
import ComFilhos from './components/basicos/ComFilhos'
import Card from './components/layout/Card'
import Repeticao from './components/basicos/Repeticao'
import Condicional from './components/basicos/Condicional'
import CondicionalIf from './components/basicos/CondicionalIf'

export default (props) =>
    <div className="App">
        <Card titulo="#05 - Com condicional V2">
            <CondicionalIf numero={6}></CondicionalIf>
        </Card>
        <Card titulo="#04 - Com condicional V1">
            <Condicional numero={7}></Condicional>
        </Card>
        <Card titulo="#03 - Com repetição">
            <Repeticao></Repeticao>
        </Card>
        <Card titulo="#02 - Com ComParametro">
            <ComParametro 
                titulo="Esse é o título"
                subtitulo="Esse pé o subtítulo"
            ></ComParametro>
        </Card>
        <Card titulo="#01 - Com Children">
            <ComFilhos>
                <ul>
                    <li>Ozymandias</li>
                    <li>Cleo</li>
                    <li>Brisa</li>
                </ul>
                <ul>
                    <li>Rato</li>
                    <li>Rato</li>
                    <li>Cão</li>
                </ul>
            </ComFilhos>
        </Card>        
        <Card titulo="#00- Texto com Card">
            Velit culpa adipisicing irure officia commodo nostrud exercitation mollit consectetur. Sint reprehenderit cupidatat enim aliqua Lorem mollit. Non ad nostrud velit Lorem in occaecat tempor voluptate et. Laboris quis minim Lorem occaecat sint aliqua esse. Est eu aliquip enim laboris sit pariatur non dolor magna magna. Aute nostrud officia in cupidatat in tempor duis excepteur ipsum. Eu ullamco amet ullamco duis deserunt sunt nulla reprehenderit.
        </Card>
    </div>

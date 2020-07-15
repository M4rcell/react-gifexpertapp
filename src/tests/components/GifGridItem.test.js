import React from 'react';
const { shallow } = require("enzyme")
const { GifGridItem } = require("../../components/GifGridItem")

describe('Pruebas con <GifGridItem/>',()=>{
   
    test('Debe de mostrar el componente correctamente', () => {

        const wraper = shallow(<GifGridItem/>)

        expect(wraper).toMatchSnapshot();
        
    })
    

})
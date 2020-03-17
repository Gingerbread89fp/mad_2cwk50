import React from 'react';
import renderer from 'react-test-renderer';
import Register from '../screens/Register';

describe('<Register />', ()=>{

    test('render Register page correctly', ()=>{
        const reg = renderer.create(<Register />).toJSON()
        expect(reg).toMatchSnapshot();
    })

})
/* eslint-disable react/jsx-indent-props */
/* eslint-disable indent */
/* eslint-disable react/jsx-indent */
import React from 'react';
import { mount, shallow } from 'enzyme';
import Product from '../../components/Product';
import ProviderMock from '../../__mocks__/ProviderMock';
import ProductMock from '../../__mocks__/ProductMock';

describe('<Product />', () => {
    test('Render de product ', () => {
        const product = shallow(
            <ProviderMock>
                <Product />
            </ProviderMock>,
        );
        expect(product.length).toEqual(1);
    });
    test('Comprobar el botón de comprar ', () => {
        const handelAddToCart = jest.fn(); // Simular función para poder utilizarlo sin llamar la función real
        const wrapper = mount(
            <ProviderMock>
                <Product
                    product={ProductMock}
                    handleAddToCart={handelAddToCart}
                />
            </ProviderMock>,
        );
        wrapper.find('button').simulate('click'); // Simular un click
        expect(handelAddToCart).toHaveBeenCalledTimes(1); // Permite saber cuantas veces se ejecuta
    });
});

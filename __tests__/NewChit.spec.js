import React from 'react';
import renderer from 'react-test-renderer';
import mockAsyncStorage from '@react-native-community/async-storage/jest/async-storage-mock';
import { render } from '@testing-library/react-native';
import NewChits from '../screens/NewChits';
import CustomIcon from '../app_components/customizedIconButton';

jest.mock('@react-native-community/async-storage', () => mockAsyncStorage);


const testDraft = 'this is a test draft'
const key = 'draft'

describe('<NewChits />', ()=>{

    it('should render the new chit page', () =>{
        const page = renderer.create(<NewChits />).toJSON()
        expect(page).toMatchSnapshot();
    })

    it('should save draft to storage', ()=>{
        const mockSaveToStorage = jest.fn();
        const { getAllByText } = render(
            <CustomIcon
                name={'content-save'}
                size={10}
                color={'#1F5673'} 
                onPress={mockSaveToStorage} 
            />
        )
        getAllByText('content-save').click();
        expect(mockAsyncStorage.setItem).toBeCalledWith(mockSaveToStorage);
    })

    it('should get item from storage', ()=>{
        expect(mockAsyncStorage.getItem).toBeCalledWith(key);
    })


})
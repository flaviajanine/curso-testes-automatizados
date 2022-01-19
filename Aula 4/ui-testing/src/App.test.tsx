import { render, screen } from '@testing-library/react';
import App from './App';
import * as enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

enzyme.configure({ adapter: new Adapter() });

function setup() {
  return enzyme.shallow(<App />);
}

class Page {
  appElements: any;
  input: any;
  header: any;
  button: any;
  
  constructor(component: any) {
    this.appElements = component.getElement().props.children;
    this.input = this.appElements.find((el: { type: string; }) => el.type === 'input');
    this.header = this.appElements.find((el: { type: string; }) => el.type === 'header');
    this.button = this.appElements.find((el: { type: string; }) => el.type === 'a');
  
  }
}

test('header Developers App to be on screen', () => {
  render(<App />);
  const developerText = screen.getByText(/Developers App/);
  expect(developerText).toBeInTheDocument();
});

test('input label to be on screen', () => {
  render(<App />);
  const labelText = screen.getByText(/Type the skill you would like to search/);
  expect(labelText).toBeInTheDocument();
});

describe('Test page object', () => {

  const component = setup();
  const page = new Page(component);

  test('elements are created correctly', () => {
    expect(page.input.props.id).toBe('input-skill');
    expect(page.input.props.className).toBe('input1');
    expect(page.header.props.className).toBe('App-header');
  });
  
  test('buttons are created correctly', () => {
    expect(page.button.props.id).toBe('search-button');
  });
  
  test('elements are created correctly page object', () => {
    expect(page.input.props.id).toBe('input-skill');
  });
});

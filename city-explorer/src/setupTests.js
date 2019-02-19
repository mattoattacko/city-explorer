
import Enzyme, { shallow, render, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({ adapter: new Adapter() });
'jest'; {
  'setupTestFrameworkScriptFile'; '<rootDir>__tests__/jest-setup.js';
}

global.shallow = shallow;
global.render = render;
global.mount = mount;
global.rootDirectory = __dirname;
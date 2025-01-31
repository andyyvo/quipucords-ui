import React from 'react';
import configureMockStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import { mount, shallow } from 'enzyme';
import { ConnectedAddSourceWizard, AddSourceWizard } from '../addSourceWizard';

describe('AddSourceWizard Component', () => {
  const generateEmptyStore = (obj = {}) => configureMockStore()(obj);

  it('should render a connected component', () => {
    const store = generateEmptyStore({ addSourceWizard: { show: true } });
    const component = shallow(
      <Provider store={store}>
        <ConnectedAddSourceWizard />
      </Provider>
    );

    expect(component.find(ConnectedAddSourceWizard)).toMatchSnapshot('connected');
  });

  it('should display update steps', () => {
    const props = {
      show: true,
      edit: true
    };

    const component = shallow(<AddSourceWizard {...props} />);
    expect(component).toMatchSnapshot('update');
  });

  it('should not display a wizard', () => {
    const props = {
      show: false
    };

    const component = mount(<AddSourceWizard {...props} />);
    expect(component.render()).toMatchSnapshot();
  });

  it('should have specific events defined', () => {
    const props = {
      show: false
    };

    const component = mount(<AddSourceWizard {...props} />);
    const componentInstance = component.instance();

    expect(componentInstance.onCancel).toBeDefined();
    expect(componentInstance.onNext).toBeDefined();
    expect(componentInstance.onBack).toBeDefined();
    expect(componentInstance.onSubmit).toBeDefined();
    expect(componentInstance.onStep).toBeDefined();
  });
});

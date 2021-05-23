import { render } from '@testing-library/react';
import { AlertComponent, AlertComponentXL } from '../';

describe('AlertComponent', () => {
  it('should render AlertComponent with given alert message', () => {
    const alertMessage = "Alert Message"
    const { container } = render(<AlertComponent message={alertMessage} />);

    const alert = container.querySelector('[role="alert"]')
    expect(alert).toHaveTextContent(alertMessage);
  });

  it('should render AlertComponent with given props', () => {
    const alertTitle = "Alert Title"
    const alertMessage = "Alert Message"

    const { container } = render(<AlertComponent title={alertTitle} message={alertMessage} />);

    const alert = container.querySelector('[role="alert"]')
    expect(alert).toHaveTextContent(alertTitle + alertMessage);
  });
})

describe('AlertComponentXL', () => {
  it('should render AlertComponentXL with given alert message', () => {
    const alertMessage = "Alert Message"
    const { container } = render(<AlertComponentXL message={alertMessage} />);

    const alert = container.querySelector('[role="alert"]')
    expect(alert).toHaveTextContent(alertMessage);
  });

  it('should render AlertComponentXL with given props', () => {
    const alertTitle = "Alert Title"
    const alertMessage = "Alert Message"

    const { container } = render(<AlertComponentXL title={alertTitle} message={alertMessage} />);

    const alert = container.querySelector('[role="alert"]')
    expect(alert).toHaveTextContent(alertTitle + alertMessage);
  });
})

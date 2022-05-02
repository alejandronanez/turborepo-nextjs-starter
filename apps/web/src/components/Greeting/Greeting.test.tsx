import { render, screen } from '@testing-library/react';
import { Greeting } from './Greeting';

describe('Greeting component', () => {
  it('should render correctly', () => {
    render(<Greeting />);
    const element = screen.getByText(/Say hi/i);
    expect(element).toBeInTheDocument();
  });
});

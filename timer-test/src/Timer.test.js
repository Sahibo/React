import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'; // Подключаем методы расширения для проверок
import Timer from './Timer'; // Укажите правильный путь к вашему компоненту Timer

describe('Timer Component', () => {
  test('renders without errors with initial time', () => {
    render(<Timer initialTime={60} />);
    const timerElement = screen.getByTestId('timer');
    expect(timerElement).toBeInTheDocument();
    expect(timerElement.textContent).toBe('60');
  });

  test('decreases timer value by 1 every second', async () => {
    render(<Timer initialTime={1} />);
    const timerElement = screen.getByTestId('timer');

    await new Promise((r) => setTimeout(r, 1000));
    expect(timerElement.textContent).toBe('2');
    await new Promise((r) => setTimeout(r, 1000));
    expect(timerElement.textContent).toBe('1');
  });

  test('pauses the timer', async () => {
    render(<Timer initialTime={1} />);
    const timerElement = screen.getByTestId('timer');
    const pauseButton = screen.getByText('Pause');

    fireEvent.click(pauseButton);
    await new Promise((r) => setTimeout(r, 2000));
    expect(timerElement.textContent).toBe('5');
  });

  test('resets the timer to initial value', async () => {
    render(<Timer initialTime={1} />);
    const timerElement = screen.getByTestId('timer');
    const resetButton = screen.getByText('Reset');

    await new Promise((r) => setTimeout(r, 3000));
    fireEvent.click(resetButton);
    expect(timerElement.textContent).toBe('10');
  });


});
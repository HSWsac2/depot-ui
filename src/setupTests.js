// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom';
import MockAdapter from 'axios-mock-adapter';
import axios from 'axios';

jest.mock('react-chartjs-2', () => ({
    Line: () => null
}));

global.mockAdapter = new MockAdapter(axios, { onNoMatch: "throwException" });
import { mock } from 'jest-mock-extended';

const pool = mock();

pool.query.mockResolvedValue([[{ now: new Date().toISOString() }], []]);

export { pool };

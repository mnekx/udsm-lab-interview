import {
  reducedDataItems,
  meetReportRateCrit,
  calcAvgElligibleDataItems,
} from '.';

const yearOne = [
  {
    value: 10,
    name: 'Number of members registered',
    code: 'MEMBER_REGISTERED',
    reportingRate: 10,
  },
  {
    value: 9,
    name: 'Number of active members',
    code: 'ACTIVE_MEMBERS',
    reportingRate: 50,
  },
];

const yearTwo = [
  {
    value: 30,
    name: 'Number of members registered',
    code: 'MEMBER_REGISTERED',
    reportingRate: 70,
  },
  {
    value: 25,
    name: 'Number of active members',
    code: 'ACTIVE_MEMBERS',
    reportingRate: 90,
  },
];

const yearThree = [
  {
    value: 56,
    name: 'Number of members registered',
    code: 'MEMBER_REGISTERED',
    reportingRate: 70,
  },
  {
    value: 43,
    name: 'Number of active members',
    code: 'ACTIVE_MEMBERS',
    reportingRate: 20,
  },
];

const reducerExpectedOutput = [
  {
    value: 86,
    name: 'Number of members registered',
    code: 'MEMBER_REGISTERED',
    changed: 2,
  },
  {
    value: 34,
    name: 'Number of active members',
    code: 'ACTIVE_MEMBERS',
    changed: 2,
  },
];

test('Reporting rate >= 50 returns TRUE', () => {
  expect(meetReportRateCrit(yearThree[0]).toBe(true));
});

import { getProcessedData } from './interview';
const lib = require('../../index');
describe('Given list of 3 year data for DHIS2 Club membership', () => {
  const yearOneData = [
    {
      value: 10,
      name: 'Number of members registered',
      code: 'MEMBER_REGISTERED',
      reportingRate: '10',
    },
    {
      value: 9,
      name: 'Number of active members',
      code: 'ACTIVE_MEMBERS',
      reportingRate: '50',
    },
  ];

  const yearTwoData = [
    {
      value: 30,
      name: 'Number of members registered',
      code: 'MEMBER_REGISTERED',
      reportingRate: '70',
    },
    {
      value: 25,
      name: 'Number of active members',
      code: 'ACTIVE_MEMBERS',
      reportingRate: '90',
    },
  ];

  const yearThreeData = [
    {
      value: 56,
      name: 'Number of members registered',
      code: 'MEMBER_REGISTERED',
      reportingRate: '70',
    },
    {
      value: 43,
      name: 'Number of active members',
      code: 'ACTIVE_MEMBERS',
      reportingRate: '20',
    },
  ];

  it('should return a single list of filltered membership information', () => {
    /**
     * Final Result
     * [
        {
          "value": 43,
          "name": "Number of members registered",
          "code": "MEMBER_REGISTERED"
        },
        {
          "value": 17,
          "name": "Number of active members",
          "code": "ACTIVE_MEMBERS"
        }
      ]

     */
    expect(getProcessedData(yearOneData, yearTwoData, yearThreeData)).toEqual([
      {
        value: 43,
        name: 'Number of members registered',
        code: 'MEMBER_REGISTERED',
      },
      {
        value: 17,
        name: 'Number of active members',
        code: 'ACTIVE_MEMBERS',
      },
    ]);
  });
});

describe('the meetReportRateCrit, give data for a year it', ()=> {
  const yearOneData = [
    {
      value: 10,
      name: 'Number of members registered',
      code: 'MEMBER_REGISTERED',
      reportingRate: '10',
    },
    {
      value: 9,
      name: 'Number of active members',
      code: 'ACTIVE_MEMBERS',
      reportingRate: '50',
    },
  ];
  it('should return true if reportingRate >= 50', () => {
    expect(lib.meetReportRateCrit(yearOneData[1])).toBe(true)
  })
  it('should return false if reportingRate < 50', () => {
    expect(lib.meetReportRateCrit(yearOneData[0])).toBe(false)
  })
})

describe('The reducedDataItems, Given list of 3 year data for DHIS2 Club membership', () => {
  const yearOneData = [
    {
      value: 10,
      name: 'Number of members registered',
      code: 'MEMBER_REGISTERED',
      reportingRate: '10',
    },
    {
      value: 9,
      name: 'Number of active members',
      code: 'ACTIVE_MEMBERS',
      reportingRate: '50',
    },
  ];

  const yearTwoData = [
    {
      value: 30,
      name: 'Number of members registered',
      code: 'MEMBER_REGISTERED',
      reportingRate: '70',
    },
    {
      value: 25,
      name: 'Number of active members',
      code: 'ACTIVE_MEMBERS',
      reportingRate: '90',
    },
  ];

  const yearThreeData = [
    {
      value: 56,
      name: 'Number of members registered',
      code: 'MEMBER_REGISTERED',
      reportingRate: '70',
    },
    {
      value: 43,
      name: 'Number of active members',
      code: 'ACTIVE_MEMBERS',
      reportingRate: '20',
    },
  ];
  it('shoud return accumulated object with the sum of good metrics values', () => {
    expect(lib.reducedDataItems([yearOneData, yearTwoData, yearThreeData])).toEqual([
      {
        value: 86,
        name: 'Number of members registered',
        code: 'MEMBER_REGISTERED',
        changed: 2
      },
      {
        value: 34,
        name: 'Number of active members',
        code: 'ACTIVE_MEMBERS',
        changed: 2
      },
    ]);
  })
})

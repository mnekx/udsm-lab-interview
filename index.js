const meetReportRateCrit = (dataItem) => dataItem.reportingRate >= 50;
const reducedDataItems = (items = []) => {
  const initial = [
    {
      value: 0,
      name: 'Number of members registered',
      code: 'MEMBER_REGISTERED',
    },
    {
      value: 0,
      name: 'Number of active members',
      code: 'ACTIVE_MEMBERS',
    },
  ];
  if (items.length !== 0) {
    const result = items.reduce((prevArr, currYear) => {
        if(meetReportRateCrit(currYear[0])){
            prevArr[0].value = prevArr[0].value + currYear[0].value
            prevArr[0].changed = typeof prevArr[0].changed == 'number'?prevArr[0].changed + 1 : 1
        }
        if(meetReportRateCrit(currYear[1])){
            prevArr[1].value = prevArr[1].value + currYear[1].value
            prevArr[1].changed = typeof prevArr[1].changed == 'number'?prevArr[1].changed + 1 : 1
        }
      return prevArr;
    }, initial);
    return result;
  }
  return initial;
};
const calcAvgElligibleDataItems = (
  yearOne = [],
  yearTwo = [],
  yearThree = []
) => {
  if (yearOne === []) {
    yearOne = [
      {
        value: 0,
        name: 'Number of members registered',
        code: 'MEMBER_REGISTERED',
        reportingRate: 0,
      },
      {
        value: 0,
        name: 'Number of active members',
        code: 'ACTIVE_MEMBERS',
        reportingRate: 0,
      },
    ];
  }
  if (yearTwo === []) {
    yearTwo = [
      {
        value: 0,
        name: 'Number of members registered',
        code: 'MEMBER_REGISTERED',
        reportingRate: 0,
      },
      {
        value: 0,
        name: 'Number of active members',
        code: 'ACTIVE_MEMBERS',
        reportingRate: 0,
      },
    ];
  }
  if (yearThree === []) {
    yearThree = [
      {
        value: 0,
        name: 'Number of members registered',
        code: 'MEMBER_REGISTERED',
        reportingRate: 0,
      },
      {
        value: 0,
        name: 'Number of active members',
        code: 'ACTIVE_MEMBERS',
        reportingRate: 0,
      },
    ];
  }
  const totalOfGoodMetrics = reducedDataItems([yearOne, yearTwo, yearThree]);
  const result = totalOfGoodMetrics.map(metric=>{
      if(metric.changed) {
          metric.value = Math.round(metric.value/metric.changed);
          delete metric.changed;
      }
      return metric
  })
  return result;
};

module.exports = { calcAvgElligibleDataItems, meetReportRateCrit, reducedDataItems };
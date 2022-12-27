export const makeGraphArray = (valuesObject) => {
  let correctGraphDetails = {
    rejected: [
      valuesObject.currentMonth.rejected,
      valuesObject.preMonth.rejected,
      valuesObject.pre2Month.rejected,
      valuesObject.currentYear.rejected,
      valuesObject.preYear.rejected,
    ],
    onHold: [
      valuesObject.currentMonth.onHold,
      valuesObject.preMonth.onHold,
      valuesObject.pre2Month.onHold,
      valuesObject.currentYear.onHold,
      valuesObject.preYear.onHold,
    ],
    shortlisted: [
      valuesObject.currentMonth.shortlisted,
      valuesObject.preMonth.shortlisted,
      valuesObject.pre2Month.shortlisted,
      valuesObject.currentYear.shortlisted,
      valuesObject.preYear.shortlisted,
    ],
    applications: [
      valuesObject.currentMonth.applications,
      valuesObject.preMonth.applications,
      valuesObject.pre2Month.applications,
      valuesObject.currentYear.applications,
      valuesObject.preYear.applications,
    ],
  };

  return correctGraphDetails;
};

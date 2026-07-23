export function PayRatesSection() {
  return (
    <div className="workflow-content ch-pay-rates">
      <p>
        This page provides the most up-to-date and current compensation
        information for{" "}
        <strong className="ch-pay-brand">Project Copperhead</strong>. If any
        additional compensation-related information is disseminated or
        introduced, this page will be updated accordingly.
      </p>

      <table className="ch-pay-table" aria-label="EC Submitter Role rates">
        <thead>
          <tr className="ch-pay-role-row ch-pay-role-row--submitter">
            <th colSpan={4}>EC Submitter Role</th>
          </tr>
          <tr className="ch-pay-colhead-row">
            <th scope="col">Task Type</th>
            <th scope="col">Rate</th>
            <th scope="col">Qualifier</th>
            <th scope="col">Time Period</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Copperhead_Pilot</td>
            <td>$35.00</td>
            <td>Accepted Submission</td>
            <td>&mdash;</td>
          </tr>
          <tr>
            <td>bonus</td>
            <td>$15</td>
            <td>Accepted submission</td>
            <td>Valid 07/23 to 07/26 11:59PM PST</td>
          </tr>
        </tbody>
      </table>

      <table className="ch-pay-table" aria-label="EC Reviewer Role rates">
        <thead>
          <tr className="ch-pay-role-row ch-pay-role-row--reviewer">
            <th colSpan={3}>EC Reviewer Role</th>
          </tr>
          <tr className="ch-pay-colhead-row">
            <th scope="col">Task Type</th>
            <th scope="col">Rate</th>
            <th scope="col">Qualifier</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Copperhead_Pilot</td>
            <td>$15.00</td>
            <td>Review Performed</td>
          </tr>
        </tbody>
      </table>

      <table
        className="ch-pay-table ch-pay-table--bonuses"
        aria-label="Limited Time Bonuses"
      >
        <thead>
          <tr className="ch-pay-role-row ch-pay-role-row--bonuses">
            <th colSpan={4}>Limited Time Bonuses</th>
          </tr>
          <tr className="ch-pay-colhead-row">
            <th scope="col">Task Type</th>
            <th scope="col">Additional Pay</th>
            <th scope="col">Qualifier</th>
            <th scope="col">Time Frame</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Copperhead_Pilot</td>
            <td>$15.00</td>
            <td>Accepted Submission</td>
            <td>07/23/2026 9:00 AM PST - 07/26/2026 11:59 PM PST</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

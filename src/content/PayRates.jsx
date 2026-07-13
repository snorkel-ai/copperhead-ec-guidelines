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
            <th colSpan={3}>EC Submitter Role</th>
          </tr>
          <tr className="ch-pay-colhead-row">
            <th scope="col">Task Type</th>
            <th scope="col">Rate</th>
            <th scope="col">Qualifier</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
          </tr>
          <tr>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
          </tr>
          <tr>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
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
            <td>&nbsp;</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
          </tr>
          <tr>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
          </tr>
          <tr>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

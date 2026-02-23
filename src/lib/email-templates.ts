interface QuoteData {
  company: string;
  contactName: string;
  email: string;
  phone: string;
  industry: string;
  productType: string;
  volume: string;
  description: string;
}

interface CareerData {
  fullName: string;
  email: string;
  phone: string;
  comments?: string;
  cvFileName?: string;
}

function wrapInLayout(title: string, body: string): string {
  return `<!DOCTYPE html>
<html>
<head><meta charset="utf-8" /></head>
<body style="margin:0;padding:0;background:#f4f5f7;font-family:Arial,Helvetica,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#f4f5f7;padding:32px 0;">
    <tr><td align="center">
      <table width="600" cellpadding="0" cellspacing="0" style="background:#ffffff;border-radius:8px;overflow:hidden;">
        <tr>
          <td style="background:#0f172a;padding:24px 32px;">
            <h1 style="margin:0;color:#ffffff;font-size:20px;">${title}</h1>
          </td>
        </tr>
        <tr>
          <td style="padding:32px;">
            ${body}
          </td>
        </tr>
        <tr>
          <td style="padding:16px 32px;background:#f8fafc;color:#94a3b8;font-size:12px;text-align:center;">
            Meraki Industries &mdash; Automated notification
          </td>
        </tr>
      </table>
    </td></tr>
  </table>
</body>
</html>`;
}

function row(label: string, value: string): string {
  return `<tr>
    <td style="padding:8px 12px;font-size:13px;color:#64748b;white-space:nowrap;vertical-align:top;">${label}</td>
    <td style="padding:8px 12px;font-size:14px;color:#0f172a;">${value}</td>
  </tr>`;
}

export function buildQuoteEmailHtml(data: QuoteData): string {
  const body = `
    <table width="100%" cellpadding="0" cellspacing="0" style="border:1px solid #e2e8f0;border-radius:6px;">
      ${row("Company", data.company)}
      ${row("Contact Name", data.contactName)}
      ${row("Email", data.email)}
      ${row("Phone", data.phone)}
      ${row("Industry", data.industry)}
      ${row("Product Type", data.productType)}
      ${row("Est. Volume", data.volume)}
      ${row("Description", data.description)}
    </table>`;
  return wrapInLayout("New Quote Request", body);
}

export function buildCareerEmailHtml(data: CareerData): string {
  const rows = [
    row("Full Name", data.fullName),
    row("Email", data.email),
    row("Phone", data.phone),
  ];
  if (data.comments) {
    rows.push(row("Comments", data.comments));
  }
  if (data.cvFileName) {
    rows.push(row("CV", `📎 ${data.cvFileName} (attached)`));
  }

  const body = `
    <table width="100%" cellpadding="0" cellspacing="0" style="border:1px solid #e2e8f0;border-radius:6px;">
      ${rows.join("")}
    </table>`;
  return wrapInLayout("New Career Application", body);
}

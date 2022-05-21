function email() {
  const obj = {
    htmlSus: `<!DOCTYPE html>
        <html lang="en" xmlns="http://www.w3.org/1999/xhtml" xmlns:o="urn:schemas-microsoft-com:office:office">
        
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width,initial-scale=1">
            <meta name="x-apple-disable-message-reformatting">
            <title></title>
            <!--[if mso]>
          <noscript>
            <xml>
              <o:OfficeDocumentSettings>
                <o:PixelsPerInch>96</o:PixelsPerInch>
              </o:OfficeDocumentSettings>
            </xml>
          </noscript>
          <![endif]-->
            <style>
                table,
                td,
                div,
                h1,
                p {
                    font-family: Arial, sans-serif;
                }
            </style>
        </head>
        
        <body style="margin:0;padding:0;">
            <table role="presentation"
                style="width:100%;border-collapse:collapse;border:0;border-spacing:0;background:#ffffff;">
                <tr>
                    <td align="center" style="padding:0;">
                        <table role="presentation"
                            style="width:602px;border-collapse:collapse;border:1px solid #cccccc;border-spacing:0;text-align:left;">
                            <tr>
                                <td align="center" style="padding:40px 0 30px 0;background:#70bbd9;">
                                    <img src="https://scontent.ftfn1-1.fna.fbcdn.net/v/t1.6435-9/83077045_2425920147514737_1722746236085207040_n.png?_nc_cat=101&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=a9bn5QoSdYcAX_UAQLt&_nc_ht=scontent.ftfn1-1.fna&oh=00_AT_MPRI52AwsxVDeihNkV0VeeNGqEgkYOBCy-tvofqrhUQ&oe=62B03E64"
                                        alt="" width="300" style="height:auto;display:block; border-radius: 50%;" />
                                </td>
                            </tr>
                            <tr>
                                <td style="padding:36px 30px 42px 30px;">
                                    <table role="presentation"
                                        style="width:100%;border-collapse:collapse;border:0;border-spacing:0;">
                                        <tr>
                                            <td style="padding:0 0 36px 0;color:#153643;">
                                                <h1
                                                    style="font-size:24px;margin:0 0 20px 0;font-family:Arial,sans-serif; text-align: center;">
                                                    Gracias por suscribirte a Tejidos Martín</h1>
                                                <p
                                                    style="margin:0 0 12px 0;font-size:16px;line-height:24px;font-family:Arial,sans-serif;">
                                                    Al suscribirte a nosotros podrás estar al día de las nuevas incorporaciones
                                                    que hacemos en nuestra tienda, al mismo tiempo
                                                    también podrás estar al tanto de los eventos que hagamos y mucho más.</p>
        
                                            </td>
                                        </tr>
        
                                    </table>
                                </td>
                            </tr>
                            <tr>
                                <td style="padding:30px;background:#ee4c50;">
                                    <table role="presentation"
                                        style="width:100%;border-collapse:collapse;border:0;border-spacing:0;font-size:9px;font-family:Arial,sans-serif;">
                                        <tr>
                                            <td style="padding:0;width:50%;" align="left">
                                                <p
                                                    style="margin:0;font-size:14px;line-height:16px;font-family:Arial,sans-serif;color:#ffffff;">
                                                    &reg; Tejidos Martín 2022<br />
                                                </p>
                                            </td>
                                            <td style="padding:0;width:50%;" align="right">
                                                <table role="presentation"
                                                    style="border-collapse:collapse;border:0;border-spacing:0;">
                                                    <tr>
                                                        <td style="padding:0 0 0 10px;width:38px;">
                                                            <a href="https://es-es.facebook.com/tejidosmartin/"
                                                                style="color:#ffffff;"><img
                                                                    src="https://assets.codepen.io/210284/fb_1.png"
                                                                    alt="Facebook" width="38"
                                                                    style="height:auto;display:block;border:0;" /></a>
                                                        </td>
                                                    </tr>
                                                </table>
                                            </td>
                                        </tr>
                                    </table>
                                </td>
                            </tr>
                        </table>
                    </td>
                </tr>
            </table>
        </body>
        
        </html>`,
    subjectSus: "Gracias por suscribirte a Tejidos Martín",
  };

  return obj;
}

module.exports = { email };
